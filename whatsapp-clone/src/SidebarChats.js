// import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChats.css'

function SidebarChats() {
  return (
    <div className='sidebar_chat_item'>
        <img src="https://images.unsplash.com/photo-1568558100488-e5f38185a9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="img" className='group_img'></img>
        <div className='chat_info'>
            <h2>Chat Room</h2>
            <p>Chat line</p>
        </div>
    </div>
  )
}

export default SidebarChats