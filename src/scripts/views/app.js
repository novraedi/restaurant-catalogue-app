import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";
import DrawerInitiator from "../utils/drawer-initiator";
import HeaderInitiator from "../utils/header-initiator";

class App{
    constructor({header, button, drawer, drawerItem, content}){
        this._header = header;
        this._button = button;
        this._drawer = drawer;
        this._drawerItem = drawerItem
        this._content = content;

        this._initialAppShell()
    }

    _initialAppShell(){
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            drawerItem: this._drawerItem,
            content: this._content
        })

        HeaderInitiator.init(this._header)
    }

    async renderPage(){
        const url = UrlParser.parseActiveUrlWithCombiner()
        const page = routes[url]
        this._content.innerHTML = await page.render()
        await page.afterRender()
    }
}

export default App