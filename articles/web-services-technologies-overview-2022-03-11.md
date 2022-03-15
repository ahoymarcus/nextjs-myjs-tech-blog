---
author: 'Marcus Vinicius Richa'
title: 'Web Services Technologies - Overview'
date: '2022-03-11'
subject: 'web-dev-articles'
description: 'Web Services are software systems that follow some standards, protocols and architectural patterns for applying interoperation between machine communications over the Internet or some other network. Some common types of web services are nowdays are SOAP web services, RESTful web services, and GraphQL web services.'
---

# Web Services Technologies - Overview

1. ##### Introduction 
2. ##### Web Services 
	2.1. Web Services Features   
	2.2. Web Service Granularity   
	2.3. Web Service Architecture   
	2.4. SOAP Web Services Overview   
	2.5. RESTful Web Services Overview   
	2.6. SOAP vs REST Web Services   
	2.7. Swagger  Overview  
	2.8. GraphQL Overview
3. ##### Universal Description Discovery and Integration (UDDI)
	3.1. History of UDDI   
	3.2. UDDI Elements   
	3.3. UDDI Technical Architecture   
	3.4. UDDI XML Data Schema/Model   
	3.5. UDDI Interfaces   
	3.6. UDDI with WSDL   
	3.7. UDDI Specifications
4. #####  Web Services Description Language (WSDL) 
	4.1. Features of WSDL   
	4.2. WSDL Usage   
	4.3. WSDL History   
	4.4. WSDL Elements 
5. ##### SOAP Protocol
	5.1. SOAP Features   
	5.2. SOAP Message Structure   
	5.3. SOAP Encoding
6. ##### GraphQL
    6.1. GraphQL Core Concepts     
    6.2. GraphQL  Architecture    
    6.3. Examples of GraphQL Architectures     
    6.4. GraphQL Clients     
    6.5. GraphQL Server
7. ##### Swagger Development Tools
    7.1. Basic Structure of the Swagger/OAS Specification    
    7.2. Available Sets of Securities     
    7.3. Some Examples of the Swagger / OpenAPI Specification (OAS)
8. ##### W3C Recommendations
9. ##### Further Reading
10. ##### References

### Introduction

