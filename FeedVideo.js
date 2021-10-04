import React from 'react'
import MessageSender from './MessageSender'
import './FeedVideo.css'
import PostVideo from './PostVideo'
function Feed() {
    return (
        <div className='feed_body'>
            <MessageSender />
            <PostVideo
            videosrc='/videos/ac.mp4'
            poster='https://i.ytimg.com/vi/WAnVGnfculw/sddefault.jpg'
            username='Wasserkopf'
            timestamp='26 Jan 2021'
            message='Aero Chord - Wanchu Back [Monstercat Release]'/>
            <PostVideo
            videosrc='/videos/tyb.mp4'
            poster='https://img.youtube.com/vi/lY2yjAdbvdQ/maxresdefault.jpg'
            username='Wasserkopf'
            timestamp='26 Jan 2021'
            message='Shawn Mendes - Treat You Better'/>
             <PostVideo
             videosrc='/videos/aw.mp4'
            poster='https://i.ytimg.com/vi/dhYOPzcsbGM/maxresdefault.jpg'
            username='Wasserkopf'
            timestamp='26 Jan 2021'
            message='Alan Walker, Sabrina Carpenter & Farruko - On My Way'/>
            <PostVideo
            videosrc='/videos/sbp.mp4'
            poster='https://i.ytimg.com/vi/WXBHCQYxwr0/maxresdefault.jpg'
            username='Wasserkopf'
            timestamp='26 Jan 2021'
            message='Ava Max - Sweet but Psycho [Official Music Video]'/>
            
            
        </div>
    )
}

export default Feed
