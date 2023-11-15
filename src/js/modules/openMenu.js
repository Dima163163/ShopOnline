// Функция открытия и закрытия меню
const openCloseMenu = (menuBurger, menuImgBtn) => {
  menuBurger.classList.toggle('is-visible');
  menuImgBtn.classList.toggle('is-close');
};

// Вызов функции открытия и закрытия меню
export const menuControl = (menuBtn, menuImgBtn, menuBurger) => {
  menuBtn.addEventListener('click', () => {
    openCloseMenu(menuBurger, menuImgBtn);
  });
};
