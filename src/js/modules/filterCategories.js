import {createCategoriesPage} from './createCategoriesPage.js';
import {openGood} from './openGood.js';
import {openCloseMenu} from './openMenu.js';

// фильтрует товары по категориям
const initCategoriesGoods = (fetchRequest, postfix,
    sectionGoods, createGoods, menuBurger, menuImgBtn, postdixDisc) => {
  const menuBtnsCategories = document.querySelectorAll('.menu-link-category');
  const menuBtnsFooterCategories =
  document.querySelectorAll('.footer-content-link');

  menuBtnsCategories.forEach(menuBtn => {
    menuBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      createCategoriesPage(menuBtn, fetchRequest, postfix,
          createGoods, sectionGoods, postdixDisc, openGood);
      openCloseMenu(menuBurger, menuImgBtn);
    });
  });

  menuBtnsFooterCategories.forEach(menuBtn => {
    menuBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      createCategoriesPage(menuBtn, fetchRequest, postfix,
          createGoods, sectionGoods, postdixDisc, openGood);
    });
  });
};

export default initCategoriesGoods;
