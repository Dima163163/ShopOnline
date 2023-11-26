export const addToFavorites = () => {
  const favoriteBtn = document.querySelector('.price-btn-like');
  favoriteBtn.addEventListener('click', () => {
    const goodsIdFavorite =
    JSON.parse(localStorage.getItem('goodsIdFavorite')) || [];
    const id = favoriteBtn.dataset.index;
    console.log('id: ', id);
    goodsIdFavorite.push(id);

    localStorage.setItem('goodsIdFavorite', JSON.stringify(goodsIdFavorite));
  });
};
