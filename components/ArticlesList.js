import React from 'react';

// styles
import styles from '../styles/ArticlesList.module.css';



export const ArticlesList = ({ title, description, date, counter, numberOfCurrentPosts }) => {
	console.log(counter, numberOfCurrentPosts);
	
	return (
		<div className={styles.postContainer}>
			<article className={styles.post}>
				<h4>{title}</h4>
				<br />
				<p>{description}</p>
				<br />
				<p>{date}</p>
			</article>
			{counter !== numberOfCurrentPosts ? (
				<div className={styles.lineBraker}></div>
			) : (
				null
			)}
		</div>
	);
};



