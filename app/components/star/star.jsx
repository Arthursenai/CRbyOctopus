import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Star = ({ isActive, onClick }) => {
  return (
    <button onClick={onClick}>
      {isActive ? <AiFillStar color="yellow" /> : <AiFillStar color="white" />}
    </button>
  );
};

export default Star;