import React from 'react';
import './Article.css';
import styled from 'styled-components';
import styles from './Article.module.css'

const StyledDiv =  styled.div`
         
width: 70%;
margin: auto;
border: 1px solid gray;
box-shadow: 0 3 px 4px #bbbbbb;
padding: 15px;
text-align: center;
margin-bottom: 10px;


@media (min-width: 900px){

    width: 600px;

}`


const Article = props => {
    //stała STYLE do użycia @media
    const style = {
        '@media(min-width: 900px)': {
            width: '630px'
        }
    }
    //selektor style ze stała style dla @media
    return(
        //<div className='Article' style={style}>
       <StyledDiv>
            <h2>{props.title}</h2>
            <p className={styles.violet}>{props.content}</p>
            <button onClick={props.deleteClick}>Delete article</button>
            <br />
            <br />
            </StyledDiv>
    );
}

export default Article;