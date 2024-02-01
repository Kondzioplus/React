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