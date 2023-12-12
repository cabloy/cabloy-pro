export default {
  meta: {
    global: false,
  },
  props: {
    layoutManager: {
      type: Object,
    },
    blockConfig: {
      type: Object,
    },
    blockOptions: {
      type: Object,
    },
  },
  data() {
    return {
      tabs: [],
    };
  },
  computed: {
    form() {
      const filterData = this.$meta.util.getProperty(this.layoutManager, 'filter.data');
      return filterData.form;
    },
    atomClass() {
      return this.form.atomClass;
    },
    stage() {
      return this.form.stage;
    },
  },
  mounted() {
    this.__init();
  },
  methods: {
    async __init() {
      await this.__initTabs();
    },
    async __initTabs() {
      const stageCurrent = this.layoutManager.base_getCurrentStage();
      const tabsUse = this.blockOptions.left.tabsUse;
      for (const tabName of tabsUse) {
        const tabOptions = this.blockOptions.left.tabs[tabName];
        // check stage
        if (!this.__checkStageValid(stageCurrent, tabOptions.stage)) continue;
        // dict key
        const dictKey = await this.__initTabDictKey({ tabName, tabOptions });
        console.log(dictKey);
      }
    },
    __checkStageValid(stageCurrent, stage) {
      if (!stageCurrent || !stage) return true;
      const parts = stage.split(',');
      return parts.includes(stageCurrent);
    },
    async __initTabDictKey({ tabName /* , tabOptions*/ }) {
      // special for atomState
      if (tabName === 'atomState') {
        const useStoreAtomState = await this.$store.use('a/basestore/atomState');
        const dict = await useStoreAtomState.getDict({
          atomClass: this.atomClass,
          atomStage: this.stage,
        });
        return dict && dict.dictKey;
      }
      // from atomClassBase
      const useStoreAtomClasses = await this.$store.use('a/basestore/atomClasses');
      const atomClassBase = await useStoreAtomClasses.getAtomClassBase({ atomClass: this.atomClass });
      return this.$meta.util.getProperty(atomClassBase, `fields.dicts.${tabName}.dictKey`);
    },
    async onPolicy() {
      await this.__init();
      return false;
    },
    _renderActionsLeft() {
      let domBulkActionsLeft;
      if (this.layoutManager.bulk_renderActionsLeft) {
        domBulkActionsLeft = this.layoutManager.bulk_renderActionsLeft();
      }
      return <div class="actions-block actions-block-left">{domBulkActionsLeft}</div>;
    },
    _renderActionsRight() {
      let domBulkActionsRight;
      if (this.layoutManager.bulk_renderActionsRight) {
        domBulkActionsRight = this.layoutManager.bulk_renderActionsRight();
      }
      return <div class="actions-block actions-block-right">{domBulkActionsRight}</div>;
    },
  },
  render() {
    return (
      <f7-subnavbar>
        <div>ssss</div>
        <div class="atom-list-subnavbar-container">
          {this._renderActionsLeft()}
          {this._renderActionsRight()}
        </div>
      </f7-subnavbar>
    );
  },
};
