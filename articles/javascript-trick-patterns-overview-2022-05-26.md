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
3. ##### Object Oriented Programming - OOP
    3.1. JavaScript Objects    
	3.2. JavaScript Objects are Mutable   
	3.3. Inheritance and the Prototype Chain   
	3.4. The Object.create Method    
	3.5. Performance Issues with the Prototype Chain   
	3.6. JavaScript Class Implementation
4. ##### The 'This' Word
	4.1. The Global Context   
	4.2. The Function Scope   
	4.3. Class Context    
	4.4. As an Object Method    
	4.5. This on the Objects Prototype Chain or at a Getter or Setter    
	4.6. As a Constructor    
	4.7. The call() and the apply() Methods (Indirect Invocation)
	4.8. The bind() Method
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



###### Using the Constructor Function

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


###### Testing Property Existence and the 'in' Opertator

According to [JavaScript.info](https://javascript.info/object), a notable feature of objects in JavaScript, when compared to many other languages, is the fact that here it is possible to access any property, and even when the property does not exist there will be no error!

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


But there is a important distinction to be made while looping with For...in, that is the fact that it also iterates over the inherited properties of the object, and to distinguish one from the other there is the method **obj.hasOwnProperty(Key)**:

```
const animal = {
    name: 'animal',
    eats: true,
};

const rabbit = {
    name: 'rabbit',
    jumps: true,
    __proto__: animal,
};

const counters = {
    own: 0,
    inherited: 0,
};


for (let prop in rabbit) {
    let isOwnProperties = rabbit.hasOwnProperty(prop);
    
    if (isOwnProperties) {
        if (counters.own === 0) {
            console.log(`${rabbit.name} own propertie:`);
        }
        
        counters.own++;
        
        console.log(`${counters.own}. ${prop}`);
    } else {
        if (counters.inherited === 0) {
            console.log(`${rabbit.name} inherited propertie:`);
        }
        
        counters.inherited++;
    
        console.log(`${counters.inherited}. ${prop}`);
    }
}

// Output
// rabbit own property:
// 1. name
// 2. jumps
// rabbit inherited property:
// 1. eats
```

Finally, there is a important point to be made here in this exercise related to the prototype chain: **Why the inherited properties/methods from Object, like the hasOwnProperty were not listed in the output?**


The answer, according to [Prototype inheritance - Javascript.info](https://javascript.info/prototype-inheritance), is because they are flaged as **enumerabe: false** at the root Object:

`The answer is simple: it’s not enumerable. Just like all other properties of Object.prototype, it has enumerable:false flag. And for..in only lists enumerable properties. That’s why it and the rest of the Object.prototype properties are not listed.`


- **Note**:    
- There is a speciffic section later in this article about Obejct Oritented JavaScript that describes all this process of inheritance and prototype chain.


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



#### Inheritance and the Prototype Chain

As a article from MDN Docs, [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain), says JavaScript creates some confusion for developers experienced with class-based languages like Java or C++, because of its peculiar structure:
1. **dynamic**
2. **Absense of static types**
3. **Prototypical inheritance**


As the MDN article states, **when it comes to inheritance**, JavaScript has only one and the same construct, the objects itself. And **these objects have a private property which holds a link to another object called its prototype**. So, this creates a chain with each object and its prototype reference, until a object with a null as its prototype. And since by definition **null has no prototype**, it acts like a final link in the prototype chain - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain):

```
When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.
```

And another interesting point highlighted by the MDN's article is the fact besides the confusion caused by this distinction of the JavaScript language, there a general misconception that this JavaScript structure would be a kind of weakness by itself.

But, in fact, the article witness that the prototypical inheritance model, by itself, is more powerful than the classic model, among others reasons, because it can easily builtd a classic model of inheritance on top of the prototypical model, just as it was really implemented by JavaScript -[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain):


`While this confusion is often considered to be one of JavaScript's weaknesses, the prototypical inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypical model — which is how classes are implemented.`



- **A Note from the MDN Article**:   
- There is also a difference caused by the use of **prototypes**, that is the fact they can be mutated at any member of the prototypical chain or **even swap out the prototype at runtime**, so all tihis prevents the concept of **static dispatiching** in the JavaScript language, but that is present in some languages.
- [Static dispatch - Wikipedia](https://en.wikipedia.org/wiki/Static_dispatch)
- [Inheritance and the prototype chain - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)


###### More into the Prototype Property

The site Javascript.info says in its article, [Prototypal inheritance](https://javascript.info/prototype-inheritance) that every object in JavaScript has this hidden property called **[[Prototype]]**, and that this property is either _null_ or it _references another object_. And also according the site this object is **'a prototype'**. 


Though [[Prototype]] is a hidden property, it can be reached and accessed by a pseudo property that is largely implemented, called **_proto__**, and the site also points 2 limitations:
1. **The references cannot go in circles**: JavaScript will throw an error if we try to assign `_proto_` in a circle.
2. The value of `_proto_` can be either an object or _null_. Other types are ignored.


And, here, the fact that a circular path of assignments is forbidden is important, because in JavaScript the inheritance is in some way linear, having the root **Object** as the creator of all other objects and the one responsible by everything that is inherited by default.


And, below there are some very important notes brought from the article [Prototype inheritance - Javascript.info](https://javascript.info/prototype-inheritance):
1. `__proto__` is a historical getter/setter for [[Prototype]]    
    1.1. It’s a common mistake of novice developers not to know the difference between these two.   
    1.2. Please note that __proto__ is not the same as the internal [[Prototype]] property. It’s a getter/setter for [[Prototype]]. Later we’ll see situations where it matters, for now let’s just keep it in mind, as we build our understanding of JavaScript language.
2. The `__proto__` property is a bit outdated. It exists for historical reasons, modern JavaScript suggests that we should use Object.getPrototypeOf/Object.setPrototypeOf functions instead that get/set the prototype. We’ll also cover these functions later.
3. By the specification, __proto__ must only be supported by browsers. In fact though, all environments including server-side support __proto__, so we’re quite safe using it.



**And the prototype property is used primarily for inheritance; so it is possible to add methods and properties to it and make them available to instances of the object/function**. [JavaScript Prototype in Plain Language - JavaScript Is Sexy](https://web.archive.org/web/20200513181548/https://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/)


And a article from the site JavaScript Is Sexy, [JavaScript Prototype in Plain Language](https://web.archive.org/web/20200513181548/https://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/), goes on in a very similar way highlighting that this feature related to the Prototype concept of JavaScript is that the prototype itself would serve as a attribute to link a object to its **'parent'** or the object it descends from and that have inherited from.

**So, the prototype attribute that links a object to its parent would be Object.prototype**, which is just the prototype attribute of its parent:


`The second concept with prototype in JavaScript is the prototype attribute. Think of the prototype attribute as a characteristic of the object; this characteristic tells us the object’s “parent”. In simple terms: An object’s prototype attribute points to the object’s “parent”—the object it inherited its properties from. The prototype attribute is normally referred to as the prototype object, and it is set automatically when you create a new object.To expound on this: Every object inherits properties from some other object, and it is this other object that is the object’s prototype attribute or “parent.” (You can think of the prototype attribute as the lineage or the parent).` [JavaScript Is Sexy](https://web.archive.org/web/20200513181548/https://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/)



###### And Also Presenting the Constructor Property

Well, the **constructor** is a function used for initializing objects through the use of the **new** word. Also, by standard it is defined that a constructor function should be name with a capital letter, to distinguishes it from ordinary functions.


And, what is also important here is the fact that each object created inherit a constructor property, which simply **points to the constructor of the object which created and passed properties/methods through inheritance**.


As the article from JavaScript Is Sexy shows in this simple execise is that using the objects constructor property, the object can find its parent, which in this case is the root **Object**:

```
const myObj = new Object();

console.log(myObj.constructor); // object()
```


Finally, not only the constructor property points to the object's parent, but it also servers a important feature, that is **to pass all the properties/methods present at it to the instances that it created by the use of the 'new' word, making these properties/methods the content of the object child prototype property**


- **Note from the article**:  
- The [JavaScript Prototype in Plain Language - JavaScript Is Sexy](https://web.archive.org/web/20200513181548/https://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/) article says that ECAMScript 5 brought a method, **Object.craete()**, that allows to set a new prototype property to an object.



###### The 'This' Word is Another Very Important Part in These Discussions

Together with the prototype, the **this** word works to bring flexibility to the objected oriented programming, but since it brings a complex concept, there is a whole chapter dedicated to describe  how it works, but here is interesting to mention advance just some simple points from the article [Prototype inheritance - Javascript.info](https://javascript.info/prototype-inheritance):

`The answer is simple: this is not affected by prototypes at all. No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot. [...] As a result, methods are shared, but the object state is not.`


1. The **'this'** word is not affected by the prototype, as it works in the object from which instance the call is made.  
    1.1. And in here, as the quotation says, the object responsible by the call is **always the object before the dot** notation.
2. **'As a result methods are shared, but the object state is not'**, but each object retains its own data!!!



###### Working the Inheritance with the Prototype Chain

But as the MDN's article also states, eventhough the class structure is now a widely adopted new paradigm in JavaScript, its is not a new inheritance pattern for the language, since the class system from JavaScript only abstracts most of the prototypical mechanism away, having the same traditional concept working 'under the hood'!


So, in a nut shell, as it is explained by the article, when a property from a object is reffered to:
1. JavaScript objects are **like dynamic "bags" (referred to as own properties)**.
2. JavaScript objects also have a link to a prototype object.
3. In a access to a property of the object, the property will be sought both on the object itself and on the prototype of the object, in that chain, until a match is found or a null point is reached in the prototype chain.


`This prototype chain mechanism is essentially the same concept we have discussed above with the prototype-based inheritance, except we are now focusing specifically on how JavaScript accesses object properties and methods via the prototype object.` [JavaScript Prototype in Plain Language - JavaScript Is Sexy](https://web.archive.org/web/20200513181548/https://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/)


Notice also, that in terms of a prototypical chain, the root Object it is always first object from it all other objects descend upon and that from it is inherited by default properties/methods from its Object.prototype like:

1. **constructor**
2. **hasOwnproperty()**
3. **isPrototypeOf()**
4. **propertyIsEnumerable()**
5. **toLocaleString()**
6. **toString()**
7. **valueOf()**



- **Note**:   
- There is a importante note about how the **prototype of someObject** is to be accessed, because traditionally it would be by a **__proto__** structure, which is a non-standard de-fact implemented by many JavaScript engines.   
- And with the ECMAScript 2015 the access was made as a standard using the **accessors methods**: Object.getPrototypeOf() and Object.setPrototypeOf().
- There is also a syntax of **{ __proto__: ... }** that according to the article is not deprecated.
- [Inheritance and the prototype chain - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)


Revisiting the traditional syntax with the **__proto__** structure, there could be a literal object like:

```
const obj = { 
    a: 1, 
    b: 2,
    __proto__: {
        b: 3,
        c: 4,
    },
}; 
```


In the above example, the object **obj** has **a** and **b** as its own properties, the prototype with the prototypical properties: `since [[Prototype]] is just an "internal property" of the object` [Inheritance and the prototype chain - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).


So, while trying to access a property, as it was said earlier the engine looks for it in the object own properties first, and if it does not found the property in there, then it heads to the prototype itself, until it reaches a null:


```
// find the property in the own object
console.log(o.a); // 1
console.log(o.b); // 2

// searching the prototype of the object
console.log(o.c); // 4
console.log(o.d); // undefined
```

As the **o.d** was not found in the own object, it was searched at the o.[[Prototype]] as well but not found. Then, it is also searched in the o.[[Prototype]][[Prototype]], but found only the root inheritance from **Object.prototype**, which by default its not existant or null, and the search is finalised.


Also, in the above example, it can be seen that while searching for the propterty **o.b**, the engine only found the own property with the value of **2**, as the o[[Prototype]].b, though it is there, it is never visited. And this concept is called **Property Shadowing**.


See also, that as the prototype itself was said to be just a object itself, the example could be extended with the nesting of many prototype objects: 

```
const o = {
    a: 1,
    b: 2,
    __proto__: {
        b: 3,
        c: 4,
        __proto__: {
            d: 5,
        },
    },
};

// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null
console.log(o.d); // 5
``` 


###### Inheriting "Methods" in JavaScript

As JavaScript does not have the classical structure of classes, there is also no "methods" in JavaScript according to the classical definition of them. Here, in JavaScript, a **function** can be added to objects in the form of properties, and be inherited just as any other property through the prototype chain, including the same concept of **property shadowing** seen above, what in this case could be thought as a kind of "method overriding".


And things get interesting with the use of the **this** word, because as it can be seen in latter in this article, in the section **As an Object Method** relating to the context of a object, the **this** word is tied to the object that makes the call:

```
const parent = {
    value: 2,
    method: function() {
        return this.value + 1;
    }
};

console.log(parent.method()); // 3


// child object is inheriting the parent object
const child = {
    __proto__: parent,
};

console.log(child.methdo()); // 3

// But, when the child object has its value, that property shadowing kicks in
child.value = 4;

console.log(child.method()); // 5
```


###### Using Constructors in JavaScript

Since JavaScript has its own prototype structure, and also has set the classic class system, the constructor can be written in 2 different syntax, but as a whole **the use of constructors allow the reuse of a set of properties that should be present along every instance of a object**.


So, instead of writting any of these repetitive codes:

```
const boxes = [
    { value: 1, getValue() { return this.value; } },
    { value: 2, getValue() { return this.value; } },
    { value: 3, getValue() { return this.value; } },
];


// Or
const boxPrototype = {
    getValue() { return this.value; },
};

const boxes2 = [
    { value: 1, __proto__: boxPrototype },
    { value: 2, __proto__: boxPrototype },
    { value: 3, __proto__: boxPrototype },
];
```

There could be used a **constructor function**, which would automatically sets the [[Prototype]] for every new object manufactured:

```
function Box(value) {
    this.value = value;
}

Box.prototype.getValue = function() {
    return this.value;
};


// Use the word 'new'
const boxes = [
    new Box(1),
    new Box(2),
    new Box(3),
];
```

`We say that new Box(1) is an instance created from the Box constructor function. Box.prototype is not much different from the boxPrototype object we created previously — it's just a plain object. Every instance created from a constructor function will automatically have the constructor's prototype property as its [[Prototype]] — that is, Object.getPrototypeOf(new Box()) === Box.prototype. Constructor.prototype by default has one own property: constructor, which references the constructor function itself — that is, Box.prototype.constructor === Box. This allows one to access the original constructor from any instance.` [Inheritance and the prototype chain - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)


Finally, there is also the class syntatic sugar:

```
class Box {
    constructor(value) {
        this.value = value;
    }
    
    // Methods are created on Box.prototype
    getVaue() {
        return this.value;
    }
}
```

- **Note from the MDN article**: It is bad practice to re-assign ther **Constructor.prototype** like (Constructor.prototype = ...) for 2 reasons -  [Inheritance and the prototype chain - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain):   
- The [[Prototype]] of instances created before the reassignment is now referencing a different object from the [[Prototype]] of instances created after the reassignment — mutating one's [[Prototype]] no longer mutates the other.   
- Unless you manually re-set the constructor property, the constructor function can no longer be traced from instance.constructor, which may break user expectation. Some built-in operations will read the constructor property as well, and if it is not set, they may not work as expected.  
- Constructor.prototype is only useful when constructing instances. It has nothing to do with Constructor.[[Prototype]], which is the constructor function's own prototype, which is Function.prototype — that is, Object.getPrototypeOf(Constructor) === Function.prototype.



- **Implicit constructors of Literals**:

As it has been seeing above, the presence of the [[Prototype]] is a natural concept of the JavaScript language, so even in literal syntax where the prototype is not explicity shown, still there will be found the a implicit [[Prototype]].


Interesting, that since **arrays** and **regex** are objects in JavaScript (everything except primitives are objects), these 2 also have their Array.prototype or RegExp.prototype.


- **Another point into the use of JavaScript Constructors**:

Interesting to notice that on using the **constructor function**, the **Constructor.prototype** will become the [[Prototype]] for the new instances, just as including it in the new instance prototype object.


And also says the MDN article that by default the **Constructor.prototype** is a plain object, that is:

```
Object.getPrototypeOf(Constructor.prototype) === Object.prototype
```

And it finishes the chain with the root Object that in itself. But that using the method **Object.setPrototypeOf()** there can be created another link in the inheritance chain:

```
function Base() {} 
// obj ---> Base.prototype ---> Object.prototype ---> null


// create a Devrived class
function Derived() {}


// create a link in the inheritance chain
Object.setPrototyOf(
    Derived.prototype,
    Base.prototype,
);

const obj = new Derived(); 
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

And in the class systax, it would be equivalent to using the **extends** word:

```
class Base {}
class Derived extends Base {}

const obj = new Derived();
// obj ---> Derive.prototype ---> Base.prototype ---> Object.prototype ---> null
``` 

-- **Important note**:  
- Be careful while using **Object.create** to create a inheritance link, because the method re-assigns the prototype property; what is a **bad practice**.


###### Exercise on Function's Prototype

Try this exercise on the browser console, and see how adding a property to some func.prototype passes this same property through the inheritance chain:

```
function doSomething() {}

// add to the function prototype
doSomething.prototype.foo = 'bar';


// instanciate a new objet and add a own property to it
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = 'some value';

console.log(doSomeInstancing);

// Output
{
  prop: "some value",
  [[Prototype]]: {
    foo: "bar",
    constructor: ƒ doSomething(),
    [[Prototype]]: {
      constructor: ƒ Object(),
      hasOwnProperty: ƒ hasOwnProperty(),
      isPrototypeOf: ƒ isPrototypeOf(),
      propertyIsEnumerable: ƒ propertyIsEnumerable(),
      toLocaleString: ƒ toLocaleString(),
      toString: ƒ toString(),
      valueOf: ƒ valueOf()
    }
  }
}
```

But, going a little deeper with the exercise above, a peculiar result is cought, because if the function **doSomething.foo** is searched, it results undefined. But it was saw before with plain objects that after searching the objects own properties, the JavaScript engine would pass to its [[Prototype]] in the prototype chain:

```
doSomeInstancing.prop:                                 some value
doSomeInstancing.foo:                                   bar
doSomething.prop:                                          undefined
doSomething.foo:                                            undefined
doSomething.prototype.prop:                         undefined
doSomething.prototype.foo:                           bar
``` 


###### Resume: see a resume of each of the methods to create and mutating the prototype chains in the end of the MDN Docs: [Different ways of creating and mutating prototype chains](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#different_ways_of_creating_and_mutating_prototype_chains).



###### Other resources about the JavaScript Prototype and the This Word:

1. [JavaScript Prototype in Plain Language - JavaScript Is Sexy](https://web.archive.org/web/20200513181548/https://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/)
2. [Prototype inheritance - JavaScript.info](https://javascript.info/prototype-inheritance)
3. [Gentle Explanation of "this" in JavaScript - Dmitripavlutin.com](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)



#### The Object.create Method

The Object.craete is method root Object that is inherited and has the task of implementing inheritance in JavaScript without the need to access directly either the **prototype** property or the **__proto__** pseud property.


It receives a especified prototype and return a new object. It has the syntax: **Object.create(prototypeObject[, propertyObject]);**

```
const myObj = Object.create(Object.prototype);

console.dir(myObj);
```


And one interesting JavaScript’s point to make is about the implicit creating of the prototype while creating objects with object literals.

Here, also the engine uses Object.create and pass the inheritance from Object.prototype nevertheless.

```
const myObjLiteral = {};

console.log(myObjLiteral);
```

Finally, with Object.create it is possible to set a empty prototype like this:

```
const myObjWithNoProt = Object.create(null);

console.log(myObjWithNoProt);
```


In terms of practical functions, Object.crate can also be used to:
1. **Create a new object**: but differently from a regular constructor function it will not set the initial properties for the new object.
2. **Basic inheritance extending objects constructor**: like a proto class operating syntax extending the basic properties from a base object to another object.   
	2.1. But, according to the TechSith class on Youtube, in the case of Object.create against the class extended feature, there is only a point reference to the original prototype, and not a real copy of properties and methods ().



- **Exceptions for the Object.create method**:
1. If the optinal propertiesObject parameter that should be created along the inheritance is not null, the method will throw a TypeError Exception.
2. It will also throws a TypeError exception if the propertiesObject parameter is a non primitive object.


```
function Fruit(name) {
	this.name = `${this.name} - fruit`;
	this.season = 'summer season good';
}

function Apple(name) {
	this.name = name;
	Fruit.call(this, this.name);
}

Apple.prototype = Object.create(Fruit.prototype);

const apple = new Apple('apple');
console.log(apple.name);
console.log(apple.season);

const redApple = new Apple('Red Apple');
console.log(redApple.name);
console.log(redApple.season); 

// test inheritance
console.log(redApple instanceof Apple);
console.log(apple instanceof Apple);

console.log(apple instanceof Fruit);
console.log(redApple instanceof Object);
```


Another method to reach a objects inheritance is:

```
console.log(Apple.prototype.isPrototypeOf(apple));
console.log(Fruit.prototype.isPrototypeOf(apple));
console.dir(Object.prototype.isPrototypeOf(apple));
```

Just a little bit of javaScript sorcery with FunFunFunction from Youtube:

Here, the online teacher tries to recreate just the primary function of **Object.create()** with the custom function **objectCreate()**:

```
// Re-write Object.create()
function objectCreate(proto) {
	const obj = {};
	Object.setPrototypeOf(obj, proto);
	
	return obj;
}

function Fruit(name) {
	this.name = `${this.name} - fruit`;
	this.season = 'summer season good';
}

function Apple(name) {
	this.name = name;
	Fruit.call(this, this.name);
}

Apple.prototype = objectCreate(Fruit.prototype);

const apple = new Apple('apple');
console.log(apple.name);
console.log(apple.season);

const redApple = new Apple('Red Apple');
console.log(redApple.name);
console.log(redApple.season); 

// test inheritance
console.log(redApple instanceof Apple);
console.log(apple instanceof Apple);

console.log(apple instanceof Fruit);
console.log(redApple instanceof Object);
```

And running the same old code, now using objectCreate, it is possible to see that it recreates the basic inheritance feature!


There is also a case to be made here that the use of **setPrototypeOf()** should not be set directly in real applications because it disrupts the performance of the app by messing with the performance tunings done by the engine (see just below some resources refereces for this section, specially about **Douglas Crockford** works).


```
const Fruit = {
	init: function(name) {
		this.name = name;
		this.season = 'summer season good';
		
		return this;
	},
	info: function() {
		console.log(`${this.name} - fruit - Just a nice ${this.season}`);
	},
};

const apple = 
	Object.create(Fruit).init('apple');
apple.info();

const orange = 
	Object.create(Fruit).init('orange');
orange.info();
```


- **Other resources about Object.create**:
- [Object.create Method ( Object Oriented Programming in JavaScript Series - Part 3)](https://www.youtube.com/watch?v=MACDGu96wrA)
- [Object.create - Object Creation in JavaScript P6 - FunFunFunction #57](https://www.youtube.com/watch?v=CDFN1VatiJA)
- [How JavaScript Works - Douglas Crockford](https://www.crockford.com/books.html)
- [JavaScript: The Good Parts: The Good Parts - Douglas Crockford](https://www.crockford.com/books.html)
- [Even Faster Web Sites: Performance Best Practices for Web Developers - Douglas Crockford](https://www.crockford.com/books.html)























#### Performance Issues with the Prototype Chain

See that there is a overhead caused by the lookup for the properties across the prototype chain, and that **the access of nonexistent properties will always have to traverse the full prototype chain**.


Another potential complication is the fact that while iterating over an object properties, **every enumerable property that is on the prototype chain will be enumerated**, so to check for properties that are defined on the object itself (that is, not through inheritance), use the methods:
1. **hasOwnProperty**
2. **Object.hasOwn**


`All objects, except those with null as [[Prototype]], inherit hasOwnProperty from Object.prototype — unless it has been shadowed further down the prototype chain. [...] It is essential to understand the prototypal inheritance model before writing complex code that makes use of it. Also, be aware of the length of the prototype chains in your code and break them up if necessary to avoid possible performance problems. Further, the native prototypes should never be extended unless it is for the sake of compatibility with newer JavaScript features.` [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)



#### JavaScript Class Implementation

The class syntax is a **syntactical sugar** from JavaScript ES6 for constructor functions, which try to bring here that same fell of class modeling from the more tradition OOP languages.


So, it workd using the **class** key word, that has a constructor property that initializes the new object with all the default necessary for each speciffic new instance, which in reality will distinguish the unique data structure for each of these instances.

On the other hand, everything writen in the body of the class function will be added to the prototype. Meaning that the properties/methods here will only be a general point memo reference for all the instances of the class to be shared just in the same way.


Another feature of the class syntax is the word **extend** that deals and insert the prototypical chain from JavaScript in this new syntax.


Finally, there is the **super()** function that is used to allow the instance access the parent class' constructor to pass the unique property value for this instance itself.


- **Example from [JavaScript Visualized: Prototypal Inheritance - Lydia Hallie](https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co)**:

```
class Dog {
	constructor(name) {
		this.name = name;
	}
	
	bark() {
		return 'Woof!';
	}
}


class Chihuahua extends Dog {
	constructor(name) {
		super(name);
	}
	
	smallBark() {
		return 'Small woof!';
	}
}

const myPet = new Chihuahua('Max');
myPet.smallBark();
```



### The This Word

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


