import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../components/Spinner';
import ArticleList from '../components/article/ArticleList';
import Search from '../components/article/Search';
import Header from '../components/Header';
import { getThePaper, scourPaper } from '../services/newsApi';
import '../components/style.css';

export default class NewsSearch extends Component {
    state = {
        loading: true,
        articles: [],
        articleSearch: '',
    }

    async componentDidMount() {
        const articles = await getThePaper();
        
        this.setState({
            loading: false,
            articles: articles
        })
    }

    handleSearchChange = (e) => {
        this.setState({ articleSearch: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true });

        const articles = await scourPaper(this.state.articleSearch);
        this.setState({
            loading: false,
            articles: articles
        })
    }

    render() {
        const { loading, articles, articleSearch } = this.state;

        if (loading) return <Spinner />

        return (
            <>
                <Header />
                <Search 
                    articleSearch={articleSearch}
                    onSearchChange={this.handleSearchChange}
                    onSubmit={this.handleSubmit}/>
                <ArticleList articles={articles}/>
            </>
        )
    }
}
