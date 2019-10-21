import React, { useState, useEffect } from 'react';
import { Header, SearchInput, Results, Spinner } from '../../Components';
import './styles.css';

const API = 'https://www.omdbapi.com/?i=tt3896198&apikey=b6248ed0&';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [ spinner, setSpinner ] = useState(false);

  const handleInput = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    searchTerm === ''
      ? setResults([])
      : setTimeout(() => {
        setSpinner(true);
          fetch(`${API}s=${searchTerm}`)
            .then(res => {
              return res.json();
            })
            .then(json => {
              if (json.Error) {
                return;
              }
              setResults(json.Search);
              setSpinner(false);
            })
            .catch(err => {
              console.log('OMDB API Error: ', err);
            });
        }, 1000);
  }, [searchTerm]);

  return (
    <div className="page__home">
      <Header />
      <SearchInput onChange={handleInput} />
      { spinner && <Spinner /> }
      { !spinner && <Results results={results} />}
    </div>
  );
}

export default HomePage;
