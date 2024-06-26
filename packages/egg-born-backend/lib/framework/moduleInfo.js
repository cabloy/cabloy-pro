const Module = require('module');
const ModuleInfo = require('@zhennann/module-info');
const MetaFn = require('./meta.js');

let __patched = false;
module.exports = function (app) {
  // only once
  if (__patched) return;
  __patched = true;

  // meta
  const meta = MetaFn(app);

  // compile
  const originalCompile = Module.prototype._compile;
  Module.prototype._compile = function (...args) {
    const _module = this;
    let _moduleInfo;
    // meta
    Object.defineProperty(_module, 'meta', {
      enumerable: false,
      get() {
        return meta;
      },
    });
    // info
    Object.defineProperty(_module, 'info', {
      enumerable: false,
      get() {
        if (!_moduleInfo) {
          _moduleInfo = ModuleInfo.parseInfoFromPackage(_module.path);
        }
        return _moduleInfo;
      },
    });
    return originalCompile.apply(_module, args);
  };
};
