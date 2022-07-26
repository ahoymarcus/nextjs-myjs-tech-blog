---
author: 'Marcus Vinicius Richa'
title: 'Javascript Object Oriented Programming (OOP) Pattern'
date: '2022-07-24'
subject: 'web-dev-articles'
description: 'This article focuses at Object Oritented Programming (OOP), specially at the patterns and principles that are more inline with JavaScript development.'
---

# Javascript Object Oriented Programming (OOP) Pattern

1. ##### Introduction
2. ##### Object Oriented Programming - OOP
    2.1. JavaScript Objects    
	2.2. JavaScript Objects are Mutable   
	2.3. Inheritance and the Prototype Chain   
	2.4. The Object.create Method    
	2.5. Performance Issues with the Prototype Chain   
	2.6. JavaScript Class Implementation
3. ##### Different Kinds of Prototypal Inheritance
4. #####
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
- `javascript-trick-patterns-overview-2022-05-26` [^9]    
- `javascript-trick-patterns-the-dom-overview-2022-06-25` [^10]    
- `Front-end Development Patterns` [^11]   
- `Front-end Architectures` [^12]   
- `Software Architecture Patterns - Overview` [^13]   
- `Software Architecture and Design` [^14]



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


Another method to reach and test the objects inheritance: **Constructor.isPrototypeOf(object)**

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


### Different Kinds of Prototypal Inheritance





https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9















###### Other resources about Prototype and OOP in JavaScript:
- [3 Different Kinds of Prototypal Inheritance: ES6+ Edition - Medium.com](https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9)



















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

[JavaScript Scoping and Hoisting - Adequatelygood.com](https://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)

[Gentle Explanation of "this" in JavaScript - Dimitripavlutin.com](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)

[]()


### References

[Objects - Javascript.info](https://javascript.info/object)

[JavaScript Prototype in Plain Language - JavaScript Is Sexy](https://web.archive.org/web/20200513181548/https://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/)

[Prototype inheritance - Javascript.info](https://javascript.info/prototype-inheritance)

[]()


[^1]:it-governance-and-management-overview-2022-03-27

[^2]:pmbok-and-project-management-methodologies-2022-03-29

[^3]:itil-service-management-framework-2022-03-30

[^4]:risk-management-overview-2022-04-03

[^5]:information-security-overview-2022-04-05

[^6]:cryptography-steganography-and-cryptanalysis-overview-2022-04-07

[^7]:continuity-plan-and-essentials-for-businesses-overview-2022-04-06

[^8]:open-web-application-project-foundation-owasp-overview-2022-04-18


[^9]:javascript-trick-patterns-overview-2022-05-26

[^10]:javascript-trick-patterns-the-dom-overview-2022-06-25

[^11]:front-end-development-patterns-overview-2022-03-04

[^12]:front-end-architectures-2022-03-05

[^13]:software-architecture-patterns-overview-2022-02-18

[^14]:software-architecture-and-design-2022-02-22







