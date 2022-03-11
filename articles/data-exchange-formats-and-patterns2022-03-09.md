---
author: 'Marcus Vinicius Richa'
title: 'Data Exchange Formats and Patterns'
date: '2022-03-09'
subject: 'development-articles'
description: 'Network communiction has made message-based exchange between applications a routine job, allowing for a much more diverse job of exchanging data and even the possibilities of realtime scenarios. So there is the necessity to define elements of architectural patterns, data formats and communication protocols, so the procedure can be properly achieved.'
---

# Data Exchange Formats and Patterns

1. ##### Introduction  
2. ##### Data Exchange Patterns
3. ##### Types of Data Exchange Applications 
	3.1. Application Programming Interface (API)  
	3.2. Extract, Transform, and Load (ETL)   
	3.3. File Transfer     
	3.4. Remote Procedure Call      
	3.5. Event Based/Brokered Messaging      
	3.6. Data Streaming
4. ##### Some Considerations in Selecting a Data Exchange Approach
	4.1. Data Set Characteristics    
	4.2. Data Environment Characteristics   
	4.3. Scope Constraints   
	4.4. Organization Considerations   
	4.5. Consumer Characteristics  
5. ##### Data Formats
	5.1. Binary Based Formats   
	5.2. CORBA   
	5.3. CSV 
	5.4. Google Protocol Buffers, Avro, Thrift   
	5.5. JSON   
	5.6. Plain Text Format     
	5.7. Text-Based Formats   
	5.8. XML   
	5.9. YAML
6. ##### Transfer Protocols
	6.1. APIs that are confused with protocols   
	6.2. AFTP (Accelerated File Transfer Protocol)  
	6.3 AMQP   
	6.4. AS2 (Applicability Statement 2)   
	6.5. File sharing protocol (CIFS/SMB and NFS)  
	6.6. FTP (File Transfer Protocol)    
	6.7. FTPS (FTP over SSL)  
	6.8. HTTP (Hypertext Transfer Protocol)   
	6.9. HTTPS (HTTP over SSL)      
	6.10. LDAP   
	6.11. SCP (Secure Copy)   
	6.12. SFTP (SSH File Transfer Protocol)   
	6.13. WebSocket
7. #####  
8. ##### 
9. ##### Further Reading
10. ##### References

### Introduction

