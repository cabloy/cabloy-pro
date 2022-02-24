export default {
  data() {
    return {
      iconsAll: null,
    };
  },
  computed: {
    pageTitle() {
      return this.$text('Icons');
    },
  },
  created() {
    this.onSearchbarSearch = this.$meta.util.debounce((searchbar, query) => {
      this._onSearch(query);
    }, 300);
    this._loadIcons();
  },
  methods: {
    onClickEnable() {
      this.$refs.searchbar.f7Searchbar.enable(true);
    },
    _onSearch(query) {
      console.log(query);
    },
    async _loadIcons() {
      this.iconsAll = await this.$api.post('icon/getIcons');
    },
    _renderIcons() {
      if (!this.iconsAll) return null;
      const children = [];
      for (const moduleName in this.iconsAll) {
        const moduleIcons = this.iconsAll[moduleName];
        const domModule = this._renderIconsModule({ moduleName, moduleIcons });
        if (domModule) {
          children.push(domModule);
        }
      }
      return (
        <f7-list inline-labels no-hairlines-md>
          {children}
        </f7-list>
      );
    },
    _renderIconsModule({ moduleName, moduleIcons }) {
      const children = [];
      for (const groupName in moduleIcons) {
        const groupIcons = moduleIcons[groupName];
        const domGroup = this._renderIconsGroup({ moduleName, groupName, groupIcons });
        if (domGroup) {
          children.push(domGroup);
        }
      }
      return (
        <f7-list-group key={moduleName}>
          <f7-list-item group-title title={moduleName}></f7-list-item>
          {children}
        </f7-list-group>
      );
    },
    _renderIconsGroup({ moduleName, groupName, groupIcons }) {
      if (!groupIcons) return null;
      const children = [];
      groupIcons = groupIcons.split(',');
      for (const icon of groupIcons) {
        const svg = `${moduleName}:${groupName}:${icon}`;
        children.push(
          <div class="icon-cell">
            <div class="icon-cell-icon">
              <f7-icon f7={svg} size="24"></f7-icon>
            </div>
            <div class="icon-cell-label">{icon}</div>
          </div>
        );
      }
      return (
        <f7-list-group key={groupName}>
          <f7-list-item group-title title={groupName}></f7-list-item>
          <f7-list-item>
            <div class="icons-row">{children}</div>
          </f7-list-item>
        </f7-list-group>
      );
    },
  },
  render() {
    return (
      <eb-page class="eb-icons-all-page">
        <eb-navbar title={this.pageTitle} eb-back-link="Back">
          <f7-nav-right>
            <f7-link icon-material="search" onClick={this.onClickEnable}></f7-link>
          </f7-nav-right>
          <f7-searchbar
            ref="searchbar"
            onSearchbarSearch={this.onSearchbarSearch}
            expandable
            search-container=".search-list"
            search-in=".item-title"
            placeholder={this.pageTitle}
            backdrop={false}
            disable-button={true}
            clear-button={true}
            custom-search={true}
          ></f7-searchbar>
        </eb-navbar>
        {this._renderIcons()}
      </eb-page>
    );
  },
};
