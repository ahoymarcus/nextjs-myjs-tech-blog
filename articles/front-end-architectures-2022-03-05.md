---
author: 'Marcus Vinicius Richa'
title: 'Front-end Architectures'
date: '2022-03-05'
subject: 'web-dev-articles'
description: 'Patterns is a recent practice that is beign introduced to the Front-end development context. One of the first patterns to be appear some years ago is the MVC (Model-View-Controller), a pattern dedicated to improve the software architecture by appling Separation of Concerns (SoC) to the software system.'
---

# Front-end Architectures

1. ##### Introduction
2. ##### Kinds of Front-end Architectures
	2.1. The Flux Architecture      
	2.1. The PWA Architecture   
	2.1. The SPA Architecture
5. ##### Further Reading
6. ##### References

### Introduction

   
    
- Other articles about Software Patterns and Architectures:
- `Software Architecture and Design` [^1].
- `Software Architecture Patterns - Overview` [^2].
- `Front-end Development Patterns` [^3].



### Kinds of Front-end Architectures

#### The Flux Architecture

The Flux Architecure is one example of a compounded architecture that uses concepts from both State Control and Unidirectional Architectures, aiming the very important job to give scalability to front-end applications in terms of state management.

So, in this regard, the Flux Architecture creates a separated module to cope with global states of the app, at the same time it creates a organized system of communication with the other modules of the app to deal with the interchange of states and its updates as well.

Here, in the the flux environment, this pattern helps to tackle this problem by creating **a centralized global context**, by creating a **explicitness of state mutation** and by managing the flow of the data communication in a **synchronized unidirectional data flow**.

Firstly, to create a robust centralized context, the Flux Architecture creates a centralized **Store** as a data module responsible to be the centralized thruth of the states for the whole application.

Then, the architecture brings explicitness to the state mutation by introducing a module **Dispatcher**, another data module to be solely responsible to define the communication of the application with the store.

So firstly the dispatcher defines **Actions** that will define the necessary communication that would interwind across the components and the application, and once the dispatcher centralizes the communication with the components through the defined actions, it becomes also responsible for the application of the definitive logic to transform the old states, that then would be signalized to the store so it could mutate them into the new state of the application. 

Doing so, the flux pattern also creates a revolving communication between components, dispatcher, store and the view module in a circular unidirectional mode.

