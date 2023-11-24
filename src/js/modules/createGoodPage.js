import {fetchRequest} from './fetchRequest.js';
import {renderGoodCard} from './renderGoodCard.js';

export const createGoodPage = async (idGood) => {
  const {err, data} = await fetchRequest(`/api/goods/${idGood}`, {
    callback: (err, data) => ({
      err,
      data,
    }),
  });

  return renderGoodCard(err, data);
};

