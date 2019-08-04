//Import libraries
import React from 'react';

//Nested components and props
const CommentDetail = props => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">
                        {props.timeAgo}
                    </span>
                </div>
                <div className="text">
                    {props.comment}
                </div>
            </div>
        </div>
    );
};

//Exports the component to other files
export default CommentDetail;