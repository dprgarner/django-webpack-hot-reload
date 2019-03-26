import React from 'react';

import Counter from './Counter';

export default () => (
  <div style={{ border: '1px solid red'}}>
    Hello I am the React App

    <Counter initial={3} />

    <Counter initial={10} />
  </div>
)
