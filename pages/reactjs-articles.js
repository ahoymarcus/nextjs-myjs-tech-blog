// https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
// /reactjs/high-order-components-29-01-2022
import React from 'react';
import Head from 'next/head';

// styles
import styles from '../styles/Reactjs.module.css';

// articles data
import { getSortedPostsData } from '../lib/posts'



export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	
	return {
		props: {
			allPostsData
		}
	};
};


export default function ReactjsArticles({ allPostsData }) {
	
	
	
  return (
		<div className={styles.main}>
      <Head>
				<title>JS Tech Blog</title>
				<meta name="description" content="A blog featuring news and technical information about the JavaScript stack and Web related material." /> 
				
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<h1 className={styles.title}>
				React-JS and Next-JS articles
			</h1>
			<h3>Technical papers and general news about the React-JS Ecosystem.</h3>
		
			<section className={styles.postContainer}>
				{allPostsData.map(({ id, date, title, description }) => (
					<article 
						key={id}
						className={styles.post}
					>
						<h4>{title}</h4>
						<br />
						<p>{description}</p>
						<br />
						<p>{date}</p>
					</article>
				))}
				
			</section>
			
		</div>
  );
};



