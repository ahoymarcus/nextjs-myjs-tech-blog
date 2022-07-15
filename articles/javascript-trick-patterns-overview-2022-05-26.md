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
3. ##### Object Oriented Programming - OOP
    3.1. JavaScript Objects    
	3.2. JavaScript Objects are Mutable
	3.3. Prototype Versus Classes
4. ##### The 'This' Word
	4.1. The Global Context   
	4.2. The Function Scope   
	4.3. Class Context    
	4.4. As an Object Method
	4.5. This on the Objects Prototype Chain or at a Getter or Setter
	4.6. As a Constructor
	4.7. The bind() Method
5. ##### JavaScript Function Parameters
    5.1. Undefined Missing Arguments   
    5.2. The Arguments Object   
    5.3. Arguments are Passed by Value   
    5.4. Objects are Passed by Reference
6. ##### Scope & Hoisting
7. ##### The Eval() Function
    7.1. The Risks of the Eval() Function    
    7.2. Never Use Eval()!   
    7.3. Are eval() and new Function() the same thing?   
    7.4. When Eval() Is Not Evil
8. ##### Test Driven Development
    8.1. JavaScript and TDD
9. ##### 
10. #####
11. #####
12. #####
13. ##### Further Reading
14. ##### References

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




### Organizing the JavaScript Code

As it is thought in The Odin Project studies, working around the JavaScript file system organization can be a serious and difficult matter, not as much because JavaScript may detach itself as a more complex language, but because JavaScript let all of these decision in the hands of the developers, while many other languages already have a predefined file structure to be followed by.


Said that, The Odin plataform presents 4 patterns to be studied in their series:
1. **Plain Old JavaScript Objects and Objects Constructor**
2. **Factory Functions and the Module Pattern**
3. **Classes**
4. **ES6 Modules**


###### Plain Old JavaScript Objects and Object Constructor

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


- **Note**: look for more about JavaScript objects in this articles proper section.







































### Object Oriented Programming - OOP  

#### JavaScript Objects

