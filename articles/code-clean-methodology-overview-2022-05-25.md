---
author: 'Marcus Vinicius Richa'
title: 'Clean Code Methodology - Overview'
date: '2022-05-25'
subject: 'development-articles'
description: 'The importance of developing software while maintain a production of a Clean Code comes from the fact that this discipline helps those who need to use the code, or to maintain, or even develp it further. Moreover, this not only helps others who use the code, but also helps the author himself whenever he has to revisit the code to inspect later, then a clean code would really help him also to catch up with it again. The essential patterns in a clean code can be seem as the indentation, semicolons, line length and naming convention.'
---

# Clean Code Methodology - Overview

1. ##### Introduction  
2. ##### 10 Principles for Keeping Your Programming Code Clean
3. ##### Commenting the Code
4. ##### CodeAsDocumentation
5. ##### Self Documenting Code
6. ##### Beautiful JavaScript: Chainable/Cascading Methods
7. #####  
8. ##### 
9. ##### Further Reading
10. ##### References

### Introduction
 
The importance of developing software while maintain a production of a Clean Code comes from the fact that this discipline helps those who need to use the code, or to maintain, or even develp it further.

Moreover, this not only helps others who use the code, but also helps the author himself whenever he has to revisit the code to inspect later, then a clean code would really help him also to catch up with it again:

``` 
const x = 
function(z) {
let w = 0; z.forEach(
function(q) {
    w += q;
}); return w;
}

x([2, 2, 2]);
``` 

The above example, used in the course from The Odin Project shows a block code with almost no care to a clean code aesthetic. So, while in the first example there is basically no indentation, the naming used is generic and does not describe the context or the purpose aimed, the next example bellow is much easier to follow and the naming even brings some context to the work being done:

```
const sumArray = function(array) {
    let sum = 0;
    
    array.forEach(function(number) {
        sum += number;
    });
    
    return sum;
}

sumArray([2, 2, 2]);
``` 

Then we here bellow 4 points which can serve as a essential pattern for start cleaning the code:

1. **Indentation**: whether it is used spaces or tabs, it is important to be consistant with the choise.
2. **Semicolons**: eventhough semicolons are in most cases optional (because the JS compiler automatically insert them when they are omitted), it still can break some functionalities in certain situations and lead to bugs.   
    2.1. So, as a rule it is better to always use semi-colons.
3. **Line length**: once again, though it can vary in length, to have something about **80 characters** as limit could greatly improve the readability of the code.   
    3.1. Then, after the line is broken, it has to restart with a **indentation of the second line 2 levels**.   
    3.2. The breaks should follow: **an operator** or **a comma**. 
4. **Naming things**: here, **the names for functions and variables should be descriptive**. To use cameCase and be consistant.   
    4.1. Variables should start with a noun or a adjective (This is a noun phrase).      
    4.2. Functions should start with a verb.   
    4.3. Except for some specific variables inside loops or callback functions, there should not be any single character name.



###### Other articles from the Governance and Management series:
- `IT Governance and Mangement - Overview` [^1]
- `PMBOK and others Project Management Methodologies` [^2]
- `ITIL - Service Management Framework` [^3]
- `Risk Management - Overview` [^4]
- `Information Security - Overview` [^5]
- `Cryptography, Steganography and Criptanalysis - Overview` [^6]
- `Continuity Plan and Essentials for Businesses - Overview` [^7]     
- `Open Web Application Project Foundation (OWASP) - Overview` [^8]


### 10 Principles for Keeping Your Programming Code Clean

1. **Revise Your Logic before Coding**: here, using some designs to help to define the basic project under development can be a valid support for the developer while create code.
2. **Clearly Expose the Structure of the Page**: so, while structuring the page, it is important not only to present a main container to hold the features, but also to define a main ID to be representative to the main container.   
    2.1. So, not only the presence of the highlighted main container will be there to help the work of improve the code script, but also the ID reference will make it easier to be assessed afterwards.
3. **Use the Correct Indentation**: the indentation works besides the naming of the main container to make the code much more readable.
4. **Write Explanatory Comments**: It’s easy, fast, and very straight-to-the-point, since it’s done right then and there when it’s needed. Some good examples of comment use:   
    4.1. To author specifications.   
    4.2. To detail the functionalities of a method or procedure.   
    4.3. To place quick notifications or labels that state a recent change was made.
