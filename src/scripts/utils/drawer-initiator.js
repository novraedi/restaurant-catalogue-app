const DrawerInitiator = {
  init({
    button, drawer, drawerItem, content,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, button, drawer, drawerItem);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, button, drawer);
    });
  },

  _toggleDrawer(event, button, drawer, drawerItem) {
    event.stopPropagation();
    button.classList.toggle('header__hamburger--clicked');
    drawer.classList.toggle('nav-list--active');
    drawerItem.focus();
  },

  _closeDrawer(event, button, drawer) {
    event.stopPropagation();
    button.classList.remove('header__hamburger--clicked');
    drawer.classList.remove('nav-list--active');
  },
};

export default DrawerInitiator;
