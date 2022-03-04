---
author: 'Marcus Vinicius Richa'
title: 'Front-end Development Patterns'
date: '2022-03-04'
subject: 'web-dev-articles'
description: 'Patterns is a recent practice that is beign introduced to the Front-end development context. One of the first patterns to be appear some years ago is the MVC (Model-View-Controller), a pattern dedicated to improve the software architecture by appling Separation of Concerns (SoC) to the software system.'
---

# Front-end Development Patterns

1. ##### Introduction  
2. ##### Different Front-End Patterns
	2.1. Buider Pattern Architecture    
	2.2. Component Architecture   
	2.3. Dumb-Smart Components Pattern Architecture    
	2.4. Micro Front-ends Architecture    
	2.5. Modular Architecture     
	2.6. Publish-Subscribe Architecture     
	2.7 State Management Architecture    
	2.8. Strategy Pattern Architecture    
	2.9. Unidirectional Architecture
3. ##### Different Front-End Architectures
	3.1. The Flux Architecture    
	3.2. SPA   
	3.3. PWA
4. ##### Further Reading
5. ##### References

### Introduction

The studies and researchs about patterns applied to back-end development is a well stablished area in the Web Development context.

But some authors have been reporting that this same practices are being brought to the Front-end context as well.

One of the first patterns to be introduced some years ago is the MVC (Model-View-Controller), a pattern dedicated to improve the software architecture by appling Separation of Concerns (SoC) to the software system, especilly focused on the context of the presentation, the data handling and the overall logic of the system.

And, as it's asserted by [Ali Zeynalli](https://azeynalli1990.medium.com/software-architecture-patterns-for-front-end-development-9e43e43cdfb3), SoC is one of the main triggers that follow when architecture patters are aplyed.

