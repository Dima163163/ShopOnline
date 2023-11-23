
export const initRecomGoods = async (fetchRequest,
    renderGoods, listGoods, postfix) => {
  const {err, data} = await fetchRequest(postfix, {
    callback: (err, data) => ({
      err,
      data,
    }),
  });
  console.log('dataRec', data);
  const goods = renderGoods(err, data);
  console.log('goods: ', goods);

  listGoods.append(goods);
};
