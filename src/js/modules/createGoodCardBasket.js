// Создает товары в корзине

export const createGoodCardBasket = (data, countGoodCard) => {
  const div = document.createElement('div');
  div.classList.add('basket-good-card');

  div.insertAdjacentHTML('beforeend', `
    <div class="basket-good-card-id">${data.id}</div>
    <div class="basket-good-card-image">
        <label class="good-label">
          <input type="checkbox" name="checkbox-good" 
          class="real-checkbox real-checkbox-good">
          <span class="custom-checkbox custom-checkbox-good"></span>
        </label>
        <img class="basket-good-card-img" 
        src="http://mica-short-xenoposeidon.glitch.me/${data.image}" alt="${data.title}">
      </div>
      <div class="good-card-descr">
        <h3 class="good-card-title">
        ${data.title}
        </h3>
        <p class="good-card-text">Цвет: ---</p>
        <p class="good-card-text">
        Описание: ${data.description}
        </p>
      </div>
      <div class="good-card-count-wrapper">
        <button class="good-card-btn good-card-btn-dell">−</button>
        <p class="good-card-count">${countGoodCard}</p>
        <button class="good-card-btn good-card-btn-add">+</button>
      </div>
      <div class="good-card-price">
        <p class="good-card-price-new">
        ${data.discount > 0 ?
          (data.price - (data.price * (data.discount / 100))) * countGoodCard :
          data.price * countGoodCard} 
        ₽</p>
        ${data.discount > 0 ?
        `<p class="good-card-price-old">${data.price *
        countGoodCard} ₽</p>` : ''}
        <a href="#" class="good-card-price-credit">
        В кредит от ${data.discount > 0 ?
          Math.round(((data.price - (data.price *
          (data.discount / 100))) * countGoodCard) / 12) :
          data.price * countGoodCard / 12} ₽
        </a>
      </div>
      <button class="good-card-basket-btn"></button>
  `);
  return div;
};
