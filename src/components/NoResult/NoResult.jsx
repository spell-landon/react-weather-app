import React from 'react';
import css from './NoResult.module.css'

function NoResult(props) {
    return (
        <div className={css.div}>
            I only show when nothing has populated
        </div>
    );
}

export default NoResult;