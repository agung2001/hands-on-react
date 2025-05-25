import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
        console.log('✅ Posts loaded:', data);
      } catch (error) {
        console.error('❌ Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

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

export default Posts;
