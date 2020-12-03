const { app, mockUrl, mockInfo, assert } = require('egg-born-mock')(__dirname);

describe.only('test/controller/test.test.js', () => {

  it('action:set config', async () => {
    app.mockSession({});

    // login as root
    await app.httpRequest().post(mockUrl('/a/authsimple/passport/a-authsimple/authsimple')).send({
      data: {
        auth: 'root',
        password: '123456',
      },
    });

    const result = await app.httpRequest().post(mockUrl('site/setConfigSite')).send({
      data: {
        host: {
          url: 'http://localhost:9080',
          rootPath: '',
        },
        language: {
          default: 'en-us',
          items: 'en-us,zh-cn',
        },
        themes: {
          'en-us': 'cms-themeblog',
          'zh-cn': 'cms-themeblog',
        },
      },
    });
    assert(result.body.code === 0);

  });

  it('action:build languages', async () => {
    app.mockSession({});

    // login as root
    await app.httpRequest().post(mockUrl('/a/authsimple/passport/a-authsimple/authsimple')).send({
      data: {
        auth: 'root',
        password: '123456',
      },
    });

    const result = await app.httpRequest().post(mockUrl('site/buildLanguages')).send();
    assert(result.body.code === 0);
    console.log('time used: ', result.body.data.time);

  });

  it('action:render article', async () => {
    app.mockSession({});

    // login as root
    await app.httpRequest().post(mockUrl('/a/authsimple/passport/a-authsimple/authsimple')).send({
      data: {
        auth: 'root',
        password: '123456',
      },
    });

    const articles = [
      {
        special: true,
        atomName: 'hello world',
        language: 'en-us',
        editMode: 1,
      },
      {
        atomName: 'hello world2',
        language: 'en-us',
        slug: 'about',
        editMode: 1,
        content: `
  ## hello world
  (c)
  \`\`\` js
  var foo = function (bar) {
    return bar++;
  };
  console.log(foo(5));
  \`\`\`

  ::: alert-warning
  <script>window.alert('test');</script>
  :::

  $$$ cms-pluginblock:audio
{
  audio: {
    name: 'Yadikar',
    url: 'https://admin2.zhennann.com/api/a/file/file/download/9d373acea45549fa9fcd90152c73928f.aac',
    artist: 'Retim',
    cover: 'https://admin2.zhennann.com/api/a/file/file/download/73878ed9a1ce4100ad32580b0fd98db2.jpg',
  },
  autoplay: false,
  loop: true,
}
  $$$

        `,
      },
      {
        atomName: '你好，世界',
        language: 'zh-cn',
        editMode: 1,
      },
      {
        atomName: '你好，世界2',
        language: 'zh-cn',
        editMode: 1,
      },
    ];
    for (const article of articles) {
      let result;
      // create
      result = await app.httpRequest().post(mockUrl('/a/base/atom/create')).send({
        atomClass: { module: mockInfo().relativeName, atomClassName: 'article', atomClassIdParent: 0 },
      });
      assert(result.body.code === 0);
      const keyDraft = result.body.data;

      // submit
      result = await app.httpRequest().post(mockUrl('/a/base/atom/writeSubmit')).send({
        key: keyDraft,
        item: {
          atomId: keyDraft.atomId,
          atomName: article.atomName,
          language: article.language,
          editMode: article.editMode,
          content: article.content,
          categoryId: article.categoryId,
          slug: article.slug,
        },
        options: { ignoreFlow: true },
      });
      assert(result.body.code === 0);
      const keyArchive = result.body.data.archive.key;

      // special test
      if (article.special) {
        // delete
        result = await app.httpRequest().post(mockUrl('/a/base/atom/delete')).send({
          key: keyArchive,
        });
        assert(result.body.code === 0);
      }
    }

  });

  // it('action:build languages', async () => {
  //   app.mockSession({});

  //   // login as root
  //   await app.httpRequest().post(mockUrl('/a/authsimple/passport/a-authsimple/authsimple')).send({
  //     data: {
  //       auth: 'root',
  //       password: '123456',
  //     },
  //   });

  //   const result = await app.httpRequest().post(mockUrl('site/buildLanguages')).send();
  //   assert(result.body.code === 0);
  //   console.log('time used: ', result.body.data.time);

  // });

});
