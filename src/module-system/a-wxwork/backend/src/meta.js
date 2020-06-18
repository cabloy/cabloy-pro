const authFn = require('./passport/auth.js');

module.exports = app => {
  // const schemas = require('./config/validation/schemas.js')(app);
  // socketio
  const socketioProgress = require('./config/socketio/progress.js')(app);
  const meta = {
    base: {
      atoms: {
      },
      functions: {
        contacts: {
          title: 'Contacts Management',
          actionPath: 'contacts/management',
          sorting: 1,
          menu: 0,
        },
      },
    },
    validation: {
      validators: {
      },
      keywords: {},
      schemas: {
      },
    },
    settings: {
      instance: {
        actionPath: 'settings/list',
      },
    },
    event: {
      declarations: {
        wxworkMessage: 'Wechat Work Message',
      },
      implementations: {
        'a-base:loginInfo': 'event/loginInfo',
      },
    },
    index: {
      indexes: {
        aWxworkDepartment: 'createdAt,updatedAt,roleId,departmentId,departmentParentId',
        aWxworkMember: 'createdAt,updatedAt,userId,memberId',
      },
    },
    socketio: {
      messages: {
        progress: socketioProgress,
      },
    },
    auth: authFn(app),
  };
  return meta;
};
