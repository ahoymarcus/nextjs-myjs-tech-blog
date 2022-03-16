---
author: 'Marcus Vinicius Richa'
title: 'Software Architecture and Design'
date: '2022-02-22'
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
9. ##### The Object-Oriented Paradigm    
	9.1. Basic Concepts of OO Paradigm   
	9.2. Object-Oriented Analysis    
	9.3. Object-Oriented Design    
10. ##### Data Flow Architecture
	10.1. Batch Sequential    
	10.2. Piper and Filter or Non-sequential Pipeline    
	10.3. Process Control    
11. ##### Data-Centered Architecture
	11.1. Types of Components - Data-Centered Architecture     
	11.2. Styles of Architecture for Data-Centered Architecture     
12. ##### Hierarchical Architecture
	12.1. Main-subroutine Style     
	12.2. Master-slave Style    
	12.3. Virtual Machine Style    
	12.4. Layered Style    
13. ##### Interation-Oriented Architecture
	13.1. Model-View-Controler (MVC)     
	13.2. Presentation-Abstraction-Control (PAC)  
14. ##### Distributed Architecture
	14.1. The Middleware Infrastructure      
  14.2. The Client-Server Architecture      
	14.3. The Multi-Tier Architecture      	
	14.4. The Observable Patter      
	14.5. The Broker Architecture        
	14.6. The Service-Oriented Architecture (SOA)     
15. ##### Component-Based Architecture
	15.1. Definition, Views and Characteristics of a Component?    
	15.2. Principles of Component-Based Design   
	15.3. Component-Level Design Guidelines   
	15.4. Conducting Component-Level Design   
	15.5. Advantages of the Component-Based Architecture
16. ##### User Interface
	16.1. Graphical User Interface    
	16.2. Development Process of the User Interface           
	16.3. Design of the User Interface  
	16.4. Design Principles for the User Interface 	
17. ##### Further Reading
18. ##### References

### Introduction

As it is stated at the [tutorialsPoint article](https://www.tutorialspoint.com/software_architecture_design/index.htm), Software Architecture typically refers to bigger structures of a  software system, and how its smaller software components manage to carry out their tasks.

Also, it is possible to divide this great concept into two parts constituents:

1. **Software Architecture**: at this phase there should be a gathering of many specifications and items to be correlated into a systems functional requirements.
2. **Software Design**: at this phase the functional requirements are accomplished.
   
   
  
- Other articles about Software Patterns and Architectures:
- `Software Architecture Patterns - Overview` [^1].
- `Front-end Development Patterns - Overview` [^2].
- `Front-end Architectures` [^3].

- Exemple of Protocols and Applications which uses these Patterns/Architectures:
- `Advanced Message Queuing Protocol (AMQP)` [⁴]

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
	1.2. Service-oriented Architecture (SOA).
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

An **ADL** is a language that provides syntax and semantics for defining a software architecture. 

It's a notation that provides specification for the features modeled by a software's conceptual architecture, that is distinguished from the system's implementation.

The **ADLs** must support the architecture components, their connections, interfaces, and configurations which are the building block of the architecture description. It's a form of expression to be used in architecture descriptions and provides the ability to decompose components, combine the components, and define the interface of the components.

`An architecture description language is a formal specification language, which describes the software features such as processes, threads, data, and sub-programs as well as hardware component such as processors, devices, buses, and memory.`
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/architecture_models.htm)

It's somehow hard to classify or differentiate an **ADL** and a programming language or a modeling language. **However, there are the following requirements for a language to be classified as an ADL**:

1. It should be appropriate for communicating the architecture to all concerned parties.
2. It should be suitable for tasks of architecture creation, refinement, and validation.
3. It should provide a basis for further implementation, so it must be able to add information to the ADL specification to enable the final system specification to be derived from the ADL.
4. It should have the ability to represent most of the common architectural styles.
5. It should support analytical capabilities or provide quick generation prototype implementations.


### The Object-Oriented Paradigm

The Object-Oriented paradigm was originated and took shape with the arrivel of the new object oriented programming.

So, the `OO analysis and design paradigm is the logical result of the wide adoption of OO programming languages`
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/index.htm)

In term of its **History**, it could be pointed:

- 1960 - the creation of **Simula** the first object-oriented language at the Norwegian Computing Center.   
- 1970 - the creation of the language Smalltalk by the research group at Xerox PARC, as the programming language for its computer Dynabook.  
- 1980s - the **paper titled Object Oriented Design** by Grady Booch to be applied to the object-oriented language **Ada**, and later extended as a general design method.    
- 1990s - the incorporation of behavioral ideas to object-oriented methods.  

`The other significant innovations were **Object Modeling Techniques (OMT)** by James Rum Baugh and **Object Oriented Software Engineering (OOSE)** by Ivar Jacobson`
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/index.htm)


#### Basic Concepts of OO Paradigm

1. **Object**: a real-world element shaped in an computational environment, that may have physical or conceptual existence.    
	1.1. It has specific **identity** from all other objects in the system.    
	1.2. It has a **state** to keep the of its **properties** throughout the execution of the system.    
	1.3. It has **behavior** implied by the the changes occurred at the object state in the run-time.     
2. **Class**: it represents a scheme or model for all the objects that hold the same characteristics and behaviors.   
	2.1. The act of creating objects from its class is called **instantiation**, and thus a class can produce multiple instances, each of the with ist own identity and state.    
	2.2. the set of attributes that becomes properties for each object instance.    
	2.3. a set of behaviors defined by the class inner **methods**, that are its internal functions.       
3. **Encapsulation**: it is the process o binding the attributes and methods of the class, so they are only reachable and accessed through the class own interface.
4. **Polymorphism**: this is the concept were a class can have some general behavior while it keeps the same signiture for a internal method, but **overrides** its specific behavior.
5. **Relationships**: it is possible to assert two kinds of relationships in this paradigm:     
	5.1. a **dynamic** relationship exerted by the objects with other objects.    
	5.2. a **static** relationship of classes among themselves: **Composition**, or **Aggregation**, or **Association**, or **inheritance**.    



The **Association**: it is the king of relationship between two classes that can communicate with each other. This communication can be unidirectional or bidirectional, and this communication can be the type **1:1**, or **1:M**, or **M:N**.

