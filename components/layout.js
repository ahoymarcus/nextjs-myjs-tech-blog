import React, { useState, useEffect } from 'react';

// styles
import styles from '../styles/Layout.module.css';

import { Toolbar } from './Toolbar';
import { Footer } from './Footer';

// resources
import webPortolioImg1 from '../public/images/online-portfolio-web-page-1.png';
import webPortolioImg2 from '../public/images/online-portfolio-web-page-2.png';
import rocketImg1 from '../public/images/reactjs-rocket-launches-app-1.png';
import rocketImg2 from '../public/images/reactjs-rocket-launches-app-2.png';
import myJSBookshelfImg from '../public/images/myjavascript-bookshelf-01.png';
import musEruditaImg from '../public/images/mus-erudita-icon-bigger-page.png';



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
			
			<aside className="aside-section">
				<div className="prime-section">
					<div className="prime-section__info">
						<h1 className="prime-section__title">Land of Dev-Ops</h1>
						<p className="prime-section__desc">I am a Web Developer with more than 5 years of experience, and currently I am doing master at Software Engineering. My focus is the JS stack with Webpack, React.js, Next.js, besides I also can work with Node.js to construct APIs REST with token authentication. I have experience as Web Designer with responsive pages, mobile first pattern and CSS-patterns. I have a master at Databases and Business Intelligence.</p>
						<button className="prime-section-button"><a  target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/marcus-vinicius-richa-183104199/">LinkedIn</a></button>
					</div>
					<a target="_blank" rel="noreferrer" href="https://my-javascript-bookshelf.netlify.app/">
		
						<Image 
							className="prime-section__image"
							src={webPortolioImg1} 
							alt="online portfolio page icon" 
							width={200}
							height={200}
						/>
					</a>
				</div>
				
				<div className="information-section">
					<h2 className="information-section-title">Some of my other works as a JavaScript Developer</h2>
					<div className="information-section__items-container">
						<div className="information-section__item">
							<a target="_blank" rel="noreferrer" href="https://redux-reactjs-personal-portfolio-webpage-version-2.netlify.app/" >
							
								<Image 
									src={webPortolioImg2} 
									alt="online portfolio page icon" 
									width={200}
									height={200}
								/>
							</a>
							<p className="information-section__text">My Online Portfolio, where I present my personal work, and also some of the main studying projects in software development. It features, interaction, and more descriptive meta-data from the projects and from the techs..</p>
						</div>
						<div className="information-section__item">
							<a target="_blank" rel="noreferrer" href="https://reactjs-rocket-launches-app.netlify.app/" >
							
							<Image 
								src={rocketImg1} 
								alt="rocket launche app icon" 
								width={200}
								height={200}
							/>
							</a>
							<p className="information-section__text">This is a React-app written to be a client of the Rocket Launcher API that makes its authentication through JWT tokens and rendering the information about launches and rockets received by the endpoints from the backend.</p>
						</div>
						<div className="information-section__item">
							<a target="_blank" rel="noreferrer" href="https://github.com/ahoymarcus/expressjs-rocket-launches-api" >
								<Image 
									src={rocketImg2} 
									alt="rocket launche app icon" 
									width={200}
									height={200}
								/>
							</a>
							<p className="information-section__text">This is the REST API version for the React-app, and it uses Node-js to arrange a small web-service gathering information from a larger public API about the SpaceX project. It also authenticatis with JWT.</p>
						</div>
						
						<div className="information-section__item">
							<a target="_blank" rel="noreferrer" href="https://my-javascript-bookshelf.netlify.app/" >
							
								<Image 
									src={myJSBookshelfImg} 
									alt="JavaScript bookshelf app icon" 
									width={200}
									height={200}
								/>
							</a>
							<p className="information-section__text">A personal project for a book library entirely made with JavaScript. Modeled with UML and designed with Figma. It uses Webpack’s framework to create the build for the app and manage its web dependencies. It uses MVC architectural pattern.</p>
						</div>
						<div className="information-section__item">
							<a target="_blank" rel="noreferrer" href="https://musica-erudita.netlify.app/" >
							
								<Image 
									src={musEruditaImg} 
									alt="musica erudita page icon" 
									width={200}
									height={200}
								/>
							</a>
							<p className="information-section__text">My personal site about Music, made early in 2018 to practice my skills in Web Design at that time. They are a set of web pages, all responsive and following the mobile-first pattern. They also use SASS and have a SVG animation of my own creation.</p>
						</div>
							
					</div>
				</div>
				
				<div className="testimonial-section">
					<p className="testimonial-section__text">Node.js is a cross-platform environment and library for running JavaScript applications which is used to create networking and server-side applications. The definition given by its official documentation is as follows: </p>
					<p className="testimonial-section__text">It was built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.</p>
					<p className="testimonial-section__text">It also provides a rich library of various JavaScript modules to simplify the development of web applications and has features like:</p>
					<p className="testimonial-section__text">I ---  Extremely fast: Node.js is built on Google Chrome's V8 JavaScript Engine, so its library is very fast in code execution.</p>
					<p className="testimonial-section__text">II --- I/O is Asynchronous and Event Driven: All APIs of Node.js library are asynchronous i.e. non-blocking. So a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call. It is also a reason that it is very fast.</p>
					<p className="testimonial-section__text">III --- Single threaded: Node.js follows a single threaded model with event looping.</p>
					<p className="testimonial-section__text">IV ---  Highly Scalable: Node.js is highly scalable because event mechanism helps the server to respond in a non-blocking way.</p>
					<p className="testimonial-section__text">V --- No buffering: Node.js cuts down the overall processing time while uploading audio and video files. Node.js applications never buffer any data. These applications simply output the data in chunks.</p>
					<p className="testimonial-section__text">VI --- Open source: Node.js has an open source community which has produced many excellent modules to add additional capabilities to Node.js applications.</p>
					<p className="testimonial-section__text">VII --- License: Node.js is released under the MIT license.</p>

					<span className="testimonial-section__author"><a target="_blank" rel="noreferrer" href="https://www.javatpoint.com/nodejs-tutorial">JavaTPoint Tutorials</a></span>
				</div>
				
				<div className="action-section">
					<div className="action-section__call-to-action">
						<div>
							<h3 className="action-section__title">GitHub</h3>
							<p className="action-section__text">Come and visit me at my GitHub repository!</p>
						</div>
						<button className="action-section__button"><a target="_blank" rel="noreferrer" href="https://github.com/ahoymarcus">Enter</a></button>
					</div>
				</div>
			</aside>
			
			<Footer />
		</>
	);
};



