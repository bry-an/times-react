import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import ArticleSearch from './components/ArticleSearch/ArticleSearch'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <div className='container'>
      <ArticleSearch />
      </div>
      </div>
    );
  }
}

export default App;
