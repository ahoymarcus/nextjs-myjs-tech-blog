---
author: 'Marcus Vinicius Richa'
title: 'Thinking Like a Programmer and Problem Soving - Overview'
date: '2022-05-17'
subject: 'development-articles'
description: '.'
---

# Thinking Like a Programmer and Problem Soving - Overview

1. ##### Introduction  
2. ##### Thinking Like a Programmer
    2.1. Understand the Problem to be Solved   
    2.2. Planning the Steps   
    2.3. Divide and Conquer
    2.4. Being Stuck
3. #####  
	3.1.	
	3.2.
4. ##### 
5. ##### 
6. ##### 
7. #####  
8. ##### 
9. ##### Further Reading
10. ##### References

### Introduction
 
 
 
 ###### Other articles from the Governance and Management series:
- `IT Governance and Mangement - Overview` [^1]
- `PMBOK and others Project Management Methodologies` [^2]
- `ITIL - Service Management Framework` [^3]
- `Risk Management - Overview` [^4]
- `Information Security - Overview` [^5]
- `Cryptography, Steganography and Criptanalysis - Overview` [^6]
- `Continuity Plan and Essentials for Businesses - Overview` [^7]     
- `Open Web Application Project Foundation (OWASP) - Overview` [^8]



### Understand the Problem to be Solved
 
According to a [article](https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/) in freecodecamp by Richard Reis, to think like a programmer should be the same as the process of problem solving, or in other words to think programmatically while follow the steps to solve problems in a more effective way.


And the author even extends that notion defining **problem solving** as a meta-skill, where in any set of problems people has to deal with solutiona to a problem, except that commonly this task is done randomly.


- **Richard Reis**:
``` 
Unless you have a system, this is probably how you “solve” problems (which is what I did when I started coding):

   1- Try a solution.
   2- If that doesn’t work, try another one.
   3- If that doesn’t work, repeat step 2 until you luck out.
``` 


And bellow even 2 more quotation on the solving problems subject:

`Demonstrating computational thinking or the ability to break down large, complex problems is just as valuable (if not more so) than the baseline technical skills required for a job.` Hacker Rank (2018 Developer Skills Report)


`The biggest mistake I see new programmers make is focusing on learning syntax instead of learning how to solve problems.` V. Anton Spraul


