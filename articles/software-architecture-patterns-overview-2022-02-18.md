---
author: 'Marcus Vinicius Richa'
title: 'Software Architecture Patterns - Overview'
date: '2022-02-18'
subject: 'development-articles'
description: 'A software architecture pattern captures some design structures of the system so they can be reused. From the engineers point of view, a pattern can represent efficiency and productivity, since it gives a tested solution for some commonly known problems. Besides, the use of architectural patterns can also help the software management at the early stages planning for the software and to estimate its costs.'
---

# Software Architecture Patterns - Overview

1. ##### Introduction 
2. ##### The Blackboard Pattern
3. ##### The Broker Pattern         
4. ##### The Client-Server Pattern
	4.1. Advantages of the Client-Server Pattern    
	4.3. Disadvantages of the Client-Server Pattern   
	4.3. Useful references for the Client-Server Pattern    
5. ##### The Controller-Responder Patter
	5.1. Advantages of the Controller-Responder Pattern     
	5.2. Disadvantages of the Controller-Responder Pattern     
	5.3. Useful references for the Controller-Responder Pattern      
6. ##### The Event-Bus Pattern
7. ##### The Interpreter Pattern
8. ##### The Layered Pattern
	8.1. Advantages of the Layered Pattern        
	8.2. Disadvantages of the Layered Pattern               
	8.3. Useful references for the Layered Pattern    
9. ##### The Model-View-Controller Pattern      
	9.1. Advantages of the MVC Pattern      
	9.2. Disadvantages of the MVC Pattern      
	9.3. Useful references for MVC       
10. ##### Microservices Pattern
	10.1. Advantages of the Microservices Pattern     
	10.2. Disadvantages of the Microservices Pattern   
	10.3. Useful references for the Microservices Pattern 
11. ##### The Peer-To-Peer Patter
12. ##### The Pipe-Filter Pattern
13. ##### Further Reading
14. ##### References

### Introduction

