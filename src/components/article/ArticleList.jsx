import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => (
    <ul aria-label='articles'>
        {articles.map((article) => {
            return (
            <li 
                aria-label='article'
                key={`${article.title}+${article.author}`}>
                <Article 
                    title={article.title}
                    author={article.author}
                    description={article.description}
                    source={article.source}
                    url={article.url}
                />
            </li>
            )
        })}       
    </ul>
)

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            author: PropTypes.string,
            description: PropTypes.string.isRequired,
            source: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default ArticleList
