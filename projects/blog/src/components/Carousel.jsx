import { Children, useRef, useState, useEffect } from 'react';

/**
 * A component that displays a watch.
 *
 * @returns {React.Component}
 */
const Carousel = ({ delay, children }) => {
  // Normalize children.
  const childrenArray = Children.toArray(children);
  const totalChildren = childrenArray.length;

  // Variables.
  const [index, setIndex] = useState(0);
  const timeRef = useRef(null);

  // Start Timer function.
  const startTimer = () => {
    // Clear existing timer
    if (timeRef.current) {
      clearInterval(timeRef.current);
    }

    // Start Timer
    if (totalChildren > 0 && delay > 0) {
      timeRef.current = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % totalChildren);
      }, delay);
    }
  };

  // useEffect for initial timer setup and cleanup
  useEffect(
    () => {
      // Initial start the timer
      startTimer();

      // Cleanup the timer if the component unmounts and (delay, totalChildren) changes
      return () => {
        if (timeRef.current) {
          clearInterval(timeRef.current);
        }
      };
    },
    delay,
    totalChildren
  );

  // HandleNext
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalChildren);
    startTimer();
  };

  // HandlePrevious
  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1) % totalChildren);
    startTimer();
  };

  return (
    <div className="border-2 border-gray-300 rounded-md p-8 mb-4">
      <h2 className="text-2xl font-bold py-4">Carousel</h2>

      <div class="carousel">
        {children && (
          <>
            <div class="current border-2 border-gray-300 rounded-md p-4 mb-4">
              {childrenArray[index]}
            </div>

            {2 < totalChildren && (
              <div class="buttons flex gap-2">
                <button
                  class="button-previous bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
                <button
                  class="button-next bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Carousel;
