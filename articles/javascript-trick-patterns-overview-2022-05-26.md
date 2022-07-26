---
author: 'Marcus Vinicius Richa'
title: 'JavaScript Trick Patterns - Overview'
date: '2022-05-26'
subject: 'web-dev-articles'
description: 'This article focuses specially at some trick features that are more commonly found in the JavaScript language like prototype, hoisting, etc. And this article also focus on more general tasks, but here seem from the perspective of the JavaScript language and its core tasks.'
---

# JavaScript Trick Patterns - Overview

1. ##### Introduction
2. ##### Organizing the JavaScript Code
    2.1. Plain Old JavaScript Objects and Object Constructor   
    2.2. Factory Functions and the Module Pattern    
    2.3. Classes    
    2.4. ES6 Modules
3. ##### The 'This' Word
	3.1. The Global Context   
	3.2. The Function Scope   
	3.3. Class Context    
	3.4. As an Object Method    
	3.5. This on the Objects Prototype Chain or at a Getter or Setter    
	3.6. As a Constructor    
	3.7. The call() and the apply() Methods (Indirect Invocation)
	3.8. The bind() Method
4. ##### JavaScript Function Parameters
    4.1. Undefined Missing Arguments   
    4.2. The Arguments Object   
    4.3. Arguments are Passed by Value   
    4.4. Objects are Passed by Reference
5. ##### Scope - Closure & Hoisting
    5.1. Scope and Closure   
    5.2. Private and Public Scope in JavaScript    
    5.3. Hoilsting
6. ##### The Eval() Function
    6.1. The Risks of the Eval() Function    
    6.2. Never Use Eval()!   
    6.3. Are eval() and new Function() the same thing?   
    6.4. When Eval() Is Not Evil
7. ##### Immediately Invoked Function Expressions - IIFE
8. ##### 
9. #####Test Driven Development
    9.1. JavaScript and TDD
10. ##### Further Reading
11. ##### References

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


###### Other articles about JavaScript and of Patterns:
- `JavaScript Trick Patterns for the DOM - Overview`[^9]   
- `Javascript Object Oriented Programming (OOP) Pattern` [^10]   
- `Front-end Development Patterns` [^11]   
- `Front-end Architectures` [^12]   
- `Software Architecture Patterns - Overview` [^13]   
- `Software Architecture and Design` [^14]




### Organizing the JavaScript Code

As it is thought in The Odin Project studies, working around the JavaScript file system organization can be a serious and difficult matter, not as much because JavaScript may detach itself as a more complex language, but because JavaScript let all of these decision in the hands of the developers, while many other languages already have a predefined file structure to be followed by.


Said that, The Odin plataform presents 4 patterns to be studied in their series:
1. **Plain Old JavaScript Objects and Objects Constructors**
2. **Factory Functions and the Module Pattern**
3. **Classes**
4. **ES6 Modules**


#### Plain Old JavaScript Objects and Object Constructor

###### Basic JavaScript Objects Overview

At this section it will only be talked about the basics about Object Oriented Programming with JavaScript, but there is a whole section dedicated for this subject later on this article.


So, to construct objects in JavaScript, the most common way is to use Object Literal:

```
const myObject = {
    myProperty: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
        // do some stuff!!!
    }
};
```

And, on the other side, there are 2 basic structures to acess the object and its properties:
1. **Dot notation**: it's the simpler and the cleaner one, but it is also more restricted in its use.
2. **Bracket notation**: it's a more cumbersome syntax to use, but it is the only way to access the objet's properties in some scenarios:   
    2.1. To be used refering to variables.   
    2.2. To be used with a string parameter.  
    2.3. Object properties defined at runtime.


```
const variable = "myProperty";


// dot notation
myObject.myProperty // returns 'Value!'
myObject.variable // returns undefined, because it looks for a property named variable!


// bracket notation
myObject['obnoxious property'] // returns '[Function]'
myObject[variable] // functions ok, and it works the same as myObject['myProperty']


// work with dynamic properties
const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    bio: function() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function() {
        console.log(`Hi! I'm ${this.name[0]}.`);
    }
};

const input = prompt(`Retrieve data from the app: insert 'name' or 'date' in the space provided bellow`);
console.log(person[input])
```


Another very interesting possibility with the **bracket notation** is to allow the users to define not only the value of the object's property, but also the property name itself:

```
person = {};

const myDataName = 'height';
const myDataValue = '1.75m'';

person[myDataName] = myDataValue;
```


###### Using Objects as a Pattern for Organizing the JavaScript Code

With objects it is possible to group related variabels, what not only helps to better organize the code, but also allow flexibility, since the objects can be accessed using its own notation, and specially for the case of bracket notation where the flexibility at runtime is even greater.


Below there is 2 different aproaches to structure data for a game of **tic tac toe**:

```
// First structure
const playerOneName = 'tim';
const playerTwoName = 'jenn';
const playerOneMarker = 'X';
const playerTwoMarker = 'O';

// Second structure
const playerOne = {
    name: 'tim',
    marker: 'X',
};

const playerTwo = {
    name: 'jenn',
    marker: 'O',
};
``` 

And the difference starts to become even more visible as the code grows and the number of data structures increase. Also, using objects, have the flexibility to group the same properties, what allows then to manage its accesses dynamically.

So, again, below this code doesn't even know which of the 2 objects can be called as winner at the end of a game:

```
function gameOver(winningPlayer) {
    console.log("Congratulations!");
    console.log(winningPlayer.name + ' is the winner!");"
}
```


But objects go even beyond, because using special functions called **constructor**, it is possible to duplicate or multiply objects with a very simple and clean syntax. And there is even another important enhancement from this automated task, that is avoiding coding errors. 


So, here instead of creating two separated objects for those players, they can be multiplyed, and passing arguments during the construction of each player with the **new** word, each of them will hold its own data accordingly:

```
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    
    this.sayName = function() {
        console.log(name);
    }
}


// construct each player
const player1 = new Player('tim', 'X');
const player2 = new Player('jenn', 'O');

