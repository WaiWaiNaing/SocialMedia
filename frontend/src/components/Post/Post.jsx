import React from 'react'
import './Post.css'
import Comment from '../../img/comment.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';
import Share from '../../img/share.png';

const Post = ({data}) => {
  return (
    <div className="Post">
        <img src={data.img} alt="Post" />
        <div className="postReact">
            <img src={data.liked ? Heart : NotLike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>
        <span style={{color: "var(--gary)", fontSize: '12px'}}>{data.likes} likes</span>
        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post