import { useState, useEffect } from 'react';
import { PostsIndex } from './PostsIndex';
import axios from 'axios'
// import { PostsNew } from './PostsNew';


export function PostsPage() {
  const [ posts, setPosts ] = useState([]);

  const handleIndex = () => { 
    console.log(handleIndex);
      axios.get("http://localhost:3000/posts.json").then((response) => {
        console.log(response.data);
        setPosts(response.data)
      });
    };

    useEffect(handleIndex, []);

  return (
    <main>
      <h1>Welcome to React!</h1>
      <PostsIndex posts={posts} />
    </main>
  );
}