As a practice `in computer science, Separation of Concerns (SoC) is a design principle for separating a computer program into distinct sections. Each section addresses a separate concern, a set of information that affects the code of a computer program`.
[Wikipedia](https://en.wikipedia.org/wiki/Separation_of_concerns)


And, in general all patterns have their aim to make a more robust and more reliable software, improving in maintainance, in flexibility and in redability, etc, as [Luis Castillo](https://dev.to/lukocastillo/most-common-design-patterns-for-front-end-with-javascript-real-world-examples-2hj3) asserts.



- Other articles about the Patterns:
- Software Architecture and Design [^1].
- Software Architecture Patterns - Overview [^2].


### Different Front-End Patterns

#### Buider Pattern Architecture

The builder pattern is used when it's needed to create complext objects with different variations and also it's necessary to have flexibility to modify the construction process without impacting the object representation in self.

One use case brought by [Luis Castillo](https://dev.to/lukocastillo/most-common-design-patterns-for-front-end-with-javascript-real-world-examples-2hj3) relates to the consumption of some data API which need to be transformed in order to be understood by a third-party component.



#### Component Architecture

This one is another pattern directly linked  to SoC, that apply this concept in a more granular separation that MVC, for example.

Here, the separation units comes into play as components tackle a separated feature and can be rearranged and reused in case that same feature is needed somewhere else.

Also, this pattern aims the flexibility to scale with the simple addition of new components to tackle some new feature needed by the software.



#### Dumb-Smart Components Architecture

This Dumb-Smart Components pattern is a specification from the more general component based pattern.

So, here in the dumb-smart components concept, the component is divided once more to bring some Separation of Concern (SoC) inside its logic, where the component structure should be divided in its function, and while a resultant component would direct its logic, therefore a smart component, while the other resulting component would be oblivious about the working logic, therefore a dumb component, and only responsible to perform some under the dependency of the smart component.

A use case of this pattern can be seem in the construction of UI for web apps, where some feature is controlled by a smart component, but when it is needed to render something on the screen, a very speciallized component, the dumb component, would receive the correct data to perform specifically only this job.



#### Micro Front-ends Architecture

This Front-End pattern works as a extension of the Micro Services Architecture as a whole, and it aims to tackle the problem of dependencies as the app becomes bigger.

So, based on micro frontends, this concept front-end app works to divide the features as small systems in different use cases 

As use cases `area either have responsible front team members or in big applications separate teams handling end-to-end micro areas`.
[Ali Zeynalli](https://azeynalli1990.medium.com/software-architecture-patterns-for-front-end-development-9e43e43cdfb3)



#### Modular Architecture

The Modular Pattern is one of the most common patterns in the JavaScript environment, and it aims to divide de system into different contexts and scopes called modules, to bring all those advantages of flexibility and maintainance stated above.

As it can be seen, this particular architecture is distinctively present in the modular design of the **ES6 import/export syntax**.


#### Publish-Subscribe Architecture

The Publish-Subscribe pattern (also known as the Broker Architecture) is a concept for controlling messagery on a system, where it has a specialized module to centralized events and to define categories of communiction. 

And, on the other side of the communication system there are the subscribers that enlist themselves to receive the messages that the publisher is constantly sending or updating.

![publisher-subscriber-front-end-patterns](/images/articles/web-development/publisher-subscriber-front-end-patterns.gif)
[Jonathan Siahaan](https://medium.com/easyread/difference-between-pub-sub-pattern-and-observable-pattern-d5ae3d81e6ce)

- read more about the Brooker Architecture in the article `Software Architecture and Design` [^1].


#### State Management Architecture

This architecture appeared in the Front-end environment to deal with the problem of the pulverization of states in a application that has to deal with a complex and intricated system of communication to tranfer the necessary internal states to work the system.

So, it seems that some patterns like the MVC Architecture (and its variations, like MVVM and MVP), and the Component Pattern are very effective to help to separate concerns in the applications, and to create distinct modules or components to tackle different responsabilities need by the system.

But these patters alone, cannot cope with the stress of a growing app where with the increase of the number of parts and their interchanging states to be maintained and updated, and also synchronized at due time, what would usually create a chaotic communication system.

Than this pattern, then, excel in its concept to create strategies to deal with the control of state for the application.


#### Strategy Pattern Architecture

The Strategy Pattern is a achitecture that aims to releave complexities from the code by reusing some same functionality that presents different behavior according to the parameters received.

![strategy-patter-front-end-architecture](/images/articles/web-development/strategy-patter-front-end-architecture.jpg)
[Luis Castillo](https://dev.to/lukocastillo/most-common-design-patterns-for-front-end-with-javascript-real-world-examples-2hj3)

One interesting use case brought by the same author is about the reuse of a navigation feature that may display different data depending on the nature of the authentication the user has: guest, admin, form, etc.

Besides the reuse of some functionality, this patter also brings cleaness to the code, because in its design the developer can to dismiss large chunks of imperative coding, just like a lengthy repetitive if/else statement, by the use of a object literal to pass the necessary dependency.


#### Unidirectional Architecture

The Unidirectional Architecture is a pattern that stablish some order in the flow of the system, where in this case it aims to restrict the flow in an singular direction or at a unidirectional flow.

There are many architectures that thrives making use of this patter as to control the flow of the system, or at least part of the flow.

So, exemples of architectures that uses this unidirectional concept are the Publish-Subscribe (also known the Broker Architecture) and the Flux Architecture, as they use this concept to define and organize flows inside the system.

The Publish-Subscribe pattern defines communication, while the Flux pattern defines not only a system of communication, but also defines a data module for state control.



### Different Front-End Architectures

#### The Flux Architecture

The Flux Architecure is one example of a compounded architecture that uses concepts from both State Control and Unidirectional Architectures, aiming the very important job to give scalability to front-end applications in terms of state management.

So, in this regard, the Flux Architecture creates a separated module to cope with global states of the app, at the same time it creates a organized system of communication with the other modules of the app to deal with the interchange of states and its updates as well.

Here, in the the flux environment, this pattern helps to tackle this problem by creating **a centralized global context**, by creating a **explicitness of state mutation** and by managing the flow of the data communication in a **synchronized unidirectional data flow**.

Firstly, to create a robust centralized context, the Flux Architecture creates a centralized **Store** as a data module responsible to be the centralized thruth of the states for the whole application.

Then, the architecture brings explicitness to the state mutation by introducing a module **Dispatcher**, another data module to be solely responsible to define the communication of the application with the store.

So firstly the dispatcher defines **Actions** that will define the necessary communication that would interwind across the components and the application, and once the dispatcher centralizes the communication with the components through the defined actions, it becomes also responsible for the application of the definitive logic to transform the old states, that then would be signalized to the store so it could mutate them into the new state of the application. 

Doing so, the flux pattern also creates a revolving communication between components, dispatcher, store and the view module in a circular unidirectional mode.

![flux-pattern-front-end-architecture](/images/articles/web-development/flux-pattern-front-end-architecture.png)


`Therefore, by monitoring actions and the information it contains, data mutation of the whole app is under our control (when and how something is changed).`
[Richard Ng](https://blog.cloudboost.io/the-state-of-web-applications-3f789a18b810)













https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns

### Further Reading

[]()

### References


[Software Architecture Patterns for Front-End Development - Medium.com](https://azeynalli1990.medium.com/software-architecture-patterns-for-front-end-development-9e43e43cdfb3)

[Most common design patterns for Front-End with JavaScript (Real-world examples) - Dev.to](https://dev.to/lukocastillo/most-common-design-patterns-for-front-end-with-javascript-real-world-examples-2hj3)

[Patterns For JavaScript Frontend Applications - blog.cloudboost.io](https://blog.cloudboost.io/the-state-of-web-applications-3f789a18b810)

[Difference Between Pub-Sub Pattern and Observable Pattern - Medium.com](https://medium.com/easyread/difference-between-pub-sub-pattern-and-observable-pattern-d5ae3d81e6ce)

[]()

[^1]:software-architecture-and-design-2022-02-22

[^2]:software-architecture-patterns-overview-2022-02-18
