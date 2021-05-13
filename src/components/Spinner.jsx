import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css'

const Spinner = props => {
    return (
        <div 
            className={style.spinner}
            aria-label='loading'>
            <h1>loading...</h1>
        </div>
    )
}

Spinner.propTypes = {

}

export default Spinner
