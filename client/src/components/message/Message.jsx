import React from 'react'

import styles from '../chat/Chat.module.css'

export default function Message({ text, author, bot, socket, authorId }) {
	return (
		<>
			{bot ? (
				<span className={styles.message_bot}>{text}</span>
			) : (
				<span className={styles.message_container + (authorId === socket.id ? '' : styles.message_mine)}>
					<p className={styles.author}>{author}</p>
					<span className={styles.message}>{text}</span>
				</span>
			)}
		</>
	);
}
