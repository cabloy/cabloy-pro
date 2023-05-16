import Vue from 'vue';

export default {
  state: () => ({ atomClassBases: {} }),
  actions: {
    setAtomClassBase({ atomClass, atomClassBase }) {
      let key = atomClass.id;
      this.atomClassBases[key] = atomClassBase;
      key = `${atomClass.module}:${atomClass.atomClassName}`;
      this.atomClassBases[key] = atomClassBase;
    },
    getAtomClassBaseSync({ atomClass }) {
      const key = atomClass.id || `${atomClass.module}:${atomClass.atomClassName}`;
      let atomClassBase = this.atomClassBases[key];
      if (!atomClassBase) {
        // get async
        this.getAtomClassBase({ atomClass });
        // init
        Vue.set(this.atomClassBases, key, null);
        atomClassBase = this.atomClassBases[key];
      }
      return atomClassBase;
    },
    // id, module, atomClassName
    async getAtomClassBase({ atomClass }) {
      const key = atomClass.id || `${atomClass.module}:${atomClass.atomClassName}`;
      if (this.atomClassBases[key]) return this.atomClassBases[key];
      const data = await Vue.prototype.$meta.api.post('/a/base/base/getAtomClassBase', {
        atomClass,
      });
      atomClass = data.atomClass;
      const atomClassBase = {
        id: atomClass.id,
        module: atomClass.module,
        atomClassName: atomClass.atomClassName,
        ...data.atomClassBase,
      };
      this.setAtomClassBase({ atomClass, atomClassBase });
      return atomClassBase;
    },
  },
};