As the tutorial at [JavaScript.info](https://javascript.info/object) brings to memory, JavaScript has 8 datatypes, where 7 a called 'primitives' bacause their values are restricted to some kind of singular element, be it a string or a number, etc.

But objects, in contrast, are a keyed collection of values, which may wrapper even more complex entities inside it. And as its basic syntax the object can be differentiated by a pair of brackets and by the pairing of a **key** and a **value** separated by a **colon** to conform each register kept by the object. Finally, each register inside a object is separated by a **comma**.

The preferred mode to create an object is the by the use of the brackets itself as it is called **object literal**. And the other mode of creation with the word **new** should be avoided because JavaScript does not have real classes, and besides that this mode can produce unexpected results.

``` 
const user = {
    firstName: 'John',
    lastName: 'Doe',
    'social status': 'single',
    age: 43
};
``` 


There are two notations that can be used to read and to write properties in a object, the first one named the **dot notation** and the second the **square bracket notation**.

About the square bracktets notation [MDN docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics) say:

`This looks very similar to how you access the items in an array, and it is basically the same thing — instead of using an index number to select an item, you are using the name associated with each member's value. It is no wonder that objects are sometimes called associative arrays — they map strings to values in the same way that arrays map numbers to values.`


Besisdes there is the word **delete** to delete properties from it.

```
console.log(`${user.firstName} :: ${user.age} years`); // John
console.log(user['lastName']); // Doe

user.isLogged = true;
console.log(user.isLogged); // true
delete user.isLogged;
``` 

- **Note**: the delete word returns the value of the property being deleted.


And while the **dot notation** is very pratical, it has some dynamic limitations, which does not occur with the **square bracket notatio** that can be used to calculate some property inside it at run-time depending of some user input. And it can also be used to create an **object literal** that may receive values.

``` 
let key = prompt('What do you want to know about the user?', 'name'');
alert(user[key]); // John (if enter "name")

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit + 'Computers']: 5,
};

alert(bag.appleComputers); // 5 if fruit="apple"
``` 



###### An Interesting Observation from the MDN Docs About the Bracket Notatin

Working with objects using the bracket notation looks very similar from using plain arrays, while in the array there is a indexation by the numeric value of the indexes, with the object, ther is a similar association that maps string to values of the object properties.


```
const person = {
    name: {
        first: 'john',
        last: 'doe',
    },
    age: 34
};

// bracket notation
person['age'] // 34
person['name']['first'] // 'john'
``` 


###### Property Value Shorthand

Since using objects is such a large practice in coding, there are some patterns to simplify dealing with property names. And one important pattern is the use of a variable with the same name of the property, which allows us to avoid repeating code:

```
function makeUser(name, age) {
    return {
        name,
        age,
    };
}
``` 

So, above, since the function parameters are the same with the properties names of the object, there is only the need to explicitly use the property name, and its value will be implicit with the value of the parameter itself.


**And another special pattern from objects is the fact that inside its scope, there is no limitation for choosing property names, as it could be a reserved JS word, and even numbers are converted in strings**:

```
let obj = {
    0: 'test',
    for: 1,
    let: 2,
    return: 3
};
``` 

Though, there is one minor gotcha while dealing with the special property named **__proto__** that we can't set it to a non-object value according to [JavaScript.info](https://javascript.info/object):


``` 
let objt = {};

obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended
``` 

`As we see from the code, the assignment to a primitive 5 is ignored. We’ll cover the special nature of __proto__ in subsequent chapters, and suggest the ways to fix such behavior.` [JavaScript.info](https://javascript.info/object)


###### Testing Property Existence and the 'in' Opertator

According to [JavaScript.info](https://javascript.info/object), a notable feature of objects in JavaScript, when compared to many ogher languages, is the fact that here it is possible to access any property, and even when the property does not exist there will be no error!

So, since reading a  non-existing property returns undefined, a test can be easily set here:

```
const user = {};

console.log(user.noSuchProperty === undefined); // true
``` 

But this test has a little shorhand, that is when some property inside of the object has the value **undefined**, so in this case the return of undefined would not be clear here. 

On the other hand, to use the **in** operator is just fine:

``` 
let user = { name: "John", age: 30 };

alert('age' in user); // true, user.age exists
alert('blabla' in user); // false, user.blabla doesn't exist
``` 

And here:

``` 
let obj = {
  test: undefined
};

alert( obj.test ); // undefined ????????

alert( "test" in obj ); // true, the property does exist!
``` 

`Situations like this happen very rarely, because undefined should not be explicitly assigned. We mostly use null for “unknown” or “empty” values. So the in operator is an exotic guest in the code.`  [JavaScript.info](https://javascript.info/object)


###### The 'for ... in' Loop

It iterates the object returning its properties,  but it can also be used to return its values also:

```
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
    // keys
    console.log(key); // name, age, isAdmin
    
    // values for the keys
    console.log(user[key]); // John, 30, true
}
``` 


#### JavaScript Objects are Mutable

There is one very important point to be made about Objects: **JavaScript Objects are Mutable**, meaning that its values can be changed. And together with objects, arrays are also mutable (since they are a kind of object).


This behavior distinguishes these both data structures from primitive values, that are not mutable, since each time a primitive value is changed, there is the creation of a new structure of data at a different block of memory, just like this:
1. The existing primitive is retrieved and the value resultant is reallocated to a new block of memory.
2. The previous position in the memory space is set free for garbage collection.


On the other hand, objects and arrays behavior differently, because they are not destroyed and renewed, but have themselves changed. And together with this mutable distinction, objects and arrays are also **addressed by reference**, what can bring unexpected results if the programmer is not aware of it.

So, being addressed by reference means that when objects (and arrays) are assigned to other variables, **there is not a real copy of the structure, but only a copy of a memory address reference, resulting not in 2 final structures, but in 2 different references to the same and only object (or array)**.


In practical terms, when an object is assigned and the new reference makes changes to the mutable object, also the old reference for the object will refer to the the same change structure:

```
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue'
};

const x = person;
x.age = 10; // now, the change will be refered equally by both x.age and person.age (since it is the same one object existent)
``` 


- **More resources on JavaScript mutation**:  
- [Mutable - MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/Mutable)  
- [JavaScript Objects - W3C](https://www.w3schools.com/js/js_object_definition.asp)



#### Prototype Versus Classes

**COMING SOON**


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain





































According to [MDN docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics), the use of **object's constructors** are importnat when it's necessary to automate the creating of many alike object and also to update them.

`Using object literals is fine when you only need to create one object, but if you have to create more than one, as in the previous section, they're seriously inadequate. We have to write out the same code for every object we create, and if we want to change some properties of the object - like adding a height property - then we have to remember to update every object.` [MDN docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)


And the use of the **new** keyword when calling a constructor will:

1. **create a new object**
2. **bind this to the new object, so you can refer to this in your constructor code**
3. **run the code in the constructor**
4. **return the new object.**

```
// The Constructor
function Person(name) {
  this.name = name;
  this.introduceSelf = function() {
    console.log(`Hi! I'm ${this.name}.`);
  }
}

const salva = new Person('Salva');
salva.name;
salva.introduceSelf();

const frankie = new Person('Frankie');
frankie.name;
frankie.introduceSelf();
``` 



### The This Word

The **this** keyword from the JavaScript environment is representative of some code being processed at runtime, and in fact, according to the [this - MDN Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this), the **this** word from JavaScript would behave a little bit different from its counterparts in some other programming languages.


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


Within the **strict mode**, the value of **this** attain itself to what it was defined; and if it was not defined it will remain **undefined**.

```
function f2() {
    'use strict';
    return this;
}

f2() === undefined // true
```

_ **Note from the MDN site**: some browsers may had have implemented this second example in a different way from the convention, resulting in a incorrect reference to the window object. this - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)


###### Arrow Functions

Inside the arrow functions, **this** retains the value of the enclosing lexical context's **this**, whether the context is Global or some other function, the value of **this** will remain the same it was defined.

_ **Note from the MDN site**: If this arg is passed to call, bind, or apply on invocation of an arrow function it will be ignored. You can still prepend arguments to the call, but the first argument (thisArg) should be set to null. [this - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)



#### Class Context

Again, according to the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), the bevavior of **this** in classes are similar to what happens with funcions, as **classes are functions under the hood**. Though, there are still some differences and caveats.


So, **within the Class Constructor**: here, **this** a regular object. And all non-static methods within the class are added to the prototype of **this**. On the other hand, the **static methods** are not property of **this**, but they are properties of the class itself.

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


#### The bind() Method

ECMAScript 5 introduced the **Function.prototype.bind()**, and so calling **func.bind(someObject)** creates a new function with the same body and scope as **func**, but where **this** occurs in the original function, in the nw function it is permanently bound to the first argument of bind, regardless of how the function is being used:


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


###### Binding the Class Method with This

As it was say, with class in general, **static** methods belong to the class, while the others belong to the object bind when it is present at the constructor. And this next example from [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) makes an interesting from all of that together with the binding method:


Bellow, we have a class with 2 methods, but one of then used the bind method, so it was tied to the class itself, and not the instance, as it happens with the method that didn't use the bind method:

```
class Car {
    constructor() {
        // bind sayBye but not sayHi to show the different behavior
        
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


// the value of 'this' with sayHi will depend on the caller
car.sayHi(); // Hello from Ferrari

bird.sayHi = car.sayHi;
bird.sayHi(); // Hello from Tweety

// For the bouded method sayBye, 'this' doesn't depend on the caller
bird.sayBye = car.sayBye;
bird.sayBye();
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



### Scope & Hoisting 


**COMING SOON**

JavaScript Scoping and Hoisting - Adequatelygood.com - https://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html




































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

[]()


### References

[JavaScript Scoping and Hoisting - Adequatelygood.com](https://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)

[Handling Events - EloquentJavascript.net](https://eloquentjavascript.net/15_event.html)

[JavaScript Functions and Helpers - Plainjs.com](https://plainjs.com/javascript/)

[Objects - Javascript.info](https://javascript.info/object)

[JavaScript Function Parameters - W3schools.com](https://www.w3schools.com/js/js_function_parameters.asp)

[JavaScript Function Parameters - W3schools.com](https://www.w3schools.com/js/js_function_parameters.asp)

[]()


[^1]:it-governance-and-management-overview-2022-03-27

[^2]:pmbok-and-project-management-methodologies-2022-03-29

[^3]:itil-service-management-framework-2022-03-30

[^4]:risk-management-overview-2022-04-03

[^5]:information-security-overview-2022-04-05

[^6]:cryptography-steganography-and-cryptanalysis-overview-2022-04-07

[^7]:continuity-plan-and-essentials-for-businesses-overview-2022-04-06

[^8]:open-web-application-project-foundation-owasp-overview-2022-04-18


