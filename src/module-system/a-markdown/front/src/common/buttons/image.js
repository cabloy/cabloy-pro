import { MenuItem } from 'prosemirror-menu';
import { canInsert } from './utils.js';

export const ButtonImage = {
  node: true,
  title: 'EditorButtonTitleImage',
  icon: { material: 'image' },
  onBuild: insertImageItem,
};

function insertImageItem(nodeType, options) {
  return new MenuItem({
    ...options,
    enable(state) {
      return canInsert(state, nodeType);
    },
    run(state, _, view) {
      const { ctx } = options;
      // params
      const params = {
        mode: 1, // image
      };
      params.atomId = ctx.$meta.util.getProperty(ctx.host, 'atomId') || 0;
      const flag = ctx.$meta.util.getProperty(ctx.host, 'opts.upload.flag');
      if (flag) {
        params.flag = flag;
      }
      // navigate
      ctx.$view.navigate(`/a/file/file/upload?t=${Date.now()}`, {
        context: {
          params,
          callback: (code, data) => {
            if (code === 200) {
              const attrs = { alt: data.realName, src: data.downloadUrl };
              view.dispatch(view.state.tr.replaceSelectionWith(nodeType.createAndFill(attrs)));
              view.focus();
            }
            if (code === false) {
              view.focus();
            }
          },
        },
      });
    },
  });
}
