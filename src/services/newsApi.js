import { formatHeadlines } from './munge-utils';

export const getThePaper = async () => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=Beach&apiKey=${process.env.NEWS_API_KEY}`)
    const { articles } = await res.json();

    console.log(res, articles)

    const printedHeadlines = formatHeadlines(articles)
    console.log(printedHeadlines)
    return printedHeadlines;
}