import './App.css'
import io from 'socket.io-client'

import { useState } from 'react'

import Join from './components/join/Join'
import Chat from './components/chat/Chat'

const socket = io.connect('http://localhost:3001')

function App() {

    const [chatVisible, setChatVisible] = useState(false)

    return (
        <div className='App'>
            {chatVisible ? <Chat socket={socket}/> : <Join socket={socket} setVisibility={setChatVisible}/>} 
        </div>
    )
}

export default App