import {createPageBlog} from './createPageBlog.js';

export const appendPageBlog = async (sectionGoods) => {
  sectionGoods.textContent = '';
  const blog = await createPageBlog();
  console.log('blog: ', blog);
  sectionGoods.append(blog);
};
