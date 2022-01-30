import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// styles
import styles from '../styles/Toolbar.module.css';

// resources
import { links, social } from '../lib/links';

// components
import { FaBars } from 'react-icons/fa';



//const disabledLinks = ['news', 'vanilla-js', 'node-js', 'databases', 'archives'];
const disabledLinks = ['test'];

export const Toolbar = () => {
	const router = useRouter();
	
	const [ showLinks, setShowLinks ] = useState(false);
	
	//console.log(showLinks);
	
	/*
		É necessário guardar também o valor do container externo.....
	*/
	const linksContainerRef = useRef(null);
	const linksItemRef = useRef(null);
	
	
	useEffect(() => {
		console.log(linksItemRef.current.getBoundingClientRect());
		const linksHeight = linksItemRef.current.getBoundingClientRect().height;
		
		
		if (showLinks) {
			linksContainerRef.current.style.height = `${linksHeight + 15}px`;
		} else {
			linksContainerRef.current.style.height = '0px';
		}
	}, [showLinks]);
	
	
	
	return (
		<nav className={styles.main}>
			<div className={styles.navHeader}>
				<div className={styles.jsIconContainer}><span >JS</span> NEWS</div>
				<button 
					className={styles.navToggle}
					onClick={() => setShowLinks(!showLinks)}
				>
					<FaBars />
				</button>
			</div>
			<div 
				className={styles.linksContainer}
				ref={linksContainerRef}
			>
				<ul 
					className={styles.links}
					ref={linksItemRef}
				>
					{links.map((link) => {
						const { id, url, text } = link;
						
						return (
							<li key={id}>
								<Link 
									href={{
										pathname: url, 
										query: { param: url.slice(1) }
									}}
								>
									<a className={disabledLinks.includes(text) ? styles.disabled : ""}>{text}</a>
								</Link>
							</li>
						);
					})}
					{/*links.map((link) => {
						const { id, url, text } = link;
						
						return (
							<li 
								key={id}
								onClick={() => router.push(url)}
							>
								<a className={disabledLinks.includes(text) ? styles.disabled : ""}>{text}</a>
								
							</li>
						);
					})*/}						
				</ul>
			</div>
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


