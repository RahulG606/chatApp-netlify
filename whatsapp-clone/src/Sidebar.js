import React from 'react'
import './Sidebar.css'
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import {Avatar, IconButton } from '@mui/material';
import SidebarChats from './SidebarChats';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar_header">
            <Avatar/>
        <div className="sidebar_header_right">
          <IconButton>
            <ChatIcon/>
          </IconButton>
          <IconButton>
            <DonutLargeIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>

        </div>
      </div>

      <div className='sidebar_search'>
        <div className='search_container'>
       
        <input placeholder='Search or start new chat' className='search_box'/>
        <IconButton>
        <SearchIcon/>
        </IconButton>
        
        </div>
      
      </div>

      <div className='sidebar_chats'>
        <SidebarChats/>
        <SidebarChats/>
        <SidebarChats/>
        <SidebarChats/>
        <SidebarChats/>
      </div>

      
    </div>

    
  )
}

export default Sidebar;