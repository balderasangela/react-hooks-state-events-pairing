import React from 'react'
import VideoInfo from './VideoInfo'

function VideoList({comments, removeComment}) {
    return (
        <div>
            <h2>{comments.length} Comments</h2>
            {comments.map((comment)=>{
                return <VideoInfo user= {comment.user} text= {comment.comment} id={comment.id} removeComment={removeComment}/>
            })}
        </div>
    )
}

export default VideoList