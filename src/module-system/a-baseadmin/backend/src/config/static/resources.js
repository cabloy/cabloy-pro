module.exports = app => {
  // const moduleInfo = app.meta.mockUtil.parseInfoFromPackage(__dirname);
  const resources = [
    // menu
    {
      atomName: 'Role Management',
      atomStaticKey: 'roleManagement',
      atomRevision: 1,
      atomCategoryId: 'a-base:menu.BasicAdmin',
      resourceType: 'a-base:menu',
      resourceConfig: JSON.stringify({
        module: 'a-base',
        atomClassName: 'role',
        atomAction: 'read',
      }),
      resourceIcon: ':role:role',
      appKey: 'a-appbooster:appSystem',
      resourceRoles: 'template.system',
    },
    {
      atomName: 'User Management',
      atomStaticKey: 'userManagement',
      atomRevision: 1,
      atomCategoryId: 'a-base:menu.BasicAdmin',
      resourceType: 'a-base:menu',
      resourceConfig: JSON.stringify({
        module: 'a-base',
        atomClassName: 'user',
        atomAction: 'read',
      }),
      resourceIcon: '::person',
      appKey: 'a-appbooster:appSystem',
      resourceRoles: 'template.system',
    },
    // function
    // deprecated
    {
      atomName: 'User Management',
      atomStaticKey: 'user',
      atomRevision: -1,
      atomCategoryId: 'a-base:function.Basic',
      resourceType: 'a-base:function',
      resourceConfig: JSON.stringify({
        actionPath: '/a/baseadmin/user/list',
      }),
      resourceRoles: 'template.system',
    },
    // deprecated
    {
      atomName: 'Role Management',
      atomStaticKey: 'role',
      atomRevision: -1,
      atomCategoryId: 'a-base:function.Basic',
      resourceType: 'a-base:function',
      resourceConfig: JSON.stringify({
        actionPath: '/a/baseadmin/role/list',
      }),
      resourceRoles: 'template.system',
    },
    // deprecated
    {
      atomName: 'Atom Right Management',
      atomStaticKey: 'atomRight',
      atomRevision: -1,
      atomCategoryId: 'a-base:function.Basic',
      resourceType: 'a-base:function',
      resourceConfig: JSON.stringify({
        actionPath: '/a/baseadmin/atomRight/list',
      }),
      resourceRoles: 'template.system',
    },
    // deprecated
    {
      atomName: 'Resource Right Management',
      atomStaticKey: 'resourceRight',
      atomRevision: -1,
      atomCategoryId: 'a-base:function.Basic',
      resourceType: 'a-base:function',
      resourceConfig: JSON.stringify({
        actionPath: '/a/baseadmin/resourceRight/list',
      }),
      resourceRoles: 'template.system',
    },
    {
      atomName: 'Auth Management',
      atomStaticKey: 'auth',
      atomRevision: 0,
      atomCategoryId: 'a-base:function.Basic',
      resourceType: 'a-base:function',
      resourceConfig: JSON.stringify({
        actionPath: '/a/baseadmin/auth/list',
      }),
      resourceRoles: 'template.system',
    },
    {
      atomName: 'Category Management',
      atomStaticKey: 'category',
      atomRevision: 0,
      atomCategoryId: 'a-base:function.Basic',
      resourceType: 'a-base:function',
      resourceConfig: JSON.stringify({
        actionPath: '/a/baseadmin/category/management',
      }),
      resourceRoles: 'template.system',
    },
    {
      atomName: 'Tag Management',
      atomStaticKey: 'tag',
      atomRevision: 0,
      atomCategoryId: 'a-base:function.Basic',
      resourceType: 'a-base:function',
      resourceConfig: JSON.stringify({
        actionPath: '/a/baseadmin/tag/management',
      }),
      resourceRoles: 'template.system',
    },
    // deprecated
    {
      atomName: 'Select Users',
      atomStaticKey: 'selectUsers',
      atomRevision: -1,
      atomCategoryId: 'a-base:function.Basic',
      resourceType: 'a-base:function',
      resourceConfig: JSON.stringify({}),
      resourceRoles: 'template.system',
    },
  ];
  return resources;
};