5. **Avoid Abusing Comments**: here, a important point could be to state what comments are **not** made for:   
    5.1. Writing explanatory notes to self.   
    5.2. Blaming stuff on other people.   
    5.3. Writing vage statements.   
    5.4. Erasing chunks of code: sometimes people are not sure of erasing things and it's not absolutely bad to comment that code instead for the near future.
6. **Avoid Extremely Large Functions**: to have a pattern of breaking up large functions into smaller ones.   
    6.1. A pattern that should be applied sinde the begging of the project.
7. **Use Naming Standards for Functions and Variables**:   
    7.1. Whenever a variable of a function is created, its name should be descriptive enough as to give a general idea of what it does or what it's for.
8. **Treat Changes with Cautioin**: just as the job prescribes to develop with care and easy to create a clean code, also while changing the code the same standards applied should maintain.
9. **Avoid Indiscriminate Mixing of Coding Languages**: having appropriate divisions between different coding languages will give order to the logic applied.
10. **Summarize Your Imports**: this feature is very important not only to help to keep the code cleaner, but also to save loading time , since each imported file is an HTTP request that tampers with the perfomance of the application.



### Commenting the Code

Jeff Atwood in his article, [Coding Without Comments](https://blog.codinghorror.com/coding-without-comments/), makes some considerations about the importance of comments in a programming code. But, even another point he makes is that it should not be used arbitrarily increasing the code size or even to be used to explain the working of the program:

`I'm constantly running across comments from developers who don't seem to understand that the code already tells us how it works; we need the comments to tell us why it works. Code comments are so widely misunderstood and abused that you might find yourself wondering if they're worth using at all. Be careful what you wish for. Here's some code with no comments whatsoever[...] ` (Jeff Atwood)


So, to prove his point, Atwood first presents a mathmatical coding block with no comments, nor any pattern for redability of the code. And shows how this attitude hinders the work of interpreting the code.

Then he represents the same coding block with a comment explaining the work being done, which do help to give grasp about the operation, but that does not explain the reason that code block was there in the first time.

Finally, the author rewrites the code block a third time, now using patterns like a explicit naming convention and defining a main block of code with a function, which by themselves could give a clear intent about the code being performed without the comments:

`While comments are neither inherently good or bad, they are frequently used as a crutch. You should always write your code as if comments didn't exist. This forces you to write your code in the simplest, plainest, most self-documenting way you can humanly come up with[...] Writing good, meaningful comments is hard. It's as much an art as writing the code itself; maybe even more so. As Sammy Larbi said in Common Excuses Used To Comment Code, if your feel your code is too complex to understand without comments, your code is probably just bad. Rewrite it until it doesn't need comments any more. If, at the end of that effort, you still feel comments are necessary, then by all means, add comments … carefully.` (Jeff Atwood)


Another point from the same author, Jeff Atwood, can be made even more cleary in his other article about the same topic on comments: [Code Tells You How, Comments Tell You Why](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/)


So, in this other article it becomes even more clear that the work of a developer should be much more than instructing machines, but to present written features to people. The author also cites 2 other authors:

1. `Structure and Interpretation of Computer Programs` (SUSSUMAN and ABELSON):

`Programs must be written for people to read, and only incidentally for machines to execute.`

2. `Literate Programming` (Knuth ):

`Let us change our traditional attitude to the construction of programs: Instead of imagining that our main task is to instruct a computer what to do, let us concentrate rather on explaining to human beings what we want a computer to do.` 


But again, even that pattern to make the program more readable for humans cannot cope with all the necessary meanings. So, in another quotation from Jef Raskin, the author explain that eventhough a readable code can explain how the feature works, it still cannot explain **why** the code was written, nor the rationale for its choosing:

`Code can't explain why the program is being written, and the rationale for choosing this or that method. Code cannot discuss the reasons certain alternative approaches were taken. For example:` 

```
/* 
    A binary search turned out to be slower than the Boyer-Moore algorithm 
    for the data sets of interest, thus we have used the more complex, but faster
    method even though this problem does not at first seem amenable to a string
    search technique. 
*/
``` 


### CodeAsDocumentation

According to the author Martin Fowler in his article, [CodeAsDocumentation](https://www.martinfowler.com/bliki/CodeAsDocumentation.html), where following the discipline of the Agile methodology, with the due raise in the importance of the programming in the software development, a new away to view the programming code not only as a resource in need of documentation, but as a 'primary documentation of a software system', though, of course, there should be other supplementare documentation apart.


`The rationale for the code being the primary source of documentation is that it is the only one that is sufficiently detailed and precise to act in that role - a point made so eloquently by Jack Reeves's famous essay ""[What is Software Design?](https://www.developerdotstar.com/mag/articles/reeves_design_main.html)" This principle comes with a important consequence - that it's important that programmers put in the effort to make sure that this code is clear and readable. Saying that code is documentation isn't saying that a particular code base is good documentation. Like any documentation, code can be clear or it can be gibberish. Code is no more inherently clear than any other form of documentation. (And other forms of documentation can be hopelessly unclear too - I've seen plenty of gibberish UML diagrams, to flog a popular horse.)`


And so, Martin Fowler believes that much of the fact that code is often hard to read is because people don't have that notion to write to others, and as a documentation as well, and since there is no will, then the author deduce that there will be little change for bringing clarity to the work:

`The next step is to learn how, and here let me offer you the advice of a best selling technical author - there's nothing like review. I would never think of publishing a book without having many people read it and give me feedback. Similarly there's nothing more important to clear code than getting feedback from others about what is or isn't easy to understand. So take every opportunity to find ways to get other people to read your code. Find out what they find easy to understand, and what things confuse them. (Yes, pair programming is a great way to do this.).`



### Self Documenting Code





Self Documenting Code - Wiki.c2.com - https://wiki.c2.com/?SelfDocumentingCode




















### Beautiful JavaScript: Chainable/Cascading Methods

`Chaining methods, also known as Cascading, refers to repeatedly calling one method after another on an object, in one continous line of code[...] is not just pleasurable and convenient but also succinct and intelligible. It allows us to read code like a sentence, flowing gracefully across the page. It also frees us from the monotonous, blocky structures we usually construct.` (Richard Bovell)

```
str.replace("k", "r").toUpperCase().substr(0, 4);
``` 

- **Advantages in using a Cascading Patterna according to the author:**
1. There is no need to create temporary variables to save each step of the process.
2. Now, every line of code clearly and succinctly expresses what it is doing, particularly when the name of each method is defined using verbs. 
3. The code gets more maintainable because there is a simpler, lean, specialized use of the methods.
4. Overall, one can easily read the 'chainable' code, effortessly type it, and confortably understand it.



### Airbnb Javascript Style Guide - Github

Airbnb JavaScript Style Guide() { - Github.com -  https://github.com/airbnb/javascript






Self Documenting Code - Wiki.c2.com - https://wiki.c2.com/?SelfDocumentingCode

CodeAsDocumentation - MartinFowler.com - https://www.martinfowler.com/bliki/CodeAsDocumentation.html


### Further Reading

[Airbnb JavaScript Style Guide() { - Github.com](https://github.com/airbnb/javascript)


[]()

### References

[10 Principles for Keeping Your Programming Code Clean - Onextrapixel.com](https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/)

[Coding Without Comments - CodingHorror.com](https://blog.codinghorror.com/coding-without-comments/)

[Code Tells You How, Comments Tell You Why - CodingHorror.com](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/)

[Beautiful JavaScript: Easily Create Chainable (Cascading) Methods for Expressiveness - Web.archive.org](https://web.archive.org/web/20190211152543/https://javascriptissexy.com/beautiful-javascript-easily-create-chainable-cascading-methods-for-expressiveness/)


[]()


[^1]:it-governance-and-management-overview-2022-03-27

[^2]:pmbok-and-project-management-methodologies-2022-03-29

[^3]:itil-service-management-framework-2022-03-30

[^4]:risk-management-overview-2022-04-03

[^5]:information-security-overview-2022-04-05

[^6]:cryptography-steganography-and-cryptanalysis-overview-2022-04-07

[^7]:continuity-plan-and-essentials-for-businesses-overview-2022-04-06

[^8]:open-web-application-project-foundation-owasp-overview-2022-04-18


