module.exports = app => {

  class AtomController extends app.Controller {

    async create() {
      const res = await this.ctx.service.atom.create({
        atomClass: this.ctx.request.body.atomClass,
        user: this.ctx.user.op,
      });
      this.ctx.success(res);
    }

    async read() {
      const res = await this.ctx.service.atom.read({
        key: this.ctx.request.body.key,
        user: this.ctx.user.op,
      });
      this.ctx.success(res);
    }

    // options
    //   where, orders, page, star, label
    async select() {
      const options = this.ctx.request.body.options;
      options.page = this.ctx.meta.util.page(options.page);
      const items = await this.ctx.service.atom.select({
        atomClass: this.ctx.request.body.atomClass,
        options,
        user: this.ctx.user.op,
      });
      this.ctx.successMore(items, options.page.index, options.page.size);
    }

    async write() {
      await this.ctx.service.atom.write({
        key: this.ctx.request.body.key,
        item: this.ctx.request.body.item,
        validation: this.ctx.request.body.validation,
        user: this.ctx.user.op,
      });
      this.ctx.success();
    }

    async submit() {
      await this.write();
      await this.enable();
      this.ctx.success();
    }

    async delete() {
      await this.ctx.service.atom.delete({
        key: this.ctx.request.body.key,
        user: this.ctx.user.op,
      });
      this.ctx.success();
    }

    async action() {
      const res = await this.ctx.service.atom.action({
        action: this.ctx.request.body.action,
        key: this.ctx.request.body.key,
        user: this.ctx.user.op,
      });
      this.ctx.success(res);
    }

    async enable() {
      // only allowed: draft
      const key = this.ctx.request.body.key;
      const user = this.ctx.user.op;
      const atom = await this.ctx.meta.atom._get({ atom: { id: key.atomId }, user });
      if (atom.atomEnabled || user.id !== atom.userIdCreated) this.ctx.throw(403);
      // enable
      const res = await this.ctx.service.atom.enable({
        key,
        atom: { atomEnabled: 1 },
        user,
      });
      this.ctx.success(res);
    }

    async star() {
      const res = await this.ctx.service.atom.star({
        key: this.ctx.request.body.key,
        atom: this.ctx.request.body.atom,
        user: this.ctx.user.op,
      });
      this.ctx.success(res);
    }

    async starP() {
      // data
      const data = JSON.parse(this.ctx.request.query.data);
      // select
      const res = await this.ctx.performAction({
        method: 'post',
        url: 'atom/star',
        body: data,
      });
      this.ctx.success(res);
    }

    async readCount() {
      const res = await this.ctx.service.atom.readCount({
        key: this.ctx.request.body.key,
        atom: this.ctx.request.body.atom,
        user: this.ctx.user.op,
      });
      this.ctx.success(res);
    }

    async readCountP() {
      // data
      const data = JSON.parse(this.ctx.request.query.data);
      // select
      const res = await this.ctx.performAction({
        method: 'post',
        url: 'atom/readCount',
        body: data,
      });
      this.ctx.success(res);
    }

    async statsP() {
      // atomIds
      const atomIds = JSON.parse(this.ctx.request.query.data);
      const options = {
        where: {
          'a.id': { op: 'in', val: atomIds },
        },
      };
      // select
      const res = await this.ctx.meta.atom.select({
        options, user: this.ctx.user.op, pageForce: false,
      });
      this.ctx.success(res);
    }

    async labels() {
      const res = await this.ctx.service.atom.labels({
        key: this.ctx.request.body.key,
        atom: this.ctx.request.body.atom,
        user: this.ctx.user.op,
      });
      this.ctx.success(res);
    }

    async actions() {
      const res = await this.ctx.service.atom.actions({
        key: this.ctx.request.body.key,
        basic: this.ctx.request.body.basic,
        user: this.ctx.user.op,
      });
      this.ctx.success(res);
    }

    async schema() {
      const res = await this.ctx.service.atom.schema({
        atomClass: this.ctx.request.body.atomClass,
        schema: this.ctx.request.body.schema,
      });
      this.ctx.success(res);
    }

    async validator() {
      const res = await this.ctx.service.atom.validator({
        atomClass: this.ctx.request.body.atomClass,
      });
      this.ctx.success(res);
    }

  }
  return AtomController;
};

