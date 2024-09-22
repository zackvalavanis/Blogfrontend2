import { useState, useEffect } from 'react';
import { PostsIndex } from './PostsIndex';
import { PostsNew } from './PostsNew';
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

  const handleCreate = (params, successCallback) => {
    axios.post("http://localhost:3000/posts.json", params).then(response => { 
      console.log(response.data);
      setPosts([...posts, response.data]);
      successCallback();
    }) 
  }

    useEffect(handleIndex, []);

  return (
    <main>
      <h1>Welcome to React!</h1>
      <PostsIndex posts={posts} />
      <PostsNew onCreatePost={handleCreate} />
    </main>
  );
}


