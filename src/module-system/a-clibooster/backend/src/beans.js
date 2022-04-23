const versionManager = require('./bean/version.manager.js');
const cliDefaultDemo = require('./bean/cli.default.demo.js');
const cliTokenAdd = require('./bean/cli.token.add.js');
const cliTokenDelete = require('./bean/cli.token.delete.js');

module.exports = app => {
  const beans = {
    // version
    'version.manager': {
      mode: 'app',
      bean: versionManager,
    },
    // cli
    'cli.default.demo': {
      mode: 'ctx',
      bean: cliDefaultDemo,
    },
    'cli.token.add': {
      mode: 'ctx',
      bean: cliTokenAdd,
    },
    'cli.token.delete': {
      mode: 'ctx',
      bean: cliTokenDelete,
    },
  };
  return beans;
};
