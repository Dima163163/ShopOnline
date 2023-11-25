
// Создание страницы с товаром
export const createGoodCard = (err, data) => {
  const template = document.createDocumentFragment();
  const div = document.createElement('div');
  div.classList.add('section-inner');

  div.insertAdjacentHTML('beforeend', `
        <div class="breadcrumps-wrapper breadcrumps-wrapper-article">
        <div class="container">
          <div class="section-breadcrumbs">
          <a href="./index.html" class="section-breadcrumb">Главная</a>
          <div class="section-arrow"></div>
          <p class="section-breadcrumb">${data.title}</p>
          </div>
        </div>
        </div>
        <div class="section-good">
          <div class="container">
            <div class="section-good-title-wrapper">
              <h1 class="section-good-title">${data.title}</h1>
            </div>
          </div>
          <div class="section-good-wrapper">
            <div class="container">
              <div class="section-good-inner">
                <div class="good-product-card">
                <picture class="good-image-wrapper">
                <source media="(max-width: 1920px)" srcset="http://mica-short-xenoposeidon.glitch.me/${data.image}"
                type="image/webp">
                <source media="(max-width: 768px)" srcset="http://mica-short-xenoposeidon.glitch.me/${data.image}"
                type="image/webp">
                <source media="(max-width: 320px)"
                srcset="http://mica-short-xenoposeidon.glitch.me/${data.image}" type="image/webp">
                <source srcset="http://mica-short-xenoposeidon.glitch.me/${data.image}" type="image/avif">
                <img class="good-image" src="http://mica-short-xenoposeidon.glitch.me/${data.image}" alt="${data.image}">
                </picture>
                <p class="sale good__sale">-${data.discount}%</p>
                </div>
                <div class="good-price-card good-price-card-desk">
                  <div class="price-wrapper">
                    <p class="price-new">${data.discount > 0 ?
                      data.price - (data.price * (data.discount / 100)) :
                      data.price} ₽
                    </p>
                    ${data.discount > 0 ?
                      `<p class="price-old">${data.price} ₽</p>` : ''}
                  </div>
                  <div class="price-credit">В кредит от 5600 ₽</div>
                  <div class="price-btn-wrapper">
                    <button data-id='${data.id}'
                    class="price-btn-buy">Добавить в корзину</button>
                    <button class="price-btn-like" 
                    aria-label="добавить в избаранное"></button>
                  </div>
                  <div class="delivery-wrapper">
                    <div class="delivery">
                      <p class="delivery-text">Доставка</p>
                      <p class="delivery-text delivery-date">1-3 января</p>
                    </div>
                    <div class="salesman">
                      <p class="delivery-text">Продавец</p>
                      <p class="delivery-text delivery-date">ShopOnline</p>
                    </div>
                  </div>
                  <div class="notifications">
                    <button class="notifications-btn">
                      <div class="notifications-btn-icon"></div>
                        Узнать о снижении цены
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="good-price-card good-price-card-mobile">
                  <div class="price-wrapper">
                    <p class="price-new">
                    ${data.discount > 0 ?
                      data.price - (data.price * (data.discount / 100)) :
                      data.price} ₽
                    </p>
                    ${data.discount > 0 ?
                      `<p class="price-old">${data.price} ₽</p>` : ''}
                  </div>
                  <div class="price-credit">В кредит от 5600 ₽</div>
                  <div class="price-btn-wrapper">
                    <button class="price-btn-buy"
                    data-id='${data.id}'
                    >Добавить в корзину</button>
                    <button class="price-btn-like" 
                    aria-label="добавить в избаранное"></button>
                  </div>
                  <div class="delivery-wrapper">
                    <div class="delivery">
                      <p class="delivery-text">Доставка</p>
                      <p class="delivery-text delivery-date">1-3 января</p>
                    </div>
                    <div class="salesman">
                      <p class="delivery-text">Продавец</p>
                      <p class="delivery-text delivery-date">ShopOnline</p>
                    </div>
                  </div>
                  <div class="notifications">
                    <button class="notifications-btn">
                      <div class="notifications-btn-icon"></div>
                        Узнать о снижении цены
                    </button>
                  </div>
            </div>
            <div class="section-description-wrapper">
              <div class="container">
                <div class="section-good-description">
                <h2 class="description-title">Описание:</h2>
                  <p class="description-text">
                  ${data.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  `);

  template.append(div);

  return template;
};