The **Aggregation**: it is a subset of association with the kind of relationship as **"Has-A"** existing between two classes where their instances can exist by itself, that is, both can be instantiated even without the other.

```
public class Employee {
	private String name;
	private double salary;
	
	public Employee() {}
}

public class Department {
	public String name;
	public List<Employee> employees;
	
	public Department() {}
}
``` 

The **Composition**: it is a subset of association with the kind of relationship as **"Part-Of"** existing between two classes, and where there are some **dependency** among the instances so they can be instantiated. For example, when o object Laptop needs a actual instance of Processor to be instantiated.

```
public class Processor {
	private String modelName;
	private int frequency;
	
	public Processor() {}
}

publi class Laptop {
	private Processor processor = new Processor();
	
	public Laptop() {}
}
```

The **Inheritance**: it is the kind o relationship **"IS-A"** between two classes, where there are a dependency of the kind generalization-specification. For example, the classes Animal, Cat and Dog.

```
public class Animal {
	protected weight;
	protected color;
	
	public Animal() {}
	
	public void talk() {
		System.out.print("It is animal");
	}
}

public class Cat exted Animal {
	public Cat() {}
	
	public void talk() {
		System.out.print("Meow");
	}
}

public class Dog extend Animal {
	public Dog() {}
	
	public void tald() {
		System.out.print("Bark");
	}
}
```

![assocition-aggregation-composition-oo-paradigm](/images/articles/development/assocition-aggregation-composition-oo-paradigm.png)
[Visual-paradigm.com](https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-aggregation-vs-composition/)


#### Object-Oriented Analysis

This is the phase in software development where the requirements are gathered, and the classes are identified, together with their relationships.

The aim of OO Analysis it to understand the application domain, specif requirements, and the system feasibility.

The **Object Modeling**: at this stage the schema for each class is modeled, with relationships, its attributes, and methods.

The **Dynamic Modeling**: at this stage it is created a model for the behavior of the system, so it identifies states for each object, its actions e the events it takes part, and the chages made in the state accordingly.

The **Functional Modeling**: this is the final stage of the analysis, where it is modeled the inputs, and outputs, and constraints, as a detailed data flow. 


#### Object-Oriented Design

The main aim of OO Design is to develop the structural architecture of a system:

1. Defining the context of the system
2. Designing the system architecture
3. Identification of the objects in the system
4. Construction of the design models
5. Specification of object interfaces.

**Desing Principles**:

1. **Decoupling Principle**: it's the observation that to maintain a system that has highly interdependent classes, would obly a cascading modification in case of updating some class.
	1.1. In an OO design, thight coupling can be eliminated by introducing new classes or inheritance.
2. **Ensuring Cohesion**: a cohesive class performs a set of closely related functions. And the lack of cohesion means the classes performs many functions that are not meaningful to the operation of the whole system, what brings complexity to the system and makes the structure of the software hard to maintain.
3. **Open-Closed Principle**: this principle aims scalability, where a system should not need to be restructured to receive new requirements.
	3.1. For each concrete class, separate interface and implementions have to be maintained.
	3.2. In a multithread environment, keep the attributes private.
	3.3. Minimize the use of global variables and class variables.


### Data Flow Architecture

In the data flow architecture, the whole software system is seem as a series of transformations in the state, where data and operations are taken as independent of each other.

And the connections between the components or modules may be implemented as I/O stream, I/O buffers, piped, or along other types of connections. 

As a design, the data flow can present differents topologies:

- As a graph
- Linear
- As a tree structure

`The main objective of this approach is to achieve the qualities of reuse and modifiability. It is suitable for applications that involve a well-defined series of independent data transformations or computations on orderly defined input and output such as compilers and business data processing applications.`
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/data_flow_architecture.htm)

There are three types of execution sequences between modules:

1. **Batch sequential**
2. **Pipe and Filter or Non-sequential pipeline mode**
3. **Process control**


#### Batch Sequential

It's a classical data processing model, in which a data transformation subsystem can only initiate its process after its previous subsystem is completly through and its characteristics are:

- The flow of data carries a batch of data as a whole from one subsystem to another.
- The communications between the modules are conducted through temporary intermediate files which can be removed by successives subsystems.
- It's applicable for those applications where data is batched, and each subsystem reads related input files and writes output files.
- Typical application of this architecture includes business data processing such as banking and utility biling.

![batch_sequential-architecture](/images/articles/development/batch_sequential-architecture.jpg)

The **advantages of Batch Sequential**:

- Provides simpler divisions on subsystems.
- Each subsystem can be an independent program working on input data and producing output data.

The **disadvantages of Batch Sequential**:

- Provides high latency and low throughout.
- Does not provide concurrency and interactive interface.
- External control is required for implementation.

#### Piper and Filter or Non-sequential Pipeline

This approach lays emphasis on the incremental transformation of data by successives components, so the concept of the system is decomposed into components data source, filters, pipers, and data sinks.

**One main feature of this architecture is that the data flow can be concurrent**.

The concept of a **Filter**: it's an independent data stream transformer or stream transducers, that receives some input, process it and pipe over the next filter.

Theres two kinds of **Filters**:

1. **Active Filter**:	it lets **connected pipes to pull data in and to push out** the transformed data.
2. **Passive Filter**: it lets **connected pipes to push data in and pul data out**.

The **advantages of Piper and Filter**:

- Provides concurrency and high throughout for excessive data processing.
- Provides reusability and simplifies system maintenance.
- Provides modifiability and low coupling between filters.
- Provides simplicity by offering clear devisions between any two filters connected by pipe.
- Provides flexibility by supporting both sequential and parallel execution.

The **disadvantages of Piper and Filter**:

- Not suitable for dynamic interations.
- A low common denominator is needed for transmissions of data ASCII formats.
- Overhead of data transformation between filters.
- Does not provide a way for filters to cooperatively interact to solve a problem.
- Difficult to configure this architecture dynamically.

The **Piper**: pipes are stateless and they carry binary or character stream which exist between two filters. It can move a data stream from one filter to another. And pipes use a little contextual information and retain no state information between instantiations.


#### Process Control

This approach uses a **processing unit** for changing the process control variables and a **controler unit** for calculating the amount of changes.

A **controller unit** musta have the following elements:

