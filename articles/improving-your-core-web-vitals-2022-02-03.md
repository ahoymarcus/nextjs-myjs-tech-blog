---
author: 'Marcus Vinicius Richa'
title: 'Improving Core Web Vitals'
date: '2022-02-03'
subject: 'web-development-articles'
description: 'This article walks through some issues about the improvement of Web Vitals in a webpage or web app, and focuses specially in the framework Next-JS. With SEO, best pratices, the monitoring the Core Web Vitals and related tools, it is show a wider ranges of performance aspects.'
---

# Improving Core Web Vitals
 

As it was viewed in a previous article [^1], webpage metrics are most of time involved with user experience, either when talking about performance, interactivy or visual stability.

And for helping in these process there is a framework called **Lighthouse** which creates automatic reports that helps to analyse most of these issues related with Core Vitals.

According to Semrush Blog, the framework simulates many situations that may affect the app UX, and among more than 75 metrics, continues the site, it has reports to:

1. Performance
2. SEO
3. Best pratices
4. Accessibility
5. PWA (Progressive Web Application)


### Nextjs


Nextjs is a Server-Side Render framework for React-JS that extends some interesting functionalities related to SEO and also to performance.

For SEO, rendering the page at the server side, brings to the app all the benefits of serving a HTML with all or most of its contents, what is in fact very important to be analysed by the search engines.

For performance, having the page shipped out already built by the server also helps to bring speed and agility. But the are also some other extensions that bring even more to the table.

#### Custom Components

One of these examples is the use of custom components like **Image**, that wraps the **img** tag. In this case, the custom component has:

1. On-demand optimization: the images can be optimazed on-demand as they are requested by the users.

2. Lazy loaded images: as the images are being rended as they are view by the viewport.

3. Avoid CLS: this also prevents the so called Cumulative Layout Shift (CLS) [^2].


#### Dynamic Imports


In their tutorial, Nextjs.org has a example where taking the imports from the top of the file and making then dynamic, for the use when they are really necessary, they report that:

`By using Dynamic Imports, this fixes the "Remove unused JavaScript" issue on page load. This also improves our Time to Interactive (TTI), which helps improve First Input Delay (FID).`_`[`[link]`](https://nextjs.org/learn/seo/improve/dynamic-imports)`.


So, in the example, the libraries Fuse and Lodash that only means for the interactive of the app, are taken of and put at the event handler in the **input** tag:

```
<input
  type="text"
  placeholder="Country search..."
  className={styles.input}
  onChange={async e => {
    const { value } = e.currentTarget
    
		// DYNAMICALLY LOAD LIBRARIES
    const Fuse = (await import('fuse.js')).default
    const _ = (await import('lodash')).default

    const fuse = new Fuse(countries, {
      keys: ['name'],
      threshold: 0.3
    })

    const searchResult = fuse.search(value).map(result => result.item)

    const updatedResults = searchResult.length ? searchResult : countries
    setResults(updatedResults)

    // Fake analytics hit
    console.info({
      searchedAt: _.now()
    })
  }}
/>

```

And Nextjs has also a custom component **'next/dynamic'** for dynamics download, that can be used to wrap the import and also take the process from the first render of the page.

In the example bellow, one modal component that is not crucial for the first render, is imported dynamically:


```
import dynamic from 'next/dynamic';

...other scripts

const codeSampleModal = dynamic(() => import('../components/CodeSampleModal'), {
	ssr: false
})

...other scripts

	return (
		<>
			{
				isModalOpen && (
					<codeSampleModal
						isOpen={isModalOpen}
						closeModal={() => setIstModalOpen(false)}
				)
			}
		</>
	);
```         
   
    
		
#### Optimizing Fonts

As it is known, fonts are a important way to improve branding for a webpage, but to also helps with performance, Nextjs changes the default process of linking the external font, but bringing them into **inline CSS at a build time**:

Here is an exemple:

```
<style data-href="">
	@font-face{font-family:'Inter';font-style:normal.....}
</style>
```

       
#### Optimizing Third-Party Scripts

The third-party scripts are also important features to be included in the project of a webpage: analytics, ads, customer support widgets, etc...

But their embedding can delay the early loading and Nextjs has another custom component for this matter.

Bellow, the we have a component that uses the **Script** custom component in the **Head** component, although it could be used anywhere else too:
     

```
import Head from 'next/head';

function IndexPage() {
	return (
		<div>
			<Head>
				<script src="https://www.googletagmanager.com/gtag/js?id=123" />
			</Head>
		</div>
	);
};
```       
        
     

`The Script component introduces a strategy property that allows you to decide when to fetch and execute a script for optimal loading. To not negatively affect Largest Contentful Paint (LCP), most third-party scripts should be deferred to load after all the contents of a page has finished loading, either immediately after the page becomes interactive (strategy="afterInteractive") or lazily during browser idle time (strategy="lazyOnload").`_`[`[link]`](https://nextjs.org/learn/seo/improve/third-party-scripts)`.



### Monitoring your Core Web Vitals


Monitoring a site is a process as important as it optimization, and the Nextjs framework has also it own features to cope with this task. 



### Other Tools
  
   
1. You can find field data collection in the following tools:   
    
  - PageSpeed Insights: Google's Page Speed measurement tool.   
  - Chrome User Experience Report: Field data open-source dataset.   
  -	Search Console: Google Search, Core Web Vitals report.   
    
2. If you are looking for lab data, Google also offers several measurement tools:   
    
  -	Lighthouse: Google's open-source, automated tool for improving the quality of web pages.  
  -	Chrome DevTools: Set of web developer tools built directly into the Google Chrome browser.  
      
  **Note:** that for both tools, you will need to use Total Blocking Time (TBT) as an alternative to First Input Delay (FID) since FID can only be measured through field data.


**Nextjs.org**
![Page monitoring quiz](/images/articles/web-development/improving-core-web-vitals-page-monitoring-quiz.png)





### Further Reading

[web-performance-and-core-vitals](/images/articles/web-development/web-performance-and-core-vitals-2022-02-02.md)

[what-is-seo](/images/articles/web-development/what-is-seo-2022-02-01.md)

[Web Performance Monitoring – Definition, Tips, and Top Web Monitoring Tools - Tek-Tools](https://www.tek-tools.com/apm/web-monitoring-tools-and-tips)



### References

[Improving your Core Web Vitals - Nextjs.org](https://nextjs.org/learn/seo/improve)

[Como Otimizar seu Site com Google Lighthouse](https://pt.semrush.com/blog/como-otimizar-seu-site-com-google-lighthouse/)

[Monitoring your Core Web Vitals](https://nextjs.org/learn/seo/monitor)




[^1]:web-performance-and-core-vitals-2022-02-02

[^2]:what-is-seo-2022-02-01
