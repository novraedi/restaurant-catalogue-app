class LikeButton extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <button aria-label="favorite this restaurant" class="like">
        <i aria-hidden="true" class="fa fa-heart-o"></i>
    </button>
    `;
  }
}

customElements.define('like-button', LikeButton);
