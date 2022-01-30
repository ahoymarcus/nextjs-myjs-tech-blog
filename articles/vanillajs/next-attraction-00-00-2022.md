---
title: 'Next Attraction'
date: '2022-00-00'
description: 'Soon a new presentation just around the block.'
---
# Next Attraction    

Yes, I preferred the elderly and discontented doctor, surrounded by friends and cherishing honest hopes; and bade a resolute farewell to the liberty, the comparative youth, the light step, leaping impulses and secret pleasures, that I had enjoyed in the disguise of Hyde. I made this choice perhaps with some unconscious reservation, for I neither gave up the house in Soho, nor destroyed the clothes of Edward Hyde, which still lay ready in my cabinet. For two months, however, I was true to my determination; for two months, I led a life of such severity as I had never before attained to, and enjoyed the compensations of an approving conscience. But time began at last to obliterate the freshness of my alarm; the praises of conscience began to grow into a thing of course; I began to be tortured with throes and longings, as of Hyde struggling after freedom; and at last, in an hour of moral weakness, I once again compounded and swallowed the transforming draught.    

![styling with HOCs](/public/images/articles/frontend/grid-layout-example.png)    
   
I do not suppose that, when a drunkard reasons with himself upon his vice, he is once out of five hundred times affected by the dangers that he runs through his brutish, physical insensibility; neither had I, long as I had considered my position, made enough allowance for the complete moral insensibility and insensate readiness to evil, which were the leading characters of Edward Hyde. Yet it was by these that I was punished. My devil had been long caged, he came out roaring. I was conscious, even when I took the draught, of a more unbridled, a more furious propensity to ill. It must have been this, I suppose, that stirred in my soul that tempest of impatience with which I listened to the civilities of my unhappy victim; I declare, at least, before God, no man morally sane could have been guilty of that crime upon so pitiful a provocation; and that I struck in no more reasonable spirit than that in which a sick child may break a plaything. But I had voluntarily stripped myself of all those balancing instincts by which even the worst of us continues to walk with some degree of steadiness among temptations; and in my case, to be tempted, however slightly, was to fall.     

    
## Advantages    

- The next day, came the news that the murder had not been overlooked, that the guilt of Hyde was patent to the world, and that the victim was a man high in public estimation. It was not only a crime, it had been a tragic folly. I think I was glad to know it; I think I was glad to have my better impulses thus buttressed and guarded by the terrors of the scaffold. Jekyll was now my city of refuge; let but Hyde peep out an instant, and the hands of all men would be raised to take and slay him.    

		The next day, came the news that the murder had not been overlooked, that the guilt of Hyde was patent to the world, and that the victim was a man high in public estimation. It was not only a crime, it had been a tragic folly. I think I was glad to know it; I think I was glad to have my better impulses thus buttressed and guarded by the terrors of the scaffold. Jekyll was now my city of refuge; let but Hyde peep out an instant, and the hands of all men would be raised to take and slay him.   

- The next day, came the news that the murder had not been overlooked, that the guilt of Hyde was patent to the world, and that the victim was a man high in public estimation. It was not only a crime, it had been a tragic folly. I think I was glad to know it; I think I was glad to have my better impulses thus buttressed and guarded by the terrors of the scaffold. Jekyll was now my city of refuge; let but Hyde peep out an instant, and the hands of all men would be raised to take and slay him.    

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
    
    
## References        

1. [High Order Components - Reactjs.org] (https://pt-br.reactjs.org/docs/higher-order-components.html)       
2. [Pure Functions - Geeksforgeeks.org](https://www.geeksforgeeks.org/pure-functions/)      