- **Controlled Variable**: it provides values for the underlying system and should be measured by sensors. For example, speed cruise control system.
- **Input Varialbe**: it measures an input to the process. For example, temperature of return air in temperature control system.
- **Manipulated Variacle**: it's value is adjusted or changed by the controller.
- **Process Definition**: it includes mechanisms for manipulating some process variables.
- **Sensor**: obtains values of process variables pertinent to control and ca be used as a feedback reference to recalculate desired value for a controlled variable.
- **Set Point**: it's desired value for a controlled variable.
- **Control Algorithm**: it's used for deciding how to manipulate process variables.

Process Control is suitable in the appliction areas or domains:

- Embedded system software design, where the system is manipulated by process control variable.
- Applications which aim to maintain specified properties of the outputs of the process at given reference values.
- Applicable for car-cruise control and building temperature control systems.
- Real-time system software to control atutomobile anti-lock brakes, nuclear power plants, etc.


### Data-Centered Architecture

In data-centered architecture, the data is centralized and accessed frequently by other components, which modify data. The **main purpose** of this style is to achievi integrality of data.

And in this kind of desing, the different components that access the shared data structure are relatively independent, in that, they interact only through the data store.

Databases are the most common systems that operate with this design, but it could also be a internal store acting as a global context for variables in a system.

And another example is the Web architecture which has a common data schema (i.e. the meta-structure of the Web) and follows the hypermedia protocol and model and processes communicate through the use of shared web-based data services.

#### Types of Components - Data-Centered Architecture

There are two basic types of components:

1. **Central data**: the repository, which is responsible for providing permanent data storage. It represents the current state.
2. **Data processor**: a collection of independent components that operate on the central data store, perform computations, and might put back the results.

`Interactions or communication between the data accessors is only through the data store. The data is the only means of communication among clients.`
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/data_centered_architecture.htm)


#### Styles of Architecture for Data-Centered Architecture

The flow of control differentiates the architectured into two categories:

- The **Repository architecture style**
- The **Blackboard architecture style**

The **Repository architecture style**

Here, the data store is passive and the clients (software components or agents) of the data store are active, which control the logic flow, and the participating components chech the data-storage for changes:

- The client sends a request to the system to perform actions (e.g. insert data).
- The computational processes are independent and triggered by incoming requests.
- If the types of transactions in an input stream of transactions trigger selections of processes to execute, then it is traditional database or repository architecture, or passive repository.
- This approach is widely used in DBMS (Database Manage System), library information system, the interface repository in CORBA, compilers and CASE (computer aided software engineering) environments.

The **advantages of a data-centered architecture**:

- Provides data integrity, backup and restore features.
- Provides scalability and reusability of agents as they do not have direct communicaton with each other.
- Reduces overhead of transient data between software components.

The **disadvantages of a data-centered architecture**:

- It's more vulnerable to failure and data replication or duplication is possible.
- High dependency between data structure of data store and its agents.
- Changes in data structure highly affect the clients.
- Evolution of data is difficult and expensive.
- Cost of moving data on network for distributed data.


The **Blackboard Architecture Style**

In this approach, the data store is active and its clients are passive, and therefore the logical flow is determined by the current data status in data store.

- A number of components that act independently on the common data structure  are stored in the blackboard.
- In this style, the components interact only through the blackboard. The data-store alerts the clients whenever there is a data-store change.
- The current state of the solution in the blackboard and processing is triggered by the state of the blackboard.
- The system sends notifications knlw as **trigger** and data to the clients when changes occur in the data.
- This approach is found in certain AI applications and comples applications, such as speech recognition, image recognition, security system, and business resource management systems, etc.
- If the current state of the central data structure is the main trigger of selecting processes to execute, the repository can be a blackboard and this shared data source is an active agent.
 
`A major difference with traditional database systems is that the invocation of computational elements in a blackboard architecture is triggered by the current state of the blackboard, and not by external inputs.`
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/data_centered_architecture.htm)


There are 03 major parts of a blackboard style architecture:

1. **Knowledge Sources (KS)**: the knowledge sources are also know as **Listeners** of **Subscribers** are distinct and independent units. They act as intermediary to the communication process, that is guided uniquely through the blackboard.
2. **BlackBoard Data Structure**: the is the attributes of data that can be changed when the communication is triggered.
3. **Control**: the control manages the tasks and checks the work state.


The **advantages of a data-centered architecture**:

- Provides scalability which provides easy to add or update knowledge source.
- Provides concurrency that allows all knowledge sources to work in parallel as they are independent of each other.
- Supports experimentation for hypotheses.
- Supports reusability of knowledge source parts.


The **disadvantages of a data-centered architecture**:

- The structure change of blackboard may have a significant impact on all of its agents as close dependency exists between blackboard and knowledge source.
- It can be difficult to decide when to terminate the resoning as only approximate solution is expected.
- Problems in synchronization of multiple agents.
- Major challengers in designing and testing os system.


### Hierarchical Architecture

This model views the whole system as a hierarchical structure, in which the software system is decomposed into logical modules or subsystems at different levels in the hierarchy.

**This approach is typically used in designing system software such as network protocols and operating systems, and some class libraries, like .NET**.

`In system software hierarchy design, a low-level subsystem gives services to its adjacent upper level subsystems, which invoke the methods in the lower level. The lower layer provides more specific functionality such as I/O services, transaction, scheduling, security services, etc. The middle layer provides more domain dependent functions such as business logic and core processing services. And, the upper layer provides more abstract functionality in the form of user interface such as GUIs, shell programming facilities, etc.`
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/hierarchical_architecture.htm)


The Hierarchical Architectural style can be divided in 03 different sets:

1. **Main-subroutine**
2. **Master-slave**
3. **Virtual machine**
4. **Layered Style**


#### Main-subroutine Style

The aim of this style is to reuse the modules and freely develop individual modules or subroutines. And in this style, a software system is divided into subroutines by using top-down refinement according to desired fucntionality of the system.

**These refinements lead vertically until the decomposed modules is simple enough to have its exclusive independent responsability. Functionality may be reused and shared by multiple callers in the upper layers.**

There are two ways by which data is passed as parameters to subroutnes, namaly:

1. **Pass by Value**: subroutines only use the past data, but can't modify it.
2. **Pass by Reference**: subroutines use as well as change the value of the data referenced by the parameter.

The **advantages of the Main-subroutine style**:

