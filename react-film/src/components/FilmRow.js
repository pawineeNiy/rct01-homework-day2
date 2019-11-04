import React, { Component } from 'react';
import '../App.css';
import '../index.css';

import FilmPoster from './FilmPoster'
import Fave from "./Fave";
class FilmRow extends Component {
    handleDetailsClick = () => { };
    render() {
        let { title, release_date, poster_path } = this.props
        let year = new Date(release_date);
        let fullyear = year.getFullYear();
        let posterUrl = <FilmPoster
            poster_path={poster_path}
            title={title}
        />
        return (
            <div className="film-row">
                {posterUrl}
                <div className="film-summary">
                    <h1>{title}</h1>
                    <p>{fullyear}</p>
                </div>
                <Fave />
            </div>
        );
    }
}

export default FilmRow;
