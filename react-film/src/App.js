import React, { Component } from 'react';
import './App.css';
import FilmListing from './components/FilmListing'
import FilmDetails from './components/FilmDetails'
import TMDB from './TMDB'


class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing
          FilmData={TMDB.films}
        />
        <FilmDetails
          FilmData={TMDB.films} />
      </div>
    );
  }
}

export default App;
