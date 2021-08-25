import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleList from "./components/ArticleList";
import Form from "./components/Form";

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [articles, setArticles] = useState([]);
  const [editedArticle, setEditedArticle] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get", {
      'method': 'GET',
      headers: {
        'Content-Type': 'applications/json'
      }
    })
        .then(resp => resp.json())
        .then(resp => setArticles(resp))
        .then(error => console.log())
  }, []);
 
  const editArcticle = (article) => {
    setEditedArticle(article)
  }


  return (
    <div className="App">
      <h1>Flask and React JS Course</h1>

      <ArticleList articles = {articles} editArticle = {editArcticle}/>
      <Form article={editedArticle}/>
    </div>
  );


}

export default App;
