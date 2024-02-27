import React, { Component } from 'react';
import './App.css'
import Article from './Article/Article';


class App extends Component {

  
 // STATE do przechowywania naszych danych
  state = {
    articles:[
      { id: 'asd123', title: "title1", content: "this is content 1"},
      { id: 'zxc456', title: "title2", content: "this is content 2"},
      { id: 'qwe789', title: "title3", content: "this is content 3"},
      { id: 'poi654', title: "title4", content: "this is content 4"},
    ],
    showArticles: false
} 

  toggleArticlesHandler = () => {
    const doesShow = this.state.showArticles;
    this.setState({showArticles: !doesShow});//przeciwieństwo!
  }
 
  deleteArticleHandler = (articleIndex) => {
    //const articles = this.state.articles.slice();
    const articles = [...this.state.articles];//nowszy zapis
    articles.splice(articleIndex, 1);
    this.setState({articles: articles});
  }

  render(){
    const buttonStyles = {
      backgroundColor: 'white',
      border: '2px solid #326647',
      color: 'black',
      padding: '10px 16px',
      textAlign: 'center',
      fontSize: '20px',
      cursor: 'pointer',
      marginTop: '10px',
      marginBottom: '10px',
      transitionDuration: '0,4s',
      ':hover': {
        backgroundColor: '#326647',
        color: 'white'
      }

    }

   
    let articles = null;

    if (this.state.showArticles){
      articles = this.state.articles.map((article, index) => {
        return(<Article
         title={article.title} 
         content={article.content} 
         deleteClick={() => this.deleteArticleHandler(index)}
         key={article.id} 
        />);
      })
      //dynamiczne przypisanie stylu
      buttonStyles.border = '2px solid red';

      buttonStyles.transitionDuration = '0,4s';
      buttonStyles[':hover'] = {
        backgroundColor: 'red',
        color: 'white'
      }
    }
// sprawdzanie ilosci atrykułów
    const articleStyles = [];
    if (this.state.articles.length ===1 ) {
      articleStyles.push('OneArticle');//jeśli został 1 artykuł to pogrób czcionke
    }
    if (this.state.articles.length >= 4) {
      articleStyles.push('GreenArticles');//jeśli jest 4 lub wiecej artykułów to zielony kolor
    } else articleStyles.push('OrangeArticles');//w pozostałych sytuacjach kolor pomarańczowy

    return (
      //opakowanie całości dla @media -<StyleRoot>
      
      <div className='App'>
        <button 
        style={buttonStyles}
        onClick={this.toggleArticlesHandler}>Toggle Article</button>
        <div className={articleStyles.join(' ')}>
        {articles}
        </div>
        
      </div>
      
     );
  }
}

export default App;