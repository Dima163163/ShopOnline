import {renderFavoritesElement} from './renderFavoritesElement.js';
// Открытие товаров из избранного
export const openFavorite = (btnFavorite, postfix) => {
  btnFavorite.addEventListener('click', (e) => {
    e.preventDefault();
    renderFavoritesElement(postfix);
  });
};
