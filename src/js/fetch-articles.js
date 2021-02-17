const apiKey = '919e5e36fb6c4976a92665bad143e6d2';

function fetchArticles(searchQuery, page = 1) {

    const url = `http://newsapi.org/v2/everything?q=${searchQuery}&language=en&apiKey=${apiKey}&pageSize=20&page=${page}`;
    const options = {
        headers: {
            'Authorization': apiKey
        },
    }
    return fetch(url, options)
        .then(res => res.json())
        .then(({ articles }) => articles)
        .catch(error => console.log(error))

}

export default fetchArticles