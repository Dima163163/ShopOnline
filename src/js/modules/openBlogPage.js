import {appendPageBlog} from './appendPageBlog.js';
import {openCloseMenu} from './openMenu.js';
import {rednerBlogs, renderPagination} from './pagination.js';
import elements from './pageElements.js';
const {blogsCads, currentPage} = elements;

export const openBlogPage = (btnBlogHeder, btnBlogFooter, sectionGoods,
    menuBurger, menuImgBtn) => {
  btnBlogHeder.addEventListener('click', async (e) => {
    e.preventDefault();
    await appendPageBlog(sectionGoods);
    const blogInner = document.querySelector('.blog-inner');
    const paginationSection = document.querySelector('.blogs-page__btns');
    rednerBlogs(blogInner, blogsCads, currentPage);
    renderPagination(paginationSection, blogsCads, blogInner);
    openCloseMenu(menuBurger, menuImgBtn);
  });
  btnBlogFooter.addEventListener('click', async (e) => {
    e.preventDefault();
    await appendPageBlog(sectionGoods);
    const blogInner = document.querySelector('.blog-inner');
    const paginationSection = document.querySelector('.blogs-page__btns');
    rednerBlogs(blogInner, blogsCads, currentPage);
    renderPagination(paginationSection, blogsCads, blogInner);
  });
};
