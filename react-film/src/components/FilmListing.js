import React, { Component } from 'react';
import FilmRow from './FilmRow'
import '../App.css';
import '../index.css';
class FilmListing extends Component {
    state = {
        filter: "all",
        faves: []
    };

    handleFilterClick = (message, e) => {
        this.setState({ filter: message });
        e.stopPropagation();
    };

    render() {
        const allFilms = (this.state.filter === "all"
            ? this.props.FilmData
            : this.state.faves
        ).map((film, index) => (
            <FilmRow
                key={index}
                title={film.title}
                poster_path={film.poster_path}
                release_date={film.release_date}
            />
        ));

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={`film-list-filter ${this.state.filter === "all" ? "is-active" : ""}`}
                        onClick={e => this.handleFilterClick("all", e)}
                    >
                        ALL
                <span className="section-count">{this.props.FilmData.length}</span>
                    </div>
                    <div
                        className={`film-list-filter ${this.state.filter === "faves" ? "is-active" : ""}`}
                        onClick={e => this.handleFilterClick("faves", e)}
                    >
                        FAVES
                <span className="section-count">0</span>
                    </div>
                </div>
                {allFilms}
            </div>
        );
    }
}

export default FilmListing;

