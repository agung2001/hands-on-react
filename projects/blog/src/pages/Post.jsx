import React, { Component } from 'react';
import withParams from '../utils/withParams';

/**
 * A component that fetches a post from the JSONPlaceholder API and displays it.
 *
 * @example
 * const Post = withParams(({ params }) => {
 *   return <div>Post {params.id}</div>;
 * });
 *
 * @param {React.Component} Component
 * @returns {React.Component}
 */
class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      loading: true, // Add loading state for better UX
      error: null, // Add error state
    };
  }

  // When the component mounts, fetch the post
  componentDidMount() {
    this.fetchPost();
  }

  // When the component updates (e.g., if the URL parameter changes)
  componentDidUpdate(prevProps) {
    // Access params from this.props.params
    const currentId = this.props.params.id;
    const prevId = prevProps.params.id;

    if (currentId !== prevId) {
      this.fetchPost();
    }
  }

  async fetchPost() {
    // Access the id from this.props.params
    const { id } = this.props.params;

    // Handle cases where ID might be missing or initial render
    if (!id) {
      this.setState({ loading: false, error: 'Post ID not found in URL.' });
      return;
    }

    this.setState({ loading: true, error: null }); // Reset loading and error before fetching
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.setState({ post: data, loading: false });
      console.log('✅ Post loaded:', data);
    } catch (error) {
      console.error('❌ Error fetching post:', error);
      this.setState({ error: error.message, loading: false, post: {} }); // Clear post on error
    }
  }

  render() {
    const { post, loading, error } = this.state;
    // Access the id from this.props.params
    const { id } = this.props.params;

    if (loading) {
      return <div className="text-xl font-semibold text-blue-600">Loading post...</div>;
    }

    if (error) {
      return <div className="text-xl font-semibold text-red-600">Error: {error}</div>;
    }

    if (!post || Object.keys(post).length === 0) {
      return (
        <div className="text-xl font-semibold text-orange-600">No post found for ID: {id}.</div>
      );
    }

    return (
      <div>
        <h1 className="text-4xl font-bold py-4">
          {post.title}
          <span className="text-red-500">(#{id})</span>
        </h1>
        <p className="text-gray-500">{post.body}</p>
      </div>
    );
  }
}

export default withParams(Post);
