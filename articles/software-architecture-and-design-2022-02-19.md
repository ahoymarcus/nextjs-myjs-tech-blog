---
author: 'Marcus Vinicius Richa'
title: 'Software Architecture Patterns'
date: '2022-02-19'
subject: 'development-articles'
description: 'A software architecture pattern captures some design structures of the system so they can be reused. From the engineers point of view, a pattern can represent efficiency and productivity, since it gives a tested solution for some commonly known problems. Besides, the use of architectural patterns can also help the software management at the early stages planning for the software and to estimate its costs.'
---

# Software Architecture Patterns

1. ##### Introduction  
2. ##### The Model-View-Controller Pattern
	2.1. Advantages of the MVC Pattern
	2.2. Disadvantages of the MVC Pattern
	2.3. Useful references for MVC
3. ##### Microservices Pattern
	3.1.	
	3.2.
4. ##### 
5. ##### 
6. ##### 
7. ##### 
8. ##### 
9. ##### Further Reading
10. ##### References

### Introduction

According to [Red Hat article](https://www.redhat.com/architect/5-essential-patterns-software-architecture) a software architecture has the goal to describe and design a collection of components that will conformed into a system to make up the building blocks of a software.

And a software **architectural pattern** captures some design structures of the system so they can be reused. From the engineers point of view, a pattern can represent efficiency and productivity, since it gives a tested solution for some commonly known problems.

Besides, the use of **architectural patterns** can also help the software management at the early stages planning for the software and to estimate its costs.


### The Model-View-Controller (MVC) Pattern

The MVC pattern dividers the application into three main components:>

1. A **Model**: this component deals with the dynamic data structure of the software, both its control and logic.
2. A **View**: this component is responsible to dispay data to the user and to interact with him. It can access data from the **Model**, but it cannot understand it, that is, how to manipulate it!
3. A **Controller**: this last component handles inputs from the user and mediates between the **Modelv and the **View**

`These three components interact via some form of notification, such as an event or a callback. These notifications contain state information, such as state changes, which are communicated to update these components.[...] The MVC pattern therefore, decouples software components and allows the codes to be reused easily`
[Red Hat](https://www.redhat.com/architect/5-essential-patterns-software-architecture)

#### Advantages of the MVC Pattern

- Multiples engineers can work on all these component simultaneously without conflict.
- It allows logical grouping of related outputs to generate numerous views from the model.

#### Disadvantages of the MVC Pattern

- This could become complex to navigate around the framework because it introduces many layers of abstraction.

#### Useful references for MVC

- [Understanding Model-View-Controller by Coding Horror - 2008](https://blog.codinghorror.com/understanding-model-view-controller/)
- [MVC definition from the original XEROX PARC write up 1978-79](http://heim.ifi.uio.no/~trygver/themes/mvc/mvc-index.html)
- [Codecademy introduction to MVC](https://www.codecademy.com/articles/mvc)







Padrões de arquitetura de software: MVC, orientado a eventos, microsserviços, SOA/Web Services, cliente-servidor, pipes-and-filters e P2P. 

https://www.redhat.com/architect/5-essential-patterns-software-architecture

https://towardsdatascience.com/10-common-software-architectural-patterns-in-a-nutshell-a0b47a1e9013

### Further Reading

[10 Common Software Architectural Patterns in a nutshell - Towardsdatascience.com](https://towardsdatascience.com/10-common-software-architectural-patterns-in-a-nutshell-a0b47a1e9013)

[5 essential patterns of software architecture - Red Hat](https://www.redhat.com/architect/5-essential-patterns-software-architecture)

[Types of Software Architecture Patterns - GeeksforGeeks](https://www.geeksforgeeks.org/types-of-software-architecture-patterns/)

### References


[Software Design - JavaTPoint](https://www.javatpoint.com/software-engineering-tutorial)

[Software Architecture & Design Tutorial - TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/index.htm)

