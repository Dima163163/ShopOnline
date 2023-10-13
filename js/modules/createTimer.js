export const createTimer = (selector) => {
  const elem = document.querySelector(selector);
  if (elem) {
    elem.insertAdjacentHTML('beforeend', `
      <p class="timer__title">До конца акции:</p>
        <ul class="timer__list">
          <li class="timer__item timer__item_days">
            <span class="timer__count timer__count_days"></span>
            <p class="timer__units timer__units_days"></p>
          </li>
          <li class="timer__item">
            <span class="timer__count timer__count_hours"></span>
            <p class="timer__units timer__units_hours"></p>
          </li>
          <li class="timer__item">
            <span class="timer__count timer__count_minutes"></span>
            <p class="timer__units timer__units_minutes"></p>
          </li>
        </ul>
    `);
  }
};
