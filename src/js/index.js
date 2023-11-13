import {timer} from './modules/timer.js';
import {createTimer} from './modules/createTimer.js';
import elements from './modules/pageElements.js';
import {rednerBlogs, renderPagination} from './modules/pagination.js';
const {blogInner, paginationSection, currentPage, blogsCads} = elements;


const timerWrapper = document.querySelector('.disconts-timer');


// Функция запуска функций
const init = () => {
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
};

init();
