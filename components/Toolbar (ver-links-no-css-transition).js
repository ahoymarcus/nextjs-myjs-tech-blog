import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// styles
import styles from '../styles/Toolbar.module.css';

// resources
import { links, social } from '../lib/links';

// components
import { FaBars } from 'react-icons/fa';




export const Toolbar = () => {
	const router = useRouter();
	
	const [ showLinks, setShowLinks ] = useState(false);
	
	console.log(showLinks);
	
	
	return (
		<nav className={styles.main}>
			<div className={styles.navHeader}>
				<span>JS NEWS</span>
				<button 
					className={styles.navToggle}
					onClick={() => setShowLinks(!showLinks)}
				>
					<FaBars />
				</button>
			</div>
			{showLinks && (
				<div className={`${styles.linksContainer} ${styles.showContainer}`}>
					<ul className={styles.links}>
						{links.map((link) => {
							const { id, url, text } = link;
							
							return (
								<li key={id}>
									<Link href={`${url}/1`}>
										<a>{text}</a>
									</Link>
								</li>
							);
						})}	
					</ul>
				</div>
			)}
			<ul className={styles.socialIcons}>
				{social.map((link) => {
					const { id, url, icon } = link;
					
					return (
						<li key={id}>
							<a href={url}>
								{icon}
							</a>
						</li>
					);
				})}			
			</ul>
			
			{/*<div onClick={() => router.push('/')}>Home</div>
			<div onClick={() => router.push('/news/1')}>News</div>
			<div onClick={() => router.push('/javascript/1')}>JavaScript</div>
			<div onClick={() => router.push('/reactjs/1')}>React-JS</div>
			<div onClick={() => router.push('/nodejs/1')}>Node-JS</div>
			<div onClick={() => router.push('/databases/1')}>Banco de Dados</div>
			<div onClick={() => router.push('/archives/1')}>Archives</div>*/}
		</nav>
	);
};