According to [Red Hat article](https://www.redhat.com/architect/5-essential-patterns-software-architecture) a software architecture has the goal to describe and design a collection of components that will conformed into a system to make up the building blocks of a software.

And a software **architectural pattern** captures some design structures of the system so they can be reused. From the engineers point of view, a pattern can represent efficiency and productivity, since it gives a tested solution for some commonly known problems.

Besides, the use of **architectural patterns** can also help the software management at the early stages planning for the software and to estimate its costs.

On the other hand, the choice of an inconvenint architecture for a system could not only delay the project, but could also lead to software failue.


### The Blackboard Pattern

This pattern is useful for problems for which no deterministic solution strategies are known. The blackboard pattern consists of 03 main components:

1. **Blackboard**: a structured global memory containing objects from the solution space.    
2. **Knowledge Source**: spcialized modules with their own representation.    
3. **Control Component**: selects, configures and executes modules.

`All the components have access to the blackboard. Components may produce new data objects that are added to the blackboard. Components look for particular kinds of data on the blackboard, and may find these by pattern matching with the existing knowledge source.`
[Towardsdatascience.com](https://towardsdatascience.com/10-common-software-architectural-patterns-in-a-nutshell-a0b47a1e9013)

Some of the uses for this pattern:

- Speech recognition    
- Vehicle identification and tracking    
- Protein structure identification   
- Sonar signals interpretation    

![blackboard-pattern-example](/images/articles/development/blackboard-pattern-example.png)
[Towardsdatascience.com](https://towardsdatascience.com/10-common-software-architectural-patterns-in-a-nutshell-a0b47a1e9013)



### The Broker Pattern

This pattern is used to structure distributed systems with decoupled components. These components can interact with each other by remote service invocations. A **Broker** component is responsible for the coordination of communication among components.

One place where this architecture could be found ([Towardsdatascience.com](https://towardsdatascience.com/10-common-software-architectural-patterns-in-a-nutshell-a0b47a1e9013)): `Servers publish their capabilities (services and characteristics) to a broker. Clients request a service from the broker, and the broker then redirects the client to a suitable service from its registry.`.

Example of Message Broker Software:

- Apache ActveMQ
- Apache Kafka
- RabbitMQ
- JBoss Messaging

![broker-pattern-example](/images/articles/development/broker-pattern-example.png)
[Towardsdatascience.com](https://towardsdatascience.com/10-common-software-architectural-patterns-in-a-nutshell-a0b47a1e9013)


### The Client-Server Pattern

In the client-server architecture patters, there are two main components, and even when this two components are located in the same system, they use differents process from the OS:

1. **Client**: this is the service requester and the component which initiates the connection.
2. **Server**: this is the service provider and it is who centralizes all the service operations for all the clients. 

The best example for this patter is the **World Wide Web**, but it's also used for online applications like **file sharing** and **email**.

**Note**: eventhough this Client-Server Pattern is a centralized patter, it's related, or even deemed as a subcategory, to the **Peer-To-Peer Architecture** which is by itsef a decentralized pattern, where the peers components communicate directly.   


#### Advantages of the Client-Server Pattern

1. **Centralization of the operations**: while the data is usually stored in a central location of the server, also all the other network peripherals are controlled in this centralized manner.
2. **Security**: because of the centralized control of the process, it's easier to attain more security in the processes.


#### Disadvantages of the Client-Server Pattern

1. **Low scalability**: to scale is necessary to provide power to capacity both for the new component and for the centralized server that controls all the operation.
2. **The need for expensive machines**: this heavy duty machines are necessary to carry out the centralized work.

#### Useful references for the Client-Server Pattern

-	[What is a client-server architecture? from W3 School](https://www.w3schools.in/what-is-client-server-architecture/)
-	[An introduction to REST architecture from Red Hat](https://www.redhat.com/en/blog/rest-architecture)


### The Controller-Responder Patter

This pattern can be named with other related names like, **master/slave**, **primary/secondary**, **primary/replica**, **parent/helper**, **master/replica**, but it is the **Controller/Responder** the terminology adopted by the IEEE (Institute of Electrical and Electronics Engineers).

The Controller Component centralizes the operation, since it defines the inputs to be sent to the Responders Components, and it also control them defining of the communication priorities for the responders.

This kind of architectural pattern is commonly found at some distributed databases, where the dicotomy of controller-responder or primary-secondary is used to exert priority in terms of consistency of the data, since the valid data is the one present in the controller component.

Another dispositive that commonly uses this pattern is a Bus that connect peripherals to a computer system (that is also in this same relation of master and slave drivers).

**Note**: although this Controller-Responder Architecture is also centralized, it is different from the Peer-To-Peer Architecture, because in this last architecture the communications are done with equals levels of share and responsabilities.

#### Advantages of the Controller-Responder Pattern

- **Scale**: this architecture allows the creation of distributed systems like databases and analytic frameworks, because it secures the data in the controller, while allows all the responder to work with replicated data for readings and aggregations.
- **Partition tolerance**: eventhough the level of tolerance can be tuned, this architecture allows that replicas may be added or subtracted without affecting the main processes.

#### Disadvantages of the Controller-Responder Pattern

- **Risk of data loss**: this may occor in events where the partition is caused at the controller or primary component, and in the process its data cannot be replicated to any other responder.

#### Useful references for the Controller-Responder Pattern

- [Analysis of a master-slave architecture for distributed evolutionary computations from the IEEE (2006)](https://ieeexplore.ieee.org/document/1580635)
-	[The master-slave architecture by Packt](https://subscription.packtpub.com/book/big_data_and_business_intelligence/9781783989126/1/ch01lvl1sec10/the-master-slave-architecture)



### The Event-Bus Pattern

This pattern primarily deals with events and has four major components:

1. **Event Source**: publishes messages to particular channels on an event bus.    
2. **Event Listener**: these listen making subscription to a particular channel.     
3. **Channel**: the channels notifies the listeners subscribed to each of them.      
4. **Event Bus**


Some example of systems that use this pattern:

- Android development
- Notification services

![event-bus-pattern-example](/images/articles/development/event-bus-pattern-example.png)
[Towardsdatascience.com](https://towardsdatascience.com/10-common-software-architectural-patterns-in-a-nutshell-a0b47a1e9013)



### The Interpreter Pattern

This pattern is used for designing a component that interprets programs written in a dedicated language. It mainly specifies how to evaluate lines of programs, known as sentences or expressions written in a particular language. The basic idea is to have a class for each symbol of the language.


Some common uses for this pattern:

- Database query languages such as SQL.
- Languages used to describe communication protocols.


![interpreter-pattern-example](/images/articles/development/interpreter-pattern-example.png)
[Towardsdatascience.com](https://towardsdatascience.com/10-common-software-architectural-patterns-in-a-nutshell-a0b47a1e9013)



### The Layered Pattern

`The layered architecture is the most common among developers, and it is useful for programs that comprise several groups of subtasks, each of which is at a different level of abstraction.`
[Red Hat article](https://www.redhat.com/architect/5-essential-patterns-software-architecture)

And each of that subtasks is represented by a layer in the software, and each layer provides services to the next higher layer in a unidirectional pattern.

Layered architecture patterns are commonly found in e-commerce web applications and in desktop applications. 

Also, the most common general information systems usually have these 04 layers:

1. **Presentation layer** (aka **UI Layer**)
2. **Application layer** (aka **Service Layer**)
3. **Business logic layer** (aka **Domain Layer**)
4. **Data access layer** (aka **Persistence layer**)


#### Advantages of the Layered Pattern

- **Simple**: its a block architecture that can be put together, and also it can be built faster since it has the components separated by eachselves.
- **Avoids dependency**: since each component is closed in eachself, the parts could be changed and the system would be working normaly. For exemplo, a Oracle database component layered in this manner could be easily traded by another one with SQL Server.

#### Disadvantages of the Layered Pattern

- **Difficult to scale**: because scaling would lead to the addition of even more layers.
- **Rigidity layers**: inside the layers itselves, it could become very hard to separate the components.

#### Useful references for the Layered Pattern

- [Layered Architecture from Software Architecture Patterns by Mark Richards](https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch01.html)
-	[Software Architecture Patterns — Layered Architecture by Priyal Walpita](https://priyalwalpita.medium.com/software-architecture-patterns-layered-architecture-a3b89b71a057)



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

#### Some Variations for this Patter

- **MVC-I**
- **MVC-II**

At this other article [^1].


#### Useful references for MVC

- [Understanding Model-View-Controller by Coding Horror - 2008](https://blog.codinghorror.com/understanding-model-view-controller/)
- [MVC definition from the original XEROX PARC write up 1978-79](http://heim.ifi.uio.no/~trygver/themes/mvc/mvc-index.html)
- [Codecademy introduction to MVC](https://www.codecademy.com/articles/mvc)



### Microservices Pattern

The Microservices pattern involves creating multiple applications/microservices, that can work interdependently:

`**Although each microservice can be developed and deployed independently, its functionality is interwoven with other microservices.**`
[Red Hat](https://www.redhat.com/architect/5-essential-patterns-software-architecture)


And according with the [Red Hat article](https://www.redhat.com/architect/5-essential-patterns-software-architecture), the Microservies Architecture can use several software design patterns, and each of them provides a different method to manipulate data to produce the services:

- Aggregator Patter
- API Gateway Design Patter
- Chain of Responsability Patter
- Asynchronous Messaging Design Patter


#### Advantages of the Microservices Pattern

1. **Scalability**: because of the distributed nature of this pattern, it's possible to project a system with a streamlined delivery pipeline.
2. **Fully Decoupled components**: each microservice can be fully decoupled and accessed through remote protocols such as REST, SOAP, or GraphQL.
3. **Web-apps**: this architectural pattern is ideal to work with web applications and websites with small components.
4. **Services with well-defined boundaries**: in these kinds of services it's also useful the use of the Microservices Pattern.

#### Disadvantages of the Microservices Pattern

1. **Great Complexity**
2. **Requires great architectural expertise**: all these decoupled services working completely independently of each other requires significant architectural expertise.

#### Useful references for the Microservices Pattern

- [Microservices definition by Martin Fowler (2014)](https://martinfowler.com/articles/microservices.html)
- [Patterns for distributed transactions within a microservices architecture (2018)](https://developers.redhat.com/blog/2018/10/01/patterns-for-distributed-transactions-within-a-microservices-architecture/)
- [Microservice tutorials, including hands-on with Kubernetes](https://developers.redhat.com/topics/microservices)



### The Peer-To-Peer Patter

In this pattern, the individual components are known as **peers**, and since peers have equal share and responsabilities within the communications, they can interchange dynamically their roles with time.

Some examples of these patter:

- File-sharing networks such as Gnutella and G2.
- Multimeida protocols such as P2PTV and PDTP.
- Blockchain technology and its related technologies like the Cryptocurrency-based products such as Bitcoin.



### The Pipe-Filter Pattern

This pattern can be used to structure systems which produce and process a stream of data. And each processing step is enclosed within a filter component. Finaly, the Data, then, is processed while it passes through these pipes.

It's commonly found in Compilers, where the consecutive filters from the compiler perform lexical analysis, parsing, semantic analysis, and code generation.

Also found in Workflows in Bioinformatics.

![pipe-filter-pattern-example](/images/articles/development/pipe-filter-pattern-example.png)
[Towardsdatascience.com](https://towardsdatascience.com/10-common-software-architectural-patterns-in-a-nutshell-a0b47a1e9013)



### Further Reading

[Software Design - JavaTPoint](https://www.javatpoint.com/software-engineering-software-design)

[Software Architecture & Design Tutorial - TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/index.htm)


### References


[10 Common Software Architectural Patterns in a nutshell - Towardsdatascience.com](https://towardsdatascience.com/10-common-software-architectural-patterns-in-a-nutshell-a0b47a1e9013)

[5 essential patterns of software architecture - Red Hat](https://www.redhat.com/architect/5-essential-patterns-software-architecture)

[Types of Software Architecture Patterns - GeeksforGeeks](https://www.geeksforgeeks.org/types-of-software-architecture-patterns/)


[^1]:software-architecture-and-design-2022-02-22

