// import {openGood} from './openGood.js';

export const initRecomGoods = async (fetchRequest,
    renderGoods, postfix) => {
  const {err, data} = await fetchRequest(postfix, {
    callback: (err, data) => ({
      err,
      data,
    }),
  });

  const goods = renderGoods(err, data);

  return goods;
  // listGoods.append(goods);
  // openGood(sectionGoods);
};
