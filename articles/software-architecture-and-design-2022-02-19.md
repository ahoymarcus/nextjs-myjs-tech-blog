---
author: 'Marcus Vinicius Richa'
title: 'Software Architecture and Design'
date: '2022-02-19'
subject: 'development-articles'
description: 'Software Architecture and Software Design typically refers to bigger structures of a  software system, and how its smaller software components manage to carry out their tasks. They serve as a blueplrint for the system and a abstraction to deals with the systems complexities.'
---

# Software Architecture and Design

1. ##### Introduction      
2. ##### Software Architecture and Software Design  
	2.1 The Software Architecture 
	2.2. The Software Design   
	2.3. Software Architecture Goals     
	2.4. Software Architecture Limitations    
3. ##### Common Quality Attributes for Software Architecture
4. ##### Advantages of Software Architecture
5. ##### Key Principles of Software Architecture
6. ##### Key Principles of Software Design
7. ##### Common Architectural Designs or Patterns
8. ##### Architectural Models for Software Architecture
	8.1. UML (Unified Modeling Language)  
	8.2. Architectural View Model (4+1 View Model)  
	8.3. ADL (Architecture Description Language)   
9. ##### 
10. ##### 
11. ##### 
11. ##### 
11. ##### 
11. ##### 
9. ##### Further Reading
10. ##### References

### Introduction

