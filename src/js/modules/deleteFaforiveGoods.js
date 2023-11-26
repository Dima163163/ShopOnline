import {renderFavoritesElement} from './renderFavoritesElement.js';

export const deleteFaforiveGoods = (postfix) => {
  const deleteBtns = document.querySelectorAll('.sale-link-button');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const idCard = e.target.dataset.id;
      const goodsIdFavorite =
      JSON.parse(localStorage.getItem('goodsIdFavorite'));
      const newArrFavorite = goodsIdFavorite.filter(id => id !== idCard);
      localStorage.setItem('goodsIdFavorite', JSON.stringify(newArrFavorite));
      renderFavoritesElement(postfix);
    });
  });
};
