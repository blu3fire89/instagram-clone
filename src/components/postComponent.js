import React from 'react';
import Avatar from'@material-ui/core/Avatar';
function Post(props) {
    return (
        <div className="post">
            <div className="post-header">
                <Avatar className="post-avatar" alt="Saber" src="/static/images/avatar/1.jpg" />
                <h3 className="post-username">{props.username}</h3>
            </div>
            
            <img className="post-image" alt="saber-chibi" src={props.imgUrl} />
            <h4 className="post-text">{props.caption}</h4>
        </div>
    )
}

export default Post
