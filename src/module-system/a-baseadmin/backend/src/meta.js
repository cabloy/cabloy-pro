module.exports = app => {
  // schemas
  const schemas = require('./config/validation/schemas.js')(app);
  // static
  const staticLayouts = require('./config/static/layouts.js')(app);
  const staticResources = require('./config/static/resources.js')(app);
  // meta
  const meta = {
    base: {
      statics: {
        'a-baselayout.layout': {
          items: staticLayouts,
        },
        'a-base.resource': {
          items: staticResources,
        },
      },
    },
    validation: {
      validators: {
        roleRight: {
          schemas: 'roleRight',
        },
        roleRightSearch: {
          schemas: 'roleRightSearch',
        },
        roleResourceRight: {
          schemas: 'roleResourceRight',
        },
        roleResourceRightSearch: {
          schemas: 'roleResourceRightSearch',
        },
      },
      keywords: {},
      schemas,
    },
  };

  return meta;
};
