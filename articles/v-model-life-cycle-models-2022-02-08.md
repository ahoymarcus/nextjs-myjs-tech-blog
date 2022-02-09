---
author: 'Marcus Vinicius Richa'
title: 'V-Model - Software Life Cycle Models'
date: '2022-02-08'
subject: 'development-articles'
description: 'The V-Model of software life cycle development receives its name from the fact that the production process runs in parallel implementing both a Development Cycle and a Testing Cycle, side by side.'
---

# V-Model - Software Life Cycle Models

1. ##### Introduction   
2. ##### BV-Model Verification phases
3. ##### V-Model Validation phases  
4. ##### When to use V-Model?
5. ##### Advantage of V-Model
6. ##### Disadvantage of V-Model
9. ##### Further Reading
10. ##### References

### Introduction

The V-Model of software life cycle development receives its name from the fact that the production process runs in parallel implementing both a Development Cycle and a Testing Cycle, side by side. 

`The V-model is a type of SDLC model where process executes in a sequential manner in V-shape. [...] It is based on the association of a testing phase for each corresponding development stage. [...] The next phase starts only after completion of the previous phase i.e. for each development activity, there is a testing activity corresponding to it.` 
[GeeksforGeeks](https://www.geeksforgeeks.org/software-engineering-sdlc-v-model/)


And for this same reason it is also known as "Verification an Validation Model", where:

1. Verification: it is the static analysis or review of the process to evaluate the product, that is without executing code.
2. Validation: it is a dynamic analysis through the means of testing by executing code to determ that the product meets the customer expections and requirements.

![software-engineering-v-model](/images/articles/development/software-engineering-v-model.png)
[GeeksforGeeks](https://www.geeksforgeeks.org/software-engineering-sdlc-v-model/)

### BV-Model Verification phases

1. **Business requirement analysis**: that's the first step where requirements are understood from the customer side.
2. **System desing**: at this phase the engineers create technical documents from the requirements brought from the business model to be used at later phases.
3. **Architecture design**: it is the baseline of the system with its list of the modules, their functionalities, interfaces, dependencies, data schema, etc...
4. **Module design**: in this phase the module is broke down into small modules, and a detailed design of these modules is specified as a Low-Level Design (LLD) of the system.
5. **Coding phase**: after the requiremente analysis and design phases, coding begins till its complition, taking in accout also all the optimizations and reviews necessary.

### V-Model Validation phases

1. **Unit Testing**: this phase in validation starts with the module design phase, and is put together to eliminate erros at unit level.
2. **Integration Testing**: this phase comes after to verify the correct performance of the units working in groups and sides with de **Verification** phase of **Architecture Design**.
3. **System Testing**: this phase aims to ensure that expectations from clients are beign met, so it comes with the presence of the customer business team to perform the testing.
4. **Acceptance Testing**: this later phase is also performed in conjunction with the customer team as the tests are done at the user "atmosphere" to tackle all non-functional problems that can occur at production time.

### When to use V-Model? 

- When the requirement is well defined and not ambigous.
- The V-shaped model should be more inclined for small to mediu-sized projects.
- Also, the V-shaped model could be chosen when there is resources available with essential technical expertise.

### Advantage of V-Model

- Easy to understand, since it is a more fixed model with its phases and especific deliverables and reviews.
- Testing methods occur well before coding begins.
- Avoids the risk of downward flow of defects from phase to another.

### Disadvantage of V-Model

- Very rigid model and the least flexible.
- Its not a good model for complex and object-oriented projects.
- Software is developed only during the implementation stage, so no early prototypes of software are produced.
- This model does not support iteration of phases.
- It is not suitable for projects which requirements are not clear or contains high risk.
- Also, it is not fit for projects that may have changes in the requirements, and if that happens in the course of the project, the tests related to the new requirements have to be updated.



### Further Reading

[Software Engineering | SDLC V-Model - GeeksforGeeks](https://www.geeksforgeeks.org/software-engineering-sdlc-v-model/)

### References


[V-Model  - JavaTPoint](https://www.javatpoint.com/software-engineering-v-model)

