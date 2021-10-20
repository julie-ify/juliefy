import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Movie from './movie';
import Paginate from './paginate';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies(),
      like: true,
      pageSize: 4,
      currentPage: 1,
    };
  }

  handleDelete = (movie_id) => {
    const filteredMovies = this.state.movies.filter((m) => m._id !== movie_id);
    this.setState({
      movies: filteredMovies,
    });
  };

  handleLike = (movie_id) => {
    const movies = [...this.state.movies];
    const findLike = movies.find((m) => m._id === movie_id);
    const index = movies.indexOf(findLike);
    movies[index].like = !movies[index].like;
    this.setState({
      movies: movies,
    });
  };

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    if (this.state.movies.length === 0) return <h3>There are no movies!</h3>;
    return (
      <React.Fragment>
        <Movie
          moviesProps={this.state.movies}
          handleDeleteProps={this.handleDelete}
          handleLikeProps={this.handleLike}
        />
        <Paginate state={this.state} handlePageChange={this.handlePageChange} />
      </React.Fragment>
    );
  }
}

export default Movies;
