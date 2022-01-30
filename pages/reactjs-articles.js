// https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
// /reactjs/high-order-components-29-01-2022
import React from 'react';
import Head from 'next/head';

// styles
import styles from '../styles/Reactjs.module.css';

// articles data
import { getSortedPostsData } from '../lib/posts'



export async function getStaticProps(context) {	
	const allPostsData = getSortedPostsData()
	
	
	return {
		props: {
			allPostsData
		}
	};
};


export default function ReactjsArticles({ allPostsData }) {
	const numberOfPosts = allPostsData.length;
	let counter = 0;
	
	
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
		
			<section className={styles.postsSection}>
				{allPostsData.map(({ id, date, title, description }) => {
					counter += 1;
					
					return (
						<div key={id} className={styles.postContainer}>
							<article className={styles.post}>
								<h4>{title}</h4>
								<br />
								<p>{description}</p>
								<br />
								<p>{date}</p>
							</article>
							{counter !== numberOfPosts ? (
								<div className={styles.lineBraker}></div>
							) : (
								null
							)}
						</div>
					);
				})}
			</section>
		</div>
  );
};



