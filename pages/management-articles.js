import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// styles
import styles from '../styles/ArticlesListPage.module.css';

// components
import { ArticlesList } from '../components/ArticlesList';

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


export default function SecurityArticles({ allPostsData }) {
	const router = useRouter();
	
	const query = router.query;
	//console.log('query = ', query);
	// console.log(query instanceof String);
	// console.log(typeof query);
	
	const currentArticles = allPostsData.filter(post => post.subject === query.param);
	console.log(currentArticles);
	
	const numberOfCurrentPosts = currentArticles.length;
	let counter = 0;
	
	
  return (
		<div className={styles.main}>
      <Head>
				<title>Software Development Articles - JS News Blog</title>
				<meta name="description" content="Articles about security in software development, best practices, patterns and general news." />
				
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<h1 className={styles.title}>
				Management Information Technology articles
			</h1>
			<h3>Technical papers and general news about Governance, Managegement and Cybersecurity in Software Development and Web Technologies.</h3>
		
			<section className={styles.postsSection}>
				{currentArticles.map((article) => {
					//console.log(query.param === article.subject);
					
					counter += 1;
					
					if (query.param !== article.subject) {	
						return null;
					}
					
					return (
						<ArticlesList key={article.id} {...article} counter={counter} numberOfCurrentPosts={numberOfCurrentPosts} />	
					);
				})}
			</section>
		</div>
  );
};



