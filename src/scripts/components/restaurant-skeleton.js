class RestaurantSkeleton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <img class="skeleton skeleton__img" />
      <div class="skeleton-text__container">
          <div class="skeleton skeleton-text__text"></div>
          <div class="skeleton skeleton-text__text"></div>
          <div class="skeleton skeleton-text__text"></div>
          <div class="skeleton skeleton-text__text"></div>
          <div class="skeleton skeleton-text__text"></div>
          <div class="skeleton skeleton-text__text"></div>
          <div class="skeleton skeleton-text__text"></div>
          <div class="skeleton skeleton-text__text"></div>
      </div>
    `;
  }
}

customElements.define('restaurant-skeleton', RestaurantSkeleton);
