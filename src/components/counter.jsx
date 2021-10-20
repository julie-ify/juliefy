import React from 'react';

const Counter = (props) => {
  const { counter, handleIncrement, handleDecrement } = props;
  let classes = 'badge col-3 bg-';
  return (
    <div className="m-2 row gy-5 gx-5">
      <span
        className={
          counter.value === 0 ? (classes += 'warning') : (classes += 'primary')
        }
        style={{ fontSize: 20 }}
      >
        {counter.value === 0 ? 'Zero' : counter.value}
      </span>
      <button
        className="btn btn-secondary col-3 mx-2"
        onClick={() => handleIncrement(counter)}
      >
        +
      </button>
      <button
        className="btn btn-secondary btn-sm col-3"
        onClick={() => handleDecrement(counter)}
        disabled={counter.value === 0 && true}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
