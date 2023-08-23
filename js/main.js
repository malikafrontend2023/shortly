const elSearchForm = document.querySelector('.js-search-form');
const elSearchLinkResults = document.querySelector('.search-link__results');

elSearchForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  elSearchLinkResults.classList.add('search-link__results--open');
})