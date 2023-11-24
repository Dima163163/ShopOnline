import {openGood} from './openGood.js';
import {openCloseMenu} from './openMenu.js';

const initCategoriesGoods = (fetchRequest, postfix,
    sectionGoods, renderGoods, menuBurger, menuImgBtn, postdixDisc) => {
  const menuBtnsCategories = document.querySelectorAll('.menu-link-category');

  menuBtnsCategories.forEach(menuBtn => {
    menuBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      const categoryName = menuBtn.textContent;
      const {err, data} =
      await fetchRequest(`${postfix}${categoryName}`,
          {
            callback: (err, data) => ({
              err,
              data,
            }),
          });
      const container = document.createElement('div');
      container.classList.add('container');

      const h2 = document.createElement('h2');
      h2.classList.add('categories-title');
      h2.textContent = categoryName;
      const goods = renderGoods(err, data);
      console.log('goods: ', goods);

      const ul = document.createElement('ul');
      ul.classList.add('section-sale-list');
      ul.append(goods);
      sectionGoods.textContent = '';
      container.append(h2, ul);
      sectionGoods.append(container);
      openCloseMenu(menuBurger, menuImgBtn);
      openGood(sectionGoods, fetchRequest, renderGoods, postdixDisc);
    });
  });
};

export default initCategoriesGoods;
