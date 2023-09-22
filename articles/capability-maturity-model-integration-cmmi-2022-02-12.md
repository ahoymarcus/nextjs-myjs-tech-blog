---
author: 'Marcus Vinicius Richa'
title: 'Capability Maturity Model Integration (CMMI)'
date: '2022-02-12'
subject: 'management-articles'
description: 'The the Capability Mature Model Integration or CMMI is a sucessor of the CMM, in the sense that it aims to incorporate all the individual disciplines for the development of software and integrate them all together. In a broader spectrum it aims for optimizing development processes, to allows its continous improvement, enhance the organization culture, decrease risks, etc.'
---

# Capability Maturity Model Integration (CMMI)

1. ##### Introduction
	1.1. What is Maturity? 
2. ##### History of CMMI
3. ##### Objectives of CMMI 
4. ##### SEI CMMI Disciplines
5. ##### SEI CMMI Representations
	5.1. Which Representation is Better?
6. ##### CMMI Maturity Levels
	6.1. Maturity Levels Should Not be Skipped
7. ##### CMMI - Capability Levels
8. ##### CMMI - Key Process Areas
9. ##### CMMI - Appraisals
10. ##### CMMI Players - Roles Responsibilities
11. ##### Further Reading
12. ##### References

### Introduction

The the Capability Mature Model Integration or CMMI is a sucessor of the CMM, in the sense that it aims to incorporate all the individual disciplines for the development of software (Software CMM, System Engineering CMM, People CMM, etc) and integrate them all together.

