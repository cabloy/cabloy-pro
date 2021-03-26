module.exports = app => {

  class Site extends app.Service {

    async getSite({ atomClass, language, options }) {
      return await this.ctx.bean.cms.site.getSite({ atomClass, language, options });
    }

    async getConfigSiteBase({ atomClass }) {
      return await this.ctx.bean.cms.site.getConfigSiteBase({ atomClass });
    }

    async getConfigSite({ atomClass }) {
      return await this.ctx.bean.cms.site.getConfigSite({ atomClass });
    }

    // save site config
    async setConfigSite({ atomClass, data }) {
      return await this.ctx.bean.cms.site.setConfigSite({ atomClass, data });
    }

    async getConfigLanguagePreview({ atomClass, language }) {
      return await this.ctx.bean.cms.site.getConfigLanguagePreview({ atomClass, language });
    }

    async getConfigLanguage({ atomClass, language }) {
      return await this.ctx.bean.cms.site.getConfigLanguage({ atomClass, language });
    }

    // save language config
    async setConfigLanguage({ atomClass, language, data }) {
      return await this.ctx.bean.cms.site.setConfigLanguage({ atomClass, language, data });
    }

    async getLanguages({ atomClass }) {
      return await this.ctx.bean.cms.site.getLanguages({ atomClass });
    }

    async getUrl({ atomClass, language, path }) {
      return await this.ctx.bean.cms.site.getUrl({ atomClass, language, path });
    }

    buildLanguagesQueue({ atomClass, progressId }) {
      this.ctx.bean.cms.site.buildLanguagesQueue({ atomClass, progressId });
    }

    buildLanguageQueue({ atomClass, language, progressId }) {
      this.ctx.bean.cms.site.buildLanguageQueue({ atomClass, language, progressId });
    }

    async getStats({ atomClass, languages }) {
      return await this.ctx.bean.cms.site.getStats({ atomClass, languages });
    }

    async blockSave({ blockName, item }) {
      // block
      const blocks = this.getBlocks();
      const block = blocks[blockName];
      // validate
      await this.ctx.bean.validation.validate({
        module: block.validator.module,
        validator: block.validator.validator,
        schema: null,
        data: item,
      });
      // output
      if (!block.output) return item;
      return await block.output({ ctx: this.ctx, block, data: item });
    }

    getBlocks() {
      return this.ctx.bean.cms.site.getBlocks();
    }

    async checkFile({ file, mtime }) {
      return await this.ctx.bean.cms.site.checkFile({ file, mtime });
    }

  }

  return Site;
};
