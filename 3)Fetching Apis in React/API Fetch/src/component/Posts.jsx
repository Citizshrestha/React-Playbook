// import React from 'react'
import { useEffect } from "react";
import { useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(()=>{
     const fetchPosts = async () =>{
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('There is some error in fetching API!');
        const data = await response.json();
        console.log(data)
        setPosts(data);
       
      }catch(error){
       console.log(error.message);
       setError(error.message);
      }
     };
     fetchPosts();
    
  },[]);

   if(error) return <p>{error}</p>
  return (
    <div>
        <h1>Posts</h1>
        <ul>
          {posts.map((post)=>(
            <li key={post.id}>
                <h4>User id is: {post.userId}</h4>
                <h5>Post id is: {post.id}</h5>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Posts
