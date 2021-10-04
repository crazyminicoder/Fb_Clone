import React from 'react'
import MessageSender from './MessageSender'
import './Feed.css'
import Post from './Post'
function Feed() {
    return (
        <div className='feed_body'>
            <MessageSender />
            <Post
            image='https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg'
            username='Wasserkopf'
            timestamp='26 Jan 2021'
            message='Hello'/>
             <Post
            image='https://www.awakenthegreatnesswithin.com/wp-content/uploads/2018/08/Nature-Quotes-1.jpg'
            username='Wasserkopf'
            timestamp='26 Jan 2021'
            message='Yooo this is sick!!'/>
            <Post
            image=''
            username='Wasserkopf'
            timestamp='26 Jan 2021'
            message='This is without any Image its cool!!'/>
            
        </div>
    )
}

export default Feed
