
export const addGoodBasket = () => {
  const addBtns = document.querySelectorAll('.price-btn-buy');

  addBtns.forEach(addBtn => {
    addBtn.addEventListener('click', async () => {
      const goodsId = JSON.parse(localStorage.getItem('goodsId')) || [];
      const id = addBtn.dataset.id;
      goodsId.push(id);

      localStorage.setItem('goodsId', JSON.stringify(goodsId));
    });
  });
};
