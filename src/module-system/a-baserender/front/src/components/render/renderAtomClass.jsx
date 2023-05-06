export default {
  props: {
    context: {
      type: Object,
    },
  },
  data() {
    return {
      atomClassTitle: null,
    };
  },
  computed: {
    value() {
      return this.context.getValue();
    },
    atomClass() {
      const value = this.value;
      // atomClass
      return value && typeof value === 'string' ? window.JSON5.parse(value) : value;
    },
  },
  watch: {
    atomClass: {
      handler(newValue) {
        this.__changeAtomClassTitle(newValue);
      },
      immediate: true,
    },
  },
  created() {},
  methods: {
    async __changeAtomClassTitle(atomClass) {
      if (!atomClass) {
        this.atomClassTitle = null;
        return;
      }
      // atomClassBase
      const atomClassBase = await this.$store.dispatch('a/base/getAtomClassBase', { atomClass });
      this.atomClassTitle = atomClassBase.titleLocale;
    },
    async onChooseAtomClass() {
      const { property } = this.context;
      // target
      let target = this.$meta.util.getProperty(property, 'ebParams.target');
      if (target === undefined) target = '_self';
      // optional
      const optional = this.$meta.util.getProperty(property, 'ebParams.optional');
      // check: itemOnly/inner/detail/simple/resource
      const check = this.$meta.util.getProperty(property, 'ebParams.check');
      return new Promise(resolve => {
        const url = '/a/basefront2/atom/selectAtomClass';
        this.$view.navigate(url, {
          target,
          context: {
            params: {
              selected: this.atomClass,
              optional,
              check,
            },
            callback: (code, data) => {
              if (code === 200) {
                // string
                let value;
                if (property.type === 'string') {
                  value = data ? JSON.stringify(data) : null;
                } else {
                  value = data;
                }
                // setValue
                this.context.setValue(value);
                resolve(true);
              } else if (code === false) {
                resolve(false);
              }
            },
          },
        });
      });
    },
  },
  render() {
    const { dataPath, property, validate } = this.context;
    if (validate.readOnly || property.ebReadOnly) {
      return (
        <f7-list-item>
          {this.context.renderTitle({ slot: 'title' })}
          <div slot="after">{this.atomClassTitle}</div>
        </f7-list-item>
      );
    }
    return (
      <eb-list-item-choose link="#" dataPath={dataPath} propsOnChoose={this.onChooseAtomClass}>
        {this.context.renderTitle({ slot: 'title' })}
        <div slot="after">{this.atomClassTitle}</div>
      </eb-list-item-choose>
    );
  },
};
