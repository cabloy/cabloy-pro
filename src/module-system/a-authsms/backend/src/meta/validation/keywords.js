const keywords = {};
keywords.exists = {
  async: true,
  type: 'string',
  errors: true,
  compile() {
    return async function (data, path, rootData, name) {
      const ctx = this;
      const res = await ctx.bean.user.exists({ [name]: data });
      if (res && res.id !== ctx.state.user.agent.id) {
        const errors = [{ keyword: 'x-exists', params: [], message: ctx.text('Element Exists') }];
        throw new ctx.app.meta.ajv.ValidationError(errors);
      }
      if (!res && data.indexOf('__') > -1) {
        const errors = [{ keyword: 'x-exists', params: [], message: ctx.text('Cannot Contain __') }];
        throw new ctx.app.meta.ajv.ValidationError(errors);
      }
      return true;
    };
  },
};
module.exports = keywords;
