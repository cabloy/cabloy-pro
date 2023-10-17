module.exports = {
  file: 'backend/src/bean/version.manager.js',
  async transform({ cli, ast, argv, ctx }) {
    // update
    if (ast.has(`const fileVersionUpdates = []`)) {
      ast.replace(`const fileVersionUpdates = []`, `const fileVersionUpdates = [${argv.fileVersion}]`);
    } else {
      ast.replace(`const fileVersionUpdates = [$_$]`, `const fileVersionUpdates = [$_$, ${argv.fileVersion}]`);
    }
    // ok
    return ast;
  },
};