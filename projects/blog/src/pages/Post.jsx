import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setPost(data);
        console.log('✅ Post loaded:', data);
      } catch (error) {
        console.error('❌ Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

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

export default Post;
