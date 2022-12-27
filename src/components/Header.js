import VideoList from './VideoList'
import React from 'react'

function Header({video, upvotes, downvotes, handleLike, handleDislike}) {
  return ( 
    <>
     <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <div>
                <button value= 'like' onClick={handleLike}>
                    {upvotes}👍
                </button>
                <button value = 'dislike' onClick={handleDislike}>
                    {downvotes}👎
                </button>
                </div>
                </>
  )
}

export default Header