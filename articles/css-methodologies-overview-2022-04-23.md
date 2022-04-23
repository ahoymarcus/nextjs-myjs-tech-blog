---
author: 'Marcus Vinicius Richa'
title: 'CSS Methodologies - Overview'
date: '2022-04-23'
subject: 'web-dev-articles'
description: 'CSS is a simple language for styling web pages, but it can quickly become very cumbersome when a projetcts site starts to grow. Some internal features from CSS itself can easily bring unintended changes to the project, just like its Cascade feature or the process where elements inherit properties from their parents. A CSS methodology brings then a set of guidelines and best practices to help the developer to achieve a more maintainable, scalable, reusable code. And some of these methodologies are: BEM, OOCSS, SMACSS, Atomic CSS, ITCSS, etc.'
---

# CSS Methodologies - Overview

1. ##### Introduction  
2. ##### The DRY Principle
3. ##### The CSS Methodologies
	3.1. Atomic CSS    
	3.2. BEM Methodology (Block, Element, Modifier)    
	3.3. ITCSS (Inverted Triangle CSS)   
	3.4. OOCSS (Object-Oriented CSS)    
	3.5. SMACSS (Scalable and Modular Architecture for CSS)
4. ##### 
5. ##### 
6. ##### 
7. #####  
8. ##### 
9. ##### Further Reading
10. ##### References

### Introduction
 
While CSS is a simple and intuitive language for styling and to layout web pages, and it can describe the presentation of HTML or XML documents, including XML dialects like SVG, MathML, or XHTML, etc. Thoug, CSS can quickly become very cumbersome when a projetct's site starts to grow and to get more complex.


Some internal features from CSS itself can easily bring unintended changes to the project, just like its Cascade feature and also the feature where HTML elements inherit properties from their parents.


A CSS methodology brings then a set of guidelines and best practices to help the developer to achieve a more maintainable, scalable, reusable code. And some of these methodologies are:

1. **Atomic CSS**
2. **BEM (BLOCK, ELEMENT, MODIFIER)**
3. **ITCSS (Inverted Triangle CSS)**
4. **OOCSS (Object-Oriented CSS)**
5. **SMACSS (Scalable and Modular Architecture for CSS)**



###### Other articles from the Governance and Management series:
- `IT Governance and Mangement - Overview` [^1]
- `PMBOK and others Project Management Methodologies` [^2]
- `ITIL - Service Management Framework` [^3]
- `Risk Management - Overview` [^4]
- `Information Security - Overview` [^5]
- `Cryptography, Steganography and Criptanalysis - Overview` [^6]
- `Continuity Plan and Essentials for Businesses - Overview` [^7]     
- `Open Web Application Project Foundation (OWASP) - Overview` [^8]


### The DRY Principle

According to the [Medium site](https://medium.com/@uidev3594/css-methodologies-d31903bafab3), most of the CSS methodology derive from `Dont't Repeat Yourself` or DRY principle for reducing repetitions in software development code.


And as a mean to achieve that goal, some processes are applied to the development of the code:

1. **Modularity**: this is a core development concept and design, and not only at code level. So, with the more complex development contex, designing pages is no loger the best approach, because the system design should be the focus.   
    1.1. Breaking the code into smaller chunks (or files) and separating them by scope.   
    1.2. Coding components in a independent an encapsulated manner.   
    1.3. Naming CSS selectors according to their purpose and relationship with each other.
2. **Contexts**: there are some variation according the methodology used, but some general case categories could be:   
    2.1. Settings: this is the configuration rules/files with its variables (colors, sizing, typography definitions, etc.), and helpers (functions and mixins...).   
    2.2. Base: this is the layer responsible with the 'reset' and 'unclassed HTML rules' (that is the ordinaries <a> or <input>).    
    2.3. Layout: this is the layer that holds the structural classes that hold components on the page, like grids and containers.   
    42.4. Components: this should be the core of CSS architectures and design systems.
3. **Components**: as it was said, this should be the core elements of a CSS architecture and the ones to be reused according to some guidelines:    
    3.1. Keep recurrent components in their own file and give them the same name it is used for the selector.   
    3.2. But, smaller components that are not reused as repeating pattern, it should go inside the main complex component.
4. **Naming**: the naming convention used should convey meaning and promote organization.    
    4.1. Using a class naming convention to the components.



### The CSS Methodologies


#### Atomic CSS    
	
	
	

### BEM Methodology (Block, Element, Modifier)

The aim of the BEM (Block, Element, Modifier) methodology is a component-based approach for design which tries to clarify the intention and the relationship between a component (the Block) and its elements and modifiers.

1. **Block**: the component itself.
2. **Elements**: the inner parts of the components (descendents on the DOM)
3. **Modifiers**: variations for the block or for the elements.


The BEM methodology divides the interface into various independent blocks/components aiming to help strtucture the relationship and to reuse code. And for the naming practice, it goes by the class, that can be formed by `the block name plus two underscores followed by the element name:

```
.block__element
```


`On a organizational level, this approach promotes consistency and predictability across the Component layer. On a technical level, it helps decreasing selector specificity, increasing selector efficiency and decoupling our CSS from DOM structure (thus, promoting reusability).`  [Cheesecakelabs.com](https://cheesecakelabs.com/blog/css-architecture-first-steps/)
    
    
```
.block {}
.block__element {}
.block--modifier {}
.block__element--modifier {}
```
    
    
    
#### ITCSS (Inverted Triangle CSS)
	
	
	
	
#### OOCSS (Object-Oriented CSS)

The OOCSS (Object-Oriented CSS) methodology treats the design elements as objects, and aim heavy reuse of CSS codes. And there are 2 basic rules:

1. **Separation of structure from skin**: it defines the repeating visual features which should be written separately.
2. **Separation of containers and content**: it defines rarely use location-dependent styles. That is an object should look the same wherever you put it and child-selectors should be used less.



#### SMACSS (Scalable and Modular Architecture for CSS)
    
The SMACSS (Scalable and Modular Architecture for CSS) allows to the creation of a modular design in larger projects, using 5 categories for the CSS to have its files arranged in a clear and redable structure.
    
    
    
    
    
    
    
    
    
    
    
    


CSS Methodologies - Medium.com - https://medium.com/@uidev3594/css-methodologies-d31903bafab3

A web designer's guide to CSS methodologies - Creativebloq.com - https://www.creativebloq.com/features/a-web-designers-guide-to-css-methodologies

5 Methodologies for Architecting CSS - Valoremreply.com - https://www.valoremreply.com/post/5_css_methodologies/

BEM em 5min - Medium.com - https://medium.com/trainingcenter/bem-em-5min-f5c80fd23439

### Further Reading



[]()

### References

[CSS Architecture: First steps - Cheesecakelabs.com](https://cheesecakelabs.com/blog/css-architecture-first-steps/)


[]()


[^1]:it-governance-and-management-overview-2022-03-27

[^2]:pmbok-and-project-management-methodologies-2022-03-29

[^3]:itil-service-management-framework-2022-03-30

[^4]:risk-management-overview-2022-04-03

[^5]:information-security-overview-2022-04-05

[^6]:cryptography-steganography-and-cryptanalysis-overview-2022-04-07

[^7]:continuity-plan-and-essentials-for-businesses-overview-2022-04-06

[^8]:open-web-application-project-foundation-owasp-overview-2022-04-18


