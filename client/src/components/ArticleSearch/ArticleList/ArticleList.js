import React from "react";
import "./ArticleList.scss";
import ArticleListItem from "./ArticleListItem/ArticleListItem";

const ArticleList = props =>  (
  <div className="article-list">
    <div className="article-list-header">
      <h3>Results</h3>
    </div>
    <div className="article-list-results"></div>
    <table className='u-full-width'>
    <thead>
        <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Subtitle</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        {
            (props.articles.length
        ? props.articles.map(article=> <ArticleListItem 
            key= {article.web_url}
            url= {article.web_url}
            date={article.pub_date} 
            title={article.headline.main} 
            subtitle={article.snippet} 
            saveArticle={props.saveArticle}/>)
        : null )}
    </tbody>
    
    </table>
  </div>
    )


export default ArticleList;
