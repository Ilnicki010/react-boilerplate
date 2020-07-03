// @flow

import React from 'react';
import type { Node } from 'react';

/**
 * @function Home
 * @param {Object} props
 * @returns {Node}
 * @exports Home
 */

const add = (a, b) => a + b;

const Home = (): Node => {
  return <main>{add(3, 3)}</main>;
};

export default Home;
