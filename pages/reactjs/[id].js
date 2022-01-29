// https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
// /reactjs/high-order-components-29-01-2022
import React from 'react';
import Head from 'next/head';

// styles
import styles from '../../styles/Reactjs.module.css';

// articles data
import { getAllArticlesIds, getSortedArticlesData, getArticleData } from '../../lib/articles'




export async function getStaticPaths() {
	const paths = getAllArticlesIds();
	
	console.log(paths);
	
	
	return {
		paths,
		fallback: false
	};
};


export async function getStaticProps({ params }) {
	// All articles
	//const allArticlesData = getSortedArticlesData();
	
	// Speciffic article
	const articleData = getArticleData(params.id);
	
	return {
		props: {
			articleData
		}
	};
};


export default function ReactjsArticles({ articleData }) {
	const { title, id, date } = articleData;

	return(
		<div className={styles.main}>
      <Head>
				<title>JS Tech Blog</title>
				<meta name="description" content="A blog featuring news and technical information about the JavaScript stack and Web related material." /> 
				
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<h1 className={styles.title}>
				REACT-JS ARTICLES
			</h1>
			
			<section>
			{/*<ul>
					{allArticlesData.map(({ id, date, title }) => (
						<li>
							{title}
							<br />
							{id}
							<br />
							{date}
						</li>
					))}
			</ul>*/}
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


