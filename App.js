import React ,{useState}from 'react';
import FeedVideo from './FeedVideo'
import FeedGame from './FeedGame'
import './App.css';
import './Sidebar'
import Sidebar from './Sidebar';
import Feed from './Feed'
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
 
function App() {
  const user='Wasserkopf'
  const [Home, setHome]=useState(true)
  const [Video, setVideo]=useState(false)
  const [Game, setGame]=useState(false)
  const [Color1, setColor1]=useState('primary')
  const [Color2, setColor2]=useState('primary')
  const [Color3, setColor3]=useState('primary')
  const [Color4, setColor4]=useState('primary')

  const [iconColor1, seticonColor1]=useState('secondary')
  const [iconColor2, seticonColor2]=useState('primary')
  const [iconColor3, seticonColor3]=useState('primary')
  const [iconColor4, seticonColor4]=useState('primary')
  const [iconColor5, seticonColor5]=useState('primary')
  return (
    <div className="app">
      <div className='header'>
           <div className='header_left'>
               <img src="/images/fl.png"></img>
               <div className='header_input'>
                   <SearchIcon />
                   <input type="text" placeholder='Search Facebook'/>
               </div>
           </div>
           <div className='header_middle'>
                <div className='header_options' onClick={()=>setHome(true) & setVideo(false) & setGame(false) &
                  seticonColor1('secondary') &
                  seticonColor2('primary') &
                  seticonColor3('primary') &
                  seticonColor4('primary') &
                  seticonColor5('primary')
                  }>
                  <IconButton color={iconColor1}>
                    <HomeIcon  />
                  </IconButton>
                </div>

                <div className='header_options' onClick={()=>setHome(false) & setVideo(true) & setGame(false) &
                seticonColor1('primary') &
                seticonColor2('secondary') &
                seticonColor3('primary') &
                seticonColor4('primary') &
                seticonColor5('primary')}>
                  <IconButton color={iconColor2}>
                    <OndemandVideoIcon />
                  </IconButton> 
                </div>

                <div className='header_options' onClick={()=>setHome(false) &
                seticonColor1('primary') &
                seticonColor2('primary') &
                seticonColor3('secondary') &
                seticonColor4('primary') &
                seticonColor5('primary')}> 
                  <IconButton color={iconColor3}>
                    <StorefrontIcon   /> 
                  </IconButton>
                </div>

                <div className='header_options' onClick={()=>setHome(false) &
                seticonColor1('primary') &
                seticonColor2('primary') &
                seticonColor3('primary') &
                seticonColor4('secondary') &
                seticonColor5('primary')}> 
                  <IconButton color={iconColor4}>
                    <SupervisedUserCircleIcon  />
                  </IconButton>
                </div>

                <div className='header_options'onClick={()=>setHome(false) & setVideo(false) & setGame(true) &
                seticonColor1('primary') &
                seticonColor2('primary') &
                seticonColor3('primary') &
                seticonColor4('primary') &
                seticonColor5('secondary')}>
                  <IconButton color={iconColor5}>
                    <VideogameAssetIcon  />
                  </IconButton> 
                </div>
           </div>

           <div className='header_right'>
               <div className='header_info'>
                  <Avatar src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"  fontSize="small" className="avatar"/>
               
                <IconButton onClick={()=>
                  setColor1('secondary') & 
                    setColor2('primary') &
                      setColor3('primary') & 
                        setColor4('primary')} 
                          color={Color1} >
                  <AddIcon />
                </IconButton>

                <IconButton onClick={()=>
                  setColor1('primary') &
                    setColor2('secondary') &
                      setColor3('primary') &
                        setColor4('primary')} 
                          color={Color2}>
                  <MessageIcon />
                </IconButton>

                <IconButton onClick={()=>
                  setColor1('primary') &
                    setColor2('primary') &
                      setColor3('secondary') &
                        setColor4('primary')} 
                          color={Color3}>
                  <NotificationsIcon />
                </IconButton>

                 <IconButton onClick={()=>
                  setColor1('primary') &
                   setColor2('primary') &
                    setColor3('primary') &
                     setColor4('secondary')} 
                     color={Color4}>
                   <ArrowDropDownIcon />
                 </IconButton>
               </div>
           </div>
       </div>
       
        <div className="app_body">
        <Sidebar/>
         {Home ?(<Feed />):(null)}
         {Video ?(<FeedVideo /> ):(null)}
         {Game ?(<FeedGame /> ):(null)}
             
    
           {/*Widget*/}
        </div>
        
      
    </div>
  );
}

export default App;
