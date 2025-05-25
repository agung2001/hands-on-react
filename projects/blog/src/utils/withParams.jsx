import { useParams } from 'react-router-dom';

/**
 * A higher-order component that injects the params from the URL into the wrapped component.
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
