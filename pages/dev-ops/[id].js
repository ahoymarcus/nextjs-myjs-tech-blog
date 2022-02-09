import React from 'react';
import Head from 'next/head';

// styles
import styles from '../../styles/ArticleSinglePage.module.css';

// components
import { ArticleSummary } from '../../components/ArticleSummary';

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


export default function DevOpsArticle({ postData }) {
	const { author, title, id, date, subject, description } = postData;
	
	
	return(
		<div className={styles.main}>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} /> 
				
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<ArticleSummary postData={postData} />
			
			<section className={styles.articleSection}>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</section>
			
		</div>

	);
};


