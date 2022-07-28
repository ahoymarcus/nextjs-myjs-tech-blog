---
author: 'Marcus Vinicius Richa'
title: 'JavaScript Trick Patterns for the DOM - Overview'
date: '2022-06-25'
subject: 'web-dev-articles'
description: 'This article brings an overview of some trick features related to the DOM page and to the tasks that the JavaScript language takes part together with HTML and CSS to create and manage a web page. So, DOM events, event capture, event propagation, styling forms, security and accessiblity are some of the points seem in this article.'
---

# JavaScript Trick Patterns for the DOM - Overview

1. ##### Introduction  
2. ##### The DOM
    2.1. DOM Functions and Helpers    
    2.2. Handling Events    
    2.3. Event Capture, Propagation and Bubbling    
    2.4. Dealing with the Difficulties in Styling HTML Forms    
    2.5. CSS UI Pseudo-Classes for Forms Stylization     
    2.6. HTML Forms Validation   
    2.7. Validating HTML Forms Using JavaScript
3. ##### Security and Privacy at the Frontend
    3.1. Forms
4. ##### Accessibility
    4.1. Forms
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
- `JavaScript Trick Patterns - Overview`[^9]   
- `Javascript Object Oriented Programming (OOP) Pattern` [^10]   
- `Front-end Development Patterns` [^11]   
- `Front-end Architectures` [^12]   
- `Software Architecture Patterns - Overview` [^13]   
- `Software Architecture and Design` [^14]




### The DOM



#### DOM Functions and Helpers

Some of the wildely used functions and helpers in Vanilla JS:

1. **Selecting**:  
    1.1. getElementById()   
    1.2. getElementsByClassName()   
    1.3. getElementsByTagName()   
    1.4 querySelector() and querySelectorAll()
2. **Traversing**: 
    2.1. element.matches(): used to test if a node matches some speciffic or some combination of CSS selectors.    
    2.2.  element.parentNode: allows to retrieve a parent node from a especiffic node.     
    2.3. element.childNodes: it returns the nodes as a whole, there is, element nodes, text nodes, and comment nodes.    
    2.4 element.fistChild:    
    2.5 element.lastChild    
    2.6. element.previousSibling: this one returns any kind of previous node (element, text or comment)   
    2.7. element.nextSibling: this one returns any kind of next node (element, text or comment)    
    2.8. element.previousElementSibling: this one returns only previous element node.    
    2.9. element.nextElementSibling: this one returns only next node.    
    2.10. element.closest(): this method searchs for elements which matches a specified CSS selector up to the DOM tree.
3. **Manipulating**:     
    3.1. createElement()    
    3.2. createTextNode()   
    3.3. replaceChild()    
    3.4. insertBefore()
4. **Classes and Attributes**:    
    4.1. element.classList.addClass()    
    4.2. element.classList.removeClass()    
    4.3. element.classList.toggle()    
    4.4. element.setAttribute()   
    4.5. element.getAttribute()   
    4.6. element.removeAttribute()
5. **Style**:    
    5.1. The **style** method allows both to add a single styling property to some node element or to define a 'cssText' with several CSS rules to be updated at the same time.   
    5.2. Here, the same **element.setAttribute()** used to create classes and attributes can be used to style using as 1st parameter the 'style' attribute.



###### Selecting DOM Methods

- **getElementById()**
This method returns the first element with the specified ID (though IDs should be unique), and it returns null if the element does not exist:

```
<h1 id="demo">The getElementById() Method</h1>

<script>
    document.getElementById('demo').style.color = 'red';
</script>
``` 


- **getElementsByClassName() and getElementsByTagName()**
These methods return an HTMLCollection which represents a live representation of the DOM. The collection represents a list of the classes names or a list of the name of the elements, all those which are retrieved from a node point, as a tree search, and its descendents.

- Using getElementsByClassName():
```
<p>Change the background color of the first element with the classes "example" and "color":</p>

<div class="example">
  <p>This is a paragraph.</p>
</div>
<br>
<div class="example color">
  <p>This is a paragraph.</p>
</div>
<br>
<div class="example color">
  <p>This is a paragraph.</p>
</div>

<script>
    const collection = document.getElementsbyClassName('example color');
    
    collection[0].style.backgroundColor = red;
</script>
``` 

- And using getElementsByTagName():
```
<p>This is a p element</p>

<p>This is also a p element.</p>

<p>This is also a p element.
Change the background color of all p elements in this document:</p>

<script>
    const collection = document.getElementsByTagName('p');
    
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.backgrondColor = 'red';~
    }
</script>
``` 


- **The querySelector() and querySelectorAll() Methods**
These methods allow the **search by CSS selectors**, like id, class, tag and also more complex searchs:


- Selects all divs that have the class 'foo'
```
const match1 = document.querySelector('div.foo');
``` 

- Selects all divs tags + link tags with the class 'info'
```
const matches2 = document.querySeletorAll('div, a.info');
``` 

- Selects all the input tags of the text type
```
const matches3 = document.querySelectorAll("input[type='text']");
``` 


The **querySelectorAll() returns a NodeList**, which is not the same as an array, nor it has the same methods found in the array class. But it has some owns methods and also the 'length' propert:


```
const nodes = document.querySelectorAll('div');

nodes.forEach(div => div.addEventListener('click', callback));
``` 

Or it can be matched or accessed using indexes:

```
const node = document.querySelectorAll('div')[0];
``` 

