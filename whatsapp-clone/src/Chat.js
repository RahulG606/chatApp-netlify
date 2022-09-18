import { Avatar, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import axios from './axios'

import React, { useState } from 'react'
import './Chat.css'

function Chat({messages}) {

      const [input,setInput] = useState("");
      const sendMessage = async (e)=>{
          e.preventDefault();

          await axios.post("/messages/new",{
            message: input,
            name: "Demo",
            timeStamp: "just now",
            received:false,
          })

          setInput('');

      }

  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar src='https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80'/>
        <div className='chat_header_info'>
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className='chat_header_right'>
          <IconButton>
            <SearchIcon/>
          </IconButton>
          <IconButton>
            <AttachFileIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>

      <div className="chat_body">

        {messages.map((message)=>(
          <p className={`chat_message ${message.received && "chat_reciever"}`}>
          <span className='chat_name'>{message.name}</span>
          {message.message}
          <span className='chat_timeStamp'>{message.timeStamp}</span>
        </p>
        ))}
        
      </div>

      <div className='chat_footer'>
        <IconButton><InsertEmoticonIcon/></IconButton>
          <form>
            <input value={input} onChange={e=>setInput(e.target.value)} placeholder='Type in your message' type="text"/>
            <button onClick={sendMessage} type='submit'>Send a message</button>
          </form>
          
      </div>


    </div>
  )
}

export default Chat