`Therefore, by monitoring actions and the information it contains, data mutation of the whole app is under our control (when and how something is changed).`
[Richard Ng](https://blog.cloudboost.io/the-state-of-web-applications-3f789a18b810)

![flux-pattern-front-end-architecture](/images/articles/web-development/flux-pattern-front-end-architecture.png)



#### The PWA Architecture





#### The SPA Architecture  

SPA relates to Single Page Application, which is a new development from the Front-end environment that grew with importance with the evolution of JavaScript and of the structure of Client-Side web development.

In traditional web development, web pages are served by Server-Side, meaning that a server is responsible to receive requisitions from clients and in most of the case return a web page to the client.

The simple architecture of the traditional Server-Side development is effective, but it has its shorthands.

First, it is solely dependent from the server for processing the page, leaving for the client the sole job of rendering the page with the browser.

Second, there is a high overhead from the connection because every navigation on the web page implies another requisition to the server.

Third, every change in the navigation, even if there is no changing in the rendered page itself, would imply a new web page being rendered all together. 

Forth, the page in itself is a complete and monolithic page, because with every requisition a whole structured page needs to be sent to the client.

And observing the above scenario, it is easy to see that the tradition Server-Side architecture is far from being a flexible and performative system.

In a article posted on [medium.com](https://medium.com/nerd-for-tech/why-single-page-application-spa-architecture-is-so-popular-141b85400204), Deepak Maheshwari presents a set of advantages from a SPA appication:

1. High-speed.   
2. Parallel loading.   
3. Flexible structure.   
4. Uses a micro-service architecture strategy.    
5. Richer UI and better User Experience.    
6. Simplified deployments (because the applications are more lean).     
7. Easy debugging since its structure is more lean.     
8. Lightweight rendering.   
9. More oriented to DevOps and Automation.


And across most of those items, perhaps even related to all of them, we see that the lightweiht and flexible architecture from the SPA allows for all that differential in developing, in integration and delivery, and in UI and UX as well.

Though, [Deepak Maheshwari](https://medium.com/nerd-for-tech/why-single-page-application-spa-architecture-is-so-popular-141b85400204) asserts that this is not one solution to fit all, because it has also some disavantages.

The first disadvantage relates to its client-sided nature, which restricts in a great sense its work with Search Engines and its optimization for SEO (Search Engine Optimization). 

Second, since most of the processing comes from the client, it consumes a lot of resources from the browser and may even imply the necessity for more powerful machines. 


One other aspect or attribute of a SPA can be found in the first chapter of the book `SPA Design and Architecture` from [Emmit Scott](https://livebook.manning.com/book/spa-design-and-architecture/chapter-1/2), where he states also:

1. To bring the power of a desktop kind of application to the **cross-platform environment of a web browser**.   
2. To deliver all that using the already present tecnologies of JavaScript, HTML and Cascading Style Sheets CSS.
3. Decoupled presentation layer, since the client now governs the app, it can be maintained updated separatetely from the server.

Still according the same author, this same goal have been present even in the eve of the Internet, when developers looked for some different ways to try extend the experience from a static web page.

He cites some technologies from that early period:

1. IFrame  
2. Java Applets  
3. Adobe Flash   
4. Microsoft SilverLight    

But in a more recently developement, he brings from the early 2000s, with the AJAX technology, that later became officially adopted as the **XMLHttpRequest (XHR) API** as a more robust moviment in the direction of that same goal.

`Developers who began to merge this API with JavaScript, HTML, and CSS obtained remarkable results. The blending of these techniques became known as AJAX, or Asynchronous JavaScript and XML. AJAX's unobrusive data requests, combined with the power of JavaScrit dynamically update the Document Object Model (DOM), and the use of CSS to chabge the page's style on the fly, brought AJAX to the forefront of modern web development.`  
[Emmit Scott](https://livebook.manning.com/book/spa-design-and-architecture/chapter-1/)


Passing through the AJAX's phase, the front-end development started to apply all the new found capabilities, not only to the context of the DOM, but to the whole app structure.

Interesting to notice, as Emmit Scott points, a SPA full load of the app only comes at the **First Load**, where the initial HTML file functions as a entry point or shell for the application, and after that the control of the application goes to the client that dynamically and independently controls the JavaScript session and redition of the partions loads then on.

`The “pages” of the application aren’t pages at all, at least not in the traditional sense. As the user navigates, the parts of the screen that appear to be pages are actually independent sections of the application’s content [...] to know that the view is a portion of the application that the end user sees and interacts with. 
[Emmit Scott](https://livebook.manning.com/book/spa-design-and-architecture/chapter-1/)




2. Chapter 1. What is a single-page application? ( SPA Design and Architecture)
https://livebook.manning.com/book/spa-design-and-architecture/chapter-1/


2.5. What are Single Page Applications and Why Do People Like Them so Much?
https://www.bloomreach.com/en/blog/2018/what-is-a-single-page-application
3. Progressive Web Apps (PWAs): The future of mobile web apps
https://www.techaheadcorp.com/blog/progressive-web-apps/
4. Progressive web app structure
https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/App_structure

### Further Reading
   
  
1. `Gang of Four book Design Patterns: Elements of Reusable Object-Oriented Software` (Gamma, Helm, Johnson, Vlissides)   
2. `Learning JavaScript Design Patterns.` (Addy Osmani)

[Software Architecture Patterns for Front-End Development - Medium.com](https://azeynalli1990.medium.com/software-architecture-patterns-for-front-end-development-9e43e43cdfb3)

[Most common design patterns for Front-End with JavaScript (Real-world examples) - Dev.to](https://dev.to/lukocastillo/most-common-design-patterns-for-front-end-with-javascript-real-world-examples-2hj3)



[Difference Between Pub-Sub Pattern and Observable Pattern - Medium.com](https://medium.com/easyread/difference-between-pub-sub-pattern-and-observable-pattern-d5ae3d81e6ce)

[The Comprehensive Guide to JavaScript Design Patterns - Toptal.com](https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns)


### References

[Patterns For JavaScript Frontend Applications - blog.cloudboost.io](https://blog.cloudboost.io/the-state-of-web-applications-3f789a18b810)

[Deepak Maheshwari(https://medium.com/nerd-for-tech/why-single-page-application-spa-architecture-is-so-popular-141b85400204) - Medium.com](https://medium.com/nerd-for-tech/why-single-page-application-spa-architecture-is-so-popular-141b85400204)

[Chapter 1. What is a single-page application? ( SPA Design and Architecture)](https://livebook.manning.com/book/spa-design-and-architecture/chapter-1/)

[]()

[^1]:software-architecture-and-design-2022-02-22

[^2]:software-architecture-patterns-overview-2022-02-18

[^3]:front-end-development-patterns-overview-2022-03-04
