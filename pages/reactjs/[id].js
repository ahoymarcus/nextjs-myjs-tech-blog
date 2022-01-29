// https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
// /reactjs/high-order-components-29-01-2022
import Head from 'next/head';

// styles
import styles from '../../styles/Reactjs.module.css';

// articles data
import { getAllPostIds, getPostData } from '../../lib/posts';




export default function Post({ postData }) {
	const { title, id, date } = postData;
	
	
	return (
		<>
			<ul>
				<li>
					{title}
					<br />
					{id}
					<br />
					{date}
				</li>
			</ul>
		</>
	);
};


export async function getStaticPaths() {
	const paths = getAllPostIds();
	
	console.log(paths);
	
	
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





