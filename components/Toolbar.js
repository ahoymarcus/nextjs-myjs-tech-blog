import { useRouter } from 'next/router';

// styles
import styles from '../styles/Toolbar.module.css';



export const Toolbar = () => {
	const router = useRouter();
	
	
	return (
		<nav className={styles.main}>
			<div onClick={() => router.push('/')}>Home</div>
			<div onClick={() => router.push('/news/1')}>News</div>
			<div onClick={() => router.push('/javascript/1')}>JavaScript</div>
			<div onClick={() => router.push('/reactjs/1')}>React-JS</div>
			<div onClick={() => router.push('/nodejs/1')}>Node-JS</div>
			<div onClick={() => router.push('/databases/1')}>Banco de Dados</div>
		</nav>
	);
};


