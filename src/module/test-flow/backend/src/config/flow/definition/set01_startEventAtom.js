const Listener = require('./listener/set01_startEventAtom.spec.js');

module.exports = app => {
  const moduleInfo = app.meta.mockUtil.parseInfoFromPackage(__dirname);
  const definition = {
    info: {
      title: 'Test_Set01_StartEvent_Atom',
      description: 'Test_Set01_StartEvent_Atom',
      version: '2020-09-28',
    },
    listener: Listener.toString(),
    process: {
      nodes: [
        {
          id: 'startEvent_1',
          name: 'Start',
          type: 'startEventAtom',
          options: {
            atom: {
              module: moduleInfo.relativeName,
              atomClassName: 'purchaseOrder',
            },
            conditionExpression: 'atom.flowDefKey===\'set01_startEventAtom\'',
          },
        },
        {
          id: 'activity_1',
          name: 'ActivityNone',
          type: 'activityNone',
        },
        {
          id: 'endEvent_1',
          name: 'End',
          type: 'endEventNone',
        },
      ],
      edges: [
        {
          id: 'edge_1',
          source: 'startEvent_1',
          target: 'activity_1',
        },
        {
          id: 'edge_2',
          source: 'activity_1',
          target: 'endEvent_1',
        },
      ],
    },
  };
  return definition;
};
