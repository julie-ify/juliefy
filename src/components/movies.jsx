import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Movie from './movie';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies(),
      like: true,
    };
  }

  handleDelete = (movie_id) => {
    const filteredMovies = this.state.movies.filter((m) => m._id !== movie_id);
    this.setState({
      movies: filteredMovies,
    });
  };

  handleLike = (movie_id, movie) => {
    const movies = [...this.state.movies];
    const findLike = movies.find((m) => m._id === movie_id);
    const index = movies.indexOf(findLike);
    movies[index] = { ...movie };
    movies[index].like = !movies[index].like;
    this.setState({ 
      ...this.state,
      movies: movies,
    });
  };

  render() {
    return (
      <Movie
        moviesProps={this.state.movies}
        handleDeleteProps={this.handleDelete}
        handleLikeProps={this.handleLike}
      />
    );
  }
}

export default Movies;
