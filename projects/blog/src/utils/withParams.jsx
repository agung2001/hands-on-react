import { useParams } from 'react-router-dom';

/**
 * A higher-order component that injects the params from the URL into the wrapped component.
 * - we use withParams because class component can't use useParams hook directly it needs to be wrapped in a function
 *
 * @example
 * const Post = withParams(({ params }) => {
 *   return <div>Post {params.id}</div>;
 * });
 *
 * @param {React.Component} Component
 * @returns {React.Component}
 */
function withParams(Component) {
  return function Wrapper(props) {
    const params = useParams();
    return <Component {...props} params={params} />;
  };
}

export default withParams;
