import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    this.fetchPost();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchPost();
    }
  }

  async fetchPost() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
      );
      const data = await response.json();
      this.setState({ post: data });
      console.log('✅ Post loaded:', data);
    } catch (error) {
      console.error('❌ Error fetching post:', error);
    }
  }

  render() {
    const { post } = this.state;
    const { id } = this.props.match.params;

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

export default withRouter(Post);
