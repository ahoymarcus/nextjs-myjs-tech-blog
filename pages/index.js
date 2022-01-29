// https://nextjs.org/learn/seo/introduction-to-seo
//
import Head from 'next/head'
import Image from 'next/image'

// styles
import styles from '../styles/Home.module.css'

// components

// resources
import webDevImg from '../public/images/web-development-image-medium.png';




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
			
			<div className={styles.image}>
				<Image 
					
					src={webDevImg} 
					alt="Imagem de uma tela de notebook" 
					width={647}
					height={324}
				/>
			</div>
    </div> 
  )
}
