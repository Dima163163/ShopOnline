import elements from './pageElements.js';
const {currentPage, blogsCads} = elements;


const imgAPIS = ['https://loremflickr.com/400/400?1', 'https://loremflickr.com/400/400?2', 'https://loremflickr.com/400/400?3', 'https://loremflickr.com/400/400?4', 'https://loremflickr.com/400/400?5', 'https://loremflickr.com/400/400?6', 'https://loremflickr.com/400/400?7'];

// Функция для рандомного выбора картинок блогов
const getRandomIntIncInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Получаем ответ с сервера
const loadBlogs = async () => {
  const result = await fetch('https://gorest.co.in/public-api/posts');
  const response = await result.json();
  const data = await response.data;

  return data;
};

// Отрисовываем карточки blog
export const rednerBlogs = async (blogWrapper, pagesCount, currPage) => {
  const data = await loadBlogs();
  blogWrapper.textContent = '';
  currPage--;
  const start = pagesCount * currPage;
  const end = start + pagesCount;
  const paginationData = data.slice(start, end);

  // const blogs = data.map(item => {
  const blogs = paginationData.map(item => {
    const blogCard = document.createElement('a');
    blogCard.className = 'blog-card';
    blogCard.innerHTML = `
      <div class="blog-card__id">${item.id}</div>
      <img class="blog-img"
        src="${imgAPIS[getRandomIntIncInclusive(0, 6)]}" alt="shoes">
      <p class="blog-description">${item.title}</p>
    `;
    return blogCard;
  });
  blogWrapper.append(...blogs);
};

// Отрисовка кнопок
const renderPaginationBtn = (page, blogWrapper) => {
  const button = document.createElement('btn');
  button.classList.add('blogs-page__btn');
  button.textContent = page;

  if (currentPage === page) {
    button.classList.add('blogs-page__btn_active');
  }

  button.addEventListener('click', () => {
    const currentPage = page;
    rednerBlogs(blogWrapper, blogsCads, currentPage);
    const currentBtn = document.querySelector('.blogs-page__btn_active');
    currentBtn.classList.remove('blogs-page__btn_active');
    button.classList.add('blogs-page__btn_active');
  });

  return button;
};

// Перелистывание страниц стрелками
const renderPaginationArrow = (blogWrapper) => {
  const buttonLeft = document.createElement('btn');
  buttonLeft.classList.add('arrow', 'arrow-left');
  if (window.innerWidth > 768) {
    buttonLeft.style = `
    content: '';
    background-image: url('../src/img/left-arrow-blog.svg');
    background-position: center;
    background-repeat: no-repeat;
    width: 37px;
    height: 37px;`;
  } else {
    buttonLeft.style = `
    content: '';
    background-image: url('../src/img/left768-320.svg');
    background-position: center;
    background-repeat: no-repeat;
    width: 28px;
    height: 28px;`;
  }

  const buttonRight = document.createElement('btn');
  buttonRight.classList.add('arrow', 'arrow-right');
  if (window.innerWidth > 768) {
    buttonRight.style = `
    content: '';
    background-image: url('../src/img/right-arrow-blog.svg');
    background-position: center;
    background-repeat: no-repeat;
    width: 37px;
    height: 37px;`;
  } else {
    buttonRight.style = `
    content: '';
    background-image: url('../src/img/right768-320.svg');
    background-position: center;
    background-repeat: no-repeat;
    width: 28px;
    height: 28px;`;
  }

  return {
    buttonLeft,
    buttonRight,
  };
};

// Отрисовка пагинации
export const renderPagination = async (paginWrapper,
    numbOfPages, blogWrapper) => {
  const data = await loadBlogs();
  const pagesCount = Math.ceil(data.length / numbOfPages);

  for (let i = 0; i < pagesCount; i++) {
    const a = renderPaginationBtn(i + 1, blogWrapper);
    paginWrapper.append(a);
  }
  const arr = renderPaginationArrow(blogWrapper);
  paginWrapper.prepend(arr.buttonLeft);
  paginWrapper.append(arr.buttonRight);
};
