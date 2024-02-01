import React, { Component } from 'react';
import './App.css'
import Article from './Article/Article';

class App extends Component {

  
 // STATE do przechowywania naszych danych
  state = {
    articles:[
      {title: "title1", content: "this is content 1"},
      {title: "title2", content: "this is content 2"},
      {title: "title3", content: "this is content 3"},
      {title: "title4", content: "this is content 4"},
    ],
    showArticles: false
} 

  toggleArticlesHandler = () => {
    const doesShow = this.state.showArticles;
    this.setState({showArticles: !doesShow});//przeciwieństwo!
  }
 
  render(){

   
    let articles = null;

    if (this.state.showArticles){
      articles = this.state.articles.map(article => {
        return(<Article title={article.title} content={article.content} />)
      })
    }

    return (
      <div className='App'>
        <button onClick={this.toggleArticlesHandler}>Toggle Article</button>
        {articles}
      </div>
     );
  }
}

export default App;