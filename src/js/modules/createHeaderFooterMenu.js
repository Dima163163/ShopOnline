// Создает список категорий и добавляет их в header
export const createHeaderFooterMenu = async (fetchRequest,
    listCategories, postfix, footerListCategories) => {
  const {err, data} = await fetchRequest(postfix, {
    callback: (err, data) => ({
      err,
      data,
    }),
  });

  const categories = data.map(category => {
    const li = document.createElement('li');
    li.classList.add('menu-item');
    const button = document.createElement('button');
    button.classList.add('menu-link', 'menu-link-category');
    button.textContent = category;
    li.append(button);

    return li;
  });

  const categoriesFooter = data.map(category => {
    const li = document.createElement('li');
    li.classList.add('footer-content-item');
    const button = document.createElement('button');
    button.classList.add('menu-link', 'footer-content-link');
    button.textContent = category;
    li.append(button);

    return li;
  });

  listCategories.append(...categories);
  footerListCategories.append(...categoriesFooter);
};
