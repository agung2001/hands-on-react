import { memo } from 'react'; // for memoization

/**
 * A component that displays a button.
 *
 * @param {React.Component} Component
 * @returns {React.Component}
 */
const Button = memo(({ onClick, className = '', children }) => {
  const defaultClasses =
    'cursor-pointer bg-blue-500 text-white px-6 py-2 mr-2 shadow-md rounded-md';
  const combinedClasses = className ? `${defaultClasses} ${className}` : defaultClasses;

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
});

export default Button;
