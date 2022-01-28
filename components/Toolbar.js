import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// styles
import styles from '../styles/Toolbar.module.css';

// resources
import { links, social } from '../lib/links';

// components
import { FaBars, FaTwitter } from 'react-icons/fa';




export const Toolbar = () => {
	const router = useRouter();
	
	
	
	return (
		<nav className={styles.main}>
			<div className={styles.navHeader}>
				<span>JS NEWS</span>
				<button className={styles.navToggle}>
					<FaBars />
				</button>
			</div>
			<div className={`${styles.linksContainer} ${styles.showContainer}`}>
				<ul className={styles.links}>
					<li>
						<Link href="/">
							<a>home</a>
						</Link>
					</li>
					<li>
						<Link href="/news/1">
							<a>news</a>
						</Link>
					</li>
					<li>
						<Link href="/vanillajs/1">
							<a>vanillajs</a>
						</Link>
					</li>
					<li>
						<Link href="/archives/1">
							<a>archives</a>
						</Link>
					</li>
				</ul>
			</div>
			<ul className={styles.socialIcons}>
				<li>
					<a href="https://twitter.com">
						<FaTwitter />
					</a>
				</li>
				<li>
					<a href="https://twitter.com">
						<FaTwitter />
					</a>
				</li>
				<li>
					<a href="https://twitter.com">
						<FaTwitter />
					</a>
				</li>
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


