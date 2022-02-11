---
author: 'Marcus Vinicius Richa'
title: 'Kanban Method and Practices'
date: '2022-02-11'
subject: 'development-articles'
description: 'Kanban is a management method for teams and organizations that works through visualization to facilitate the identification and the elimination of bottlenecks and improve development/operation and quality.'
---

# Kanban Method and Practices

1. ##### Introduction  
2. ##### The Core Concept
3. ##### Kanban and Lean Practices
4. ##### The Pull Approach
	4.1. Advantages of the Pull Approach
5. ##### Advantages of the Kanban Method
6. ##### Applying Visual Metrics
7. ##### The Elimination of Waste
8. ##### Kanban Board
9. ##### Differences Between Kanban and Scrum
10. ##### Kanban Tools
11. ##### Further Reading
12. ##### References

### Introduction

As stated in the [TutorialsPoint.com](https://www.tutorialspoint.com/kanban/index.htm) site, Kanban is a management method for teams and organizations that works through visualization to facilitate the identification and the elimination of bottlenecks and improve development/operation and quality.

As a name, Kanban is a Japanese word meaning "visual card" and just like the Lean Development Method, it came originally from Toyota to try to limit the amount of inventory appended on the work process.

So, as a method Kanban is said to reduces both the excess of inventory, just like the effort to produce those excessives inventories.

### The Core Concept

1. **Visual workflow**    
	1.1. Split the work into different columns to define segments or states.     
	1.2. Specify each item as as a named visual card to be put in a segment/state of the workflow.     
2. **Limit Work In Progress (WIP)**:      
	2.1. Apply explit limit to the number of items currently on the work flow.     
	2.2. An item can only advance in the workflow when a segment/state slot becomes vacant.     
3. **Measure the Lead Time (or Cycle Time)**: so, that's the act of measuring the average time to complete one item, and then optiize to make the Lead Time as small and as predictable as possible.

![kanban_board](/images/articles/development/kanban_board.png)


### Kanban and Lean Practices

Among the various frameworks working beside Lean Practices, Kanban has been the most effective:

- It visually indicates states.
- It visually indicates when issues/process should start and stop.
- It's a very economic model.
- It's flexible to shape it according to customer demand.

Other benefits:

- Bottlenecks also become visuble in real-time: so collaboration can greatly optimazed.
- Very useful in operations where already exists a high rate of uncertainty and variability.
- Reduction of inventory in the range of 25%-75%.
- Since the states are visuble, the wait time also is reduced.
- Overproduction of inventory is avoided, and them saving resources and eliminating waste.


### The Pull Approach

When there are more than one team working in parallel and one of them is more performing, to avoid friction in the state of the items, the framework allows the creating of **Buffer** to add  `limited capacity between the two teams`. 
[TutorialsPoint.com](https://www.tutorialspoint.com/kanban/index.htm)

#### Advantages of the Pull Approach

- Avoids piling-up of work
- Reduces the wait time
- Facilitates a team to maintain constant pace and focus on quality
- Provides resource balancing

### Advantages of the Kanban Method

1. **Minimizes cycle time**: through otimization of the operation         
	1.1. Bottlenecks are identified immediatly and could be easly resolved in a collaborative manner.      
	1.2. Reduction in waste: not only for unprogressive tasks, but also for excessive catalogs or meetings, etc...     
2. **Continous delivery**:       
	2.1. Short releases time: there is no need to wait for speciall events, etc...        
	2.2. Continuous feedback from the customer    
	2.3. Limiting the burden of excessive requirements each cycle       
	2.4. Improving quality through a balanced operation pace       
3. **Apply visual metrics**


Pavel Ku in his article at [Medium.com](https://medium.com/hygger-io/14-reasons-to-choose-kanban-for-software-development-d3ddb420d273) also states as resons to use the Kanban method:

1. **Panoramic View**: many important questions about the tasks can easily be seen on the board  
	1.1. "Who is currently workingh?"      
	1.2. "Who is left without work?"       
	1.3. "What tasks were reopened due to bugs?"   
	1.4. "What tasks have already been update today?"     
	1.5. "Which tasks have already exceeded their time span?"     
2. **The Order of Features Release**: the board also gives easy representation of the tasks prioirities:      
	2.1. Thus, task put higher at the flow have the higher priority.      
3. **Better Communication**: the visual system also allow to reduce the need of many events and assessments to catalogs for disclosuring the status of the process or from any task...
4. **Cohesion**: a very good example from the Ku's article is about testing:        
	4.1. The cohesion on the flow of Kanban allow a developer to prepare their testing immediately after the product is done, save a length time span of meetings untill the assignment is given.      
	4.2. Readiness in delivering, without the need to fullfill fixed and rigid time spans.     

### Applying Visual Metrics

Besides the visual operation process, the Kanban facilitates to create metric over the number of issues and the number of states to create advanced visualizations.

Bellow, we have in Y the number of items and in X the number of days. The color chart easly give us ability to read the total number of items in relation to what was already done and what is being done ([TutorialsPoint.com](https://www.tutorialspoint.com/kanban/index.htm)):

![kanban_board](/images/articles/development/kanban-visual_metrics.png)


### The Elimination of Waste

In software development, there are 3 types of waste:

1. **Waste in code development**
2. **Waste in project management**
3. **Waste in team potential**

### Kanban Board

The Kanban Board visualy depict the flow of task to all the team:

- Provides easy access to everyone involved
- Facilitates communication and thus the collaboration too
- The progress of the task are easier to follow through
- The bottlenecks are also easy to be visualized, and thus resolved through collaboration

The basic states are:

1. **To Do**
2. **Doing**
3. **Done**

The extended markings are:

1. **WIP Limit**: the value that visualy limits the number of current items in progress.
2. **Pull Approach**: the buffer the allows two teams use one board giving some slack to avoid friction of performance between teams.


### Differences Between Kanban and Scrum

Even though these are both Agile pratices, they have some distinct differences ([Medium.com](https://medium.com/@sudarhtc/kanban-methodology-and-kanban-boards-in-project-management-957a6058181)):

1. Kanban has no predefined roles whereas scrum has them.
2. Kanban focuses on continue delivery whereas scrum focuses on timeboxed sprits.
3. In Kanban the work is pulled through the system in a single piece flow whereas in Scrum the work is pulled through the system in batches along the sprint backlogs.
4. Kanban allows changes to be made anytime, but in Scrum no changes can be made in mid-sprints.
5. Kanban is more appropriate in operational envirounments with a high degree of variability in priority whereas Scrum is more appropriate in situations where work can be prioritized in batches that can be left alone.

### Kanban Tools

Some project managent tools that follow Kanban:

1. **Kanban Tool**
2. **Kanbanery**
3. **LeanKit**
4. **JIRA Software**
5. **Earliz**
6. **Targetprocess**
7. **Projectplace**
8. **Wrike**
9. **smartQ**
10. **Accelo Projects**
11. **Trello**



### Further Reading

[14 Reasons to Choose Kanban for Software Development - Medium.com](https://medium.com/hygger-io/14-reasons-to-choose-kanban-for-software-development-d3ddb420d273)

### References


[Kanban Tutorial - TutorialsPoint.com](https://www.tutorialspoint.com/kanban/index.htm)

[Kanban Methodology and Kanban Boards in Project Management - Medium.com](https://medium.com/@sudarhtc/kanban-methodology-and-kanban-boards-in-project-management-957a6058181)