player1.sayName(): // 'tim'
player2.sayName(); // 'jenn'
```


- **Enhancing the Performance Even More with the Prototype**:

The **prototype** as it is called, is another object that is inherited by the original object to manage concept of **Inheritance** in JavaScript:

`Stated simply, the prototype is another object that the original object inherits from, which is to say, the original object has access to all of its prototype’s methods and properties.` _The Odin Project_


And this concept has a important role in the management of JavaScript objects, and therefore can help the developer to boost performance. So, in that particular example before, the constructor of the object passed also a method to the new instances of players.

The problem with that is the fact that, contrary to the personal data that each player object has to distinguish itself from all the other players object, the method it is not its personal data, but still each copy of the object created will have its own method.


A better pattern then, it would be to give the method not to the object, but to the **prototype**, resulting that only one function of **sayName()** would be created and share by all the players that may be created:

```
Player.prototype.sayName = function() {
    console.log(this.name);
}
```


###### Other resources about the JavaScript Prototype and the This Word:

1. [JavaScript Prototype in Plain Language - JavaScript Is Sexy](https://web.archive.org/web/20200513181548/https://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/)
2. [Prototype inheritance - JavaScript.info](https://javascript.info/prototype-inheritance)
3. [Gentle Explanation of "this" in JavaScript - Dmitripavlutin.com](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)



#### Factory Functions and the Module Pattern 


###### The Factory Function Pattern

While the Constructor Pattern is a widely used and vality pattern for organizing the code, yet they are not the best one to use, since its use can leade to some general problems and more easily introduce bugs into the code. So, eventhough its not wrong their use, they are not the only way or even the best way available to deal with this matters.


So, in that regard, one of the biggest issues related with the constructors is that, **though they look just like any other regular function, they do not behave like the regular functions at all**. Also, if they are accidentely used without the **new** word, they will not work as intended to, and will produce errors messages difficult to be traced.


As Tarek Sherif says in his article, ['Constructors Are Bad For JavaScript'](https://tsherif.wordpress.com/2013/08/04/constructors-are-bad-for-javascript/), diffrently from many of the traditional languages, JavaScript in its core it evolved from a **simple, flexible object model that allows code reuse through direct object-to-object prototypal inheritance, and a powerful execution modl based on functions that are simply executable objects**.


On the other hand, the author says that all these different concepts, perhaps even obscure ones, many times lead the JavaScript development to mimic other traditional programming concepts, that many times may not in line with JavaScript basic and core concepts.

`It is well-known that JavaScript originally wanted to look like other popular languages built on fundamentally different philosophies, and this trend in its history has lead to constructs in the language that actively work against its natural flow.`  [Tarek Sherif](https://tsherif.wordpress.com/2013/08/04/constructors-are-bad-for-javascript/)


To show the extent of this evolution of JavaScript, the author says that before ECMAScript 5, there were no direct way to defined create an object whose prototype was derived from other object. 

So, in this exemple from the article, it shows how it was done:

```
const proto = { protoprop: 'protoprop' };

function C() {} // Dummy throway constructor

C.prototype = proto;
const newObj = new C();

proto.isPrototypeOf(newObj); // true
``` 

And below, how it can be done now with **Object.create()**:

```
const proto = { protoprop: 'protoprop' };

const newObj = Object.create(proto);

proto.isPrototypeOf(newObj); // true
```


###### The Constructor Issue Can Go Even Further

But, continuing with in article, Tarek Sherif says that the dangers of using constructors could go beyond the dangers of calling a constructor function without the **new** word:

```
function C() {
    this.instance_member = 'whoops!';
}

const c = C(); // Forgot 'new'

c; // undefined

// Property added to the Global Namespace
window.instance_member; // 'whoops!'
``` 

And he also says that even using a safeguard, like the one proposed by Stoyan Stepanov in Javascript Patterns, still let the code and its execution **unclear**:

```
function C() {
    if (! (this instanceof C)) {
        return new C();
    }
    
    this.instance_member = 'This is ok.';
}

const c = C();
c; // { instance_member: 'This is ok.' };

// Here, no global namespace pollution
window.instance_member; // undefined
``` 

And here Tarek Sherif shows the proof of how the use of the **constructor patter** has the code execution in peril:

```
function C() {}

const c = new C();

c instanceof C; // true
c.constructor === C; // true

// But, changing the prototype property
C.prototype = { prototype_prop: 'proto' };

c.constructor === C; // true
c instanceof C; // false
```

Above, in Tarek Sherif example, it is possible to see how the execution of the Javascript engine was fractured because of the use of this 2 way system of operation with these 2 properties:

1. **prototype**
2. **constructor**

```
// Create two constructors with the 
// same prototype.
const proto = { protoprop: 'protoprop' };

function C() { this.cprop = 'cprop' };
C.prototype = proto;

function F() { this.fprop = 'fprop' };
F.prototype = proto;

const f = new F();

// It has prototype properties
console.log(f.protoprop); // 'protoprop'

// It has F properties
console.log(f.fprop); // 'fprop'

// It does not have C properties (AS EXPECTED)
console.log(f.cprop); // undefined

// BUT IT BECAME A INSTANCE OF 'C' AS WELL?!!!!!!!!!!!
console.log(f instanceof C); // true

const c = new C();
console.log(c instanceof F); // true
``` 

This is how Tarek Sherif explains this JavaScript phenomeon:

`but essentially, the constructor property of an object is set by the engine exactly once. When a function is defined, its prototype property is initialized to an object with a constructor property pointing back to the function itself. If you set the function’s prototype property to some other object, without explicitly setting that new object’s constructor property, all objects created by the function will have their constructor properties set to Object (which is the default).`


###### Factory Functions: Improving the Pattern of Reuse by Constructors

According to Tarek Sherif there are 2 important advantages in the use of the **factory functions pattern**:

1. **There is no risk of using it in the "wrong" way**, since it does not require the **new** word of a constructor.   
    1.1. Nor is it a constructor itself that forces some proper invocation, **which may hide errors!**.   
    1.2. **The factory function is meant to be used in exactly one way: as a regular function**.
2. **There is no pretense od creating a "class" of objects by captalizing the name.  
    2.1. The **prototype isn't used, so there will be no instanceof link between the function and the objects it creates**: its simply a function that happens to create objects.


```
function myObject(data) {
    const obj = Object.create(myObject.proto);
    obj.data = data;
    
    return obj;
}

myObject.proto = {
    getData: function() {
        return this.data;
    }
};

const o = myObject('data 1');

console.log(o); // { data:'data 1' }
``` 

Tarek Sherif goes even further saying that following this pattern it could be constructed a generic factory function to do away with the **new** word all together, though he sees that the code implementation itself is not the cleares:

```
function genericFactory(Crt) {
    const obj = Object.create(Crt.prototype);
    
    const args = Array.prototype.slice.call(arguments, 1);
    
    Ctr.applay(obj, args);
    
    return obj;
}

