---
author: 'Marcus Vinicius Richa'
title: 'Dev-Ops - Architecture'
date: '2022-02-14'
subject: 'development-articles'
description: 'This article brings an extensive view about many points of the DevOps practices, its architecture and its workflow. It also brings the principles, the tools and its workflows in terms of the pipelines for integration (CI) and for deployment (CD) that makes this practice so important for continously improvement.'
---

# DevOps - Architecture

1. ##### Introduction  
2. ##### DevOps Lifecycle
3. ##### DevOps Workflow      
4. ##### DevOps Principles
5. ##### DevOps Automation
	5.1. The DevOps Phases and Automation Tools
6. ##### DevOps Engineers
7. ##### DevOps Pipeline
8. ##### Countinous Integration Pipeline (CI)
9. ##### Continous Delivery Pipeline (CD)
10. ##### DevOps vs Agile
9. ##### Further Reading
10. ##### References

### Introduction

To think of the DevOps culture as the `solution to fix the gap between deployment and operations terms;`
[JavaTPoint](https://www.javatpoint.com/devops)

1. **Deployment**: requirements, designing, developing and testing.
2. **Operation**: administrative processes, services and support for the software.

![devops-representation](/images/articles/development/devops-representation.png)

The DevOps culture shorten the gap between developement and operation teams, it also allow that they can work with a single timeline and in synchrony.

These are the DevOps components:

1. **Build**: in traditionally deployments, the cost of consumption of the resources is based on the pre-defined individual usage with fixed hardware allocation, while with DevOps usage on clouds, it could be shapen by the user's need.
2. **Code**: there are many good practices, being Git one of them, since it allows versioning together with many other features.
3. **Test**: again, traditionally, testing come after production and them with the code working in the production environment. And with DevOps there should be a less rigid separation between these two distinct phases, that could interwind. 
4. **Plan**: and the DevOps uses Agile methodology to plan the development in synch with the operations.
5. **Moniter**: and countinous monitoring is used to identify any risk of failure, and the monitoring `becomes more confortable with services where the log data may get monitored through many third-party tools such as Splunk` [JavaTPoint](https://www.javatpoint.com/devops).
6. **Deploy**: many systems can support the scheduler for automated deployment, besides the optimizations, analytics, etc...
7. **Operate**: here it is shortned the traditional gap of two different cycles between development and operation, because here they should come up with a monitoring plan which serves the IT and business requirements as a whole.
8. **Release**: here automation also may have a distinc gain to lessen the impact on the customers.


### DevOps Lifecycle

So, just as in the DevOps architecture there is a "agile relationship" between operation and development teams, along the life cycle of the system there will also be the actions and the practices coming together with one another from the beginning to the final stage of the product.

1. **Continous development**:  this phase reaches both the planning and the developing/coding phases in the software development life cycle. While there is no specific DevOps tool required for planning, there are several of them for maintaining the code.
2. **Countinous integration**: this stage is the "heart" of the entire DevOps lifecycle, and it envolves the interwined effort for the commiting the code (developing, testing, review, etc...) more frequently and in synchrony with with all the related build that attain to the operational side of the system.
3. **Continous testing**: this stage is the predicate where the system is tested throughout the lifeclycle of the system, that is from the development phase and after the commit to build or to release a new version, the system goes through the necessary tests, even as it is going to the production environment.
4. **Continous monitoring**: this is also a importante phase that through the use of recorded information to the logs of the system it is possible to find trends and identify problem areas.
5. **Continous feedback**: also the continous operations with the software with information and with feedback is a important source for data to be analysed for critical updates for the next versions.
6. **Continous deployment**: at this stage there a a great number of popular tools that helps the maintain this flow of continuous deployment practice.    
	6.1. But tools like Docker or Vagrant, that manages containers, are specially important, because they help to produce consistency across development, staging, testing and production.    
	6.1. With containers there is no chance of errors or failure in the production environment as they package and replicate the same build with all its dependencies across the system.
7. **Continous operations**: just as the other phases, it is imperative for DevOps the continuity of the operations instead of rigid and separated phases, because a operational system works with all its parts and its environment all together.


### DevOps Workflow

The DevOps workflow provides visual overview of the sequence and the types of jobs are being applied to the build. Also, this workflows allow to incorporate outputs for its operational processes generated.


### DevOps Principles

1. **End to End Responsability**: it's the responsability of the DevOps team to provide support to the system along all its phases.
2. **Continous Improvement**: it's settled at the notion that with the continous improvement of the system also the excess waste becomes minimized.
3. **Automate Everything**: here also the idea that through automated process it is possible the reduce errors and even brings improvement to the testing process to fix bugs.
4. **Custom Centric Action**: this is related to the customer needs and its feedbacks that helps to tailor and to give continously improvement to the system.
5. **Monitor and Test Everything**: the idea that its also important to bring continouly improvement the processes of monitoring and testing throughout all the system life cycle.
6. **Work as One Team**: this is the notion that collaboration helps to bring together and synchronize the working of all the diffent professionals involved with the systems.


### DevOps Pratices

Here, some of the most recurrent DevOps practices:

- **Self-service configuration**
- **Continous build**
- **Continous integration**
- **Continous delivery**
- **Incremental testing**
- **Automated provisioning**
- **Automated release management**


### DevOps Automation

Automation is a crucial task for all DevOps practices and it's also a principle for **Automate Everithing**.

And the automation should begin as early as the coding phase and accompany the development and operation of the system throughout all the phases.

`Automation in DevOps boosts speed, consistency, higher accuracy, reliability, and increases the number of deliveries. Automation in DevOps encapsulates everything right from the building, deploying, and monitoring.`
[JavaTPoint](https://www.javatpoint.com/devops)


#### Integrating DevOps Phases and with Automation Tools

Here we have some tools and their use in the DevOps phases:

1. **Infrastructure Automation**:     
	1.1. Amazon Web Services (AWS): a cloud service that can be scaled on-demand and that can be configured automaticaly.
2. **Configuration Management**:    
	2.1. Chef: is a tool to achieve speed, scale and consistency, since it can be used to complex tasks and perform configuration management. So, instead of making changes across hundreds of servers, it can be performed in only one place and be reflected throughout the system.
3. **Deployment Automation**:    
	3.1. Jenkins: it facilitates continous integration and testing at building time.
4. **Performance Management**:   
	4.1. App Dynamic: it offers real-time performance monitoring, while the data produced can help professionals to debug the systems.
5. **Log Management**:   
	5.1. Splunk: this tool solves issues such as storing, aggregating and analysing all logs in one place.
6. **Monitoring**:   
	6.1. Nagios: it notifies people involved with the system in events like a system halt. It also helps to find and correct problems.


### DevOps Engineers

Some roles, responsabilities and skills that are expected from DevOps engineers:

- Manage projects effectively through an open standard based platform.
- Increases project visibility through traceability.
- Improve quality and reduce the development cost with collaboration.
- DevOps should have the soft skill of problem solver and quick learner.
- Analyse, design, and evaluate automation sripts and systems.
- Able to perform system troubleshooting and problem-solving across the plataform and application domain.
- Ensuring the critical resolution of system issues by using the best cloud security solution services.


### DevOps Pipeline

A pipeline in software engineering `is a set of automated processes` which allows DevOps professionals to continously build integration, test automation, and deployment automation.
[JavaTPoint](https://www.javatpoint.com/devops)

A pipeline can contain the following categories of practices:

- Source control
- Build tools
- Containerization
- Configuration management
- Monitoring


#### Countinous Integration Pipeline (CI)

Continous integration (CI) is a pratice in which developers can check their code into a version controlled repository several time per day. Automated build pipelines are triggered by these checks which allows fast and easy to locate error detection.

Some advantages in CI are:

- Small changes are easy to integrate into large codebases.
- More comfortable for other team members to see what you have been working.
- Fewer integration issues allowing rapid code delivery.
- Bugs are identified early, making them easy to fix, resulting in less debugging work.


#### Continous Delivery Pipeline (CD)

Continous Delivery (CD) is the process that allows operation engineers and developers to deliver bug fixes, features, and configuration change into production reliably, quickly, and sustainably. And continous delivery offers the benefits of code delivery pipeline, which are carried out that can be performed on demand.

Some advantages in CD are:

- Faster bug fixes and features delivery.
- CD also allows team to work on features and bug fixes in small batches, which means user feedback received much quicker. It reduces the overall time and cost of the project.


### DevOps vs Agile

Both the DevOps as the Agile are practices that aims for continous improvement of the software product and for its efficently management.

Said that, it is possible to see many similar practices:

1. While Agile brings flexibilization to the Software Life Cycles and works through the collaboration of a team of professionals, also the DevOps aims to flexibilize how development and operations work, and to have them to collaborate for a better system.
2. Also, both of them works to eleminate the excess of waste unnecessary process and to improve the speed of the deployments.
3. Both practices have a reduced means of documentation, while Agile prioritize the development within the sprint, DevOps rely on automation and its metrics to minimizes its impacts.
4. Finally, both of these practices are customer oriented.


And here some differences:

1. Agile implies to work in smaller tasks with a small team to improve management, while DevOps implies a large team working in end to end tasks. 
2. Agile focuses on constant changes and improvement on the system, while DevOps focuses on constant testing and delivering.
3. While Agile is more opinionated with its own frameworks, DevOps is more agnostic while it does not have any commonly accepted framework.
4. The normal timeline for Agile are the short sprints, while the timeline for DevOps is daily or even few hours of continously coding and delivering.
5. The feedback in Agile comes from the customer, while in DevOps it comes internaly from its automated logging and analytics.
6. Agile does not emphasize automaton, whereas DevOps does.



### Further Reading


[DevOps Tutorial - JavaTPoint](https://www.javatpoint.com/devops)

[DevOps Tutorials - TutorialsPoint](https://www.tutorialspoint.com/devops_tutorials.htm)

[DevOps Engineering Course for Beginners - Freecodecamp.org](https://www.youtube.com/watch?v=j5Zsa_eOXeY)

[DevOps Engineering Course for Beginners - Freecodecamp.org](https://www.freecodecamp.org/news/devops-engineering-course-for-beginners/)

[The Roadmap to Becoming a DevOps Dude — From Server to Serverless - Hackernoon](https://hackernoon.com/the-roadmap-to-become-a-devops-dude-from-server-to-serverless-dd97420f640e)


### References


[DevOps Tutorial - JavaTPoint](https://www.javatpoint.com/devops)