One interesting point from the [MDN Docs](https://developer.mozilla.org/pt-BR/docs/Web/API/NodeList) is that using index to access a node would have a return **undefined** when the index is invalid.

So, a different way to access would be with the method NodeList.item(), which would return **null** in the case of a invalid index:

```
for (let i = 0; i < myNodeList.length; i++) {
    // Though, the MDN docs say that calling myNodeList.item(i) isn't necessary in JavaScript
    let item = myNodeList.item(i); 
}
``` 

And the NodeList can also be converted to an array:

1. **With the Array.from() method**:   
    1.1. const nodesArray = Array.from(nodeList);
2. **With the ES6 Spread syntax**:   
    2.1. const nodesArray = [...nodeList];


###### querySelectorAll() versus getElementsByClassName() or getElementsByTagName() versus childNodes property

There is a important distinction to be made here, because those methods and the property returns are quite different indeed - [The Difference Between an HTMLCollection and a NodeList](https://www.w3schools.com/jsref/met_document_queryselectorall.asp):

1. **querySelectorAll()**: it returns a **static nodeList**.   
    1.1. This means that changes in the DOM don't reflect in this nodeList reference.   
    1.2. A nodeList is a list/collection of complete nodes (with element nodes, attributes nodes, and text nodes).
2. **getElementsByClassName() and getElementsByTagName()**: they return **live HTMLCollections**.    
    2.1. This means that any changes in the DOM would reflect in this live collection making it change also.    
    2.2. The HTMLCollection is a collection of document elements.
3. **childNodes property**: this property returns a **live NodeList**.



###### Traversing DOM Methods

One important observation here about the HTML DOM terminology: **NODES VS ELEMENTS**

**Nodes** are all nodes (element nodes, text nodes, and comment nodes).

Whitespace between elements are also text nodes.

**Elements** are only element nodes.



- **Method for Matching a Element Selector**

This method returns 'true' or 'false' and allows to conditionally test if a element matches a some speciffic or speciffics selector(s):

```
const element = document.getElementById('demo');

let boolAnswer = element.matches('.container, .wrapper');
``` 

- Note: beware with the a random method implemented by some browser which is not a JS pattern: matchesSelector().


- **Property for Getting the Parent DOM from a Node**:

```
const elem = document.querySelector('div.foo');

const elemParent = elem.parentNode;
``` 

- **Property for Getting the Child DOM from a Node**:

It returns the nodes as a whole, there is, element nodes, text nodes, and comment nodes.

```
const element = document.querySelector('div');
const elementChildren = element.childNodes;

const number_of_children = elementChildren.length;
for (let i = 0; i < number_of_children; i++) {
    conosle.log(children[i].innerHTML);
}
``` 

There are also 2 other methods for direct reaching the first or the last child:

```
const firstChild = element.firstChild;
const lastChild = element.lastChild;
``` 

- **Property for Getting Siblings of an Node**:

There are 2 sets of properties here, that return the previous or the return the next sibling of a node according the relation to the parent node. Or saying in another way, properties that returns previous or next node on the same tree level.

1. **element.previousSibling**: this property returns any kind of node which came previously, meaning a element node, or a text node or a comment node.
2. **element.nextSibling**: this property returns any kind of node which comes next, whether it may be a element node, or a text node or a comment node.
3. **element.previousElementSibling**: this property ignores any kind previous node except for a sibling element node.
4. **element.nextElementSibling**: and this property also ignores any kind of next node except for a sibling element node.


- In this first example, the node retrived will be: **Coffee (first item)**.
```
<ul>
    <li id="item1">Coffee (first item)</li>
    <li id="item2">Tea (second item)</li>
</ul>

<p>The HTML content of the previous sibling of the second list item is:</p>
<p id="demo"></p>

<p>
    <strong>Note:</strong> 
    Whitespace between elements is considered text nodes.
</p>
<p>
    If you add whitespace between the two li elements, the result will be "undefined".
</p>

<script>
    let text = document.getElementById('item2').previousSibling.innerHTML;
    
    document.getElementById('demo').innerHTML = text;
</script>
``` 

- And in the second example, the node retrived will be: **Tea (second item)**.
```
<ul>
    <li id="item1">Coffee (first item)</li>
    <li id="item2">Tea (second item)</li>
</ul>

<p>The HTML content of the previous sibling of the second list item is:</p>
<p id="demo"></p>

<p>
    <strong>Note:</strong> 
    Whitespace between elements is considered text nodes.
</p>
<p>
    If you add whitespace between the two li elements, the result will be "undefined".
</p>

<script>
    let text = document.getElementById('item1').nextSibling.innerHTML;
    
    document.getElementById('demo').innerHMTL = text;
</script>
``` 

- **Method for Getting the Closest/First Element Which Matches a Specified CSS Selector**

This method searchs up the DOM tree for the first/closest element which matches a specified CSS selector. In the next example, it will be retrieved the closest element that matches the class selector '.container':

```
<h1>The Element Object</h1>
<h2>The closest() Method</h2>

<div class="demo"> Grandparent
  <div class="demo container">Parent
    <div id="myElement" class="demo">The parent of this div element will be selected.</div>
  </div>
</div>

<script>
    const element = document.getElementById('myElemet');
    
    const closest = element.closest('.container');
    
    if (closest) {
        closest.style.border = '4px solid black';
    }
</script>
```

###### Manipulating the DOM

Here are some methods for helping to manipulate the DOM:


- **Creates a New Element Node**:

```
const newElement = document.createElement('div');

newElement.innerHTML = 'New Div created!';
``` 

- **Creates a New Text Node**:

```
const textNode =document.createTextNode('A new text node!');

someElementNode.append(textNode);
``` 

- **Replace a DOM Element**

This method removes a child element from the DOM tree and inserts a new one in its place.

``` 
<ul id="myList">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<script>
    const newNode = document.createTextNode('Water');
    
    const element = document.getElementById('myList').children[0];
    
    element.replaceChild(newNode, element.childNodes[0]);
</script>
``` 

- **Insert Before Some DOM Element**:

In this example, a item and its text is created and inserted first in the list:

```
<ul id="myList">
  <li>Coffee</li>
  <li>Tea</li>
</ul>

<script>
    // Create item element node, its text node and then append it to element node
    const newItem = document.createElement('li');
    const textNode = document.createTextNode('Wate');
    newItem.appendChild(textNode);
    
    // Insert before the existing child of the list
    const list = document.getElementById('myList');
    list.insertBefore(newNode, list.children[0]);
</script>
``` 

###### Working with Classes and Attributes

- **Add Class to the Element**

```
element.classList.add('myClass');
``` 

- **Removes Class from the Element**

```
element.classList.remove('myClass');
``` 

- **Toggle Between Adding or Removing Class to/from Element**

```
element.classList.toggle('myClass');
``` 

- **Add or Update Attribute to some Element**:

Here, if the attribute does not exist, it is added, but if it already exists, the attribute is updated:

``` 
someDiv.setAttribute('id', 'theDiv');
``` 

- **Get the Value of the Speciffied Attribute from some Element**

```
someDiv.getAttribute('id');
``` 

- **Remove Speciffied Attribute from some Element**

``` 
someDiv.removeAttribute('id');
``` 

###### Styling DOM Elements

- **Using the 'Style' Method for Both Styling or Creating a CSS Rule**

First, styling using the many properties that match CSS ones:

``` 
element.style.color = 'blue';
element.style.backgroundColor: 'red';
``` 

Now, using the property style.cssText to create several CSS rules at once:

```
element.style.cssText = 'color: blue; backgroundColor: red';
``` 

- **Add Styles with the Same SetAttribute Already Seem Above**:

```
element.setAttribute('style', 'color: blue; backgroundColor: red');
``` 


#### Handling Events

According to author Marijn Haverbeke, in the book 'Eloquent JavaScript', the handling of events comes as a feature or as a interface used by some systems or programs to notify the interested parts previously registered about something of their interest.


Still according to the author, this is a newer kind of architecure which came to help in handling many tasks that others architectures were not very performatic. For exemple, a early kind of architeture in which the the interested system/application had to continously monitor some task to keep track of its current state, and in this case it would not be performatic:

`Imagine an interface where the only way to find out whether a key on the keyboard is being pressed is to read the current state of that key. To be able to react to keypresses, you would have to constantly read the key’s state so that you’d catch it before it’s released again. It would be dangerous to perform other time-intensive computations since you might miss a keypress.`


Another exemple of a architecture also not very suited to keep track of inputs is by **pooling** notifications in a **queue**, because between the time to the system hardware had to notify the input event and the queue to be checked by the interested browser, the timespan passed would prevent the UI to feel more responsive in real time.


So, to some of the tasks related to inputs by the browser, a better mechanism would be to have a direct notification from the system hardware to web application duly registered.


So, to register events with JavaScript, there is 2 methods:

1. **onclick**: this attribute can only be applied even inline, that is direct in the HTML tag, or in the 'script' tag or in the JS file.   
    1.1. But this property can only be applied 1 time to a object.
2. **addEventlistener**: this one is much more flexible, because it allows many events to be passed to the same object.


Another interesting point in the addEventListener patter is that when it receives a named function or expression:

```
<button id="btn">Click me!</button>

<script>
    let button = document.querySelector('#btn');
    
    function once() {
        console.log('Done');
        button.removeEventListener('click', once);
    }
    
    button.addEventListener('click', once);
</script>
``` 

###### The Event Object

There is a possible parameter, a event object, that can be passed as argument to the event registration that holds aditional information about that specific event. And this also means that differents events have different information stored in the Event Object.


And, a comon pattern in which this object is useful helps to specify the current node being notified in a nodeList - [Eloquent Javascript](https://eloquentjavascript.net/15_event.html):

```
<button>A</button>
<button>B</button>
<button>C</button>

<script>
  document.body.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
      console.log("Clicked", event.target.textContent);
    }
  });
</script>
```

- Besides 'target', the event object has many other interesting properties and methods:
1. **currentTarget**: in a click event, it relates to the actual node that have the event listener on it.
2. **Target**: also in a click event, this is the most specific node that is affect by the bubbling effect. 
3. **preventDefault()**: prevents a defalt browser event, like the redirection by the 'link' element.
4. **stopPropagation()**



#### Event Capture, Propagation and Bubbling

In general terms those 3 concepts are related to the tree-like disposition of the DOM page itself, where the elements are related and descend from branchs and from a common root.

First, the **event capture** would capture the whole trace of the elements that are related in that parent-child tree structure from the TOP-DOWN until the smaller node unit affected by the event itself and it would store these references.

Then, after the trace of nodes is captured in the event, they start to bubble because the **bubbling effect** surge in the DOWN-UP direction firing any function that may be set to go off in the case of the event.

This bubbing effect can be even more clear when there is some nesting configuration where elements are wrapped by its parent:


![understanding-propagation-bubbling-html-01](/images/articles/web-development/understanding-propagation-bubbling-html-01.png)

```
<div class="one">
    <div class="two">
        <div class="three">
        </div>
    </div>
</div>
``` 

In the above disposition, an event like 'click' could propagate upwards form the bottom up when the nested elements are clicked:

```
const theBody = document.querySelector('body');
const divs = document.querySelectorAll('div');

function logText(e) {
    /*
    *   Stopping the event propagation......
    */
    //e.stopPropagation();
    
    // log the element itself
    console.log(this);
}

theBody.addEventListener('click', logText);
divs.forEach(div => div.addEventListener('click', logText, {
    capture: false
}));
``` 

So, while capturing that event, there would be 3 distinct results following the script:

1. **Click on the outer div**: only its node would be printed on the console.   
    1.1. It would print only its own node.
2. **Click on the middle div**: it would propagate upwards printing until its parent node and print on the console:   
    2.1. Its own node and then its parents node.
3. **Click on the inner div**: it would propagate since its node upwards to the upper node which wrapper the group, and then print on the console:   
    3.1. Its node, then its parent, then its grandparent.


Finally, if it is placed a event listener also on the 'body' element as well, the propagation even to the top structures of the HTML page would become notible, because now that the body is also listening and linked to fire the logText() function, it node would also be printed in each of that 3 occurrences.


Also, **there is a 3rd parameter in the addEventListener**, that is a object which can be passed to define some properties related to the **propagation** of the events:

1. **Capture**: false is the defalt.  
    1.1. False: it means that the handling of the event is made in the bubbling phase (DOWN-UP).   
    1.2. True: it means that the handling of the event is made in the capturing phase (TOP-DOWN).
2. **Once**: this new property creates an automatic unbinding of the Event Listener after a single firing of the event.   
    2.1. Its defalt option is false, which means not unbinding the event afterwards.   
    2.2. Its just like a removeEventListener() after the first event takes place.
3. **The stopPropagation Method**: the stopPropagation() method can be called at the callback function to determine that the event should not propagate.
    3.1. It can also be use with conditional structures (if/else, ect.) to define how much propagation would be wanted.   
    3.2. It could be usefull to in store pages where button features should not be click more than once, for example.



###### Other resources on the DOM:
- [DOM Enlightenment - Cody Lindley](http://domenlightenment.com/)
- [Understanding the DOM (Document Object Model) - DigitalOcean.com](https://www.digitalocean.com/community/tutorial_series/understanding-the-dom-document-object-model)
- [JavaScript Functions and Helpers - Plainjs.com](https://plainjs.com/javascript/)
- [Handling Events - EloquentJavascript.net](https://eloquentjavascript.net/15_event.html)
- [JavaScript DOM Crash Course - Traversy Media](https://www.youtube.com/watch?v=0ik6X4DJKCc&list=PLillGF-RfqbYE6Ik_EuXA2iZFcE082B3s)



#### Dealing with the Difficulties in Styling HTML Forms

As it is said in a article at [MDN platform](https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling), dealing with the stylization of HTML elements can be a little bit trick, because appart from some basic elements (inputs, buttons, etc.) that follow the same general CSS pattern, there a many that present serious efforts.

In this scenario, the site divides 2 categories of HTML elements that are hard to cope with:
1. **The hard elements (or 'the Bad' ones)**: these are elements that require more complex CSS or even some very speciffic tricks to be styled.   
    1.1. Checkboxes and radio buttons.   
    1.2. **input type="search"** element
2. **The impossible elements (the 'Ugly' ones)**: these are proprietary widgets that each browser construct end implement in their own way. And they also involve many scripting features:   
    2.1. **Select**, **Option**, **Optgroup**, **Datalist** HTML elements.     
    2.2. **input type="color"**   
    2.3. **input type="datetime"**   
    2.4. **input type="range"**    
    2.5. **input type="file"**    
    2.6. **Progress** and **Meter** HTML elements.


`The appearance property was created as a way to control what OS- or system-level styling was applied to web form controls. Unfortunately, the behavior of this property's original implementations was very different across browsers, making it not very usable. Newer implementations are more consistent in behavior; interestingly enough, both Chromium-based browsers (Chrome, Opera, Edge), Safari, and Firefox all support the -webkit- prefixed version (-webkit-appearance). Firefox settled on this because web developers mostly seemed to be using the -webkit- prefixed version, so it was better for compatibility.` [MDN platform](https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling)
    

In most cases, the effect is to remove the stylized border, which makes CSS styling a bit easier, but isn't really essential. In a couple of cases — search and radio buttons/checkboxes, it becomes way more useful. 

So, with **input type="search"** is basically just a text input, but the use of the property **appearance: none;** still very useful because in Chromium-based browsers on macOS, search boxes have some styling restrictions — you can't adjust their height or font-size freely, for example. This is because non-macOS Chrome browsers no longer use the WebKit rendering engine, which enabled Aqua appearance by default for certain form controls. With Aqua enabled, some form controls are not scalable.


```
input[type="search"] {
    -webkit-appearance: none;
    appearance: none;
}
``` 

`Interestingly, setting border/background on the search field also fixes this problem, as it disables or "breaks" the Aqua appearance too. The following styled search doesn't have appearance: none; applied, but it doesn't suffer from the same problem in macOS Chrome as the previous example.` [MDN platform](https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling)


###### An Example from MDN Dealing with the 'Hard' Category HTML Elements

```
--------------------------------- HTML -----------------------------------------------------------
<form>
    <fieldset>
        <legend>Fruit preferences</legend>

        <p>
            <label >
                <input class="plain-appearance checkboxes-test2" type="checkbox" name="fruit-1" value="cherry">
                I like cherry
            </label>
        </p>
        <p>
            <label >
                <input class="plain-appearance checkboxes-test2" type="checkbox" name="fruit-2" value="banana" disabled>
                I can't like banana
            </label>
        </p>
        <p>
            <label >
                <input class="plain-appearance checkboxes-test2" type="checkbox" name="fruit-3" value="strawberry">
                I like strawberry
            </label>
        </p>
    </fieldset>
</form>

--------------------------------- CSS -----------------------------------------------------
input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
}

input[type="checkbox"] {
    position: relative;
    width: 1em;
    height: 1em;
    border: 1px solid gray;
    /* Adjusts the position of the checkboxes on the text baseline */
    vertical-align: -2px;
    /* Set here so that Windows' High-Contrast Mode can override */
    color: green;
}

input[type="checkbox"]::before {
    content: "✔";
    position: absolute;
    font-size: 1.2em;
    right: -1px;
    top: -0.3em;
    visibility: hidden;
}

input[type="checkbox"]:checked::before {
    /* Use `visibility` instead of `display` to avoid recalculating layout */
    visibility: visible;
}

input[type="checkbox"]:disabled {
    border-color: black;
    background: #ddd;
    color: gray;
}
``` 


###### Dealing with the 'Ugly' Category of HTML Elements

The problem is that these elements have very different default looks across browsers, and while you can style them in some ways, some parts of their internals are literally impossible to style.

If you are prepared to live with some differences in look and feel, you can get away with some simple styling to make sizing consistent, uniform styling of things like background-colors, and usage of appearance to get rid of some system-level styling.


So, in the article, [MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling) took some steps in the process of trying to give a more uniformed view fot some form controls across browsers implementatitons:


- **Applying some Normalization to all controls and their labels, to get them to size in the same way**:
```
button, label, input, select, progress, meter {
    display: block;
    font-family: inherit;
    fotn-size: 100%;
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 5px;
    height: 30px;
}
```

- **Then, they also added some uniform shadow and rounded corners to the controls on which it made sense**:
```
input[type="text"], input[type="datetime-local"], input[type="color"], select {
    box-shadow: inset 1px 1px 3px #ccc;
    border-radius: 5px;
}
``` 

- **Third, some custom styling**:
```
body {
  font-family: 'Josefin Sans', sans-serif;
  margin: 20px auto;
  max-width: 400px;
}

form > div {
  margin-bottom: 20px;
}

select {
  -webkit-appearance: none;
  appearance: none;
}

.select-wrapper {
  position: relative;
}

.select-wrapper::after {
  content: "▼";
  font-size: 1rem;
  top: 6px;
  right: 10px;
  position: absolute;
}

button, label, input, select, progress, meter {
  display: block;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
  height: 30px;
}

input[type="text"], input[type="datetime-local"], input[type="color"], select {
  box-shadow: inset 1px 1px 3px #ccc;
  border-radius: 5px;
}

label {
  margin-bottom: 5px;
}

button {
  width: 60%;
  margin: 0 auto;
}
``` 

![mdn-example-of-styling-hard-html-form-controls](/images/articles/web-development/mdn-example-of-styling-hard-html-form-controls.png)


The reach the goal above, the most problematic HTML element was the **select** element, because:

`Two things are slightly more problematic. First of all, the select's "arrow" icon that indicates it is a dropdown differs across browsers. It also tends to change if you increase the size of the select box, or resize in an ugly fashion. To fix this in our example we first used our old friend appearance: none to get rid of the icon altogether. [...] We then created our own icon using generated content. We put an extra wrapper around the control, because ::before/::after don't work on <select> elements (this is because generated content is placed relative to an element's formatting box, but form inputs work more like replaced elements — their display is generated by the browser and put in place — and therefore don't have one)`


So, it was necessary to create a wrapper around the Select element, besides all the complementairy stylization:

```
--------------------------------- HTML -----------------------------------------------------
<div class="select-wrapper"><select id="select" name="select">
    <option>Banana</option>
    <option>Cherry</option>
    <option>Lemon</option>
</select></div>
--------------------------------- CSS -------------------------------------------------------
select {
  -webkit-appearance: none;
  appearance: none;
}

.select-wrapper {
  position: relative;
}

.select-wrapper::after {
  content: "▼";
  font-size: 1rem;
  top: 6px;
  right: 10px;
  position: absolute;
}
```

###### The Road to Nicer Forms: useful Libraries and Polyfills

So, as the MDN site states, if someone wants full control over the 'ugly' control types, it is inevitable the dependence on JavaScript. And the site also points to the page [How to build custom form controls - MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_build_custom_form_controls) which teachs how this could be done.


But, another possibility could be to use libraries. Thus, there are speciallized frameworks and others that also have in its arsenal features related to forms:
1. **Uni-from**: this is a framework that standardizes form markup, styling it with CSS. It also offers a few additional features when used with jQuery, but that's optional.
2. **Formalize**: this is an extension to common JavaScript frameworks (such as jQuery, Dojo, YUI, etc.) that helps to normalize and customize your forms.


The general purpose frameworks that also have some features related to forms:
1. **JQuery UI**
2. Bootstrap**
3. **WebShim**


- **Atention**:
`Remember that CSS and JavaScript can have side effects. So if you choose to use one of those libraries, you should always have robust fallback HTML in case the script fails. There are many reasons why scripts may fail, especially in the mobile world, and you need to design your Web site or app to handle these cases as well as possible.` [MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling)


###### Advanced resources on HTML forms:
- [How to build custom form controls - MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_build_custom_form_controls)   
- [Sending forms through JavaScript - MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms#form_styling_guides)
- [CSS property compatibility table for form controls - MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms/Property_compatibility_table_for_form_controls)


#### CSS UI Pseudo-Classes for Forms Stylization

As the [MDN article](https://developer.mozilla.org/en-US/docs/Learn/Forms/UI_pseudo-classes) points out, originally there was 3 **pseudo-classes** available since CSS-2.1:

1. **:hover**
2. **:focus**
3. **:active**


But later, more pseudo-classes were added with the CSS Selector Level 3 and the CSS Basic UI Level 3 specifications. Bellow there a list from the MDN site with the more common pseudo-classes and also the most supported ones across the browsers:

1. **:required**
2. **:optional**: see that form controls are optional by default, and so in most situations using only the first pair would be enough.
3. **:valid and :invalid**: some points to be observed here:   
    3.1. Controls with no constraint validation will always be valid and matched with :valid.   
    3.2. Controls 'required' and without any value referenced, they will be counted and matched as :invalid and :required at the same time.   
    3.3. Constrols with default validation, like 'email', they are :invalid when the data does not match, but are :valid when empty.    
    3.4. Contros whose current value is outside the range limit specified byt the 'min' and 'max' attributes are going to be matched with :invalid and also :out-of-range: according to MDN this kind of 'duplicacy' can be semanticaly helpful to developers that can use these references for creating errors with different messages.
4. **:in-range and :out-of-range**
5. **:enabled and :disabled**: disabled controls will not even send data to servers.   
    5.1. Says the MDN article that 'enabled' is the default state for controls in the forms.
6. **:read-only and :read-write**: 'readonly' attributes determine that the data to be sent to the server cannot be changed, while the 'read-write' can have the default value for the data changed.   
    6.1. On the other hand, elements which are not 'readonly' or 'disabled', they are defined as 'read-' and 'write-able' according to W3Schools.
7. **:checked, and  :indeterminated, and :default**: these are states for checkboxes.   
    7.1. The **:indeterminated** pseudo-class makes reference to the checkboxes which the states are neither a 'checked' state, nor that it was actually checked manually by the user or controls with no value, etc.
    7.2. The **:default**: it matches radios/checkboxes that are checked by default, on page load (i.e. by setting the checked attribute on them) These match the :default pseudo-class, even if the user unchecks them. And it can be used to leave some reminder to the user of what are the starting options...
8. **:focus-within**: the :focus-within pseudo-class matches an element that has received focus or contains an element that has received focus. This is useful if you want a whole form to highlight in some way when an input inside it is focused.
9. **:focus-visible**: the :focus-visible pseudo-class matches focused elements that received focus via keyboard interaction (rather than touch or mouse) — useful if you want to show a different style for keyboard focus compared to mouse (or other) focus.
10. **placeholder-shown**: the :placeholder-shown pseudo-class matches <input> and <textarea> elements that have their placeholder showing (i.e. the contents of the placeholder attribute) because the value of the element is empty.



Beside these reference features, it is common while working with forms to bring up more distinctions for the stylization of the form. So, with these **pseudo-elements**, some content can also be added to help in the task. 
And it's also important to notice that a pseudo-class can be combined with a pseudo-element by the developer when it is required.

1. **::before**
2. **::after**


With the **pseudo-elements** it is possible to add content to the page through the document style without actually bringing it to the DOM. And this distinction is very useful, for example, when the designer wants to create some content to help in the visual result of the page form, but knows the contents are not necessary to be picked by asssistive technologies.


`The idea is that we can use the ::before and ::after pseudo-elements along with the content property to make a chunk of content appear before or after the affected element. The chunk of content is not added to the DOM, so it's invisible to screenreaders; it is part of the document's styles. Because it is a pseudo element, it can be targeted with styles in the same way that any actual DOM node can. This is really useful when you want to add a visual indicator to an element, such as a label or icon, but don't want it to be picked up by assistive technologies. [...] (The generated content acts as though it is a child node of the element it is generated on, for the purposes of positioning).` [MDN article](https://developer.mozilla.org/en-US/docs/Learn/Forms/UI_pseudo-classes)



- **Bellow, in this interesting exemple from MDN, the age control receives 2 validations, but only actualy prints out the second when it becomes :out-of-range and the Cascate Style Sheet comes in to play**:
```
input + span {
  position: relative;
}

input + span::after {
  font-size: 0.7rem;
  position: absolute;
  padding: 5px 10px;
  top: -26px;
}

input:required + span::after {
  color: white;
  background-color: black;
  content: "Required";
  left: -70px;
}

input:out-of-range + span::after {
  color: white;
  background-color: red;
  width: 155px;
  content: "Outside allowable value range";
  left: -182px;
}
```


#### HTML Forms Validation

In general terms, validation is the task of checking some input value to test its adherence to the stated prerequisits. So, in the HTML forms it's possible to find 2 basic categories of validations:
1. **Built-in HTML validation**: even though this validations comes out of the box, it is possible to enhance its use and experience applying some set of patterns to extend its usefulness.   
    1.1. Required(*): the required validation makes the application check for the presence of some value at the form control. A important patter here is to signalize in the label for this control with a **asterisk**.    
    1.2. Type: the type attribute gives a strait way direction difining the kind of value the user is supposed to enter (text and its variations like password, email, or number, etc.).
    1.3. Minlength and Maxlength: these attribute are for text inputs. Again here, a better experience would be to give the user a count feedback of the character count in real time.   
    1.4. Min and Max: and these next attributes state boundaries for number-based form controls.    
    1.5. Pattern: the pattern attribute allows the use of Regex Expression to validate inputs. For example, it can be use to define date formats, zip codes, credit card numbers, etc. Here again, it's very useful to match this validation with some other method to give clear understand of the correct pattern for the user. And the **title** attribute could be used here to create the complete message to warn the user about the error. A **placeholder** could also be a UX method (The **pattern** attribute can only be used on **input** elements).   
    1.6. Step: the step attribute can be used in data of the number type to define leaps in the data values when the forms controls are applyed.
2. **Custom made validations**: this category of validations comes to aid the developer in dealing with the limitations present with the built-in validations.   
    2.1. This is also a UX factor, which may help to warn and easy the user task in correct the input value in real time. But this kind of validation cannot be a replacement nor be as effective as the Backend task.



`It’s also worth noting client-side validations are not a silver bullet for ensuring users enter the correct data. To ensure the integrity of any user data coming into our systems, we should also have server-side validations in place.` [Form Validation The Odin Project](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-form-validation)


Some reasons to invest effort into proper validating the data for the HTML forms:
1. Not only the applications involved in the process need properly formated data to perform its tasks, but also the business model may only get real benefits from the data collect if it is of good quality.
2. To improve security for the users data, just as when the form forces the user to enter secure passwords.
3. For the improvement of website security as a whole.


- **Bellow there is a very interesting example from MDN** MDN article](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation):
```
<p>
    <label for="n1">How old are you?</label>
        <!-- The pattern attribute can act as a fallback for browsers which
            don't implement the number input type but support the pattern attribute.
            Please note that browsers that support the pattern attribute will make it
            fail silently when used with a number field.
            Its usage here acts only as a fallback -->
    <input 
        type="number" 
        min="12" 
        max="120" 
        step="1" 
        id="n1" 
        name="age" 
        pattern="\d+"
    />
</p>
<p>
    <label for="t1">What's your favorite fruit?<abbr title="This field is mandatory" aria-label="required">*</abbr></label>
    <input 
        type="text" 
        id="t1" 
        name="fruit" 
        list="l1" 
        required
        pattern="[Bb]anana | [Cc]herry | [Aa]pple | [Ss]trawberry | [Ll]emon | [Oo]range"
    />
    <datalist id="l1">
        <option>Banana</option>
        <option>Cherry</option>
        <option>Apple</option>
        <option>Strawberry</option>
        <option>Lemon</option>
        <option>Orange</option>
    </datalist>
    <p>
        <button>Submit</button>
    </p>
</p>
``` 

Some points from the example:
1. The **input type="number"** uses the 'pattern' attribute as a backup measure for browsers that doen't support this number type.
2. The label for the **input type="text"** uses a 'abbr' (abbreviation tag) which has a 'title' property that brings general explanations. In this case it explains that the 'asterisk' represents a required data field.
3. The label for the **input type="text"** also use a **aria-label="required"** for screen readers.
4. The **input type="text"** field itself uses a 'list' attribute linked to a **datalist** element which brings the accepted examples present at the 'pattern' attribute.



#### Validating HTML Forms Using JavaScript

According to the [MDN article](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation), the use of JavaScript to do Frontend validation is a necessary task in order to bring custom validations, and also in the case of **'legacy browsers that do not support HTML'S built-in validation'**.


Also, in a broader note, it is possible to **stop the browser validation altogether** with these 2 options and then customize everything:
1. **novalidate**: with the 'form' element.
2. **formnovalidate**: with the submission of a button or a image.


And, there are stil 2 other points to be considered here is about dealing with custom JavaScript form validation:
1. **Complexity**: depending on what the JavaScript would bring about, it's necessary to consider every instance related to each particular case (mouse, keyboard, touch, speech, etc.).
2. **Novelties**: to avoid bringing different contros, even if they are better controls, but which could be an unfamiliar UI and confuse users.


Futhermore, this article at [SitePoint](https://www.sitepoint.com/html-forms-constraint-validation-complete-guide/) adverts against the idea of 're-inventing HTML controls!'. But it also says that at least in 3 speciffic instances, the adition of JavaScript validation would be welcomed:
1. **Standard controls are difficult to style**:   
    1.1. CSS styling is limited and often requires hacks, such as overlaying an input with its label’s ::before and ::after pseudo-elements. The situation is improving, but question any design which prioritizes form over function.
2. **Modern elements and attributes are not supported in old browsers**:   
    2.1. In essence, you’re coding for Internet Explorer. IE users won’t get a date picker but can still enter dates in YYYY-MM-DD format. If your client insists, then load a polyfill in IE only. There’s no need to burden modern browsers.
3. **The necessity of a new form control which has never been implemented before**:   
    3.1. As the site states, these situations are rare, but says that always start the design should start with a appropriate HTML5 field, because they are faster than scripts.   
    3.2. Then, they could be enhenced henceforth.


###### Many aditional information and interesting listings can be found in the article itself: [The Complete Guide to HTML Forms and Constraint Validation - SitePoint](https://www.sitepoint.com/html-forms-constraint-validation-complete-guide/)

    

###### The Constraint Validation API

This API which is supported by most browsers consists of a set of methods and properties to tackle this task of refering to the DOM interface:

1. **HTML Elements**:
    1.1. HTMLButtonElement    
    1.2. HTMLFieldSetElement   
    1.3. HTMLInputElement    
    1.4. HTMLOutputElement   
    1.5. HTMLSelectElement   
    1.6. HTMLTextAreaElement
2. **HTML Properties**:   
    2.1. validationMessage: returns a localizd message describing the validatin consrtraints that the control doesn't satisfy (if any). Here, if the control is not a candidate for constraint validation (willValidate is false) or the element's value satisfy its constraints (is valid), this will return an empty string.   
    2.2. Validity: returns a 'ValidityState' object that contains several properties describing the validity state of the element.
3. **Methods**: tConstraint Validation API also makes the following methods available on the above elements and the form element.   
    3.1. checkValidity(): returns true if the element's value has no validity problems; false otherwise. **This method also fires an 'invalid event' in an 'onSubmit event handler', when the element is invalid.   
    3.2. reportValidity(): reports invalid field(s) using events. Useful in combination with **preventDefault()** in an **onSubmit event handler**.
    3.3. setCustomValidity(message): adds a custom error message to the element; if there is a set custom error message, this error message is displayed when the element is considered invalid.



###### The ValidityState Object

Here, a link for a online page with reference for the [ValidityState object](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState), and bellow some of the more common properties:
1. **patternMismatch**:returns true if the value does not match and false if it does match the criteria.
2. **tooLong**: returns true if the value is longer than the maximum length by **maxlength** or false if it is shorter than or equal to it.
3. **tooShort**: returns true if the value is shorter than the minimum length by **minlength** or false if it is greater than or equl to it.
4. **rangeOverFlow**: returns true if the value is greater than the maximum specified by **max** or false if it less than or equal to it.
5. **rangeUnderFlow**: returns true if the value is less than the minimum by **min** or false if it is greater or equal to it.
6. **typeMismatch**: returns true if the value is not in the required syntax for the **type attribute** or false when it is correct.
7. **valid**: returns true if the element **meets all its validation constraints** or false if it fails to.
8. **valueMissing**: returns true if the element has a required attribute, but no value, or false otherwise.
9. **willValidate**: returns true if the element will be validated when the form is submitted; false otherwise.


###### Example of a Customized Error Message

Considering that when the forms are submited, the browsers follow the HTML5 standard appling its own error messages, what may not be consistent for the page design.

As the MDN site cites, there is still some other drawback from this:
1. The lack of a standard in its CSS stylization.
2. The dependence on the browser locale, which means that you can have a page in one language but an error message displayed in another language, as seen in the following Firefox screenshot.
    2.1. At the [MDN site](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation1) there is a image showing this problem of a page design in English, but showing a error message in French.S


```
--------------------------------- HTML -----------------------------------------------------
<form>
    <label for="mail">I would like you to provide me with an e-mail address:</label>
    <input 
        type="email" 
        id="mail" 
        name="mail"
    />
    <button>Submit</button>
</form>

--------------------------------- JS -----------------------------------------------------
const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
    email.reportValidity();
  } else {
    email.setCustomValidity('');
  }
});
``` 


###### Validating Forms Without a Built-in API

As the [Validating forms without a built-in API](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation1)  from MDN says, in some cases the developer won't be able to use the Constraint Validation API, for example, legacy browsers. It still will be possible to be done with JavaScript, 'but you'll just have to write your own'.


To validate a form, ask yourself a few questions:

1. What kind of validation should I perform?   
    1.1.  You need to determine how to validate your data: string operations, type conversion, regular expressions, and so on. It's up to you.
2. What should I do if the form doesn't validate?   
    2.1.  This is clearly a UI matter. You have to decide how the form will behave. Does the form send the data anyway? Should you highlight the fields that are in error? Should you display error messages?
3. How can I help the user to correct invalid data?    
    3.1. In order to reduce the user's frustration, it's very important to provide as much helpful information as possible in order to guide them in correcting their inputs. You should offer up-front suggestions so they know what's expected, as well as clear error messages. 


**The MDN article also brings at the end, an example that does not use the Constraint Validation API, and therefore can be used in browsers that doesn't implement it**: [Validating forms without a built-in API](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation1) 


- **Some useful resources cited by the MDN site**:   
- [Form-Field Validation: The Errors-Only Approach - SmashingMagazine](https://www.smashingmagazine.com/2012/06/form-field-validation-errors-only-approach/)    
- [Web Form Validation: Best Practices and Tutorials - SmashingMagazine](https://www.smashingmagazine.com/2009/07/web-form-validation-best-practices-and-tutorials/)    
- [10 Tips for Optimizing Web Form Submission Usability - WebFX](https://www.webfx.com/blog/web-design/10-tips-for-optimizing-web-form-submission-usability/)    
- [Inline Validation in Web Forms - A List Apart](https://alistapart.com/article/inline-validation-in-web-forms/)
    
    

### Security and Privacy at the Frontend

#### Forms

As it is sad in the [Web.dev tutorials](https://web.dev/learn/forms/security-privacy/), the working with forms delves into user data management, and so the **number one** concern of the developer here 'should be to ensure that user data is kept private and transfered securely'.


`Don't ask for data you don't need, and always question whether you need all of the requested data. Less data means less risk, less cost, and less liability. In addition, reducing the number of fields in a form makes it less complex, easier to fill out, and can reduce abandonment rates.` [Web.dev tutorials](https://web.dev/learn/forms/security-privacy/)


The [Web.dev tutorials](https://web.dev/learn/forms/security-privacy/) definition to a **secure form**:
1. **Data encrypting**:    
    1.1. Always use HTTPS protocol, which goes encrypted at both sides of the connection.    
    1.2. On ones site, all the HTTP requests must be redirect to HTTPS: [How to Redirect Website from HTTP to HTTPS? - GeekFlare](https://geekflare.com/http-to-https-redirection/)
2. **No unauthorized access**:    
    2.1. Save only the data needed.   
    2.2. Personal data to saved demands consent.   
    2.3. Does not share user data without consent.
3. **Use POST method**: this method transfer the data as a payload in the body of the message, and is only visible to the backend script processing.   
    3.1. The GET method not only makes the transfer directily open in the URL, **but the data is also saved as browsing history!!!**
4. **Avoid the use of the Users LocalStorage**: to have the users own browser features to save personal and important data is not adequate.   
    4.1. Though the use of the browser localStorage is perfectly fit for ordinary data and to improve user experience.
5. **Data Validation**: data validation should be used at both end of the process.    
    5.1. At the Frontend to enhance UX.    
    5.2. At the Backend to safely sanitize the data and to prevent attacks.
6. **Rely on Safe Authentication Process**: according to [Web.dev tutorials](https://web.dev/learn/forms/security-privacy/) authentication is a complex and demanding feature, so while dealing with privacy and security, the platform suggest the use of **third-party-provider**: [Sign-up form best practices](https://web.dev/sign-up-form-best-practices/#federated-login)
7. **Follow Proper Regulations**: there are many regions in the world where speciffic laws and regulations have to be followed (user access to their information, transparency, reporting data leaks, etc.).   
    7.1. The **PDPA** in India.   
    7.2. The **GDPR** in Europe.   
    7.3. The **LGPD** in Brazil.
8.  **Define a Private Police**: have all the security polices in one place and easy to be accessed by the users.
9. **Validate Real Users**: its important to prevent spam submissions from bots using speciallized applications for the job.   
    9.1. **reCAPTCHA** is one example of a speciallized application for this kind of task.    
    9.2. **Akismet** is also a service for spam protection.
10. **Use Honeypots**: a honeypot feature in forms could use hidden fields that are not accessible to humens, but that would be accessed and filled by bots.    
    10.1. **ATENTION**: it's also necessary to make the field hidden from screen readers using the **aria-hidden="true"** property.


`If you do choose to build your own authentication system, make sure to follow best practice for password management: - Never store or transmit passwords in plain text. Make sure to salt and hash passwords—and don't try to invent your own hashing algorithm. - Ensure users enter secure passwords. - Don't allow compromised passwords. - Don't force password updates. - Make it simple for users to change or reset passwords.`  [Web.dev tutorials](https://web.dev/learn/forms/security-privacy/)



###### Other resources about Frontend security:
- [How to Redirect Website from HTTP to HTTPS? - GeekFlare](https://geekflare.com/http-to-https-redirection/)   
- [Web.dev tutorials](https://web.dev/learn/forms/security-privacy/)
- [Don’t try to sanitize input. Escape output. - Ben Hoyt](https://benhoyt.com/writings/dont-sanitize-do-escape/)



### Accessibility

#### Forms

As the  [Web.dev tutorials](https://web.dev/learn/forms/accessibility) reminds, the forms are build for people, which in turn are using different kinds of devices and should all have the proper access and use of the feature:

1. Different interactive features: mouse, touch screen, keyboard, eye movement, etc.
2. Different visually devices: small screen, text enlargement software, etc.


###### Every Field Should Be Properly Designed

1. There should be used the proper form control to each task and also its related properties. 
2. Always pair a **label** element to each form control, since it not only describes the form control, but it also enhance it usability:   
    2.1. It gives more space for the form control facilitating tapping and clicking.  
    2.2. It is read out by screen readers.
3. Use semantic HTML always: though it is possible to emulate all the speciffic feature from semantic tags, it brings complexities to have everything duplicated using CSS and JavaScript, but it may also prevents the correct work from screen readers.
4. Use the Frontend validation not only to describe the direct form control necessary attributes, but also the screen readers conterpart: **aria-describedby**.
5. Apply desing elements to make warnings from the browser more meaninful and also to apply them to screen readers.   
    5.1. It is possible to create custom erro messages.   
    5.2. It is also possible to use JavaScript to bring live warnings to the user.    
    5.3. Use the **aria-live="assertive"** for live warnings in the screen readers. But here it is necessary to choose a strategy, since it only reports in a single stream.   
    5.4. Another important task is to design also for people with color blindness, **because in these instances, only messaging with red-green color will not achieve the proper warning results**.
6. Again, it is important to think at Usability and UX:    
    6.1. One example of this kind of desing is to use the CSS pseudo-classes **:focus** and **:focus-visible**.


`The problem with this approach for forms with multiple fields, is that aria-live will usually only announce the first error in the case of multiple errors. As explained in this article about multiple aria-live announcements on the same action you could create a single message by concatenating all the errors. Another approach would be to announce that there are errors, then announce individual errors when the field is focused.` [Web.dev tutorials](https://web.dev/learn/forms/accessibility)



- **Bellow there is a example of a properly formated text input**:
``` 
<label for="name">Name</label>
<input type="text" id="name" name="name" required />
``` 

- **And here, a bad exemple of trying to reuse a generic tag to do a task covered by semantic HTML**:
```
<!-- THE HTML -->
<div class="looks-like-label" for="name1">Name</div>
<div id="name1" class="looks-like-input" contenteditable></div>

/* THE CSS */
input,
.looks-like-input {
  border: 1px solid black;
  display: block;
  width: 20em;
  max-width: calc(100vw - 80px);
  padding: 0.4em;
}

.looks-like-label {
  margin-top: 1rem;
}
```

`A screen reader user doesn't recognize the 'div'' as an input element, and isn't able to complete the form. All the screen reader user hears is 'Name', with no indication that the element is a form control for adding text. [...] Built-in form elements have other features. For example, with appropriate form elements and the correct inputmode or type, an on-screen keyboard shows appropriate characters. Using the inputmode attribute on a 'div' cannot do that.` [Web.dev tutorials](https://web.dev/learn/forms/accessibility)


###### Error Correction Flows

Rachel Krause in an article gives 3 general points to guide the design of forms and how to improve the users dealing with their corrections:

1. The error message should be easy to notice and understand.
2. The field(s) in error should be easy to locate.
3. Users shouldn’t have to memorize the instructions for fixing the error.


`These guidelines need little explanation: first, if users don’t know that there is a problem with their input, they won’t be able to fix it. Second, people shouldn’t have to hunt for the error through the form. And last but not least, they shouldn’t have to remember how to fix the problem while they’re fixing it: the instructions should be right in front of their eyes.` [Rachel Krause](https://www.nngroup.com/articles/errors-forms-design-guidelines/)


Also, Rachel Krause proposes a '10 Design Guideline' for the forms themselves:
1. **Aim for Inline validation whenever possible**: this makes the users life easier since it is not necessary to search for the field or change the current context of the form being filled.
2. **Indicate successful entry for Complex Fields**: for example, to help the user while a complex passwords is beign constructed.
3. **Keep error messages next to fields**
4. **Use color to differentiate errors from normal field states**
5. **Add iconography or subtle animation for easy scanning through the form**: this also help in the cases of accessability for color blindness.
6. **Use modals or confirmation dialogs sparingly**: here, these elements can be useful to bring more details and help, but it can bring 3 potential problems:
    6.1. They are disruptive   
    6.2. Their window have to be dismissed, what adds complexity.   
    6.3. Once closed, the user has to remember its contents.
7. **Avoid validating before the input is complete**: it can affect the UX.
8. **Avoid relying solely on Validation Summaries**: its also disruptive for the experience and complex to be delt.
9. **Do not use Tooltips to report errors**: here, the author gives a general recommendation against its use.
10. **Provide extra help for repeated errors**: this last guideline is related to the overall design of the form, asserting that a high rate of mistakes may imply problems of design.   
    10.1. So, sometimes should be recommended to make revisions using analytics and generak testing, etc.


`Generally, we recommend against this method of signaling errors. First, some alert icons are hard to notice. Second, users may wonder what is wrong with the field, without realizing that they can actually see the error message if they take an extra step. Third, why make users work more (i.e., hover or move focus to field) in order to see the error message?` [Rachel Krause](https://www.nngroup.com/articles/errors-forms-design-guidelines/)



@vponamariov, in a Twitter thread also points out:
1. **Don't block the submit button**: because the user can use it as a hint to scroll past the errors.
2. **Use human language, not technical one**
3. **Don't hide error messages under icons**: it may disrupt the user pace and also brings extra work.
4. **Use a friendly design that helps the user know the requirements beforehand**: this point is related to the use of all general elements to make things things easier in the first place.



- **More resouces to HTML Forms Accessability:**  
- [Creating Accessible Forms - WebAIM](https://webaim.org/techniques/forms/)   
- [Understanding Success Criterion 1.3.5: Identify Input Purpose - W3.org](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html)   
- [A guide to designing accessible, WCAG-compliant focus indicators  - SaraSoueidan](https://www.sarasoueidan.com/blog/focus-indicators/)   
- [Form Validation UX in HTML and CSS - CSS-tricks](https://css-tricks.com/form-validation-ux-html-css/)    
- [JavaScript: Password Validation using regular expressions and HTML5 - The-art-of-the-web](https://www.the-art-of-web.com/javascript/validate-password/)   
- [How to Report Errors in Forms: 10 Design Guidelines - NNGroup](https://www.nngroup.com/articles/errors-forms-design-guidelines/)
- [How to validate forms? - @vponamariov](https://twitter.com/vponamariov/status/1400388896136040454)



###### Use JavaScript to Respond to Form Events

It is possible to use JavaScript to help users fill in form controls. In this example, others form controls are presented to the user depending on the choises made:

- **When the input[type="radio"] is currently selected:**
```
if (event.target.checked) {
    // show additional field
} else {
    // hide additional field
}
``` 

Though, there is a important warning to be made here, that the JS is a enhancement, and the form should be reusable withou it:

`Make sure your form is still usable if JavaScript isn't available. The core experience should be the same for all users, with JavaScript used only as an enhancement.` [Web.dev](https://web.dev/learn/forms/javascript/#validation-with-javascript)


So, using **aria-controls** and **aria-expanded** to make screen readers understand that there are the hidden form controls in the page: [ARIA - MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)



###### Use JavaScript to Enhance Usability and User Experience 

In some cases it would be interesting to prevent some default feature, like a change in the page after the form submission and have the user still in the same page.


And in a broader note, it is possible to **stop the browser validation altogether** with these 2 options and then customize everything:
1. **novalidate**: with the 'form' element.
2. **formnovalidate**: with the submission of a button or a image.


For exemple, when the user is making comments at some page, the developer could use **onsubmit event** and **event.preventDefault()** to have the Fetch API to deal with the requisition.


- **An exemple of the JS script from [Web.dev](https://web.dev/learn/forms/javascript/#validation-with-javascript)**:
```
const formElement = document.querySelector('form');

if (formElement) {
    formElement.addEventListener('submit', (event) => {
        const formData = new FormData();

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
        event.preventDefault();
    })
}
``` 

`FormData is a set of key/value pairs representing form fields and their values. You can add all your form fields to the FormData object, or only send some form fields and their values.` [Web.dev](https://web.dev/learn/forms/javascript/#validation-with-javascript)


The [Web.dev](https://web.dev/learn/forms/javascript/#validation-with-javascript) even says that it is possible to make the Backend properly respond to each case of requisition, that is, from a **method="post"** or from a API like **fetch()**:

```
if (req.xhr || req.headers.accept.indexOf('json) !== -1) {
    // return JSON
} eles {
    // return HTML
}
``` 

And the site explains that there is even attributes for screen readers to 'politely' warns the user about the dynamic changes processed in the page: **aria-live="polite"**.


JavaScript can also be used to prevent the defaut errors messages from browsers, because of their generic pattern and also their lack of standartization. So, using the **setCustomValidity()** method from the **Constraint Validation API**.

Though, it is important to deal also with internationalization here if there is multi-language pages at the website.


And another interesting feature is to have real time validation. And here the site says that JavaScript could listen for the **blur** event which fires when the element loses focus, and then use **validityState** interface to detect if the data in the form control is invalid.


One other feature to help with usability would be to give the user the chance to see the passawords, since by default it is hidden from sight. So, here, it could be used a button to toggle the type of the input from **type="password"** to **type="text"**, and the other way around.


`It's important to make the Show Password button accessible. Connect the 'button' with the 'input' type="password" using the aria-controls attribute. [...] Caution: The aria-controls attribute is not supported by every screen reader, but for those that do support it, it's a great enhancement. [...] To notify screen reader users if the password is currently shown or hidden, use a hidden element with aria-live="polite", and change its text accordingly. It's important to enable screen reader users to know when a password is displayed and visible to someone else looking at their screen.` [Web.dev](https://web.dev/learn/forms/javascript/#validation-with-javascript)


```
<span class="visually-hidden" aria-live="polite">
    <!-- Dynamically change this text with JavaScript -->
</span>
```



### The DOM (general parts)

**COMING SOON**

[JavaScript DOM Crash Course - Traversy Media](https://www.youtube.com/watch?v=0ik6X4DJKCc&list=PLillGF-RfqbYE6Ik_EuXA2iZFcE082B3s)

[DOM Enlightenment - Cody Lindley](http://domenlightenment.com/)

[Understanding the DOM (Document Object Model) - DigitalOcean.com](https://www.digitalocean.com/community/tutorial_series/understanding-the-dom-document-object-model)









### Further Reading

[MDN plataform](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) 

[The Modern JavaScript Tutorial - Javascript.info](https://javascript.info/object)

[DOM Enlightenment - Cody Lindley - Domenlightenment.com](http://domenlightenment.com/)

[Adequately Good (decent programming advice) - Adequatelygood.com](https://www.adequatelygood.com/)

[Eloquent JavaScript - Marijn Haverbeke - EloquentJavascript.net](https://eloquentjavascript.net/)

[Vanilla JavaScript for building powerful web applications - Plainjs.com](https://plainjs.com/)

[How to Redirect Website from HTTP to HTTPS? - GeekFlare](https://geekflare.com/http-to-https-redirection/)



[]()


### References

[JavaScript Scoping and Hoisting - Adequatelygood.com](https://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)

[Handling Events - EloquentJavascript.net](https://eloquentjavascript.net/15_event.html)

[JavaScript Functions and Helpers - Plainjs.com](https://plainjs.com/javascript/)

[Objects - Javascript.info](https://javascript.info/object)

[JavaScript Function Parameters - W3schools.com](https://www.w3schools.com/js/js_function_parameters.asp)

[JavaScript Function Parameters - W3schools.com](https://www.w3schools.com/js/js_function_parameters.asp)

[The Complete Guide to HTML Forms and Constraint Validation - SitePoint](https://www.sitepoint.com/html-forms-constraint-validation-complete-guide/)

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

[^10]:javascript-object-oriented-programming-pattern-2022-07-24

[^11]:front-end-development-patterns-overview-2022-03-04

[^12]:front-end-architectures-2022-03-05

[^13]:software-architecture-patterns-overview-2022-02-18

[^14]:software-architecture-and-design-2022-02-22





