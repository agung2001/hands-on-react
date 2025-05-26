import React, { Children, Component, useRef, useState, useEffect } from 'react';

/**
 * A component that displays a watch.
 *
 * @returns {React.Component}
 */
const Carousel = ({ delay, children }) => {
  // Normalize children.
  const childrenArray = React.Children.toArray(children);
  const totalChildren = childrenArray.length;

  //   // Variables.
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
      });
    }
  };

  // Start delay.
  useEffect(
    () => {
      startTimer();
    },
    delay,
    totalChildren
  );

  // HandleNext
  const handleNext = () => {
    // let nextIndex = (index < (totalChildren-1)) ? index + 1 : 0;
    // setIndex( nextIndex );
    setIndex((prevIndex) => (prevIndex + 1) % totalChildren);
    startTimer();
  };

  // HandlePrevious
  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1) % totalChildren);
    // let nextIndex = (index > 0) ? index - 1 : (totalChildren - 1);
    // setIndex( nextIndex );
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
                  class="button-next bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={handleNext}
                >
                  Next
                </button>
                <button
                  class="button-previous bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={handlePrevious}
                >
                  Previous
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
