---
author: 'Marcus Vinicius Richa'
title: 'Front-end Development Patterns'
date: '2022-03-04'
subject: 'web-dev-articles'
description: 'Patterns is a recent practice that is beign introduced to the Front-end development context. One of the first patterns to be appear some years ago is the MVC (Model-View-Controller), a pattern dedicated to improve the software architecture by appling Separation of Concerns (SoC) to the software system.'
---

# Front-end Development Patterns

1. ##### Introduction 
2. ##### Different Front-End Patterns
	2.1. Builder Pattern Architecture    
	2.2. Component Architecture   
	2.3. Dumb-Smart Components Pattern Architecture    
	2.4. Micro Front-ends Architecture    
	2.5. Modular Architecture     
	2.6. Publish-Subscribe Architecture     
	2.7 State Management Architecture    
	2.8. Strategy Pattern Architecture    
	2.9. Unidirectional Architecture
3. ##### JavaScript Patterns
	3.1. Brief History of the JavaScript Language  
	3.2. The Constructor Pattern     
	3.3. The Module Pattern     
	3.4. The Singleton Pattern     
	3.5. The Observer/Publisher Pattern    
	3.6. The Mediator Pattern   
	3.7. The Facade Pattern
4. ##### Further Reading
5. ##### References

### Introduction

The studies and researchs about patterns applied to back-end development is a well stablished area in the Web Development context.

But some authors have been reporting that this same practices are being brought to the Front-end context as well.

One of the first patterns to be introduced some years ago is the MVC (Model-View-Controller), a pattern dedicated to improve the software architecture by appling Separation of Concerns (SoC) to the software system, especilly focused on the context of the presentation, the data handling and the overall logic of the system.

And, as it's asserted by [Ali Zeynalli](https://azeynalli1990.medium.com/software-architecture-patterns-for-front-end-development-9e43e43cdfb3), SoC is one of the main triggers that follow when architecture patters are aplyed.

