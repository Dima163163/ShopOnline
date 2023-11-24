import {createBasketSection} from './createBasketSection.js';

export const openBasket = (basketBtn, sectionGoods) => {
  basketBtn.addEventListener('click', () => {
    const section = createBasketSection();
    console.log('section: ', section);
    sectionGoods.textContent = '';
    sectionGoods.append(section);
  });
};
