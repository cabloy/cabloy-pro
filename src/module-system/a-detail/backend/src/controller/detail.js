module.exports = app => {

  class DetailController extends app.Controller {

    async create() {
      const res = await this.ctx.service.detail.create({
        atomKey: this.ctx.request.body.atomKey,
        detailClass: this.ctx.request.body.detailClass,
        item: this.ctx.request.body.item,
        user: this.ctx.state.user.op,
      });
      this.ctx.success(res);
    }

    async write() {
      const options = { ignoreValidate: false };
      await this.ctx.service.detail.write({
        key: this.ctx.request.body.key,
        item: this.ctx.request.body.item,
        user: this.ctx.state.user.op,
        options,
      });
      this.ctx.success();
    }

  }
  return DetailController;
};

