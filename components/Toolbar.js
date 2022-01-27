import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

// styles
import styles from '../styles/Toolbar.module.css';

// resources
import { FaBars, FaTwitter } from 'react-icons/fa';
import logo from './public/images/icons8-javascript.gif';
import { links, social } from '../lib/links';

// components


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
			<div onClick={() => router.push('/archives/1')}>Archives</div>
		</nav>
	);
};


