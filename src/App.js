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
    ],
    showArticles: false
} 

  toggleArticlesHandler = () => {
    const doesShow = this.state.showArticles;
    this.setState({showArticles: !doesShow});//przeciwieństwo!
  }
 
  render(){

    return (
      <div className='App'>
        <button onClick={this.toggleArticlesHandler}>Toggle Article</button>
        { this.state.showArticles ?//warunek
        (<div> 
        <Article title={this.state.articles[0].title} content={this.state.articles[0].content} />
        <Article title={this.state.articles[1].title} content={this.state.articles[1].content} />
        <Article title={this.state.articles[2].title} content={this.state.articles[2].content} />
        </div>) : null
        }
      </div>
     
    );
  }
}

export default App;