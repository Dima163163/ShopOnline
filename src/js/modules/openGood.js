import {createGoodPage} from './createGoodPage.js';
import {initRecomGoods} from './initRecomGoods.js';
import {createSaleSection} from './createSaleSection.js';
import {addGoodBasket} from './addGoodBasket.js';
import {addToFavorites} from './addToFavorites.js';

// Открывает выбранный товар при клике по нему
export const openGood = (sectionGoods, fetchRequest, createGoods, postfix) => {
  const btnsGoodOpen = document.querySelectorAll('.section-sale-link');
  btnsGoodOpen.forEach(btnGoodOpen => {
    btnGoodOpen.addEventListener('click', async (e) => {
      e.preventDefault();
      const idGood =
      e.target.closest('.section-sale-link')
          .querySelector('.sale-id').textContent;
      const cardGood = await createGoodPage(idGood);
      sectionGoods.textContent = '';

      const goods = await initRecomGoods(fetchRequest, createGoods, postfix);
      const {sectionSale, saleList} = createSaleSection();
      saleList.append(goods);
      sectionGoods.append(cardGood, sectionSale);
      openGood(sectionGoods, fetchRequest, createGoods, '/api/goods/discount');
      addGoodBasket();
      addToFavorites();
    });
  });
};
