import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// styles
import styles from '../styles/Toolbar.module.css';

// resources
import { links, social } from '../lib/links';

// components
import { FaBars } from 'react-icons/fa';



const disabledLinks = ['news', 'vanilla-js', 'node-js', 'databases', 'archives'];
//const disabledLinks = ['none'];

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
	
	
	console.log(links);
	
	
	
	return (
		<nav className={styles.main}>
			<div className={styles.navHeader}>
				<div 
					className={styles.jsIconContainer}
				>
					<Link href="/">
						<div>
						<span >JS</span>
						NEWS
						</div>
					</Link> 
					
				</div>
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
						const { id, staticUrl, text } = link;
						
						return (
							<li key={id}>
								<Link 
									href={{
										pathname: staticUrl, 
										query: { param: staticUrl.slice(1) }
									}}
								>
									<a className={disabledLinks.includes(text) ? styles.disabled : ""}>{text}</a>
								</Link>
							</li>
						);
					})}			
				</ul>
			</div>
			<ul className={styles.socialIcons}>
				{social.map((socialLink) => {
					const { id, url, icon } = socialLink;
					
					return (
						<li key={id}>
							<a href={url}>
								{icon}
							</a>
						</li>
					);
				})}			
			</ul>
			
		</nav>
	);
};


