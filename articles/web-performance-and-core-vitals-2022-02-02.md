---
author: 'Marcus Vinicius Richa'
title: 'Web Performance & Core Web Vitals'
date: '2022-02-02'
subject: 'web-development-articles'
description: 'To treat about web performance is both a subject to a better experience on the web and a prerequisite for results to be cast by search engines.'
---

# Web Performance & Core Web Vitals

1. #### Introduction
	1.1. Largest Contentful Paint (LCP)    
	1.2. The First Input Delay (FID)    
	1.3. Cumulative Layout Shift (CLS)     
3. #### SEO and UX Impact
4. #### Other Kinds of Metrics
	4.1. User Satisfaction and Apdex       
	4.2. Complete Page Load Time    
	4.3. Time to first byte (TTFB)    
	4.4. Error Rate    
	4.5. Peak Response Time (PRT)    
5. #### Further Reading
6. #### References

### Introduction

To talk about web performance is both a subject to a better experience on the web and a prerequisite for results to be cast by search engines

According to the Nextjs.org `Web Vitals is an initiative from Google to provide unified guidance and metrics to measure end-user page experience on the web`_`[`[link]`](https://nextjs.org/learn/seo/web-performance)`.


Thus, some important points to attain while learning about this subject :

-	A short background on Core Web Vitals.
-	Implications of Core Web Vitals in SEO and UX, and its impact on your website.
-	Why you should care about Core Web Vitals in your development process and how to measure them.
-	How to improve your Core Web Vitals with Next.js and monitor changes.


The structure of Web Vitals apply 03 metrics and 03 possible scores to highlight this matter. 

1. the metrics: 

Largest Contenful Paint - LCP
First Input Delay - FID
Cumulative Layout Shift - CLS

2. the scores:

"Good",
"Needs Improvement", 
"Poor"


And according to the site Nextjs.org, the developer could cope with the system with two different approaches:

1. Try to score perfection throughout all the metrics.
2. To measure or benchmark against competitors in the same industry.


**Nextjs.org**
![quiz](/images/articles/web-development/web-performance-core-vitals-what-is-measured-by-web-vitals.png)


#### Largest Contentful Paint (LCP)

It measures the loading performance of the page for the largest element to be viewed on the viewport.

There are two things worth of noting, being firts the fact that this metric does not measure the first element to be rendered on the screen. And the second note is that the largest element to be rendered each time could vary in terms of a DOM element.



#### The First Input Delay (FID)

This metric deals with the user interaction, and in this case first possible interaction from some input from the user.

According with the site of Nextjs.org, `FID requires real user data and cannot be measured in the lab (e.g. Google Lighthouse). However, the Total Blocking Time (TBT) metric is lab-measurable and captures issues that affect interactivity.`_`[`[link]`](https://nextjs.org/learn/seo/web-performance/fid)`.


#### Cumulative Layout Shift (CLS)

And this last metric deals with User Experience (UX), tracking unstable rendition conditions from a page.

In this matter, a rendition may be unstable or unriliable for UX when the continuous loading of the page keeps changing element places, like a button, for instance, so that it may cause the user to hit a element accidentaly because of that shift.


### SEO and UX Impact


Both of these process are directed for users experiences, meaning fast and smooth results in the use of the web, including mobile devices.


### Other Kinds of Metrics

1. User Satisfaction and Apdex

	This test involves taking real feedback from users interaction and aggregation some desired end goal.
	The justification of this metric relies on the fact that lab tests are not always faithful to real world cases.
	
2. Complete Page Load Time
		
	This metric is important because it may convey important information about the use of the page across different devices and plataforms, including slower connections like 3G, etc... 

3. Time to first byte (TTFB) 

	This metric reaches for measuring the initial gap a client has until it can start processing the page.
	One clear example of this is Server Side Rendering versus Client Side Rendering, where in the first case the requisition for the page comes with a prerenditition from the server, while the second has a delay of requesting and then starting the process from the zero.

4. Error Rate

	This measure the percentage of request issues in relation to the total number of requests, and since errors can lead to countless problems to the webpage or application, it is wise to be monitoring them.

5. Peak Response Time (PRT)

	This is the measure to search for the longest response times for all requests to the server and use the information to try to find parts of the application that may be underperforming.





### Further Reading

[Top 10 Website Performance Metrics Every Developer Should Measure](https://sematext.com/blog/website-performance-metrics/)



### References

[SEO - Nextjs.org](https://nextjs.org/learn/seo/web-performance)



