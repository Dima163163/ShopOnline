import {initRecomGoods} from './initRecomGoods.js';
import {openGood} from './openGood.js';

export const appendGoods = async (fetchRequest, renderGoods,
    list, postfix, section) => {
  const goods = await initRecomGoods(fetchRequest, renderGoods, postfix);
  console.log('goods: ', goods);
  list.append(goods);
  openGood(section, fetchRequest, renderGoods, postfix);
};
