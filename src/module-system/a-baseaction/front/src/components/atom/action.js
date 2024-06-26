import Vue from 'vue';
import ActionCreate from './action/actionCreate.js';
import ActionRead from './action/actionRead.js';
import ActionDelete from './action/actionDelete.js';
import ActionSave from './action/actionSave.js';
import ActionSubmit from './action/actionSubmit.js';
import ActionWrite from './action/actionWrite.js';
import ActionClone from './action/actionClone.js';
import ActionFormal from './action/actionFormal.js';
import ActionDraft from './action/actionDraft.js';
import ActionSelectLocale from './action/actionSelectLocale.js';
import ActionSelectResourceType from './action/actionSelectResourceType.js';
import ActionEnable from './action/actionEnable.js';
import ActionDisable from './action/actionDisable.js';
import ActionViewWorkflow from './action/actionViewWorkflow.js';
import ActionViewHistory from './action/actionViewHistory.js';
import ActionLayout from './action/actionLayout.js';
import ActionOpenDetailList from './action/actionOpenDetailList.js';
import ActionMoveDown from './action/actionMoveDown.js';
import ActionMoveUp from './action/actionMoveUp.js';
import ActionPerformAction from './action/actionPerformAction.js';

const ebActionBase = Vue.prototype.$meta.module.get('a-base').options.mixins.ebActionBase;

export default {
  meta: {
    global: false,
  },
  mixins: [
    ebActionBase, //
    ActionCreate,
    ActionRead,
    ActionDelete,
    ActionSave,
    ActionSubmit,
    ActionWrite,
    ActionClone,
    ActionFormal,
    ActionDraft,
    ActionSelectLocale,
    ActionSelectResourceType,
    ActionEnable,
    ActionDisable,
    ActionViewWorkflow,
    ActionViewHistory,
    ActionLayout,
    ActionOpenDetailList,
    ActionMoveDown,
    ActionMoveUp,
    ActionPerformAction,
  ],
  methods: {
    async onAction() {
      const { action } = this.$props;
      const actionName = action.actionName || action.name;
      if (actionName === 'create' || action.action === 'create') {
        return await this._onActionCreate();
      } else if (actionName === 'read') {
        return await this._onActionRead();
      } else if (actionName === 'delete') {
        return await this._onActionDelete();
      } else if (actionName === 'save') {
        return await this._onActionSave();
      } else if (actionName === 'submit') {
        return await this._onActionSubmit();
      } else if (actionName === 'write') {
        return await this._onActionWrite();
      } else if (actionName === 'clone') {
        return await this._onActionClone();
      } else if (actionName === 'formal') {
        return await this._onActionFormal();
      } else if (actionName === 'draft') {
        return await this._onActionDraft();
      } else if (actionName === 'selectLocale') {
        return await this._onActionSelectLocale();
      } else if (actionName === 'selectResourceType') {
        return await this._onActionSelectResourceType();
      } else if (actionName === 'enable') {
        return await this._onActionEnable();
      } else if (actionName === 'disable') {
        return await this._onActionDisable();
      } else if (actionName === 'viewWorkflow') {
        return await this._onActionViewWorkflow();
      } else if (actionName === 'viewHistory') {
        return await this._onActionViewHistory();
      } else if (actionName === 'layout') {
        return await this._onActionLayout();
      } else if (actionName === 'openDetailList') {
        return await this._onActionOpenDetailList();
      } else if (actionName === 'moveDown') {
        return await this._onActionMoveDown();
      } else if (actionName === 'moveUp') {
        return await this._onActionMoveUp();
      }
      return await this._onActionPerformAction();
      // throw new Error(`action handler not found: ${actionName}`);
    },
    async _onActionReadGeneral({ atomId }) {
      const { ctx, item } = this.$props;
      const actionsAll = await ctx.$store.dispatch('a/base/getActions');
      let actionRead = actionsAll[item.module][item.atomClassName].read;
      actionRead = ctx.$utils.extend({}, actionRead);
      await ctx.$meta.util.performAction({ ctx, action: actionRead, item: { atomId } });
    },
  },
};
