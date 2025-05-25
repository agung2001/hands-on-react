import { Component, useRef, useState } from 'react';

/**
 * A component that displays a reference.
 *
 * @returns {React.Component}
 */
const Reference = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef.current);
    inputRef.current.classList.add('active');
    inputRef.current.focus();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold py-4">Reference</h2>
      <p>This is a reference component</p>

      <div className="flex items-center mt-4">
        <input
          type="text"
          ref={inputRef}
          className="border-2 border-gray-300 rounded-md p-2 mr-2"
        />
        <button onClick={handleClick} className="cursor-pointer bg-blue-500 text-white p-2">
          Click me
        </button>
      </div>
    </div>
  );
};

/**
 * A component that displays a watch.
 *
 * @returns {React.Component}
 */
const Watch = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
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

/**
 * A component that displays sample content.
 *
 * @returns {React.Component}
 */
class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h1 className="text-4xl font-bold py-4">Samples</h1>

        <Reference />
        <Watch />
      </div>
    );
  }
}

export default Sample;
