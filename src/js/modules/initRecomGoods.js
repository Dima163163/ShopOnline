// import {openGood} from './openGood.js';

// создает список рекомендованных товаров и возвращает его
export const initRecomGoods = async (fetchRequest,
    createGoods, postfix) => {
  const {err, data} = await fetchRequest(postfix, {
    callback: (err, data) => ({
      err,
      data,
    }),
  });

  const goods = createGoods(err, data);

  return goods;
};