- Easy to decompose the system based on hierarchy refinement.
- Can be used in a subsystem of object oriented design.

The **disadvantages of the Main-subroutine style**:


- Vulnerable as it contains globally shared data.
- Tight coupling may cause more ripple effects of change.


#### Mater-slave Style

This approach applies "divide and conquer" principle and supports fault computation and computational accurancy, and it's a modification of the main-subroutine architecture that provides reliability of system and fault tolerance.

In this architecture, slaves provide duplicate services to the master, and the master chooses a particular result among slaves by a certain selection strategy. Also, the slaves may perform the same functional task by different algorithm and methods or totally different functionality, including processing tasks in parallel computing.


Now, some stages to implementation of the Master-slave pattern:

- Specify how computation of the task can be divided into a set of equal sub-tasks.
- Specify how the final result of the whole service can be computed with the help of the results obtained from processing individual sub-tasks.
- Define an interface for the sub-service identified in the first point, and it will be implemented by the slave and used by the master to delegate the processing of individual sub-tasks.


Some applications that uses this Master-slave architectural style:

- Suitable for applications where reliability of software is critical issue.
- Widely applied in the areas of parallel and distributed computing.


The **advantages of a Master-slave style**:

- Faster computation and easy scalability.
- Provides robustness as slaves can be dublicated.
- Slave can be implemented differently to minimize semantic errors.

The **disadvantages of a Master-slave style**:

- Communication overhead.
- Not all problems can be divided.
- Hard to implement and portability issue.


#### Virtual Machine Architecture

The virtual machine architecture pretends some functionality, which is not native to the hardware or to the software on which it is implemented. 

So, a `virtual machine is built upon an existing system and provides a virtual abstraction, a set of attributes, and operations. In virtual machine architecture, the master uses the ‘same’ subservice’ from the slave and performs functions such as split work, call slaves, and combine results. It allows developers to simulate and test platforms, which have not yet been built, and simulate "disaster'' modes that would be too complex, costly, or dangerous to test with the real system.`.
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/hierarchical_architecture.htm)

In terms of operation, a virtual machine splits a programming languge or application environment from an execution platform. The main objective is to provide portability.

![virtual-machine-style-architecture](/images/articles/development/virtual-machine-style-architecture.png)
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/hierarchical_architecture.htm)


As it is stated at the TutorialsPoint article, the **hypervisor**, also called the virtual machine monitor, runs on the host OS and allocates matched resources to each guest OS. When the guest makes a system-call, the hypervisor intercepts and translates it into the corresponding system-call supported by the host OS. The hypervisor controls each virtual machine access to the CPU, memory, persistent storage, I/O, and the network.

This virtual machine architecture style is commonly found at:

- Suitable for solving a problem by simulation or translation if there is no direct solution.
- Sample applications include interpreters of microprogrmming, XML processing, script command language execution, rule-based system execution, Smalltakl and Java interpreter typed programming laguage.

And common examples of virtual machines are:

- Interpreters.
- Rule-basic systems
- Syntatic shells
- Command language processors

The **advantages of a Master-slave style**:

- Portability and machine platform independency.
- Simplicity of software development.
- Provides flexibility through the ability to interrupt and query the program.
- Simulation for disaster working model.
- Introduce modifications at runtime.

The **disadvantages of a Master-slave style**:

- Slow execution of the interpreter due to the interpreter nature.
- There is a performance cost because of the additional computation involved in execution.


#### Layered Style

In this approach, the system is decomposed into a number of higher and lower layers in a hierarchy, and each layer has its own sole responsability in the system:

- Each layer consists of  group of related classes that are encapsulated in a packaged, in a deployed component, or as a group of subroutines in the format of method library or header file.
- Each layer provides service to layer above it and serves as a client to the layer below i.e. request to layer **i+1** invokes the services provided by the layer **i** via the interface of layer **i**. The response may go back to the layer **i+1** if the task is completed; otherwise layer **i** continually invokes services from layer **i-1**.

Some applications that commonly uses this style:

- Applications that involve distinct classes of services that can be organized hierarchically.
- Any application that can be decomposed into application-speciffic and platform-speciffic portions.
- Applications that have clear devisions between core services, critical services, and use interface services, etc.


The **advantages of a Master-slave style**:

- Design based on incremental levels of abstraction.
- Provides enchancement independence as changes to the function of one layer affects at most two other layers.
- Separation of the standard interface and its implementation.
- Implemented by using component-based technology which makes the system much easier to allow for plug-and-play of new components.
- Each layer cn be an abstract machine deployed independently which support portability.
- Easy to decompose the system based on the definition of the tasks in a top-down refinement manner.
- Different implementations (with idential interfaces) of the same layer can be used interchangeably.

The **disadvantages of a Master-slave style**:

- Many applications or systems are not easily structured in a layered fashion.
- Lower runtime performance since a client's request or a response to client must go through pottentically several layers.
- There are also performance concerns on overhead on the data marshaling and fuffering by each layer.
- Opening of interlayer communication may cause deadlocks and "bridging" may cause tight coupling.
- 
Exceptions and error handling is an issue in the layered architecture, since faults in on layer must spread upwards to all calling layers.



### Interation-Oriented Architecture

The primary objective of interaction-oriented architecture is to separate the interaction of the user from data abstraction and business data processing.

There are 03 main modules:

1. **Data module**
2. **Control module**
3. **View presentation module**


And the Interation-Oriented Architecture can present itself into two major speciffic styles:

- **Model-View-Controler (MVC)**: this style doesn't have a clear hierarchical structure.
- **Presentation-Abstraction-Control (PAC)**: this is a agent-based hierarchical style.


#### Model-View-Controler (MVC) 

As it was stated above, MVC model decomposes the architecture into that 03 major modules and here this article there is an overview of the style[^1].

Some additional points to be made about this style may be the atempts to simplify the style:

1. **MVC-I**: it's a simpler version of the MVC architecture where the system is divided into two sub-systems:      
	1.1. The Controller-View: the controller-view acts as input/output interface and processing is done.        
	1.2. The Model: the model provides all the data and domain services.     
	1.3. The connections between Controller-View and Model can be designed in a pattern of subscribe-notify whereby the controller-view subscribes to model and model notifies controller-view of any changes.
