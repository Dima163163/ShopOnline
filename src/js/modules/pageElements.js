const blogInner = document.querySelector('.blog-inner');
const paginationSection = document.querySelector('.blogs-page__btns');
const menuBtn = document.querySelector('.header__btn');
const menuImgBtn = document.querySelector('.header__btn-icon');
const menuBurger = document.querySelector('.menu');

const currentPage = 1;
const blogsCads = 12;

export default {
  blogInner,
  paginationSection,
  currentPage,
  blogsCads,
  menuBtn,
  menuImgBtn,
  menuBurger,
};
