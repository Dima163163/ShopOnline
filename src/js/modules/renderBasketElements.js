import {addGoodBasket} from './addGoodBasket.js';
import {createBasketSection} from './createBasketSection.js';
import {createCardDeliveryImage} from './createCardDeliveryImage.js';
import {createGoodCardBasket} from './createGoodCardBasket.js';
import {createSaleSection} from './createSaleSection.js';
import {deleteGoods, deleteGoodsInCard} from './deleteGoods.js';
import {initRecomGoods} from './initRecomGoods.js';
import {openGood} from './openGood.js';
import {placingAnOrder} from './placingAnOrder.js';

export const renderBasketElement = async (basketBtn,
    sectionGoods, fetchRequest,
    createGoods, postfix) => {
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
  let count = 0;

  if (goodsId !== null) {
    const objectGoodsId = goodsId.reduce((acc, elem) => {
      acc[elem] = (acc[elem] || 0) + 1;
      return acc;
    }, {});

    const objEnties = Object.entries(objectGoodsId);
    objEnties.forEach(good => {
      count += good[1];
      const countGoodCard = good[1];
      fetchRequest(`/api/goods/${good[0]}`, {
        callback: (err, data) => {
          // Тут я буду запускать отрисовку компонентов и
          // добавление их на страницу корзины
          const good = createGoodCardBasket(data, countGoodCard);
          cardsWrapper.append(good);
          const basketDeleteCardBtns =
          document.querySelectorAll('.good-card-basket-btn');
          deleteGoodsInCard(basketDeleteCardBtns,
              basketBtn, sectionGoods, fetchRequest);
          totalSpan.textContent = `${count} шт.`;
          // Записываем сумму со скидками в переменную и помещаем на страницу
          totalSum +=
          data.discount > 0 ?
          (+data.price - (+data.price * (+data.discount / 100))) *
            countGoodCard : +data.price * countGoodCard;
          totalInnerPrice.textContent = `${totalSum} ₽`;

          // Записываем скидку в переменную и помещаем на страницу
          totlaCountSum += +data.price * countGoodCard;
          totalInerCountSum.textContent = `${totlaCountSum} ₽`;

          // Записываем сумму скидки в переменну и помещаем на страницу
          totalDiscountSum += data.discount > 0 ?
          (data.price * (data.discount / 100)) * countGoodCard : 0;
          totalInerDiscountSum.textContent = `${totalDiscountSum} ₽`;
          const img = createCardDeliveryImage(data);
          deliveryImageContainer.append(img);
        },
      });
    });
    const basketBtnDell = document.querySelector('.basket-btn-del');
    const bntSubmit = document.querySelector('.total-inner-btn');
    const checkboxSubmit = document.querySelector('.real-checkbox-buy');

    deleteGoods(basketBtnDell, cardsWrapper,
        totalSpan, totalInnerPrice, totalInerCountSum,
        totalInerDiscountSum, deliveryImageContainer,
        basketBtn, sectionGoods, fetchRequest);
    const goods = await initRecomGoods(fetchRequest, createGoods, postfix);
    const {sectionSale, saleList} = createSaleSection();
    saleList.append(goods);
    sectionGoods.append(sectionSale);
    placingAnOrder(bntSubmit, checkboxSubmit, mainSection);
    openGood(sectionGoods, fetchRequest, createGoods, '/api/goods/discount');
    addGoodBasket();
  }
};
