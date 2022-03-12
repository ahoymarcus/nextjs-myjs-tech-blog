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
	2.7. Swagger    
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
7. ##### 
8. ##### 
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


#### Swagger



















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
	     
     	
- read more about GraphQL:
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









https://www.howtographql.com/basics/1-graphql-is-the-better-rest/

https://graphql.org/learn/

Conhecimento da linguagem GraphQL e Swagger.
Recomendações W3C. 

### Further Reading

[Fine-grained APIs vs. coarse-grained APIs - Horizontal.blog](https://horizontal.blog/2020/06/09/fine-grained-vs-coarse-grained-apis/#:~:text=In%20the%20tech%20world%2C%20granularity,large%20number%20of%20smaller%20components)

[GraphQL Tutorial - JavaTPoint](https://www.javatpoint.com/graphql)

[What is GraphQL? - Medium.com](https://medium.com/devgorilla/what-is-graphql-f0902a959e4)

### References

[Web Services Tutorial - JavaTPoint](https://www.javatpoint.com/web-services-tutorial)

[Web Services Tutorial - TutorialsPoint](https://www.tutorialspoint.com/webservices/what_are_web_services.htm)

[UDDI - TutorialsPoint](https://www.tutorialspoint.com/uddi/uddi_overview.htm)

[WSDL Tutorial - TutorialsPoint](https://www.tutorialspoint.com/wsdl/wsdl_introduction.htm)

[SOAP Tutorial - TutorialsPoint](https://www.tutorialspoint.com/soap/what_is_soap.htm)

[]()


