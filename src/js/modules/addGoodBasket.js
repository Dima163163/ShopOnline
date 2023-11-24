import {fetchRequest} from './fetchRequest.js';

export const addGoodBasket = () => {
  const addBtns = document.querySelectorAll('.price-btn-buy');

  addBtns.forEach(addBtn => {
    addBtn.addEventListener('click', async () => {
      const id = addBtn.dataset.id;
      const goodsArr = JSON.parse(localStorage.getItem('goods')) || [];
      const {err, good} = await fetchRequest(`/api/goods/${id}`,
          {
            callback: (err, good) => ({
              err,
              good,
            }),
          });
      goodsArr.push(good);
      localStorage.setItem('goods', JSON.stringify(goodsArr));
    });
  });
};
