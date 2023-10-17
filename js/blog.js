'use srtict';

const blogInner = document.querySelector('.blog-inner');
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
  console.log('data: ', data);

  return data;
};

// Отрисовываем карточки blog
const rednerBlogs = async (blogWrapper) => {
  const data = await loadBlogs();

  const blogs = data.map(item => {
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

const init = () => {
  rednerBlogs(blogInner);
};

init();

