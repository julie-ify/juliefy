import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heart } from '@fortawesome/free-solid-svg-icons';

const Like = (props) => {
  const { handleLikeProps, movieProps } = props;
  return (
    <div>
      <FontAwesomeIcon
        icon={movieProps.like ? heart : faHeart}
        onClick={() => handleLikeProps(movieProps._id, movieProps)}
        style={{cursor: 'pointer'}}
      />
    </div>
  );
};

export default Like;
