import React from 'react'
import './PostVideo.css'
import CommentIcon from '@material-ui/icons/Comment';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import NearMeIcon from '@material-ui/icons/NearMe';
import { Avatar } from '@material-ui/core';
import VideoPlayer from 'react-video-js-player'
function Post({ videosrc,poster, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"  fontSize="large" className="post_avatar"/>
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>
            <div className="post_bottom">
                <h4>{message}</h4>
            </div>
            <div className="post_video">
               <VideoPlayer
               src={videosrc}
               poster={poster}
               width="842"
               height="444"
                />
            </div>
            <div className="post_options">
                <div className="post_option">
                    <ArrowUpwardIcon /><p>Me Too</p>
                </div>
                <div className="post_option ">
                <CommentIcon  /><p>Comment</p>
                </div>
                <div className="post_option ">
                <NearMeIcon /><p>Share</p>
                </div>
                
            </div>
        </div>
    )
}

export default Post
