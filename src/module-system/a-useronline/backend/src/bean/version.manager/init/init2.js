module.exports = function (ctx) {
  // const moduleInfo = ctx.app.meta.mockUtil.parseInfoFromPackage(__dirname);
  class VersionInit {
    async run(options) {
      // add role rights
      const roleRights = [
        // custom
        { roleName: 'system', action: 'loginLog', scopeNames: 'authenticated' },
      ];
      await ctx.bean.role.addRoleRightBatch({ atomClassName: 'userOnline', roleRights });
    }
  }

  return VersionInit;
};