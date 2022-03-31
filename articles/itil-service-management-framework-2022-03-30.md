---
author: 'Marcus Vinicius Richa'
title: 'ITIL - Service Management Framework'
date: '2022-03-30'
subject: 'development-articles'
description: 'ITIL stands for Information Technology Infrastructure LIbrary, and it is a set of best practices for delivering IT services, to maximaze efficiency and bring predictability to the services provided, all in accord with the organization strategic plans. And has become the de facto standard in IT service management. So, ITIL works around any kind of organization to help them accomplish their services in a quality-driven and economical way.'
---

# ITIL - Service Management Framework

1. ##### Introduction   
2. ##### ITIL
    1.1. Brief History of ITIL Framework   
    1.2. Basic Concepts of the ITIL Framework   
    1.3. Basic Structure of the ITIL Framework   
    1.4. ITIL Incident and Problem Management System   
    1.5. Certification Levels for ITIL
2. ##### ITIL version 4
    2.1. Main Components from the ITIL version 4    
    2.2. ITIL V4 versus ITIL V3
3. ##### Further Reading
4. ##### References

### Introduction


###### Article about IT Governance and IT Management:
- `IT Governance and Mangement - Overview` [^1]



### ITIL

ITIL stands for Information Technology Infrastructure LIbrary, and it is a set of best practices for delivering IT services, to maximaze efficiency and bring predictability to the services provided, all in accord with the organization strategic plans.

