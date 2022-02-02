import React from 'react';
import Head from 'next/head';

// styles
import styles from '../../styles/ArticleSinglePage.module.css';

// components
import Date from '../../components/date';

import { getAllPostIds, getPostData } from '../../lib/posts';




export async function getStaticPaths() {
	const paths = getAllPostIds();
	
	return {
		paths,
		fallback: false
	};
};


export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	
	return {
		props: {
			postData
		}
	};
};


export default function NodejsArticle({ postData }) {
	const { author, title, id, date, subject, description } = postData;
	
	
	return(
		<div className={styles.main}>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} /> 
				
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
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
					<p><Date dateString={postData.date} /></p>
				</div>
				
				<div className={styles.area5}>
					<hr></hr>
					<h4>Summary:</h4>
					<p>{description}</p>
				</div>		

			</aside>
			
			<section className={styles.articleSection}>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</section>
			
		</div>

	);
};


