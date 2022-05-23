const require3 = require('require3');
const extend = require3('extend2');

const __mailScenesConfigCache = {};

module.exports = ctx => {
  const moduleInfo = ctx.app.meta.mockUtil.parseInfoFromPackage(__dirname);
  class MailSceneCache {
    get configModule() {
      return ctx.config.module(moduleInfo.relativeName);
    }
    get statusModule() {
      return ctx.bean.status.module(moduleInfo.relativeName);
    }

    getMailScenesConfigCache() {
      return __mailScenesConfigCache[ctx.subdomain];
    }

    getMailSceneConfigCache(sceneName) {
      return __mailScenesConfigCache[ctx.subdomain][sceneName];
    }

    async mailSceneChanged() {
      // change self
      await this._cacheMailScenesConfig();
      // broadcast
      ctx.meta.util.broadcastEmit({
        module: 'a-mail',
        broadcastName: 'mailSceneChanged',
        data: null,
      });
    }

    purgeScene(scene) {
      const res = extend(true, {}, scene);
      delete res.titleLocale;
      return res;
    }

    async _cacheMailScenesConfig() {
      // configDefault
      const configDefault = this.configModule.scenes;
      // configScenes
      let configScenes = await this.get('mailScenes');
      configScenes = extend(true, {}, configDefault, configScenes);
      // cache
      __mailScenesConfigCache[ctx.subdomain] = configScenes;
    }
  }
  return MailSceneCache;
};
