
const NewsClient = {
    async fetchNews() {
        return fetch("http://localhost:3000/api/news")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data.appnews.newsitems.map((news) => {
                var news = {
                    title: news.title,
                    contents: news.contents,
                    url: news.url,
                }
                return news;
            })
        });
    }
}

export default NewsClient;