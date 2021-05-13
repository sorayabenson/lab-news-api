import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../components/Spinner';
import ArticleList from '../components/article/ArticleList';
import Search from '../components/article/Search';
import Header from '../components/Header';
import { getThePaper } from '../services/newsApi';
import '../components/style.css';

export default class NewsSearch extends Component {
    state = {
        loading: true,
        articles: []
    }

    async componentDidMount() {
        const articles = await getThePaper();
        
        this.setState({
            loading: false,
            articles: articles
        })
    }

    render() {
        const { loading, articles } = this.state;

        if (loading) return <Spinner />

        return (
            <>
                <Header />
                <Search />
                <ArticleList articles={articles}/>
            </>
        )
    }
}
