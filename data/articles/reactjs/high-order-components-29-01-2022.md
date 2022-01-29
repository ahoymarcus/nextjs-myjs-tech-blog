---
title: 'High Order Components'
date: '2022-01-29'
---
# High Order Components

According to the site from Reactjs.org, a high order component, or HOC, is a pattern used for reuse components logics across many ordinaire components.   

In concrete terms, they are a kind of component that receives other component as parameter, then applies the reusable logic to it and return the 'enhanced' component at the end.    

In this particular sense, it is possible to see that as components, HOCs vary from other components, in the sense that it does not deal with transforming props into UI, like it is the common behavory for a component.   

One common example in the use of this patter would be to create a general layout that is shared between many components in a app.    

So, in a simple implementation, some dev could have a couple of components to be rendered across the application, just like a Navbar and a Footer, and hard code them in each page of the app.   

Though, it is easy to see that this solution brings a lot of duplication of code and a lot of complexities to a app.     

Now, with the help of HOCs, we can wrap of the desired component and inject the intended logic, and return a enhanced version of it to be finally rendered by the app.     

## Advantages
- The advantages of using this kind of pattern comes through the fact that HOCs are like 'pure functions', as they just receives the necessary parameters and enhances the component through the composition of all the special logic in it, returning a enhanced component at the end.    

		In this kind of composition, neither the HOC needs to know how these special logics works, but just to apply it in the component, nor the components need to know from hence thse especial logics come by.     

- Another advantage from the use of the HOC pattern is the possibility to apply more than one transformation to a component in a chain of HOCs.    

## An Example from Next.js

Layout.js   
     
```
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
```     
    
    
```
HOC.js
// imports the layout component
import Layout from '../components/layout';

export defalt function MyApp({ Component, pageProps }) {
  return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
```     
      
At the above code, we have a basic layout that renders a Toolbar and a Footer, but it lacks the main component logic that will be changing depending of the actual component it will be rendering. 
      
Thats the reason for the {children} object there in the code, and it is the function of the HOC component to insert each and all the correct components and their props to be rendered in each case.
    
    
References     

[High Order Components - Reactjs.org] (https://pt-br.reactjs.org/docs/higher-order-components.html)       
[Pure Functions - Geeksforgeeks.org](https://www.geeksforgeeks.org/pure-functions/)      






