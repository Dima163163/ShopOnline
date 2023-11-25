import {createBasketSection} from './createBasketSection.js';
import {createCardDeliveryImage} from './createCardDeliveryImage.js';
import {createGoodCardBasket} from './createGoodCardBasket.js';
import {deleteGoods, deleteGoodsInCard} from './deleteGoods.js';

export const renderBasketElement = (basketBtn, sectionGoods, fetchRequest) => {
  const mainSection = document.querySelector('.main');
  mainSection.classList.add('main-good');
  const section = createBasketSection();

  sectionGoods.textContent = '';
  sectionGoods.append(section);

  const cardsWrapper = document.querySelector('.basket-goods-wrapper');
  const totalSpan = document.querySelector('.total-inner-count-span');
  const totalInnerPrice = document.querySelector('.total-inner-price');
  const totalInerCountSum = document.querySelector('.total-inner-count-sum');
  const totalInerDiscountSum =
  document.querySelector('.total-inner-discount-sum');
  const deliveryImageContainer =
  document.querySelector('.delivery-good-image');
  // Получаем id для отправки запроса на сервер
  const goodsId = JSON.parse(localStorage.getItem('goodsId'));


  let totalSum = 0;
  let totlaCountSum = 0;
  let totalDiscountSum = 0;
  if (goodsId !== null) {
    goodsId.forEach((id, index) => {
      fetchRequest(`/api/goods/${id}`, {
        callback: (err, data) => {
          // Тут я буду запускать отрисовку компонентов и
          // добавление их на страницу корзины
          const good = createGoodCardBasket(data);
          cardsWrapper.append(good);
          const basketDeleteCardBtns =
          document.querySelectorAll('.good-card-basket-btn');

          deleteGoodsInCard(basketDeleteCardBtns,
              basketBtn, sectionGoods, fetchRequest);

          totalSpan.textContent = `${++index} шт.`;
          // Записываем сумму со скидками в переменную и помещаем на страницу
          totalSum +=
          data.discount > 0 ?
          +data.price - (+data.price * (+data.discount / 100)) : +data.price;
          totalInnerPrice.textContent = `${totalSum} ₽`;

          // Записываем скидку в переменную и помещаем на страницу
          totlaCountSum += +data.price;
          totalInerCountSum.textContent = `${totlaCountSum} ₽`;

          // Записываем сумму скидки в переменну и помещаем на страницу
          totalDiscountSum += data.discount > 0 ?
          data.price * (data.discount / 100) : 0;
          totalInerDiscountSum.textContent = `${totalDiscountSum} ₽`;
          const img = createCardDeliveryImage(data);
          deliveryImageContainer.append(img);
        },
      });
    });
  }
  const basketBtnDell = document.querySelector('.basket-btn-del');
  deleteGoods(basketBtnDell, cardsWrapper,
      totalSpan, totalInnerPrice, totalInerCountSum,
      totalInerDiscountSum, deliveryImageContainer,
      basketBtn, sectionGoods, fetchRequest);
};
