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
			
			<h1 className={styles.title}>
				Title: {title}
			</h1>
			<h3>Subject: {subject}</h3>
			<p>Resume: {description}</p>
			
			<section className={styles.articleSection}>
				<ul>
					<li>
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


