module.exports = app => {

  class AuthController extends app.Controller {

    // return current user auth info
    //   { op:{id},agent:{id},provider}
    async echo() {
      const info = await this.ctx.bean.auth.echo();
      this.ctx.success(info);
    }

    async check() {
      const info = await this.ctx.bean.auth.check();
      this.ctx.success(info);
    }

    async logout() {
      const info = await this.ctx.bean.auth.logout();
      this.ctx.success(info);
    }

    async installAuthProviders() {
      // register all authProviders
      await this.ctx.service.auth.installAuthProviders();
      // verify
      this.app.passport.verify(async (ctx, profileUser) => {
        // state: login/associate
        const state = ctx.request.query.state || 'login';
        // user verify
        return await ctx.bean.user.verify({ state, profileUser });
      });
      // serializeUser
      this.app.passport.serializeUser(async (ctx, user) => {
        ctx.state.user = user;
        const _user = {
          op: { id: user.op.id, iid: user.op.iid, anonymous: user.op.anonymous },
          provider: user.provider,
        };
        if (user.agent.id !== user.op.id) {
          _user.agent = { id: user.agent.id, iid: user.agent.iid, anonymous: user.agent.anonymous };
        }
        return _user;
      });
      // deserializeUser
      this.app.passport.deserializeUser(async (ctx, user) => {
        return user;
      });
      // ok
      this.ctx.success();
    }

  }

  return AuthController;
};
