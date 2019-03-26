import React, {useState} from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(props.initial);

  return (
    <button onClick={() => setCount(n => n+1)}>
      {count}
    </button>
  );
};

export default Counter;
