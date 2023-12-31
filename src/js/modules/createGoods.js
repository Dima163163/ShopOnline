// создает список товаров
const createGoods = (err, data) => {
  const template = document.createDocumentFragment();

  const goods = data.map(item => {
    const li = document.createElement('li');
    li.classList.add('section-sale-item');


    li.insertAdjacentHTML('beforeend', `
        <a href="./" class="section-sale-link">
          <div class="sale-link-top">
            <img class="sale-link-img" src="https://mica-short-xenoposeidon.glitch.me/${item.image}" alt="${item.title}">
            ${item.discount > 0 ?
            `<p class="sale sale-link-sale">-${item.discount}%</p>` : ''}
          </div>
          <div class="sale-link-content">
            <div class="sale-price-wrapper">
              <p class="sale-id">${item.id}</p>
              <p class="sale-price sale-new-price">
              ${item.discount > 0 ?
              Math.round(item.price - (item.price * (item.discount / 100))) :
              item.price} ₽</p>
              ${item.discount > 0 ?
              `<p class="sale-price sale-old-price">${item.price} ₽</p>` : ''}
            </div>
            <p class="sale-link-description">${item.title}</p>
          </div>
        </a>
    `);

    return li;
  });
  template.append(...goods);

  return template;
};

export default createGoods;
