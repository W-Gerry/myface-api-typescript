import { useState, useEffect } from 'react'
import PostModel from '../models/PostModel'
import "./PostFeed.css"
// Ask question about importing format

export function Posts() {
  const [posts, setPosts] = useState<PostModel[]>()

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then(response => response.json())
      .then(data => setPosts(data.results));
  }, [])

  return (
    <div className="post-list">
      {posts === undefined
      ? <p>Loading...</p>
      : posts.map((post) => 
        <div className="post">          
          <img className="post-image" src={post.imageUrl} alt={post.message}/>
          <h2 className="post-username">@{post.postedBy.username}</h2>
          <h5>{post.createdAt}</h5>
          <p>{post.message}</p>
        </div>)}
    </div>
  )
}



