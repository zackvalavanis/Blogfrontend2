export function PostsNew(props) { 
  const handleSubmit = (event) => { 
    event.preventDefault ();
    const params = new FormData(event.target);
    props.onCreatePost(params, () => event.target.reset())
  }
  return (
    <div id='posts-new'>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name='title' id='title' type='text' required></input>
        </div>
        <div>
          Body: <input name='body' id='body' type='text' required></input>
        </div>
        <div>
        Image: <input type='img' id='image' name='image' required />
        </div>
        <button type='submit'>Create Post</button>
      </form>  
    </div>
  );
}