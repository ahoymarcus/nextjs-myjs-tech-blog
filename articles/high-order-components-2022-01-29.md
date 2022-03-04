---
author: 'Marcus Vinicius Richa'
title: 'High Order Components'
date: '2022-01-29'
subject: 'web-dev-articles'
description: 'According to the site from Reactjs.org, a high order component, or HOC, is a pattern used for reuse components logics across many ordinaire components.'
---

# High Order Components    

1. ##### Introduction
2. ##### Advantages
3. ##### An Example from Next.js
4. ##### References

### Introduction

According to the site Reactjs.org, a high order component, or HOC, is a pattern used for reuse components logics across many ordinaire components.   

In concrete terms, they are a kind of component that receives other component as parameter, then applies the reusable logic to it and return the 'enhanced' component at the end.    

In this particular sense, it is possible to see that as components, HOCs vary from other components, in the sense that it does not deal with transforming props into UI, like it is the common behavory for a component.   

One common example in the use of this patter would be to create a general layout that is shared between many components in a app, avoiding the unnecessary that duplication of code and all the complexities related to it.   
    

![styling with HOCs](/images/articles/web-development/high-order-components-grid-layout-example.png)    
   
So, as can be seem in the picture, a application could have a simple implementation where some generic components, like a Navbar and a Footer, could be inserted into the renderization of others components across the whole application, preventing the stress of hard coding the same functionality over and over again.    

     
Now, with the help of HOCs, we can wrap of the desired component and inject the intended logic, and return a enhanced version of it to be finally rendered by the app.     

    
### Advantages    

1. The advantages of using this kind of pattern comes through the fact that HOCs are like 'pure functions', as they just receives the necessary parameters and enhances the component through the composition of all the special logic in it, returning a enhanced component at the end.    

	1.1. In this kind of composition, neither the HOC needs to know how these special logics works, but just to apply it in the component, nor the components need to know from hence thse especial logics come by.     

2. Another advantage from the use of the HOC pattern is the possibility to apply more than one transformation to a component in a chain of HOCs.    

### An Example from Next.js    

       

Import to the layout component the two generic functionalities to be displayed across the application pages:   
  
  	
#### Layout.js  	 
```     
import { Toolbar } from './Toolbar';
import { Footer } from './Footer';
```   

Then, the layout is exported to be used wrap the ordinaire components that need to display a Toolbar and a Footer:   
    
```    
function Layout({ children }) {
  return (
    <>
      <Toolbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};
export default Layout;
```        
 

Then, importing both the Layout created and the desired component into the High Order Component: 
 
    
#### HighOrderComponent.js 
 
```
import Layout from '../components/layout';
```
	 
Finally, wrapping the the generic component in the Layout tag to be returned by HOC:	 
	 
```    
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export defalt MyApp;
```     
      
At the above code, we have a basic layout that renders a Toolbar and a Footer, but it lacks the main component logic that will be changing depending of the actual component it will be rendering. 
      
Thats the reason for the {children} object there in the code, and it is the function of the HOC component to insert each and all the correct components and their props to be rendered in each case.
    
    
### References  

1. [High Order Components - Reactjs.org](https://pt-br.reactjs.org/docs/higher-order-components.html)           
2. [Pure Functions - Geeksforgeeks.org](https://www.geeksforgeeks.org/pure-functions/)      






