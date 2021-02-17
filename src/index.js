import './sass/styles.scss';
import newsService from './js/news-service';
import updateArticlesMarkup from './js/update-articles-markup';
import refs from './js/refs';
let searchQuery = '';
let page = 1;

refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const form = event.currentTarget;
    newsService.query = form.elements.query.value;
    refs.articlesContainer.innerHTML = '';
    form.reset();
    newsService.resetPage();
    newsService.fetchArticles().then(articles => {
        updateArticlesMarkup(articles)
        page += 1;
        refs.loadMoreBtn.classList.remove('is-hidden')
    });

});
refs.loadMoreBtn.addEventListener('click', () => {
    newsService.fetchArticles(searchQuery).then(articles => {
        updateArticlesMarkup(articles);
        page += 1;
    })
})