###### Other articles about programming:
- [The 8 Best Coding Challenge Websites to Help You Level Up Your Skills in 2020](https://www.freecodecamp.org/news/the-8-most-popular-coding-challenge-websites-of-2020/)



### Thinking Like a Programmer

#### Understand the Problem to be Solved

This is the first step because it's important to know exactly what is being asked in the problem or what have to be done. And it became clear someone's knowledge about the understanding of the problem when people can put it into words and explain it.


 If you can’t explain something in simple terms, you don’t understand it.` Richard Feynman


####  Planning the Steps   

Write down the necessary steps to deal with the inputs and return the right data.


Use Pseudocode as a from of designing the algorithm project:

> Pseudocode is a useful thing to learn because it focuses on the building block concepts of programming languages without you having to worry about whether you are using the "right" words. Once you've nailed the logic of coding, the rest is just filling in your pseudocode with the syntax of a particular programming language. In a lot of ways, pseudocode is similar to the mockups you created in the Design mini-course: it basically scaffolds the solution you'll be implementing later.
> [What is Pseudo-coding?](https://web.archive.org/web/20211229231605/https://www.vikingcodeschool.com/software-engineering-basics/what-is-pseudo-coding)


Also, dealing with the language design of some algorithm, it's possible to get rid of the complexities of the programming language itself:

```
WHEN the user inputs money:
    IF the bill is too crumpled to read,
        provide an error message,
        and return the bill.
    ELSE,
        Add it to the balance
WHEN the user selects an item:
    IF they haven't put in enough money,
        ask for more.
    IF the item is out of stock,
        ask them to make a new selection.
    ELSE,
        determine change,
        dispense change,
        zero out the balance,
        and dispense the item.
WHEN the user hits the "cancel" button:
    IF the user has input money without making a purchase,
        return the money,
        and zero out the balance
``` 


But following some general problem design, this planning step phase should have the work done in a more incremental way, where after the first general concept is set and tested, then it is possible to bring more specifications into it:


```
Record the money being inputted;
Dispense the item if able to;
Handle any cancellation requests;
```

> And you can probably see how each one of those gets fleshed out further. As you get more and more detailed, your pseudocode might start resembling real code, with variables and method names naturally coming out of it. 
> [What is Pseudo-coding?](https://web.archive.org/web/20211229231605/https://www.vikingcodeschool.com/software-engineering-basics/what-is-pseudo-coding)



#### Divide and Conquer

According to Reis this is the most important step of all! And it means that someone should necer try to solve big and complex problems directly, but break it into sub-problems, each of them much smaller and simpler than the original problem.`

Then, solve each sub-problem one by one. Begin with the simplest. Simplest means you know the answer (or are closer to that answer).``Richard Reis


Another important point in relation to be tackling easier problems is the fact that those simpler problems don't depend on inputs from other sub-problems being solved.

Then, after having solved the first sub-problem, it is time to visit each of the others until they are all finished and their results can be linked to form the original problem in hand.


> If you’re stuck, you should reduce the problem to something simpler. Instead of the third-highest number, what about finding the highest overall? Still too tough? What about finding the largest of just three numbers? Or the larger of two?
> Reduce the problem to the point where you know how to solve it and write the solution. Then expand the problem slightly and rewrite the solution to match, and keep going until you are back where you started. — V. Anton Spraul


#### Being Stuck

And even when all the steps cannot be tackled to solve all the original problem, there are some steps that can also be done to try to help to lead the way.


> The difference is the best programmers/problem-solvers are more curious about bugs/errors than irritated. Richard Reis

So, there are 3 things to try in some stick situation:

1. **Debugging**: going step by step and analyse the output of each subproblem to try to find the error.
2. **Reassess**: take a step back and look at the problem from another perspective, trying to find some approach more general and abstract for that problem.
3. **Research**: this is important not only because many others may have passed the same problems, but also to learn different solutions even when the right solution is already correct.


>  Caveat: Don’t look for a solution to the big problem. Only look for solutions to sub-problems. Why? Because unless you struggle (even a little bit), you won’t learn anything. If you don’t learn anything, you wasted your time.








### Further Reading

[Think Like a Programmer: An Introduction to Creative Problem Solving - Amazon](https://www.amazon.com/Think-Like-Programmer-Introduction-Creative/dp/1593274246/ref=sr_1_3?ie=UTF8&qid=1540326000&sr=8-3&keywords=think+like+a+programmer)

[How to Begin Thinking Like a Programmer - Coding Tech channel](https://www.youtube.com/watch?v=azcrPFhaY9k)

[Video on repetitive programming techniques - MitOpenCourseWare](https://ocw.mit.edu/courses/res-tll-004-stem-concept-videos-fall-2013/resources/basic-programming-techniques/)

[]()

### References

[How to Think Like a Programmer: Lessons in Problem Solving - Richard Reis](https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/)

[What is Pseudocoding - Archive.org](https://web.archive.org/web/20211229231605/https://www.vikingcodeschool.com/software-engineering-basics/what-is-pseudo-coding)


[]()



[^1]:it-governance-and-management-overview-2022-03-27

[^2]:pmbok-and-project-management-methodologies-2022-03-29

[^3]:itil-service-management-framework-2022-03-30

[^4]:risk-management-overview-2022-04-03

[^5]:information-security-overview-2022-04-05

[^6]:cryptography-steganography-and-cryptanalysis-overview-2022-04-07

[^7]:continuity-plan-and-essentials-for-businesses-overview-2022-04-06

[^8]:open-web-application-project-foundation-owasp-overview-2022-04-18