const o = genericFactory(MyObject, 'data);
``` 


`Whether this makes the code clearer or not might be debatable, but one definite advantage is that this construct allows us to invoke constructors dynamically, something not possible with invocations that use new. This example also shows more generally that constructor invocation can be done away with quite easily with the tools now afforded us in ECMAScript 5.` [Tarek Sherif](https://tsherif.wordpress.com/2013/08/04/constructors-are-bad-for-javascript/)


Finally, Tarek Sherif concludes in the way of keeping inline with Javascript own core and avoid all the contrivances of foreign languages, like class-based ones:

1. **'Constructors run contrary to the prototypal, functional, object-based natures form which JavaScript draws its strength'**
2. Constructors are at best **mislead**, and at worst, they actively interfere with the ability to engage with the core structure of the language.


The author Joost Diepenmaat, in Constructors Considered Mildly Confusing - Zeekat.nl](https://zeekat.nl/articles/constructors-considered-mildly-confusing.html), also brings some other explanation for this **constructor pattern** mismatch in Javascript, when he says that:

1. **In Class-based object system**: typically classes inherit from each other, and objects are only instances of the classes themselves.   
    1.1. The class possess **methods** and **properties** which are shsred between all instances of the class.   
    1.2. Each object instance has its own **properties** (and also methods, in some programming languages) that should not be shared.
2. **JavaScript constructors**: it does nothing like what is seem in class-based languages, because:   
    2.1. Constructors have their own **{Prototype}** completely separated from the **{Prototype}** chain they initialize!



In this next example, it was used both **factory** and **module**  patterns to create instances of counters which have a private auxiliare property and a public method:

```
// define a module
const  Module = (function() {
    const privateMethod = function() {
        return "I'm privateMethod!";
    };
    
    return {
        myMethod: function() {
            console.log(`myMethod has been called and it used a private method to bring this -->: ${privateMethod()}.`);
        },
        someOtherMethod: function() {
            console.log('someOtherMethod has been called.');
        }
    };
})();


// call module + methods
Module.myMethod();
Module.someOtherMethod();
``` 


###### The Module Pattern 

The **module pattern** has some similitudes to the **factory pattern** since both of them utilizes functions to wrap some code to allow their management, where the factory pattern aim to define variables and functions to be passed to newer objects, the module pattern aim to operates scope for variables and functions.


And pehaps one other distinction that may happen is the fact that the **module pattern** employ Immediately Involked Function Expressions (IIFE) for the task.







- [JavaScript Module Pattern Basics - Coryrylan.com](https://coryrylan.com/blog/javascript-module-pattern-basics)
- [Module pattern in JavaScript - Tomek Buszewski](https://dev.to/tomekbuszewski/module-pattern-in-javascript-56jm)









###### Other resources about these patterns:
- [Constructors Are Bad For JavaScript - Tarek Sherif](https://tsherif.wordpress.com/2013/08/04/constructors-are-bad-for-javascript/)
- [Constructors Considered Mildly Confusing - Zeekat.nl](https://zeekat.nl/articles/constructors-considered-mildly-confusing.html)
- [Object.assign() - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [An Introduction to IIFEs - Immediately Invoked Function Expressions - Adripofjavascript.com](http://adripofjavascript.com/blog/drips/an-introduction-to-iffes-immediately-invoked-function-expressions.html)
- [JavaScript Module Pattern Basics - Coryrylan.com](https://coryrylan.com/blog/javascript-module-pattern-basics)
- [Module pattern in JavaScript - Tomek Buszewski](https://dev.to/tomekbuszewski/module-pattern-in-javascript-56jm)



#### Classes


/* COMING SOON */


















#### ES6 Modules



/* COMING SOON */






















### The 'This' Word

The **this** keyword from the JavaScript environment is representative of some code being processed at runtime, and in fact, according to the article [this](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this) from the MDN Docs, the **this** word in JavaScript behaves a little bit different from its counterparts in some other programming languages.


And the MDN article also points that even within the JavaScript environment there will be differences in its use wheter the code would be running at **strict mode** or not.


Also, in many cases, the **this** value is determined by the way that a function is called, causing the inability for the engine to sign the correct value to it. And that's why the **ES5** introduced the method **bind** to have this value set, no matter how it is called.


#### The Global Context

In the **global context**, that is outside the scope of any function, this would refer to the global object, no matter the code is running at strict mode or not.

```
console.log(this.document === document); // true

// In web browsers, the object Window is also the global object 
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
```


#### The Function Scope

As it was said before, inside a function the value of **this** depends upon the way the function is called:


###### Simple call

Outside **strict mode**, the value of this is the Global Object, even inside a function.

```
function f1() {
    return this;
}

// at the browser
f1() === window; // true
```

`Since the following code is not in strict mode, and because the value of this is not set by the call, this will default to the global object, which is window in a browser.`  [this - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)


Within the **strict mode**, the value of **this** attain itself to what it was defined; and since there was no definition made, it will remian not defined **undefined**.

```
function f2() {
    'use strict';
    return this;
}

f2() === undefined // true
```

And, here, an interesting point about the 'strict mode': better security and stronger error checking

`The strict mode is available starting ECMAScript 5.1, which is a restricted variant of JavaScript. It provides better security and stronger error checking.` 
 [Gentle Explanation of "this" in JavaScript - Dimitripavlutin.com](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)


_ **Note from the MDN site**: some browsers may had have implemented this second example in a different way from the convention, resulting in a incorrect reference to the window object. this - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)


- **A important note from [Gentle Explanation of "this" in JavaScript - Dimitripavlutin.com](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)**:

According to the site, there is a common trap or pitfall related to the use of functions inside other's contexts, for example, some function invocation placed inside a method invocation (perhaps even a class). Becase here someone could be mislead to think that they coincide; but in fact they don't!


In these cases, to have the desired value, it's important to manually modify the inner function's context or to use a arrow function:
1. **Indirect invocation**:   
    1.1. Using call()   
    1.2. Using apply()
2. **Creating a bound function**:   
    2.1. Using bind()
3. **Arrow function**

```
const numbers = {
    numberA: 5,
    numberB: 10,
    sum: function() {
        // testing the context here from numbers object
        console.log(this ===numbers); // true
        
        function calculate() {
            // testing the context here from calculate function
            console.log(this === numbers); // false
            
            return this.numberA + this.numberB;
        }
        
        return calculate();
    },
};

numbers.sum(); // NaN or throws TypeError in strict mode
```

So, one way to fix the issue, as stated, would be to change the context of the call like this: **return calculate.call(this);**

Or to rewrite the inner function as a arrow function:

```
const calculate = () => {
    // testing the context here from the arrow function
    console.log(this === numbers); // true
    
    return this.numberA + this.numberB;
}
```


###### Arrow Functions

According to [Gentle Explanation of "this" in JavaScript - Dimitripavlutin.com](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/), **arrow functions are desingned to declare the function in a shorter form and lexycally bind the context**.


Inside the arrow functions, **this** retains the value of the **enclosing lexical context's this**, whether the context is Global or some other function, the value of **this** will remain the same it was defined.


Still according to [Gentle Explanation of "this" in JavaScript - Dimitripavlutin.com](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/), an arrow function is anonymous, but its name could be inferred, and does not provide that default **arguments** object perculiar from regular functions (but the site says that the missing **arguments** is fixed using ES2015 **rest parameters**).


- **Example from [Gentle Explanation of "this" in JavaScript - Dimitripavlutin.com](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)**:

```
const sumArguments = (...args) => {
    console.log(typeof arguments); // undefined
    
    return args.reduce((result, item) => result + item);
};

sumArguments.name; // ""
sumArguments(5, 5, 6); // 16
``` 


Another important point brought by the article, [Gentle Explanation of "this" in JavaScript - Dimitripavlutin.com](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/), is the fact that when a arrow function is defined in the topmost scope (i.e. outside any function), the context is always the global object (window in a browser).


**The fact above brings that since the arrow function retain the context from where it was defined, it could not be used to define methods to an object, because it would preemptively bound the context whenever the method was called.**



_ **Note from the MDN site**: since the arrow functions features a lexycally bound context, If the **this** arg is passed to call(), bind(), or apply() on invocation of an arrow function, this new context will be ignored. But, still according to the MDN article, it still possible to prepend arguments to the call, but the first argument (thisArg) should be set to null. [this - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)


Finally, according to [Gentle Explanation of "this" in JavaScript - Dimitripavlutin.com](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/), a **arrow function cannot be used as a constructor**. And that invoking it as a constructor, for example, in the form of **new arrowFunc()** throws an error: **TypeError: arrowFunc is not a constructor**.

Arrow Functions could also be useful for tasks like:
1. Recursion
2. Detaching event handlers



#### Class Context

Again, according to the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), the bevavior of **this** in classes are similar to what happens with funcions, as **classes are functions under the hood**. Though, there are still some differences and caveats.


So, **within the Class Constructor**: here, **this** is a regular object. And all non-static methods within the class are added to the prototype of **this**. On the other hand, the **static methods** are not property of **this**, but they are properties of the class itself.

```
class Example {
    constructor() {
        const proto = Object.getPrototypeOf(this);
        
        console.log(Object.getOwnPropertyName(proto));
    }
    
    first() {}
    second() {}
    static third() {}
}

new Example(); // ['constructor', 'first', 'second']
```


And there is a difference in context while talking about **derived classes**, because different from base class constructors, derived constructors have no initial **this** binding:


`Unlike base class constructors, derived constructors have no initial this binding. Calling super() creates a this binding within the constructor and essentially has the effect of evaluating the following line of code, where Base is the inherited class [...] Referring to this before calling super() will throw an error.` [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)


#### As an Object Method

When a function is called as a method of an object, its **this** is set to the object the method is called on. So, in the following example from the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), when **o.f()** is invoked, inside the function **this** is bound to the **o** object:

```
const o = {
    prop: 37,
    f() {
        return this.prop;
    } 
};

console.log(0.f()); // 37
```

And, still according the Docs, doesn't matter if the function itself was declared direct inside the definition of the object itself, because, even when the function is attached latter, the same behavior happens:

```
const o = { prop: 37 };

function independent() {
    return this.prop;
}

o.f = independent;

console.log(o.f()); // 37
```

`This demonstrates that it matters only that the function was invoked from the f member of o.` [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)


- **Another important note from [Gentle Explanation of "this" in JavaScript - Dimitripavlutin.com](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)**:

It's important to distinguishes 2 different kinds of invocation for calliing a function or calling method (function inside a object):
1. **Function invocation**: it is called direct in the global context, remembering that functions operate from **Hoisting**.
2. **Method invocation**: it requires the property accessor from the object itself, for example, **myObj.someMethod()**


But there is also a common trap or pitfall here, because in some situations, which are not a real method invocation, but can mislead the developer into thinking that is the case:
- **When the object and its method are passed as a parameter**: here occors a separation from one and another, then the engine calls the old method as a plain function direct from the global context:


```
// here a constructor function
function Pet(type, legs) {
    this.type = type;
    this.legs = legs;
    
    this.logInfo = function() {
        // testing the context
        console.log(this === myCat); // false
        console.log(`The ${this.type} has ${this.legs} legs`);
    }
}

const myCat = new Pet('Cat', 4);

/*
* See here that there isn't a real method call, but it is just passing a parameter
*/
setTimeout(myCat.logInfo, 1000); // logs "The undefined has undefined legs" or throws a TypeError in strict mode
``` 

Again, an alternative solutioin would be to reriwrite logInfo() as a arrow function, or it could also be done using a function bounds to solve the issue:

```
// Create a bound function
const boundLogInfo = myCat.logInfo.bind(myCat);

setTimeout(boundLogInfo, 1000); // correctly logs "The Cat has 4 legs"
```


`When the separated logInfo is invoked as a function, this is global object or undefined in strict mode (but not myCat object). So the object information does not log correctly. [...] myCat.logInfo.bind(myCat) returns a new function that executes exactly like logInfo, but has this as myCat, even in a function invocation.` [Gentle Explanation of "this" in JavaScript - Dimitripavlutin.com](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)



#### This on the Objects Prototype Chain or at a Getter or Setter

Still according to the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), the **this** used in the objects prototype chain or together with getters and setters, it follows the lead of the object:

`The same notion holds true for methods defined somewhere on the object's prototype chain. If the method is on an object's prototype chain, this refers to the object the method was called on, as if the method were on the object. [...] Again, the same notion holds true when a function is invoked from a getter or a setter. A function used as getter or setter has its this bound to the object from which the property is being set or gotten.`


#### As a Constructor

When the function is used as a constructor (with the new keyword), its **this** is bound to the new object being constructed, says the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).


```
function C() {
    this.a = 37;
}

let o = new C();
console.log(o.a); // 37

function C2() {
    this.a = 37;
    return { a: 38 };
}

0 = new C2();
console.log((o.a); // 38)
```


`In the last example (C2), because an object was returned during construction, the new object that this was bound to gets discarded. (This essentially makes the statement "this.a = 37;" dead code. It's not exactly dead because it gets executed, but it can be eliminated with no outside effects.)`



- **Another important note from [Gentle Explanation of "this" in JavaScript - Dimitripavlutin.com](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)**:

Once again, there is also here a common trap or pitfall related to the use of Constructor functions and the **new** word, because according to the articles' author: 

`Some JavaScript functions create instances not only when invoked as constructors, but also when invoked as functions**, for example, the RegExp.


The whole problem is the fact that what differentiates a ordinary function from a constructor to the JavaScript engine is not the initial capital letter of the functions name, but the **new** word.

So, when a constructor function is called without the **new** word and the constructor itself was not properly created to deal with this possible issue, the constructor function will in reality works setting properties directly on the global context, that in the browser is the window object:

```
function Vehicle(type, wheelsCount) {
  this.type = type;
  this.wheelsCount = wheelsCount;
  return this;
}
// Function invocation
const car = Vehicle('Car', 4);
car.type; // => 'Car'
car.wheelsCount // => 4
car === window // => true
```

So, to have a more robust constructor, the article, [Gentle Explanation of "this" in JavaScript - Dimitripavlutin.com](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/), brings this alternative logic:


```
function Vehicle(type, wheelsCount) {
    if (!(this instanceof Vehicle)) {
        throw Error('Error: Incorrect invocation');
    }
    
    this.type = type;
    this.wheelsCount = wheelsCount;
    return this;
}

// Constructor invocation
const car = new Vehicle('Car', 4);
car.type; // Car
car.wheelsCount // 4
car instanceof Vehicle // true

const brokenCar = Vehicle('Broken Car', 3); // throws an error
```


#### The call() and the apply() Methods (Indirect Invocation)

An **indirect invocation** takes place when a function is called using **myFunc.call()** or **myFunc.applay()** methods. And it is also noticible that these characteristic from JavaScript Functions:
1. **They are first-class objects**
2. **So, function are a kind of object**
3. **The type of for the function object is Function**


Said that, as objects, functions inherit a couple of properties/methods, being **call()** and **apply()** two methods which **are used to invoke the function with a configurable context**.

So, in **myFunc.call(thisArg, arg1, arg2, ...)**:
1. **The first argument**: refers to the context being used while configuring the indirect invocation.
2. **A List of arguments**: the list of arguments that are passed as arguments to the called function.


And, on the other hand, **myFunc.apply(thisArg, [arg1, arg2, ...])**:
1. **The first argument**: it is also a reference to the context to be used while configuring the indirect invocation.
2. **An Array of arguments**: the array of arguments that are passed as arguments to the called function.


```
function sum(num1, num2) {
    return num1 + num2;
}

sum.call(undefined, 10, 2); //12
sum.apply(undefined, [10, 2]); //12
``` 

And according to the article, [Gentle Explanation of "this" in JavaScript - Dimitripavlutin.com](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/), the indirect invocation can be very useful for tacke some tasks:
1. **when a function should be executed with a especiffic context**:   
    1.1. For example, to solve context problems with function invocation, where **this** is always **window** or **undefined**.   
    1.2. It can be used to simulate a method call on an object.
2. **To create hierarchies of classes in ES5 to call the parent constructor**


- **Example from [Gentle Explanation of "this" in JavaScript - Dimitripavlutin.com](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/):

```
function Runner(name) {
    console.log(this instanceof Rabbit); // true
    this.name = name;
}

function Rabbit(name, countLegs) {
    console.log(this instanceof Rabbit); // true
    
    // Indirect invocation. Call to parent constructor
    Runner.call(this, name);
    this.countLegs = countLegs;
}

const myRabbit = new Rabbit('White Rabbit', 4);
myRabbit; // {name: 'White Rabbit', countLegs: 4}
``` 

`Runner.call(this, name) inside Rabbit makes an indirect call of the parent function to initialize the object.` [Gentle Explanation of "this" in JavaScript - Dimitripavlutin.com](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)



#### The bind() Method

ECMAScript 5 introduced the **Function.prototype.bind()**, and so calling **func.bind(someObject)** creates a new function with the same body and scope as **func**, but where **this** occurs in the original function, in the new function it is permanently bound to the first argument of bind, regardless of how the function is being used:


Here, once again, **myFunc.bind(thisArg, arg1, arg2, ...)**:
1. **First argument**: the context to be used to bound the returned function.
2. **A list of arguments**: the list of arguments that are passed as arguments to the called function.


```
function f() {
    return this.a;
}

const g = f.bind({ a: 'azerty' });
console.log(g()); // azerty

const h = g.bind({ a: 'yoo' }); // bind only works once!
console.log(h()); // azerty

const o = { a: 37, f , g, h };
console.log(o.a, o.f(), o.g(), o.h()); // 37, 37, azerty, azerty
```


`.bind() makes a permanent context link and will always keep it. A bound function cannot change its linked context when using .call() or .apply() with a different context or even a rebound doesn't have any effect. Only the constructor invocation of a bound function can change an already bound context, but this is not something you would normally do (constructor invocation must use regular, non-bound functions).`  [Gentle Explanation of "this" in JavaScript - Dimitripavlutin.com](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)


- **Example from [Gentle Explanation of "this" in JavaScript - Dimitripavlutin.com](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)**:
```
function getThis() {
    'use strict';
    return this;
}

const one = getThis.bind(1);

one(); // 1

one.call(2); // 1
one.apply(2); // 1
one.bind(2)(); // 1

new one(); // Object
``` 



###### Binding the Class Method with This

As it was say, with class in general, **static** methods belong to the class, while the others belong to the object bind when it is present at the constructor. And this next example from [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) makes an interesting from all of that together with the binding method:


Bellow, we have a class with 2 methods, but one of then used the bind method, so it was tied to the class itself, and not the instance, as it happens with the method that didn't use the bind method:

```
class Car {
    constructor() {
        // bind sayBye but not sayHi to show the different behavior
        this.sayBye = this.sayBye.bind(this);
    }
    
    sayHi() {
        console.log(`Hello from ${this.name}`);
    }
    sayBye() {
        console.log(`Bye from ${this.name}`);
    }
    
    get name() {
        return 'Ferrari';
    }
}


class Bird {
    get name() {
        return 'Twwety';
    }
}


const car = new Car();
const bird = new Bird();

// the value of 'this' with sayHi will depend on the caller
car.sayHi(); // Hello from Ferrari

bird.sayHi = car.sayHi;
bird.sayHi(); // Hello from Tweety

// For the bouded method sayBye, 'this' doesn't depend on the caller
bird.sayBye = car.sayBye;
bird.sayBye(); // Bye from Ferrari
``` 


- **Note from MDN**: classes are always strict mode code, so calling methdos with an undefined 'this' will throw an error.



### JavaScript Function Parameters

As the [W3schools](https://www.w3schools.com/js/js_function_parameters.asp) says in its plataform, the JavaScript engine and browsers does not perform nay kind of checking on the function parameter values or arguments.

Yet, here it is interesting to make a proper distinction between **parameters** and **arguments**:

1. **Parameters**: these are the names listed in the funciton definition (though this list is not checked formely).   
    1.1. Though not checked, this list of names is important as factor to make the function more readable and the code more clear.
2. **Arguments**: these are the actual values passed to a function (and again, remebering that they are received without any kind of former validation).


As a result, different from languages that are strongly typed, JavaScript does not make any kind of check to determ da validity of the number or the type of the arguments passed in relation to the function definition.


#### Undefined Missing Arguments

Since there is no checking whether the number of the arguments passed match the number of paramenters from the definition, there will be cases when a function may receive less arguments than it has parameters defined.

In these cases, the parameters that are missing arguments will be set to **undefined**.


#### The Arguments Object

As the [W3schools](https://www.w3schools.com/js/js_function_parameters.asp) site explains, JavaScript functions have a built-in object called **arguments**, which has some resemblance to an array, though it is not realy a array, nor does it has the arrays methods also.


But, this **arguments** object still allows the access and the iteration of all the arguments passad to the function:

```
const sumAll = () => {
    let sum = 0;
    
    for (let i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    
    return sum;
};

sumAll(1, 123, 500, 115, 44, 88);
``` 

There are a number of ways to convert the **arguments** object into an array and then make use of all the array methods utilities:

1. **Rest parameter**: this syntax was introduced with the ES6 and allows a function to represent a indefinite number of arguments as an array.   
    1.1. For this new syntax to make sense it demands that the rest parameter should be the last argument itseft as to collect all the remaining arguments into the array.   
    1.2. Though it is important to remember that depending on the function definition for the **rest parameter**, there can be a difference between all the arguments present in the **arguments** object and the remnants arguments passed to the rest paramenter syntax. 
2. **Array.from()**: also from the ES6, there is the Array.from() method which can convert array-like or iterable objects into an array instance.
3. **Array.prototype.slice()**: just like the method above, the Array.prototype.slice() be convert the arguments object into an true array.


- **Using the Array.from() method to covert the argumts object**
```
function sort() {
    return Array.from(arguments).sort((a, b,) => a - b);
}

sort(1, 4, 5, 2);
``` 

- **Using the Array.prototype.slice() to covert the argumts object**
```
function sort() {
    // or const args = [].slice.call(arguments);
    const args = Array.prototype.slice.call(arguments);
    
    return args.sort((a, b) => a - b);
}

const sorted = sort(1, 4, 5, 2);
``` 


###### Articles about the Rest Parameter:
- [How to convert arguments object to an array in JavaScript - Attacomsian.com](https://attacomsian.com/blog/javascript-convert-arguments-object-to-array)
- [Parâmetros Rest - MDN docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters)



#### Arguments are Passed by Value

Still according to [W3schools](https://www.w3schools.com/js/js_function_parameters.asp), the arguments are passed by value, and the changes made by the function does not the parameters original value:

`The parameters, in a function call, are the function's arguments. JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations. If a function changes an argument's value, it does not change the parameter's original value. Changes to arguments are not visible (reflected) outside the function.`


#### Objects are Passed by Reference

On the other hand, object themselves in JavaScript are treated by reference, and because of that changes to objects properties will reflect at the object itself outside the function:

`In JavaScript, object references are values. Because of this, objects will behave like they are passed by reference: If a function changes an object property, it changes the original value. Changes to object properties are visible (reflected) outside the function.`



### Scope - Closure & Hoisting

To start this new point, it's important to understand the basics of some concepts:

1. **Scope**: it refers to the context in which **variables** and **functions** can be reached and therefore used.   
    1.1. And can be globally or locally defined.   
    1.2. **Namespace** can be thoght to be somewhat a synonym for **scope**, though namespace strictly speaking would refer some level of a highest level scope. For exemple, the namespace defined and used for reaching libraries: JQuery, etc.
2. **Closure**: also called **static scope** or **lexical scope**, and it refer to the fact that the inner scope has access to its surrounding outer scope, that is .   **the scope chain**.   
    2.1. For example, a inner function has access to the scope of the outer function which surrounds it.   
    2.2. Atention: the **chain scope** always runs in only one direction; the inner scope direction outwards, meaning that from inside to outside the engine searchs for the variable reference, but never the other way around, that is from the parent scope inwards.   
    2.3. But JavaScript syntax allows that some scope may be called from within: sayHello('Bobby')();    
    2.4. The concept of closure is the idea that functions retain their scope even if they are passed around and called outside of that scope, since in JavaScript functions are indeed high order objects.
3. **hoisting**: a feature from JavaScript where variables and functions declarations are moved to the top of their scope before code execution ([Understanding Hoisting in JavaScript - Digitalocean.com](https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript)). 



#### Scope and Closure

- **An example of dealing with scope**:
```
const sayHello = function(name) {
    let text = 'Hello, ' + name;
    
    return function() {
      console.log(text);  
    };
};

sayHello('Todd'); // nothing happens

const helloTodd = sayHello('Todd');
helloTodd(); // will call the closure and log 'Hello, Todd' 

sayHello('Bob')(); // this syntax will also be able to call the scope (even withou the assingment)
``` 

- **And below, the site from Learn JavaScript The Right Way shows a trick to store or cache some scope with the pattern word 'that'**:
```
const nav = document.querySelector('.nav');

const toggleNav = () {
    const that = this;
    
    console.log(that); // <nav> element
    
    // Settimeout with a regular function as callback would have the global scope only
    setTimeout(fucntion() {
        console.log(this); // [object Window]
        console.log(that); // <nav> element
    }, 1000);
};

nav.addEventListener('click', toggleNav, false);
``` 

As it is pointed above, the **setTimeout()** function has the global scope by default, but using that trick, or even using an arrow function as callback would also do the trick as well.

Others ways to lock some speciffic scope:

1. **call()**
2. **apply()**
3. **bind()**
4. **Arrow functions**
5. **Caching the scope**: const that = this;

- **Another example, this time using a for loop**:

```
const links = document.querySelectorAll('nav li');

for (let i = 0; i < links.length; i++) {
    console.log(this); // [object Window]
}
``` 

But, using the **call()** function:

```
const links = document.querySelectorAll('nav li');

for (let i = 0; i < links.length; i++) {
    (function() {
        console.log(this);
    }).call(links[i]);
}
``` 

`You can see I’m passing in the current element in the Array iteration, links[i], which changes the scope of the function so that the this value becomes that iterated element. We can then use the this binding if we wanted. We can use either .call() or .apply() to change the scope, but any further arguments are where the two differ: .call(scope, arg1, arg2, arg3) takes individual arguments, comma separated, whereas .apply(scope, [arg1, arg2]) takes an Array of arguments.` [Everything you wanted to know about JavaScript scope Ultimatecoursers.com](https://ultimatecourses.com/blog/everything-you-wanted-to-know-about-javascript-scope) 


#### Private and Public Scope in JavaScript

A very common and useful pattern in programming is the distinctions about, and eventhough this pattern is not present in JavaScript, it can be emulated notheless:

1. **Public scope**
2. **Private scope**:


So, one way to have this concept also in JavaScript, a design pattern such as the **Module pattern** to emulate creating of the **public scope**, while the the **private** scope, for example, could be easily created by wrapping functions inside another function:

```
(function() {
    // Private scope inside here!
})();
``` 

As for the **public scope**, the function that returns some data is given to a object, which can act as **namespace** for the information made public:

```
// define a module
const  Module = (function() {
    const _privateMethod = function() {
        return "I'm privateMethod!";
    };
    
    return {
        myMethod: function() {
            console.log(`myMethod has been called and it used a private method to bring this -->: ${_privateMethod()}.`);
        },
        someOtherMethod: function() {
            console.log('someOtherMethod has been called.');
        }
    };
})();


// call module + methods
Module.myMethod();
Module.someOtherMethod();
``` 

`he return statement here is what returns our public methods, which are accessible in the global scope - but are namespaced. This means our Module takes care of our namespace, and can contain as many methods as we want. We can extend the Module as we wish` [Everything you wanted to know about JavaScript scope Ultimatecoursers.com](https://ultimatecourses.com/blog/everything-you-wanted-to-know-about-javascript-scope) 


- **Importante Note concerning the article [Everything you wanted to know about JavaScript scope Ultimatecoursers.com](https://ultimatecourses.com/blog/everything-you-wanted-to-know-about-javascript-scope) **:
- That Before the **ES6** it was correct to say that "All scopes are created with Funcion Scope onlly, they aren't created by for or while loops or expressions statements like if or swith.[...]"   
- Fot that matter, let's remember the new words **let** and **const** from ES6, which allows to create **block scope**, besides the **function scope**.   
- A **block scope** is anything enclosed between curly brackets...  [How let and const are scoped in JavaScript - Wesbos.com](https://wesbos.com/javascript-scoping)


In this next example, it was used both **factory** and **module**  patterns to create instances of counters which have a private auxiliare property and a public method:

```
const counterCreator = (counterName) => {
    // private property
    let count = 0;
    
    return () => {
        console.log(`Counting with ${counterName}: ${count}`);
        
        // public function
        count++;
    };
};

const counter1 = counterCreator('counter1');
const counter2 = counterCreator('counter2');

counter1();
counter2();
counter1();
counter1();
counter2();
``` 

`The concept of private functions is very useful and should be used as often as is possible! For every bit of functionality that you need for your program, there are likely to be several supporting functions that do NOT need to be used in your program as a whole. Tucking these away and making them inaccessible makes your code easier to refactor, easier to test, and easier to reason about for you and anyone else that wants to use your objects.` The Odin Project (Factory Functions and the Module Pattern)



#### Hoilsting

As it was said above, **hoilsting is the mechanism where variables and functions declarations are moved to the top of their scope before code execution**, and it can bring unexpected results if the developer is not aware of it.


In an article, [JavaScript Scoping and Hoisting - Adequatelygood.com](https://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html), Ben Cherry presents 2 examples of this:

- **First example**: What would be logged by bar() function

```
var foo = 1;

function bar() {
    if (!foo) {
        var foo = 10;
    }
    
    alert(foo);
}

bar(); // 10
``` 

- **Second example**: What would be given by alert(a)

```
var a = 1;

function b() {
    a = 10;
    return;
    
    function a() {}
}

b();

alert(a); // 1
``` 

So, in both examles, the results were very unusual, because in the first you think that there is a `var foo = 1` already available, and in the second example, that the function past the return statement would never be reached!


And one feature important to remember here is about **scope**, because JavaScript has its differences from traditional languages that hevebasically **block-level scope**:

1. Prior to ES6 JavaScript was only **functional-level scope**.
2. After ES6, JavaScript also implemented **block-level scope** with the words: **let** and **const**


###### Declarations, Names, and Hoisting

Still according to the author Ben Cherry, in JavaScript a **name** enters the scope in one of four basic ways:

1. **Language-defined**: he says that by defaut, all scopes are given the names **this** and **arguments**.
2. **Formal parameters**: he also says that functions can have named formal parameters, which are scoped to the body of that function.
3. **Functions declarations**: these are functions of the form **foo() {}**.
4. **Variable declarations: these are variables to the form **var foo;**


- **Note**: and after ES6, a **name** can also enter the scope with the use of the words **let** and **const**.


###### Functions and Hoilsting

One important point to make is that eventhough function are always moved/hoilsted up to the top of the containing scope by the engine, it's important to notice that there are 2 ways to declare functions, and that only the **function declaration** kind has all its body hoilted.


So, in the next example by the same author, from the 2 inner functions, only the one with the function declaration syntax will be moved up to the top of the **function test()** scope:

``` 
function test() {
    foo(); // TypeError "foo is not a function"
    bar(); // this one will run
    
    var foo = function() { //function expression assigned to a local variable 'foo'
        alert('This won't run!');
    }
    
    function bar() { // function declaration, given the name 'bar'
        alert('This will run!');
    }
}

test();
```

`In this case, only the function declaration has its body hoisted to the top. The name ‘foo’ is hoisted, but the body is left behind, to be assigned during execution.` [Adequatelygood.com](https://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)


And here, one more practical example from Ben Cherry showing the application of Hoilsting in functions defined in 2 different ways: **function declaration** and **function expression**.

```
foo(); // TypeError "foo is not a function"
bar(); // valid
baz(); // TypeError "baz is not a function"
spam(); // ReferenceError "spam is not defined"

var foo = function() {}; // anonymous function expression (only the word 'foo' gets hoisted)

function bar() {} // function declaration ('bar' and the function body get hoilsted) 

bar baz = function spam() {}; // Named function expression (only 'baz' gets hoisted)

foo(); // valid
bar(); // valid
baz(); // valid
spam(); // ReferenceError "spam is no defined"
``` 

Above we see that:

1. Only functions declarations have both the **name** and the **body** hoilsted.
2. In anonymous function expressions only have the **name** hoilsted.   
    2.1. As a result in the example, the name of the function expression **foo()** is reached, but it is not reconized as the type function.
3. In named function expressions only the name of the variable assigned to is hoilsted, as it was seem, and the name of the function passed remain in the local scope and it is not reached: and so the reference error above.



###### Other resources about Scope - Closure and Hoisting:
- [Everything you wanted to know about JavaScript scope Ultimatecoursers.com](https://ultimatecourses.com/blog/everything-you-wanted-to-know-about-javascript-scope)   
- [How let and const are scoped in JavaScript - Wesbos.com](https://wesbos.com/javascript-scoping)
- [JavaScript Scoping and Hoisting - Adequatelygood.com](https://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)
- [Understanding Hoisting in JavaScript - Digitalocean.com](https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript)



### The Eval() Function

#### The Risks of the Eval() Function

![eval-function-and-its-risks](/images/articles/web-development/eval-function-and-its-risks.png)


- **ATENTION**: as the [MDN plataform](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) adverts, the eval() function receives a string as argument, making it very risk to be used in development.

```
console.log(evel('2 + 2')); // Output: 4

console.log(eval(new Sring('2 + 2'))); // Output: 2 + 2

console.log(eval('2 + 2') === eval('4')); // Output: true

console.log(eval('2+ 2) === eval(new String('2 + 2'))); // Output: false

const expression = new String('2 + 2');
console.log(eval(expression.toString()); // Output: 4
```

As a description, the [MDN plataform](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) explains that the eval() is a property of the global object. and that it has a string as argument represinting a JavaScript expression.


`The argument of the eval() function is a string. If the string represents an expression, eval() evaluates the expression. If the argument represents one or more JavaScript statements, eval() evaluates the statements. Do not call eval() to evaluate an arithmetic expression; JavaScript evaluates arithmetic expressions automatically. ` [MDN plataform](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) 



#### Never Use Eval()!

`eval() is a dangerous function, which executes the code it's passed with the privileges of the caller. If you run eval() with a string that could be affected by a malicious party, you may end up running malicious code on the user's machine with the permissions of your webpage / extension. More importantly, a third-party code can see the scope in which eval() was invoked, which can lead to possible attacks in ways to which the similar Function is not susceptible.` [MDN plataform](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) 


Another point addressed by the MDN site is about performance, since the eval() function is slower than others alternatives, because it has to invoke the JavaScript interpreter.

On the other hand, others alternatives are optimized by modern JS engines, these same engines that work converting JS to machine code, and thus 'oblitarating' variable names, what would also force the browser to do long and expensive variable name lookups to find out where the variable where addressed.


#### Are eval() and new Function() the same thing?

An [answer at StackOverflow](https://stackoverflow.com/questions/4599857/are-eval-and-new-function-the-same-thing) explain that the **eval()** function and the constructor for a function, that is, **new Function()** are not the same thing, since they dealt very differently by the JavaScript:

1. **eval()**: evaluates a string as a JavaScript expression **within the current execution scope and can access local variables**.
2. **new Function()**: parses the JavaScript code stored in a string into a function object, which can then be called. It cannot access local variables because the code runs in a separate scope.

- **Exempe from StackOverflow**:

```
function test1() {
    var a = 11;
    eval('(a = 22)');
    alert(a); // Output: 22
}
```

`If new Function('return (a = 22);')() were used, the local variable a would retain its value. Nevertheless, some JavaScript programmers such as Douglas Crockford believe that neither should be used unless absolutely necessary, and evaling/using the Function constructor on untrusted data is insecure and unwise.` [StackOverflow](https://stackoverflow.com/questions/4599857/are-eval-and-new-function-the-same-thing)


#### When Eval() Is Not Evil

`When  eval() not evil: For cases where you are running the program on your browser. Also, you need to be very careful not to pass any information that can give rise to code injection and manipulate the program in any way possible. It is generally preferred to use an alternate function in place of eval() if there is any function that can give out the same result as eval(). Closures, object-oriented techniques, functional techniques generally are capable of replacing eval(). For cases where this can’t be done and using eval() is the only way possible it is preferred to the passcode that will not manipulate the DOM in any way.eval() is evil if running on the server using input submitted by a client that was not created by the developer or that was not sanitized by the developer. eval() is not evil if running on the client, even if using unsanitized input crafted by the client. Obviously you should always sanitize the input, as to have some control over what your code consumes.` [GeeksForGeeks.org](https://www.geeksforgeeks.org/is-javascripts-eval-evil/)



###### Base articles about the Eval() Funciton:
- [eval() - MDN plataform](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)    
- [Are eval() and new Function() the same thing? - StackOverflow](https://stackoverflow.com/questions/4599857/are-eval-and-new-function-the-same-thing)
- [Is JavaScript’s eval() evil? - GeeksForGeeks.org](https://www.geeksforgeeks.org/is-javascripts-eval-evil/)





### Immediately Invoked Function Expressions - IIFE

Immediately invoked function expressions or IIFEs (pronouced "iffy") are JavaScript function of the following pattern:

```
(function() {
    // internal logic
})();
``` 

It's interesting to remember that in JavaScript there are 2 way to declare a function:

1. **Function declaration**: that is the traditional syntax
2. **Funcions expression**: which can be a named or a anonymous expression. 
    2.1. But that in either case implies the return of the value of the function itself either to the correspondent variable or immediately (that is without assgining to a variable).


The only other distinction to be done here is the fact the article [An Introduction to IIFEs - Immediately Invoked Function Expressions - Adripofjavascript.com](http://adripofjavascript.com/blog/drips/an-introduction-to-iffes-immediately-invoked-function-expressions.html) highlights the fact thtt the **function expressions** can have the function value to return to a variable or to be immediately applyed:

```
// Assingment of a function expression to a variable
const myFunction = function() { /* logic here */ };

// Assignment of a function expression to a object property
const myObj = {
    myFunction: function() { /* logic here */ }
};

// Anything within the parentheses is part of an expression
(function() { /* logic here */ });

// Anything after the not operator is part of an expression
!function() { /* logic here */ };
``` 


- **Reasons to Use IIFEs**:
1. **The IIFE does not pullute the global namespace**:     
    1.1. So, different from using the internal scope of a regular function declaration that hoilsts to its upper scope, the IIFE as a function expression does not.
2. **The code of IIFEs are self-documenting**:  
    2.1. Because a function declaration is not self-documenting it might accidentally be invoked more than once.


Finnaly, the article points out that IIFEs can have arguments passed to:
    
```
let foo = foo;

(function(innerFoo) {
    console.log(innerFoo); // Outputs: 'foo'
})(foo);
``` 


###### Other resources about IIFEs:
- [An Introduction to IIFEs - Immediately Invoked Function Expressions - Adripofjavascript.com](http://adripofjavascript.com/blog/drips/an-introduction-to-iffes-immediately-invoked-function-expressions.html)


















### Test Driven Development

Test Driven Development or TDD is concept of software development where automated tests are written ahead from the functions/freatures in a way that they should describe/test how the code should actually work.

In this sense, the tests, which are being written before hand, they should first fail, and then the developer should write the code to make the function/feature pass the test correctly.


In general, tests are considered a task for bringing quality to the process of software development, but it also can be deemed that tests can make the whole process more productive, specially in more complex environment.

For example, even in a simple game, where the developer has to check a dozen result cases to define a winner, without the automated tests, he would have to manually play each of those cases in order to garantee that the code is working properly.



#### JavaScript and TDD

**COMING SOON**

































### Further Reading

[MDN plataform](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) 

[The Modern JavaScript Tutorial - Javascript.info](https://javascript.info/object)

[DOM Enlightenment - Cody Lindley - Domenlightenment.com](http://domenlightenment.com/)

[Adequately Good (decent programming advice) - Adequatelygood.com](https://www.adequatelygood.com/)

[Eloquent JavaScript - Marijn Haverbeke - EloquentJavascript.net](https://eloquentjavascript.net/)

[Vanilla JavaScript for building powerful web applications - Plainjs.com](https://plainjs.com/)

[How to Redirect Website from HTTP to HTTPS? - GeekFlare](https://geekflare.com/http-to-https-redirection/)

[You Don't Know JS (YDKJS) - Github Book](https://github.com/getify/You-Dont-Know-JS/tree/1st-ed#titles)

[How JavaScript Works - Douglas Crockford](https://www.crockford.com/books.html)

[JavaScript: The Good Parts: The Good Parts - Douglas Crockford](https://www.crockford.com/books.html)

[Even Faster Web Sites: Performance Best Practices for Web Developers - Douglas Crockford](https://www.crockford.com/books.html)


[]()


### References

[JavaScript Scoping and Hoisting - Adequatelygood.com](https://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)

[Handling Events - EloquentJavascript.net](https://eloquentjavascript.net/15_event.html)

[JavaScript Functions and Helpers - Plainjs.com](https://plainjs.com/javascript/)

[Objects - Javascript.info](https://javascript.info/object)

[JavaScript Function Parameters - W3schools.com](https://www.w3schools.com/js/js_function_parameters.asp)

[JavaScript Function Parameters - W3schools.com](https://www.w3schools.com/js/js_function_parameters.asp)

[JavaScript Prototype in Plain Language - JavaScript Is Sexy](https://web.archive.org/web/20200513181548/https://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/)

[Prototype inheritance - Javascript.info](https://javascript.info/prototype-inheritance)

[Gentle Explanation of "this" in JavaScript - Dimitripavlutin.com](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)
[]()


[^1]:it-governance-and-management-overview-2022-03-27

[^2]:pmbok-and-project-management-methodologies-2022-03-29

[^3]:itil-service-management-framework-2022-03-30

[^4]:risk-management-overview-2022-04-03

[^5]:information-security-overview-2022-04-05

[^6]:cryptography-steganography-and-cryptanalysis-overview-2022-04-07

[^7]:continuity-plan-and-essentials-for-businesses-overview-2022-04-06

[^8]:open-web-application-project-foundation-owasp-overview-2022-04-18


[^9]:javascript-trick-patterns-the-dom-overview-2022-06-25

[^10]:javascript-object-oriented-programming-pattern-2022-07-24

[^11]:front-end-development-patterns-overview-2022-03-04

[^12]:front-end-architectures-2022-03-05

[^13]:software-architecture-patterns-overview-2022-02-18

[^14]:software-architecture-and-design-2022-02-22



