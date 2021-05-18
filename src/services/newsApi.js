import { formatHeadlines } from './munge-utils';

export const getThePaper = async () => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=ghosts&apiKey=${process.env.NEWS_API_KEY}`)
    const { articles } = await res.json();

    console.log(res)
    const printedHeadlines = formatHeadlines(articles)
    
    return printedHeadlines;
}

export const scourPaper = async (search) => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${process.env.NEWS_API_KEY}`)
    const { articles } = await res.json();
    const printedHeadlines = formatHeadlines(articles)

    return printedHeadlines;
}