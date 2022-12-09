import Vue from 'vue';
import roleItemBase from '../../components/role/roleItemBase.js';
import pageRender from './add_render.jsx';
const ebAtomActions = Vue.prototype.$meta.module.get('a-base').options.mixins.ebAtomActions;
export default {
  mixins: [roleItemBase, ebAtomActions, pageRender],
  data() {
    return {
      atomClass: null,
      actionName: '',
      actionSelectOptions: null,
      scopeSelf: true,
      scope: null,
    };
  },
  computed: {
    ready() {
      return this.role && this.actionsAll;
    },
    scopeTitle() {
      if (!this.scope) return null;
      return this.scope.map(item => item.atomNameLocale).join(',');
    },
    scopeSelfEnable() {
      const action = this.actionCurrent;
      if (!action) return false;
      return !action.bulk;
    },
    scopeEnable() {
      const action = this.actionCurrent;
      if (!action) return false;
      return !action.bulk && !this.scopeSelf;
    },
    areaScopeEnable() {},
    actionCurrent() {
      if (!this.atomClass || !this.actionName) return null;
      return this.getAction({
        module: this.atomClass.module,
        atomClassName: this.atomClass.atomClassName,
        name: this.actionName,
      });
    },
    isOpenAuthScope() {
      return this.role && this.role.roleTypeCode === 6;
    },
  },
  watch: {
    atomClass() {
      this.actionName = '';
      this.loadActionSelectOptions();
    },
  },
  methods: {
    onFormSubmit() {
      this.$refs.buttonSubmit.onClick();
    },
    onSelectAtomClass() {
      this.$view.navigate('/a/basefront/atom/selectAtomClass', {
        target: '_self',
        context: {
          params: {
            atomClass: this.atomClass,
            optional: true,
            inner: null,
            user: true,
          },
          callback: (code, data) => {
            if (code === 200) {
              this.atomClass = data;
            }
          },
        },
      });
    },
    onSelectScope() {
      this.$view.navigate('/a/baseadmin/role/select', {
        target: '_self',
        context: {
          params: {
            roleIdStart: null,
            multiple: true,
            roleTypes: [0, 1, 2, 3, 4],
          },
          callback: (code, roles) => {
            if (code === 200) {
              this.scope = roles;
            }
          },
        },
      });
    },
    async onSave() {
      const action = this.actionCurrent;
      if (!action) return;
      await this.$api.post('atomRight/add', {
        key: this.roleKey,
        atomClass: this.atomClass,
        actionCode: parseInt(action.code),
        scopeSelf: this.scopeSelf,
        scope: this.scope ? this.scope.map(item => item.itemId) : [],
      });
      this.$meta.eventHub.$emit('atomRight:add', { roleId: this.roleId });
      this.$f7router.back();
    },
    async loadActionSelectOptions() {
      //
      const actions = this.getActionsOfAtomClass(this.atomClass);
      const actionsUser = await this.$api.post('/a/base/atomClass/actionsUser', {
        atomClass: this.atomClass,
      });
      //
      const groupAtom = { title: 'Atom Actions', options: [] };
      const groupBulk = { title: 'Bulk Actions', options: [] };
      for (const key in actions) {
        const action = actions[key];
        if (!actionsUser.find(item => item.action === action.code)) continue;
        if (action.authorize === false) continue;
        const option = { title: action.titleLocale, value: key };
        if (action.code === 1 || !action.bulk) {
          groupAtom.options.push(option);
        } else {
          groupBulk.options.push(option);
        }
      }
      this.actionSelectOptions = [groupAtom, groupBulk];
    },
  },
};
