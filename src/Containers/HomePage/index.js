import React, { useState, useEffect } from 'react';
import { Header, Card, SearchInput } from '../../Components';
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
      {results && results.length > 0 && results.map((each, i) => {
        return (
          <Card
            key={i}
            heading={each.Title}
            subheading={each.Ratings && each.Ratings.length > 0 ? each.Ratings[0].Title : 'unrated'}
            callout={each.Year}
            img={each.Poster}
          />
        )
      })}

      {(!results || results.length === 0) && <p>Search For A Movie...</p>}
    </div>
  );
}

export default HomePage;
