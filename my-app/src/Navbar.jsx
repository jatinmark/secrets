import React from "react";
import "./Navbar.css"
import CircleIcon from '@mui/icons-material/Circle';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Person3Icon from '@mui/icons-material/Person3';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Avatar from '@mui/material/Avatar';

function Navbar(){

return (
    
    <div className="navbar" >
        <div className="navbar_boby">
          
      <div className="icons" ><CircleIcon sx={{color: "white", '&:hover': { color: 'orange' } }} /></div>
      <div className="icons" ><WidgetsIcon sx={{color: "white", '&:hover': { color: 'orange' }}} /></div>
      <div className="icons" ><Person3Icon sx={{color: "white", '&:hover': { color: 'orange' }}} /></div>
      <div className="icons" ><PhotoAlbumIcon sx={{color: "white", '&:hover': { color: 'orange' }}} /></div>
      <div className="icons" ><MessageIcon sx={{color: "white", '&:hover': { color: 'orange' }}} /></div>
      <div className="icons" ><NotificationsActiveIcon sx={{color: "white", '&:hover': { color: 'orange' }}} /></div>
      </div>
      <div className="avatar">
      <Avatar src ='https://www.shutterstock.com/image-vector/happy-young-people-design-vector-260nw-440727109.jpg'/>
      </div>
    </div>
    );
}

export default Navbar ;