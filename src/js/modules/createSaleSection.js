// Создает секцию со скидками
export const createSaleSection = () => {
  const sectionSale = document.createElement('div');
  sectionSale.classList.add('section-sale', 'section-sale-good');

  const container = document.createElement('div');
  container.classList.add('container');

  const saleTitle = document.createElement('h2');
  saleTitle.classList.add('section-sale-title', 'section-sale-title-good');
  saleTitle.textContent = 'Рекомендуем также';
  const saleList = document.createElement('ul');
  saleList.classList.add('section-sale-list');
  container.append(saleTitle, saleList);
  sectionSale.append(container);

  return {
    sectionSale,
    saleList,
  };
};
