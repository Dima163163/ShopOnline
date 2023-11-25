import {initRecomGoods} from './initRecomGoods.js';
import {openGood} from './openGood.js';

// Добавляет скидочные товары на основную страницу
export const appendGoods = async (fetchRequest, createGoods,
    list, postfix, section) => {
  const goods = await initRecomGoods(fetchRequest, createGoods, postfix);

  list.append(goods);
  openGood(section, fetchRequest, createGoods, postfix);
};
