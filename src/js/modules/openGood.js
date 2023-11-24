import {createGoodPage} from './createGoodPage.js';
import {initRecomGoods} from './initRecomGoods.js';
import {createSaleSection} from './createSaleSection.js';
import {addGoodBasket} from './addGoodBasket.js';

export const openGood = (sectionGoods, fetchRequest, renderGoods, postfix) => {
  const btnsGoodOpen = document.querySelectorAll('.section-sale-link');
  btnsGoodOpen.forEach(btnGoodOpen => {
    btnGoodOpen.addEventListener('click', async (e) => {
      e.preventDefault();
      const idGood =
      e.target.closest('.section-sale-link')
          .querySelector('.sale-id').textContent;
      const cardGood = await createGoodPage(idGood);
      console.log('cardGood: ', cardGood);
      sectionGoods.textContent = '';

      const goods = await initRecomGoods(fetchRequest, renderGoods, postfix);
      const {sectionSale, saleList} = createSaleSection();
      saleList.append(goods);
      sectionGoods.append(cardGood, sectionSale);
      openGood(sectionGoods, fetchRequest, renderGoods, '/api/goods/discount');
      addGoodBasket();
    });
  });
};
