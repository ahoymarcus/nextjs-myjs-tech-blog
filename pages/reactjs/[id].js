// https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
// /reactjs/high-order-components-29-01-2022
import React from 'react';
import Head from 'next/head';

// styles
import styles from '../../styles/Reactjs.module.css';

// articles data
import { getAllPostIds, getPostData } from '../../lib/posts';




export async function getStaticPaths() {
	const paths = getAllPostIds();
	
	console.log(paths);
	
	
	return {
		paths,
		fallback: false
	};
};


export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
};


export default function ReactjsArticle({ postData }) {
	const { title, id, date } = postData;

	return(
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
			
			<section>
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


