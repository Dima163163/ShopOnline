export const createPageBlog = () => {
  const divContainer = document.createElement('div');
  divContainer.classList.add('container');

  divContainer.insertAdjacentHTML('beforeend', `
    <div class="breadcrumps-wrapper">
      <div class="section-breadcrumbs">
        <a href="./index.html" class="section-breadcrumb">Главная</a>
        <div class="section-arrow"></div>
        <p class="section-breadcrumb">Блог</p>
      </div>
    </div>
        <div class="blogs">
          <div class="blog-container">
            <div class="blog-wrapper">
              <div class="blog-inner">
              </div>
              <div class="blogs-page">
                <div class="blogs-page__btns"></div>
              </div>
            </div>
          </div>
        </div>
  `);
  return divContainer;
};
