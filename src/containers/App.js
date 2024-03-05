import React, { Component } from 'react';
import './App.css'
import Articles from '../components/Articles/Articles';
import Header from '../components/Header/Header';




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
    
    const articles = [...this.state.articles];
    articles.splice(articleIndex, 1);
    this.setState({articles: articles});
  }

  render(){

    let articles = null;
    if(this.state.showArticles){
      articles = <Articles articles={this.state.articles} deleteArticle={this.deleteArticleHandler} />;
    }
    

   

    

    return (
     
      
      <div className='App'>
        <Header showArticles={this.state.showArticles} toggleArticles={this.toggleArticlesHandler}/>
        
        {articles}
      </div>
      
     );
  }
}

export default App;