import React from 'react';

// styles
import styles from '../styles/ArticleSinglePage.module.css';

// components
import Date from '../components/date';




export const ArticleSummary = ({ postData }) => {
	const { author, title, date, subject, description } = postData;
	
	
	return (
		<aside className={styles.articleSummary}>
			<div className={styles.area1}>
				<h3>Title:</h3>
				<h1>{title}</h1>
			</div>
			<div className={styles.area4}>
				<h4>Author:</h4>
				<p>{author}</p>
			</div>
			<div className={styles.area2}>
				<h4>Subject:</h4>
				<p>{subject}</p>
			</div>
			<div className={styles.area3}>
				<h4>Date:</h4>
				<p><Date dateString={date} /></p>
			</div>
			
			<div className={styles.area5}>
				<hr></hr>
				<h4>Summary:</h4>
				<p>{description}</p>
			</div>		

		</aside>
	);
};



