import { createPinia, PiniaVuePlugin, defineStore } from 'pinia';
import { PiniaPluginCreated } from 'pinia-plugin-created';

export default function (Vue) {
  // install pinia
  Vue.use(PiniaVuePlugin);

  // stores
  const __stores = Vue.exports.reactive({});

  // pinia
  const pinia = new createPinia();

  // plugin: created
  pinia.use(PiniaPluginCreated);

  // store
  const store = Vue.prototype.$meta.store;

  // defineStore
  store.defineStore = defineStore;

  // use async
  store.use = async function (path) {
    const info = Vue.prototype.$meta.util.parseModuleInfo(path);
    await Vue.prototype.$meta.module.use(info.relativeName);
    const useStore = __stores[path];
    if (!useStore) {
      // throw error
      throw new Error(`pinia not found: ${path}`);
    }
    return useStore;
  };

  // use sync
  store.useSync = function (path) {
    let useStore = __stores[path];
    if (!useStore) {
      // use async
      store.use(path);
      // not throw error
      Vue.set(__stores, path, null);
      useStore = __stores[path];
    }
    return useStore;
  };

  // set
  store.registerStore = function (path, store) {
    __stores[path] = store;
  };

  // beforeCreate
  const beforeCreate = function (ctx) {
    // local
    if (!ctx.$local) ctx.$local = {};

    ['use', 'useSync'].forEach(key => {
      Vue.prototype.$meta.util.overrideProperty({
        obj: ctx.$local,
        key,
        objBase: store,
        vueComponent: ctx,
        combinePath: (moduleInfo, arg) => {
          return Vue.prototype.$meta.util.combineStorePath(moduleInfo, arg);
        },
      });
    });
  };

  return { pinia, beforeCreate };
}