As it is stated at the [tutorialsPoint article](https://www.tutorialspoint.com/software_architecture_design/index.htm), Software Architecture typically refers to bigger structures of a  software system, and how its smaller software components manage to carry out their tasks.

Also, it is possible to divide this great concept into two parts constituents:

1. **Software Architecture**: at this phase there should be a gathering of many specifications and items to be correlated into a systems functional requirements.
2. **Software Design**: at this phase the functional requirements are accomplished.


### Software Architecture and Software Design

Software Architecture ` serves as a blueprint for a system. It provides an abstraction to manage the system complexity and establish a communication and coordination mechanism among components.`
[tutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/index.htm)


#### The Software Architecture

1. It defines a structured solution to meet all the technical and operational requirements, while optimizing the common quality attributes like performance and security.
2. Further, it involves a set of significant decisionas about the organization related software development and each of these decisions can have a considerable impact on quality, maintainability, performance, and the overall success of the final product. These decisions comprise of:    
	2.1. Selections of structural elements and their interfaces by which the system is composed.   
	2.2. Their behaviour as specified in collaborations among those elements.    
	2.3. Composition of these structural and behavioral elements into large subsystem.     
	2.4. Architectural decisions align with business objectives.     
	2.5. Architectural style guide the organization.    
	
	
#### The Software Design

`Software design provides a design plan that describes the elements of a system, how they fit, and work together to fulfill the requirement of the system.`
[tutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/index.htm)


The objectives of having a design plan are:

- To negotiate system requirements, and to se expectations with customers, marketing, and management.
- Act as a blueprint during the development process.
- Guide the implementation tasks, coding, integration, and testing.


In terms of the Software Life Cycle, this phase of Software Design would come just after the **domain analysis**, the **requirement analysis**, and **risk analysis**, but before the **detailed documenting** of the system, and also its **coding**, and **testing**.


#### Software Architecture Goals

The **primary goal** of the architecture is to identify requirements that affect the structure of the application.

Other goals:

- Expose the structure of the system, but hide its implementation details.
- Realize all the use-cases and scenarios.
- Try to address the requirements of various stakeholders.
- Handle both functional and quality requirements.
- Reduce the goal of ownership and improve the organizations's market position.
- Improve quality and functionality offered by the system.
- Improve external confidence in either the organization or system.


#### Software Architecture Limitations

`Software architecture is still an emerging discipline within software engineering`.
[tutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/index.htm)

So it has the following limitations:

- Lack of tools and standardization ways to represent architecture.
- Lack of analysis methods to predict whether architecture will result in an implementation that meets the requirements.
- Lack of awareness of the importance of architectural design to software development.
- Lack of understanding of the role of software architect and poor communication among stakeholders.
- Lack of understanding of the design process, design experience and evaluation of design.


### Common Quality Attributes for Software Architecture

The [TutorialsPoint's article](https://www.tutorialspoint.com/software_architecture_design/introduction.htm) also presents a complete table with **Common Quality Attributes** that a **Software Architecture** should have:

1. **Design Qualities**:    
	1.1. Conceptual integrity: defines the consistency and coherence of the overall design.          
	1.2. Maintainability      
	1.3. Reusability       
2. **Run-time Qualities**:     
	2.1. Interoperability: the ability of a system to successfully communiate and exchange information with external systems from other parties.     
	2.2. Manageability: how easy it is to administrate.        
	2.3. Realiability     
	2.4. Scalability     
	2.5. Security     
	2.6. Performance     
	2.7. Availability
3. **System Qualities**     
	3.1. Supportability: the ability of the system to provide information helpful for identifying and resolving issues.    
	3.2. Testability: measure of how easy and simple it is to create test criteria for the system and its components.     
4. **User Qualities**    
	4.1. Usability     
5. **Architecture Quality**     
	5.1. Correcteness: it is the attibute of accountability for satisfying all the requirements defined for the system.       
6. **Non-runtime Quality**:      
	6.1. Portability       
	6.2. Integrity: the ability to make separately developed components of the system work correctly together.       
	6.3. Modifiability: the ease with which a software system can accomodate changes to its software.    
7. **Business Qulity Attributes**:     
	7.1. Cost and Schedule: the costs in respect to time to market, its lifetime and utilization legacy.         
	7.2. Marketabiity    


### Advantages of Software Architecture

The implementation of architectural structures in software development can be a effect helt to bring many of the already state Software Qualities:

1. **Provide structural patterns**: these are sets of correct rules and general structural patterns that informs and guide the work of management and developers with the development of software.    
2. **Improves partitioning and reuse**: also, a better knowledge of the architecture of the systems helps to create more atomic and more specific features, that are indubitably easier to be reused across systems. 
3. **Description of particular ways of configurations**: and this knowledge helps to create solution to many specific cases and problems that are recurrent with software development.



### Key Principles of Software Architecture 

- **Build to Change Intead of Building to Last**
- **Reduce Risk and use Models to Analyse**
- **Use Models and Visualizations as Communiction and Collaboration Tools**
- **Use Incremental and Iterative Approaches**


### Key Principles of Software Design

- **Separation of Concerns**: divide the components of system into specific features so that there is no overlapping among the components functionality. This will provide high cohesion and low coupling. This approach avoids the interdependency among components of system which helps in maintaining the system easy.
- **Single Responsability Principle**: each and every module of a system should have one specific responsability, which helps the user to clearly understand the system. It should also help the integration of the component with other components.
- **Principle of the Least Knowledge**: any component or object should not have the knowledge about internal details of other components. This approach avoids interdependency and helps maintainability.
- **Minimize Large Design Upfront**: minimize large design upfront if the requirements of an application are unclear. And if **there is a possiblility of modifying requirements, then avoid making a large design for the whole system**.
- **Do not Repeat the Functionality**: duplication of functionality within an application can make it dificult to implement changes, decrease clarity, and introduce potential incosistencies.
- **Prefer Composition over Inheritane while Reusing the Functionality**: that's because **inheritance** creates dependency between the parent-child components, and hence it blocks the fee use of the child classes. On the other hand, **composition** increases the level of freedom to reuse the child components.   
- **Define the Communication Protocol between Layers**: understand how components will communicate with each other which requires a complete knowledge of deployment scenarios and the production environment.     
- **Define Data Format for a Layer**: various components will interact with each other through data format. Do not mix data formats so that applications are easy to implement, extend, and maintain. Also, try to keep the same data format inside a layer, so that its various components need not code/decode the data while communicating with each other. **It reduces the processing overhead**.     
- **System Service Components should be Abstract**: code related to security, communications, or system services, like logging, profiling, and configuration should be abstracted in the separate components. So, do not mix code with business logic, as it is easy to extend design and maintain it.      
- **Design Exceptions and Exception Handling Mechanism**: defining exceptions in advance, helps he componets to manage erros or unwanted situations in an elegant manner. The exception management will be the same throughout the system.
- **Naming Conventions**: the use of good naming conventions provides consistency to the model, and helps the understandiment of the system, its tests and maintainability too.


### Common Architectural Designs or Patterns

1. **Communication**:
	1.1. Message bus: defines the use of a system that can receive and send messages using on or more communication channels.        
	1.2. Service-oriented Architecture (SOA)   
2. **Deployment**    
	2.1. Client - Server   
	2.2. 3-tier or N-tier: separates functionalities into in tiers that are located in different computers.   
3. **Domain**:     
	3.1. Domain Driven Design: that focus and describes business models within functional objects.    
4. **Structure**:     
	4.1. Composed based: breakdown the application design into reusable functional or logical components that expose well-defined communiction interfaces.    
	4.2. Divide the concerns of the application into stacked groups (or layers).     
	4.3. Object oriented: based on the division of responsibilities of an application or system into objects, each containing the data and the behavior relevant to the object.    
	
	
	
### Architectural Models for Software Architecture
	
A software architectural analysis implies a wide range of elements to be described (Components, Connections, Interations, Deployment configurantio, etc...), and to help to carry out this effort there are some available models:	
	
1. **UML (Unified Modeling Language)**: it's one of the object-oriented solutions used in software modeling and design.
2. **Architectural View Model (4+1 View Model)**: it represents the functional and the non-functional requirements of the software application.
3. **ADL (Architecture Description Language)**: the ADL defines the software architecture formally and semantically.

#### 	UML

It's a pictorial language used to make blueprints, and it was created by Object Management Group (OMG).

UML draft specifiction was proposed in 1997, and now days it serves as a standard for software requirement analysis and design to document for sotware development.

`The elements are like components which can be associated in different ways to make a complete UML picture, which is known as a diagram. So, it is very important to understand the different diagrams to implement the knowledge in real-life systems. We have two broad categories of diagrams and they are further divided into sub-categories i.e. Structural Diagrams and Behavioral Diagrams.`
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/architecture_models.htm)

**Structural Diagrams**

They represent the static aspects of a system, which is the representation of those parts of a diagram that forms the main structure and it is therefore stable. And they can sub-divided as follows:

1. **Class diagram**: they are the schemas or models that will conform the components.    
2. **Object diagram**: they represents the variables and states of the sytem and their relationships at runtime.     
3. **Component diagram**: these are the actual pieces created by the schemas and modelling classes that are grouped to create functionaties.
4.  **Composite structure**: it describes the inner structure of a component.     
5. **Package diagram**: these structures describes the structure and orginization of the project in a larger scale. Each package groups classes and other packages, and they serve to separate context in the system.     
6. **Deployment diagram**: these are a set of nodes and their relationships that represents the environment where the components are deployed.         


**Behavioral Diagrams**

they represent the dynamic aspect of a system, that is the changing/moving parts of a system. These are the behavior types for UML:

1. **Use Case Diagram**: describes the relationships among the functionalities and their internal/external controllers. Those controllers are known as actors.     
2. **Sequence Diagram**: visualizes the sequence of calls in a system to perform a specific functionality.      
3. **Communication Diagram**: same as sequence diagram, except that is focuses on the object's role. Each communication is associated with a sequence order, number plus the past messages. 
4. **Activity Diagram**: describes the flow of control in a system. It consists of activities and links. The flow can be **sequential**, **concurrent**, or **branched**.    
5. **Interaction Overview**: combines activity and sequence diagrams to provide a control flow overview of system and business process.     
6. **State Machine/Chart Diagram**: represents the event driven state change of a system. It basically describes the state change of a class, interface, etc... Used to visualize the reaction of a system by internal/external factors.      
7. **Time Sequence Diagram**: describes the changes by messages in state, condition and events.      


**Architectural View Model (4+1 View Model)**

 A **model** is a complete, yet basic and simplified description of the software architecture which is composed of multiple views from a particular perspective of viewpoint.
 
 A **view** is a representation of an entire system from some perspective or from some concern. And it is used to describe the system from the viewpoint of different stakeholders such as end-users, developers, project managers, and testers.
 
1. The **4+1 View Model**: it was designed by Philippe Kruchten to describe the architecture of a software-intensive system based on the use of multiple and concurrent views, with at least 04 essential views. So it is a **multiple view model that addresses different features and concers of the system**. It standardazes the software design documents and makes the design easy to understand by all stakeholders.
	1.1. The Logical view or Conceptual view: it describes the obhject model of the design.
	1.2. The Process view: it describes the activities of the system, captures the concurrency and synchronization aspects of the design.
	1.3. The Physical view: it describes the mapping of software onto hardware and reflects its distributed aspect.
	1.4. The Development view: it describes the static organization or structure of the software in its development of environment.
 
 
The naming of this model implies that there are a fifth view, a high level requirement for the system, called **scenario view** or **use case view** that represents a user case for the project, and that brings all of them together.
 
![software-architecture-4-plus-1-view-model](/images/articles/development/software-architecture-4-plus-1-view-model.png)
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/architecture_models.htm)
 
 
**ADL (Architecture Description Language)**

