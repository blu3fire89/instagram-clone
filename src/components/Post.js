import React, {useState, useEffect} from 'react';
import Avatar from'@material-ui/core/Avatar';
import {db} from './firebase';
import firebase from 'firebase';

function Post({postId, username, caption, imgUrl, user}) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    useEffect(() => {
        let unsubscribe;
        if(postId){
            unsubscribe = db
            .collection("photo-blog")
            .doc(postId)
            .collection("comments")
            .orderBy("timestamp","asc")
            .onSnapshot((snapshot)=>{
                setComments(snapshot.docs.map((doc)=>doc.data()))
            })  
        }
        return () => {
            unsubscribe();
        }
    }, [postId]);
    

    const postComment = (event) => {
        event.preventDefault();
        db.collection("photo-blog").doc(postId).collection("comments").add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    }

    return (
        <div className="post">
            
            <div className="post-header">
                <Avatar className="post-avatar" alt="Naruto" src="/static/images/avatar/1.jpg" />
                <h3 className="post-username">{username}</h3>
            </div>
            
            <img className="post-image" alt="saber-chibi" src={imgUrl} />
            <h4 className="post-text">{caption}</h4>

            <div className="post-comments">
                
                {comments.map((comment) => (

                <p>
                    <strong>{comment.username}</strong> {comment.text}
                </p>
                )
                    
                )}
            </div>

            <form className="post-commentBox">
                <input className="post-input"
                    type="text"
                    placeholder="Place comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button className="post-button"
                    disabled={!comment}
                    type="submit"
                    onClick={postComment}
                >
                    Post
                </button>
            </form>
        </div>
    )
}

export default Post
