export default {
  data() {
    return {};
  },
  methods: {
    actions_onAction(event, action) {
      return this.layoutManager.actions_onAction(event, action);
    },
    // default
    info_renderActionsLeft() {
      return this.layoutManager.info_renderActionsLeft();
    },
    // resourceAuthorizations/atomAuthorizations
    info_renderActionsRight() {
      if (!this.layoutManager.base_ready) return;
      const children = [];
      this._renderActionsGeneral(children, ['resourceAuthorizations', 'atomAuthorizations', 'fieldsAuthorizations']);
      // ok
      return children;
    },
    actions_render() {
      if (!this.layoutManager.base_ready) return null;
      const children = [];
      // write
      const buttonSave = this.layoutManager.actions_renderButtonSave();
      if (buttonSave) children.push(buttonSave);
      // delete / userRoles
      this._renderActionsGeneral(children, ['delete', 'enable', 'disable', 'userRoles']);
      // ok
      return children;
    },
    _renderActionsGeneral(children, actionNames) {
      for (const actionName of actionNames) {
        const action = this.layoutManager.actions_findAction(actionName);
        if (action) {
          const _action = this.layoutManager.getAction(action);
          children.push(
            <eb-link
              key={action.id}
              iconF7={_action.icon && _action.icon.f7}
              tooltip={this.layoutManager.actions_getActionTitle(action)}
              propsOnPerform={event => this.actions_onAction(event, action)}
            ></eb-link>
          );
        }
      }
    },
  },
};
