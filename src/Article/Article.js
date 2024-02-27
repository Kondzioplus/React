import React from 'react';
import './Article.css';
import Radium from 'radium';

const Article = props => {
    //stała STYLE do użycia @media
    const style = {
        '@media(min-width: 900px)': {
            width: '630px'
        }
    }
    //selektor style ze stała style dla @media
    return(
        <div className='Article' style={style}>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <button onClick={props.deleteClick}>Delete article</button>
            <br />
            <br />
        </div>
    );
}

export default Radium(Article);