---
author: 'Marcus Vinicius Richa'
title: 'JavaScript Trick Patterns - Part I'
date: '2022-05-26'
subject: 'web-dev-articles'
description: 'This article focuses specially at some trick features that are more commonly found in the JavaScript language like prototype, hoisting, etc. And this article also focus on more general tasks, but here seem from the perspective of the JavaScript language and its core tasks.'
---

# JavaScript Trick Patterns - Part I

1. ##### Introduction
2. ##### Organizing the JavaScript Code
    2.1. Plain Old JavaScript Objects and Object Constructor   
    2.2. Factory Functions and the Module Pattern    
    2.3. Classes
    2.4. Brief History of the JavaScript Module Developement   
    2.5. ES6 Modules
3. ##### The Webpack
    3.1. Webpack's Basic Concepts    
    3.2. Webpack's Configuration File   
    3.3. Webpack's Asset Management    
    3.4. Webpack's Output Management   
    3.5. Webpack Resources: Deeper into the Webpack Operation
4. ##### Linting
    4.1. Some Popular JavaScript Style Guides
5. #####
6. #####
7. ##### Further Reading
8. ##### References

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
- `JavaScript Trick Patterns - Part II` [^9]
- `JavaScript Trick Patterns for the DOM - Overview`[^10]   
- `Javascript Object Oriented Programming (OOP) Pattern` [^11]   
- `Front-end Development Patterns` [^12]   
- `Front-end Architectures` [^13]   
- `Software Architecture Patterns - Overview` [^14]   
- `Software Architecture and Design` [^15]




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


And perhaps one other distinction that may happen is the fact that the **module pattern** employ Immediately Involked Function Expressions (IIFE) for the task.


