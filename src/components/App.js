import video from "../data/video.js";
import Header from "./Header.js";
import React, {useState} from 'react'
import VideoList from "./VideoList";

function App() {
 
  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)
  const [commentsHidden, setCommentsHidden] = useState(false)
  const [displayedComments, setDisplayedComments] = useState(video.comments)

  function removeComment(removedCommentId){
    setDisplayedComments((displayedComments)=>{
      return displayedComments.filter((comment)=> comment.comment !== removedCommentId)
    })
  }
  
  function increaseUpVotes(){
    setUpVotes((upVotes)=> upVotes + 1)
  }
  function increaseDownVotes(){
    setDownVotes((downVotes)=> downVotes + 1)
  }
  return (
    <div className="App">
      <Header video={video} upvotes = {upVotes} downvotes={downVotes} handleLike = {increaseUpVotes} handleDislike = {increaseDownVotes} commentsHidden= {commentsHidden} setCommentsHidden= {setCommentsHidden}/>
      <hr></hr>
      {commentsHidden ? null : <VideoList comments={displayedComments} removeComment={removeComment}/>}
    </div>
  );
}

export default App;