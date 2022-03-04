---
author: 'Marcus Vinicius Richa'
title: 'Front-end Development Patterns'
date: '2022-03-04'
subject: 'web-dev-articles'
description: 'Patterns is a recent practice that is beign introduced to the Front-end development context. One of the first patterns to be appear some years ago is the MVC (Model-View-Controller), a pattern dedicated to improve the software architecture by appling Separation of Concerns (SoC) to the software system.'
---

# Front-end Development Patterns

1. ##### Introduction  
2. ##### Buider Pattern Architecture
3. ##### Component Architecture
4. ##### Dumb-Smart Components Pattern Architecture
5. ##### Micro Front-ends Architecture
6. ##### Modular Architecture
7. ##### Publish-Subscribe Architecture 
8. ##### State Management Architecture
9. ##### Strategy Pattern Architecture
10. ##### Unidirectional Architecture
	10.1. The Flux Architecture 
11. ##### SPA
12. ##### PWA
13. ##### Further Reading
14. ##### References

### Introduction

The studies and researchs about patterns applied to back-end development is a well stablished area in the Web Development context.

But some authors have been reporting that this same practices are being brought to the Front-end context as well.

One of the first patterns to be introduced some years ago is the MVC (Model-View-Controller), a pattern dedicated to improve the software architecture by appling Separation of Concerns (SoC) to the software system, especilly focused on the context of the presentation, the data handling and the overall logic of the system.

And, as it's asserted by [Ali Zeynalli](https://azeynalli1990.medium.com/software-architecture-patterns-for-front-end-development-9e43e43cdfb3), SoC is one of the main triggers that follow when architecture patters are aplyed.

As a practice `in computer science, Separation of Concerns (SoC) is a design principle for separating a computer program into distinct sections. Each section addresses a separate concern, a set of information that affects the code of a computer program`.
[Wikipedia](https://en.wikipedia.org/wiki/Separation_of_concerns)


And, in general all patterns have their aim to make a more robust and more reliable software, improving in maintainance, in flexibility and in redability, etc, as [Luis Castillo](https://dev.to/lukocastillo/most-common-design-patterns-for-front-end-with-javascript-real-world-examples-2hj3) asserts.


### Buider Pattern Architecture

The builder pattern is used when it's needed to create complext objects with different variations and also it's necessary to have flexibility to modify the construction process without impacting the object representation in self.

One use case brought by [Luis Castillo](https://dev.to/lukocastillo/most-common-design-patterns-for-front-end-with-javascript-real-world-examples-2hj3) relates to the consumption of some data API which need to be transformed in order to be understood by a third-party component.


### Component Architecture

### Dumb-Smart Components Architecture



### Micro Front-ends Architecture


### Modular Architecture

The Modular Pattern is one of the most common patterns in the JavaScript environment, and it aims to divide de system into different contexts and scopes called modules, to bring all those advantages of flexibility and maintainance stated above.

As it can be seen, this particular architecture is distinctively present in the modular design of the **ES6 import/export syntax**.








### Publish-Subscribe Architecture





### State Management Architecture



### Strategy Pattern Architecture

The Strategy Pattern is a achitecture that aims to releave complexities from the code by reusing some same functionality that presents different behavior according to the parameters received.

![strategy-patter-front-end-architecture](/images/articles/web-development/strategy-patter-front-end-architecture.jpg)
[Luis Castillo](https://dev.to/lukocastillo/most-common-design-patterns-for-front-end-with-javascript-real-world-examples-2hj3)

One interesting use case brought by the same author is about the reuse of a navigation feature that may display different data depending on the nature of the authentication the user has: guest, admin, form, etc.

Besides the reuse of some functionality, this patter also brings cleaness to the code, because in its design the developer can to dismiss large chunks of imperative coding, just like a lengthy repetitive if/else statement, by the use of a object literal to pass the necessary dependency.


### Unidirectional Architecture

#### The Flux Architecture

The Flux Architecure is one example of Unidirectional Architecture, and a very important one to give scalability to front-end applications in terms of state management.

It seems that the MVC Architecture (and its variations, like MVVM and MVP) is very effective to help to separate concerns in the applications, and to create distinct modules that can that care of single responsabilities.

But MVC alone, together with its variations, cannot cope with the stress of a growing app where with the increase of the components a large quantity of states have to be maintained and updated at due time.

And together with the pulverization of states to be managed by the modules in general, there is also the necessity to synchronaze the communications for the upcomming data.

In these envoronment, The Flux Patter helps to tackle this problem by providing **a centralized global context**, creating **explicitness of state mutation** and managing the flow of the data communication in a **synchronized unidirectional data flow**.


Firstly, to create a robust centralized context, the Flux Architecture creates a centralized **Store** as a data module responsible to be the centralized thruth of the states for the application.

Then, the architecture brings explicitness to the state mutation by introducing a **Dispatcher**, another data module to be solely responsible to define the communication of the application with the store.

So firstly the dispatcher defines **Actions** that will define its the communication with the components, and once the dispatcher centralizes the communication with the components through the defined actions, it becomes also responsible to apply the definitive logic to transform the old state and then it also signal the store to mutate to the new state, so creating a revolving communication between components, dispatcher, store and the view module.

![flux-pattern-front-end-architecture](/images/articles/web-development/flux-pattern-front-end-architecture.png)


`Therefore, by monitoring actions and the information it contains, data mutation of the whole app is under our control (when and how something is changed).`
[Richard Ng](https://blog.cloudboost.io/the-state-of-web-applications-3f789a18b810)












https://azeynalli1990.medium.com/software-architecture-patterns-for-front-end-development-9e43e43cdfb3
https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns

### Further Reading

[]()

### References


[Software Architecture Patterns for Front-End Development - Medium.com](https://azeynalli1990.medium.com/software-architecture-patterns-for-front-end-development-9e43e43cdfb3)

[Most common design patterns for Front-End with JavaScript (Real-world examples) - Dev.to](https://dev.to/lukocastillo/most-common-design-patterns-for-front-end-with-javascript-real-world-examples-2hj3)

[Patterns For JavaScript Frontend Applications - blog.cloudboost.io](https://blog.cloudboost.io/the-state-of-web-applications-3f789a18b810)

[]()

[]()

