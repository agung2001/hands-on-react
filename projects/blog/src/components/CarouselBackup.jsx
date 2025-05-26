import React, { useState, useEffect, useRef } from 'react';

const Carousel = ({ delay, children }) => {
  // Normalize children.
  const childrenArray = React.Children.toArray(children);
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
    <div class="carousel">
      {children && (
        <>
          <div class="current">{childrenArray[index]}</div>

          {2 < totalChildren && (
            <div class="buttons">
              <button class="button-previous" onClick={handlePrevious}>
                Previous
              </button>
              <button class="button-next" onClick={handleNext}>
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

// or
//
// class Carousel extends React.Component {
//   render() {
//     return (
//       <div>
//         YOUR SOLUTION
//       </div>
//     );
//   }
// }

export default Carousel;
