const HeaderInitiator = {
  init(header, searchInput) {
    window.addEventListener('scroll', () => {
      this._headerScrollHandler(header, searchInput);
    });
  },

  _headerScrollHandler(header, searchInput) {
    if (window.scrollY > 0) {
      header.classList.add('header--scrolled');
      searchInput.classList.add('search__input--scrolled');
    } else {
      header.classList.remove('header--scrolled');
      searchInput.classList.remove('search__input--scrolled');
    }
  },
};

export default HeaderInitiator;
