import React, { Fragment, Component } from "react";
import "../../assets/css/skeleton.css";
import "./ArticleSearch.scss";
import api from "../../utils/api";
import moment from 'moment'
import ArticleList from './ArticleList/ArticleList'
import axios from 'axios'

class ArticleSearch extends Component {
  state = {
    searchQuery: "",
    beginningDate: "",
    endingDate: "",
    articles: {}
  };


  saveArticle = article => {
    axios.post('/api/articles', article)
      .then(res => console.log(res))
  }
  articleQuery = query => {
    api.articleQuery(query)
      .then(res => {
        console.log(res.data.response.docs);
        this.setState({
          articles: res.data.response.docs
        })
      })
  }

  articleQueryByDate = (query, beginningDate, endingDate) => {
    api.articleQueryByDate(query, beginningDate, endingDate)
      .then(res => {
        console.log(res.data.response.docs)
        this.setState({
          articles: res.data.response.docs
        })
      })
  }

  inputHandler = event => {
    const {name, value } = event.target;
    this.setState({
      [name]: value.trim()
    })
  }

  submitBtnHandler = event => {
    event.preventDefault()
    if (!this.state.beginningDate && !this.state.endingDate) {
      this.articleQuery(this.state.searchQuery)
    }
    if (this.state.beginningDate && this.state.endingDate) {
      const beginningDate = this.state.beginningDate
      const endingDate = this.state.endingDate
      const formattedBeginningDate = moment(beginningDate).format('YYYYMMDD')
      const formattedEndingDate = moment(endingDate).format('YYYYMMDD')
      console.log('formatted dates', formattedBeginningDate, formattedEndingDate)
        this.articleQueryByDate(this.state.searchQuery, formattedBeginningDate, formattedEndingDate)
    }
  }

  render() {
    return (
      <Fragment>
      <div id="search-form">
        <form>
          <label>
            <span id="search-form-label">Search Term(s):</span>
            <input type="text" name="searchQuery" placeholder="Search" onChange={this.inputHandler}/>
          </label>
        </form>
        <div className = 'time-select'>
        <div className="row">
        <p>Optional: Search Archive</p>
        </div>
        <div className="row">
          <div className="six columns">
            <form>
              <label>
                <span id="search-form-label">From:</span>
                <input
                  type="date"
                  name="beginningDate"
                  className="dateInput"
                  placeholder="Beginning Date"
                  onChange={this.inputHandler}
                />
              </label>
            </form>
          </div>
          <div className="six columns">
            <form>
              <label>
                <span id="search-form-label">To:</span>
                <input
                  type="date"
                  name="endingDate"
                  className="dateInput"
                  placeholder="Ending Date"
                  onChange={this.inputHandler}
                />
              </label>
            </form>
          </div>
        </div>
        </div>
        <div className="submit">
          <button onClick={this.submitBtnHandler} id="search-submit-btn">
            Submit
          </button>
        </div>
      </div>
      <ArticleList saveArticle = {this.saveArticle} articles={this.state.articles} />
      </Fragment>
    );
  }
}

export default ArticleSearch;
