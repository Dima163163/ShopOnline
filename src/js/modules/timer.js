// Функция таймера
export const timer = (deadline, timerWrapper, selectorDayNumb, selectorDayUnit,
    selectorHoursNumb, selectorHoursUnit, selectorMinuteNumb,
    selectorMinuteUnit) => {
  // Переменная дней цифра
  const timerBlockDayCount = document.querySelector(selectorDayNumb);
  // Переменная дней слово
  const timerBlockDayUnit = document.querySelector(selectorDayUnit);
  // Переменная часов цифра
  const timerBlockHourCount = document.querySelector(selectorHoursNumb);
  // Переменная часов слово
  const timerBlockHourUnit = document.querySelector(selectorHoursUnit);
  // Переменная минут цифра
  const timerBlockMinuteCount = document.querySelector(selectorMinuteNumb);
  // Переменная минут слово
  const timerBlockMinuteUnit = document.querySelector(selectorMinuteUnit);
  // Переменная обертки таймера
  const timerWrap = document.querySelector(timerWrapper);

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const plusThree = 3;
    const dateStopPlus = dateStop + (plusThree * 60 * 60 * 1000);
    const dateNow = Date.now();
    const timeRemaining = dateStopPlus - dateNow;

    const seconds = Math.floor(timeRemaining / 1000 % 60);
    const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
    const hours = Math.floor((timeRemaining / 1000 / 60 / 60) % 24);
    const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);

    return {
      timeRemaining,
      seconds,
      minutes,
      hours,
      days,
    };
  };

  // Склонение числительных
  const declencionNum = (number, one, two, three) => {
    if (number === 1 || (number > 19 && number % 10 === 1)) {
      return one;
    } else if ((number > 1 && number < 5) ||
    (number > 19 && number % 10 > 1 && number % 10 < 5)) {
      return two;
    } else {
      return three;
    }
  };
  // Добавление нуля перед числом
  const addZero = (numb) => {
    if (numb < 10) {
      return '0' + numb;
    } else {
      return numb;
    }
  };

  const start = () => {
    const timer = getTimeRemaining();

    if (timer.hours < 24 && timer.days < 1) {
      timerBlockDayCount.textContent = addZero(timer.hours);
      timerBlockDayUnit.textContent =
      declencionNum(timer.hours, 'час', 'часа', 'часов');
      timerBlockHourCount.textContent = addZero(timer.minutes);
      timerBlockHourUnit.textContent =
      declencionNum(timer.minutes, 'минута', 'минуты', 'минут');
      timerBlockMinuteCount.textContent = addZero(timer.seconds);
      timerBlockMinuteUnit.textContent =
      declencionNum(timer.minutes, 'секунда', 'секунды', 'секунд');
    } else {
      timerBlockDayCount.textContent = addZero(timer.days);
      timerBlockDayUnit.textContent =
      declencionNum(timer.days, 'день', 'дня', 'дней');
      timerBlockHourCount.textContent = addZero(timer.hours);
      timerBlockHourUnit.textContent =
      declencionNum(timer.hours, 'час', 'часа', 'часов');
      timerBlockMinuteCount.textContent = addZero(timer.minutes);
      timerBlockMinuteUnit.textContent =
      declencionNum(timer.minutes, 'минута', 'минуты', 'минут');
    }


    const intervalId = setTimeout(start, 1000);
    if (timer.timeRemaining <= 0) {
      clearTimeout(intervalId);
      timerWrap.textContent = '';
    }
  };

  start();
};

