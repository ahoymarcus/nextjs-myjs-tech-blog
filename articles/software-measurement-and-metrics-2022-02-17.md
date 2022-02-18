---
author: 'Marcus Vinicius Richa'
title: 'Software Measurement and Metrics'
date: '2022-02-17'
subject: 'development-articles'
description: 'The need of software metrics and measurement are related to: 1. Define quality for the current product or process; 2. Anticipate future qualities for the current product or process; 3. Enhance the quality of a product or process; 4. Regulate the state of the project in relation to budget and schedule.'
---

# Software Measurement and Metrics

1. ##### Introduction  
2. ##### Types of Software Measurement
3. ##### The Metrics    
	3.1. Characteristics of Software Metrics      	
	3.2. Classification of Software Metrics      
	3.3. Scope of Software Metrics      
	3.4. Advantages of Software Metrics      
4. ##### Size Oriented Metrics   
	4.1. Line of Code Metrics (LOC)        
	4.2. Halstead's Software Metrics        
	4.3. Objectivesof Functional Point Analysis (FPA)   
	4.4. Extended Function Point (EFP) Metrics    
	4.5. Data Structure Metrics         
	4.6. Information Flow Metrics       
	4.7. Cyclomatic Complexit       
5. ##### Case Tools for Software Metrics
6. ##### Further Reading
7. ##### References

### Introduction

The use of measurements to qualify the software product and to attribute to this qualities patterns and processes of standardization.

The need of Software Measurement:

1. Define quality for the current product or process.
2. Anticipate future qualities for the current product or process.
3. Enhance the quality of a product or process.
4. Regulate the state of the project in relation to budget and schedule.


### Types of Software Measurement

There are 2 types of software measurements:

1. **Direct Measurement**: in direct measurement the product, process, or any other thing that is directly measured using some kind of standard scale.
2. **Indirect Measurement**: in direct measurement the quantity or quality to be measured is measured using related parameter, i.e. by use of reference.


### The Metrics

A metric is a measurement of the level that any imput belongs to a system product or process and there are 4 functions of management that have its similars counterparts at software metrics:

1. Planning
2. Organizing
3. Controlling
4. Improving

#### Characteristics of Software Metrics

1. **Quantitative**: metrics must possess quantitative nature, that is, metrics should be able to be expressed in values.
2. **Understandable**: there should be some clear definition for its meaning.
3. **Applicability**: it should be applicable since the initial phases of development.
4. **Repeatable**: the metric should be consistent between repeatable measurements.
5. **Economical**: computation of metrics should be economical.
6. **Language independent**: a metric should not depend on any speciffic programming language.


#### Classification of Software Metrics

1. **Product metrics**: are used to describe and evaluate the state of the product itself.
2. **Process metrics**: are used to describe and evaluate the actions and tasks related to the development and to maintainance of the product being implemented: 
	2.1. Methods   
	2.2. Techniques    
	2.3. Tools    
3. **Project metrics**: this should describe and evaluate the characteristics and execution of the project:      
	3.1. Number of sotware developers     
	3.2. Staffing pattern over the life cycle of sortware      
	3.3. Cost and schedule     
	3.4. Productivity     


### Scope of Software Metrics

Some activies related to software metrics:

1. **Cost and Effort estimation**: these models have been proposed to predict the project cost during early phases in the software life cycle.    
	1.1. Boehm's COCOMO model      
	1.2. Putnam's slim model    
	1.3. Albrechts function point model    
2. **Productivity measures and model**: productivity can be considered as a function of the value and the cost.
3. **Data collection**: data collection can be view not only as a process of designing information on charts and graphs, but also as a essencial part of scientific investigation of relationships and trends.
4. **Quanlity models and measures**: these are models developed for the measurement of the quality of a prodect and that is a very important part of the concept of productivity.
5. **Reliability models**: these models are more set to tackle questions related to the validity of the systems snd to predictic when they could fail.
6. **Performance and evaluatioin models**: these are models that also relate to quality, but that use externally obervable propertities like timing and rates/frequency.
7. **Structural and complexity metrics**: also models that relate to quality and seems to enphasise and describe internal parts of the system.
8. **Capability - maturity assessment**: these kinds of model are directed towards the organization and their capabilities to deliver the contracted system given some metrics likes cost, complexit, etc...
9. **Management by metrics**: also for qualifying management are metrics important.
10. **Evaluation of methods and tools**: This depends on the experimental design, proper identification of factors likely to affect the outcome and appropriate measurement of factor attributes.


#### Advantages of Software Metrics

- Comparative study of the design methodologies of software systems.
- To compair and evaluete the capabilities and the productivy of people involved in software development.
- In verification of compliance of the software systems requirements and specifications.
- In helping making decisions upon a software or with the process to build it.
- In providing feedback to software managers about progress, etc...


### Size Oriented Metrics


#### Line of Code Metrics (LOC)