2. **MVC-II**: this is a enhancement of the MVC-I in which the view modele and the controller are separate.   
	2.1. The Model still plays an active role as in MVC-I by providing all the core functionality and data supported by database.  
	2.2. The View module presents data while Controller module accepts input request, validates input data, initiates the model, the view, their connection, and also dispatches the task.


As a whole, the MVC patterns are effective for:

- Interative applications where multiple views are needed for a single data model and easy to plug-in a new or change interface view.
- For appliations where there are clear divisions between the modules so that different professionals can be assigned to work on different aspects of such applications concurrently.


The **advantages of the MVC style**:

- There are many MVC vendor framework toolkits available.
- Multiple views synchronized with same data model.
- Easy to plug-in new or replace interface views.
- Used for application developement where graphics expertise professionals, programming professionals, and database development professionals are working in a designed project team.

The **disadvantages of the MVC style**:

- Not suitable for agent-oriented applications such as interative mobile and robotics applications.
- Multiple pairs of controllers and views vased on the same data model make any data model change expensive.
- The division between the View and the Controller is not clear in some cases.



#### Presentation-Abstraction-Control (PAC)

In the PAC architecture style, the system is arranged into a hierarchy of many cooperation agents (the Triads). It was developed from MVC to support the application requirement of multiple agents in addition to interactive requirements.

Each agent has 03 components:

- **The Presentation component**: formats the visual and audio presentation of data.
- **The Abstraction component**: retrieves and processes the data.
- **The Control component**: handles the task such as the flow of control and communication between the other two components.

`The PAC architecture is similar to MVC, in the sense that presentation module is like view module of MVC. The abstraction module looks like model module of MVC and the control module is like the controller module of MVC, but they differ in their flow of control and organization.`
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/interaction_oriented_architecture.htm)

There are no direct connections between abstration component and presentation component in each agent. The control component in each agent is in charge of communications with other agents.


The **PAC with Multiple Agents**

`In PAC consisting of multiple agents, the top-level agent provides core data and business logics. The bottom level agents define detailed specific data and presentations.`
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/interaction_oriented_architecture.htm)

- Each agent has its own specific assigned job.
- For some middle level agents the interactive presentations are not required, so they do not have a presentation component.
- The control component is required for all agents through which all the agents communicate with each other.


![multiple-agent-in-pac-architecture](/images/articles/development/multiple-agent-in-pac-architecture.png)
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/interaction_oriented_architecture.htm)


Some applications that commonly uses this architecture style:

- Effective for an interative system where the system can be decomposed into many cooperating agents in a hierarchical manner.
- Effective when the coupling among the agents is expected to be loose so that changes on an agent does not affect other.
- Effective for distributed system where all the agents are distintly distributed and each of them has its own functionalities with data interaticve interfaces.
- Suitable for applications with rich GUI components where each of them keeps its own current data, and interactive interface, and needs to communicate with other components.


The **disadvantages of the PAC style**:

- Support for multi-tasking and multi-viewing.
- Support for agent reusability and extensibility.
- Easy to plug-in new agent or change an existing one.
- Support for concurrency where multiple agents are running in parallel in different threads or different devices or computers.

The **disadvantages of the PAC style**:

- Overhead due to the control bridge between presentation and abstraction and the communication of controls among agents.
- Difficult to determine the right number of agents because of loose coupling and high independence among agents.
- Complete separation of presentation and abstraction by control in each agent generate development complexity since communications between agents only take place between the controls of agents.


### Distributed Architecture

In distributed architectures, the components are scaled horizontaly to process multiple machines or **nodes**, and they `can cooperate with one another over a communication network in order to achieve a specific objective or goal`.
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/distributed_architecture.htm)


The basis of a distributed architecture is availability, and some other properties found in this pattern:

- A **distributed system** can be demonstrated by the client-server architecture which forms the base for multi-tier architectures; alternatives are the broker architecture such as CORBA, and the Service-Oriented Architecture (SOA).
- There are several technology frameworks to support distributed architectures, including .NET, J2EE, CORBA, .NET Web Services, AXIS Java Web Services, and Globus Gride services.



#### The Middleware Infrastructure

Middleware is an infrastructure that appropriately supports the development and execution of distributed applications. It provides a buffer between the applications and the network.

It sits in the middle of system and manages or supports the different compoents of a distributed system. Exemples are transactions processing monitors, data convertor and communication controllers, etc.

![middleware-platform-distributed-architecture](/images/articles/development/middleware-platform-distributed-architecture.png)
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/distributed_architecture.htm)


The **advantages of the Middleware Infrastructure style**:

- **Resource sharing **: sharing hardware and software resources.
- **Openness**: flexibility of using hardware and software of different vendors.
- **Concurrency**: concurrent processing to enhance performance.
- **Scalability**: increased throughput by adding new resources.
- **Fault tolerance**: the ability to continue in operation after a fault at a number of nodes.

The **disadvantages of the Middleware Infrastructure style**:

- **Complexity**: they are more complex than centralized systems.
- **Security risk**: the are more susceptible to external attack.
- **Managebility**: more effort required for system management.
- **Unpredictability**: unpredictable responses depending on the system organization and network load.

#### Client-Server Architecture

The client-server architecture is the most common distributed system architecture which decomposes the system into two major subsystems or logical processes:

1. **Client**
2. **Server**

In this article there is an overview of this architectural style [^1].

And below some additional points to be made about this style:

The **Thin-Client Model**:

In this thin-client model, all the application processing and data management is carried by the server. The client is simply responsible for running the presentational sorftware.

- Used when legacy systems are migrated to client server architectures in which legacy system acts as a server in its own right with a graphical interface implemented on a client.
- A major disadvantage is that a heavy processing load on both the server and the network.

The **Thick/Fat-Client Model**:

In this model, the server is only in charge for data management. The software on the client implements the application logic and the interactions with the system user.

- Most appropriate for new C/S systems where the capabilities of the client system are known in advance.
- More comples than thin-client model especially for management. New versions of the application have to be installed on all clients.

The **advantages of the Client-Server style**:

- Separation of responsibilities such as user interface presentation and busness logic processing.
- Reusability of server components and potential for concurrency.
- Siplifies the design and the development of distributed applications.
- It makes it easy to migrate or integrate existing applications into a distributed environment.
- It also makes effective use of reources when a large number of clients are accessing a high-performance server.

The **disadvantages of the Client-Server style**:

