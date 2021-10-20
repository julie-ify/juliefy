import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Movie from './movie';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies(),
    };
  }

  handleDelete = (movie_id) => {
    const filteredMovies = this.state.movies.filter((m) => m._id !== movie_id);
    this.setState({
      movies: filteredMovies,
    });
  };

  render() {
    return (
      <Movie
        moviesProps={this.state.movies}
        handleDeleteProps={this.handleDelete}
      />
    );
  }
}

export default Movies;
