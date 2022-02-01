import React from 'react';
import Link from 'next/link';

// styles
import styles from '../styles/ArticlesListComponent.module.css';

// components
import Date from '../components/date';

import { links } from '../lib/links.js';




export const ArticlesList = ({ id, title, description, date, subject, counter, numberOfCurrentPosts }) => {
	console.log('counter = ', counter, 'numberOfCurrentPosts = ', numberOfCurrentPosts);
	

	const itemLinks = links.filter(link => {
		console.log('link.staticUrl = ', link.staticUrl);
		console.log('subject = ', `/${subject}`);
		
		if (link.staticUrl === `/${subject}`) {
			return link;
		}
	});
	
	console.log(itemLinks);
	const dynamicUrl = itemLinks[0].dynamicUrl;
	
	
	return (
		<div className={styles.postContainer}>
			<article className={styles.post}>
				<Link href={`${dynamicUrl}/${id}`}><h4>{title}</h4></Link>
				<br />
				<p>{description}</p>
				<br />
				<p><Date dateString={date} /></p>
			</article>
			{counter !== numberOfCurrentPosts ? (
				<div className={styles.lineBraker}></div>
			) : (
				null
			)}
		</div>
	);
};



