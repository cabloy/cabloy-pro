export default {
  methods: {
    async _onActionResetClientSecret() {
      const { ctx, item } = this.$props;
      // hide
      await ctx.$view.dialog.confirm();
      const key = { atomId: item.atomId, itemId: item.itemId };
      await ctx.$api.post('/a/authopen/authOpen/resetClientSecret', { key });
      ctx.$meta.eventHub.$emit('atom:action', { key, action: { name: 'save' } });
    },
  },
};