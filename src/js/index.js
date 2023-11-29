import {timer} from './modules/timer.js';
import {createTimer} from './modules/createTimer.js';
import elements from './modules/pageElements.js';
import {rednerBlogs, renderPagination} from './modules/pagination.js';
import {menuControl} from './modules/openMenu.js';
import {fetchRequest} from './modules/fetchRequest.js';

import createGoods from './modules/createGoods.js';
import initCategoriesGoods from './modules/filterCategories.js';
import {createHeaderFooterMenu} from './modules/createHeaderFooterMenu.js';
import {appendGoods} from './modules/appendGoods.js';
import {openGood} from './modules/openGood.js';
import {openBasket} from './modules/openBasket.js';
import {openFavorite} from './modules/openFavorite.js';
import {openBlogPage} from './modules/openBlogPage.js';
const {blogInner, paginationSection, currentPage, blogsCads,
  menuBtn, menuImgBtn, menuBurger, listGoods,
  listCategories, sectionGoods, basketBtn,
  footerListCategories, btnFavorite, btnBlogHeder, btnBlogFooter} = elements;


const timerWrapper = document.querySelector('.disconts-timer');


// Функция запуска функций
const init = async () => {
  await createHeaderFooterMenu(fetchRequest, listCategories,
      '/api/categories', footerListCategories);
  if (timerWrapper) {
    const deadlineTimer = timerWrapper.dataset.timerDeadline;
    createTimer('[data-timer-deadline]');
    timer(deadlineTimer, '.disconts-timer',
        '.timer__count_days',
        '.timer__units_days', '.timer__count_hours',
        '.timer__units_hours', '.timer__count_minutes',
        '.timer__units_minutes');
  }
  if (blogInner) {
    rednerBlogs(blogInner, blogsCads, currentPage);
    renderPagination(paginationSection, blogsCads, blogInner);
  }
  openFavorite(btnFavorite, '/api/goods/');
  openBasket(basketBtn, sectionGoods, fetchRequest,
      createGoods, '/api/goods/discount',
  );
  appendGoods(fetchRequest, createGoods, listGoods,
      '/api/goods/discount', sectionGoods);
  openGood(sectionGoods, fetchRequest, createGoods, '/api/goods/discount');
  initCategoriesGoods(
      fetchRequest, '/api/goods/category/', sectionGoods,
      createGoods, menuBurger, menuImgBtn, '/api/goods/discount');
  menuControl(menuBtn, menuImgBtn, menuBurger);
  openBlogPage(btnBlogHeder, btnBlogFooter,
      sectionGoods, menuBurger, menuImgBtn);
};

init();
