import React ,{useState}from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Avatar } from '@material-ui/core';
function MessageSender() {
    const [input, setInput]=useState('')
    const [inputurl, setInputurl]=useState('')

    const handlesubmit=(e)=>{
        e.preventDefault();
    };
    return (
        <div className='message_body'>
            <div className='message_top'>
                <Avatar src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"/> <h4>Wasserkopf</h4>
                <form>
                    <input 
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                    type='text'
                    placeholder='Post Here'
                    />
                    <input 
                    value={inputurl}
                    onChange={(e)=> setInputurl(e.target.value)}
                    type='text'
                    placeholder='Image URL(Optional)'
                    />
                    <button onClick={handlesubmit} type='submit'>hidden button</button>
                </form>
            </div>
            <div className='message_bottom'>
               <div className='bottom_options'>
               < VideocamIcon style={{color:"red"}}/>
                <h3>Live Video</h3></div> 
                <div className='bottom_options'>
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photos/Videos</h3>
                    </div> 
                <div className='bottom_options'>
                    <InsertEmoticonIcon style={{color:"orange"}}/>
                    <h3>Feelings</h3>
                    </div> 
            </div>
        </div>
    )
}

export default MessageSender
