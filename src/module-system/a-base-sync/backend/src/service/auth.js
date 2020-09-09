module.exports = app => {

  class Auth extends app.Service {

    // register all authProviders
    async installAuthProviders() {
      // registerAllRouters
      this.ctx.bean.auth._registerAllRouters();
      // registerAllProviders
      await this.ctx.bean.auth._registerAllProviders();
    }

  }

  return Auth;
};
