'use srtict';

const blogInner = document.querySelector('.blog-inner');
const paginationSection = document.querySelector('.blogs-page__btns');

const imgAPIS = ['https://loremflickr.com/400/400?1', 'https://loremflickr.com/400/400?2', 'https://loremflickr.com/400/400?3', 'https://loremflickr.com/400/400?4', 'https://loremflickr.com/400/400?5', 'https://loremflickr.com/400/400?6', 'https://loremflickr.com/400/400?7'];

let currentPage = 1;
const blogsCads = 4;


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
  console.log('data: ', data);

  return data;
};

// Отрисовываем карточки blog
const rednerBlogs = async (blogWrapper, pagesCount, currPage) => {
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
    currentPage = page;
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
  buttonLeft.innerHTML = `
  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_0_255)">
  <path d="M32.375 16.9583H10.5296L16.0487 
  11.4237L13.875 9.25L4.625 18.5L13.875 
  27.75L16.0487 25.5763L10.5296 20.0417H32.375V16.9583Z" fill="#8F8F8F"/>
  </g>
  <defs>
  <clip-path id="clip0_0_255">
  <rect width="37" height="37" fill="white"/>
  </clip-path>
  </defs>
  </svg>
  `;

  const buttonRight = document.createElement('btn');
  buttonRight.classList.add('arrow', 'arrow-right');
  buttonRight.innerHTML = `
  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_0_258)">
  <path d="M4.625 16.9583H26.4704L20.9513 11.4237L23.125 
  9.25L32.375 18.5L23.125 27.75L20.9513 
  25.5763L26.4704 20.0417H4.625V16.9583Z" fill="#3670C7"/>
  </g>
  <defs>
  <clip-path id="clip0_0_258">
  <rect width="37" height="37" fill="white" transform="matrix(-1 0 0 1 37 0)"/>
  </clip-path>
  </defs>
  </svg>
  `;

  return {
    buttonLeft,
    buttonRight,
  };
};

// Отрисовка пагинации
const renderPagination = async (paginWrapper, numbOfPages, blogWrapper) => {
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

const init = () => {
  rednerBlogs(blogInner, blogsCads, currentPage);
  renderPagination(paginationSection, blogsCads, blogInner);
  renderPaginationArrow(paginationSection);
};

init();

