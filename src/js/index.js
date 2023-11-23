import {timer} from './modules/timer.js';
import {createTimer} from './modules/createTimer.js';
import elements from './modules/pageElements.js';
import {rednerBlogs, renderPagination} from './modules/pagination.js';
import {menuControl} from './modules/openMenu.js';
import {fetchRequest} from './modules/fetchRequest.js';
import {initRecomGoods} from './modules/initRecomGoods.js';
import renderGoods from './modules/renderGoods.js';
import initCategoriesGoods from './modules/filterCategories.js';
import {createHeaderMenu} from './modules/createHeaderMenu.js';
const {blogInner, paginationSection, currentPage, blogsCads,
  menuBtn, menuImgBtn, menuBurger, listGoods,
  listCategories, sectionGoods} = elements;


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
  initRecomGoods(fetchRequest, renderGoods, listGoods, '/api/goods/discount');
  initCategoriesGoods(
      fetchRequest, '/api/goods/category/', sectionGoods,
      renderGoods, menuBurger, menuImgBtn);
  menuControl(menuBtn, menuImgBtn, menuBurger);
};

init();
