import React, { useState, useEffect } from 'react';
import { Header, Card, SearchInput, Results } from '../../Components';
import './styles.css';

const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=b6248ed0&';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleInput = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    searchTerm === ''
      ? setResults([])
      : (
        fetch(`${API}s=${searchTerm}`)
            .then(res => {
              console.log('res is back ', res);
              return res.json()
            })
            .then(json => {
              console.log('json back: ', json)
              if (json.Error) {
                return;
              }
              setResults(json.Search);
            })
            .catch(err => {
              console.log('OMDB API Error: ', err);
            })
      )
  }, [searchTerm]);

  return (
    <div className="page__home">
      <Header />
      <SearchInput onChange={handleInput} />

      <Results results={results} />
      
    </div>
  );
}

export default HomePage;
