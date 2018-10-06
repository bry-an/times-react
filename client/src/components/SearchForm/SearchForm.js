import React, { Component } from "react";
import '../../assets/css/skeleton.css'
import './SearchForm.css'

class SearchForm extends Component {
  state = {
    searchQuery: "",
    beginningDate: "",
    endingDate: ""
  };

  render() {
    return (
    <div id="search-form">
    <form>
        <label>
            Search Term(s):
            <input 
                type='text'
                name='searchQuery'
                placeholder='Search Term(s)'
                />
                </label>
        <label>
            Beginning Date (optional)
            <input 
                type='text'
                name='beginningDate'
                placeholder='Beginning Date'
                />
        </label>
        <label>
            Ending Date (optional)
            <input 
                type='text'
                name='endingDate'
                placeholder='Ending Date'
                />
        </label>
    </form>
    </div>
    )
  }
}

export default SearchForm
