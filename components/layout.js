import React, { useState, useEffect } from 'react';

// styles
import styles from '../styles/Layout.module.css';

import { Toolbar } from './Toolbar';
import { Footer } from './Footer';




export default function Layout({ children }) {
	const [ isVisible, setIsVisible ] = useState(false);
	
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};
	
	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 500) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};
		
		window.addEventListener('scroll', toggleVisibility);
		
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);
	
	
	return (
		<>
			<Toolbar />
			<main 
				className={styles.pageContainer}
				
			>
				{children}
				
				{isVisible && (
					<span className={styles.upwardLink} onClick={scrollToTop}>
						<h5>Up &#8593;</h5>
					</span>
				)}
			</main>
			
			<Footer />
		</>
	);
};