- Lack of heterogeneous infrastructure to deal with requirement changes.
- Security complications.
- Limited server availability and reliability.
- Limited testability and scalability.
- Fat clients with presentation and business logic together.


#### The Multi-Tier Architecture

The multi-tier architecture is a client-server architecture in which functions as presentation, application processing, and data management are physically separated.

And by separating an application into tiers, developers get the option of changing or adding specific layer, instead of reworking the entire application. So, it `provides a model by which developers can create flexible and reusable applications[...]The most general use of multi-tier architecture is the three-tier architecture. A three-tier architecture is typically composed of a presentation tier, an application tier, and a data storage tier and may execute on a separate processor.`.
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/distributed_architecture.htm)

The **Presentation Tier**

The presentation layer is the topmost level of the application by which users can access directly such as webpage or Operating System GUI (Graphical User Interface). The primary function of this layer is to translate the task s and results to something that the user can understand. It communicates with other tiers so that it places the results to the browser/client tier and all other tiers in the network.

The **Application Tier (Business Logic, Logic Tier, or Middle Tier)** 

The application tier coordinates the application, processes the commands, makes logical decisions, evaluation, and performs calculations. It controls an application's functionality by performing detailed processing. It also moves and processes data between the two surrounding layers.

The **Data Tier**

In this layer, information is stored and retrieved from the database or file system. The information is then passed back for processing and then back to the user. It includes the data persistence mechanisms (database servers, file shares, etc.) and provides API (Application Programming Interface) to the application tier which provides methods of managing the stored data.


![mult-data-tier-architecture](/images/articles/development/mult-data-tier-architecture.png)
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/distributed_architecture.htm)


The **advantages of the Multi-Tier style**:

- Better performance than thin-client approach and is simpler to manage than a thick-client approach.
- Enhances the reusability and scalability - as demands increase, extra servers can be added.
- Provides multi-threading support and also reduces network traffic.
- Provides maintainability and flexibility.

The **disadvantages of the Multi-Tier style**:

- Unsatisfactory testability due to lack of testing tools.
- More critical server reliability and availability.


#### The Observable Pattern

This is a pattern used for coordinating communication, that directly links differents objects that have some information dependency.

In this pattern, the objects are paired as **Subject** and **Observers**, where a subject object maintains a list of all its dependents objects, the observers, and it is also responsible to notify them of any change. 


#### The Broker Architecture

The **Broker Architectural style is a middleware architecture** used in distributed computing to coordinate and enable the communication between registered servers and clients.

It's a pattern that brings a layer of abstraction to the Observable Pattern, because the Broker Pattern also creates a coordinated communication between different sides, but in this case there is a intermediate module between the senders of information and the receivers, and this module is the Broker.

Here, then, the communication takes place through a middleware system called an object request broker (software bus):

- Client and the server do not interact with each other directly. Client and server have a direct connection to its proxy which communicates with the mediator-broker.
- A server provides services by registering and publishing their interfaces with the broker and clients can request the services from the broker statically or dynamically by look-up.
- CORBA (Common Object Request Broker Architecture) is a good implementation example of the broker architecture.

The **Components of the Broker Architectural Style**

There are 04 components:

1. **Broker**: the broker is responsible for coordinating communication, such as forwarding and dispatching the results and exceptions. It can be either an invocation-oriented service, a document or message - oriented broker to which clients send a message:    
	1.1. It's responsible for brokering the service requests, locating a proper server, transmiting requests, and sending responses back to clients.    
	1.2. It retains the servers' registration information including their functionality and services as well as location information.   
	1.3. It provides APIs for clients to request, servers to respond, registering or unregisering server components, transfering messages, and location servers.
2. **Stub**: the stubs are generated  at the static compilation time and then deployed to the client side which is used a proxy for the client.  
	2.1. The client-side proxy acts as a mediator between the client and the broker and provides additional transparency between them and the client; a remote object appears like a local one.   
	2.2. The proxy hides the IPC (Inter-Process Communication) at protocol level an performs marshaling of parameter values and un-marshaling of the results from the server.
3. **Skeleton**: the skeleton is generated by the service interface compilation and then deployed to the server side, which is used a proxy for the server.    
	3.1. The server-side proxy encapsulates low-level system-specif networking functions and provides high-level APIs to mediate between the server and the broker.   
	3.2. It receives the requests, unpacks the requests, unmarshls the method arguments, calls the suitable service, and also marshals the result before sending it back to the client.
4. **Bridge**: the bridge can connect two different networks based on different communication protocols. It mediates different brokers including DCOM, .NET remote, and Java CORBA brokers.   
	4.1. Bridges are optional components, which hides the implementation details when two brokers interoperate and take requests and parameters in one format and translate them to another format.


The **Broker Implementation in CORBA**

`CORBA is an international standard for an Object Request Broker – a middleware to manage communications among distributed objects defined by OMG (object management group).`
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/distributed_architecture.htm)


#### Service-Oriented Architecture (SOA)

A **service** is a component of business functionality that is well-defined, independent, published, and available to be used via a standard programming interface.

The connection between services are conducted by common and universal message-oriented protocols such as the SOAP Web Service Protocol, which can deliver requests and responses between services loosely.

The **Service-Oriented** architecture is a client/server design which support business-driven IT approach in which an application consists of software services and software service consumers (also known as clients or services requesters).


The **Features of SOA**

A service-oriented architecture provides the following features:

- **Distributed Deployment**: it exposes enterprise data and business logic as loosely, coupled, discoverable, structured, standard-based, coarse-grained, stateless units of functionality called services.
- **Composability**: it assembles new processes from existing services that are exposed at a desired granularity through well defined, published, and standard complaint interfaces.  
- **Interoperability**: it shares capabilities and reuse shared services across a network irrespective of underlying protocols or implementation technology.
- **Reusability**: it chooses a service provider and access to existing resources exposed as services.


**The Functional Aspect of SOA**

- **The transport layer**: it transports the service requests from the service consume to the service provider and service responses from the service provider to the service consumer.
- **The Service Communication Protocol**: it allows the service provider and the service consumer to be able to communicate with each other.
- **The Service Description**: it describes the service and the data required to invoke it.
- **The Service**: the actual functionality serviced.
- **The Business Process**: it represents the group of services called in a particular sequence associated with the particular rules to meet the business requirements.
- **The Service Registry**: it contains the description of data which is used by service providers to publish their services.


