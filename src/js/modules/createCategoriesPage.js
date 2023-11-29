

export const createCategoriesPage = async (menuBtn,
    fetchRequest, postfix, createGoods, sectionGoods, postdixDisc,
    openGood) => {
  const categoryName = menuBtn.textContent;
  const {err, data} =
  await fetchRequest(`${postfix}${categoryName}`,
      {
        callback: (err, data) => ({
          err,
          data,
        }),
      });
  const container = document.createElement('div');
  container.classList.add('container');

  const h2 = document.createElement('h1');
  h2.classList.add('categories-title');
  h2.textContent = categoryName;
  const goods = createGoods(err, data);


  const ul = document.createElement('ul');
  ul.classList.add('section-sale-list');
  ul.append(goods);
  sectionGoods.textContent = '';
  container.append(h2, ul);
  sectionGoods.append(container);
  openGood(sectionGoods, fetchRequest, createGoods, postdixDisc);
};
