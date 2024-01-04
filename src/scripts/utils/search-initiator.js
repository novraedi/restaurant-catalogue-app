const SearchInitiator = {
  init(searchForm, searchInput) {
    searchForm.addEventListener('submit', (event) => this._searchFormOnSubmitHandler(event, searchInput));
  },

  async _searchFormOnSubmitHandler(event, searchInput) {
    event.preventDefault();
    window.location.href = `/#/search/${searchInput.value}`;
  },

};

export default SearchInitiator;
