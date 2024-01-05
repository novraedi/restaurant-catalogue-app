class LikedButton extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <button aria-label="remove this restaurant from favorite list" class="liked">
          <i aria-hidden="true" class="fa fa-heart"></i>
      </button>
      `;
  }
}

customElements.define('liked-button', LikedButton);