An ADL is a language that provides syntax and semantics for defining a software architecture. It is a notation specification which provides features for modeling a software system’s conceptual architecture, distinguished from the system’s implementation.

ADLs must support the architecture components, their connections, interfaces, and configurations which are the building block of architecture description. It is a form of expression for use in architecture descriptions and provides the ability to decompose components, combine the components, and define the interfaces of components.

An architecture description language is a formal specification language, which describes the software features such as processes, threads, data, and sub-programs as well as hardware component such as processors, devices, buses, and memory.

It is hard to classify or differentiate an ADL and a programming language or a modeling language. However, there are following requirements for a language to be classified as an ADL −

    It should be appropriate for communicating the architecture to all concerned parties.

    It should be suitable for tasks of architecture creation, refinement, and validation.

    It should provide a basis for further implementation, so it must be able to add information to the ADL specification to enable the final system specification to be derived from the ADL.

    It should have the ability to represent most of the common architectural styles.

    It should support analytical capabilities or provide quick generating prototype implementations.







https://www.tutorialspoint.com/software_architecture_design/architecture_models.htm

Padrões de arquitetura de software: MVC, orientado a eventos, microsserviços, SOA/Web Services, cliente-servidor, pipes-and-filters e P2P. 

### Further Reading

[10 Common Software Architectural Patterns in a nutshell - Towardsdatascience.com](https://towardsdatascience.com/10-common-software-architectural-patterns-in-a-nutshell-a0b47a1e9013)

[5 essential patterns of software architecture - Red Hat](https://www.redhat.com/architect/5-essential-patterns-software-architecture)

[Types of Software Architecture Patterns - GeeksforGeeks](https://www.geeksforgeeks.org/types-of-software-architecture-patterns/)

### References


[Software Design - JavaTPoint](https://www.javatpoint.com/software-engineering-software-design)

[Software Architecture & Design Tutorial - TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/index.htm)

