import {createGoodFavoriteCard} from './createGoodFavoriveCard.js';
import {deleteFaforiveGoods} from './deleteFaforiveGoods.js';
import {fetchRequest} from './fetchRequest.js';
import elements from './pageElements.js';
const {sectionGoods} = elements;

// Создание секции с избранным
export const renderFavoritesElement = async (postfix) => {
  const container = document.createElement('div');
  container.classList.add('container');
  const wrapperFavorite = document.createElement('div');
  wrapperFavorite.classList.add('favorite-wrapper');


  const titleFavorite = document.createElement('h2');
  titleFavorite.classList.add('favorite-title');
  titleFavorite.textContent = 'Избранное';

  const listFavorite = document.createElement('ul');
  listFavorite.classList.add('favorite-list');
  sectionGoods.textContent = '';
  sectionGoods.append(container);
  container.append(wrapperFavorite);
  wrapperFavorite.append(titleFavorite, listFavorite);

  const favoriteId = JSON.parse(localStorage.getItem('goodsIdFavorite'));
  let favoriteSet = new Set();

  favoriteId.forEach(id => favoriteSet.add(id));

  favoriteSet = Array.from(favoriteSet);

  favoriteSet.forEach(id => {
    fetchRequest(`${postfix}${id}`, {
      callback: (err, data) => {
        const good = createGoodFavoriteCard(data);
        listFavorite.append(good);
        deleteFaforiveGoods(postfix);
      },
    });
  });
};
