const blogInner = document.querySelector('.blog-inner');
const paginationSection = document.querySelector('.blogs-page__btns');
const menuBtn = document.querySelector('.header__btn');
const menuImgBtn = document.querySelector('.header__btn-icon');
const menuBurger = document.querySelector('.menu');
const listGoods = document.querySelector('.section-sale-list');
const menuBtnsCategorys = document.querySelectorAll('.menu-link-category');
const listCategories = document.querySelector('.menu-list-categories');
const sectionGoods = document.querySelector('.section-wrapper');
const basketBtn = document.querySelector('.header-panel__link-basket');


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
  listGoods,
  menuBtnsCategorys,
  listCategories,
  sectionGoods,
  basketBtn,
};
