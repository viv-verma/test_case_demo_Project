import React, { useEffect, useState } from 'react'

const Async = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    },[]);

    const fetchPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPosts(data);
        })
    };

  return (
    <div>
        <ul>
            {posts.map(post => (
                <li>{post.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Async