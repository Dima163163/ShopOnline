import {fetchRequest} from './fetchRequest.js';
import {createGoodCard} from './createGoodCard.js';

// Создает элементы товаров и возвращает их
export const createGoodPage = async (idGood) => {
  const {err, data} = await fetchRequest(`/api/goods/${idGood}`, {
    callback: (err, data) => ({
      err,
      data,
    }),
  });

  return createGoodCard(err, data);
};

