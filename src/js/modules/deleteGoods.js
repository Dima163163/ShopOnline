import {renderBasketElement} from './renderBasketElements.js';

export const deleteGoods = (btn, cardsWrapper, totalSpan,
    totalInnerPrice, totalInerCountSum, totalInerDiscountSum,
    deliveryImageContainer, basketBtn, sectionGoods, fetchRequest) => {
  btn.addEventListener('click', () => {
    const checked = document.querySelector('.basket-checkbox-goods').checked;
    const cardsGoods = document.querySelectorAll('.basket-good-card');
    if (checked) {
      cardsWrapper.textContent = '';
      totalSpan.textContent = '';
      totalInnerPrice.textContent = '';
      totalInerCountSum.textContent = '';
      totalInerDiscountSum.textContent = '';
      deliveryImageContainer.textContent = '';
      localStorage.clear();
    } else {
      const newIdArr = [];
      cardsGoods.forEach(card => {
        const cardChecked = card.querySelector('.real-checkbox-good').checked;
        if (!cardChecked) {
          const cardId = card.querySelector('.basket-good-card-id').textContent;
          newIdArr.push(cardId);
        }
      });
      localStorage.setItem('goodsId', JSON.stringify(newIdArr));
      renderBasketElement(basketBtn, sectionGoods, fetchRequest);
    }
  });
};

// Удаление из карточки товара
export const deleteGoodsInCard = (basketDeleteCardBtns,
    basketBtn, sectionGoods, fetchRequest) => {
  basketDeleteCardBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idCard = e.target.closest('.basket-good-card')
          .querySelector('.basket-good-card-id').textContent;
      const goodsIdArr = JSON.parse(localStorage.getItem('goodsId'));
      const newGoodsIdArr = goodsIdArr.filter(goodId => goodId !== idCard);

      localStorage.setItem('goodsId', JSON.stringify(newGoodsIdArr));
      renderBasketElement(basketBtn, sectionGoods, fetchRequest);
    });
  });
};
