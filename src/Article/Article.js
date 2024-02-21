import React from 'react';
import './Article.css';

const Article = props => {
    return(
        <div className='Article'>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button onClick={props.deleteClick}>Delete article</button>
            <br />
            <br />
        </div>
    );
}

export default Article;