There are different perspectives on how to define the context of the Web Services, while some focuses on the type of service provided, others on the technology used, but a interesting definition can be found at [TutorialsPoint](https://www.tutorialspoint.com/webservices/what_are_web_services.htm):

`A web service is a collection of open protocols and standards use for exchanging data between applications or systems. Software applications written in various programming languages and running on various platforms can use web services to exchange data over computer networks like the Internet in a manner similar to inter-process communication on a single computer. This interoperability (e.g. between Java and Python, or Windows and Linux applications) is due to the use of open standards`.


This definition is wilde enough to accomodate the differents contexts, technologies and types of sevice provided by a web service. And in summation, a couple of characteristics could be appointed:

- The use of a application architecture to allow communication between devices over the network.
- The definition of standards or protocol for the exchanging of the information between the devices or applications.
- Software systems that follow those same standards, protocols and architectural patterns for applying interoperation between machine communications. 



### Web Services

A web service as a system or a unit of managed code, it functions to expose fuatures (data or procedures) throgh HTTP requests so other applications can benefit from that functionality.

Also, the web service works to be multi-platform and technology independent, since it works to deliever communication independently of the kind of machines or systems involved.

Standatization is one of the forms that web services apply so that interoperability may be achieved.

And web services also apply to open source technology to lower the costs:

`Web services use SOAP over HTTP protocol, so you can use your existing low-cost internet for implementing web services. This solution is much less costly compared to proprietary solutions like EDI/B2B. Besides SOAP over HTTP, web services can also be implemented on other reliable transport mechanisms like FTP.`
[TutorialsPoint](https://www.tutorialspoint.com/webservices/why_web_services.htm)


Some common types of web services nowdays:

1. **SOAP web services**
2. **RESTful web services**
3. **GraphQL web services**


#### Web Services Features

- **XML-Based**: the use of XML at data description and data transportation layers, because XML excludes the necessity for networking, OS, or platform biding configurations and allows interopeability.
- **Loosely Coupled**: the connecitons between the dispostives or applications are not direct, and this layer of abstraction allows changes and innovations over time without the necessity of changes at the communication machines.
- **Coarse-Grained**: it's important to scale the web service architecture depending on the size of the company operation, because determining the API granularity will impact project deliverability, resource usage, deployment rollouts, application network complexity, etc. 
- **Supports Remote Procedure Calls (RPCs)**: the web services technologies allow consumers to invoke procedures, functions, and methods from remote systems that exposes input and output frameworks.
- ** Supports Documents Exchange**: web services support the transparent transfer of documents to facilitate business integration.



#### Web Service Granularity

| Property | Coarse-Grained APIs | Fine-Grained APIs |     
| -------- | ------------------- | ----------------- |      
| Reusability  | Low | High |     
| Scalability  | Low | High |     
| Security     | Scarse | Detailed |    
| Management Overhade | Low | High |    
| Performance  | Neutral | Neutral |     
| Latency | Single-point failure | Cumulative Latency |    
| Resource Usage  | Low | High |    
| Complexity   | Low  |  High |    
| Deployment   | Harder | Easier |    
| Agility  | Low | High |    
   
   
- read more:
- `Fine-grained APIs vs. coarse-grained APIs` [Horizontal.blog](https://horizontal.blog/2020/06/09/fine-grained-vs-coarse-grained-apis/#:~:text=In%20the%20tech%20world%2C%20granularity,large%20number%20of%20smaller%20components)


#### Web Service Architecture

There are two important points about a web service architecture:

1. **The individual roles of communication**  
	1.1. The provider  
	1.2. The Requestor   
	1.3. The service registry
2. **The service protocol stack**   
	2.1. The service transport layer: that currently can include protocols like HTTP, SMTP, FTP, and new protocols like Blocks Extensible exchange Protocol (BEEP), and HTTP is the most popular option.      
	2.2. The service messaging: which it is base on XML for data format and encoding, and could include applications like XML-RPC and SOAP.   
	2.3. The service description: this layer is responsible for describing the interface and currently is handled by Web Service Description Language (WSDL).   
	2.4. The service discovery: this layer is responsible for centralizing the services into a common registry and to provide a easy publish/find functionality, and currently this service is handled by Universal Description Discovery Integration (UDDI).


#### SOAP Web Services Overview

SOAP stands for Simple Object Access Protocol, and it is a XML-based protocol which is support by World Wilde Consortium (W3C).

- Besides, SOAP is also:
- Platform independent
- Software language independent.

- **Adavantages of SOAP web services**
- It defines its own security known as WS Security.  
- Platform and language independent.

- **Adavantages of SOAP web services**
- It's slower and consumes more bandwidth, since XML is bulkier and has to be parse and validated by the many standards.   
- It's dependent on the WSDL as a mechanism of discovery.    
- It's dependent on the WSDL as a mechanism of discovery.    


#### RESTful Web Services Overview

RESTful is a service that complies with the architecture style of Representational State Transfer (REST).

- **Adavantages of RESTful web services**
- It's fast, because it is free from many of the restrict specifications from SOAP, and consumes less bandwith.  
- It's platform and language independent.  
- It's permits a wilder possibility of data formats: Plain text, HTML, XML, JSON, etc.   
- It can use SOAP as a web service implementation.
- It can use SOAP as a web service implementation instead of the pure HTTP.


#### SOAP vs REST Web Services

| SOAP | REST |     
| ---- | ---- |        
| It's a protocol | It's a architectural style |    
| can't use REST | can use any protocol, even SOAP |   
| Exposes logic throgh interfaces | exposes logic through URI |     
| has strict standards | defines less standards |    
| requires more bandwidth | requires less bandwidth |    
| defines its own security | inherits security measures from the underlying transport layer |      
| allows only XML | allows differents data formats |     
| is less prefered then REST | is more preferred than SOAP |    


#### Swagger Overview

Swagger is a tooling ecosystem for developing APIs and it uses the OpenAPI Specificatio (OAS), which cosists of both open-source as well as professional tools. [Swagger.io](https://swagger.io/tools/open-source/getting-started/)

As a history development, this set of tools which includes from front-end user interfaces, to low-level codes labraries and commercial API management solutions was used as a ecosystem to implement APIs. Then in 2015, the [SmartBear Software](https://smartbear.com/) donated the Swagger Specification to the Linux Foundation, renaming the specification to the OpenAPI Specification.


###### The OpenAPI Specification
This is what was formely known as the Swagger Specification and it is an API description for REST APIs. Here, an OpenAPI file allows to describe the entire API:

1. **Available Endpoints**
2. **Available HTTP Commands** for each endpoint
3. **Operation Parameters Input and Output** for each operation.
3. **Authentication Methods**
4. **Contract information, license, terms of use** and other information.

And the specifications can be written either in YAML or JSON.


###### The Swagger Set Tools
It's a set of open-source tools built around the OpenAPI Specification that aims to help design, build, document, and consume REST APIs.

The three major Swagger tools:

1. **Swagger Editor**: a browser-based editor for editing OpenAPI specs.
2. **Swagger UI**: it renders the OpenAPI specs as an interative API documentation.
3. **Swagger Codegen**: generates server stubs and client libraries from an OpenAPI spec.


###### Why to Use OpenAPI
Some ways in which the tools set can help the development of REST APIs:

- Auto-generating a server stub from the specs.
- Creates client libraries for the API in over 40 languages.
- Generate interative API documentation in which the users can try out the API calls directly in the browser.
- Connecting API-related tools to the API implementation.


- Read more about Swagger general concepts:
- [ About Swagger](https://swagger.io/docs/specification/about/)
- [Getting Started](https://swagger.io/tools/open-source/getting-started/)



#### GraphQL Overview 

According to the site [JavaTPoint](https://www.javatpoint.com/graphql), GraphQL is a new API standard invented and developed by Facebook. It's an open-source server-side technology, and it's also an execution engine that works as a data language and used to fetch declarative data.

It was developed with the intent to optimize RESTful API, and in general terms it works providing only one endpoint to respond for the precise data that a client may ask for.     


###### History of GraphQL

- It has been used internaly by the Facebook since 2012, including in their native mobile apps projects.
- Then, in 2015 it was released public, and later in 2018 the whole project was moved from Facebook to a specific foundation named GraphQL Foundation, which was hosted by the non-profit Linux Foundation.    


###### GraphQL Features 
  
- It's cross-platform, open-source, data query, and manipulation language for APIs, and the GraphQL servers are available for multiple languages.    
  	
   
###### Advantages of GraphQL

- It can query for specific data to be returned from the connection.
- It can also query for data across many resources with a single request.
- The queries are human-readable.
- It facilitates to work efficiently with many databases.
- You don't face over fetching or under fetching of data when using GraphQL.
- It has a rich devopler tools and documentation available.    
	 
	  
###### Disadvantages of GraphQL
	
- GraphQL query complexity.
- GraphQL caching: it is more complicated to implement caching with GraphQL than with REST. Usually, it has to be done with libraries built on top of GraphQL to facilitate the process.
- GraphQL rate limiting: it is difficult to make this kind of specification with GraphQL, contrasting to REST where it can be easily set up to allow  only a limited amount of requests per day.        
	     
     	
###### read more about GraphQL:
- `javascript-apollo Tutorial - Introduction` [Howtographql.com](https://www.howtographql.com/graphql-js/0-introduction/)
- `React + Apollo Tutorial - Introduction` [Howtographql.com](https://www.howtographql.com/react-apollo/0-introduction/)
- `Introduction to GraphQL` [GraphQL Docs](https://graphql.org/learn/)
- `GraphQL Tutorial` [JavaTPoint](https://www.javatpoint.com/graphql)



### Universal Description Discovery and Integration (UDDI)

UDDI is a XML-based standard for describing, publishing, and finding web services. It's is an open industry initiative enabling business to discover each other and define how they interact over the Internet.

It's also platform independent which can communicate via SOAP, CORBA, Java RMI Protocol, and uses uses the Web Service Definition Language (WSDL) to describes the interfaces to web services.

The UDDI has two sections:

1. A registry of all web service's metada, including a pointer to the WSDL description of a service.
2. A set os WSDL port type definitions for manipulating and searching that registry.


#### History of UDDI

The UDDI 1.0 was originally announced by Microsoft, IBM, and Aribe in September 2000, and since then has grown to include more than 300 companies including Dell, Fujitsu, HP, Hitachi, IBM, Intel, Microsoft, Oracle, SAP, SUN, etc.

In May 2001, Microsoft and IBM launched the first UDDI operator sites and turned the UDDI registry live, and in June 2001, UDDI annouced version 2.0.


#### UDDI Elements

A business or a company can register three types of information into a UDDI registry:

1. **White Pages**: contains general descriptive information about the company    
	1.1. Basic information about the company and its business.   
	1.2. Basic contact information including business name, address, etc.  
	1.3. Unique Identifiers for the company tax IDs, which allows others to discover the business web service base upon the business identification.
2. **Yellow Pages**: contains technological information about the company.    
	2.1. Descriptions on the kind of electronic capabilities the company can oofer to anyone who wants to do business with it.   
	2.2. It uses commonly accepted industrial categorization schemes and, industry and products codes to help others search through the listings.
3. **Green Pages**: contains specific information about the web service and technical information that allows people to bind to the web service.   
	3.1. The various interfaces   
	3.2. The URLs locations   
	3.3. Discovery information and similar data required to find and run the Web service.


#### UDDI Technical Architecture

The UDDI architecture has 3 parts:

1. **UDDI Data Model**: the data model is a XML Schema for describing the business and web services.
2. **UDDI API Specification**: It's a specification of API for searching and publishing UDDI data.
3. **UDDI Cloud Services**: these are operator sites that provide implementations of the UDDI specification and synchronize all data on a scheduled basis.

![uddi-web-service-technology-01](/images/articles/web-development/uddi-web-service-technology-01.gif)

The UDDI cloud service is organized into public and privite registries, while the public registry is a centralized, but replicated service, the private registries may be set by large companies to represent its internal web services and it is not synchronized with the public registry.

#### UDDI XML Data Schema/Model

The XML Schema has to describe the following data structures:

1. **bussinesEntity**: this XML element represents the provider of the web service and it composes the root XML element.
2. **businessService**: this XML element represents a individual web service provided by the bussinesEntity.
3. **bindingTemplate**: this XML element forms the root element of a interface for a specific businessService element.   
	3.1. Note that a businessService element can be bind by multiple templates.   
	3.2. In this fashion, a businessService can specify different implementations  of the same web service, including present different set of protocols for them.
4. **tModel**: this XML element represents the technical model to describe others elements (business, service, templates, etc.) stored within the UDDI registry.
5. **publisherAssertion**: is a XML element responsible to structure relationships from two or more businessEntity.


- **note**: both the bussinesEntity and the businessService brings a unique key as metadata.


#### UDDI Interfaces

The UDDI 2.0 standard provides two kinds of interface, where one is set to the publisher and the other to the consumer.

1. **The Publisher Interface**: it has 16 operations to be defined for the provider to manage its entries in the UDDI registry.
1. **The Inquiry Interface**: it has 10 operations defined for searching the UDDI registry and retrieving details.


#### UDDI with WSDL

The UDDI data model is a generic definition to structure the business information the the services being published.

And the WSDL provides a more specific description to define web services.


#### UDDI Implementations

There are a number of currently available implementations for UDDI that make easier to by pass some of the complexities of the operation.

1. **Java**: has two implementations.   
	1.1. UDDI4J from IBM.   
	1.2. jUDDI is a open source implementation and a toolkit.
2. **Perl**: UDDI::Lite
3. **Ruby**: UDDI4e 
4. **Python**: the UDDI4Py package.	


#### UDDI Specifications

The UDDI project describes a set of specifications that documents operations to the UDDI version 2.0:

- **UDDI Replication**
- **UDDI Operators**
- **UDDI Programmer's API**
- **UDDI Data Structure**



###  Web Services Description Language (WSDL)

The WSDL is a stadard format for describing web services, which was developed jointly by Microsoft and IBM.


#### Features of WSDL
 
- It's a XML-based protocol for information exchange in decentralized and distributed environments.  
- It describes how to access a web service and what operations it will perform.  
- It's describes interfaces with XML-based services. 
- It's a integral part of the UDDI business registry as a description language for the web service.    
- WSDL is pronouced as 'wiz-dull' and spelled out as 'W-S-D-L'.


#### WSDL Usage

WSDL is often used in combination with SOAP and XML Schema to provide web services over the Internet, where a client program can connect to a web service and read the WSDL to determine what functions are available.

Afterwards, the client can use SOAP to actually call one of the functions listed in the WSDL.


#### WSDL History

In March 2001, WSDL 1.1 was submited as a W3C Note by Ariba, IBM and Microsoft.

The WSDL 1.1 hasn't been endorsed by the World Wide Consortium (W3C) yet, however it has been upgraded for version 2.0 to be remmended by W3C in its turn.

In June 2007, WSDL has finally received the W3C recommendation and received the approval as an official W3C standard.
[Infoq.com](https://www.infoq.com/news/2007/07/wsdl-2-recommendation/)


#### WSDL Elements

The WSDL language breaks down a web service into three specif elements:

1. **Types**: describes the inputs and outputs and how they are mapped into the service, but it's not required for XML Schema built-in simple types.   
	1.1. They can also be declared in separate for reusable purposes.
2. **Operation**: there are 4 basic patterns operations.  
	2.1. One-way operation   
	2.2. Request-response operation    
	2.3. Solicit-response operation   
	2.4. Notification operation
3. **Binding**: this element provides specific details on how a portType operation will actually be transmitted over the wire.   
	3.1. It allow transports including HTTP GET/POST and SOAP. 

`A WSDL document has various elements, but they are contained within these three main elements, which can be developed as separate documents and then they can be combined or reused to form complete WSDL files`.
[TutorialsPoint](https://www.tutorialspoint.com/wsdl/wsdl_introduction.htm)


- Some of the other smaller elements, including 2 utilities elements:
- **Definition**: it is the root element for all WSDL documents.
- **Message**: it web services provides two messages, one for input and another for output.
- **Port Type**: this element can combine multiple message elements to create a 'one-way' or 'round-trip' operation.
- **Port**: this element defines an individual endpoint by specifying a single, and not more than one address for a biding.
- **Service**: this element defines the ports supported by the web service. So, the service element isto become a collection of ports when there is more than one protocol available at the web service.
- **Documentation**: this is a utility element.
- **Import**: this is also a utility element.

[TutorialsPoint](https://www.tutorialspoint.com/wsdl/wsdl_elements.htm) - Bellow there is a exemple of the main structure of a WSDL document  
![example-of-main-structure-of-wsdl-document](/images/articles/web-development/example-of-main-structure-of-wsdl-document.png)


### SOAP Protocol

SOAP is an acronym for Simple Object Access Protocol, which is an XML-based messaging protocol for exchanging information among dispositives and applications.


#### SOAP Features

- It provides a communication protocol for networks.
- It can extend HTTP for XML messaging.
- It provides data transport, and eventhough HTTP is the prefered protocol, it can work with many other protocols: SMTP, FTP, IBM's MQSeries or Microsoft Message Queuing (MSMQ).
- It can exchange complete documents or even call remote procedures (RCP)
- It can be used for broadcasting a message.
- It's platform and language independent.


`Other frameworks including CORBA, DCOM, and Java RMI provide similar functionality to SOAP, but SOAP messages are written entirely in XML and are therefore uniquely platform- and language-independent.` [TutorialsPoint](https://www.tutorialspoint.com/soap/what_is_soap.htm)


#### SOAP Message Structure

The SOAP message is an ordinary XML document containing this elements:

- **Envelop**: its a mandatory element that start and finishes each message. And according to the site TutorialsPoint, this element applies also versioning flags. 
- **Header**: it contains optional attributes and metadata related to the processing message. Also, it can be used to provide features like digital signature or account numbers for services like pay-per-use SOAP services.
- **Body**: it's a mandatory element that contains the XML data comprising the message being sent.
- **Fault**: it's an optional element attribute that provides information about errors that occurs while processing the message.


[TutorialsPoint](https://www.tutorialspoint.com/soap/soap_message_structure.htm) - Bellow an example of the Structure of a SOAP Message
![example-of-main-structure-of-soap-document](/images/articles/web-development/example-of-main-structure-of-soap-document.png)


#### SOAP Encoding

The SOAP protocol includes a built-in set of rules for encoding data types, which even allow to specify typed multidimentional arrays.


#### SOAP Transport

SOAP has the HTTP protocol as the prefered transport set and as header-type configuration, it's the type **text/xml**.

Also, the SOAP responses delivered via HTTP are required to follow the prescribed guidance related to the HTTP status codes.


### GraphQL

According to site [Howtograph.com](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/), GraphQL came with the intent to bring flexibility to scene of web services, especially in turns of fetching data in comparison to the REST architecure.

So, in the way that a query for data works in the REST model implies fetching data in distributed URL endpoints, and bringing the whole set of data for each of these endpoint, so that later at the application level the different groups of data would filtered and composed to make the desired return for the client.

On the other hand, GraphQL would receive a single JSON pattern for querying purposes and then return the exact set of data desired, also in a JSON pattern.

In theirs of advantages for the GraphQL architecture is the fact that for setting the result, it is not necessary to go through those stages of filtering the data from each URL endpoint and later combining everything into the desired result.

A problem that the site describes as:

1. **Overfetching**: here the query hits a endpoint for a simple set result, but it is returned with the whole set of data present at the endpoint.
2. **Underfetching**: in this case, the query hits some endpoint, but the return is not sufficient for the query, and many individual queries have to be made to different endpoints  to amount for the whole requirements of the original query.
3. **Frontend Iterations**: meaning that changes at the frontend would need changes at the backend to better accomodate the queries.


Besisdes, states [Howtograph.com](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/) that the architectural style of GraphQL allows for simpler insightful analytics from the backend to measure the usefulness of the the data being returned by the queries, and thus to `gain a deep understand of how the available data is being used. This can for example help in evolving an API and deprecating specific fields that are not request by any clients any more`.


Finnaly, the site also states that there are great benefits in the use of a typed system where schemas and of types in GraphQL works as contract between client and server in the access of data, and that this can be achieved by the use of the GraphQL Schema Definition Language (SDL).

Thus, because a definitive schema for the data can be set ahead of the works, both frontend and backend teams can work in their separate ways, and also the frontend team gain the flexibility to apply testing to the data by mocking the required data structures.



#### GraphQL Core  Concepts

###### 1. The Use of Types
First, the GraphQL architecture uses a type system to define some scheme for the API, and the systax for it is called Schema Definition Language (SDL). An example of a type:

```
type Post {
    id: ID!
    title: Sring!
    authro: Person!
}

type Person {
    id: ID!
    name: String!
    age: Int!
    posts: [Post!]!
}
```

So, above there are two types with a relationship of 1-N, where the type Person has a array of the Posts type, and the exclamation point means that the attribute is required:


###### 2. The Query System
The query system of GraphQL uses one endpoint that is exposed while it deals with a flexible data structure for the query, what it is a different approach from REST where there is multiples endpoints each of them with their fixed data strutures.

The query has a systax that brings the choosen method at the root field and the desired data comes as a payload, which can be conveniently nested, just as it is possible to define additional arguments to the Schema and then make use of the in the query:


```
{
    allPersons(last:2) {
        name
        posts {
            tilte
        }
    }
}
```


When comes to the transformations of data (creating, updating and deleting), the syntax uses the key word **mutation**, and here the transformation is also returned in the payload, where the most important piece of infromation is the **id** attribute, since this one is a new information not already known by the frontend:

```
mutation {
    createPerson (name: "Bob", age: 36) {
        id
        name
        age
    }
}
```

###### 3. Messagery
The GraphQL architecture works with a message system of **Subscriptions**, that allows for the client to subscribes to events and to receive messages pushed from the server with the corresponding data from the event.

And the Subscription feature works in a similar fashion from queries and mutations:

```
subscription {
    newPerson {
        name
        age
    }
}
```

`After a client sent this subscription to a server, a connection is opened between them. Then, whenever a new mutation is performed that creates a new Person, the server sends the information about this person over to the client` [Howtograph](https://www.howtographql.com/basics/2-core-concepts/)

```
{
  "newPerson": {
    "name": "Jane",
    "age": 23
  }
}
```


Bellow, there is a full example Schema from [ Howtographql.com](https://www.howtographql.com/basics/2-core-concepts/) with the definitions for the types, for the queries. for the mutations and for the subscription:

![example-of-the-graphql-schema-01](/images/articles/web-development/example-of-the-graphql-schema-01.png)



#### GraphQL  Architecture

###### 1. Data Abstraction
The GraphQL layer allows for the abstraction of data from the client, so the client can deal with the queries/fetch in a declarative manner, what also simplify and diminish the client need of dealing with infrastructure.

- As the site says, in a normal flow of development, the client should comply with 4 steps:
1. **Construct and send HTTP request**
2. **Receive and parse server response**
3. **Store the data locally (either simply in memory or some persistent form)**
4. **Display the data in the UI**


- But, following the work flow with the GraphQL abstraction:
1. **Describe or declare the data requirements**
2. **Display data in the UI**


`This is precisely what GraphQL client libraries like Relay or Apollo will enable you to do. They provide the abstraction that you need to be able to focus on the important parts of your application rather than having to deal with the repetitive implementation of infrastructure.`[ Howtographql.com](https://www.howtographql.com/basics/3-big-picture/)


###### 2. The Resolver
This is the functionality that in the GraphQL server will be called by a query or a mutation which the sole purpose is to resolve the fetch of data for its field:

`When the server receives a query, it will call all the functions for the fields that are specified in the query’s payload. It thus resolves the query and is able to retrieve the correct data for each field. Once all resolvers returned, the server will package data up in the format that was described by the query and send it back to the client.`  [ Howtographql.com](https://www.howtographql.com/basics/3-big-picture/)


#### Examples of GraphQL Architectures

Still according to [ Howtographql.com](https://www.howtographql.com/basics/3-big-picture/), the GraphQL system has only been released as a specification, meaning that Graph would constitutes itself until this time as a `long document that describes in detail the behaviour of the GraphQL server`.

The site continues and presents then, three cases with different kinds of architecture which includes a GraphQL server:

1. **GraphQL server with a connected database**
2. **GraphQL server that is a thin layer in front of a number of third party or legacy systems and integrates them through a single GraphQL API**
3. **A hybrid approach of a connected database and third party or legacy systems that can all be accessed through the same GraphQL API**


###### 1. GraphQL Server with a Conected Database
This is a simpler architecture where there is a single (web) server that implements the GraphQL specification connecting a database.

And still according to the site  [Howtographql.com](https://www.howtographql.com/basics/3-big-picture/), the GraphQL system is **transport-layer agnostic**, meaning that it can work with any available transport protocol (TCP, WebSockets, etc.).


On the other side of the picture, GraphQL would also be indifferent with the kind  of the database being used, whether a SQL database or a No-SQL one.


###### 2. GraphQL Layer that Integrates Existing Systems
Here, again, the architecture of the implementation brings a GraphQL server that is placed as an abastract layer between the clients and the existing systems (Legacy system, Microservice, Third-party API, etc.), and that acts controling the accesses.

Once again, according to the site, the GraphQL system is indifferent to the kind of service it is dealing with the queries, and that it brings 2 major advantages:

- It unifyies and resolves complexities of dealing with many services, including legacy ones.
- It deals with the responsability of fetching data from the different systems and packaging it in the proper GraphQL response format.


###### 3.  Hybrid Approch with Connected Databases and Integration of Existing System
This third architectural type combine the previous two, where the GraphQL layer deal both a connection to a database, but also manages other systems connections as well:

`When a query is received by the server, it will resolve it and either retrieve the required data from the connected database or some of the integrated APIs`. [Howtograph.com](https://www.howtographql.com/basics/3-big-picture/)

![example-of-graphql-architecture-with-database-and-other-system](/images/articles/web-development/example-of-graphql-architecture-with-database-and-other-systems.png)


#### GraphQL Clients

Another interesting point that the [Howtograph.com](https://www.howtographql.com/advanced/0-clients/) site brings is the fact that there are two client solutions for the GraphQL development environment:

1. **Apollo Client**: from the open-source community as a client  for all the major development platforms.
2. **Relay**: a solution from the Facebook itself.


###### View Layer Integrations & UI Updates

Interesting to account that in this architecture, once the GraphQL server returns the response to the client there should be a update at the UI to display the new informations.

And the author of the site uses a React-JS example, explaining that in this JavaScript framework a client would be using the concept of Hier-Order Components to have the data fetched `under the hood and make it available in the props` for the components of the application. [Howtograph.com](https://www.howtographql.com/advanced/0-clients/)


- **Read more about High-Order Components in React-JS in this article:
- `High-Order Components` [¹]


###### Caching Query Results

This should be a important strategy to have potential data requests previously fetched available from cache. And one additional strategy that the site proposes is to have the data normalized.

This means that instead of having the whole JSON response cached as a big unit, it should be more beneficial according the author to decompose the data in its parts beforehand, that is flattening the JSON response, and caching the individual records to be referenced  with its globally unique ID.

- Read more about this strategy at:
- `GraphQL Concepts Visualized` [Apollo Blog](https://www.apollographql.com/blog/graphql/basics/the-concepts-of-graphql/)



#### GraphQL Server

As the site also explains, eventhough the GraphQL is described as a frontend-focused API, this system architecture obiviously integrates a backend data to query data, and as a development solution it enables the server developer to focus on describing the data available rather than implementing and optimizing specific endpoints.

Another feature to facilitate the implementation is to bring **default resolvers**, directed for single fields where the naming convention follows the correnct pattern, thus they don't need to be specified when the parent object of the resolver has the same field and with the correct name.

And the [site](https://www.howtographql.com/advanced/1-server/) also cites other strategies for optimizing queries by the GraphQL server.


#### GraphQL Security

Finally, the site [Howtograph.com](https://www.howtographql.com/advanced/4-security/) takes on the security problems, and states that very large queries can potentially bring the server down, doesn't matter they come from malicious intent or not.

Some features are used to try to order this problem:

###### Timeout
This stablishes a maximum time allowed for a query till the server finalises it:
1. Pros:      
    1.1. it's simple to implement       
    1.2. and that most strategies will still use timeout as a final protection.
2. Cons:     
    2.1. damage can already be done even when the timeout kicks in.     
    2.2. Sometimes hard to implement. Cutting connections after a certain time may result in strange behaviours.


###### Maximum Query Depth
This feature is important to tackle the problem of queries which goes way out the desired schema in terms of depth, or even cyclic graphs, planning wiht a abstract syntax tree (AST).

1. Pros:      
    1.1. Since the AST of the document is analyzed statically, the query does not even execute, which adds no load on your GraphQL server.      
    1.2. and that most strategies will still use timeout as a final protection.
2. Cons:      
    2.1. Depth alone is often not enough to cover all abusive queries. For example, a query requesting an enormous amount of nodes on the root will be very expensive but unlikely to be blocked by a query depth analyzer.


###### Query Complexity
Adding singular validation to each field could help the server to locate too expensive queries.

```
query {
  author(id: "abc") {    # complexity: 1
    posts(first: 5) {    # complexity: 5
      title              # complexity: 1
    }
  }
}
```

1. Pros:    
    1.1. Covers more cases than a simple query depth.    
    1.2. Reject queries before executing them by statically analyzing the complexity.
2. Cons:     
    2.1. Hard to implement perfectly.     
    2.2. If complexit is estimated by developers, how do we keep it up to date? How do we find the costs in the first place?     
    2.3. Mutations are hard to estimate. What if they have a side effect that is hard to measure, like queuing a background job.


###### Throttling
Because there are still some limitations on how to limit the operations by itselves, it would be possible to also throttle it by limiting resources for the clients.

This may happen, for example, when a user does a lot of medium size queries, that may amount for a lot of server resources as a whole, but individually doesn't meet the maximum limits.

In thoses cases, could be implemented limitations of server itme or of query complexity direct to the clients.

1. **Throttling based on server time**: would demand from the client some elapsed time to amount the necessary server time to execute more complicated queries.
2. **throttling based on query complexity**: the complexity is described to the individual query parts, but the limit is given to the client.

`We know that this query has a cost 3 based on complexity. Just like a time throttle, we can come up with a maximum cost (Bucket Size) per time a client can use. With a maximum cost of 9, our clients could run this query only three times, before the leak rate forbids them to query more. The principles are the same as our time throttle, but now communicating these limits to clients is much nicer. Clients can even calculate the costs of their queries themselves without needing to estimate server time!` [Howtograph.com](https://www.howtographql.com/advanced/4-security/)



### Swagger Development Tools

Public APIs and even internal ones, need to be properly documented in terms to be used by its clients, since they have to recognize the exposed endpoints, know the parameters they should use and also to know the authentication methods being used.

Remembering from previous points, a Application Programming Interface (API) is a definition or  a system to connect devices or application to trade information or data. And eventhough an API can be one of several types, the Swagger ecosystem works mainly with REST APIs.

In itself, the API Definition is a file that describes all the things that a client can do with the API, and it can be written using many data formats, like YAML, JSON, XML, etc.

It contains definitions like:

- The available requests URL addresses.
- The actions that are available in the service.
- The Inputs and Outputs related with each action present to the client.
- Describe the schema of the response, so the client application can handle the response and brings it to the UI.


### Basic Structure of the Swagger/OAS Specification

The specification files can be written using either YAML or JSON, and the metadata key words are case sensitive:

1. **OpenApi Version**: this is a required metadata
2. **Info Section**: it has 3 metadata attributes.   
    2.1. Title   
    2.2. Description: this one is optional. This is a multiline attribute that also accepts rich text representation with Markdown, and even limited HTML (see CommonMark - see [HTML Blocks](http://spec.commonmark.org/0.27/) in [Common 0.27 Specification](http://spec.commonmark.org/0.27/)).   
    2.3. Version: of the API definition
3. **Servers Section**: this is the base URL, and there can be provided multiple servers, including production, sandbox, etc.    
    3.1. Also, all API paths are relative to the base path.
4. **Paths Section**: this section brings the individual endpoints or paths   
    4.1. These paths a relative to the base URL.   
    4.2. In this section it is also used the HTTP methods/operations supported.
5. **Parameters subsection**: some HTP methods/operations may have parameters, which can be required or optional. And parameters can be passed via:   
    5.1. URL path: `/users/{userId}`   
    5.2. Query string: `/users?role=admin`   
    5.3. Headers: `x-CustomHeader: Value`   
    5.4. Cookies: `Cookie: debug=0)
6. **The requestBody subsection**: describes the body content of the message, and also media type, HTTP response code, etc.
7. **The responses subsection**: schemas can be defined inline or referenced via `$ref`. 
8. **Authentication Section**: bring the securitySchemes and security keywords to describe the authentication in the API.   

    
### Available Sets of Securities 
APIs can be set in some of the following ways:

1. **None**: it means that there is no kind of security to bar the API service from being accessed.
2. **Basic Auth**: it means that there the necessity to create username and password for the requests.
3. **API Key**: this is a token that is passed together with the client requisition as a necessary means to allow the connection to be set.
4. **OATH**: this is a authorization scheme.


Exemple of a authentication feature being describe:

```
components:
    securitySchemes:
        BasicAuth:
            type: http
            scheme: basic
security:
    - BasicAuth: []
``` 


### Some Examples of the Swagger / OpenAPI Specification (OAS)

###### An interesting example of an OAS file  [JavatPoint](https://www.javatpoint.com/swagger):

```
openapi: 3.0.0
info:
    title: Student API
    description: Student API by JavaTPoint
    contact:
        name: javatpoint
        url: http://javatpoint.com
    version: 1.0.0
server
    - url: http://devapi.com
paths:
    /student
        description: Student Resource
        get:
            description: Operation to fetch the Student data
            parameter:
            -in: query
             name: studentname
             required: true
             schema:
             type: string
             example: John
        responses:
            200:
            description: Successful Response
            content:
                application/json:
                    schema:
                        type: array
                        items:
                            properties:
                                Student ID:
                                type: integer
                                example: 1
                            Student Name:
                                type: string
                                example: Peter
                            Student Remarks:
                                type:string
                                example: High Grade Student
```

###### The Swagger Editor

The [Swagger editor](https://editor.swagger.io/) is a online tool for the OpenAPI Specification files.

![swagger-online-editor](/images/articles/web-development/swagger-online-editor.png)



### W3C Recommendations














### Further Reading

[Fine-grained APIs vs. coarse-grained APIs - Horizontal.blog](https://horizontal.blog/2020/06/09/fine-grained-vs-coarse-grained-apis/#:~:text=In%20the%20tech%20world%2C%20granularity,large%20number%20of%20smaller%20components)

[GraphQL Tutorial - JavaTPoint](https://www.javatpoint.com/graphql)

[What is GraphQL? - Medium.com](https://medium.com/devgorilla/what-is-graphql-f0902a959e4)

[Learn GraphQL - Howtographql.com](https://graphql.org/learn/)

[Swagger Documentation](https://swagger.io/docs/)

[Swagger tutorial - JavaTPoint](https://www.javatpoint.com/swagger)

### References

[Web Services Tutorial - JavaTPoint](https://www.javatpoint.com/web-services-tutorial)

[Web Services Tutorial - TutorialsPoint](https://www.tutorialspoint.com/webservices/what_are_web_services.htm)

[UDDI - TutorialsPoint](https://www.tutorialspoint.com/uddi/uddi_overview.htm)

[WSDL Tutorial - TutorialsPoint](https://www.tutorialspoint.com/wsdl/wsdl_introduction.htm)

[SOAP Tutorial - TutorialsPoint](https://www.tutorialspoint.com/soap/what_is_soap.htm)

[GraphQL Fundamentals - Howtographql.com](https://www.howtographql.com/basics/0-introduction/)

[Basic Structure - Swagger](https://swagger.io/docs/specification/basic-structure/)



[¹]:high-order-components-2022-01-29