Also, according to the article [JavaScript Module Pattern Basics](https://coryrylan.com/blog/javascript-module-pattern-basics) from Cory Rylan, the module pattern is one of the most common design patterns used in JavaScript:

1. For encapsulation
2. For services
3. For TDD, etc.


Another important point brought by Cory Rylan is to use **'strict mode'** as good practice, to avoid `more dangerous parts in JavaScript`. And as a procedure the author set some steps into building the **module**:

1. **Use IIFEs**: not only IIFEs provide a particular scope to be managed, but it also avoid polluting the **namespace** like function declarations does.
2. **Use 'strict mode'**
3. **Export public properties/functions**: with the use of **return** statment to expose the data from outside.
4. **Make use of private properties whenever necessary**: since only that which is exposed at the return statement can be reached, the module can safely make use of all the necessary data.
    4.1. Since JavaScript does not have **private** keyword like other languages, it is customary to use a sign of underscore to visualy prefix and points out about the private structures.


```
const myModule = (function() {
    'use strict';
        
        const _privateProperty = 'Hello World!';
        const publicProperty = 'I am a public property';
        
        function _privateMethod() {
            console.log(_privateProperty);
        }
        
        function publicMethod() {
            _privateMethod();
        }
        
    return {
        publicMethod,
        publicProperty
    };
})();

myModule.publicMethod(); // 'Hello World!'
console.log(myModule.publicProperty); // 'I am a public property'
console.log(myModule._privateProperty); // undefined
myModule._privateMethod(); // TypeError: myModule._privateMethod is not a function
```

`The benefit to the Revealing Module Pattern is that we can look at the bottom of our modules and quickly see what is publicly available for use. The Module Pattern is not a silver bullet for adding code re-usability to your JavaScript. Using the Module Pattern with Prototypal Inheritance or ES6 Classes can give you a wide range of design patterns with varying pros and cons.` [Coryrylan.com](https://coryrylan.com/blog/javascript-module-pattern-basics)]


Below, another interesting example from the article [Module pattern in JavaScript](https://dev.to/tomekbuszewski/module-pattern-in-javascript-56jm) from Tomek Buszewski:

``` 
const Formatter = (function() {
    const log = (message) => console.log(`[${Date.now()}] Logger: [${message}]`);
    
    const makeUpperCase = (text) => {
        return text.toUpperCase();
    };
    
    return {
        log,
        makeUpperCase,
    };
})();

console.log(`${Formatter.log('Hello')} ${Formatter.makeUpperCase('John')}`); // [1658881465387] Logger: [Hello] index.html:27:50 JOHN
```


But, Tomek Buszewski also points out some drawbacks from the module pattern:

`This shows that everything publicly exposed can be changed from the outside. This is one of the biggest module pattern drawbacks.` [Tomek Buszewski](https://dev.to/tomekbuszewski/module-pattern-in-javascript-56jm)]



###### Other resources about these patterns:
- [Constructors Are Bad For JavaScript - Tarek Sherif](https://tsherif.wordpress.com/2013/08/04/constructors-are-bad-for-javascript/)
- [Constructors Considered Mildly Confusing - Zeekat.nl](https://zeekat.nl/articles/constructors-considered-mildly-confusing.html)
- [Object.assign() - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [An Introduction to IIFEs - Immediately Invoked Function Expressions - Adripofjavascript.com](http://adripofjavascript.com/blog/drips/an-introduction-to-iffes-immediately-invoked-function-expressions.html)
- [JavaScript Module Pattern Basics - Coryrylan.com](https://coryrylan.com/blog/javascript-module-pattern-basics)
- [Module pattern in JavaScript - Tomek Buszewski](https://dev.to/tomekbuszewski/module-pattern-in-javascript-56jm)
- [Modular Javascript - LearnCode.academy](https://www.youtube.com/playlist?list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f)
- [Learning JavaScript Design Patterns - Addy Osmani](https://www.patterns.dev/posts/classic-design-patterns/)



#### Classes

Classes are not a natural feature from JavaScript object oriented programming, and it was introduced with the ES6 to introduce the known familiar syntax from traditional OOP languages. But, there is controversy about its use because this new class syntax.


So, the criticism are over the fact that this syntax just lays over the basic prototype-based constructors that are natural from the JavaScript language, and can even be dangerous **because its obscure and mislead what's really going on with the objects underneath**.


More speciffically, according to the article  [Class basic syntax - JavaScript.info](https://javascript.info/class), a class is a **template code (or extensible program) which serves the purpose of provide initial values for the state and also some implementation bevavior**, and just like the **construct** feature from JavaScript, the class aims to help in the creating of multiple objects of the same kind.


And about the syntax itself, it's important to pay attention to the fact that **there is no commas separating the class method inside the class construct**:

```
class User {
    constructor(name) {
        this.name = name;
    }
    
    sayHi() {
        console.log(this.name);
    }
}

let user = new User('John');
user.sayHi(); // 'John'

// teste User type
console.log(typeof User); // function
console.log(User === User.prototype.constructor); // true
console.log(User.prototype.sayHi) // presents the code of the sayHi method
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

// It can't be called without the new word
User(); // TypeError: class constructors must be invoked with 'new'
``` 

The article [Class basic syntax - JavaScript.info](https://javascript.info/class) also describes what happens under the hood with this class syntax in JavaScript:

1. The class declaration creates a functiono of the same name.
2. The new function code is taken from the constructor method and from the class methods present.


But, in opposition to what many authors claim, this article says that the class syntax has a little bit more than a mere **syntatic sugar** code appearence:

```
function User(name) {
    this.name = name; // the function prototype already have a 'constructor' property by default
}

User.prototype.sayHi = function() {
    console.log(this.name);
};

let user = new User('John');
user.sayHi(); // 'John'
``` 

[Class basic syntax - JavaScript.info](https://javascript.info/class)
1. There is a special internal property **[[IsClassConstructor]]: true** which, for exemple, can prevent the class to be called without the **new**.
2. The class function sets its class methods to non-enumerable, since while using a **for..in** method people usually don't want to see its class methods.
3. Classes always **'use strict'** code by default.


Another point where classes equal functions in JavaScript is with the possibility to have a class defined inside another expression and be passed around, there is, just like a named function expression. And with classes also the class name is only visible inside the class:

```
let User = class MyClass {
    sayHi() {
        console.log(MyClass);
    }
}

new User().sayHi(); // works and shows MyClass definition

console.log(MyClass); // ReferenceError: MyClass is not defined
```


And also like literal objects, classes may include getters/setters, computed properties, etc.

```
 class User {
    constructor(name) {
        // invoke the setter
        this.name = name;
    }
    
    get name() {
        return this._name;
    }
    
    set name(value) {
        if (value.length < 4) {
            console.log('Name is too short.');
            
            return;
        }
        
        this._name = value;
    }
}

let user = new User('John');
console.log(user.name); // 'John'

user = new User(''); // 'Name is too short.'
```


Also interesting the fact that just like object literal, classes accepts **Computed names**: **[ ... ]**

```
class User {
    [ 'say' + 'Hi' ]() {
        console.log('Hello');
    }
}

new User().sayHi();
``` 

###### Class Fields

This is a more recent addintion that in many browsers would demand to use polyfill. And this syntax novelty allows to direct add properties to the class, thus it is important to notice that, according to [Class basic syntax - JavaScript.info](https://javascript.info/class), this fields are set on individual objects, not on the class prototype:

```
 class User {
    name = 'John';
    
    sayHi() {
        console.log(`Hello, ${this.name}!`);
    }
}

new User().sayHi(); // 'Hello, John!'

// test the User.prototype.name
console.log(User.prototype.name); // undefined
``` 


###### Bound Methods in Classes

Just like in functions, there is the necessity to bind the context of the class each time it is passed arond and the 'this' context change dynamically in JavaScript. This problem is often called **'losing this'**:

```
class Button {
    constructor(value) {
        this.value = value;
    }
    
    click() {
        console.log(this.value);
    }
}


let button = new Button('Hello');

setTimeout(button.click, 1000); // undefined
```

And just like with functions, there is 2 approaches to fixing it:
1. **Pass a wrapper-function**: like a arrow function callback
2. **Bind the method to object**: for example, in the constructor


```
class Button2 {
    constructor(value) {
        this.value = value;
    }
    
    click = () => {
        console.log(this.value);
    }
}

let button2 = new Button2('Hello');

setTimeout(button2.click, 1000); // Hello
```


###### Examining JavaScript Classes a Little Closer

So, recapitulating all that was said, as the [Classes - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) article says:

1. Classes are template codes for objects.
2. It's built on prototypes.
3. As a kind of object, classes are `special functions` ([MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes))
4. Just like function they have 2 forms of definitions:   
    4.1. Class declarations   
    4.2. Class expressions: both named and unnamed.   
    4.3. In terms of named classes, it is important to see that its name is local to the class's body, but it can be accessed via the **name** property: **console.log(MyClass.name);**


On the other hand, there are speciffic differences in classes when compared with general functions:
    
1. That eventhough the class is **hoisted** its values are not.   
    1.1. Because of this trying to instanciate a new object will result in a **ReferenceError**.
2. The class body is always execute in **'strict mode'**.
3. Also, as was seem above, classes have the property **[[IsClassConstructor]]: true**:   
    3.1. And they cannot be called without the **new** word ([Class basic syntax - JavaScript.info](https://javascript.info/class)).


The JavaScript classes also have a **constructor**, a special method, and there can be only one to avoid a **SyntaxError**. Also, another feature from classes are the **static initialization blocks**:

`Class static initialization blocks allow flexible initialization of class static properties including the evaluation of statements during initialization, and granting access to private scope. Multiple static blocks can be declared, and these can be interleaved with the declaration of static properties and methods (all static items are evaluated in declaration order).` [Classes - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)


The MDN Docs also explains that the **static methods/properties** belong to the class and cannot be through a class instance:

1. The are called without instanciating their classes and cannot.
2. The static methods are often used to create utility functions for an applicaton.
3. The static properties are useful for caches, fixed-configuration, or any other data that doesn't need to be replicated across instances.

```
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    static displayName = 'Point';
    
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        
        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5,5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(Point.displayName); // 'Point'
console.log(Point.distance(p1, p2)); // 7.0710678118654755
``` 


Another specific feature from classes is the syntax of **field declarations** which have already been mentioned, which can also be declared as private with the use of a **hastag**:

```
class Rectangle {
    height = 0;
    width;
    
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
```

- **Note**: though private fields can only be declared in the body of the class and for that reason fields cannot be declared later through assigning to classes.


The class syntax also allows the use of **extends** word to create sub-classes or child classes. And there are 3 important points to be made here:

1. Subclasses can use **extends** not only from class themselves, but they can also use the word to extend a traditional function-based "class".  
    1.1. Atention: but the classes cannot extend from regular (non-constructible) objects: for this task there has be used the method Object.setPropertyOf()
2. There's the necessity to use the **super()** method to call for the super class to initialize properties defined there.
3. It's also possible to use a **super** keyword for a child makes a direct call from its method for the parents corresponding method.

```
class Animal {
    constructor(name) {
        this.name = name;
    }
}


class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Lion extends Cat {
    speak() {
        super.speak(); // making a call to parents corresponding method
        console.log(`${this.name} roars.`);
    }
}

const lion = new Lion('Fuzzy');
lion.speak();

// Outpu:
// Fuzzy makes a noise
// Fuzzy roars
```


Finally, there is the fact that a subclass can only have one superclass, **so multiple inheritance from tooling classes, for exemple, is not possible**, and the needed functionalities, them, have to be all provided by the superclass directly.


` Abstract subclasses or mix-ins are templates for classes. An ECMAScript class can only have a single superclass, so multiple inheritance from tooling classes, for example, is not possible. The functionality must be provided by the superclass. A function with a superclass as input and a subclass extending that superclass as output can be used to implement mix-ins in ECMAScript:`


```
const calculatorMixin = (Base) => class extends Base {
  calc() { }
};

const randomizerMixin = (Base) => class extends Base {
  randomize() { }
};

class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }
```

- **Mix-ins for classes example above from the MDN Docs**: [Classes - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)



###### Discussion: Is "Class" in ES6 The New "Bad" Part for JavaScript?

This is a discussion taken from the article [Is “Class” In ES6 The New “Bad” Part? - Rajaraodv](https://rajaraodv.medium.com/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65), in which is examined whether the use of classes in JavaScript is mere a "syntatic sugar" and perhaps even dangerous for the code maintanability?


So, the arguments assembled by the author **in favor** of the JavaScript class system:

1. It has a familiar look to the traditional syntax present in traditional OO languages.
2. It does not restrain the developer to use or to migle it with the core prototypical system in any capacity.

`Also, most JS folks just want to do basic OO stuff and move on. But the current syntax throw them off.` [Rajaraodv](https://rajaraodv.medium.com/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65)


And also the arguments **against it**:

1. The prototypical system is more flexible, since objects can spring without the need of a previous restrictive blueprint.
2. Also, the prototypical is more inlined with the principals of OO to "Favor Composition over Inheritance", while class based syntax goes in the opposite direction, since "Class" notation favors "Inheritance over Composition".


`Bad For Functional Programming: In JS functions are first-class citizens. Functional programming is all about using functions to their fullest extent. There is a notion called: “Favor Composition over Inheritance” and here we are going in the opposite direction because “Class” notation favors “Inheritance over Composition”.` [Rajaraodv](https://rajaraodv.medium.com/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65)



###### Other resources about classes online:
- [Classes - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Class basic syntax - JavaScript.info](https://javascript.info/class)
- [Is “Class” In ES6 The New “Bad” Part? - Rajaraodv](https://rajaraodv.medium.com/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65)
- [JavaScript Classes - Stephen Mayeux](https://www.youtube.com/playlist?list=PLtwj5TTsiP7uTKfTQbcmb59mWXosLP_7S)



#### Brief History of the JavaScript Module Developement

Peter Jang wrote this article with a brief history of the development of the frontend tasks of delivering working sites to the Web. And, at the beginning the works around were plain and simple, since all that was need was:

1. HTML
2. CSS
3. JavaScript

And they were all assembled manually at the HTML file by linking the files wheter in the Header element, in the case of the CSS and sometimes the JavaScript also.


But, as Peter Jang points out, this type of manual working brings a great deal of maintaining, since every file, library and scripts in general are bloating the HTML file and also demand the annoying task individually going after each of the scripts to check for new versions and do the related updates.


So, mainly around 2010, started to appear a series of competing JavaScript package managers aiming to automate all this process of downloading and upgrading libraries from a central repository.


At first, then, **Bower** became very popular, but eventually it was overtaken by **npm** (Node Package Manager) around 2015. Later came also **yarn** that also begun to gain traction, eventhough yarn still has the same engine from the npm packages under the hood, but with a alternative interface.


Well, to start this new procedure of development, then, its import to have the Node.js runtime engine, which has by default the npm as its package manager:

1. **npm init**: to start a new project in the filesystem.
2. **Generate the package.json file**: which has the configuration for this new project and that also saves its related information.
3. **Scripts/libraries can be installed as dependencies**: and they are managed by npm in a automatic created folder in the project root folder, called **node_modules**.
4. **Link the scripts direct from the node_modules folder**:   
    4.1. And it could be something like: `<script src="node_modules/moment/min/moment.min.js"></script>`
5. **Have the script/library loaded in the HTML**: so everything that came along is set globaly in a variable.   
    5.1. A problem here is the fact that regardles of whether or not they are needed, they are all currently present and bloating the application and its scope.


- **Note**: another very interesting point of this system is the fact that keeping all the configuration and information of the current project in package.json, transfering it can be pretty simple and very light, where at the other end of the process there is only the need to use the npm engine to extract all the informations and to configure a new project set, including the whole section of the **node_modules** which can became seriouly big at times.


At this point, the process has already been improved quite a lot, since now all the scripts/libraries dependencies are centralized in just one place and can be thoroughfully managed and updated automatically by the npm engine.


But there were still some complexities remaining, like the necessitty to manually go through the node_module folder, retrive the scripts/library and setting everything in the HTML base file.


Another restriction related to JavaScript and the browsers in general, was the fact that initially they were not intended to deal with the filesystem (for security reasons), and they also had to keep everything that was brought along shared in the global scope of the application:

`Most programming languages provide a way to import code from one file into another. JavaScript wasn’t originally designed with this feature, because JavaScript was designed to only run in the browser, with no access to the file system of the client’s computer (for security reasons). So for the longest time, organizing JavaScript code in multiple files required you to load each file with variables shared globally.` [Peterxjang.com](https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html)


So, in **2009** came about a project named CommonJS that had as one of its main goals to specify an ecosystem for JavaScript outside of the browser, and then allow it to deal with importation and exportation of code across the JavaScript files and resorting to speciffic scopes, called **modules**, instead of bloating the global scope of the HTML file.


Another interesting fact is that from the same group CommonJS came the well known implementation of the Node.js, the runtime engine for JavaScript outside of the browsers environment.


So, now, returning to the previous task of preparing the frontend developement to receice all the necessary scripts and libraries, instead of dealing with the JS part directly in the HTML file, now the works can be done throgh the JS ecosystem itself, where they are linked across the JS files themselves using the **require** feature:


**index.js**
```
var moment = requie('moment');

console.log('Hello from JavaScript!');
console.log(moment().startOf('day').fromNow());
``` 


Again, just like **npm** do its works managing the packages modules, the Node.js engine also has its capacity to deal with the computer's filesystem in his own and manage as well all the integration of the JS modules among themselves.


In that way, as Peter Jang points out, there is no need for a complex requirement system pointing each requisition to its place in the JS ecosystem, including the node_modules. So, instead of this complex require shown below, the developer only needed to make the requisition through the variable name just like it was done in the example above:

```
var moment = require('./node_modules/moment/min/moment.min.js');
```


Well, but there was a problem yet! That this work around a JavaScript ecosystem could not be done in the frontend with the browser, because the browser itself was incapable of making the dynamic requisitions going through the new JS  ecosystem with all its speciffic modules:


`This is all great for node.js, but if you tried to use the above code in the browser, you’d get an error saying require is not defined. The browser doesn’t have access to the file system, which means loading modules in this way is very tricky — loading files has to be done dynamically, either synchronously (which slows down execution) or asynchronously (which can have timing issues).` [Peterxjang.com](https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html)


To work around this this task came then the **module blunder**, which is a tool that gets around the problem with a build step (which has access to the file system) to create a final output that is browser compatible. 


So, what is happening here is the task of the module blunder going through all the existing modules and changing the requirements made and replacing with the actual code/script that is required, creating one final single **bundled JavaScript file** to be properly used by the browser.


Initially, the most popular bundler was **Browserify**, which was released in 2011 and used a Node.js style of require statements on the frontend, but aroung 2015 another tool called **Webpack** eventually became more widely used, specially because of its large usage by the popular frontend library React.js.


And in terms of the use of Webpack, there is the need to install it, but this time not as a proper dependency, because this tool is not part of the final project, bu to have it installed as a development enviroment dependency:

```
$ npm install webpack webpack-cli --save-dev
``` 


And, so, at the statement above its installed both Webpack and its Cli for console managing purposes, also with the flag to copy the configuration to the development dependencies of the package.json file.


To use the tool, it could be either brought directly from the node_modules, or through a script present in the package.json. Below, the first way:

```
$ ./node_module/.bin/webpack index.js --mode=development
``` 

So, in the statment above webpack is retrived from where it was installed and it goes through the JS files, starting in the index.js. At the end it will produce a single output file to be use, which by default is **dist/main.js**.

The flag for mode development tells webpack to keep the final bundle human redable, differently from the **--mode=production** flag for the final product which comes minified for performance reasons.


At the end, its this single file that is linked at the HTML file using a general name, which allows for the bundler be rerun each time it's necessary without any need to change its link in the HTML file:

```
<script src="./dist/main.js"></script>
```


But, to simplify the work around Webpack, specially while using its more advanced features, there is the possibility to use the configuration file, where the whole process of the Webpack call is descriminated, and the developer only needs to call for the tool itself:

```
$ ./node_module/.bin/webpack
``` 

While the configuration file should be: **webpack.config.js**

```
// webpack.config.js
module.exports = {
    mode: 'developement',
    entry: './index.js',
    output: {
        filename: 'main.js',
        publicPath: 'dist'
    }
};
```


`Overall, this may not seem like much, but there are some huge advantages to this workflow. We are no longer loading external scripts via global variables. Any new JavaScript libraries will be added using require statements in the JavaScript, as opposed to adding new <script> tags in the HTML. Having a single JavaScript bundle file is often better for performance. And now that we added a build step, there are some other powerful features we can add to our development workflow!` [Peterxjang.com](https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html)


Next, another development in the the Frontend workflow there is something related with the task of **transpiling code**, meaning converting the code written in one language into another similar language.


For example, CSS has many auxiliare languages like **Sass**, **Less**, and **Stylus**, while for JavaScript some important examples would be **Coffescript**, for around 2010, and nowdays **Babel** or **Typescript**.


So, keeping up with the idea of the project already initiated, a good example on how one of these languages could be benefial to a JavaScript task where the **babel** transpiler is capable of reaching all the code produced and transforming all the JavaScript into a ES5 version, which is much more friendly for browsers, specially older ones:

```
$ npm install @babel/core @babel/preset-env babel-loader --save-dev
```

Here, again, different packages are being installed as development dependencies, where the besides the core features of babel there the version chosen for transpiling and also a loader that enable babel working with webpack.


As configuration, it could be something like this:

``` 
// webpack.config.js
modelu.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'main.js',
        publicPath: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
``` 

So, there the configuration telling the webpack to search for JavaScript files, excluding the node_modules folder, and to apply the preset using the babel-loader.

After adding this next step to the frontend project, then, its necessary to call webpack again as to bring about all the new transformations into the new resulting JavaScript arquive.

```
$ ./node_modules/.bin/webpack
```


Finally, one last important development to polish this frontend workflow, that already have many steps, would be to also look for convinient tools to help to make all the workload flow better.


For example, in the frontend scenery, at one time a such like feature was **Grunt** a **task runner** that would help to run all these different chores like: minifying code, optimizing images, running tests, etc.


Nowdays, according to Perter Jang one of the most popular choice is to use the **npm** itself with its scripting abilities, and that can be configured direct into the **package.json**:

``` 
// package.json
{
    "name": "modern-javascript-example",
    "version": ...,
    ...,
    "scripts": {
        "build": "webpack --progress --mode=production",
        "watch": "webpack --progress --watch",
        "serve": "webpack-dev-server --open"
    },
    ...,
    ...
}
``` 

Above there are 3 scripts set, where one for the production build, another that calls for a watcher feature which automatically rerun webpack each time that the JavaScript files defined in the webpack configuration are changed. And they are both flaged with the progress option to log the percentage for the running task.


So, one is run in the console:

``` 
$ npm run build
```

And the other, also from console:

```
$ npm run watch
```

And the third script calls for a simple web server for live reloading of the HTML file at the screen; but this last script task still needs to be installed as a development dependency in packge.json:

```
$ npm install webpack-dev-server --save-dev
```


`Note that the scripts in package.json can run webpack without having to specify the full path ./node_modules/.bin/webpack, since node.js knows the location of each npm module path. This is pretty sweet! We can make things even sweeter by installing webpack-dev-server, a separate tool which provides a simple web server with live reloading. To install it as a development dependency, enter the command [...] This will automatically open the index.html website in your browser with an address of localhost:8080 (by default). Any time you change your JavaScript in index.js, webpack-dev-server will rebuild its own bundled JavaScript and refresh the browser automatically. This is a surprisingly useful time saver, as it allows you to keep your focus on the code instead of having to continually switch contexts between the code and the browser to see new changes.` [Peterxjang.com](https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html)


So, in summation:

1. The addition of a **package manager** to automate the management of package dependencies.
2. The addition of a **module blunder** to manage a ecosystem of scripts files next to the filesystem and bring about one resulting file to be linked in the HTML file.
3. Also, to add a **transpiler** for dealing many kind of tasks, but mainly to convert all the JavaScript code into a more friendly ES5 version that can more easily be coped by all browsers.
4. Then, finally, a task runner that can automate different parts of the building process.



#### ES6 Modules

Not to be confused with the module pattern, **modules** or more speciffically the **ES6 Module** is The implementation of code modularity feature, meaning a piece of code that is splitted into many familiar sections that leave the global scope of the application free.


So, the opposing workflow to modules would be the code of some application all appended in the same scope or contex, that is the application's own global scope. And, of course, such a model where all parts of the code are bloated at the same place makes things much harder to maintain or even to allow re-use of code.


Another change that the introduction of this new modular system with **import** and **export** statemens in the JavaScript architecture is the fact that the use the modular pattern together with IIFEs (Immediately Invoked Function Expressions) is not need any more.


###### The Static 'Import' Declaration

The static import declaration is used to **import read-only live bindings which are exported by another module**. And the cause that makes this interesting feature to be called **live bindings** is the fact that they can be updated by the orginal module which exported it, but the recipient module for the live bindings cannot modify it on its side.


Also, modules **are automatically interpreted in 'stric mode'**, and in terms of HTML, this can be achieved by adding a **type="module" to a <script> element**. Finally, there is also the syntax with a function-like **import()** which dismiss the requirement to have this particular type added to script tags.


Also, in the case of older browsers that does not reconize the new feature, developers use the **nomodule** property in the Script  tag, which does not make difference in older browsers, but it is completely ignored by newer browsers that will pass on it and read the one with **type="modue"**:

```
<script nomodule src=""></script>
<script type="module" src="main.js"></script>
```


The import declarations have to come at the top-level, so they must be excluded from inside code blocks, function, etc. And a basic systax for import could be:

```
import defaultExport, { exportModule1 as alias1, exportModule2 as alias2, /* ...*/ } from 'module-name';
``` 

The terms:

1. **defaultExport**: it is related to a **default export**.   
    1.1. And it has to be a valid JavaScript identifier.
2. **module-name**: it is the name of the module which is exporting the functionality.
3. **name**: it refers to a valid name for a basic export.
4. **aliasN**: this alias are used for practicality and they also need to be valid identifiers.   
    4.1. Alias are obrigatory when the export declaration is made as a string literal, forcing that also the import declaration may receive a valid name as alias.


`import declarations are designed to be syntactically rigid (for example, only string literal specifiers, only permitted at the top-level, all bindings must be identifiers), which allows modules to be statically analyzed and linked before getting evaluated. This is the key to making modules asynchronous by nature, powering features like top-level await.` [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)


Treating it specifficaly, there can be 4 forms of **import** declarations:

1. **name import**: as the form **import { export1, export2 } from 'module-name';**.   
    1.1. Sometimes a functionality may be exported using a string literal, which in terms demands that a alias may be provided to it in the import declaration.
2. **default import**: as the form **import defaulExport from 'module-name';**.
3. **namespace import**: as the form **import * as name from 'module-name';**.    
    3.1. The namespace import inserts all the contents that were exported in a object.   
    3.2. This object created as namespace for the import is sealed with null prototype.
4. **side effect import**: as the form **import 'module-name';**
    4.1. This serves to import the **side effects** os some module, that is executing the functionalities on the global code, but without actualy importing any values from the original module itself. 
    For example: **import 'main.css';**



###### The 'Export' Declaration

The export declaration is used to export values from a JavaScript module, and the values that are exported are considered **live bindings**, because once its values are changed in the original module which is exporting it, the new value is made available to the importing module.


Modules, as it was said above, are interpreted in **'strict mode'** and its use in HTML, for example, demands the use of as **type="module to the <script> element** in order that the runtime can interpret the functionality as a module.

Also, in the case of older browsers that does not reconize the new feature, developers use the **nomodule** property in the Script  tag, which does not make difference in older browsers, but it is completely ignored by newer browsers that will pass on it and read the one with **type="modue"**:

```
<script nomodule src=""></script>
<script type="module" src="main.js"></script>
```


Some important notes:

1. Any mudule can deal with the 2 different types of export at the same time, **named export** or **default export**, but while there can be multiple named exports per module, there can be only one default export per module.
2. A named export has to be refered by a import with the exact same name, while default exports can be import with any name.
3. The **export default** syntax allow any kind of expression: **export default 1 + 1;**


```
// file1
const k = 12;
export default k;

// file2
import m from 'file1';
console.log(m); // 12
```




- **Exporting Declarations**: 

```
export let name1;

export const name1 = 1;

export function functionName() {}

export class ClassName {}{}

export const { name1, name2: bar } = o;

export const [ name1, name2 ] = array;
```
    
- **Export List**:

```
export { name1 as alias1, /* ... */, nameN as aliasN};

export { variable1 as "string literal name" };
``` 
   
- **Default Exports**:

```
export default expression;

export default functionName() {}

export default class className {} 

export default function() {}

export default class {}
```

Also, in terms of defalt exports, this two below are equivalent:

```
export { myFunction as defalt };

export default myFunction;
```


- **Aggregation Modules**:

``` 
export * from 'module-name';

export * as name1 from 'module-name';

export { name1 as alias1, /* ... */, nameN as aliasN } from 'module-name';

export { default, name1, /* ... */, nameN } from 'module-name';
```

- **General notes**:

1. The MDN Docs says that that differntly from import declaration which must have it declared at the top-level beforehand, the export declaration does not have "temporal dead zone" rules, it can even be declared beforehand the declaration of the feature which is going to be exported (here, we can remember that the export declaration itself does not utilize per se any of the values it is exporting). [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
2. There can't be JS modules run via a **file:// URL**, because it is going to get cought by CORS.  
    2.1. It has to go through a HTTP server.



###### Re-exporting / Aggregating

This is a peculiar feature that allows a module to act as a "relay" for exported values, for example, when some modules are created as a means to concentrate various exports from various modules (**usually called a "barrel moduele"**).


```
export {
    default as function1,
    function2,
} from 'bar.js';
``` 

This would be comparable to have both a import and a export passing through this "barrel module":

```
import { default as function1, function2 } from 'bar.js';

export { function1, function2 };
``` 

###### A Complete Example from MDN Docs

The example works with the following hierarchy;
1. childModule1.js: 2 exports
2. childModule2.js: 1 export
3. ParentModule.js: acting as a aggregator (and doing nothing else)
4. top level module: consuming the exports from the ParentModule.js.

```
// childModule1.js
function myFunction() {
    console.log('Hello!');
}

const myVariable = 1;

export { myFunction, myVariable };

// childModule2.js
class MyClass {
    constructor(x) {
         this.x = x;
    }
}

export { MyClass };

// parentModule.js
export { myFunction, myVariable } from 'childModule1.js';

export { MyClass } from 'childModule2.js';

// THE TOP LEVEL MODULE
import { myFunction, myVariable, MyClass } from 'parentModule.js';
```


###### Other resources about ES6 Modules online:
- [Modern JavaScript Explained For Dinosaurs - Peterxjang.com](https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html)



### The Webpack

The **Webpack** is simply a tool for bundling modules or in another words, a tool for compiling JavaScript modules. And once installed it can be interacted with from the CLI or API. 


So, a basic installation of webpack for a new project could be:

``` 
$ mkdir webpack-demo
$ cd webpack-demo
$ npm init -y
npm install webpack webpack-cli --save-dev
```

The flag **-y** quickly configure default option for the new project and than **--save-dev** define webpack as a development dependency. Another point made by the Webpack Docs is the care to change the configuration of package.json for projects that are not for publishing:

```
{
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
   "private": true,
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
   },
   "keywords": [],
   "author": "",
   "license": "MIT",
   "devDependencies": {
     "webpack": "^5.38.1",
     "webpack-cli": "^4.7.2"
   }
 }
``` 

Above, the entry point property, **"main": 'index.js'**, was excluded and the private property included. And in the JS script the Docs example uses the Library **Lodash** which come linked in the HTML file.


```
<script src="https://unpkg.com/lodash@4.17.20"></script>
```

But, this is far from being a ideal set for a professional project:

1. It's not immediately apparent that the script depends on an external library.
2. If a dependency is missing, or included in the wrong order in the HTML file, the application will not function properly.
3. If a dependency is included but not used, the browser will be forced to download unnecessary code.
4. It creates problems of maintainnability, since dependencies have to be manually checked and updated.


Before start using the bundler features, the Docs propose to change the directory structure creating a **dist** folder for the minimazed and optimized output.

In the example below the file index.html was changed to the the **dist** folder, but it could also be generated automatically, and **dist** could be left empty:

```
webpack-demo
  |- package.json
  |- package-lock.json
  |- /dist
        |- index.html
  |- /src
        |- index.js
```


Then, its necessary to have the dependency installed localy:

```
$ npm install lodash --save
``` 

`In this setup, index.js explicitly requires lodash to be present, and binds it as _ (no global scope pollution). By stating what dependencies a module needs, webpack can use this information to build a dependency graph. It then uses the graph to generate an optimized bundle where scripts will be executed in the correct order.`[Webpack Docs](https://webpack.js.org/guides/getting-started/)


Then the docs define the call for the Webpack binary by the **npx** command from Node 8.2/npm 5.2.0 or higher, considering that its place of origin in the **node_modules** folder is **./node_module/.bin/webpack**:


```
$ npx webpack
[webpack-cli] Compilation finished
asset main.js 69.3 KiB [emitted] [minimized] (name: main) 1 related asset
runtime modules 1000 bytes 5 modules
cacheable modules 530 KiB
  ./src/index.js 257 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
webpack 5.4.0 compiled successfully in 1851 ms
``` 


The Webpack Docs also points out that:
1. **Webpack 'transpiles' import and export statements by default**
2. **But, other features that need to be transpiled should be done by the use of transpiler tools like Babel, via webpack's loader system**



#### Webpack's Basic Concepts

Interesting to point here also some final Webpack concepts that direct the general operation for the tool:

1. Webpack works as a static module bundler:  
    1.1. It internally processes the applicatoin and builds a **dependency graph** which can have 1 or more **entry points** and also output in 1 or more final bundles, as static assets to serve content for the project.
2. **Entry point**: this indicate the initial operation for webpack to start constructing the internal dependency graph.    
    2.1. By default: **./src/index.js**
    2.2. It can multiple entrie pointis, but once initiated the process, webpack would directly or indirectly figure out the tree of modules dependencies.
3. **Output**: it defines where to place and how to name the final bundle(s) webpack creates.  
    3.1. By defaul: **./dist/main.js**
4. **Loaders**: out of the box, webpack only understand **JavaScript** and **JSON** files, but loaders allow webpack to process other types of files and convert them into valid modules to be added to the dependency graph.  
    4.1. The basic 2 properties in configuration here are: **test** and **use**.  
    4.2. The configuration property **test** allows the identification of file or files to be worked upon. For example: **{ module.rules.test: /\.txt$/ }**   
    4.3. The configuration property **use** indicates which is the right loader to be used for transforming the file(s) apointed. For example: **{ module.rules.use: 'raw-loader' }**
5. **Plugins**: according to the Docs, the plugins allow for a wider ranger of tasks like: buldle optimization, asset management, injection of enviroment variables, etc.   
    5.1. The plugins have to be required() in the webpack's configuration file.
6. **Mode**: here it is possible to enable the webpack's built-in optimizations that correct corresponds to each kind of environment: **developement**, **production**, or **none**.
7. **Browser compatibility**: Webpack supports all browsers that are ES5-compliant.   
    7.1. IE8 or older browsers in general will need to load polyfill to work properly with Webpack. 
8. **Environment**: Webpack 5 runs on Node.js version 10.13.0+.



###### Out of The Plugins for Webpack

Below, there's a list of some very common plugins to be used that are recognized by default by Webpack. And complete lists can be found here:

1. Out of the box plugins: [default-webpack-plugins](https://webpack.js.org/plugins/)
2. Third-party plugins: [awesome-webpack](https://webpack.js.org/awesome-webpack/#webpack-plugins)


- **EnvironmentPlugin**:

    Its a shorthand for using the DefinePlugin on process.env keys
    
- **EslintWebpackPlugin**:

    A ESLint plugin for webpack.
   
- **HtmlWebpackPlugin**:

    Easily create HMTL files to serve your bundles
    
- **IgnorePlugin**:

    Exclude certain modules from bundles.
    
- **LimitChunkCountPlugin**:

    Set min/max limits for chunking to better control chunking.
    
- **MinChunkSizePlugin**:

    Keep chunk size above the specified limit.
    
- **MiniCssExtractPlugin**:

    Creates a CSS file per JS file which requires CSS.
    
- **NoEmitOnErrorsPlugin**:
    Skip the emitting phase when there compilation errors.



#### Webpack's Configuration File

According to the Docs, from the version 4 ahead, Webpack simplified configuration for basic projects excluding the need for a speciffic cofiguration file. So, in its default configuration it assumes:

1. **src/index.js**: entry point.
2. **dist/main.js**: output filename


But, more complex projects will benefit from setting a configuration file. So, at the root level of the project, the **webpack.config.js** should be added:

```
// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};
```

Above, it was used the Node's built-in **path module** and the prefix **__dirname** that is set for the root path (the global path):

`his prevents file path issues between operating systems and allows relative paths to work as expected. See this section for more info on POSIX vs. Windows paths.` [Webpack Docs](https://webpack.js.org/configuration/)


Now, if the **webpack.config.js** is the only configuration for the project, the webpack tool can catch it by default, but in more complex setups a custom file can be passed or even have the configuration splited in multiple files. 

Be as it may, just run the **npx** tool flagged with the webpack configuration file(s):

```
$ npx webpack --config webpack.config.js

```

Finally, to improve the basic workflow for the project, instead of calling webpack by the npx tool from the Node/npm, it can be directly setted in a script in package.json file:

```
{
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
   "private": true,
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    "build": "webpack"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "devDependencies": {
     "webpack": "^5.4.0",
     "webpack-cli": "^4.2.0"
   },
   "dependencies": {
     "lodash": "^4.17.20"
   }
 }
``` 

And then it can be run by the **npm run build** command.






#### Webpack's Asset Management    

According to [Webpack Docs](https://webpack.js.org/guides/asset-management/), the tradition task of asset management with tools like **grunt** and **gulp** would consist of moving the assets from a project development folder like **./src** into a realease one like **./dist** or **./build**.


But, that in the case of Webpack, eventhough the essential task would remain the same, the fact that this tools operates with a current or dynamically bundle of all the dependencies (the dependency graph), Webpack could insert more flexibility into its build by bundling only actual dependencies being requested by each module of the project build.


Plus, its **loader feature** which lets it deal with other kinds of languages different from JS, allow webpack to replicate the same workflow to the assets being managed and, so, to also apply explicity dependencies to other assets, like CSS, for example.


```
// package.json
{
  "name": "webpack1",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "css-loader": "^6.7.1",
    "csv-loader": "^3.0.5",
    "json5": "^2.2.1",
    "style-loader": "^3.3.1",
    "toml": "^3.0.0",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    "xml-loader": "^1.2.1",
    "yamljs": "^0.3.0"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  }
}

// ./src/style.css
@font-face {
    font-family: 'MyFont';
    src: url('./BhuTukaExpandedOne-Regular.ttf') format('ttf');
    font-weight: 400;
}

.hello {
    font-family: 'MyFont', cursive;
    color: red;
    background: url('./icon.png');
}

// ./src/index.js
// Libraries
import _ from 'lodash';

// Assets - style
import './style.css';

// Assets - images
import Icon from './icon.png';

// Assets - data
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

// testing data parsed  by webpack's costumized json configuration
console.log(toml.title); // 'TOML Example'
console.log(toml.owner.name); // 'Tom Preston-Werner'

console.log(yaml.title); // 'YAML Example'
console.log(yaml.owner.name); // 'Tom Preston-Werner'

console.log(json.title); // 'JSON5 Example'
console.log(json.owner.name); // 'Tom Preston-Werner'


function component() {
    const element = document.createElement('div');
    
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');
    
    // Add the image to the existing div
    const myIcon = new Image();
    myIcon.src = Icon;
    
    element.appendChild(myIcon);
    
    console.log(Data);
    console.log(Notes);
    
    return element;
}

document.body.appendChild(component());
``` 


So, in this small project, Webpack Docs is using as dependencies **style-loader** and **css-loader**:


```
$ npm install style-loader css-loader --save-dev
```

And in its configuration file the module loaders chains works in the reverse order, from the last to the first one in the array, acting like mixins where each one applies its transformations passing the results into the chain flow.


``` 
// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: { 
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
};
```

`The above order of loaders should be maintained: 'style-loader' comes first and followed by 'css-loader'. If this convention is not followed, webpack is likely to throw errors.` [Webpack Docs](https://webpack.js.org/guides/asset-management/)


So, the result here is that through the regex definition there to catch CSS assets, each time a import **./styles.css** enters as dependencies for a module, webpack will resolve by applying stringified css into a HTML Style tag inserted into the Head section of the file.


###### Now, Going All in Loading Images

Here, theres a new test case to be added into the webpack module configuration:

```
// webpack.config.js
...
module: {
    rules: [
        { /* test CSS */ },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }
    ]
}
```

So, here also happens a similar process already seem above, because where some import is made within a module, the image cought be the test will be added as asset dependency and some MyImage variable that will be responsible to carry the **final URL** for the respect image, which, in turn, will be loaded into the HTML file as **<img src="./my-image.png" />** by the html-loader, just like in the case of the css-loader inserting stringified CSS into a Style tag, 


###### Going For the Data

As it was seem before, Webpack can use JSON by default, but with the correct loader it can also tackled any other data types available: CSVs, TSVs, XML, etc.

```
$ npm install --save-dev csv-loader xml-loader
```

And the **webpack.config.js** file:

```
module: {
    { /* other assets loaders */ },
    {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
    },
    {
        test: /\.xml$/i,
        use: ['xml-loader'],
    }
}
``` 

Now, it is possible for the JS module to import any of the types of data and get a Data variable containing a parsed JSON for the module consumption.


- **Tip from the Webpack Docs**:
- This can be especially helpful when implementing some sort of data visualization using a tool like d3. Instead of making an ajax request and parsing the data at runtime you can load it into your module during the build process so that the parsed data is ready to go as soon as the module hits the browser.


And, eventhough JSONs are understandible by default, Webpack Docs says that the tool would still allow for the customization of JSON files being consumed nonetheless:

```
$ npm install --save-dev toml yamljs json5
```

And below the configuration for the customization of the JSON parsing fror the modules:


```
// webpack.config.js
module: {
    { /* other assets loaders */ },
    {
    test: /\.toml$/i,
    type: 'json',
    parser: {
        parse: toml.parse,
    },
    },
    {
    test: /\.yaml$/i,
    type: 'json',
    parser: {
        parse: yaml.parse,
    },
    },
    {
    test: /\.json5$/i,
    type: 'json',
    parser: {
        parse: json5.parse,
    },
}
``` 

- **Note**:
- The JSON5 Data Interchange Format (JSON5) is a superset of JSON that aims to alleviate some of the limitations of JSON by expanding its syntax to include some productions from ECMAScript 5.1. This JavaScript library is the official reference implementation for JSON5 parsing and serialization libraries ([JSON5](https://json5.org/)).


###### Wrapping Up: Webpack and Assets

Wrapping up this small project test to try out some of the speciffic configurations from Webpack for a variaty of assest (CSS, Images, Fonts, Different types of data), the [Webpack Docs](https://webpack.js.org/guides/asset-management/) highlights again that tackling tasks with such workflow from Webpack modules and its assets are grouped in a more intuitive away.

So, instead of `relying on a global ./assets directory that contains everything, you can group assets with the code that uses them. For example, a strucutre like this can be useful:` 


```
 |– /components
 |   |–   /my-component
 |   |     |– index.jsx
 |   |     |– index.css
 |   |     |– icon.svg
 |   |     |– img.png
``` 


#### Webpack's Output Management








https://webpack.js.org/guides/output-management/
















#### Webpack Resources: Deeper into the Webpack Operation
- [Manually Bundling an Application](https://www.youtube.com/watch?v=UNMkLHzofQI)
- [Live Coding a Simple Module Bundler](https://www.youtube.com/watch?v=Gc9-7PBqOC8)
- [Detailed Explanation of a Simple Module Bundler](https://github.com/ronami/minipack)



### Linting

/* COMING SOON */

















#### Some Popular JavaScript Style Guides

1. [Airbnb Style Guide](https://github.com/airbnb/javascript):   
    1.1. "Yay semicolons"
2. [Google style guide for JavaScript](https://google.github.io/styleguide/jsguide.html):    
    2.1. "Yay semicolons"
3. [JavaScript Standard Style](https://standardjs.com/rules.html)   
    3.1. "Nay Semicolons"
4. [ESLint](https://eslint.org/)


###### Online resources about Linting:
1. [Javascript Linting: What Developers Need to Know - Mikecavaliere.com](https://mikecavaliere.com/javascript-linting-what-developers-need-to-know/)
2. [How linting and ESLint improve code quality - Hackermoon.com](https://hackernoon.com/how-linting-and-eslint-improve-code-quality-fa83d2469efe)
3. [An Open Letter to JavaScript Leaders Regarding Semicolons - Blog.izs.me](https://blog.izs.me/2010/12/an-open-letter-to-javascript-leaders-regarding/)
4. [Are Semicolons Necessary in JavaScript? - Kyle Robinson Young](https://www.youtube.com/watch?v=gsfbh17Ax9I)





### Further Reading

[Learning JavaScript Design Patterns - Addy Osmani](https://www.patterns.dev/posts/classic-design-patterns/)

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

- [Modern JavaScript Explained For Dinosaurs - Peterxjang.com](https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html)


[]()


[^1]:it-governance-and-management-overview-2022-03-27

[^2]:pmbok-and-project-management-methodologies-2022-03-29

[^3]:itil-service-management-framework-2022-03-30

[^4]:risk-management-overview-2022-04-03

[^5]:information-security-overview-2022-04-05

[^6]:cryptography-steganography-and-cryptanalysis-overview-2022-04-07

[^7]:continuity-plan-and-essentials-for-businesses-overview-2022-04-06

[^8]:open-web-application-project-foundation-owasp-overview-2022-04-18


[^9]:javascript-trick-patterns-part-II-2022-07-28

[^10]:javascript-trick-patterns-the-dom-overview-2022-06-25

[^11]:javascript-object-oriented-programming-pattern-2022-07-24

[^12]:front-end-development-patterns-overview-2022-03-04

[^13]:front-end-architectures-2022-03-05

[^14]:software-architecture-patterns-overview-2022-02-18

[^15]:software-architecture-and-design-2022-02-22



