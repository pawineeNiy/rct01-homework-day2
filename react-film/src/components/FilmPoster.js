import React, { Component } from 'react';
import '../App.css';
import '../index.css';
class FilmPoster extends Component {

    render() {
        const { title, poster_path } = this.props;
        const posterPrefix = "https://image.tmdb.org/t/p/w780/";
        const posterUrl = posterPrefix + poster_path;
    
        return <img src={posterUrl} alt={title} />;
    }
}

export default FilmPoster;
