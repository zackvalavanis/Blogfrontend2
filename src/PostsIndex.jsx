export function PostsIndex(props) { 
  return ( 
    <div>
      <h1>hello</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.name}</h2>
          <img src={post.image} alt={post.name} />
        </div>
      ))} 
    </div>
  );
} 