module.exports = ctx => {
  const moduleInfo = ctx.app.meta.mockUtil.parseInfoFromPackage(__dirname);
  class Stats {

    async execute(context) {
      const { user } = context;
      const modelStar = ctx.model.module(moduleInfo.relativeName).atomStar;
      return await modelStar.count({
        userId: user.id,
        star: 1,
      });
    }

  }

  return Stats;
};
