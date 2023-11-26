export const createGoodFavoriteCard = (data) => {
  const li = document.createElement('li');
  li.classList.add('section-sale-item');

  li.insertAdjacentHTML('beforeend', `
    <a href="./" class="section-sale-link section-sale-link-favorite">
      <div class="sale-link-top">
        <img class="sale-link-img" src="http://mica-short-xenoposeidon.glitch.me/${data.image}" alt="${data.title}">
        <p class=" sale sale-link-sale">-${data.discount}%</p>
      </div>
      <div class="sale-link-content">
        <div class="sale-price-wrapper">
          <p class="sale-price sale-new-price">
              ${data.discount > 0 ?
              Math.round(data.price - (data.price * (data.discount / 100))) :
              data.price} ₽</p>
          <p class="sale-price sale-old-price">${data.price} ₽</p>
        </div>
        <p class="sale-link-description">${data.title}</p>
        <button data-id=${data.id} class="sale-link-button">
        Удалить из избранного
        </button>
      </div>
    </a>
  `);
  return li;
};
