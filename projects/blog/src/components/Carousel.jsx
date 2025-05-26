import { Component, useRef, useState } from 'react';

/**
 * A component that displays a watch.
 *
 * @returns {React.Component}
 */
const Watch = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="border-2 border-gray-300 rounded-md p-8 mb-4">
      <h2 className="text-2xl font-bold py-4">Carousel</h2>
      <p>Carousel</p>
    </div>
  );
};

export default Watch;
