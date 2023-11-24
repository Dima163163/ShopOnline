import {timer} from './modules/timer.js';
import {createTimer} from './modules/createTimer.js';
import elements from './modules/pageElements.js';
import {rednerBlogs, renderPagination} from './modules/pagination.js';
import {menuControl} from './modules/openMenu.js';
import {fetchRequest} from './modules/fetchRequest.js';

import renderGoods from './modules/renderGoods.js';
import initCategoriesGoods from './modules/filterCategories.js';
import {createHeaderMenu} from './modules/createHeaderMenu.js';
import {appendGoods} from './modules/appendGoods.js';
import {openGood} from './modules/openGood.js';
import {openBasket} from './modules/openBasket.js';
const {blogInner, paginationSection, currentPage, blogsCads,
  menuBtn, menuImgBtn, menuBurger, listGoods,
  listCategories, sectionGoods, basketBtn} = elements;


const timerWrapper = document.querySelector('.disconts-timer');


// Функция запуска функций
const init = async () => {
  await createHeaderMenu(fetchRequest, listCategories, '/api/categories');
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
  openBasket(basketBtn, sectionGoods);
  appendGoods(fetchRequest, renderGoods, listGoods,
      '/api/goods/discount', sectionGoods);
  openGood(sectionGoods, fetchRequest, renderGoods, '/api/goods/discount');
  initCategoriesGoods(
      fetchRequest, '/api/goods/category/', sectionGoods,
      renderGoods, menuBurger, menuImgBtn, '/api/goods/discount');
  menuControl(menuBtn, menuImgBtn, menuBurger);
};

init();
