const apiKey = '919e5e36fb6c4976a92665bad143e6d2';

export default {
    searchQuery: '',
    page: 1,

    fetchArticles() {

        const url = `http://newsapi.org/v2/everything?q=${this.query}&language=en&apiKey=${apiKey}&pageSize=5page=${this.page}`;
        const options = {
            headers: {
                'Authorization': apiKey,
            },
        };
        return fetch(url, options)
            .then(res => res.json())
            .then(({ articles }) => {
                this.page += 1;
                return articles
            })
            .catch(error => console.log(error))

    },
    resetPage() {
        this.page = 1;
    },
    get query() {
        return this.searchQuery;
    },
    set query(value) {
        return this.searchQuery = value;
    }
};