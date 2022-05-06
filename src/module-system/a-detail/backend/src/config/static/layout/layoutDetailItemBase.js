module.exports = app => {
  // const moduleInfo = app.meta.mockUtil.parseInfoFromPackage(__dirname);
  const content = {
    info: {
      layout: {
        viewSize: {
          view: {
            small: 'default',
            medium: 'default',
            large: 'default',
          },
          edit: {
            small: 'default',
            medium: 'default',
            large: 'default',
          },
        },
      },
    },
    layouts: {
      base: {
        blocks: {
          title: {
            component: {
              module: 'a-detail',
              name: 'itemLayoutBlockDefaultTitle',
            },
          },
          main: {
            component: {
              module: 'a-detail',
              name: 'itemLayoutBlockDefaultMain',
            },
          },
        },
      },
      default: {
        title: 'LayoutDefault',
        component: {
          module: 'a-detail',
          name: 'itemLayoutDefault',
        },
        blocks: {},
      },
    },
  };
  const layout = {
    atomName: 'Base',
    atomStaticKey: 'layoutDetailItemBase',
    atomRevision: 0,
    description: '',
    layoutTypeCode: 6,
    content: JSON.stringify(content),
    resourceRoles: 'root',
  };
  return layout;
};
