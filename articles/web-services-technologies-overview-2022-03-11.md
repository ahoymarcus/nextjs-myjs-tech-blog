---
author: 'Marcus Vinicius Richa'
title: 'Web Services Technologies - Overview'
date: '2022-03-11'
subject: 'web-dev-articles'
description: '.'
---

# Web Services Technologies - Overview

1. ##### Introduction  
2. ##### Universal Description Discovery and Integration (UDDI)
	2.1. History of UDDI   
	2.2. UDDI Elements   
	2.3. UDDI Technical Architecture   
	2.4. UDDI XML Data Schema/Model   
	2.5. UDDI Interfaces   
	2.6. UDDI with WSDL   
	2.7. UDDI Specifications
3. #####  Web Services Description Language (WSDL) 
	3.1. Features of WSDL   
	3.2. WSDL Usage   
	3.3. WSDL History   
	3.4. WSDL Elements
4. ##### 
5. ##### 
6. ##### 
7. ##### 
8. ##### 
9. ##### Further Reading
10. ##### References

### Introduction



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

(a) Bellow there is a exemple of the main structure of a WSDL document - [TutorialsPoint](https://www.tutorialspoint.com/wsdl/wsdl_elements.htm)
![example-of-main-structure-of-wsdl-document](/images/articles/web-development/example-of-main-structure-of-wsdl-document.png)













https://www.javatpoint.com/web-services-tutorial

https://www.tutorialspoint.com/soap/what_is_soap.htm

Padrões XML, XSLT, Universal Description Deiscovery and Integration (UDDI), Web Services Descriptioin Language (WSDL), Simple Object Access Protocol (SOAP) e JSON.
Tecnologias Web Services, REST e API RESTful.

### Further Reading

[WSDL Introduction - TutorialsPoint](https://www.tutorialspoint.com/wsdl/wsdl_introduction.htm)

[Web Services Tutorial - JavaTPoint](https://www.javatpoint.com/web-services-tutorial)

[SOAP Tutorial - TutorialsPoint](https://www.tutorialspoint.com/soap/what_is_soap.htm)

### References


[UDDI - TutorialsPoint](https://www.tutorialspoint.com/uddi/uddi_overview.htm)

[WSDL Tutorial - TutorialsPoint](https://www.tutorialspoint.com/wsdl/wsdl_introduction.htm)

[]()


