export const placingAnOrder = (bntSubmit, checkboxSubmit, mainSection) => {
  bntSubmit.addEventListener('click', () => {
    if (checkboxSubmit.checked) {
      mainSection.textContent = '';
      const div = document.createElement('div');
      div.classList.add('container');
      const titleWrapper = document.createElement('div');
      titleWrapper.classList.add('submit-title-wrapper');
      const h1 = document.createElement('h1');
      h1.classList.add('submit-title');
      h1.textContent = `Ваш заказ оформлен`;
      titleWrapper.append(h1);
      div.append(titleWrapper);
      mainSection.append(div);
      localStorage.clear();
    }
  });
};
