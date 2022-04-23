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

The Atomic CSS simply defines a set of classes representing single-purpose styling units, and this methodology aims to provide highly granular and reusable styles, instead of rules for every component.
	

According to the site [Valoremreply.com](https://www.valoremreply.com/post/5_css_methodologies/), this methodology solves some of the traditional CSS issues using classes that are considered single-purpose styling units. And thus this can reduce the specificity conflicts and tries to make the styling more variable in a predictable manner. And still according to the site, this method helps in reduction in redundancy of code and the confusion of overriding CSS styles.
	

`The advantage to this methodology is that it has a lower barrier to entry and is more easily understood by those who are not well-versed in CSS. This approach can handle longhand or shorthand class names (longhand would be more readable whereas shorthand favors brevity).` [Valoremreply.com](https://www.valoremreply.com/post/5_css_methodologies/)
	

According to the site [Creativebloq.com](https://www.creativebloq.com/features/a-web-designers-guide-to-css-methodologies), while it aims to create a specific class selector for each repeating CSS decalaration, it welcomes the definition of property values in class names (different from what OOCSS expects):

```
.mb-sm { margin-bottom: 16px; }
.mb-lg { margin-bottom: 32px; }
.color-blue { color: #1e90ff; }

<div class="mb-lg">
    <p class="mb-lg color-blue">Blue text</p>
    <img class="mb-sm" />
</div>
```

And yet according to the site [Creativebloq.com](https://www.creativebloq.com/features/a-web-designers-guide-to-css-methodologies), it can be said about the Atomic CSS that:


1. **Advantages**: there is the easy of maintaining a consistent code and not having to invent classes for components requiring a single CSS rule.
2. **Disadvantages**: that when it is used on its own it leads to an unmanageble number of classes and bloated HTML files.   
    2.1. So, as the site states, its is common to use the Atomic CSS principle to create helper classes that define consistent, reusable decalration blocks.



#### BEM Methodology (Block, Element, Modifier)

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
    

Finally, about BEM can be said that:

1. **Advantages**: that it is a highly effective naming convention that creates predictably behaving CSS that is easy to manage, maintain and scale.
2. **Disadvantages**: 
    2.1. The difficulty in inventing class names for deeply nested objects, besides the long class names and bloated HTML that may sometimes result.   
    2.2. The lack of of consistency that is caused by the inability to share CSS between objects.



Interesting to notice from [Medium.com](https://medium.com/@uidev3594/css-methodologies-d31903bafab3), the BEM methodology has a have strict way to structure the CSS into files, where it suggests `that every single block, element, and modifier should have its own CSS file`.

So, a possible scenario to a project could be just like this:

``` 
blocks/
    input/
        _type/
            input_type_search.css
        __box/
            input__box.css
        input.css
        input.js
    button/
        button.css
        button.js
        button.png
``` 

`The above structure is very organized, but to create a new file for every new class basically is a little extreme for us. This is one reason BEM is difficult to fully implement in the recommended manner.`  [Medium.com](https://medium.com/@uidev3594/css-methodologies-d31903bafab3)



#### ITCSS (Inverted Triangle CSS)
	
The ITCSS (Inverted Triangle CSS) methodology aims to organize the CSS files to improve the use of the namespace and selectors specificity:


`ITCSS separates your global CSS codebase into several sections to form an inverted triangle structure. This method provides a solid level of encapsulation so that it can prevent non-shared CSS-rules from interfering with each another. Unlike other methodologies ITCSS is very flexible as it does not force one to use any naming convention. [...] So, The best way to maintain our CSS is, to take the core concepts of BEM and SMACSS and combined them in a way that made sense to modularize our CSS.`  [Valoremreply.com](https://www.valoremreply.com/post/5_css_methodologies/)


The main design pattern followed by this methodology should be the arrangement of the code is a specificity descending way, that is, the least specific and mostly generic selectors appear at the start/top of the file, while the specificity steadly increases downwards.

So, the CSS files arranged as a ITCSS layer can be ordered this way:

1. **Settings layer**: this broader layer can define all variables.
2. **Tools layer**: this layer can be used to declaring mixins and other functions that are globally required.
3. **Generic layer**: this layer can contain all the normalized, high-level, far-reaching styels.
4. **Elements layer**: this layer can hold the styles for bare HTML elements and can redefine the default styles for those elements in this layer.
5. **Object layer**: this layer has the styles for the first elements that have classes (like containers, wrappers, rows, etc.).
6. **Components layer**: this layer can house most of the UI element styles.
7. **Utilities layer**: this most specific layer can override anything that goes before in the triangle.


Here we have a very descriptive illustration from [prtksxna.com](https://prtksxna.com/bookmark-itcss/):

![itcss-css-methodology-medium](/images/articles/web-development/itcss-css-methodology-medium.png)


	
#### OOCSS (Object-Oriented CSS)

The OOCSS (Object-Oriented CSS) methodology treats the design elements as objects, and it aims heavy reuse of CSS codes. And there are 2 basic rules:

1. **Separation of structure from skin**: it defines the repeating visual features which should be written separately.
2. **Separation of containers and content**: it defines rarely use location-dependent styles. That is an object should look the same wherever you put it and child-selectors should be used less.


So, as a guideline, the OOCSS identifies visual elements as objects and separates their struture into a declaration block, so it can be maintainend in a single place, besides being reused. 


`Declaration blocks are applied to elements using single-class selectors to avoid specificity issues. This technique also separates content from container, so objects look the same wherever they appear. Classes also decouple mark-up from CSS. Using .title instead of h2 for heading <h2 class="title"> allows it to be changed to <h3 class="title"> without changing the CSS. To further separate HTML and CSS, class names should not include property values. A class 'blue' would require renaming in HTML and CSS if the colour changed.` [Creativebloq.com](https://www.creativebloq.com/features/a-web-designers-guide-to-css-methodologies)


Examples of class naming used with OOCSS:

```
.button { padding: 10px 16px; }
.primary-skin { color: blue; }
.secondary-skin { color: green; }

<button class="button primary-skin">primary skin button</button>
<button class="button secondary-skin">secondary skin button</button>
<div class="primary-skin">primary skin div</div>
```


- **Still according to the site [Creativebloq.com](https://www.creativebloq.com/features/a-web-designers-guide-to-css-methodologies), the OOCSS has its disadvantage**:
- The lack of rules leads to variations in interpratation that can result in inconsistences.



#### SMACSS (Scalable and Modular Architecture for CSS)
    
The SMACSS (Scalable and Modular Architecture for CSS) allows to the creation of a modular design in larger projects, using 5 categories for the CSS to have its files arranged in a clear and redable structure:

1. **Base**: these should be the default values used across the entire site for all elements.
2. **Layout**: it divides the pages into major sections with the responsabilidty to properly position the elements on the page.
3. **Module**: these contains the core reusable blocks, and should represent the independent page fragments/components that has specific functionalities.
4. **State**: it denotes the variations for each element, as it auguments other styles under given conditions.   
    4.1. Like states of 'active', or 'disabled', or 'is-visible'.
5. **Theme**: it should be akin to the 'state' category, but it applies to modules and layouts.   
    5.1. Mostly these are elements that repeat across the whole project like the rules of the primary colors, shapes, borders, shadows, and such.


According to the site [Medium.com](https://medium.com/@uidev3594/css-methodologies-d31903bafab3), the SMACSS does not place to much emphasis on how to structure CSS into files:

```
base/

layouts/

modules/

states/

app.scss
``` 




### Further Reading

[BEM em 5min - Medium.com](https://medium.com/trainingcenter/bem-em-5min-f5c80fd23439)


### References

[CSS Architecture: First steps - Cheesecakelabs.com](https://cheesecakelabs.com/blog/css-architecture-first-steps/)

[5 Methodologies for Architecting CSS - Valoremreply.com](https://www.valoremreply.com/post/5_css_methodologies/)

[A web designer's guide to CSS methodologies - Creativebloq.com](https://www.creativebloq.com/features/a-web-designers-guide-to-css-methodologies)

[CSS Methodologies - Medium.com](https://medium.com/@uidev3594/css-methodologies-d31903bafab3)


[]()


[^1]:it-governance-and-management-overview-2022-03-27

[^2]:pmbok-and-project-management-methodologies-2022-03-29

[^3]:itil-service-management-framework-2022-03-30

[^4]:risk-management-overview-2022-04-03

[^5]:information-security-overview-2022-04-05

[^6]:cryptography-steganography-and-cryptanalysis-overview-2022-04-07

[^7]:continuity-plan-and-essentials-for-businesses-overview-2022-04-06

[^8]:open-web-application-project-foundation-owasp-overview-2022-04-18