On a side note, CMM was developed for Sotware Development and Maintenance, but later it broadens its reaches ([TutorialsPoint](https://www.tutorialspoint.com/cmmi/cmmi_overview.htm)):

1. System Engineering
2. Supplier Sourcing
3. Integrated Product and Process Development
4. People CMM
5. Software Acquisition

And in a broader spectrum the CMMI aims for optimizing development processes, to allows its continous improvement, enhance the organization culture, decrease risks, etc.

#### What is Maturity? 

Though it may vary, but generally it is thought to be:

- **Well-defined**
- **Repeatable**
- **Measured**
- **Analysed**
- **Improved**
- **Effective**


### History of CMMI

As it was said, it was developed to combine the multiple business maturity models from CMM into one framework. Tush, while CMM was developed between 1987 e 1997 by Carnegie Mellon Unv and the US Defense Department, the CMMI started in 2002 with its first version:

1. Version 1.1 in 2002
2. Version 1.2 in 2006
3. Version 1.3 in 2010
4. Version 2.0 in 2018

Acording to White's article at [Cio.com](https://www.cio.com/article/274530/process-improvement-capability-maturity-model-integration-cmmi-definition-and-solutions.html), along its development the CMMI has shift from a specialized tailoring for software engineering to become more abstract and more generalized and `allowing it to be applied to hardware, software and service development across every industry`.

### Objectives of CMMI

1. **Fullfilling customer needs and expectations**: costs and schedule are validated against customer needs.
2. **Value creation for investors/stockholders**: the recognition for excellence.
3. **Market growth is increased**: quality, pricing, image all builds the reputation and commitments.
4. **Improved quality of products and services**: as quality is also a essential point, the application of quality processes, management, quality assurance, verification and validation.
5. **Enhanced reputation in industry**: beside the enhancement of product quality, predictable schedules, effective measurements all bring support to management and value for the whole organization.



### SEI CMMI Disciplines

Currently there are 4 bodies of knowledge available:

1. **System Engineering**: this area covers the deployment of complete systems, which may or may not include software. 
	1.1. It has the focus on transforming customer needs, expectations and constraints into solutions.
2. **Software Engineering**: this area covers the development of software systems as a systematic, disciplined and quantifiable process of development, operation and maintanance.
3. **Integrated Product and Process Development**: the Integrated Product and Process Development is a systematic approach to achieve a timely collaboration of relevant stakeholders throughout the life of some product to better satisfy customer needs.
	3.1. And according to [TutorialsPoint](https://www.tutorialspoint.com/cmmi/cmmi_models.htm) the choise of IPPD process at an organization implies the to choose also another practice as its object, and it could be either system or software engineering.
4. **Supplier Sourcing**: this is also a area that brings together the complex process of reaching to external peers, in this case suppliers. And since the source of a product is a critical point, this is a important practice as well.         
	4.1. And just like the in last case, here also is necessary to couple this pratice with a oject, that could also be either system or software engineering.     

### SEI CMMI Representations

The CMMI is structered like so:

1. **Staged Representation**: this one provides a pre-defined, and fixed, roadmap for organization improvement based on grouping and ordering of processes.       
	1.1. The process is organized by maturity levels.      
	1.2. Appling well know common features to shape and organize the organization generic practices.       
2. **Capability Levels**: this one is related to continous representation at one process area, and it marks its improvements with the use of Capability Levels, and it is shaped by each organization according with the area of choice and its business model.  
	2.1. Processes are organized through area or categories.     
	2.2. Here values for capabilities are used to organize the many kinds of evalueted practices.   
	
#### Which Representation is Better?

`Each representation has its advantages over the other, some organizations use both representations to address particular requirements at various times in their improvement programs. Organizational maturity is the focus of the staged representation, whereas process area capability is the focus of the continuous representation.`
[TutorialsPoint](https://www.tutorialspoint.com/cmmi/cmmi_representations.htm)


![cmmi-two-kinds-of-representations](/images/articles/development/cmmi-two-kinds-of-representations.png)


### CMMI Maturity Levels

Just as its predecessor CMMI is a five-level stage process:

1. **Level 1 - Initial**: at this stage processes are viewed as unpredictable and reactive. So, delays and over budget pile up, just as risks increase.
2. **Level 2 - Managed**: at this stage there is already a project management achieved with planning, measurements and control.
3. **Level 3 - Defined**: at this stage, organizations should be more proactive than reactive, with a more clear understanding of its own processes and aiming to improve its dependencies and goals.
4. **Level 4 - Quantitatively managed**: at this stage, the organization widens its to reaches its own management processes and strength them with a more measured and controlled data-driven insight improving them to better suit the customer needs.
	4.1. So this distinction that, while here the control of processes needs to be more sophisticated broadering because of the quantitatively predictions, `At maturity level 3, processes are only qualitatively predictable.`([TutorialsPoint](https://www.tutorialspoint.com/cmmi/cmmi_maturity_levels.htm)). 
5. **Level 5 - Optimizing**: at this stage the organization is already more stable and flexible with its processes, so it aims for continous improvement.          
	5.1. And both the defined processes and the organizations's set of standard processes are targeted of measurable improvement activities.   

#### Maturity Levels Should Not be Skipped

Each maturity level provides necessary foundation for effective implementation of processes at the nest level.

**And all that foundation should be especilly resiliant during periods of crises or stress.**


### CMMI Capability Levels

A capability level is a well-defined evolutionary metric describing the organization capability relative to a process area. And each level adds to the capacity of continous process of the organization in that respective area.

**There are 6 capability levels, starting from zero**:

0. **Level 0 - Incomplete**: it is either a "incomplete process" or the lack of some formal process.      
1. **Level 1 - Performed**: at this level it is accepted that there is specific and generic practices of some process, but it is still inefficient and not rigorous.       
2. **Level 2 - Managed**: a process at this level means that it is planned, performed, monitored and controlled for individous projects or groups.       
3. **Level 3 - Defined**: at this stage a process is not only operative localy, but it is also standardized across the organization as a whole.      
4. **Level 4 - Quantitatively Managed**: at this stage the process shoulb be controlled at a much more finer grain, specially in terms of data-driven decisions to review and improve the process in the organization.
5. **Level 5 - Optimizing**: at this level it is expected a mote of continous improvement, that is to apply all the same refinements of data-driven decisions not only for the processes of the organization, but also for the management of processes it self.

### CMMI - Key Process Areas

Here, [TutorialsPoint](https://www.tutorialspoint.com/cmmi/cmmi_process_areas.htm) presents a complete list of Key Process Areas.


### CMMI - Appraisals

The CMMI Appraisal is an examination of one or more processes by a trained team of professionals using an appraisal reference model as the basis for determining strengths and weeknesses of an organization.

There are 3 categories of model components defined in the CMMI:

1. **Required**: specific and generic goals only.
2. **Expected**: specific and generic practices only.
3. **Informative**: includes sub-pratices and typical work products.

Also, there are 3 classes of apppraisal that distinguises themselves by the volume of the process of analysis: A, B and C.

| Characteristics A | Class a | Class B | Class C |         
| ----------------- | ------- | ------- | ------- |   
| Amount of objective evidence gathered | High | Medium | Low |       
| Rating generated | Yes | No | NO |      
| Resource needed | High | Medium | Low |      
| Team size | Large | Medium | Small |      
| Data sources(instruments, interviews, and documents) | Requires all three data sources | Requires two data source (one must be interviews) | Requires only one data source |         
| Appraisal team leader requirement | Authorized Lead Appraiser | Authorized Lead Appraiser or person trained and experienced | Person trained and experienced |       

### CMMI Players - Roles Responsibilities

Below it is possible to see the main roles in the process of improvement:

1. **PI Sponsor**: the person from the organization responsible for overseeing the entire PI effort, and generally also has the power to allocate funds and personel.
2. **PI Champion**: this is the public relations person for the PI and the person who markets the idea, approach, and results.
3. **Engineering Process Group (EPG) Lead**: leads the group that review processes.
4. **EPG Members**: these individuals serve on the EPG as committee members and they are responsible for ensuring that process improvement documentation is written and followed. They are also responsible to generate metrics to track the process.
5. **Process Action Teams (PATs)**: these are the direct individual responsigle for the PI documentation, polices, processes, procedures, charters, and Actions Plans.
6. **Transition Partner**: usually one or two expirienced external individous brought to help to set and monitor the PI progress.


**Note**: one person can fullfill many of these roles simultaneously or serially, depending on the size of your organization and the complexity of your process improvement (PI) effort.


### Further Reading

[What is CMMI? - CIO.com](https://www.cio.com/article/274530/process-improvement-capability-maturity-model-integration-cmmi-definition-and-solutions.html)

### References

[SEI CMMI - TutorialsPoint](https://www.tutorialspoint.com/cmmi/index.htm)

[Capability Maturity Model Integration (CMMI) - GeeksforGeeks](https://www.geeksforgeeks.org/capability-maturity-model-integration-cmmi/)

