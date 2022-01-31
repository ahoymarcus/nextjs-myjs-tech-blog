// https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
// /reactjs/high-order-components-29-01-2022
import React from 'react';
import Head from 'next/head';

// styles
import styles from '../../styles/ArticleSinglePage.module.css';

// articles data
import { getAllPostIds, getPostData } from '../../lib/posts';




export async function getStaticPaths() {
	const paths = getAllPostIds();
	
	return {
		paths,
		fallback: false
	};
};


export async function getStaticProps({ params }) {
	const postData = getPostData(params.id);
	
	return {
		props: {
			postData
		}
	};
};


export default function ReactjsArticle({ postData }) {
	const { title, id, date, subject, description } = postData;
	
	
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
				<div className={styles.area2}>
					<h4>Subject:</h4>
					<p>{subject}</p>
				</div>
				<div className={styles.area3}>
					<h4>Date:</h4>
					<p>{date}</p>
				</div>
				<div className={styles.area4}>
					<hr></hr>
					<h4>Summary:</h4>
					<p>{description}</p>
				</div>		

			</aside>
			
			<section className={styles.articleSection}>
				<ul>
					<li className={styles.title}>
						{title}
						<br />
						{id}
						<br />
						{date}
					</li>
				</ul>
			</section>
			
		</div>

	);
};


