import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import SearchForm from './components/SearchForm/SearchForm'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <div className='container'>
      <SearchForm />
      </div>
      </div>
    );
  }
}

export default App;
