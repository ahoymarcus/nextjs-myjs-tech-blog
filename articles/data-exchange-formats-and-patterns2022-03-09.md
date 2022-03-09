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
5. ##### 
6. ##### 
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

These are transfers via files exchange that can be in many text-based or binary formats:

- JSON  
- XML   
- CVS   

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

**Advantages of the RPC**
- Helps clients communicate with servers via the traditional use of procedure calls in high-level languages.   
- Can be used in a distributed environment, as well as the local environment.  
- Supports process-oriented and thread-oriented models.   
- Hides the internal message-passing mechanism from the use.  
- Requires only minimal effort to rewrite and redevelop the code.   
- Provides abstraction, i.e., the messate-passing nature of network communication is hidden from the user.   
- Omits many of the protoco layers to improve performance.


**Disadvantages of the RPC**
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

An interesting summary from the Harvard.edu docs:

![table-with-data-exchange-information](/images/articles/development/table-with-data-exchange-information.png)







https://renenyffenegger.ch/notes/development/Data/exchange/formats/index

https://en.wikipedia.org/wiki/Aspect-oriented_programming

Padrões XML, XSLT, UDDI, WSDL, SOAP e JSON.
Tecnologias Web Services, REST e API RESTful.
Conhecimento da linguagem GraphQL e Swagger.
Padrões Advanced message Queuing protocol AMQP e Aspect Oriented Programming?? AOP. 
Conhecimento do toolkit jBPM e Bizagi BPMS.
Recomendações W3C. 
Modelo Nacional de Interoperabilidade (MNI).

### Further Reading

[Web Architecture - W3C](https://www.w3.org/standards/webarch/)

[Remote Procedure Call (RPC) - Techtarget.com](https://www.techtarget.com/searchapparchitecture/definition/Remote-Procedure-Call-RPC#:~:text=Remote%20Procedure%20Call%20is%20a,systems%20like%20a%20local%20system)

### References

[Remote Procedure Call (RPC) - Harvard.edu](https://enterprisearchitecture.harvard.edu/data-exchange-mechanisms)

[]()

