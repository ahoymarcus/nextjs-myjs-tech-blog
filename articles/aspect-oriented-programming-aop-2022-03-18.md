---
author: 'Marcus Vinicius Richa'
title: 'Aspect Oriented Programming (AOP)'
date: '2022-03-18'
subject: 'development-articles'
description: 'As a programming paradigm, AOP aims to reduces code clutter and improve maintainability and readability of the code by isolating concerns at the application. It should be highlighted that AOP does not come to replace OOP, but to add and complement it by providing another way to the application to improve in modularity and also become cleaner.'
---

# Aspect Oriented Programming (AOP)

1. ##### Introduction
2. ##### Basic Structure of AOP Development
    2.1. Common Termilogies from AOP    
    2.2. Advantages of Aspect Oriente Programming (AOP)   
    2.3, Disadvantages of Aspect Oriente Programming (AOP)   
    2.4. When to Use AOP
3. ##### An Example of a Aspect-Oriented Module Design
4. ##### Popular AOP framworks
5. ##### Further Reading
6. ##### References

### Introduction
 
According to [Techopedia](https://www.techopedia.com/definition/205/aspect-oriented-software-development-aosd), Aspect-Oriented software development (AOSD) is a software design solution that helps to address the modularity issues that are not properly resolved by others software approaches, like procedural, structured and object-oriented programming (OOP).
 
As a programming paradigm, AOP aims to reduces code clutter and improve maintainability and readability of the code by isolating concerns at the application.


It should be highlighted that AOP does not come to replace OOP, but to add and complement it by providing another way to the application to improve in modularity and also become cleaner. [Kanjilal, J.](https://www.infoworld.com/article/3040557/my-two-cents-on-aspect-oriented-programming.html)


Yet, another comparison can be made between OOP and AOP, because while OOP tries to achieve modularization through the use of **classes**, AOP aims the same results by using **aspects**.


- Read more about software architecture and desing in this article:
- `Software Architecture and Design` [¹]



### Basic Structure of AOP Development

And the way AOP works is to encapsulate common functionalities from the application, so they can be reused throughout the system reducing duplication of code.

This king of cross-cutting concerns that are create may include security management modules, notification modules, transactional modules, expception management modules, etc.


#### Common Termilogies from AOP

- **Aspect**: it's a cross-cutting concern or a reusable module.
- **Introduction**: a feature that's used to declare additional methods and attributes for a particular type.
- **Join Point**: a point where one can plug plug an aspect in it.
- **Advice**: the action that is performed at a particular join point. It's also used to define the action that should be performed preceding or succeeding a method execution.
- **Weaving**: the act to provide solutions along for tangled codes along the application. 
- **Target Object**: a target object may be defined as one hat is advised by one or more aspects in your application.
- **Pointcut**: it specifies the weaving rules, i.e., it is used to define the join point where a particular advice can be applied in your application.


- **Note**: about the weaving concept, [Kanjilal, J.](https://www.infoworld.com/article/3040557/my-two-cents-on-aspect-oriented-programming.html) says that depending on the time the weaving happens, it can be in the compiled time, load-time or at run-time.


#### Advantages of Aspect Oriente Programming (AOP)

1. Reduced code clutter.
2. Reduced code redundancy.
3. Easier code maintainance.
4. Fast development.
5. Improved code readability.
6. Facilitate modularization.
7. Provides complementary benefits and may be used with other agile processes and coding standards.
8. Promotes reusability of code.


#### Disadvantages of Aspect Oriente Programming (AOP)

1. Increases the overhead of the project.
2. Increases the complexity of the design.
3. It's not well suited for small projects.


#### When to Use AOP

According to [Merrit T.](https://dzone.com/articles/when-use-aspect-oriented), just like any other architectural style, the use of AOP cannot be implyed beforehand and apart from the concrete requirements and constraints of a application.

Though, usually working with AOP is more related to non-functional requirementes and of quality attributes of the system, which don't deal directly with any specific functionality, but they do create the base to decouple parts of the application allowing reuse of coding.


`Again in my experiences, aspect oriented architecture is not as effective with small or less complex systems in comparison.  There is no need to model concerns for a system that has a limited amount of them because the added overhead would not be justified for the actual benefits of creating the aspect oriented architecture model.  Furthermore, these types of projects typically have a reduced time schedule and a limited budget.  The creation of the Aspect oriented models would increase the overhead of a project and thus increase the time needed to implement the system.` [Merrit T.](https://dzone.com/articles/when-use-aspect-oriented)


### An Example of a Aspect-Oriented Module Design

One good example for a module that being created by AOP should seriously reduce the code size, make it cleaner, more manageble and more scalable can be seen in this description from [chapter 1 - JBoss AOP 1.3.0 Docs](https://docs.jboss.org/aop/1.0/aspect-framework/userguide/en/html/what.html).


There, the author talks about the requirement to test a behavior from a application inserting measurements so metrics from the application could be generated into useful logs.

The problem with that requiremt is that if this is done by inserting metrics direct into the classes and objects throughout the application, this would bloat the code and would bring to those classes and objects concerns that shouldn't be managed by them.

Just as the author says, `metrics is irrelevant to your actual application: it doesn't represent a customer or an account, and it doesn't realize a business rule. It's simply orthogonal`. [JBoss AOP 1.3.0 Docs](https://docs.jboss.org/aop/1.0/aspect-framework/userguide/en/html/what.html)


But, while using AOP, a feature like metric that represents a crosscutting requirement or concern to many parts of the application, it can be cut from the places they don't concern, and can be encapsulated into some clean module that will control this concern across the whole application.

In this example from the book, there is a Java Class with the method **withdraw()** that is being measured, and the problem is the all the code used for this makes the class messier and much more difficult to scale while it is pressed by this logic that is strage for the specif class context:

```
01. public class Metrics implements org.jboss.aop.Interceptor
02. {
03.   public Object invoke(Invocation invocation) throws Throwable
04.   {
05.     long startTime = System.currentTimeMillis();
06.     try
07.     {
08.       return invocation.invokeNext();
09.     }
10.     finally
11.     {
12.       long endTime = System.currentTimeMillis() - startTime;
13.       java.lang.reflect.Method m = ((MethodInvocation)invocation).method;
14.       System.out.println("method " + m.toString() + " time: " + endTime + "ms");
15.     }
16.   }
17. }
```

But, when using AOP, all this excessive logic is taken from this specific class and from all the other classes and objects, they become cleaner and easier to maintain.

And also, with those specific set of measures being cut and set in their proper module, they also become easier to scale and mainain, because now theres only one place for them to be set and to be unset, for example.


### Popular AOP framworks

1. PostSharp
2. Spring framework
3. Castle Windsor
4. Microsoft Unity framework
5. Police Injection Block



### Further Reading

[Aspect Oriented Programming - Wikipedia](https://en.wikipedia.org/wiki/Aspect-oriented_programming)


### References

[What Does Aspect-Oriented Software Development (AOSD) Mean? - Techopedia](https://www.techopedia.com/definition/205/aspect-oriented-software-development-aosd

[Chapter 1. What Is Aspect-Oriented Programming? - JBoss.org](https://docs.jboss.org/aop/1.0/aspect-framework/userguide/en/html/what.html)

[My two cents on aspect-oriented programming - InfoWorld](https://www.infoworld.com/article/3040557/my-two-cents-on-aspect-oriented-programming.html)

[When to use Aspect Oriented Architecture (AOA/AOD) - Dzone.com](https://dzone.com/articles/when-use-aspect-oriented)


[¹]:software-architecture-and-design-2022-02-22


