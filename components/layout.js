import styles from '../styles/Layout.module.css';

import { Toolbar } from './Toolbar';
import { Footer } from './Footer';




export default function Layout({ children }) {
	
	
	return (
		<>
			<Toolbar />
			<main className={styles.pageContainer}>
				{children}
			</main>
			<Footer />
		</>
	);
};



