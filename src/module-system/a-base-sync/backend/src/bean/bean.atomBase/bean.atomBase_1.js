// maybe modified by user
const __atomBasicFields = [
  'atomName', //
  'atomLanguage',
  'atomCategoryId',
  'atomTags',
  'allowComment',
  // 'atomStatic',
  // 'atomStaticKey',
  // 'atomRevision',
];
const __itemBasicFields = ['iid', 'atomId', 'itemId', 'atomStage'];

module.exports = app => {
  const moduleInfo = app.meta.mockUtil.parseInfoFromPackage(__dirname);
  class AtomBase {
    get modelResourceRole() {
      return this.ctx.model.module(moduleInfo.relativeName).resourceRole;
    }

    async _writeValidate({ atomClass, target, key, item, options, user }) {
      // options
      const ignoreValidate = options && options.ignoreValidate;
      if (!ignoreValidate) {
        // itemHold
        const itemHold = {};
        for (const field of __itemBasicFields) {
          if (item[field] !== undefined) {
            itemHold[field] = item[field];
          }
        }
        // filterOptions
        const filterOptions = { type: true, ebReadOnly: true };
        if (target) {
          filterOptions.ignoreRules = true;
        }
        // validate
        this.ctx.bean.util.setProperty(this.ctx, 'meta.validateHost', {
          atomClass,
          key,
          options,
          user,
        });
        await this.ctx.bean.validation._validate({ atomClass, data: item, options, filterOptions });
        this.ctx.bean.util.setProperty(this.ctx, 'meta.validateHost', null);
        // itemHold
        for (const field of __itemBasicFields) {
          if (item[field] === undefined && itemHold[field] !== undefined) {
            item[field] = itemHold[field];
          }
        }
      }
      // append itemId
      //   why always set value here: resource, data.id!==key.itemId
      item.id = key.itemId;
    }

    async _writeAtom({ key, item, user, atomSimple, atomStage }) {
      // write atom
      const atom = {};
      for (const field of __atomBasicFields) {
        if (item[field] !== undefined) atom[field] = item[field];
      }
      if ((atomSimple === 0 && atomStage === 0) || (atomSimple === 1 && atomStage === 1)) {
        atom.updatedAt = new Date();
      }
      if (atom.atomName) {
        atom.atomName = atom.atomName.trim();
      }
      // update
      atom.id = key.atomId;
      await this.ctx.bean.atom._update({ atom, user });
    }

    _ensureItemMeta(item) {
      if (!item) return null;
      if (!item._meta) item._meta = {};
      if (!item._meta.flags) item._meta.flags = [];
      return item._meta;
    }

    _appendRevisionToHistory({ item }) {
      if (!item) return;
      if (!item.atomRevision || item.atomStage !== 2) return;
      const meta = this._ensureItemMeta(item);
      meta.flags.push(`Rev.${item.atomRevision}`);
    }

    async _dictTranslate({ item, atomClassBase }) {
      const fields = atomClassBase.dict && atomClassBase.dict.fields;
      for (const fieldName in fields) {
        const field = fields[fieldName];
        const code = item[fieldName];
        const _item = await this._dictTranslateField({ fieldName, code, field });
        if (_item) {
          Object.assign(item, _item);
        }
      }
    }

    async _dictTranslateField({ fieldName, code, field }) {
      if (field.translate === false) return null;
      if (code === undefined) return null;
      //
      const dictItem = await this.ctx.bean.dict.findItem({
        dictKey: field.dictKey,
        code,
        options: {
          separator: field.separator,
        },
      });
      if (!dictItem) return null;
      // res
      const _item = {};
      _item[`_${fieldName}Title`] = dictItem.titleFull;
      _item[`_${fieldName}TitleLocale`] = dictItem.titleLocaleFull;
      if (dictItem.options && dictItem.options.icon) {
        _item[`_${fieldName}Options`] = {
          icon: dictItem.options.icon,
        };
      }
      return _item;
    }

    async _writeHandleResource({ atomClass, atomClassBase, key, item }) {
      // atomId/stage
      const atomId = key.atomId;
      const atomStage = item.atomStage;
      const isAtomClassRole = atomClass.module === 'a-base' && atomClass.atomClassName === 'role';
      if (!isAtomClassRole && atomClassBase.resource && atomStage === 1) {
        // update locales
        if (item.atomName) {
          await this.ctx.bean.resource.setLocales({
            atomId,
            atomName: item.atomName,
          });
        }
        // role
        //   check if any role exists
        const right = await this.modelResourceRole.get({
          atomId,
        });
        if (!right) {
          // always add role of template.system when no records
          const roleSystem = await this.ctx.bean.role.parseRoleName({ roleName: 'template.system' });
          await this.ctx.bean.resource.addResourceRole({
            atomId,
            roleId: roleSystem.id,
          });
        }
      }
    }

    async _atomDisabledTranslate({ atomClass, item }) {
      //
      if (!item.atomDisabled) return;
      //
      if (!atomClass) {
        atomClass = await this.ctx.bean.atomClass.get({ id: item.atomClassId });
      }
      //
      const actionBase = this.ctx.bean.base.action({
        module: atomClass.module,
        atomClassName: atomClass.atomClassName,
        name: 'disable',
      });
      const title = this.ctx.bean.util.getProperty(actionBase, 'params.atomDisabled.title') || 'Disabled';
      const meta = this._ensureItemMeta(item);
      meta.flags.push(this.ctx.text(title));
    }
  }

  return AtomBase;
};
