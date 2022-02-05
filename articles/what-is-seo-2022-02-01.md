---
author: 'Marcus Vinicius Richa'
title: 'What is SEO'
date: '2022-02-01'
subject: 'web-development-articles'
description: 'Understanding what is a SEO process and how to improve the site ranking in the search engines results.'
---

# What is SEO

1. #### Introduction     
2. #### The Web Crawlers
3. #### Crawling and Indexing  
4. #### Rendering and Ranking
5. #### AMP Vs Core Web Vitals
6. #### URL Structure
7. #### The Use of Head Tag and its Properties
8. #### The Use of Semantic HTML
9. #### Further Reading
10. #### References

### Introduction

The term SEO stands for 'Search Engine Optimization', and its purpose is to improve the sites positions on the search engine results.

According to the site of Next-JS, the importance of SEO to a web page is to increase **conversion** to a page, since a `higher search ranking placement equates to more organic visitors`_`[`Nextjs.org [link]`](https://nextjs.org/learn/seo/introduction-to-seo/importance-of-seo)`.


Nextjs.org article also brings another interestings points:

1. that SEO is 'Low-Cost', since it implies the cost of 'Time' and 'Effort', but that as a service it is 'free'.  
	1.1. And in this case it is different from **SEM** (Search Engine Marketing), which is paid results placed at the top of search results as Advertisement.
2. that there are three main pillars to this process:   
	2.1. Tecnical: the effort to optimize the website for **crawling** and **performance**.    
	2.2. Creation: implies the strategies to relate **content** and search **specific keywords**.    
	2.3. Popularity: that mean all the **backlinks from third-party sites**, which attest reliability to the site.

As for the steps that a search engine takes to create ranks, we have: 

1. **Crawling**: parsing web pages to retrieve parameters that meet a certain criteria.
2. **Indexing**: storing and retrieving the data gathered in the previous stage.
3. **Rendering**: the process of testing the resources of the page to see if they enhance and enrich the content of the site.

### The Web Crawlers

Interesting to notice that the processes in the SEO works most of the time in terms of queues. So ULRs retrieved by many sources are queued until it comes the time to visite the page.

Then when the crawler finally visits the page it first request to the HTTP protocol, and:  


- 200 - it crawls and parses the HTML.
- 30X - it follows the redirects.
- 40X - it will note the error and not load the HTML
-	50X - it may come back later to check if the status code has changed.


Next the process goes to the render queue and if all the criteria is met, the data is indexed.


**Nextjs.org**
![Crawlers - Nextjs.org](/images/articles/web-development/what-is-seo-crawlers-user-agent.png)



### Crawling and Indexing

1.	HTTP status code fundamentals.   
	1.1. Important HTTP codes: 200 (Ok), 301 e 308 (redirects permanent), 302 (redirects temporalily)
2.	Metadata and what web crawlers look for when parsing web content.
3.	There is the option to communicate with Google so its search crawler knows when there is new content on your site.   
	3.1. Robots.txt File - XML Sitemaps and Meta/Link Tags
4.	Its possible to leverage meta robot tags and canonical links to indicate to search engines your desired indexing status.
5. Also interesting to notice:       
	5.1. These are two ways to relate to the crawlers process that may ensure a better security and reability into all the process.      
	First, security may be a problem when sites wants to keep certain routes out of the process (like accounts, etc...), next the are the ways to help to guide the path of the crawlers so they don't miss when content is updated.


**Nextjs.org**
![Crawlers - Nextjs.org](/images/articles/web-development/what-is-seo-google-guides-forxml-sitemaps.png)

There is also the possibility of using the HTML **meta** tag together with the property "robots".

```
<meta name="robots" content="noindex,nofollow" />
```

**Notes**: 

- see that by default the value already is `index,follow`.
- see also that if there is conflict between the file directives and meta tags or if a route is already indexed, to use the **Meta** tag may be the only way prevent the access by the robots.


Finally, there is the **canonical** property for the **link** tag:

```
<link rel="canonical" href="https://example.com/products/phone" />
```

The importance of the 'canonical' rule is to give the chance to defines URLs intead leaving it to be decided by the robots.


**Nextjs.org**


`This is where canonical tags are extremely useful. They let Google know which URLs are the original source of truth and which are duplicated. Lots of duplicated pages across same or different domains can lead to bad rankings or even penalizations.`_`Let's imagine that our e-commerce shop allows products to be accessible via example.com/products/phone and example.com/phone.`_`Both are valid, working URLs, but we use canonical to prevent the detection of duplicate content that we own. If we decided that https://example.com/products/phone should be considered for rankings, we would create a canonical tag`_`Canonical tags are fundamental in SEO performance, because not only can you create different URLs, but users or marketing tools can also create them.`_`[`Nextjs.org [link]`](https://nextjs.org/learn/seo/crawling-and-indexing/canonical)`.


### Rendering and Ranking


Traditionaly, search engines are directed to HTML pages to process its results, but since JavaScript became much more popular, there should used certain definitions in the development not to hinder the ranking of the page app:

- Rendering strategies, such as Client-Side Rendering (CSR), Incremental Static Regeneration (ISR), Static Site Generation (SSG), and Server-Side Rendering (SSR).
- How URL structure can impact SEO ranking.
- Incorporating headings and internal links to optimize your search engine results page ranking.


SSG or Static Site Generation is the best option to be used, because it comes from the server already built with all the HTML and it is very fast.

SSR or Server-Side Rendering is to be considered the second best option, because it also comes from the server, but in this case at a request time. Thus, SSR is not as fast, but it allows dynamic content.

ISR or Incremental Static Regeneration is the mode that gives some of the static generation, but allow also a certain kind of regeneration for more fresh state.

At last, CSR or Client-Side Rendering is the worst case for SEO, because the pages don't have most of it HTML content, since they are built by the client.

According to Nextjs.org, CSR is the best choice for heavy dashboards, accout pages or any page that are not required to be in any search engine index.


### AMP Vs Core Web Vitals

At some point, Google decided to favours sites with AMP technology for its performance with mobiles, but more recently with the development of the Core Web Vitais, they had drop the AMP requirements.


### URL Structure

URL structure is considered a best practice, and Nextjs.org give out some general principles:

1. Semantic: the URL should have meaning instead of the use of random IDs numbers.
2. The pattern structure should be logic
3. Focused in keyword: because it facilitates understanding the purpose of the pages.
4. Not to use parameter-based URLs: they are not semantic and may confuse the search engines.



### The Use of Head Tag and its Properties

1. Title: the most important for ranking and the one that is clicked by the users.
2. Description: second in relation to the title, and it can also bring more key words not fit to be in the title.


### The Use of Semantic HTML

For example, H1 is the most important high level element of SEO in the page. Then the Links, because they bring together content in the Wide World Web.

In the Next-JS ecosystem, the custom component Link makes the work to receive a **href** property and pass it through the HTML anchor tag.

`The href prop is required and will correctly add the link to the anchor tag, which is vital for SEO. When Google crawls a page, it will crawl and follow this link without relying on JavaScript.`_`[`Nextjs.org [link]`](https://nextjs.org/learn/seo/rendering-and-ranking/on-page-seo)`.






### Further Reading

[SEO Tutorial - JavaTPoint](https://www.javatpoint.com/seo-tutorial)

[SEO Tutorial for Beginners: A Step by Step SEO Guide](https://www.guru99.com/seo-tutorial.html)



### References

[SEO - Nextjs.org](https://nextjs.org/learn/seo/introduction-to-seo)