According to the [Harvard](https://enterprisearchitecture.harvard.edu/data-exchange-mechanisms) platform, traditionally the exchange of data was done transfering files.

But now days, network communiction has made message-based exchange between applications a routine job, and also the web and cloud infrastructure have allowed for a much more diverse job of exchanging data in such a capacity that data format could be even thought in terms of the context job interaction.

And that platform even lay the ground for what would be necessary towards synchronous realtime web exchanges:

1. Re-tooling of the organizations.
2. Selection preference for vendors that support these new approaches.


### Data Exchange Patterns

As it is presented at Harvard.edu, a data exchange pattern is composed by three elements:

1. **An architectural pattern**
2. **A data format**
3. **A communication protocol**


But these solutions are not fixed, eventhough many times the combinations can be recurrent, for example the traditional set used with the **RESTful APIs**:

- Representation State Transfer architectural style    
- JavaScript Object Notation (JSON)    
- HTTPS protocol


### Types of Data Exchange Applications

#### Application Programming Interface (API)  

The API applications uses the web and the HTTP protocol to provide interoperability between disparate applications, and the most common are:

- **SOAP**: this are official standards from the World Wide Web Consortium (W3C), and they send messages using HTTP and Simple Mail Transfer Protocol (SMTP).   
- **REST**: this one is not a protocol, but an architectural style that set some rules fo RESTful web services. For example, the use stateless transfers and HTTP codes.     
- **GraphQL**: this one is also a architectural design, but that also includes a query and manipulation language and a associated runtime.

#### Extract, Transform, and Load (ETL)   

This procedure is a direct connection from a application to the database, that adds batching, transformation and scheduling tools to the data transfer (reads and writes).

#### File Transfer     

These are transfers via files exchange that can be in many text-based or binary formats, just like JSON, XML, CSV, etc.
 

#### Remote Procedure Call      

A computer program causes a procedure to execute in a different address space (commonly on another computer on a shared network).

As the article [Remote Procedure Call (RPC)](https://www.techtarget.com/searchapparchitecture/definition/Remote-Procedure-Call-RPC#:~:text=Remote%20Procedure%20Call%20is%20a,systems%20like%20a%20local%20system) at the site Techtarget.com states:

`Remote Procedure Call is a software communication protocol that one program can use to request a service from a program located in another computer on a network without having to understanding tht network's detais. RPC is used to call other processes on the remote systems like a local system. A procedure call is also sometimes known as a function call or a subroutine call`.[Techtarget.com](https://www.techtarget.com/searchapparchitecture/definition/Remote-Procedure-Call-RPC#:~:text=Remote%20Procedure%20Call%20is%20a,systems%20like%20a%20local%20system)


In terms of architecture, the system works the client-server mode, where the requesting program is the client, and the service-providing is the server, and the procedure in itself is a synchronous operation that requires the requesting program to be suspended until the remote procedure finishes.

The Techtarget.com site adds that lightweight designs that processes in parallel or threads could benefit from the use of multiple RPCs to be performed concurrently.

Another interesting point is that the application programming interfaces for RPCs traditionally use the **Interface Definition Language (IDL)** to describe the software components.

- **Steps in the RPC process**:
1. The client calls the **client stub**. This call is a local procedure which goes to the stack just in a ordinary way.
2. The client stub packs the procedure parameters (that is called `marshalling`) and messages the local OS.
3. The **local OS** messages the remote server.
4. The **server OS** passes the incoming packets to the **server stub**.
5. The server procedure does unpacks the parameters (called `unmarshalling`).
6. Once finished the remote procedure, the server stub marshals the return values and messages its own OS.
7. The remote OS messages the client OS that resends it to the client stub.
8. The client stub unmarshalls the return parameters, and execution returns to the caller.

- **note**: a `stub` is a small program routine that substitutes for a longer program, possibile to be loaded later, etc.

`RPC spans the transport layer and the application layer in he Open Systems Interconnection (OSI) model of network communication. RPC makes it easier to develop an application that includes multiple programs distributed in a network.` 
[Techtarget.com](https://www.techtarget.com/searchapparchitecture/definition/Remote-Procedure-Call-RPC#:~:text=Remote%20Procedure%20Call%20is%20a,systems%20like%20a%20local%20system)


- **Advantages of the RPC**
- Helps clients communicate with servers via the traditional use of procedure calls in high-level languages.   
- Can be used in a distributed environment, as well as the local environment.  
- Supports process-oriented and thread-oriented models.   
- Hides the internal message-passing mechanism from the use.  
- Requires only minimal effort to rewrite and redevelop the code.   
- Provides abstraction, i.e., the messate-passing nature of network communication is hidden from the user.   
- Omits many of the protoco layers to improve performance.
   
   
	  
- **Disadvantages of the RPC**
- The client and server use different execution environments for their respective routines, and also uses different resources, impling that the systems aren't always suited for tranfering large amounts of data.   
- RPC is highly vulnarable to failure because it involves a more layers to the architecture: the communication system, the machines and all ist processes.  
- There is no uniform for RPC.   
- RPC is ony interatcion-based, and as such, it doesn't offer any flexibility when it comes to hardware architecture.


#### Event Based/Brokered Messaging      

An application creates a message containing data and gives it to a service to deliever.

This method often requires technical components to manage queueing and caching, and rules related for messaging, as publisher, or as subscriber.

#### Data Streaming

Here, there is a continous chain between some source transfer and a receiving process.

It's a sequential ingestion of data that composes a incremented data record.


### Some Considerations in Selecting a Data Exchange Approach

As states the Harvard.edu document, the reason for the exchange of data may vary and change with time, and also may not resort in just 'one size fits all' solution.

Although, some characteristics would help to balance the advantages and disadvantages of a method:

1. **Data Set Characteristics**  
2. **Data Environment Characteristics**  
3. **Scope Constraints**
4. **Organization Considerations**
5. **Consumer Characteristics**

#### Data Set Characteristics

1. **Data complexity**: relates not only in terms of multitude of related data elements, but also in terms of a predefined or not set of properties.      
	1.1. In the case of a more complex and a more diverse data set, a **direct database access** should be the most effective.  
	1.2. In the cases of a set of a more structured set of data a **API service** could be a effective idea.
2. **Frequency of data update**: the frequency of data update can bring a substantial overhead, so for these cases more automated methods like APIs and Messaging could be a better choise.
3. Data size: large data sets usually requires **file transfer** or **direct database connection**.

#### Data Environment Characteristics

1. **Data flows and breadth of solution**:  
	1.1. Message Broker: this kind of application uses a middleare architecture to mediate 1-1, 1-N, and N-M interactions, and can work effectively with large, asynchronous, and highly performant transfers.   
	1.2. Data streaming: this one could be a good choise for a large number of data sources continuously transfering data.
2. **Frequency of data usage**: if it is necessary most up-to-date data or even live data, some form of synchronous procedure call or API would resolve better.
3. **Data versions**: for the cases where the data provided needs to be delivered in different versions or schemas, a solution with API should not be the better choise, because the Havard.edu doc states that multiple schemas or versions in a single API would be complex and would often accrued technical debt within a codebase.
4. **Data security**: this one seems to be another point where the use of APIs should be seem with the proper care, because all the security controls fro this type of data service comes externaly from other applications like authentication, or from databases, or from the file server own security controls.
5. **Data transformation complexity**: as it was said before, a high complexity demand from data transformation would be be suited with direct database connection. But milder cases could be tackled by a API.
6. **Connectiion persistence**: in relation to the duration of the connections, **long-lived protocols** would fit better to be opened indefinitely. While **short-lived protocols** have some kind of session time frame.
	6.1. For long-lived procols, one example could be the WebSocket Protocol.   
	6.2. And for short-lived protocols there are HTTP, among others.


#### Scope Constraints

Constraints are requirements present in any kind of project, so for a data exchange one things wouldn't be different.

At the highest level, the Harvard.edu doc cites the **Scope Triangle** of:

1. **Time**
2. **Cost**
3. **Quality**

Interesting also to notice that these 3 basic constraints may be linked in a way that a change at one may cause correlated change at another, for example, reducing Time would on the other side represent lower Quality or a higher Const.

Other constraints could be:

4. Available Technical Skills
5. Business Strategies
6. Organization Culture


#### Organization Considerations

In terms of the organizations involved with data exchange projects, the Harvard.edu presents a case of some of their own efforts to design a viable project.

Firstly, the site presents the challenges that are involved in such speciffic cases where there are the necessitity to integrate multiple and diverse point of exchange:

`integrate data within and across multiple business units[...]Unfortunately, because each of these approaches requires detailed knowledge of the operational database or application involved, they are tightly coupled and difficult to change. More importantly, as the number of individual point-to-point exchanges grow, the overall environment becomes increasingly complex and difficult to manage over time. Database links in particular are normally created and maintained by external groups. Wide use of this approach can lead to a substantial access management burden. While there are circumstances in which point-to-point custom integrations are appropriate, they should be carefully considered as they are difficult to evolve based on changing requirements.`[Harvard.edu](https://enterprisearchitecture.harvard.edu/data-exchange-mechanisms)

So, in this case presented by the institution, the thight coupled solutions using **file transfer**, **direct database** and **remote procedure calls** implyed a overhead of manual integrations, just as high access rates.

On the other hand, the site assumes that a solution more alligned with Broke Messaging and Web Services could easily coupe with the effort to support a wider enterprise of data integration.

Also, this last solution could help to bring some isolation from different contexts in terms of the use of the database support.


#### Consumer Characteristics 

1. **Human beings and front-facing applications**: the docs observes that depending on the context of the personel related to the data exchange different solutions could be thought:  
	1.1. Where there are basic and common tools available, **text files** like CSV could be a practical solution.   
	1.2. For developers, **APIs** should be a upgrade, implementing besides the text based returns, but also hypermedia, etc.   
	1.3. But systems that could be exchanging with private data, and also back-end services, demands for more security could bring the caso to applications like **Remote Procedure Call (RPC)**.
2. **Receiving system processes**: the systems already in excution can orient the design of a solution for data exchange that it is not always the most convinient way, and to cost/benefit to bring a different solution could be impractical.
3. **Usage by the receiving system**: in this case here, the objective is to observe the kind of use the data being exchanged plays.   
	3.1. Data being used to support some speciffic feature or need, could use from a API service in a effective way.   
	3.2. On the other hande, data being used to provide foundation for a platform or for a reporting system, could effectively rely on a file transfer or a database method.


**An interesting summary from the Harvard.edu docs**

![table-with-data-exchange-information](/images/articles/development/table-with-data-exchange-information.png)


### Data Formats  

#### Binary Based Formats

The primary advantage to binary formats is speed, because their encoding are typically 10x to 100x faster than text-coded codecs.


#### CORBA

The Common Object Request Broker Architecture or CORBA was designed to provide communication with complex data objects between different systems.

It is more than just a binary format, because it includes protocol and architecture standards.

- **Advantages**    
- Language and operating system independent.   
- Compact data representation.  
- Built in mapping in Java covers almost all features.   
- Open-source versions are available.


- **Disadvantages**    
- Complex, difficult learning curve.   
- Not well supported by OS vendors.  
- Difficult to use ir a server and/or client is behind a firewall or if network address translation is being used.


#### CSV

The Comma Separated Values format is a text based format that store information in rows and that uses commas to separate the values in a row.

And although the **C** in CSV stands for comma, there are good reasons to use semicolons to delimit fields one from another.

First, because is some countries comma is already used as a decimal separator.

Also, semicolons make more sense to be used as separator because they are less likey to occur in ordinary text than commas.


- **Advantages**    
- This is probably the most common import and export format for databases and spreadsheets.


- **Disadvantages**  
- They are not self-describing, especially the data types. Thus, if CSV files are exchanged between multiple parties, the data types of each field needs to be communicated separately.   
- This format may stumble with the use of comma separated values or with localization routines.   
- CSV cannot be annotated with comments. 

#### Google Protocol Buffers, Avro, Thrift

Protocol buffers and similar products are language-neutral, platform-neutral, extensible mechanisms for serializing structured data.

- **Advantages**    
- Very compact representation, approaching theoretical maximum.  
- Tools for many languages.   
- Not sensitive to version changes.    
- Include schemas and generated documentation.


- **Disadvantages**    
- Not readable or editable by developers.   
- Yer another data definition syntax to learn.

#### JSON

JSON is a language-independent data format. It was derived from JavaScript, but many programming languages include code to generate and parse JSON-format data.

- **Advantages**   
- Readable and editable by developers, easily consumed by web browsers.  
- Simpler than XML.  
- Supported by highly developed browser toolkits such as JQuery. 


- **Disadvantages**   
- Bulky text with low playload/formating ratio, but not as bad as XML.  
- Client CPU time required to parse.   
- Not as flexible as XML for some data structures and binary data.


#### Plain Text Format

Some types of data are easily represented as single elements with a line structure.

- **Advantages**    
- Readable and editable by developers.   
- Fairly compact representation for simple types.  


- **Disadvantages**  
- Possible confusion introduced by punctuation in values.  
- Limited to very simple structures.   
- Is inherently 'flat' and cannot easily represent hierarchical data.


#### Text-Based formats

These ones have the advantage of having a human redability.



#### XML

This is a flexible text format, that can store data in a hierarchical form and tha can be graphically presented in a tree like model. 

- **Advantages**   
- Readable and editable by developers.  
- Error checking by schema and Document Type Definition (DTD).   
- Can represent complex hierarchies of data.  
- Unicode gives flexibility for international operation.   
- Plenty of tools in all computer languages for both creation and parsing.   
- Supoort Namespace to avoid name conflicts.
  
  
- **Disadvantages**   
- Bulky text with low payload/formating ratio.   
- Both creation and client-side parsing are CPU intensive.   
- Some common word processing characters are illegal.   
- Images and other bynary data require extra encoding.


**XML Supersets**

Just like HTML works in synchrony with CSS, XML has also relates to some languages that provides some supersets elements.

**XSL** is the EXtensible Stylesheet Language which is a styling languge for XML and it will specify how a browser should render an XML document.

The XSL document is composed by different parts that will present the whole set of definitions to a XML stylization.

- **XSLT**: this is XSL Transformation, and it is used to transform XML documents into other documents formats, just like transforming a XML documento into a HTML document.
- **XPath**: it's the language for defining the navigation in an XML document.
- **XQuery**: it's the language for querying in an XML document.
- **XSL-FO**: it's the laguage for formatting an XML document.


**Advantages of XSLT Language**

- It provides an easy way to merge XML data into presentation because it applies user defined transformations to an XML document and the output can be HTML, XML, or any other structure document.
- It provides XPath to locate elements/attributes within an XML document, as it is a more convinient way to trasverse an XML document than by the using of scripting language.
- It's template based, so it is more resilient to changes in documents than low level DOM and SAX.
- By using XML and XSLT, the application UI script will look clean and will be easier to maintain.
- XSLT templates are based on XPath pattern which is very powerful in terms of performance to process the XML document.
- It can be used as a validation language as it uses tree-pattern-matching approach.
- The output can be changed by simply applying modification to the transformations in the XSL files.


- **note**: ` online algorithm for parsing XML documents, with an API developed by the XML-DEV mailing list. SAX provides a mechanism for reading data from an XML document that is an alternative to that provided by the Document Object Model (DOM)`.
[Simple API for XML - Wikipedia](https://en.wikipedia.org/wiki/Simple_API_for_XML#:~:text=SAX%20(Simple%20API%20for%20XML,Document%20Object%20Model%20(DOM).)



[JavaTPoint](https://www.javatpoint.com/xslt-syntax) - Bellow there is an example of a template to transform a simple XML document into a HTML table renderization:

The XML document brings employee information arranged in a XML element with 04 child elements each: 

```
<?xml version="1.0"?>
<class>
	<employee id="001">
		<firstname>Aryan</firstname>
		<lastname>Gupta</lastname>
		<nickname>Raju</nickname>
		<salary>30000</salary>
	</employee>
	<employee id="024">
		<firstname>Sara</firstname>
		<lastname>Khan</lastname>
		<nickname>Zoya</nickname>
		<salary>25000</salary>
	</employee>
	<employee id="056">
		<firstname>Peter</firstname>
		<lastname>Symon</lastname>
		<nickname>John</nickname>
		<salary>10000</salary>
	</employee>
</class>
```

![example-of-main-structure-of-xslt-document](/images/articles/web-developement/example-of-main-structure-of-xslt-document.png)


- **XSLT Tags**
1. **<xsl:value-of> element**: this element extracts the value of a specific XML node.   
	1.1. In the exemple above it was use to extract the values with the employee information for 'id', 'firstname', 'lastname', 'nickname' and 'salary'.
2. **<xsl:for-each> element**: this element is used to apply a repetition loop for some node.   
	2.1. In the example above, this XSL element was used to loop through a `tr` and `td` HTML elements to complete the table with employee information.
3. **<xsl:sort> element**: this element can be used to specify a sort criteria on the nodes.  
	3.1. In the above example, it could be used to sort the HTML table output by the lastname. Something like, **<xsl:sort select="lastname" />**.
4. **<xsl:if> element**: this element is used to specify a conditional test against the content of the XML file.   
	4.1. In the above exemple, this element could be used to test a salary condition like **<xsl:if test='salary > 30000'>...</xsl:if>** to be rendered in the output. 
5. **<xsl:choose> element**: this element, together with the child elements **<xsl:when test="condition"></xsl:when>** and **<xsl:otherwise></xsl:otherwise>**, states a 'if/else' contition type. 	
6. **<xsl:key> element**: this element is used together with the key() function in XPath to access the assigned elements in a XML document.  	
7. **<xsl:message> element**: this element fucntion like a JavaScript console.log() function used for debugging reasons.  
	7.1. In the example above, this element could be used to create a test to validate for empty string value and then prints a message/log: **<xsl:message terminate="yes">A first name field is empty</xsl:message>**
8. **<xsl:apply-template> element**: it is used to tell XSLT processor to find the appropriate template to apply according to the type and context of each selected node.
9. **<xsl:import> element**: it is used to import the content of one stylesheet to another stylesheet. The importing stylesheet has higher precedence over imported stylesheet.

	
#### YAML

It's name stands for Yet Another Markup Language or even Ain't Markup Language.

It's a text data format commonly used for configuration files, that uses indentation to define its structure.

And it's a primary language with Docker.

`YAML is the superset of JSON. You heard it right. Whatever valid JSON code you have, it will be parsed by YAML compiler. So choosing YAML over JSON for your project you have one advantage. You can parse both JSON and YAML code with the single parser (YAML parser).`
[csestack.org](https://www.csestack.org/advantages-disadvantages-yaml/)


- **Advantages** 
- Human readable.   
- More compact than JSON or XML.      
- Portable between programming languages.  
- Unicode character support.   
 
- **Disadvantages**   
- It has some difficulties while working with spaces and indentations.   
- It has a complex syntax and it's very complex to reprent configuration in the hierarchi of data.
    
    
- read more about YAML:
- [YAML - Tutorials
 - W3schools.io](https://www.w3schools.io/file/yaml-introduction/)



### Transfer Protocols

#### APIs that are confused with protocols

The Harvard.edu docs on data exchange points out that certain tools are sometime mistaken with protocols, and give the Java Database Connectivity (JDBC), the the Open Database Connectivity (ODBC), and the Amazon S3 as examples.

The JDBC and the ODBC are more properly described as APIs to access database servers, where the first one is dependent on Java language, and the ODBC is language independent.

The Amazon S3 is a service that offers object storage through a web sevice interface.

 
#### AFTP (Accelerated File Transfer Protocol)

The Accelerated File Transfer Protocol (AFTP) is a hybrid protocol that uses TCP and UDP to cope with great distances while maintain the exchange without degrading.

This is different from what is seem with `WAN file transfers, especially those carried out over great distances, are easily affected by poor network conditions like latency and packet loss, which result in considerably degraded throughputs`. 
[Harvard.edu](https://enterprisearchitecture.harvard.edu/data-exchange-mechanisms)


#### AMQP

The Adavanced Message Queuing Protocol (AMQP) is an open standard for passing messages between applications or organizations.

It supports queuing and rounting (including point-to-point and publish-and-subscribe) and offers authentication and encryption by way of Simple Authentication and Security Level (SASL) or Transport Layer Security (TSL), relaying on a transport protocol such as TCP.


#### AS2 (Applicability Statement 2)

The Applicability Statement 2 (AS2) `is a specification about how to transport structured business-to-business data securely and reliably over the Internet. Security is achieved by using digital certificates and encryption`.
[AS2 - Wikipedia](https://en.wikipedia.org/wiki/AS2) 

AS2 is built for EDI (Eletronic Data Interchange) transactions, the automated information exchanges normally seem in the manufacturing and retail industries. And EDI is now also used in healthcare, as a result of the HIPAA legislation.

Although much of the protocols that relates to data exchange are capable of supporting B2B exchanges, there are few protocols that are really designed specifically for such tasks, just as AS2 is. 


#### File sharing protocol (CIFS/SMB and NFS)

The Server Message Block (SMB) protocol is a network file sharing protocol, and as implemented in Microsoft Windows is known as Microsft SMB Protocol.

The Common Internet File System(CIFS) is a dialect of SMB.

The Network File System (NFS) is a protocol developed by Sun Microsystems and serves essentially the same purpose as SMB, for example, to access files systems over a network as if they were local. Thus, it is incompatible with CIFS/SMB, and cannot speak directly to SMB servers.


#### FTP (File Transfer Protocol)

The File Transfer Protocol (FTP) is built for both single file and bulk file transfers. 

It's a weak security model, and in particular should not be used with Health Insurance Portability Accountability (HIPAA), Payment Card Industry - Data Security Standard (PCI-DSS), Sarbanes-Oxley Act (SOx), Gramm-Leach-Billey Act (GLBA), EU data, etc.


#### FTPS (FTP over SSL)

This is the secure counterpart for file trasfer protocol, that retains all the gain of FTP plus the security features of Secure Socket Layer (SSL), including data-in-motion encryption, and client-server authentication.

`Because FTPS is based on FTP, you'll still be subjected to the same firewall issues that come with FTP.`
[Harvard.edu](https://enterprisearchitecture.harvard.edu/data-exchange-mechanisms)


#### HTTP (Hypertext Transfer Protocol)

The Hyper Transfer Protocol is the underlying protocol of the Internet. It's an application layer protocol that is sent over the TCP layer, though any reliable transport protocol could theoretically be used.

HTTP is less prone to firewall issues than FTP, however by itself this protocol is inherently insecure and incapable of meeting regulatory compliance or securing data.


#### HTTPS (HTTP over SSL)

HTTPS is the extension of the Hypertext Transfer Protocol, and it is encrypted using a Trasport Layer Security (TSL), or, formely, its predecessor, the Secure Sockets Layer (SSL).

This protocol can also be refered as HTTP over TSL or HTTP over SSL, and it's mandatory for all US Government web sites.


#### LDAP

The Lightweight Directory Access Protocol (LDAP) is a standards-based protocol used to access and manage direcory information. 

It reads and edits directories over IP networks and runs directly over TCP/IP using simple string formats for data transfer.

And the LDAP protocol is independent of any particular LDAP server implementation.


#### SCP (Secure Copy)

The Secure Copy (SCP) is a more primitive version of the SFTP. It also runs on SSH, so it already comes with the same security features.

`The only instance you'll probably need SCP is if you'll be exchanging files with an organization that only has a legacy SSH server`
[Harvard.edu](https://enterprisearchitecture.harvard.edu/data-exchange-mechanisms)


#### SFTP (SSH File Transfer Protocol)

The SSH File Transfer Protocol (SFTP) is a protocol based on the network protocol SSH (Secure Shell), and unlike both FTP and FTPS, SFTP uses only one connection and encrypts both authentication information and data file being transfered. 

The main advantage of SFTP is that it'a more firewall-friendly.


#### WebSocket

This is a full-duplex communication channels over a single TCP connection, and eventhough it is a differnt protocol from HTTP, the RFC 6455 states that WebSocket is designed to work over the HTTP ports 80 and 443 as well as to support HTTP proxies and intermediaries.

WebSocket, just like HTTP, is located at the layer 7 in the OSI model, and it is dependent on the TCP from the 4 layer.

The WebSockets provides a `standardized way fot the server to send content to the client without being first requested by the client and allowing messages to be passed back and forth while keeping the connection open. In this way, a two-way ongoing conversation can take place between the client and the server`.
[Harvard.edu](https://enterprisearchitecture.harvard.edu/data-exchange-mechanisms)


























https://en.wikipedia.org/wiki/Aspect-oriented_programming

Padrões Advanced message Queuing protocol AMQP e Aspect Oriented Programming?? AOP. 
Conhecimento do toolkit jBPM e Bizagi BPMS.

Modelo Nacional de Interoperabilidade (MNI).

### Further Reading

[Web Architecture - W3C](https://www.w3.org/standards/webarch/)

[Data exchange formats - Renenyffenegger.ch](https://renenyffenegger.ch/notes/development/Data/exchange/formats/index)

[Remote Procedure Call (RPC) - Techtarget.com](https://www.techtarget.com/searchapparchitecture/definition/Remote-Procedure-Call-RPC#:~:text=Remote%20Procedure%20Call%20is%20a,systems%20like%20a%20local%20system)

[XSLT Tutorial - JavaTPoint](https://www.javatpoint.com/xslt-tutorial)

### References

[Data Exchange Mechanisms and Considerations - Harvard.edu](https://enterprisearchitecture.harvard.edu/data-exchange-mechanisms)

[]()