This is considered one of the most common metric in the range of the Size-Oriented metrics, and it's also the oldest method from the period of languages like FORTRAN and COBOL.

More than that, LOC is dependent of the kind of language involved, and a language like Assembly would be considered more productive and connot apply to projects that deal with GUI-based programming.

`The more expressive is the programming language, the lower is the productivity.`
[JavaTPoint](https://www.javatpoint.com/software-engineering-size-oriented-metrics)


Pattern of productivity: KLOC / EFFORT

1. Advantages of LOC: very simple measure
2. Disadvantages of LOC:       
	2.1. It's defined on the code. For example, it cannot measure the size of the specification.    
	2.2. It only characterize size, but does not account functionality or complexity.     
	2.3. Bad software design can cause excessive line of code.      
	2.4. It's language dependent.     
	2.5. Users cannot easily understand it.      


#### Halstead's Software Metrics

In the article, (Halstead's Software Metrics)[https://www.javatpoint.com/software-engineering-halsteads-software-metrics], it is said that according to Halstead, `A computer program is an implementation of an algorithm considered to be a collection of tokens which can be classified as eitther operator or operand.`

Thus, in this metrics it would be possible to set as measures:

- **n1 = count of unique operators.**
- **n2 = count of unique operands.**
- **N1 = count of total occurrences of operators.**
- **N2 = count of total occurrences of operands.**

So, in terms of the total tokens used, the size of a program can be expresssed as **N = N1 + N2**

And the Halstead metrics are:

1. **Program Volume (V)**: the unit of measurement of volume is the standard unit for size 'bits'. It's the actual size of a program if a uniform binary encoding for the vocabulary is used.
2. **Program Level (L)**: the value of 'L' ranges between _zero_ and _one_, with _L=1_ representing a program written at the highest possible level (i.e., with minumum size)
3. **Program Difficulty**: the difficult leve or error-proneness (D) of the program is proportional to the number of the unique operator in the program.
4. **Programmming Effort (E)**: the unit of measurement of 'E' is elementary mental discriminations.
5. **Estimated Program Length**: according to Halstead, `The first Hypothesis of software science is that the length of a well-structure program is a function only of the number of unique operator an operands`.
6. **Potentil Minimum Volume**: the potential minimum volume 'V*' is defined as the volume of the most short program in which a problem can be coded.
7. **Size of Vocabulary (n)**: the size of the vocabulary of a program, which consists of the number unique tokens used to build a program, is defined as: **n = n1 + n2**
8. **Language Level**: shows the algorithm implementation program language level. The same algorithm demands additional effort if it is written in a low-level program language. For example, it is easier to program in Pascal than in Assembler.



![halstead-metrics-example](/images/articles/development/halstead-metrics-example.png)
[JavaTPoint](https://www.javatpoint.com/software-engineering-halsteads-software-metrics)


#### Functional Point (FP) Analysis

Initially developed by Allan J. Albrecht in 1979 at IBM and further modified by the International Functional Point Users Group (IFPUG).

It's used to make estimation of the software project, including its testing in terms of functionality or function size of the software product.

**Objectivesof Functional Point Analysis (FPA)**

The basic and primary purpose of the FPA is to measure and provide the sortware application functional size to the client or on his request. Further it's used to measure the software project development along with its maintainance.

1. **FPs of an application**: is found by counting the number and types of functions used in the applications.
2. **FP characterizes**: the complexity of the software system and hence can be used to depict the project time an dthe manpowaer requirement.
3. **The Effort required to develop the project**: depends on what the software does.
4. **FP is programming language independent**
5. **FP method is used for**: data processing systems and business systems.
6. **There are a set of Weights that are applied**

**Note**: see some examples of the use from these metrics at [JavaTPoint](https://www.javatpoint.com/software-engineering-functional-point-fp-analysis) 


#### Extended Function Point (EFP) Metrics

The Functional Point metric was further extended to compute also:

1. **Feature points**
2. **3D function points**

**Feature Points**

1. **Feature point**: it is the superset of function point measure that can be applied to systems and engineering software application.
2. **The feature points are used**: in those applications in which the algorithm complexit is high like real-time systems where time constraints are there, embedded systems, etc...
3. **Feature points are computed**: by conting the information domain values and are weighted by only single wight.
4. **Feature points includes**: another measurement parameter-ALGORITHM.
5. **Funtion point and Feature point both represents**: only system functionality only.
6. **For real-time applications that are very complex**: the feature point up to 20 and 35% higher than the basic count.

**3D Function Points**

The three dimensions that may be used is: data dimension, functional dimensional and control dimension.

1. **The Data Dimension**: is evauated as FPs.
2. **The Functional Dimension**: adds another feature-Transformation, that is, the sequence of steps which transforms input to output.
3. **The Control Dimension**: adds another feature-Transition that is defined as the total number of transitions between states. A state represents some externally observable mode.

**Note**: see some examples of the use from these metrics at [JavaTPoint](https://www.javatpoint.com/software-engineering-extended-function-point-efp-metrics) 


#### Data Structure Metrics

To work with **data** is a essential part of the functionality of a sortware, and it is present either:

1. As external data for input in a system.
2. As internal data representing the states of a system.
3. As the result of computations which lead to the output o a system.

And that's why the importance of capturing the amount of data **inputed** and **processed** by the system. And the counting of this data is called Data Structure Metrics.

And here a 04 kind of structures to be computed to calculate the effort and time to complet a project:

1. **The Amount of Data**:         
	1.1. Number of Variables        
	1.2. Number of Operands        
	1.3. Total number of occurence of the variable    
2. **The Usage of Data within a Module**: this measure follow the metric of the average number of live variables. And a varible is 'live' from its first to its last reference within the procedure.
3. **Program Weakness**: program weakness depends on its Modules weakness. If Modules are weak (less Cohesive), then it increases the effort and time metrics required to complete the project.
4. **Sharing of Data among Module**: as the data sharing between the Modules increases (higher Coupling), no parameter passing between Modules also increased. As a result, more effort and time are required to complete the project. So Sharing Data among Module is an important metrics to calculate effort and time.


#### Information Flow Metrics

These are another set of metrics that revolves around the Component and its works as the individual unit from the system:

1. **Component**: any element identified by decomposing a system/software into it's constituents parts.
2. **Cohesion**: the degree to which a component performs a single function.
3. **Coupling**: the term used to describe the degree of linkage between one component to others in the same system.

`Information flow metrics deals with this type of complexity by observing the flow of information among systems components or modules. This metrics is given by Henry and Kafura. So it is also known as Hery an Kafura's Metric`.[JavaTPoint](https://www.javatpoint.com/software-engineering-information-flow-metrics)

It's two factors:

1. **The complexit of the procedure code itself**: as the article states, this complexit is related with the traditional metric Line of Code (LOC).
2. **The complexit due to procedure's connections to its environment**: for this second complexity the developers created the concepts of **FAN-IN** and **FAN-OUT**.


**FAN-IN**: this is the number of local flows into that procedure plus the number of data structures from which this procedure retrieve information.   

**FAN-OUT**: this is the number of local flows from that procedure plus the number of data structures which that procedure updates.    

```
Procedure Complexit = Length * (FAN-IN * FAN-OUT) ** 2 
```

#### Cyclomatic Complexit

Developed by Thomas J. McCabe in 1976, the Cyclomatic Complexity interprets a computer program as a set of a strong connected directed graph where **nodes** represent parts of the source code and **archs** represent possible control flow transfers during program execution. 

`In this metric, the complexit of a software can be correlated with the topological complexit of a graph and from it a developer can measure and control the number of paths through a program.`

**How to Calculate Cyclomatic Complexity?**

McCabe proposed the cyclomatic number, V (G) of graph theory as an indicator of software complexit. The cyclomatic number is equal to the number of linearly independent paths through a program in its representation. For a program control graph G, cyclomatic number, V (G), is given as:

```
V (G) = E - N + 2 * P
```

**Where**:

- **E**: the number of edges in graph G.
- **N**: the number of nodes in graph G.
- **P**: the number of connected components in graph G.

![software-metric-cyclomatic-complexity](/images/articles/development/software-metric-cyclomatic-complexity.png)
[JavaTPoint](https://www.javatpoint.com/software-engineering-cyclomatic-complexity)


**Properties of Cyclomtic Complexity**

Following are the properties of Cyclomatic Complexity:

1. **V (G)** is the maximum number of independent paths in the graph.
2. **V (G)** >= 1
3. **G** will have one path if **V** (G) = 1
4. Minimaze complexity to 10


### Case Tools for Software Metrics

Many CASE tools (Computer Aided Software Engineering tools) exist for measuring software. They are either open source or are paid tools. 


Here, some of them:

1. **Analyst4j tool**: from the Eclipse platform for Java programs.
2. **CCCC**: it is an open source command-line tool that analysis C++ and Java.
3. **Chidamber & Kemerer Java Metrics**: it's an open source command-line tool for Java.
4. **Dependency Finder**: it's an open source for Java programs.
5. **Eclipse Metrics Plug-in 1.3.6**: it's an open source analyser for the Eclipse IDE.
6. **Eclipse Metrics Plug-in 3.4**: it's also an open source.
7. **OOMeter**: it's an experimental software metrics tool for Java and C#, and for UML models in XMI.
8. **Semmle**: it's also an Eclipse plug-in.


### Further Reading

[Software Measurement and Metrics - GeeksforGeeks](https://www.geeksforgeeks.org/software-measurement-and-metrics/)

[Software Measurement Metrics - TutorialsPoint](https://www.tutorialspoint.com/software_quality_management/software_quality_measurement_metrics.htm)

### References


[Software Metrics - JavaTPoint](https://www.javatpoint.com/software-engineering-software-metrics)

