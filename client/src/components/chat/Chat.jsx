import React, { useState, useEffect } from 'react'
import Message from '../message/Message'

import styles from './Chat.module.css'

export default function Chat({ socket }) {

  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState([])

  useEffect(() => {

    socket.on('receiveMessage', (data) => {
      setMessageList((list) => [...list, data])
      scrollDown()
    })
  }, [socket])

  const sendMessage = () => {
    if (message.trim() === '') return;
    socket.emit('message', { userId: socket.id, name: socket.name, message})
    setMessage('')
    clearInput()

  }

  const clearInput = () => {
    document.querySelector('#input').value = ''
  }

  const scrollDown = () => {
    const div = document.querySelector('.chat_body')
    div.scrollTop = div.scrollHeight
 }
  return (
    <div className={styles.chat_container}>
      <div>
        <p></p>
      </div>
        <div className={styles.chat_body}>
          <div className={styles.messages}>
              <div className={styles.messages_list}>
                  { messageList.map((data, i) => (
                    <Message key={i} text={data.message} author={data.name} bot={data.bot} socket={socket} authorId={data.userId}/>
                  ))}
              </div>
          </div>
        </div>

        <div className={styles.chat_footer}>
            <input className={styles.message_input} placeholder="Write a message..." type="text" id="input" onChange={(e) => setMessage(e.target.value)}/>
            <button className={styles.btn_send} onClick={() => sendMessage()}  >Send</button>
        </div>
    </div>
  )
}
