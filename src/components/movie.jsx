import React from 'react';
import Like from './like';

const Movie = (props) => {
  const { moviesProps, handleDeleteProps, handleLikeProps } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">title</th>
          <th scope="col">genre</th>
          <th scope="col">numberInStock</th>
          <th scope="col">Like</th>
          <th scope="col">dailyRentalRate</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {moviesProps.map((m) => (
          <tr key={m._id}>
            <th scope="row">{m.title}</th>
            <td>{m.genre.name}</td>
            <td>{m.numberInStock}</td>
            <td><Like handleLikeProps={handleLikeProps} movieProps={m} /></td>
            <td>{m.dailyRentalRate}</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeleteProps(m._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Movie;
