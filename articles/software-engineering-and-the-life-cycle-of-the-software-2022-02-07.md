---
author: 'Marcus Vinicius Richa'
title: 'Software Engineering and the Life Cycle of  the Software'
date: '2022-02-07'
subject: 'development-articles'
description: 'Introductory ideas about software engineering, presenting the different life cycles of software and the main methodology of development.'
---

# Software Engineering and the Life Cycle of  the Software.

1. ##### Introduction  
2. ##### Why is Software Engineering required?
3. ##### Software Processes
4. ##### Software Versus Program
5. ##### Software Development Life Cycle (SDLC)
	5.1. SDLC Cycle
9. ##### Further Reading
10. ##### References

### Introduction

According to the plataform JavaTPoint, software engineering `is the application of scientific and practical knowledge to invent, design, build, maintain, and improve frameworks, process, etc.`. 

And the site Guru99 presents a software crises of the 1960s, when many projects were deemed to fail because its excessive costs, its complexities, its mantainability, the difficulty to scale, etc...

So, in response to this crise, through the 1970s till 1990s, emerged a widespread use of Principles, Patterns, Guidances and Management Standards.

### Why is Software Engineering required?

According to JavaTPoint:

- To manage Large software
- For more Scalability
- For Cost Management
- To versioning of the software
- For better quality Management

So, in this day and age, software commonly grow in size, and also commonly has to be updated to perform new tasks, and a better management is the key for a successful software enterprise.



![importance-of-software-engineering](/images/articles/development/importance-of-software-engineering.png)
[**JavaTPoint**](https://www.javatpoint.com/software-engineering-tutorial)


### Software Processes

Just as Software represents a part of the Information Technology that is formed by the programs and its related documents, in opposition to the Hardware systems that constitutes the machinery, a Software Process is the set of activities associated to the creation of the software product.

In this manner, the JavaTPoint tutorial presents 04 basic processes:

1. Software specification: that is it definition and its necessary constraits.
2. Software development: that is the action of assembling of all the definied parts and applying all the defined constraints already determined in the spefication.
3. Software validation: that is the process to confirm the performance of all functionalities defined.
4. Software evolution: that is the process of potential scaling of the application or its adaptation to other needs.


Also, JavaTPoint tutorial bring 03 kinds of models that are commonly used to divide and represent all the processes involved in the software process.

The first one is the **Workflow Model** being the most higher level that are more related with the series of activies performed by humam actions.

The second one is more lower level being the **Dataflow Model** or **Activiy Model** that is used to represent the data and all the necessary transformations it has to undergo to bring the desired functionality.

Lastly, the **Role/Action Mode** that works to describe the roles of the people involved in the production of the software.


And besides the use of these kinds of abstract models, there are some methodologies, as well, that creates some presets and patterns to bring together all the efforts:

1. **The Waterfall Approach**: this is a linear method that implies a series of separated phases that supersede each other and can repeat  until the product is finalised.
2. **The Rapid Application (RAD Model)**: adopts the Waterfall Approach in a sprint mode for rapid realeses.
	2.1. Business Modeling
	2.2. Data Modeling
	2.3. Process Modeling
	2.4. Application Modeling
	2.5. Testing and Turnover
3. **Iterative Model** or **The Evolutionary Development**: this is a more complex method because it interleaves a set of operations that developes together producing intermediary functional products and bound together till the end of the project when they present the final product.
4. **The Formal Transformation Method**: this method utilize some kinds of mathematical props that represents the product with its functionalites and it is continually transformed untill it reaches the final desered system.
5. **The System Assembly from reusable components**: this method implies the separation of the products its smaller parts that are later assembled together to create the final product, or even many instances of it.
6. **Spiral Mode**: applies elements of many of the other models in a spiral technique to fast prototyping and concurrence in design.
7. **V-Model**: this is a model that groups testing and developing in parallel.
8. **The Incremental Model**: this model revisits the Waterfall model to plead for a series of short linear Waterfall cycles.
9. **Agile Model**: in this model, there is also the interaction of development and testing that looks for short and small incremental builds.
	9.1. Pleads for the difficulty to treat requirements of software in advance.
	9.2. Design and Development go interleaved.
	9.3. Also pleads that Analysis, Design, Development and Testing are not as predictabe as some may deem.
10.**The Big Bang Model**: deem most of its resources into development and coding, with only the utterly necessary planning.
	10.1. `The requirements are understood and implemented when they come.`
	10.2. Its a more feaseble model for small projects and academic projects.
11. **Prototype Model**: works with a iteration in a 'quick design' or prototype which servers as the visual bond between developers and client, and when the client is happy with the system, then it is converted into a software, with also quality and securities considerations.


![sdlc-models](/images/articles/development/software-life-cycle-models.png)
[**JavaTPoint**](https://www.javatpoint.com/software-engineering-tutorial)


### Software Versus Program

Finaly, in its introductory part, the JavaTPoint tutorial contrasts these two terms to produce a more complex definition.

So, a Software is than used as a broader term that involves not only a Program, but also its Documentation and its Operating Procedures.


```
Software = Program + Documentation + Operating Procedures
```

In that instance, a Documentation is the set of manuals related to the creating effort of the products, while the Operating Procedures gives the operational manuals, for its uses and for handling its errors also.


### Software Development Life Cycle (SDLC)


`A software life cycle model (also termed process model) is a pictorial and diagrammatic representation of the software life cycle. A life cycle model represents all the methods required to make a software product transit through its life cycle stages. It also captures the structure in which these methods are to be undertaken.`
[JavaTPoint](https://www.javatpoint.com/software-engineering-software-development-life-cycle)


There is pragmatic importance in the adoption of this methodology of the software life cycle, because it servers to unify the efforts to follow one common path, whaterver is the one that is chosen.

And the tutorial gives a negative exemple, when there is no formal path bringing all the developers together that is their complete freedom to start some job at any given point, that may be designing, or testing, or documenting and even going direct to the coding, all these that `would be on of the perfect methods for project failure`. 
[JavaTPoint](https://www.javatpoint.com/software-engineering-software-development-life-cycle)


**On the other side of the problem, the Lyfe Cycle create phases and very distinct entry-point and its fullfillment.**


#### SDLC Cycle

The Software Development Life Cycle divides the process in 07 phases:

1. Requirement Analysis
	1.1. This is a required phase and one of the most important, because it involves the senior members of the team which are going to define the general plan, the necessary quality assurance, client meetings, etc...
	1.2. At the end of this phase a document is created and is then set to be followed through the production and for costumer reference.

2. Defining
	2.1. This phase starts after the precedent one and has that document created to be converted into another document for Software Requirement Specification (SRS) which has in it self all the requirements for the product till its accomplisment.

3. Designing
	3.1. This phase has the objective to implement a specific design for the software based in the two previous documents.
4. Coding (Development)
	4.1. In this phase the software begins to be implemented with the actual coding being done.

5. Testing
	5.1. Here the software is tested against the all the requirement to make sure of its compliance.

6. Deployment
	6.1. In this phase, once the software is certified, it is deployed.
	
7. Maintenance
	7.1. Here is the phase when the software is already being used by the clients and is meeting with the real concrete issues that may appear from time to time.



### References


[What is Software Engineering? Definition, Basics, Characteristics - Guru99](https://www.guru99.com/what-is-software-engineering.html)

[Software Engineering Tutorial  - JavaTPoint](https://www.javatpoint.com/software-engineering-tutorial)


