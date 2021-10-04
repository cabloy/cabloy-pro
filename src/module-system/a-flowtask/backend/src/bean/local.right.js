module.exports = ctx => {
  const moduleInfo = ctx.app.meta.mockUtil.parseInfoFromPackage(__dirname);
  class Right {
    _check_notDone({ flowTask }) {
      const flowTaskId = flowTask.flowTaskId || flowTask.id;
      // not complete
      if (flowTask.flowTaskStatus === 1) {
        ctx.throw.module(moduleInfo.relativeName, 1002, flowTaskId);
      }
    }
    _check_sameUser({ flowTask, user }) {
      const flowTaskId = flowTask.flowTaskId || flowTask.id;
      // must be the same user
      if (user && user.id !== 0 && user.id !== flowTask.userIdAssignee) {
        ctx.throw.module(moduleInfo.relativeName, 1002, flowTaskId);
      }
    }
    async _getNodeOptions({ flowTask, nodeInstance }) {
      if (!nodeInstance) {
        nodeInstance = await ctx.bean.flow._loadFlowNodeInstance({ flowNodeId: flowTask.flowNodeId });
      }
      return ctx.bean.flowTask._getNodeDefOptionsTask({ nodeInstance });
    }
    async claim({ flowTask, user }) {
      // not complete
      this._check_notDone({ flowTask });
      // must be the same user
      this._check_sameUser({ flowTask, user });
      // check: not throw error
      // if (flowTask.timeClaimed) ctx.throw.module(moduleInfo.relativeName, 1003, flowTaskId);
      if (flowTask.timeClaimed) {
        return { timeClaimed: flowTask.timeClaimed };
      }
    }
    async forward({ flowTask, user, nodeInstance }) {
      const flowTaskId = flowTask.flowTaskId || flowTask.id;
      // not complete
      this._check_notDone({ flowTask });
      // must be the same user
      this._check_sameUser({ flowTask, user });
      // options
      const options = await this._getNodeOptions({ flowTask, nodeInstance });
      if (!options.allowForward || flowTask.userIdForwardTo) {
        ctx.throw.module(moduleInfo.relativeName, 1012, flowTaskId);
      }
    }
  }

  return Right;
};
