// https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
import React from 'react';

// articles data
import { getSortedArticlesData } from '../../../articles';


export async function getStaticProps() {
	const allArticlesData = getSortedArticlesData();
	
	return {
		props: {
			allArticlesData
		}
	};
};


export default function ReactjsArticles({ allArticlesData }) {


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
				<ul>
					{allArticlesData.map(({ id, date, title }) => (
						<li>
							{title}
							<br />
							{id}
							<br />
							{date}
						</li>
					))}
				</ul>
			</section>
			
		</div>
	);
};


