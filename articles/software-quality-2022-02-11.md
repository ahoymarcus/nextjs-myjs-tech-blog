---
author: 'Marcus Vinicius Richa'
title: 'Software Quality - Overview'
date: '2022-02-11'
subject: 'development-articles'
description: 'Software Quality is traditionaly presented  in terms of of fitness of purpose, meaning that the software would do exactly what the users expect from it, though modern software demands also other sets of properties to better describes software quality.'
---

# Software Quality - Overview

1. ##### Introduction  
2. ##### Software Quality Management System
3. ##### Evolution of Quality Management System
4. ##### ISO 9000 Certification
	4.1. The ISO 9001
5. ##### Software Engineering Institute Capability Maturity Model (SEICMM)      
	5.1. Methods of SEICMM        
	5.2. The Five-Level Maturite Stages      
	5.3. Key Process Areas (KPA) of a Software Organization     
6. ##### People Capability Maturity Model (PCMM)
	6.1. The Five-Level Maturite Stages 
7. ##### Six Sigma
	7.1. History of Six Sigma
	7.2. Characteristics of Six Sigma
	7.3. Six Sigma Methodologies: DMAIC	and DMADV
9. ##### Further Reading
10. ##### References

### Introduction

In the tutorial from [JavaTPoint](https://www.javatpoint.com/software-engineering-software-quality), it is said that one common way of describing **Software Quality** is presented it in terms of `fitness of purpose`, meaning that the software would do exactly what the users expect from it.

Though, the tutorial also states that this definition is not sufficient for software purposes, because a operation software could fullfill all the necessary tasks, but have problems with some bad interface! 

So, to describe quility in relation to modern software development, it is proposed a couple of properties in that regard:

1. **Portability**: a software is portable when it can be freely transfered from differents environment, be in relation to OS, types of machines, etc...
2. **Usability**: a software is said to have a better usability when it is easily managed by users of various categories.
3. **Reusabiity**: a software is said to have a better reusability when it is a modular software and its modules can easily assembled to create others software products.
4. **Correctness**: a software is correct if all its requirements related in the documents are correctly implemented.
5. **Maintainability**: a software is considered to have a better maintainability when it can be easily modified, whether it is modified for correcting bugs, or for scaling, or even to represent a new business model. 

### Software Quality Management System

A quality management system is some system or methodology applied to the development of software to achieve the desired quality in the product.

Some pillars of a quality system are:

1. **Managerial structure** and **Individual responsability**: because quality system is a responsability for the organization as a whole, just as for each individual that takes part in the process of development.
2. **Quality system activities**:      
	2.1. Auditing of projects      
	2.2. Reviews       
	2.3. Development of standards, methods and guidelines.       
	2.4. Production of documents that summarizes the effectiveness of the quality in the systems.     

### Evolution of Quality Management System

Just as to measure the quality of software nowdays it is important to set many more properties as to better describe its quality, also when the metter is a "Quality System", there have been some incorporation of other properties besides the traditional product inspection, also known as "Quality Control" of QC: 

1. **Quality Control (QC)**: which for software implies not only pointing out defective systems, but also the causes of the defect and how to repair that.
2. **Total Quality Management (TQM)**: is the concept of continuous improvement and continuous process of measurement of the system.
3. **Buseness Process Reengineering (BPR)**: it aims to reengineering the own process of quality assurence instead of the simple product assurence.


### ISO 9000 Certification

ISo is the International Standards Organization with the aim to plan and to foster standardization.

The concept of a standardization process should deduce that `if the proper stage is followed for the production, then good quality products are bound to follow automatically` ([JavaTPoint](https://www.javatpoint.com/software-engineering-iso-9000-certification)).

#### The ISO 9001

This serie of the standardization are the one involved with design, development, production and servicing of goods which software engineering falls under and that companies can apply to.

### Software Engineering Institute Capability Maturity Model (SEICMM)

The Capability Matyrity Model (CMM) is a procedure used to develop and refine an organization's software development process and the model defines a five-level evolutionary stage of increasingly organized and consistently more mature processes.

The CMM was developed and is promoted by the Software Engineering Institute (SEI), a research and development center promoted by the U.S. Department of Defense (DOD). 

#### Methods of SEICMM

There are two methods of SEICMM:

1. **Capability Evaluation**: this provides a way to assess the software process capability of an organization and its results of capability evaluation for that organization should indicate its performance whether the company is hired for a software product.
2. **Software Process Assessment**: and this process is used as a means for an organization to improve its proces capability. **Thus, this is a internal type of evaluation**.

#### The Five-Level Maturite Stages

1. **Level 1** or **Initial**: this entry with no processes or very few processes defined in software developement. Also called a Chaotic level, since the lack of definitions leaves to the arbitrary decision. 
2. **Level 2** or **Repeatable**: at this level, there is already the fundamental practices of management for instances like Costs and Schedule. Thus, size and cost estimation methods, like function point analysis , COCOMO, etc, are used.
3. **Level 3** or **Defined**: at this level it is the wilder process of Management and Development that are defined and documented, things like operation, roles and responsabilities are commonly understood. And ISO 9000 aims at achieving this level.
4. **Level 4** or **Maneged**: at this level the focus is on software metrics. Two kind:      
	4.1. Product metrics: it measure the features of the product being developed (size, reliabiity, time complexity, understandability, etc...)      
	4.2. Process metrics: this second metrics apply to the own process of developing and then it analysis the aggregate metrics for the whole process like average defect correction time, average number of defects found per hour of inspection, etc...
5. **Level 5** or **Optimizing**: at this last phase, both the product and the process are very well measured, and then its data is used to evaluate for continous process improvement.

#### Key Process Areas (KPA) of a Software Organization

Except for the SEI CMM 1, each maturity level features several Key Process Areas (KPAs), which are properties that indicates readiness for some activities:

| CMM LEVEL | FOCUS | KEY PROCESS AREAS |     
| --------- | ----- | ----------------- |     
| 1. Initial | Competent people | NO KPSs |    
| 2. Repeatable | Project management | 1. software project planning 2. software configuration 3. management |       
| 3. Defined | Definition of processes | 1. process definition 2. trainning program 3. peer reviews |        
| 4. Managed | Product and Process quality | 1. quantitative process metrics 2. software quality management |         
| 5. Optimizing | Continous Process improvement | 1. defect prevention 2. process change management 3. technology change management |     


`SEI CMM provides a series of key areas on which to focus to take an organization from one level of maturity to the next. Thus, it provides a method for gradual quality improvement over various stages. Each step has been carefully designed such that one step enhances the capability already built up.`
[JavaTPoint](https://www.javatpoint.com/software-engineering-institute-capability-maturity-model)


### People Capability Maturity Model (PCMM)

The PCMM is a maturity structure that focuses on continously improving the management and development of the human assets of an organization.

It defines the improvement evolution to course into a mature orginazation while tasking its workforce.

`The People Capability Maturity Model (PCMM) is a framework that helps the organization successfully address their critical people issues. Based on the best current study in fields such as human resources, knowledge management, and organizational development, the PCMM guides organizations in improving their steps for managing and developing their workforces.`
[JavaTPoint](https://www.javatpoint.com/software-engineering-institute-capability-maturity-model)


#### The Five-Level Maturite Stages 

1. **Inconsistent Management**: there is no process areas or the practices that are being efforced are inconsistent or ritualistic.
2. **People Management**: first cohese use of some process like Staffing, Communication and Coordenation, Work Environment, Performance Management, Training and Development, Compensation at individual level.
3. **Competency Management**: developing the different competencies that are demanded by the business activities.
4. **Capability Management**: at this level the organization not only handles the management and the developing of competencies, but it is capable to sharply analyse and predict the performance of the different processes and assignments.
5. **Change Management**: this is the level of a focus on continual improvement upon everything built at the lower levels (efficiency of individuals and workgroups, workforce improvements and competency-based processes).


### Six Sigma

Six Sigma is the process of improving the quality of the output by identifying and eliminating the cause of defects and to reduce variability in manufacturing and business processes.

The name of the process, "Sigma", derives from the greek letter that stands for deviation in Statistics. And here it denotes the use of measurements for decision making.

`The maturity of a manufacturing process can be defined by a sigma rating indicating its percentage of defect-free products it creates. A six sigma method is one in which 99.99966% of all the opportunities to produce some features of a component are statistically expected to be free of defects (3.4 defective features per million opportunities).`
[JavaTPoint](https://www.javatpoint.com/software-engineering-institute-capability-maturity-model)


![software-engineering-six-sigma](/images/articles/development/software-engineering-six-sigma.png)

#### History of Six Sigma

It was introduced by the engineer Sir Bill Smith while working at Motorola in 1986, time when Motorola was developing the famous Quasar televisions.

The televisions were having output problems with defects caused by variations in picture quality and sounds, till a japanese firm took over the production and improving at management techniques improved the results.

#### Characteristics of Six Sigma

1. **Statistical quality control**: it is the use o reliable data to measure the non-conformance as the quality of the output is concerned. 
2. **Methodical approach**: as it is presented in the JavaTPoint tutorial, `The Six Sigma is not a merely quality improvement strategy in theory, as it features a well defined systematic approach of application in DMAIC and DMADV which can be used to improve the quality of production. DMAIC is an acronym for Design-Measure- Analyze-Improve-Control. The alternative method DMADV stands for Design-Measure- Analyze-Design-Verify.`
3. **Fact and data-based approach**: the choice to favor scientific tequiniques.
4. **Project and objective-based focus**: the process is applied in an organization according to its own necessities. Thus the process is tailored to the organization specification and requirements.
5. **Customer focus**: the quality improvement and control of standards are based on specific customer requirements.
6. **Teamwork approach to quality management**: the Six Sigma involves tranning of the workforce and this is informed in terms of roles played and quality management of the team.


#### Six Sigma Methodologies

1. **DMAIC**: it specifies a data-driven quality strategy for improving processes. 
	1.1. Define: the process of mapping    
	1.2. Measure: the search for metrics    
	1.3. Analyse: the appling of data inteligence    
	1.4. Improve: it covers the risks assesments, process simulation    
	1.5. Control: covers the planning    
2. **DMADV**: it specifies the data-driven quality for designing products and processes, in the sense that it aims the creating of more predicable processes.      
	1.1. Define: it defines the problem in terms of the costumer       
	1.2. Measure: it states measurements according to customer needs and specifications       
	1.3. Analyse: to find the process that meet a customer needs      
	1.4. Design: also to thing in a design that will meet customer needs.      
	1.5. Verify: t can verify the design performance and ability to meet customer needs         


### Further Reading

[Software Engineering | Capability maturity model (CMM)](https://www.geeksforgeeks.org/software-engineering-capability-maturity-model-cmm/)

### References


[Software Quality - JavaTPoint](https://www.javatpoint.com/software-engineering-software-quality)