According to the site [SimpliLearn](https://www.simplilearn.com/itil-key-concepts-and-summary-article), the ITIL has become the de facto standard in IT service management. So, ITIL works around any kind of organization to help them accomplish their services in a quality-driven and economical way.
 

As a framework, is discussion first came into light during the 1980s when the British government realised that they need to improve the quality of their IT services, and sent this demand to the Central Computer and Telecommunications Agency (CCTA), now Office of Government Commerce (OGC) to elelaborate some system. [ItilTraining.com](https://www.itiltraining.com/usa/blog/itil-history)


`One of the most essential parts of ITIL is the configuration management database (CMDB), which provides the central authority for all components—including services, software, IT components, documents, users, and hardware—that must be managed to deliver an IT service. The CMDB tracks the location of, and changes to, all of these assets and processes, along with their attributes and relationships to each other. Adhering to ITIL principles helps ensure you can get to the root cause of problems in your environment as quickly as possible and that you have the right visibility into the systems and people to prevent future problems.` [IBM](https://www.ibm.com/cloud/learn/it-infrastructure-library)



#### Brief History of ITIL Framework

It was in **1989** that by the name of Government Information Technology Infrastrucure (GITIM) that this framework first came around and started being adopted by public agencies and private companies across Europe as a means to IT services improvement and soon grew to cover 30-volume wide catalog. 


Then, in **2000** came its version 2, which was already present in the US also, for example in the Microsoft operations. This new version aimed specially to make the framework more accessible and started to categorizing the huge 30-volume document into nine related categories.

 
In **2007** came the version 3, the one that brought a new aquired name, ITIL Refresh Project, which was also following the path to make the framework even more friendly when releasing a ITIL Glossary.
 
It was in **2011** that came a revision to the ITIL V3, and besides bringing some corrections to errors and inconsistences with V3, this revision divided again the catalog into 5 areas, reduzing the final catalog to be 5 volumes wide:

1. **ITIL Service Strategy**
2. **ITIL Service Design**
3. **ITIL Service Transition**
4. **ITIL Service Operation**
5. **ITIL Continual Service**


Then, since **2013** ITIL has been owened by AXELOS Ltd and the British Government Office.


Finally, in **2019** came its V4, which continue with the movement in terms of accessibility. In this case, the framework incorporated more practical guidances on how to use the ITIL framework, especially in collaborative environments, what in its turn open the door to the bring the framework closer to the Agile and DevOps philosophies. [ItilTraining.com](https://www.itiltraining.com/usa/blog/itil-history)
 
 
#### Basic Concepts of the ITIL Framework

1. Delivering maximum value to customers
2. Optimizing resources and capabilities
3. Offering services that are useful and reliable
4. Planning processes with specifid golas in mind
5. Defining roles clearly for each task


There are also some key ITIL terms:
 
1. **Capabilities**: the specialized skills or abilities an organization applies to resources to create value.
2. **Processes**: these are the structured set of activities which aim for specific goal. Its characteristics:    
    2.1. Transform inputs into outputs.   
    2.2. Deliver results to a specific customer or stakeholder.   
    2.3. They are measurable.   
    2.4. They are triggered by specifc events.
3. **Functions**: these are self-contained processes with specific aims, that usually take the form of a group set and their working tools.
4. **Resources**: the raw materials that are transformed.
5. **Roles**: these a sets of responsabilities and priviledges, and may be held by individuals or groups.
6. **Service Assets**: these are the features in a service.   
7. **Service Management**: a proper analysis and evaluation of the services provided.
8. **Services**: these are the values delivered to the customers.
9. **Value, Utility, and Warranty**: the value is the benefit generated by the service provided. The value is tracked by ITIL in terms of Utility and Warranty:  
    9.1. Utility: also called the fitness for purpose.   
    9.2. Warranty: also called the fitness for use, or in other terms, its reliability.


#### Basic Structure of the ITIL Framework 
 
As it was said above about the revision made to V3 in **2011**, the ITIL catalog was divided into 5 life cycle stages, and there are **24 processes**, and **4 functions**: 
 
1. **ITIL Service Strategy**: this stage brings strategy to the whole life cycle and should be in sync with business objectives. Also, it should present that the service is **fit for purpose** and **fit for use**.   
    1.1. Financial Management: this is the process to that provides analysis over costs and opportunities for service.   
    1.2. Service Portfolio Management: this process maps the service list of the company as Service Pipeline, Service Catalog and Retired Services.    
    1.3. Demand Management: this process is concerned with understanding and influencing customer demand   
    1.4. Strategy Operations: this process aims to analyse values of the service, like user requests, resolving failures, fixing problems, etc.
2. **ITIL Service Design**: the purpose of this life cycle stage is to design the processes for the service.    
    2.1. Service Level Management: process for securing and managing agreements between customers and service provider.   
    2.2. Availability Management   
    2.3. Capacity Management   
    2.4. Continuity Management   
    2.5. Information Security Management: process for securing the 5 qualities of information assets (Confidentiality, Integrity, Availability, Authenticity, and Nonrepudiation)   
    2.6. Service Catalog Management   
    2.7. Supplier Management: this process deals with the relation between the company and suppliers.
3. **ITIL Service Transition**: this life cycle is concerned with building and deploying IT services and making sure the changes under way are carried out in a coordinated way.    
    3.1. Change Management: this process is to limit disruption.   
    3.2. Asset and Configuration Management   
    3.3. Release  and Deployment Management   
    3.4. Transition Planning and Support   
    3.5. Service Validation and Testing   
    3.6. Evaluation   
    3.7. Knowledge Management
4. **ITIL Service Operation**: this life cycle deals with end-users expectations, for balancing costs, discovering new values and fixing problems.   
    4.1. Service Desk (function): this function is the contact between users and the service provider    
    4.2. Incident Management   
    4.3. Problem Management   
    4.4. Access Management   
    4.5. Event Management   
    4.6. Request Fullfillment   
    4.7. Technical Management (function)  
    4.8. Application Management (function)  
    4.9. IT Operations Management (function)
5. **ITIL Continual Service**: this is the life cycle that is close to the notion of continous  delivering. **It only has one process divides into 7 steps** (7 Step Process Improvement).   
    5.1. Identifying improvement strategies (step)   
    5.2. Defining what will be measured  (step)   
    5.3. Gathering data  (step)    
    5.4. Processing data    
    5.5. Analysing data  
    5.6. Presenting and using the information drawn from the data   
    5.7. Using the information to improve


#### ITIL Incident and Problem Management System

The ITIL framework makes distinction between **Incident Management** and **Problem Management**, where the first one is related to some kind of disrupting event with the client's service and the efforts to reestablish it. The second one is related with prevention error effort for the service.


###### Incident Management

This is an unplanned event that cause disruption to the client's service, and the incident management comes to reinstate the service to it original state as quick as possible.

And also, to determine the root cause for the event, and even if the particular event is possibly connected to other occurrencies:

`Implementing ITIL Incident Management will help you improve service levels, and meet service level availability requirements or a specified service level agreement (SLA).` [IBM](https://www.ibm.com/cloud/learn/it-infrastructure-library)


###### Problem Management

As steps to manage problems:

1. Raise a problem management case.
2. Categorize and prioritize issues.
3. Systematically investigate (root cause analysis)
4. Identify changes needed to resolve and work with Change Management.
5. Verify the problem resolution.
6. Close out the problem.


#### Certification Levels for ITIL
    
The certifications last for 3 years and must be renewed, and there are 5 levels of tranning and certification for ITIL V3:

1. **ITIL Foundation**: covers basic concepts, elements, and terminology.
2. **ITIL Practitioner**: covers the Continual Service Improvement approach and organizational change management, communication, and measurement and metrics.
3. **ITIL Intermediate**: consists of two parts. The Service Lifecycle track focuses on the basics of the core ITIL phases, and the Service Strategy track concentrates on the management of the Service Strategy phase of the Service Lifecycle, with a focus on ITSM.
4. **ITIL Exepert**: requires full understanding and demonstration of the entire ITIL scheme. Passing this level includes completion of the ITIL Managing Across the Lifecycle Capstone Course (MALC).
5. **ITIL Master**: requires five years of leadership in IT service management and a demonstrated ability to apply the principles, methods, and techniques from ITIL in the workplace.



### ITIL version 4
    
The ITIL V4 came about in **2019**, and among its updates there was the focus to many new practices that gained importance while working with IT governance and management.

So, besides the Agile practices, which has already been mentioned before, the site [Mundoitil.com.br](https://www.mundoitil.com.br/) cites others practices and methodologies worth of mention:

1. VeriSM™
2. SIAM®
3. FitSM
4. DevOps
5. Lean


#### Main Components from the ITIL version 4

According to the same site [Mundoitil.com.br](https://www.mundoitil.com.br/), the ITIL 4 has two main components:

1. **The Four Dimentional Model**:   
    1.1. Organizations and People   
    1.2. Information and Technology   
    1.3. Value streams and Processes   
    1.4. Partners and Suppliers
2. **The Service Value System (SVS)**:     
    2.1. Inputs: opportunities and demand   
    2.2. Outputs: value


###### The Four Dimentional Model

This core component has the incumbence to extend the management of the service in a holistic way, since the Four Dimentional model has to imply the whole context of the organization.

And as the site [Bmc.com](https://www.bmc.com/blogs/itil-four-dimensions-service-management/) states, `insufficent focus on any single dimension will limit the value delivered by the organization to its stakeholders`.


Another interesting point to make is that the lack of focus on some dimention not only cause the organization to miss a important segment of the service, but also creates an impediment on the analysis concerning that same missing context.


So, as the site [Bmc.com](https://www.bmc.com/blogs/itil-four-dimensions-service-management/) brings, there are many factors that can positively or negatively affect any or several of the dimentions, and that have to be accouted for.


For example, in the PESTLE analysis, where each letter relates to a important environment factor:

1. **Political**: these can be changes in the ledership of the organization, or on other companies,  and even at the public sector.
2. **Economical**: prices of commodities
3. **Social**: changes in culture
4. **Technological**: changes in technology and practices.
5. **Legal**: the data protection laws world wide could be an example.
6. **Environmental**: again, factors related to regulatory rules.



###### The Service Value System (SVS)

The site  [Bmc.com](https://www.bmc.com/blogs/itil-service-value-system/) explains that the Service Value System (SVS) is the way that ITIL V4 has to measure and qualify the values related to a service from the organizaion. And the SVS also comes to describe how all the components and activities of the organization have work together and as a system, as to have that values inquired actualy being created by the service.


So, when ITIL V4 talks about the value system of a service, it reasons that a service to be supplied to the market, it has to be proven feasible, meaning that the professional group responsible for planning the service should have to bring 2 basic inputs showing the possibility of producing value is really present within that service being effored.


The first **input** that it is necessary to show is the **opportinities** that the organization has sum up to justify its efforts towards some goal, just as the second **input** necessary should show that there is exits a plausible/perceived **demand** coming from the market that also can justify the use of all the resources necessary to supply the related service.


On the other side of the equation, as a **output**, it is also necessary to show a concrete **value** being created by the service in question.


###### Management Practices of ITIL V4

The ITIL V4 also asserts Management Practices as a core component for the framework, where a management practice is a `set of organizational resources designed for performing work or accomplishing an objective`. [Bmc.com](https://www.bmc.com/blogs/itil-management-practices/)


Sill according to the same site, [Bmc.com](https://www.bmc.com/blogs/itil-management-practices/), it says that previous versions of ITIL had its focus on processes, but that shifting the focus to practices would give the organization more flexibility, specially in 2 situations:

1. That the organization could implement some specific processes that are closed aligned to the specific needs of its customers. 
2. And that the organization could inovate with processes capable of embracing modern ways of working, such as DevOps.


There are 34 management practices divided into 3 categories:

1. General Management Practices:   
    1.1. Architecture Management   
    1.2. Continual Improvement   
    1.3. Information Security Management   
    1.4. Knowledge Management   
    1.5. Measurement & Reporting   
    1.6. Organization Change Management   
    1.7. Portfolio Management   
    1.8. Project Management   
    1.9. Relationship Management   
    1.10. Rish Management   
    1.11. Service Financial Management   
    1.12. Strategy Management  
    1.13. Supplier Management   
    1.14. Workforce & Talent Management
2. Service Management Practices:   
    2.1. Availability Management   
    2.2. Business & Analysis   
    2.3. Capacity & Performance Management  
    2.4. Change Enablement: this practice is related with versioning and all the processes necessary that IT changes are succeesful, and that risks have been properly assessed.   
    2.5. Incident Management   
    2.6. IT Asset Management: to plan and manage the full life cycle of the service.   
    2.8. Problem Management   
    2.9. Release Management   
    2.10. Service Catalogue Management   
    2.11. Service Configuration Management   
    2.12. Service Continuity Management   
    2.13. Service Design    
    2.14. Service Desk    
    2.15. Service Level management   
    2.16. Service Request Management   
    2.17. Service Validation & Testing
3. Technical Management Practices:   
    3.1. Deployment Management   
    3.2. Infrasctructure & Platform Management   
    3.3. Software Development & Management: to ensure that applications meet internal and external stakeholder needs, in terms of functionality, reliability, maintainnability, compliance, and auditability.


#### ITIL V4 versus ITIL V3

As it can seem in this article, there was a shif in the structure of the ITIL framework. So, in the first part of this article, specially about the revisioned ITIL V3 from **2011**, the ITIL framework was structured by 26 detailed processess divided by 5 categories representing the life cycle of the service.

But then, the uptade that came with ITIL 4 in **2019** that removed the 5 stage life cycle of the service, and also changed the structure from the detailed processes to the practices, which are more generic and allows the insertion of custom made processes for 2 reasons:

1. To cover a specific need for the organization
2. To allow the organization insert specific methodologies like DevOps, for example.


But, as the site [Mundoitil.com.br](https://www.mundoitil.com.br/) asserts, eventhough there was some changes in the structure of the ITIL framework, there is no incongruance between the two versions, neither is ITIL V4 a new way of thinking services management while ITIL V3 is completely outdated.


The change though gives the management more flexibility, and also make more visible the agnostic aspect of the framework, while it can be applyed generically to any methodology, include the newer ones like Agile and DevOps.





 
 

 
Biblioteca ITIL® versão 4: suporte a serviços e entrega de serviços.

ITIL Tutorial - JavaTPoint - https://www.javatpoint.com/itil

Information Security Management (ITIL) - TutorialsPoint - https://www.tutorialspoint.com/itil/itil_information_security_management.htm
 


### Further Reading

[ITIL 4: confira o que mudou no framework e descubra como criar valor através de serviços de TI - Euax.com](https://www.euax.com.br/2018/10/itil-o-que-e-importancia-como-implantar/)


### References

[History of ITIL  - ItilTraining.com](https://www.itiltraining.com/usa/blog/itil-history)

[An Overview of ITIL Concepts and Summary Process - SimpliLearn](https://www.simplilearn.com/itil-key-concepts-and-summary-article)

[IT Infrastructure Library (ITIL) - IBM](https://www.ibm.com/cloud/learn/it-infrastructure-library)

[O que é ITIL - MundoITIL.com](https://www.mundoitil.com.br/)

[Four Dimensions of Service Management in ITIL 4 - Bmc.com](https://www.bmc.com/blogs/itil-four-dimensions-service-management/)

[The ITIL 4 Service Value System (SVS) - Bmc.com](https://www.bmc.com/blogs/itil-service-value-system/)

[ITIL 4 Management Practices - Bmc.com](https://www.bmc.com/blogs/itil-management-practices/)


[]()


[^1]:it-governance-and-management-overview-2022-03-27



