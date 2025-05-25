import { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * A component that displays a list of posts.
 *
 * @returns {React.Component}
 */
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  async fetchPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      this.setState({ posts: data });
      console.log('✅ Posts loaded:', data);
    } catch (error) {
      console.error('❌ Error fetching posts:', error);
    }
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        <h1 className="text-4xl font-bold">Posts</h1>

        <div className="grid grid-cols-4 gap-4 mt-4">
          {posts.map((post) => (
            <div key={post.id} className="border-1 border-gray-200 rounded-md p-4 hover:shadow-lg">
              <Link className="text-2xl font-bold" to={`/post/${post.id}`}>
                {post.title}
              </Link>
              <p className="text-gray-500">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Posts;
