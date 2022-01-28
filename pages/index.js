// https://nextjs.org/learn/seo/introduction-to-seo
//
import Head from 'next/head'
import Image from 'next/image'

// styles
import styles from '../styles/Home.module.css'

// components
//import { Toolbar } from '../components/Toolbar';
//import { Footer } from '../components/Footer';




export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
				<title>JS Tech Blog</title>
				<meta name="description" content="A blog featuring news and technical information about the JavaScript stack and Web related material." /> 
				
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<h1 className={styles.title}>
				JavaScript News Blog
			</h1>
			<h3>Your one stop news for JavaScript and Web Development information</h3>
			
    </div> 
  )
}
