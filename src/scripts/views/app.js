import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';
import HeaderInitiator from '../utils/header-initiator';
import SearchInitiator from '../utils/search-initiator';

class App {
  constructor({
    header, searchForm, searchInput, button, drawer, drawerItem, content,
  }) {
    this._header = header;
    this._searchForm = searchForm;
    this._searchInput = searchInput;
    this._button = button;
    this._drawer = drawer;
    this._drawerItem = drawerItem;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      drawerItem: this._drawerItem,
      content: this._content,
    });

    HeaderInitiator.init(this._header, this._searchInput);
    SearchInitiator.init(this._searchForm, this._searchInput);
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
