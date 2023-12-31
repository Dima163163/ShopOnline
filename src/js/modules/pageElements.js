const blogInner = document.querySelector('.blog-inner');
const paginationSection = document.querySelector('.blogs-page__btns');
const menuBtn = document.querySelector('.header__btn');
const menuImgBtn = document.querySelector('.header__btn-icon');
const menuBurger = document.querySelector('.menu');
const listGoods = document.querySelector('.section-sale-list');
const menuBtnsCategorys = document.querySelectorAll('.menu-link-category');
const listCategories = document.querySelector('.menu-list-categories');
const footerListCategories =
document.querySelector('.footer-menu-list-categories');
const btnFavorite = document.querySelector('.header-panel__link-favorites');


const sectionGoods = document.querySelector('.section-wrapper');
const basketBtn = document.querySelector('.header-panel__link-basket');

const btnBlogHeder = document.querySelector('.menu-link-blog-header');
const btnBlogFooter =
document.querySelector('.footer-content-link-blog-footer');


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
  footerListCategories,
  sectionGoods,
  basketBtn,
  btnFavorite,
  btnBlogHeder,
  btnBlogFooter,
};
