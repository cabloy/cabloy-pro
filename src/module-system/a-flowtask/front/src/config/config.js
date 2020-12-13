export default {
  flowTask: {
    actions: {
      viewAtom: {
        title: 'View',
        actionModule: 'a-flowtask',
        actionComponent: 'action',
        icon: { material: 'visibility' },
      },
      handleTask: {
        title: 'Handle',
        actionModule: 'a-flowtask',
        actionComponent: 'action',
        icon: { material: 'play_arrow' },
      },
      cancelFlow: {
        title: 'Cancel Flow',
        actionModule: 'a-flowtask',
        actionComponent: 'action',
        icon: { material: 'stop' },
      },
      assigneesConfirmation: {
        title: 'Confirmation',
        actionModule: 'a-flowtask',
        actionComponent: 'action',
        icon: { material: 'group' },
      },
    },
    render: {
      atom: {
        info: {
          attachment: true,
          comment: true,
        },
        layouts: {
          mobile: {
            component: {
              module: 'a-flowtask',
              name: 'atomLayoutMobile',
            },
            blocks: {
              title: {
                component: {
                  module: 'a-flowtask',
                  name: 'atomLayoutBlockMobileTitle',
                },
              },
              main: {
                component: {
                  module: 'a-flowtask',
                  name: 'atomLayoutBlockMobileMain',
                },
              },
            },
          },
        },
      },
    },
  },
  flow: {
    render: {
      list: {
        layouts: {
          list: {
            component: {
              module: 'a-flowtask',
              name: 'flowListLayoutList',
            },
            blocks: {
              title: {
                component: {
                  module: 'a-flowtask',
                  name: 'flowListLayoutBlockListTitle',
                },
              },
              items: {
                component: {
                  module: 'a-flowtask',
                  name: 'flowListLayoutBlockListItems',
                },
              },
            },
          },
        },
      },
      item: {
        info: {
          attachment: true,
          comment: true,
        },
        layouts: {
          mobile: {
            component: {
              module: 'a-flowtask',
              name: 'flowLayoutMobile',
            },
            blocks: {
              title: {
                component: {
                  module: 'a-flowtask',
                  name: 'flowLayoutBlockMobileTitle',
                },
              },
              subnavbar: {
                component: {
                  module: 'a-flowtask',
                  name: 'flowLayoutBlockMobileSubnavbar',
                },
              },
              main: {
                component: {
                  module: 'a-flowtask',
                  name: 'flowLayoutBlockMobileMain',
                },
              },
            },
          },
          pc: {
            component: {
              module: 'a-flowtask',
              name: 'flowLayoutPC',
            },
            blocks: {
              title: {
                component: {
                  module: 'a-flowtask',
                  name: 'flowLayoutBlockPCTitle',
                },
              },
              main: {
                component: {
                  module: 'a-flowtask',
                  name: 'flowLayoutBlockMobileMain',
                },
              },
            },
          },
        },
      },
    },
  },
};
