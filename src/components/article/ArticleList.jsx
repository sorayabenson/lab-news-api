import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article';

const ArticleList = ({ articles }) => (
    <ul aria-label='articles'>
        {articles.map((article) => {
            return (
            <Article 
                title={article.title}
                author={article.author}
                description={article.description}
                source={article.source}
                url={article.url}
            />
            )
        })}       
    </ul>
)

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            source: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default ArticleList