**The Quality Aspect of SOA**

- **The Police**: it represents the set of protocols according to which a service provider make and provide the service to consumers.
- **The Security**: it represents the set of protocols required for identification and authorization.
- **The Transaction**: it provides the surety of consistent result. This means, if we use a group of services to complete a single business function, either all must complete or none of them should complete. 



The **advantages of the Service-Oriented Architecture (SOA) style**:

- **Loose coupling** of service-orientation provides great flexibility for enterprises to make use of all available service resources irrespective of platform and technology restrictions.
- Each service component is independent from other services due to the stateless service feature.
- The implementation of a service will not affect the application of the service as long as the exposed interface in not changed.
- A client or any service can access other services regardless of their plarform, technology, vendors, or language implementations.
- **Reusability** of assets an services since clients of a service only need to know the public interfaces and service composition.
- SOA based business application development are much more efficient in terms of time and cost.
- Enhances the **scalability** and provide standard connection between systems.
- Efficient and effective usage of "Business Services".
- Integration becomes much easier and improved intrinsic **interoperability**.
- **Abstracts complexity** for developers and energize business processes to end users.
  
  
- read more about SOA:
- `Service Oriented Architecture (SOA)` [JavaTPoint](https://www.javatpoint.com/service-oriented-architecture)



### Component-Based Architecture

Component-based architecture focuses on the decomposition of the design into individual function or logical components that well-defined communication interfaces methods, events, and properties. It provides a higher level of abastraction and divides the problem into sub-problems, each associated with component partions.

**The primary objective of component-based architecture is to ensure component reusability. A component encapsulates functionality and behviors of a software element into a reusable and self-deployable binary unit.**
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/component_based_architecture.htm)


#### Definition, Views and Characteristics of a Component?


**The Component**

A component is a modular, portable, replaceable, and reusable set of well-defined functionality that encapsulates its implementation and exporting it as a higher-level interface.

**The Software Component**
`A software component can be defined as a unit of composition with a contractually specified interface and explicit context dependencies only. That is, a software component can be deployed independently and is subject to composition by third parties.`
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/component_based_architecture.htm)


**Views of a Component**

A component can have three different views:

1. **Object-Oriented view**: a component is viewd as a set of one or more cooperating classes. Each problem domain class (analysis) and infrastructure class (design) are explained to identify all attribute and operations that apply to its implementation. It also involves defining the interfaces that enable classes to communicate and cooperate.
2. **Conventional view**: it's viewed as a functional element or a module of a program that integrates the processing logic, the internal data structures that are required to implement the processing logic and an interface that enables the component to be invoked and data to be passed to it.
3. **Process-Related view**: in this view, instead of creating each component from scratch, the system is building from existing components maintained in a library. As the software architecture is formulated, components are selected from the library and used to populate the architecture.


**Characteristics of Component**

- **Reusability**: they should be designed to be used in different applications.
- **Replaceble**: they shoul be freely subtituted with other similar components.
- **Not Context Specific**: they are designed to operate in different environments and contexts.
- **Extensible**: it should be able to extends from existing components to provide new behavior.
- **Encapsulated**: a component should not expose internal details, but it should depict a interface, which would allow the caller to use its functionalities.
- **Independent**: components should have minimal dependencies on other components. 


#### Principles of Component-Based Design

These are some concepts and guidelines that help the developer to avoid the introduction of erros:

- To decompose the component into some unity and encapsulate it to be reusable.
- Define interfaces for the components that hide its detailed implementation.
- A component should be able to extends its functions without the need to make internal code or design modifications.
- The dependency should be on abstract components and not on concrete ones, otherwise it would increase difficulty in expendability.
- The connections should be by connectors, which are ruled by the interfaces.
- The interactions between components could take the form of method invocations, asynchronous invocations, broadcasting, message driven interactions, data stream communications, and other protocol specific interations.
- For a server class, specialized interfaces should be created to serve major categories of clients. Only those operations that are relevant to a particular category of clients should be specific in the interface.
- A component can extend to other components and still offer its own extension points. It's the concept of plug-in based architecture. This allows a plugin to offer another plugin API.


#### Component-Level Design Guidelines   

1. Create naming conventions that all from the top with the architectural model and mirror them into the component-level model.
2. Attain the names form the business model and ensures that they have meaning to all stakeholders.
3. Create atomic entities and avoid depencies from other entities, what would prevent its independently existence.
4. Models any dependencies from left to right and inheritance from top (base class) to bottom (derived classes).
5. Model any component dependencies as interfaces rather than representing them as a direct component-to-component dependency.


#### Conducting Component-Level Design

Recognizes all design classes that correspond to the problem domain as defined in the analysis model and architectural model:

1. Recognizes all design classes that correspond to the infrastructure domain.
2. Describes all design classes that are not acquired as reusable components, and specifies message details.
3. Identifies appropriate interfaces for each component and elaborates attributes and defines data types and data structures required to implement them.
4. Describes processing flow within each operation in detail by means of pseudo code or UML activity diagrams.
5. Describes persistent data sources (databses and files) and identifies the classes required to manage them.
6. Develop and elaborates behavioral representations for a class or component. This can be done by elaborating the UML  state diagrams created for the analysis model and by examining all use cases that are relevant to the design class.
7. elaborates deplyment diagrams to provide additional implementation detail.
8. Demonstrate the location of key packages or classes of components in a system by using class instances and designating specific hardware and operating system environment.
9- The final decision can be made by using established design principles and guidelines. Experienced designers consider all (or most) of the alternative design solutions before setting on the final design model.


#### Advantages of the Component-Based Architecture

- **Ease of deployment**: new versions should be created from updating some parts of the system not affecting the other parts. 
- **Reduced cost**: because of the reuse and the use of third-party components also.
- **Ease of development**: components implementing well-known interfaces that provide defined functionality and do not creates co-dependencies into the parts.
- **Reusability**
- **Modification of technical complexity**: a component modifies the complexity through the use of a component container and its services.
- **Reliability**
- **System maintenace and evolution**
- **Independency and Flexibility**: not only in terms of the component abstraction, but also during development with groups working in parallel.


### User Interface

The concept of a Interfaces might imply a couple of important elements related to software engineering:

