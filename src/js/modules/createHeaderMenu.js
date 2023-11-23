export const createHeaderMenu = async (fetchRequest,
    listCategories, postfix) => {
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

  listCategories.append(...categories);
};
