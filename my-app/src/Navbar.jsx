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
      <CircleIcon sx={{color: "white"}}/>
      <WidgetsIcon sx={{color: "white"}} />
      <Person3Icon sx={{color: "white"}} />
      <PhotoAlbumIcon sx={{color: "white"}} />
      <MessageIcon sx={{color: "white"}} />
      <NotificationsActiveIcon sx={{color: "white"}} />
      </div>
      <Avatar/>
       
    </div>
    );
}

export default Navbar ;