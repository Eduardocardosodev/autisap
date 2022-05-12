import React, { useState } from 'react'

import styles from './Join.module.css'

export default function Join({ socket, setVisibility}) {

  const [name, setName] =  useState('')

  const handleSubmit = () => {
    if (name.trim() === '') return;
    socket.name = name
    setVisibility(true)
    socket.emit('userConnected', name)
  }

  return (
    <div className={styles.join_container}>
        <h1>AutiSap</h1>
      <div className={styles.join_body}>
        <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter your name..."/>
        <button className={styles.btn_join} onClick={() => handleSubmit()}>Enter</button>
      </div>
    </div>
  )
}
