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
      <h2 className="text-2xl font-bold py-4">Watch</h2>
      <p>Count: {count}</p>
      <button
        className="bg-blue-500 text-white p-2"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Watch;
