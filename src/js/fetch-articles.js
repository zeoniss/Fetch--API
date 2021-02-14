const apiKey = '919e5e36fb6c4976a92665bad143e6d2';

function fetchArticles(searchQuery) {

    const url = `http://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`;
    const options = {
        headers: {
            'Authorization': apiKey
        },
    }
    return fetch(url, options)
        .then(res => res.json())
        .then(data => data.articles)
        .catch(error => console.log(error))

}

export default fetchArticles