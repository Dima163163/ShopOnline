import {openCloseMenu} from './openMenu.js';

const initCategoriesGoods = (fetchRequest, postfix,
    sectionGoods, renderGoods, menuBurger, menuImgBtn) => {
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
      const h2 = document.createElement('h2');
      h2.classList.add('categories-title');
      h2.textContent = categoryName;
      const goods = renderGoods(err, data);
      console.log('goods: ', goods);

      const ul = document.createElement('ul');
      ul.classList.add('section-sale-list');
      ul.append(goods);
      sectionGoods.textContent = '';
      sectionGoods.append(h2, ul);
      openCloseMenu(menuBurger, menuImgBtn);
    });
  });
};

export default initCategoriesGoods;
