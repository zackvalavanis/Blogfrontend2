export function PostsIndex(props) {
  console.log(props.posts); // Logs the props for debugging

  return (
    <div>
      <div id="responseMessage"></div>
      <div id="posts-index">
        <h1>All Posts</h1>
        {props.posts.map(post => (
          <div key={post.id} className='post'>
            <h2>{post.title}</h2>
            <img src={post.image} alt="Post image" />
            <p>Body: {post.body}</p>
            <button type='info' onClick={() => props.onShow(post)}>More Info</button>
          </div>
        ))}
        {/* Add more posts as needed */}
      </div>
    </div>
  );
}