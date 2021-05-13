import React from 'react';
import PropTypes from 'prop-types';
import style from '../style.css';

const Article = ({ title, author, description, source, url }) => (
    
    <a href={url}>
        <h3>{title}</h3>
        <h4>{description}</h4>
        <p className={style.author}>{author}</p>
        <p className={style.source}>{source}</p>
    </a>
)


Article.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    description: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default Article
