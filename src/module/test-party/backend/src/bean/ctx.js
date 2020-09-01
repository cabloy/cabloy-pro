module.exports = ctx => {
  class ctxBean {

    actionSync({ a, b }) {
      return a + b;
    }

    async actionAsync({ a, b }) {
      return Promise.resolve(a + b);
    }


  }

  return ctxBean;
};