As a practice `in computer science, Separation of Concerns (SoC) is a design principle for separating a computer program into distinct sections. Each section addresses a separate concern, a set of information that affects the code of a computer program`.
[Wikipedia](https://en.wikipedia.org/wiki/Separation_of_concerns)


And, in general all patterns have their aim to make a more robust and more reliable software, improving in maintainance, in flexibility and in redability, etc, as [Luis Castillo](https://dev.to/lukocastillo/most-common-design-patterns-for-front-end-with-javascript-real-world-examples-2hj3) asserts.



- Other articles about the Patterns:
- `Software Architecture and Design` [^1].
- `Software Architecture Patterns - Overview` [^2].
- `Front-end Architectures` [^3].


### JavaScript Patterns

#### Brief History of the JavaScript Language

Considering that JavaScript is the principal front-end language today, it'd be interesting to understand a little bit about all its own evolution together with the Internet itself.

Firstly, JavaScript was created by the Netscape team to blend its own browser together with the other two languages of the Web, HTML and CSS.

Later, other scripting languages were introduced to support other browsers, until in June of 1997 (Wikipedia)[https://en.wikipedia.org/wiki/ECMAScript#Versions] there was a effort to standardaze a specification to all modern browsers that became known as ECMAScript.

As a brief definition, it could be said that `JavaScript is a lightweight, interpreted, object-oriented programming language with first-class functions most commonly know as a scripting language for web pages` [Marko Misura](https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns).



#### The Constructor Pattern

First, he brings two examples of creational patterns, where one is the use of a **Constructor** function to have properties initialized during an object instantiation. And the other is the use of the **Prototype Inheritance** of JavaScript as a method to incorporate methods in objects without the necessity of it being redefined each time a new instance is created:

(A) **Example from Marko Misura**
```
function Person(name, age, isDeveloper) {
	this.name = name;
	this.age = age;
	this.isDeveloper = isDeveloper || false;
	
	this.writesCode = function() {
		console.log(this.isDeveloper ? 'This person does write code' : 'This person does not write code');
	};
};
```
 
(B) **Example from Marko Misura**
```
function Person(name, age, isDeveloper) {
	this.name = name;
	this.age = age;
	this.isDeveloper = isDeveloper || false;
};

/* Extending the Function Prototype */
Person.prototype.writeCode = function() {
	console.log(this.isDeveloper ? "This person does write code" : 'This person does not write code');
};
```


#### The Module Pattern

Second, the author gives two implementations as example of the use of a Module Pattern to tackle variable context with JavaScript, since this language does not support access modifiers natively:


(A) **Example from Marko Misura**
```
// through the use of a closure we expose an object
// as a public API which manages the private objects array
var collection = (function() {
    // private members
    var objects = [];

    // public members
    return {
        addObject: function(object) {
            objects.push(object);
        },
        removeObject: function(object) {
            var index = objects.indexOf(object);
            if (index >= 0) {
                objects.splice(index, 1);
            }
        },
        getObjects: function() {
            return JSON.parse(JSON.stringify(objects));
        }
    };
})();

collection.addObject("Bob");
collection.addObject("Alice");
collection.addObject("Franck");
// prints ["Bob", "Alice", "Franck"]
console.log(collection.getObjects());
collection.removeObject("Alice");
// prints ["Bob", "Franck"]
console.log(collection.getObjects());
```



`The most useful thing that this pattern introduces is the clear separation of private and public parts of an object, which is a concept very similar to developers coming from a classical object-oriented background. However, not everything is so perfect. When you wish to change the visibility of a member, you need to modify the code wherever you have used this member because of the different nature of accessing public and private parts. Also, methods added to the object after their creation cannot access the private members of the object.`
[Marko Misura](https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns)

(B) **Example from Marko Misura**
```
// we write the entire object logic as private members and
// expose an anonymous object which maps members we wish to reveal
// to their corresponding public members
var namesCollection = (function() {
    // private members
    var objects = [];

    function addObject(object) {
        objects.push(object);
    }

    function removeObject(object) {
        var index = objects.indexOf(object);
        if (index >= 0) {
            objects.splice(index, 1);
        }
    }

    function getObjects() {
        return JSON.parse(JSON.stringify(objects));
    }

    // public members
    return {
        addName: addObject,
        removeName: removeObject,
        getNames: getObjects
    };
})();

namesCollection.addName("Bob");
namesCollection.addName("Alice");
namesCollection.addName("Franck");
// prints ["Bob", "Alice", "Franck"]
console.log(namesCollection.getNames());
namesCollection.removeName("Alice");
// prints ["Bob", "Franck"]
console.log(namesCollection.getNames());
```


In this second implementation the author simplifies the matter of the access modifier based only in the form as he defines what is exposed by the objects return, thus becaming public to be accessed.

Though, as the Marko Misura](https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns) states in his article, this patterns a not a solution for everything, meaning that there is still situations where more approprieated solutions should be applied.



#### The Singleton Pattern

In a third example, the author talks about the use of a Singleton Pattern to solve problems where the application only need one instance of a object, though it can have modified properties, just as the cases where the same object can return different configurations:

(A) **Example from Marko Misura**
```
var singleton = (function() {
    // private singleton value which gets initialized only once
    var config;

    function initializeConfiguration(values){
        this.randomNumber = Math.random();
        values = values || {};
        this.number = values.number || 5;
        this.size = values.size || 10;
    }

    // we export the centralized method for retrieving the singleton value
    return {
        getConfig: function(values) {
            // we initialize the singleton value only once
            if (config === undefined) {
                config = new initializeConfiguration(values);
            }

            // and return the same config value wherever it is asked for
            return config;
        }
    };
})();

var configObject = singleton.getConfig({ "size": 8 });
// prints number: 5, size: 8, randomNumber: someRandomDecimalValue
console.log(configObject);
var configObject1 = singleton.getConfig({ "number": 8 });
// prints number: 5, size: 8, randomNumber: same randomDecimalValue as in first config
console.log(configObject1);
```


And still about the singleton pattern, the author says: `It is important to note that the access point for retrieving the singleton value needs to be only one and very well known. A downside to using this pattern is that it is rather difficult to test`.



#### The Observer/Publisher Pattern

The forth exampe is about the Observer/Publisher Pattern, where two objects, a Subject or Publisher and other objects, the Subscribers can communicate without bring to much dependency to the system.

(A) **Example from Marko Misura**
```
var publisherSubscriber = {};

// we send in a container object which will handle the subscriptions and publishings
(function(container) {
    // the id represents a unique subscription id to a topic
    var id = 0;

    // we subscribe to a specific topic by sending in
    // a callback function to be executed on event firing
    container.subscribe = function(topic, f) {
        if (!(topic in container)) {
          container[topic] = [];
        }

        container[topic].push({
            "id": ++id,
            "callback": f
        });

        return id;
    }

    // each subscription has its own unique ID, which we use
    // to remove a subscriber from a certain topic
    container.unsubscribe = function(topic, id) {
        var subscribers = [];
        for (var subscriber of container[topic]) {
            if (subscriber.id !== id) {
                subscribers.push(subscriber);
            }
        }
        container[topic] = subscribers;
    }

    container.publish = function(topic, data) {
        for (var subscriber of container[topic]) {
            // when executing a callback, it is usually helpful to read
            // the documentation to know which arguments will be
            // passed to our callbacks by the object firing the event
            subscriber.callback(data);
        }
    }

})(publisherSubscriber);

var subscriptionID1 = publisherSubscriber.subscribe("mouseClicked", function(data) {
    console.log("I am Bob's callback function for a mouse clicked event and this is my event data: " + JSON.stringify(data));
});

var subscriptionID2 = publisherSubscriber.subscribe("mouseHovered", function(data) {
    console.log("I am Bob's callback function for a hovered mouse event and this is my event data: " + JSON.stringify(data));
});

var subscriptionID3 = publisherSubscriber.subscribe("mouseClicked", function(data) {
    console.log("I am Alice's callback function for a mouse clicked event and this is my event data: " + JSON.stringify(data));
});

// NOTE: after publishing an event with its data, all of the
// subscribed callbacks will execute and will receive
// a data object from the object firing the event
// there are 3 console.logs executed
publisherSubscriber.publish("mouseClicked", {"data": "data1"});
publisherSubscriber.publish("mouseHovered", {"data": "data2"});

// we unsubscribe from an event by removing the subscription ID
publisherSubscriber.unsubscribe("mouseClicked", subscriptionID3);

// there are 2 console.logs executed
publisherSubscriber.publish("mouseClicked", {"data": "data1"});
publisherSubscriber.publish("mouseHovered", {"data": "data2"});
```



And still about the observer/publisher pattern, the author says: `A downside to using this pattern is difficult testing of various parts of our system. There is no elegant way for us to know whether or not the subscribing parts of the system are behaving as expected`.



#### The Mediator Pattern

His fifth example is about the Mediator Pattern, which is also a pattern for communication of objects, but different from the Publisher type, because the Mediator does control directly the communication, while the Publish only fires the event, and let other modules to deal with other responsabilities for the communication.
 
A interesting user case for this pattern would be to create and maintain a extense and comples on-line form, where the user can be guided through various steps of a more simplified process of interation. 
 
And still about the Mediator pattern, the author says: `A downside would be that now we have introduced a single point of failure into our system, meaning if our mediator fails, the entire system could stop working`.


Another interesting example uses the Command Pattern, which is useful to add layers when connectiong to APIs. 

If the developer choses for performance, perhaps he should avoid here this extra layer, but when it's important to improve the architecture itself of the application to `potentially save a lot of time when we need to modify objects executing the commands`.

(A) **Example from Marko Misura**
```
// the object which knows how to execute the command
var invoker = {
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    }
}

// the object which is used as an abstraction layer when
// executing commands; it represents an interface
// toward the invoker object
var manager = {
    execute: function(name, args) {
        if (name in invoker) {
            return invoker[name].apply(invoker, [].slice.call(arguments, 1));
        }
        return false;
    }
}

// prints 8
console.log(manager.execute("add", 3, 5));
// prints 2
console.log(manager.execute("subtract", 5, 3));
```


#### The Facade Pattern

And, in one last example, Marko Misura talks about the Facade Pattern that has been used successfully is many JavaScript libraries to bring simpler interfaces for DOM manipulation functions: **JQuery**, **Dojo**, **D3**, etc.

As its architecture it brings an abstraction layer between the public functions presented by the interface and the internal implementation of the library.

But, as always the author remembers that neither solotion should be used without due considerance of the tradeoffs envolved in the process of creating the architecture for the app. And in this case there is a matter of confronting the necessity of Performance of the application versus Simplicity of its enhanced interface.


- Finally, [Marko Misura](https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns), bring a great tip for all those who need to deepen their knowledge in patters:
1. `Gang of Four book Design Patterns: Elements of Reusable Object-Oriented Software`   
2. ` Addy Osmani’s Learning JavaScript Design Patterns.`




### Different Front-End Patterns

#### Builder Pattern Architecture

The builder pattern is used when it's needed to create complext objects with different variations and also it's necessary to have flexibility to modify the construction process without impacting the object representation in self.

One use case brought by [Luis Castillo](https://dev.to/lukocastillo/most-common-design-patterns-for-front-end-with-javascript-real-world-examples-2hj3) relates to the consumption of some data API which need to be transformed in order to be understood by a third-party component.



#### Component Architecture

This one is another pattern directly linked  to SoC, that apply this concept in a more granular separation that MVC, for example.

Here, the separation units comes into play as components tackle a separated feature and can be rearranged and reused in case that same feature is needed somewhere else.

Also, this pattern aims the flexibility to scale with the simple addition of new components to tackle some new feature needed by the software.



#### Dumb-Smart Components Architecture

This Dumb-Smart Components pattern is a specification from the more general component based pattern.

So, here in the dumb-smart components concept, the component is divided once more to bring some Separation of Concern (SoC) inside its logic, where the component structure should be divided in its function, and while a resultant component would direct its logic, therefore a smart component, while the other resulting component would be oblivious about the working logic, therefore a dumb component, and only responsible to perform some under the dependency of the smart component.

A use case of this pattern can be seem in the construction of UI for web apps, where some feature is controlled by a smart component, but when it is needed to render something on the screen, a very speciallized component, the dumb component, would receive the correct data to perform specifically only this job.



#### Micro Front-ends Architecture

This Front-End pattern works as a extension of the Micro Services Architecture as a whole, and it aims to tackle the problem of dependencies as the app becomes bigger.

So, based on micro frontends, this concept front-end app works to divide the features as small systems in different use cases 

As use cases `area either have responsible front team members or in big applications separate teams handling end-to-end micro areas`.
[Ali Zeynalli](https://azeynalli1990.medium.com/software-architecture-patterns-for-front-end-development-9e43e43cdfb3)



#### Modular Architecture

The Modular Pattern is one of the most common patterns in the JavaScript environment, and it aims to divide de system into different contexts and scopes called modules, to bring all those advantages of flexibility and maintainance stated above.

As it can be seen, this particular architecture is distinctively present in the modular design of the **ES6 import/export syntax**.



#### Publish-Subscribe Architecture

The Publish-Subscribe pattern (also known as the Broker Architecture) is a concept for controlling messagery on a system, where it has a specialized module to centralized events and to define categories of communiction. 

And, on the other side of the communication system there are the subscribers that enlist themselves to receive the messages that the publisher is constantly sending or updating.

![publisher-subscriber-front-end-patterns](/images/articles/web-development/publisher-subscriber-front-end-patterns.gif)
[Jonathan Siahaan](https://medium.com/easyread/difference-between-pub-sub-pattern-and-observable-pattern-d5ae3d81e6ce)

- read more about the Brooker Architecture in the article `Software Architecture and Design` [^1].


#### State Management Architecture

This architecture appeared in the Front-end environment to deal with the problem of the pulverization of states in a application that has to deal with a complex and intricated system of communication to tranfer the necessary internal states to work the system.

So, it seems that some patterns like the MVC Architecture (and its variations, like MVVM and MVP), and the Component Pattern are very effective to help to separate concerns in the applications, and to create distinct modules or components to tackle different responsabilities need by the system.

But these patters alone, cannot cope with the stress of a growing app where with the increase of the number of parts and their interchanging states to be maintained and updated, and also synchronized at due time, what would usually create a chaotic communication system.

Than this pattern, then, excel in its concept to create strategies to deal with the control of state for the application.


#### Strategy Pattern Architecture

The Strategy Pattern is a achitecture that aims to releave complexities from the code by reusing some same functionality that presents different behavior according to the parameters received.

![strategy-patter-front-end-architecture](/images/articles/web-development/strategy-patter-front-end-architecture.jpg)
[Luis Castillo](https://dev.to/lukocastillo/most-common-design-patterns-for-front-end-with-javascript-real-world-examples-2hj3)

One interesting use case brought by the same author is about the reuse of a navigation feature that may display different data depending on the nature of the authentication the user has: guest, admin, form, etc.

Besides the reuse of some functionality, this patter also brings cleaness to the code, because in its design the developer can to dismiss large chunks of imperative coding, just like a lengthy repetitive if/else statement, by the use of a object literal to pass the necessary dependency.


#### Unidirectional Architecture

The Unidirectional Architecture is a pattern that stablish some order in the flow of the system, where in this case it aims to restrict the flow in an singular direction or at a unidirectional flow.

There are many architectures that thrives making use of this patter as to control the flow of the system, or at least part of the flow.

So, exemples of architectures that uses this unidirectional concept are the Publish-Subscribe (also known the Broker Architecture) and the Flux Architecture, as they use this concept to define and organize flows inside the system.

The Publish-Subscribe pattern defines communication, while the Flux pattern defines not only a system of communication, but also defines a data module for state control.






### Further Reading

1. `Gang of Four book Design Patterns: Elements of Reusable Object-Oriented Software` (Gamma, Helm, Johnson, Vlissides)   
2. `Learning JavaScript Design Patterns.` (Addy Osmani)

### References


[Software Architecture Patterns for Front-End Development - Medium.com](https://azeynalli1990.medium.com/software-architecture-patterns-for-front-end-development-9e43e43cdfb3)

[Most common design patterns for Front-End with JavaScript (Real-world examples) - Dev.to](https://dev.to/lukocastillo/most-common-design-patterns-for-front-end-with-javascript-real-world-examples-2hj3)

[Patterns For JavaScript Frontend Applications - blog.cloudboost.io](https://blog.cloudboost.io/the-state-of-web-applications-3f789a18b810)

[Difference Between Pub-Sub Pattern and Observable Pattern - Medium.com](https://medium.com/easyread/difference-between-pub-sub-pattern-and-observable-pattern-d5ae3d81e6ce)

[The Comprehensive Guide to JavaScript Design Patterns - Toptal.com](https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns)


[^1]:software-architecture-and-design-2022-02-22

[^2]:software-architecture-patterns-overview-2022-02-18

[^3]:front-end-architectures-2022-03-05
