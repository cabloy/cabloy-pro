module.exports = app => {
  const staticResources = require('./config/static/resources.js')(app);
  // meta
  const meta = {
    base: {
      resources: {
        headerButton: {
          title: 'Header Button',
        },
        sidebarPanel: {
          title: 'Sidebar Panel',
        },
        statusbarSection: {
          title: 'Statusbar Section',
        },
      },
      statics: {
        'a-base.resource': {
          items: staticResources,
        },
      },
    },
  };
  return meta;
};
