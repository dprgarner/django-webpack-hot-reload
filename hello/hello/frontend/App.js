import React from 'react';
import { hot } from 'react-hot-loader/root'

import Counter from './Counter';

const App = () => (
  <div style={{ border: '1px solid red'}}>
    Hello I am the React App

    <Counter initial={3} />

    <Counter initial={6} />
  </div>
);

export default hot(App);
