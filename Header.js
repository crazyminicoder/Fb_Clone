import React ,{useState}from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar } from '@material-ui/core';

function Header() {
    const [Visible, setVisible]=useState(true);
    return (
       <div className='header'>
           <div className='header_left'>
               <img
               src="/images/fl.png"></img>
               <div className='header_input'>
                   <SearchIcon />
                   <input type="text" placeholder='Search Facebook'/>
               </div>
           </div>
           <div className='header_middle'>
               <div className='header_options header_options--active'><HomeIcon fontSize="large" /> </div>
               <div className='header_options'onClick={()=>setVisible(!Visible)}> <OndemandVideoIcon fontSize="large"/> </div>
               <div className='header_options'> <StorefrontIcon fontSize="large"/> </div>
               <div className='header_options'> <SupervisedUserCircleIcon fontSize="large"/> </div>
               <div className='header_options'> <VideogameAssetIcon fontSize="large"/>
               </div>
           </div>
           <div className='header_right'>
               <div className='header_info'>
                  <Avatar src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"  fontSize="small" className="avatar"/>
               
               <IconButton>
                   <AddIcon />
               </IconButton>
               <IconButton>
                   <MessageIcon  />
               </IconButton>
               <IconButton>
                   <NotificationsIcon />
               </IconButton>
               <IconButton>
                   <ArrowDropDownIcon/>
               </IconButton>
               </div>
           </div>
       </div>

    )
}

export default Header
