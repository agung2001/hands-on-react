import { useRef } from 'react';

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
    <div className="border-2 border-gray-300 rounded-md p-8 mb-4">
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

export default Reference;
