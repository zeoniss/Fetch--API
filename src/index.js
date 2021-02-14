import './sass/styles.scss';
import fetchArticles from './js/fetch-articles'
import updateArticlesMarkup from './js/update-articles-markup'
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(console.log)

// fetch('http://hn.algolia.com/api/v1/search?query=react&tags=story')
//     .then(res => res.json())
//     .then(data => console.log(data))
const refs = {
    articlesContainer: document.querySelector('.js-articles'),
    searchForm: document.querySelector('.js-search-form')
}

refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const form = event.currentTarget;
    const inputValue = form.elements.query.value;
    refs.articlesContainer.innerHTML = '';
    form.reset();
    fetchArticles(inputValue).then(updateArticlesMarkup)

})