1. As an instrument to wrap a component or module of a system, that hides internal details and only exposes the necessary ones.
2. As an method to avoid creating unnecessary co-dependence between components or modules.
3. As a mean of interaction between the component or module with other elements:    
	3.1. And if the interaction is directed to the final user, it would even imply a rich visual interaction.     
	3.2. As an rich interaction, the interface has to accept the user's input and display the outputs.


For that matter, a the special kind of interface that's related to the user plays a crucial role in any system:

1. **It will be seen first** by the users, and even before he can convey any portion of the software internal architecture.
2. **A good interface should help the user to understand and should attract him to use the software system as well**. A bas UI may cause market failure against the competition of software system.
3. **UI has its systax and semantics**. The syntax comprises component types that may dialog with the user (texts, icons, buttons, etc.), while usability summarizes the semantics of the UI.
4. **There are basically two kinds of user interface**:    
	4.1. Textual   
	4.2. Graphical
5. **Different domains imply different styles of interfaces**: and even subdomains, just like there is subdomains of business models for a web page. 


#### Graphical User Interface

The Graphical User Interface is the most common type of user interface because it is intended for interaction with any kind of user, regardless his technical skills.

It is also known as **WIMP Interface**, because it makes use of the first letters of these components:

1. **Window**: the visual screen area where the application should interact with the user.
2. **Icon**: a picture or symbol which is use to represent a software application or hardware device.
3. **Menus**: a list of options from which a user can choose from the requirements of the system.
4. **Pointers**: a symbol such as an arrow which moves around the screen area and helps the selections of the user.


#### Development Process of the User Interface

There are 04 stages in the process of developing the User Interface:

1. **Interface analysis**: it concentrates on the study to understand the user, the tasks, the business and the style of the visual system.
2. **Interface design**: it defines the set of interface objects, actions, and their screen representations that enable the user to perform all the defined tasks in a manner that meets every usability objective defined for the system.
3. **Interface construction**: it starts with the prototype that enables usage scenarios to be evaluated and continues with the development tools to complete the construction.
4. **Interface validation**: it focuses on the ability of the interface to implement every user task correctly, accommodate all task variations, to achieve all general user requirements, and the degree to which the interface is easy to use and easy to learn.


#### Design of the User Interface        

The design of the user interface is the process to bring the user into the system, and it `starts with task analysis which understands the user's primary tasks and problem domain. It should be designed in terms of User's terminology and outset of user's job rather than programmer's`.
[TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/user_interface.htm)

Some steps in the process of the design:

1. **The analysis** of the user interface: to study and understand the user.      
	1.1. Who is this user.   
	1.2. The tasks that the user should be performing.   
	1.3. The content that should be displayed to that user.    
	1.4. The work environment in which the user is going to be interatction with the system.
2. Proper or good UI designs works from the user's capabilities and limitations not the machines.   
3. The tasks to be performed by the user can be divided into 04 different levels:    
	3.1. **The conceptual level**: it describes the basic entities considering the user's view of the system and the actions upon them.     
	3.2. **The semantic level**: it describes the functions performed by the system (i.e. the description of the functional requirements of the system, but does not address how the user will invoke the functions).   
	3.3. **The syntactic level**: it describes the sequences of inputs and outputs required to invoke the functions from the requirements.  
	3.4. **The lexical level**: it determines how the inputs and the outputs are actually formed from primitive hardware operations.
4. **The design** of the user interface: it is an iterative process, where all the iteration explains and refines the information developed in the preceding steps:      
	4.1. To define user interface objects and actions (operations).  
	4.2. To define (user actions) that will cause the state of the user interface to change.  
	4.3. To indicate how the user interprets the state of the system from information provided through the interface.   
	4.4. To describe each interface state as it will actualy look to the end user.


#### Design Principles for the User Interface 

1. **User Centered**
2. **Simple and Intuitive**
3. **Place User in Control**: do not force users to complete predefined sequences. Give them options (to cancel, to save, and to return to where they left of). Use appropriate user terms for the information and give back feedback from the actions.
4. **Transparency**: the interface should aim the required actions, and not to portrai how this actions are made or are described at low level.
5. **Consistency**: all the elements and all its work flow should be the same all around.
6. **Integration**: the software system should integrate smoothly with other applications such as MS notepad and MS-Office. It can use Clipboard commands directly to perform data interchange.
7. **Component Oriented**: it should be modular.
8. **Customizable**: The architecture of whole software system incorporates plug-in modules, which allow many different people independently extend the software. It allows individual users to select from various available forms in order to suit personal preferences and needs.
9. **Reduce Users' Memory Load**: do not force users to have to remember and repeat what the computer should be doing for them.   
	9.1. For example, when filling in online forms, customer names, addresses, and telephone numbers should be remembered by the system once a user has entered them, or once a customer record has been opened.
10. **Separation**: the UI must be separated from the logic of the system through its implementation for increasing reusability and maintenability.



### Further Reading

`Gang of Four book Design Patterns: Elements of Reusable Object-Oriented Software` (Gamma, Helm, Johnson, Vlissides)   
`Learning JavaScript Design Patterns.` (Addy Osmani)

[10 Common Software Architectural Patterns in a nutshell - Towardsdatascience.com](https://towardsdatascience.com/10-common-software-architectural-patterns-in-a-nutshell-a0b47a1e9013)

[5 essential patterns of software architecture - Red Hat](https://www.redhat.com/architect/5-essential-patterns-software-architecture)

[Types of Software Architecture Patterns - GeeksforGeeks](https://www.geeksforgeeks.org/types-of-software-architecture-patterns/)

[The Comprehensive Guide to JavaScript Design Patterns - Toptal.com](https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns)

### References


[Software Design - JavaTPoint](https://www.javatpoint.com/software-engineering-software-design)

[Software Architecture & Design Tutorial - TutorialsPoint](https://www.tutorialspoint.com/software_architecture_design/index.htm)

[Difference Between Pub-Sub Pattern and Observable Pattern - Medium.com](https://medium.com/easyread/difference-between-pub-sub-pattern-and-observable-pattern-d5ae3d81e6ce)


[^1]:software-architecture-patterns-overview-2022-02-18

[^2]:front-end-development-patterns-overview-2022-03-04

[^3]:front-end-architectures-2022-03-05

[^4]:advanced-message-queuing-protocol-2022-03-17
