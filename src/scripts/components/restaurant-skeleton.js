class RestaurantSkeleton extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
    <style>
    :host{
        display: flex;
        flex-direction: column;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
        border-radius: 5px 5px 3px 3px;
        margin-bottom: 1em;
        overflow: hidden;
    }
    .skeleton {
        animation: skeleton-loading 1s linear infinite alternate;
    }
    .skeleton__img{
        width: 100%;
        height: 20rem;
        object-fit: cover;
    }
    .skeleton-text__text{
        width: 100%;
        margin-block: 8px;
        height: 1rem;
    }

    .skeleton-text__text:last-child{
        width: 75%;
    }
    
    .skeleton-text__container{
        padding: 15px 20px;
    }
      
      @keyframes skeleton-loading {
        0% {
          background-color: hsl(200, 20%, 80%);
        }
        100% {
          background-color: hsl(200, 20%, 95%);
        }
    }
    </style>
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
    `
  }
}

customElements.define('restaurant-skeleton', RestaurantSkeleton);
