const elSearchLink = document.querySelector('.search-link');
const elSearchForm = document.querySelector('.js-search-form');
const elSearchLinkResults = document.querySelector('.search-link__results');

if (elSearchLink) {
  elSearchForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    elSearchLinkResults.classList.add('search-link__results--open');
  });
}

if (elSearchLink) {
  elSearchLink.addEventListener('click', function (evt) {
    if (evt.target.matches('.js-copy-search-link-button')) {
      // Change button text
      evt.target.textContent = 'Copied!';

      // Change button bgcolor
      evt.target.classList.add('search-link__copy-button--copied');
    }

    // Copy search link to clipboard
    navigator.clipboard.writeText(evt.target.previousElementSibling.textContent);

    // Reset button text and class after 1 second
    setTimeout( function () {
      evt.target.textContent = 'Copy';
      evt.target.classList.remove('search-link__copy-button--copied');
    }, 1000);
  });
}
