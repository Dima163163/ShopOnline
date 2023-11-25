
import {renderBasketElement} from './renderBasketElements.js';


// Фукция вызывающая рендер страницы с корзиной
export const openBasket = (basketBtn, sectionGoods, fetchRequest,
    createGoods, postfix, cardGood) => {
  basketBtn.addEventListener('click', () => {
    renderBasketElement(basketBtn, sectionGoods, fetchRequest,
        createGoods, postfix, cardGood);
  });
};
