window['a-base'] = (() => {
  const e = { 744: (e, t, n) => {
      function o(e, t) {
        let n; if (typeof Symbol === 'undefined' || e[Symbol.iterator] == null) {
          if (Array.isArray(e) || (n = function(e, t) { if (e) { if (typeof e === 'string') return r(e, t); let n = Object.prototype.toString.call(e).slice(8, -1); return n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set' ? Array.from(e) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0; } }(e)) || t && e && typeof e.length === 'number') {
            n && (e = n); let o = 0,
              a = function() {}; return { s: a, n() { return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] }; }, e(e) { throw e; }, f: a };
          } throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        } let i,
          s = !0,
          c = !1; return { s() { n = e[Symbol.iterator](); }, n() { const e = n.next(); return s = e.done, e; }, e(e) { c = !0, i = e; }, f() { try { s || n.return == null || n.return(); } finally { if (c) throw i; } } };
      } function r(e, t) { (t == null || t > e.length) && (t = e.length); for (var n = 0, o = new Array(t); n < t; n++)o[n] = e[n]; return o; } function a(e, t) { const n = Object.keys(e); if (Object.getOwnPropertySymbols) { let o = Object.getOwnPropertySymbols(e); t && (o = o.filter(function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; })), n.push.apply(n, o); } return n; } function i(e) { for (let t = 1; t < arguments.length; t++) { var n = arguments[t] != null ? arguments[t] : {}; t % 2 ? a(Object(n), !0).forEach(function(t) { s(e, t, n[t]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)); }); } return e; } function s(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e; } function c(e, t, n, o, r, a, i) {
        try {
          var s = e[a](i),
            c = s.value;
        } catch (e) { return void n(e); }s.done ? t(c) : Promise.resolve(c).then(o, r);
      } function l(e) {
        return function() {
          const t = this,
            n = arguments; return new Promise(function(o, r) { const a = e.apply(t, n); function i(e) { c(a, o, r, i, s, 'next', e); } function s(e) { c(a, o, r, i, s, 'throw', e); }i(void 0); });
        };
      } function u(e, t) {
        let n; if (typeof Symbol === 'undefined' || e[Symbol.iterator] == null) {
          if (Array.isArray(e) || (n = function(e, t) { if (e) { if (typeof e === 'string') return A(e, t); let n = Object.prototype.toString.call(e).slice(8, -1); return n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set' ? Array.from(e) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? A(e, t) : void 0; } }(e)) || t && e && typeof e.length === 'number') {
            n && (e = n); let o = 0,
              r = function() {}; return { s: r, n() { return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] }; }, e(e) { throw e; }, f: r };
          } throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
        } let a,
          i = !0,
          s = !1; return { s() { n = e[Symbol.iterator](); }, n() { const e = n.next(); return i = e.done, e; }, e(e) { s = !0, a = e; }, f() { try { i || n.return == null || n.return(); } finally { if (s) throw a; } } };
      } function A(e, t) { (t == null || t > e.length) && (t = e.length); for (var n = 0, o = new Array(t); n < t; n++)o[n] = e[n]; return o; } function m(e, t, n, o, r, a, i) {
        try {
          var s = e[a](i),
            c = s.value;
        } catch (e) { return void n(e); }s.done ? t(c) : Promise.resolve(c).then(o, r);
      } function f(e) {
        return function() {
          const t = this,
            n = arguments; return new Promise(function(o, r) { const a = e.apply(t, n); function i(e) { m(a, o, r, i, s, 'next', e); } function s(e) { m(a, o, r, i, s, 'throw', e); }i(void 0); });
        };
      }n.d(t, { Z: () => d }); const d = { action: { meta: { global: !1 }, methods: { onAction(e) {
        const t = this; return l(regeneratorRuntime.mark(function n() {
          let o,
            r,
            a,
            s,
            c,
            l,
            u,
            A,
            m,
            f,
            d,
            p,
            g,
            b,
            h,
            v,
            y,
            x,
            C,
            w,
            E,
            k,
            I,
            $,
            S,
            R,
            B,
            N; return regeneratorRuntime.wrap(function(n) { for (;;) switch (n.prev = n.next) { case 0:if (o = e.ctx, r = e.action, a = e.item, r.name !== 'create' && r.action !== 'create') { n.next = 7; break; } return n.next = 4, t._onActionCreate({ ctx: o, action: r, item: a }); case 4:return n.abrupt('return', n.sent); case 7:if (r.name !== 'delete') { n.next = 17; break; } return n.next = 10, o.$view.dialog.confirm(); case 10:return s = { atomId: a.atomId, itemId: a.itemId }, n.next = 13, o.$api.post('/a/base/atom/delete', { key: s }); case 13:o.$meta.eventHub.$emit('atom:action', { key: s, action: r }), o.$f7router.back(), n.next = 121; break; case 17:if (r.name !== 'save') { n.next = 25; break; } return c = { atomId: a.atomId, itemId: a.itemId }, n.next = 21, o.$api.post('/a/base/atom/write', { key: c, item: a }); case 21:return o.$meta.eventHub.$emit('atom:action', { key: c, action: r }), n.abrupt('return', o.$text('Saved')); case 25:if (r.name !== 'submit') { n.next = 35; break; } return n.next = 28, o.$view.dialog.confirm(); case 28:return l = { atomId: a.atomId, itemId: a.itemId }, n.next = 31, o.$api.post('/a/base/atom/writeSubmit', { key: l, item: a }); case 31:(u = n.sent).archive ? (o.$meta.eventHub.$emit('atom:action', { key: l, action: { name: 'delete' } }), o.$meta.eventHub.$emit('atom:action', { key: u.formal.key, action: { name: 'save' } }), o.$f7router.back()) : (A = u.flow, o.$meta.eventHub.$emit('atom:action', { key: l, action: { name: 'save' } }), m = '/a/flowtask/flow?flowId='.concat(A.id), o.$view.navigate(m, { target: '_self', reloadCurrent: !0 })), n.next = 121; break; case 35:if (r.name !== 'write') { n.next = 61; break; } return f = { atomId: a.atomId, itemId: a.itemId }, n.prev = 37, n.next = 40, o.$api.post('/a/base/atom/openDraft', { key: f }); case 40:p = n.sent, d = p.draft.key, n.next = 55; break; case 44:if (n.prev = 44, n.t0 = n.catch(37), void 0 !== (g = a.atomIdDraft)) { n.next = 52; break; } return n.next = 50, o.$api.post('/a/base/atom/read', { key: f }); case 50:b = n.sent, g = b.atomIdDraft; case 52:if (g !== 0) { n.next = 54; break; } throw n.t0; case 54:d = { atomId: g, itemId: null }; case 55:h = i(i({}, a), {}, { atomId: d.atomId, itemId: d.itemId }), v = o.$meta.util.replaceTemplate('/a/basefront/atom/item?mode=edit&atomId={{atomId}}&itemId={{itemId}}', h), o.$view.navigate(v, r.navigateOptions), a.atomStage > 0 && o.$meta.eventHub.$emit('atom:actions', { key: f }), n.next = 121; break; case 61:if (r.name !== 'clone') { n.next = 82; break; } return n.next = 64, o.$view.dialog.confirm(); case 64:return n.prev = 64, y = { atomId: a.atomId, itemId: a.itemId }, n.next = 68, o.$api.post('/a/base/atom/clone', { key: y }); case 68:x = n.sent, C = x.draft.key, w = i(i({}, a), {}, { atomId: C.atomId, itemId: C.itemId }), E = o.$meta.util.replaceTemplate('/a/basefront/atom/item?mode=edit&atomId={{atomId}}&itemId={{itemId}}', w), o.$view.navigate(E, r.navigateOptions), n.next = 80; break; case 75:if (n.prev = 75, n.t1 = n.catch(64), n.t1.code !== 422) { n.next = 79; break; } throw new Error(n.t1.message[0].message); case 79:throw n.t1; case 80:n.next = 121; break; case 82:if (r.name !== 'history') { n.next = 93; break; } if (k = a.atomStage === 1 ? a.atomId : a.atomIdFormal) { n.next = 86; break; } return n.abrupt('return'); case 86:I = { where: { 'a.atomIdFormal': k }, stage: 'history' }, $ = { pageTitle: ''.concat(t.$text('History'), ': ').concat(a.atomName) }, S = { module: a.module, atomClassName: a.atomClassName, options: JSON.stringify(I), params: JSON.stringify($) }, R = o.$meta.util.combineQueries('/a/basefront/atom/list', S), o.$view.navigate(R, {}), n.next = 121; break; case 93:if (r.name !== 'archive') { n.next = 98; break; } return n.next = 96, t._onActionRead({ ctx: o, item: a, atomId: a.atomIdFormal }); case 96:n.next = 121; break; case 98:if (r.name !== 'draft') { n.next = 103; break; } return n.next = 101, t._onActionRead({ ctx: o, item: a, atomId: a.atomIdDraft }); case 101:n.next = 121; break; case 103:if (r.name !== 'selectLocale') { n.next = 109; break; } return n.next = 106, t._onActionSelectLocale({ ctx: o, action: r, item: a }); case 106:return n.abrupt('return', n.sent); case 109:if (r.name !== 'enable') { n.next = 116; break; } return B = { atomId: a.atomId, itemId: a.itemId }, n.next = 113, t._onActionEnable({ ctx: o, key: B }); case 113:return n.abrupt('return', n.sent); case 116:if (r.name !== 'disable') { n.next = 121; break; } return N = { atomId: a.atomId, itemId: a.itemId }, n.next = 120, t._onActionDisable({ ctx: o, key: N }); case 120:return n.abrupt('return', n.sent); case 121:case 'end':return n.stop(); } }, n, null, [[ 37, 44 ], [ 64, 75 ]]);
        }))();
      }, _onActionRead(e) {
        return l(regeneratorRuntime.mark(function t() {
          let n,
            o,
            r,
            a,
            i; return regeneratorRuntime.wrap(function(t) { for (;;) switch (t.prev = t.next) { case 0:return n = e.ctx, o = e.item, r = e.atomId, t.next = 3, n.$store.dispatch('a/base/getActions'); case 3:return a = t.sent, i = a[o.module][o.atomClassName].read, i = n.$utils.extend({}, i), t.next = 8, n.$meta.util.performAction({ ctx: n, action: i, item: { atomId: r } }); case 8:case 'end':return t.stop(); } }, t);
        }))();
      }, _onActionCreate(e) {
        let t = e.ctx,
          n = e.action,
          o = e.item; return this._onActionCreateGetRoleIdOwner({ ctx: t, action: n, item: o }).then(function(e) { if (e) return t.$api.post('/a/base/atom/create', { atomClass: { id: o.atomClassId, module: o.module, atomClassName: o.atomClassName }, roleIdOwner: e, item: o }).then(function(e) { return t.$meta.eventHub.$emit('atom:action', { key: e, action: n }), n.menu === 1 || n.actionComponent || n.actionPath ? (o = t.$utils.extend({}, o, e), t.$store.dispatch('a/base/getActions').then(function(e) { let n = e[o.module][o.atomClassName].write; return n = t.$utils.extend({}, n), t.$meta.util.performAction({ ctx: t, action: n, item: o }); })) : e; }); });
      }, _onActionCreateGetAtomClassId(e) {
        const t = e.ctx,
          n = (e.action, e.item); return n.atomClassId ? Promise.resolve(n.atomClassId) : t.$api.post('/a/base/atomClass/atomClass', { atomClass: { module: n.module, atomClassName: n.atomClassName } }).then(function(e) { return e.id; });
      }, _onActionCreateGetRoleIdOwner(e) {
        const t = this,
          n = e.ctx,
          o = e.action,
          r = e.item; return this._onActionCreateGetAtomClassId({ ctx: n, action: o, item: r }).then(function(e) { const r = n.$store.getState('a/base/userAtomClassRolesPreferred'); return r[e] ? r[e] : n.$api.post('/a/base/atom/preferredRoles', { atomClass: { id: e } }).then(function(r) { if (r.length === 0) return Promise.reject(new Error('Error')); if (r.length === 1) { const a = r[0].roleIdWho; return n.$store.commit('a/base/setUserAtomClassRolesPreferred', { atomClassId: e, roleIdOwner: a }), a; } return t._onActionCreateSelectPreferredRole({ ctx: n, action: o, roles: r }).then(function(t) { return t && n.$store.commit('a/base/setUserAtomClassRolesPreferred', { atomClassId: e, roleIdOwner: t }), t; }); }); });
      }, _onActionCreateSelectPreferredRole(e) {
        const t = e.ctx,
          n = e.action,
          r = e.roles; return new Promise(function(e) {
          let a,
            i = t.$view.getHostEl(),
            s = n.targetEl,
            c = [{ text: t.$text('AtomClassSelectRoleTip'), label: !0 }],
            l = !1,
            u = o(r); try { const A = function() { const t = a.value; c.push({ text: t.roleNameWho, onClick() { let n; n = t.roleIdWho, l = !0, e(n); } }); }; for (u.s(); !(a = u.n()).done;)A(); } catch (e) { u.e(e); } finally { u.f(); } const m = t.$f7.actions.create({ hostEl: i, buttons: c, targetEl: s }); function f() { m.destroy(), l || (l = !0, e()); }m.open().once('actionsClosed', f).once('popoverClosed', f);
        });
      }, _onActionSelectLocale(e) {
        return l(regeneratorRuntime.mark(function t() {
          let n,
            r,
            a,
            i; return regeneratorRuntime.wrap(function(t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:if (n = e.ctx, r = e.action, !((a = e.item) && a.module && a.atomClassName)) { t.next = 8; break; } return t.next = 4, n.$store.dispatch('a/base/getAtomClasses'); case 4:if (t.sent[a.module][a.atomClassName].language) { t.next = 8; break; } return t.abrupt('return', null); case 8:return t.next = 10, n.$store.dispatch('a/base/getLocales'); case 10:if ((i = t.sent).length !== 1) { t.next = 13; break; } return t.abrupt('return', i[0]); case 13:return t.abrupt('return', new Promise(function(e, t) {
                  let a,
                    s = n.$view.getHostEl(),
                    c = r.targetEl,
                    l = [{ text: n.$text('SelectLanguageTip'), label: !0 }],
                    u = !1,
                    A = o(i); try { const m = function() { const t = a.value; l.push({ text: t.title, onClick() { !function(t) { u = !0, e(t); }(t); } }); }; for (A.s(); !(a = A.n()).done;)m(); } catch (e) { A.e(e); } finally { A.f(); } const f = n.$f7.actions.create({ hostEl: s, buttons: l, targetEl: c }); function d() { f.destroy(), u || (u = !0, t()); }f.open().once('actionsClosed', d).once('popoverClosed', d);
                })); case 14:case 'end':return t.stop();
              }
            }
          }, t);
        }))();
      }, _onActionEnable(e) {
        return l(regeneratorRuntime.mark(function t() {
          let n,
            o; return regeneratorRuntime.wrap(function(t) { for (;;) switch (t.prev = t.next) { case 0:return n = e.ctx, o = e.key, t.next = 3, n.$api.post('/a/base/atom/enable', { key: o }); case 3:n.$meta.eventHub.$emit('atom:action', { key: o, action: { name: 'save' } }); case 4:case 'end':return t.stop(); } }, t);
        }))();
      }, _onActionDisable(e) {
        return l(regeneratorRuntime.mark(function t() {
          let n,
            o; return regeneratorRuntime.wrap(function(t) { for (;;) switch (t.prev = t.next) { case 0:return n = e.ctx, o = e.key, t.next = 3, n.$api.post('/a/base/atom/disable', { key: o }); case 3:n.$meta.eventHub.$emit('atom:action', { key: o, action: { name: 'save' } }); case 4:case 'end':return t.stop(); } }, t);
        }))();
      } } }, actionBulk: { meta: { global: !1 }, methods: { onAction(e) {
        const t = this; return f(regeneratorRuntime.mark(function n() {
          let o,
            r,
            a; return regeneratorRuntime.wrap(function(n) { for (;;) switch (n.prev = n.next) { case 0:if (o = e.ctx, r = e.action, a = e.item, r.name !== 'deleteBulk') { n.next = 7; break; } return n.next = 4, t.onAction_deleteBulk({ ctx: o, item: a }); case 4:return n.abrupt('return', n.sent); case 7:if (r.name !== 'exportBulk') { n.next = 11; break; } return n.next = 10, t.onAction_exportBulk({ ctx: o, item: a }); case 10:return n.abrupt('return', n.sent); case 11:case 'end':return n.stop(); } }, n);
        }))();
      }, onAction_deleteBulk(e) {
        const t = this; return f(regeneratorRuntime.mark(function n() {
          let o,
            r,
            a,
            i,
            s,
            c,
            l,
            A,
            m; return regeneratorRuntime.wrap(function(n) {
            for (;;) {
              switch (n.prev = n.next) {
                case 0:return o = e.ctx, r = e.item, n.next = 3, o.$view.dialog.confirm(); case 3:return a = { id: r.atomClassId }, i = o.bulk.selectedAtoms, s = i.map(function(e) { return { atomId: e.atomId, itemId: e.itemId }; }), n.next = 8, o.$api.post('/a/base/atom/deleteBulk', { atomClass: a, keys: s }); case 8:c = n.sent, l = u(c.keys); try {
                  for (m = function() {
                    const e = A.value,
                      t = i.findIndex(function(t) { return t.atomId === e.atomId; }); t > -1 && i.splice(t, 1), o.$meta.eventHub.$emit('atom:action', { key: e, action: { name: 'delete' } });
                  }, l.s(); !(A = l.n()).done;)m();
                } catch (e) { l.e(e); } finally { l.f(); } if (c.keys.length !== s.length) { n.next = 13; break; } return n.abrupt('return', !0); case 13:return n.abrupt('return', t.$text('DeleteBulkNotAllDone')); case 14:case 'end':return n.stop();
              }
            }
          }, n);
        }))();
      }, onAction_exportBulk(e) {
        const t = this; return f(regeneratorRuntime.mark(function n() {
          let o,
            r,
            a,
            i,
            s,
            c,
            l,
            u,
            A,
            m,
            f,
            d,
            p; return regeneratorRuntime.wrap(function(n) { for (;;) switch (n.prev = n.next) { case 0:return o = e.ctx, r = e.item, n.next = 3, o.$view.dialog.confirm(); case 3:return a = { id: r.atomClassId }, s = o.base_prepareSelectParams(), (c = o.bulk.selectedAtoms).length > 0 ? (l = c.map(function(e) { return { atomId: e.atomId, itemId: e.itemId }; }), i = { where: { 'a.id': l.map(function(e) { return e.atomId; }) }, stage: s.options.stage }) : i = s.options, u = o.base_getExportFields(), n.next = 10, o.$api.post('/a/base/atom/exportBulk', { atomClass: a, options: i, fields: u }); case 10:A = n.sent, t.$meta.eventHub.$emit('export:action', { action: 'create', fileId: A.fileId }), m = t.$meta.util.combineQueries('/a/user/user/exports', { recent: A.fileId }), f = o.$view.inPanel(), d = o.$meta.vueApp.layout === 'pc' && !f, p = {}, d ? (p.scene = 'sidebar', p.sceneOptions = { side: 'right', name: 'exports', title: 'Exports' }) : p.target = '_self', o.$view.navigate(m, p); case 18:case 'end':return n.stop(); } }, n);
        }))();
      } } } };
    }, 788: (e, t, n) => { n.d(t, { Z: () => r }); const o = n(528); const r = { stage: { draft: 0, archive: 1, history: 2 }, user: { avatar: { default: n.n(o)() } }, atoms: { resource: { render: { list: { info: { orders: [{ name: 'resourceSorting', title: 'Resource Sorting', by: 'asc' }] }, layouts: { list: {}, table: {} } } } } } }; }, 933: (e, t, n) => { n.d(t, { Z: () => o }); const o = { UserStar: 'User Star', UserLabel: 'User Label', HeartForAtom: 'Heart', KeyForAtom: 'Key', AtomClassSelectRoleTip: 'Select Role', SelectLanguageTip: 'Select Language', RevertToThisRevision: 'Revert To This Revision', DeleteBulkNotAllDone: 'Some Items Cannot be Deleted' }; }, 978: (e, t, n) => { n.d(t, { Z: () => o }); const o = { Name: '名称', Description: '描述', Menu: '菜单', Scenes: '场景', Modules: '模块', Stars: '星标', Star: '星标', Unstar: '取消星标', Starred: '已加星标', Back: '返回', Done: '完成', Cancel: '取消', Close: '关闭', Create: '新建', Others: '其他', List: '列表', Tools: '工具', Draft: '草稿', Drafts: '草稿', Archive: '归档', Archives: '归档', History: '历史', Histories: '历史', Labels: '标签', Submit: '提交', Edit: '编辑', View: '查看', Save: '保存', Delete: '删除', Red: '红色', Orange: '橘色', Yellow: '黄色', Blue: '蓝色', Green: '绿色', Purple: '紫色', Label: '标签', Comment: '评论', Comments: '评论', Creator: '创建人', Username: '用户名', Realname: '真实姓名', Email: '电子邮箱', Mobile: '手机号', Motto: '箴言', Locale: '本地化', Search: '搜索', Link: '链接', Select: '选择', Selecting: '选择中', Remove: '移除', HeartForAtom: '点赞', Hearted: '已点赞', AtomClassSelectRoleTip: '选择角色', SelectLanguageTip: '选择语言', Filter: '筛选', Clone: '克隆', Export: '导出', Exports: '导出', RevertToThisRevision: '恢复到此版本', DeleteBulkNotAllDone: '某些条目无法删除', Settings: '设置', Extra: '额外', Male: '男', Female: '女', Revision: '修订', Version: '版本', KeyForAtom: '关键字', Content: '内容', Enable: '启用', Enabled: '已启用', Disable: '禁用', Disabled: '已禁用', Saved: '已保存', Catalog: '目录', Category: '目录', Categories: '目录', Tag: '标签', Tags: '标签', Url: '链接', Add: '添加', Move: '移动', Root: '根', Title: '标题', Sticky: '置顶', Sorting: '排序', Flag: '标记', Hidden: '隐藏', Keywords: '关键字', Language: '语言', Languages: '语言', Config: '配置', Default: '缺省', Block: '区块', Build: '构建', Preview: '预览', Site: '站点', seconds: '秒', Seconds: '秒', UserStar: '用户星标', UserLabel: '用户标签', Mine: '我的', Resource: '资源', Type: '类型', Authorize: '授权', Options: '选项', Task: '任务', Tasks: '任务', Claimings: '待签收', Handlings: '处理中', Completeds: '已完成', Flow: '流程', Flows: '流程', Initiateds: '发起的', Participateds: '参与的', Ends: '已结束', User: '用户', Instance: '实例', Stats: '统计', Self: '自己', 'New Category': '新目录', 'Advanced Filter': '高级筛选', 'Atom Flag': '原子标记', 'Atom Name': '原子名称', 'Modification Time': '修改时间', 'Comment List': '评论列表', 'Created Time': '创建时间', 'Search Menu': '搜索菜单', 'Search Atom': '搜索原子', 'Search Result': '搜索结果', 'Select Atom Class': '选择原子类型', 'Select Menu': '选择菜单', 'Select Function': '选择功能', 'Select Panel': '选择边栏', 'Select Widget': '选择部件', 'Atom Class': '原子类型', 'Allow Comment': '允许评论', 'Attachment List': '附件列表', 'Flag Not Found': 'Flag未发现', 'Friendly Tips': '友情提示', 'Please Sign In': '请登录', 'My Atoms': '我的原子', 'Edit Again': '再次编辑', 'Not Found': '未发现', 'Info Group': '信息组', 'Function Group': '功能组', 'Extra Group': '额外组', 'Please specify the tag name': '请指定标签名称', 'Please specify the new tag name': '请指定新标签名称', 'Please specify the category name': '请指定目录名称', 'Please specify the language': '请指定语言', 'Select Category': '选择目录', 'Select Tags': '选择标签', 'Selected Tags': '已选标签', 'Basic Info': '基本信息', 'Category Name': '目录名称', 'Extra Attributes': '额外属性', 'Resource Type': '资源类型', 'Resource Sorting': '资源排序' }; }, 137: (e, t, n) => { n.d(t, { Z: () => o }); const o = { 'en-us': n(933).Z, 'zh-cn': n(978).Z }; }, 292: (e, t, n) => { let o; n.r(t), n.d(t, { default: () => r }), n(824); const r = { install(e, t) { return o ? console.error('already installed.') : (o = e, t({ routes: n(644).Z, store: n(81).Z(o), config: n(788).Z, locales: n(137).Z, components: n(744).Z, mixins: n(248).Z })); } }; }, 248: (e, t, n) => { n.d(t, { Z: () => o }); const o = { ebAtomClasses: { computed: { atomClassesAll() { return this.$store.getState('a/base/atomClasses'); } }, methods: { getAtomClass(e) { return this.atomClassesAll && e ? this.atomClassesAll[e.module][e.atomClassName] : null; } }, created() { const e = this; this.$store.dispatch('a/base/getAtomClasses').then(function() { e.onAtomClassesReady && e.onAtomClassesReady(); }); } }, ebAtomActions: { computed: { actionsAll() { return this.$store.getState('a/base/actions'); } }, methods: { getAction(e) { return this.actionsAll ? this.actionsAll[e.module][e.atomClassName][e.name] : null; }, getActionTitle(e, t) { if (e.name === 'write' && void 0 !== t) { if (t === 0) return this.$text('Edit'); if (t === 1) return this.$text('Edit Again'); if (t === 2) return this.$text('RevertToThisRevision'); } const n = this.getAction(e); return n ? n.titleLocale : null; }, getActionsOfAtomClass(e) { return e && this.actionsAll ? this.actionsAll[e.module][e.atomClassName] : null; } }, created() { this.$store.dispatch('a/base/getActions'); } }, ebModules: { computed: { modulesAll() { return this.$store.getState('a/base/modules'); } }, created() { this.$store.dispatch('a/base/getModules'); }, methods: { getModule(e) { return this.modulesAll ? this.modulesAll[e] : null; } } } }; }, 644: (e, t, n) => { n.d(t, { Z: () => o }); const o = []; }, 81: (e, t, n) => {
      function o(e, t) { (t == null || t > e.length) && (t = e.length); for (var n = 0, o = new Array(t); n < t; n++)o[n] = e[n]; return o; } function r(e, t) { const n = Object.keys(e); if (Object.getOwnPropertySymbols) { let o = Object.getOwnPropertySymbols(e); t && (o = o.filter(function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; })), n.push.apply(n, o); } return n; } function a(e) { for (let t = 1; t < arguments.length; t++) { var n = arguments[t] != null ? arguments[t] : {}; t % 2 ? r(Object(n), !0).forEach(function(t) { i(e, t, n[t]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)); }); } return e; } function i(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e; } function s(e) {
        const t = { module: 'a-base', atomClassName: 'resource' },
          n = e.prototype.$meta.util.queue(function(t, n) { if (e.prototype.$meta.store.getState('auth/user').op.id !== t.userId) return n(); e.prototype.$meta.api.post('/a/base/layoutConfig/saveKey', t.data).then(function() { n(); }).catch(function(e) { console.error(e), n(); }); }); return e.prototype.$meta.eventHub.$on('auth:login', function(t) { e.prototype.$meta.store.commit('a/base/authLogin', t); }), { state: { labels: null, layoutConfig: {}, userAtomClassRolesPreferred: {}, resourceTrees: {}, resources: {}, resourcesArray: {}, categories: {}, tags: {}, locales: null, modules: null, atomClasses: null, actions: null, resourceTypes: null }, getters: { userLabels(e) { return e.labels; } }, mutations: { authLogin(e) { e.labels = null, e.layoutConfig = {}, e.userAtomClassRolesPreferred = {}, e.resourceTrees = {}, e.resources = {}, e.resourcesArray = {}, e.categories = {}, e.tags = {}; }, setLabels(e, t) { e.labels = t; }, setLayoutConfig(e, t) {
          const n = t.module,
            o = t.data; e.layoutConfig = a(a({}, e.layoutConfig), {}, i({}, n, o));
        }, setLayoutConfigKey(t, o) {
          let r = o.module,
            s = o.key,
            c = o.value,
            l = t.layoutConfig[r] || {}; l = a(a({}, l), {}, i({}, s, c)), t.layoutConfig = a(a({}, t.layoutConfig), {}, i({}, r, l)); const u = e.prototype.$meta.store.getState('auth/user'); if (!u.op.anonymous) { const A = { module: r, key: s, value: c }; n.push({ userId: u.op.id, data: A }); }
        }, setUserAtomClassRolesPreferred(e, t) {
          const n = t.atomClassId,
            o = t.roleIdOwner; e.userAtomClassRolesPreferred = a(a({}, e.userAtomClassRolesPreferred), {}, i({}, n, o));
        }, setLocales(e, t) { e.locales = t; }, setModules(e, t) { e.modules = t; }, setAtomClasses(e, t) { e.atomClasses = t; }, setActions(e, t) { e.actions = t; }, setResourceTypes(e, t) { e.resourceTypes = t; }, setResourceTrees(e, t) {
          const n = t.resourceType,
            o = t.tree; e.resourceTrees = a(a({}, e.resourceTrees), {}, i({}, n, o));
        }, setResources(e, t) {
          const n = t.resourceType,
            o = t.resources,
            r = t.resourcesArray; e.resources = a(a({}, e.resources), {}, i({}, n, o)), e.resourcesArray = a(a({}, e.resourcesArray), {}, i({}, n, r));
        }, setCategories(e, t) {
          const n = t.atomClass,
            o = t.language,
            r = t.categories,
            s = ''.concat(n.module, ':').concat(n.atomClassName, ':').concat(o || ''); e.categories = a(a({}, e.categories), {}, i({}, s, r));
        }, setTags(e, t) {
          const n = t.atomClass,
            o = t.language,
            r = t.tags,
            s = ''.concat(n.module, ':').concat(n.atomClassName, ':').concat(o || ''); e.tags = a(a({}, e.tags), {}, i({}, s, r));
        } }, actions: { getLabels(t) {
          const n = t.commit,
            o = t.getters; return new Promise(function(t, r) { const a = o.userLabels; if (a) return t(a); e.prototype.$meta.api.post('/a/base/user/getLabels').then(function(e) { n('setLabels', e = e || {}), t(e); }).catch(function(e) { r(e); }); });
        }, getModules(t) {
          const n = t.state,
            o = t.commit; return new Promise(function(t, r) { if (n.modules) return t(n.modules); e.prototype.$meta.api.post('/a/base/base/modules').then(function(e) { o('setModules', e = e || {}), t(e); }).catch(function(e) { r(e); }); });
        }, getResourceTypes(t) {
          const n = t.state,
            o = t.commit; return new Promise(function(t, r) { if (n.resourceTypes) return t(n.resourceTypes); e.prototype.$meta.api.post('/a/base/base/resourceTypes').then(function(e) { o('setResourceTypes', e = e || {}), t(e); }).catch(function(e) { r(e); }); });
        }, getLocales(t) {
          const n = t.state,
            o = t.commit; return new Promise(function(t, r) { if (n.locales) return t(n.locales); e.prototype.$meta.api.post('/a/base/base/locales').then(function(e) { o('setLocales', e = e || []), t(e); }).catch(function(e) { r(e); }); });
        }, getAtomClasses(t) {
          const n = t.state,
            o = t.commit; return new Promise(function(t, r) { if (n.atomClasses) return t(n.atomClasses); e.prototype.$meta.api.post('/a/base/base/atomClasses').then(function(e) { o('setAtomClasses', e = e || {}), t(e); }).catch(function(e) { r(e); }); });
        }, getActions(t) {
          const n = t.state,
            o = t.commit; return new Promise(function(t, r) { if (n.actions) return t(n.actions); e.prototype.$meta.api.post('/a/base/base/actions').then(function(e) { o('setActions', e = e || {}), t(e); }).catch(function(e) { r(e); }); });
        }, getResourceTrees(n, o) {
          const r = n.state,
            a = n.commit,
            i = o.resourceType; return new Promise(function(n, o) { if (r.resourceTrees[i]) return n(r.resourceTrees[i]); e.prototype.$meta.api.post('/a/base/category/child', { atomClass: t, categoryId: 0, categoryName: i }).then(function(r) { e.prototype.$meta.api.post('/a/base/category/tree', { atomClass: t, categoryId: r.id, categoryHidden: 0, setLocale: !0 }).then(function(e) { const t = e.list; a('setResourceTrees', { resourceType: i, tree: t }), n(t); }).catch(function(e) { o(e); }); }).catch(function(e) { o(e); }); });
        }, getResources(e, t) { return r({ state: e.state, commit: e.commit }, { resourceType: t.resourceType, useArray: !1 }); }, getResourcesArray(e, t) { return r({ state: e.state, commit: e.commit }, { resourceType: t.resourceType, useArray: !0 }); }, getCategories(t, n) {
          const o = t.state,
            r = t.commit,
            a = n.atomClass,
            i = n.language; return new Promise(function(t, n) { const s = ''.concat(a.module, ':').concat(a.atomClassName, ':').concat(i || ''); if (o.categories[s]) return t(o.categories[s]); e.prototype.$meta.api.post('/a/base/category/children', { atomClass: a, language: i || void 0 }).then(function(e) { const n = e.list; r('setCategories', { atomClass: a, language: i, categories: n }), t(n); }).catch(function(e) { n(e); }); });
        }, getTags(t, n) {
          const o = t.state,
            r = t.commit,
            a = n.atomClass,
            i = n.language; return new Promise(function(t, n) { const s = ''.concat(a.module, ':').concat(a.atomClassName, ':').concat(i || ''); if (o.tags[s]) return t(o.tags[s]); const c = { where: {}, orders: [[ 'tagName', 'asc' ]] }; i && (c.where.language = i), e.prototype.$meta.api.post('/a/base/tag/list', { atomClass: a, options: c }).then(function(e) { const n = e.list; r('setTags', { atomClass: a, language: i, tags: n }), t(n); }).catch(function(e) { n(e); }); });
        }, getLayoutConfig(t, n) {
          const o = t.state,
            r = t.commit; return new Promise(function(t, a) { if (o.layoutConfig[n]) return t(o.layoutConfig[n]); e.prototype.$meta.api.post('/a/base/layoutConfig/load', { module: n }).then(function(e) { r('setLayoutConfig', { module: n, data: e = e || {} }), t(e); }).catch(function(e) { a(e); }); });
        } } }; function r(t, n) {
          const r = t.state,
            a = t.commit,
            i = n.resourceType,
            s = n.useArray; return new Promise(function(t, n) {
            if (r.resources[i]) return t(s ? r.resourcesArray[i] : r.resources[i]); e.prototype.$meta.api.post('/a/base/resource/select', { options: { resourceType: i, orders: [[ 'f.resourceSorting', 'asc' ], [ 'f.createdAt', 'asc' ]] } }).then(function(e) {
              let n,
                r = e.list,
                c = {},
                l = function(e, t) {
                  let n; if (typeof Symbol === 'undefined' || e[Symbol.iterator] == null) {
                    if (Array.isArray(e) || (n = function(e, t) { if (e) { if (typeof e === 'string') return o(e, t); let n = Object.prototype.toString.call(e).slice(8, -1); return n === 'Object' && e.constructor && (n = e.constructor.name), n === 'Map' || n === 'Set' ? Array.from(e) : n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0; } }(e)) || t && e && typeof e.length === 'number') {
                      n && (e = n); let r = 0,
                        a = function() {}; return { s: a, n() { return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }; }, e(e) { throw e; }, f: a };
                    } throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                  } let i,
                    s = !0,
                    c = !1; return { s() { n = e[Symbol.iterator](); }, n() { const e = n.next(); return s = e.done, e; }, e(e) { c = !0, i = e; }, f() { try { s || n.return == null || n.return(); } finally { if (c) throw i; } } };
                }(r); try { for (l.s(); !(n = l.n()).done;) { const u = n.value; c[u.atomStaticKey] = u; } } catch (e) { l.e(e); } finally { l.f(); }a('setResources', { resourceType: i, resources: c, resourcesArray: r }), t(s ? r : c);
            }).catch(function(e) { n(e); });
          });
        }
      }n.d(t, { Z: () => s });
    }, 891: (e, t, n) => {
      const o = n(233),
        r = n(361)(o); r.push([ e.id, ':root .comment .header-container {\n  width: 100%;\n}\n:root .comment .header-atom a.link {\n  text-transform: none;\n  text-align: right;\n}\n:root .comment .header-comment {\n  display: flex;\n  justify-content: space-between;\n}\n:root .comment .title .avatar {\n  float: left;\n}\n:root .comment .title .name {\n  margin-left: 40px;\n  font-size: 14px;\n  font-weight: 600;\n}\n:root .comment .title .date {\n  margin-top: -4px;\n  margin-left: 39px;\n  font-size: 13px;\n  color: var(--f7-text-editor-placeholder-color);\n}\n:root .comment .actions {\n  display: flex;\n}\n:root .comment .actions a.action {\n  min-width: 0;\n  height: auto;\n  color: var(--f7-text-editor-placeholder-color);\n}\n:root .comment .actions a.action .icon {\n  display: inline;\n  font-size: 18px;\n}\n:root .comment .actions a.action + a.action {\n  margin-left: 6px;\n}\n:root .item .header {\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 2px 8px -8px 18px;\n  font-size: 12px;\n  color: var(--f7-block-header-text-color);\n}\n:root .item .header .mediaLabel {\n  display: flex;\n  align-items: center;\n}\n:root .item .header .date span {\n  margin-left: 4px;\n}\n:root .item .title .date {\n  font-size: 10px;\n  color: var(--f7-text-editor-placeholder-color);\n}\n:root .item .after .date {\n  font-size: 10px;\n  color: var(--f7-block-header-text-color);\n}\n:root .item .summary {\n  position: absolute;\n  left: 72px;\n  bottom: -4px;\n  height: 20px;\n  color: var(--f7-block-header-text-color);\n  font-size: 12px;\n}\n:root .atom-item-title-info-container .info-avatar,\n:root .atom-item-title-info-container .info-date {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  color: var(--f7-block-footer-text-color);\n  font-size: 10px;\n}\n:root .atom-list-subnavbar-container,\n:root .atom-item-subnavbar-container {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  font-size: var(--f7-toolbar-font-size);\n}\n:root .atom-list-subnavbar-container .actions-block,\n:root .atom-item-subnavbar-container .actions-block {\n  height: var(--f7-toolbar-height);\n  display: flex;\n  align-items: center;\n}\n:root .atom-list-subnavbar-container .actions-block a.link,\n:root .atom-item-subnavbar-container .actions-block a.link {\n  padding: 0 6px;\n  width: auto;\n  min-width: auto;\n}\n:root .atom-list-subnavbar-container .actions-block-left,\n:root .atom-item-subnavbar-container .actions-block-left {\n  justify-content: flex-start;\n}\n:root .atom-list-subnavbar-container .actions-block-right,\n:root .atom-item-subnavbar-container .actions-block-right {\n  justify-content: flex-end;\n}\n:root .atom-list-subnavbar-container .actions-block-right .info-avatar,\n:root .atom-item-subnavbar-container .actions-block-right .info-avatar,\n:root .atom-list-subnavbar-container .actions-block-right .info-date,\n:root .atom-item-subnavbar-container .actions-block-right .info-date {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  color: var(--f7-block-footer-text-color);\n  font-size: 10px;\n}\n:root .atom-list-layout-table-pagination-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 16px;\n}\n:root .atom-list-layout-table-cell-atomName {\n  position: relative;\n  width: 100%;\n  min-width: 0;\n}\n:root .atom-list-layout-table-cell-atomName .atomName-inner {\n  position: relative;\n  width: 100%;\n  min-width: 0;\n  display: flex;\n  justify-content: space-between;\n  box-sizing: border-box;\n  align-items: center;\n  align-self: stretch;\n}\n:root .atom-list-layout-table-cell-atomName .atomName-inner .atomName-left {\n  min-width: 0;\n  flex-shrink: 1;\n  white-space: var(--f7-list-item-title-white-space);\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n}\n:root .atom-list-layout-table-cell-atomName .atomName-inner .atomName-right {\n  white-space: nowrap;\n  flex-shrink: 0;\n  display: flex;\n}\n:root .atom-list-layout-table-cell-atomName .atomName-inner .stats span {\n  padding-right: 4px;\n}\n:root .atom-list-layout-table-cell-atomName .atomName-summary {\n  position: absolute;\n  left: 1px;\n  bottom: -7px;\n  height: 12px;\n  color: var(--f7-block-header-text-color);\n  font-size: 12px;\n}\n:root .atom-list-layout-table-cell-atomName .atomName-summary span + span {\n  margin-left: 4px;\n}\n:root .eb-view-size-medium form.eb-list-row,\n:root .eb-view-size-large form.eb-list-row {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n:root .eb-view-size-medium form.eb-list-row > ul,\n:root .eb-view-size-large form.eb-list-row > ul {\n  width: 100%;\n}\n:root .eb-view-size-medium form.eb-list-row .list-group,\n:root .eb-view-size-large form.eb-list-row .list-group {\n  width: 100%;\n}\n:root .eb-view-size-medium form.eb-list-row > .list-group.eb-list-group,\n:root .eb-view-size-large form.eb-list-row > .list-group.eb-list-group {\n  box-sizing: border-box;\n  width: calc((100% - var(--f7-grid-gap)) / 2);\n  margin-top: calc(var(--f7-grid-gap)/2);\n}\n:root .eb-view-size-medium form.eb-list-row > .list-group.eb-list-group-whole,\n:root .eb-view-size-large form.eb-list-row > .list-group.eb-list-group-whole {\n  box-sizing: border-box;\n  width: calc(100% - var(--f7-grid-gap)/2);\n  margin-top: calc(var(--f7-grid-gap)/2);\n}\n', '', { version: 3, sources: [ 'webpack://./front/src/assets/css/module.less' ], names: [], mappings: 'AAAA;EAKM,WAAA;AAHN;AAFA;EAUQ,oBAAA;EACA,iBAAA;AALR;AANA;EAgBM,aAAA;EACA,8BAAA;AAPN;AAVA;EAsBQ,WAAA;AATR;AAbA;EA0BQ,iBAAA;EACA,eAAA;EACA,gBAAA;AAVR;AAlBA;EAgCQ,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,8CAAA;AAXR;AAxBA;EAwCM,aAAA;AAbN;AA3BA;EA2CQ,YAAA;EACA,YAAA;EACA,8CAAA;AAbR;AAhCA;EAgDU,eAAA;EACA,eAAA;AAbV;AAgBQ;EACE,gBAAA;AAdV;AAvCA;EA6DM,kBAAA;EACA,sBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,yBAAA;EACA,eAAA;EACA,wCAAA;AAnBN;AAjDA;EAuEQ,aAAA;EACA,mBAAA;AAnBR;AArDA;EA6EU,gBAAA;AArBV;AAxDA;EAqFQ,eAAA;EACA,8CAAA;AA1BR;AA5DA;EA4FQ,eAAA;EACA,wCAAA;AA7BR;AAhEA;EAkGM,kBAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;EACA,wCAAA;EACA,eAAA;AA/BN;AAsCA;;EAMM,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EAEA,wCAAA;EACA,eAAA;AAzCN;AA6BA;;EAkBI,WAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;EACA,sCAAA;AA3CJ;AAoBA;;EA2BM,gCAAA;EACA,aAAA;EACA,mBAAA;AA3CN;AAcA;;EAgCQ,cAAA;EACA,WAAA;EACA,eAAA;AA1CR;AAQA;;EAuCM,2BAAA;AA3CN;AAIA;;EA2CM,yBAAA;AA3CN;AAAA;;;;EA+CQ,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EAEA,wCAAA;EACA,eAAA;AA1CR;AAXA;EA8DI,WAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;AAhDJ;AAlBA;EAsEI,kBAAA;EACA,WAAA;EACA,YAAA;AAjDJ;AAvBA;EA2EM,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,sBAAA;EACA,mBAAA;EACA,mBAAA;AAjDN;AAjCA;EAqFQ,YAAA;EACA,cAAA;EACA,kDAAA;EACA,kBAAA;EACA,gBAAA;EACA,uBAAA;EACA,eAAA;AAjDR;AA1CA;EA+FQ,mBAAA;EACA,cAAA;EACA,aAAA;AAlDR;AA/CA;EAsGU,kBAAA;AApDV;AAlDA;EA4GM,kBAAA;EACA,SAAA;EACA,YAAA;EACA,YAAA;EACA,wCAAA;EACA,eAAA;AAvDN;AA1DA;EAoHQ,gBAAA;AAvDR;AA+DA;;EAKM,aAAA;EACA,6BAAA;EACA,eAAA;EACA,uBAAA;AAhEN;AAkEM;;EACE,WAAA;AA/DR;AAoDA;;EAeQ,WAAA;AA/DR;AAgDA;;EAmBQ,sBAAA;EACA,4CAAA;EACA,sCAAA;AA/DR;AA0CA;;EAyBQ,sBAAA;EACA,wCAAA;EACA,sCAAA;AA/DR', sourcesContent: [ ':root {\n\n  .comment {\n\n    .header-container {\n      width: 100%;\n    }\n\n    .header-atom {\n      a.link {\n        text-transform: none;\n        text-align: right;\n      }\n    }\n\n    .header-comment {\n      display: flex;\n      justify-content: space-between;\n    }\n\n    .title {\n      .avatar {\n        float: left;\n      }\n\n      .name {\n        margin-left: 40px;\n        font-size: 14px;\n        font-weight: 600;\n      }\n\n      .date {\n        margin-top: -4px;\n        margin-left: 39px;\n        font-size: 13px;\n        color: var(--f7-text-editor-placeholder-color);\n      }\n    }\n\n    .actions {\n      display: flex;\n\n      a.action {\n        min-width: 0;\n        height: auto;\n        color: var(--f7-text-editor-placeholder-color);\n\n        .icon {\n          display: inline;\n          font-size: 18px;\n        }\n\n        &+a.action {\n          margin-left: 6px;\n        }\n      }\n    }\n  }\n\n  .item {\n    .header {\n      position: relative;\n      box-sizing: border-box;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin: 2px 8px -8px 18px;\n      font-size: 12px;\n      color: var(--f7-block-header-text-color);\n\n      .mediaLabel {\n        display: flex;\n        align-items: center;\n      }\n\n      .date {\n        span {\n          margin-left: 4px;\n        }\n      }\n\n    }\n\n    .title {\n      .date {\n        font-size: 10px;\n        color: var(--f7-text-editor-placeholder-color);\n      }\n    }\n\n    .after {\n      .date {\n        font-size: 10px;\n        color: var(--f7-block-header-text-color);\n      }\n    }\n\n    .summary {\n      position: absolute;\n      left: 72px;\n      bottom: -4px;\n      height: 20px;\n      color: var(--f7-block-header-text-color);\n      font-size: 12px;\n    }\n\n  }\n\n}\n\n:root {\n\n  .atom-item-title-info-container {\n\n    .info-avatar,\n    .info-date {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: flex-start;\n\n      color: var(--f7-block-footer-text-color);\n      font-size: 10px;\n    }\n  }\n\n  .atom-list-subnavbar-container,\n  .atom-item-subnavbar-container {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    font-size: var(--f7-toolbar-font-size);\n\n\n    .actions-block {\n      height: var(--f7-toolbar-height);\n      display: flex;\n      align-items: center;\n\n      a.link {\n        padding: 0 6px;\n        width: auto;\n        min-width: auto;\n      }\n    }\n\n    .actions-block-left {\n      justify-content: flex-start;\n    }\n\n    .actions-block-right {\n      justify-content: flex-end;\n\n      .info-avatar,\n      .info-date {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: flex-start;\n\n        color: var(--f7-block-footer-text-color);\n        font-size: 10px;\n      }\n\n    }\n  }\n\n  .atom-list-layout-table-container {}\n\n  .atom-list-layout-table-pagination-container {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 16px;\n  }\n\n  .atom-list-layout-table-cell-atomName {\n    position: relative;\n    width: 100%;\n    min-width: 0;\n\n    .atomName-inner {\n      position: relative;\n      width: 100%;\n      min-width: 0;\n      display: flex;\n      justify-content: space-between;\n      box-sizing: border-box;\n      align-items: center;\n      align-self: stretch;\n\n      .atomName-left {\n        min-width: 0;\n        flex-shrink: 1;\n        white-space: var(--f7-list-item-title-white-space);\n        position: relative;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 100%;\n      }\n\n      .atomName-right {\n        white-space: nowrap;\n        flex-shrink: 0;\n        display: flex;\n      }\n\n      .stats {\n        span {\n          padding-right: 4px;\n        }\n      }\n    }\n\n    .atomName-summary {\n      position: absolute;\n      left: 1px;\n      bottom: -7px;\n      height: 12px;\n      color: var(--f7-block-header-text-color);\n      font-size: 12px;\n\n      span+span {\n        margin-left: 4px;\n      }\n    }\n\n  }\n\n}\n\n:root {\n\n  .eb-view-size-medium,\n  .eb-view-size-large {\n    form.eb-list-row {\n      display: flex;\n      justify-content: space-evenly;\n      flex-wrap: wrap;\n      align-items: flex-start;\n\n      &>ul {\n        width: 100%;\n      }\n\n      .list-group {\n        width: 100%;\n      }\n\n      >.list-group.eb-list-group {\n        box-sizing: border-box;\n        width: calc((100% - var(--f7-grid-gap)) / 2);\n        margin-top: calc(var(--f7-grid-gap)/2);\n      }\n\n      >.list-group.eb-list-group-whole {\n        box-sizing: border-box;\n        width: calc((100% - var(--f7-grid-gap)/2));\n        margin-top: calc(var(--f7-grid-gap)/2);\n      }\n\n    }\n  }\n}\n' ], sourceRoot: '' }]), e.exports = r;
    }, 361: e => { e.exports = function(e) { const t = []; return t.toString = function() { return this.map(function(t) { const n = e(t); return t[2] ? '@media '.concat(t[2], ' {').concat(n, '}') : n; }).join(''); }, t.i = function(e, n, o) { typeof e === 'string' && (e = [[ null, e, '' ]]); const r = {}; if (o) for (let a = 0; a < this.length; a++) { const i = this[a][0]; i != null && (r[i] = !0); } for (let s = 0; s < e.length; s++) { const c = [].concat(e[s]); o && r[c[0]] || (n && (c[2] ? c[2] = ''.concat(n, ' and ').concat(c[2]) : c[2] = n), t.push(c)); } }, t; }; }, 233: e => {
      function t(e, t) { (t == null || t > e.length) && (t = e.length); for (var n = 0, o = new Array(t); n < t; n++)o[n] = e[n]; return o; }e.exports = function(e) {
        let n,
          o,
          r = (o = 4, function(e) { if (Array.isArray(e)) return e; }(n = e) || function(e, t) {
            if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(e)) {
              let n = [],
                o = !0,
                r = !1,
                a = void 0; try { for (var i, s = e[Symbol.iterator](); !(o = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); o = !0); } catch (e) { r = !0, a = e; } finally { try { o || s.return == null || s.return(); } finally { if (r) throw a; } } return n;
            }
          }(n, o) || function(e, n) { if (e) { if (typeof e === 'string') return t(e, n); let o = Object.prototype.toString.call(e).slice(8, -1); return o === 'Object' && e.constructor && (o = e.constructor.name), o === 'Map' || o === 'Set' ? Array.from(e) : o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? t(e, n) : void 0; } }(n, o) || function() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }()),
          a = r[1],
          i = r[3]; if (typeof btoa === 'function') {
          const s = btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            c = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(s),
            l = '/*# '.concat(c, ' */'),
            u = i.sources.map(function(e) { return '/*# sourceURL='.concat(i.sourceRoot || '').concat(e, ' */'); }); return [ a ].concat(u).concat([ l ]).join('\n');
        } return [ a ].join('\n');
      };
    }, 528: (e, t, n) => { e.exports = n.p + 'static/img/user.5808879040cd212657f3512143963f8f.png'; }, 824: (e, t, n) => { let o = n(891); typeof o === 'string' && (o = [[ e.id, o, '' ]]), o.locals && (e.exports = o.locals), (0, n(159).Z)('a5860946', o, !0, {}); }, 159: (e, t, n) => {
      function o(e, t) {
        for (var n = [], o = {}, r = 0; r < t.length; r++) {
          const a = t[r],
            i = a[0],
            s = { id: e + ':' + r, css: a[1], media: a[2], sourceMap: a[3] }; o[i] ? o[i].parts.push(s) : n.push(o[i] = { id: i, parts: [ s ] });
        } return n;
      }n.d(t, { Z: () => d }); const r = typeof document !== 'undefined'; if (typeof DEBUG !== 'undefined' && DEBUG && !r) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."); let a = {},
        i = r && (document.head || document.getElementsByTagName('head')[0]),
        s = null,
        c = 0,
        l = !1,
        u = function() {},
        A = null,
        m = 'data-vue-ssr-id',
        f = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase()); function d(e, t, n, r) { l = n, A = r || {}; let i = o(e, t); return p(i), function(t) { for (var n = [], r = 0; r < i.length; r++) { const s = i[r]; (c = a[s.id]).refs--, n.push(c); } for (t ? p(i = o(e, t)) : i = [], r = 0; r < n.length; r++) { var c; if ((c = n[r]).refs === 0) { for (let l = 0; l < c.parts.length; l++)c.parts[l](); delete a[c.id]; } } }; } function p(e) {
        for (let t = 0; t < e.length; t++) {
          const n = e[t],
            o = a[n.id]; if (o) { o.refs++; for (var r = 0; r < o.parts.length; r++)o.parts[r](n.parts[r]); for (;r < n.parts.length; r++)o.parts.push(b(n.parts[r])); o.parts.length > n.parts.length && (o.parts.length = n.parts.length); } else { const i = []; for (r = 0; r < n.parts.length; r++)i.push(b(n.parts[r])); a[n.id] = { id: n.id, refs: 1, parts: i }; }
        }
      } function g() { const e = document.createElement('style'); return e.type = 'text/css', i.appendChild(e), e; } function b(e) {
        let t,
          n,
          o = document.querySelector('style[' + m + '~="' + e.id + '"]'); if (o) { if (l) return u; o.parentNode.removeChild(o); } if (f) { const r = c++; o = s || (s = g()), t = y.bind(null, o, r, !1), n = y.bind(null, o, r, !0); } else o = g(), t = x.bind(null, o), n = function() { o.parentNode.removeChild(o); }; return t(e), function(o) { if (o) { if (o.css === e.css && o.media === e.media && o.sourceMap === e.sourceMap) return; t(e = o); } else n(); };
      } let h,
        v = (h = [], function(e, t) { return h[e] = t, h.filter(Boolean).join('\n'); }); function y(e, t, n, o) {
        const r = n ? '' : o.css; if (e.styleSheet)e.styleSheet.cssText = v(t, r); else {
          const a = document.createTextNode(r),
            i = e.childNodes; i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
        }
      } function x(e, t) {
        let n = t.css,
          o = t.media,
          r = t.sourceMap; if (o && e.setAttribute('media', o), A.ssrId && e.setAttribute(m, t.id), r && (n += '\n/*# sourceURL=' + r.sources[0] + ' */', n += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + ' */'), e.styleSheet)e.styleSheet.cssText = n; else { for (;e.firstChild;)e.removeChild(e.firstChild); e.appendChild(document.createTextNode(n)); }
      }
    } },
    t = {}; function n(o) { if (t[o]) return t[o].exports; const r = t[o] = { id: o, exports: {} }; return e[o](r, r.exports, n), r.exports; } return n.n = e => { const t = e && e.__esModule ? () => e.default : () => e; return n.d(t, { a: t }), t; }, n.d = (e, t) => { for (const o in t)n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] }); }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); }, n.p = '', n(292);
})();
// # sourceMappingURL=front.js.map
