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
5. ##### 
6. ##### 
7. ##### 
8. ##### 
9. ##### Further Reading
10. ##### References

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
6. **Performance and evaluatioin models**: these are models that also relate to quality, but that use externaly obervable propertities like timing and rates/frequency.
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


Patter of productivity: KLOC / EFFORT

1. Advantages of LOC: very simple measure
2. Disadvantages of LOC:
	2.1. It's defined on the code. For example, it cannot measure the size of the specification.
	2.2. It only characterize size, but does not account functionality or complexity.
	2.3. Bad software design can cause excessive line of code.
	2.4. It's language dependent.
	2.5. Users cannot easily understand it.


#### Halstead's Software Metrics













https://www.javatpoint.com/software-engineering-halsteads-software-metrics

### Further Reading

[Software Measurement and Metrics - GeeksforGeeks](https://www.geeksforgeeks.org/software-measurement-and-metrics/)

[Software Measurement Metrics - TutorialsPoint](https://www.tutorialspoint.com/software_quality_management/software_quality_measurement_metrics.htm)

### References


[Software Metrics - JavaTPoint](https://www.javatpoint.com/software-engineering-software-metrics)


