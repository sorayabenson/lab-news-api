export const formatHeadlines = (articles) => {
    
    const freshInk = articles.map((article) => {
        return {
            title: article.title,
            author: article.author,
            description: article.description,
            source: article.source.name,
            url: article.url
        }
    })

    return freshInk;
}