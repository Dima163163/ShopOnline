import {timer} from './modules/timer.js';
import {createTimer} from './modules/createTimer.js';

const timerWrapper = document.querySelector('.disconts__timer');
const deadlineTimer = timerWrapper.dataset.timerDeadline;


// Функция запуска функций
const init = () => {
  createTimer('[data-timer-deadline]');
  timer(deadlineTimer, '.disconts__timer', '.timer__count_days',
      '.timer__units_days', '.timer__count_hours',
      '.timer__units_hours', '.timer__count_minutes',
      '.timer__units_minutes');
};

init();
