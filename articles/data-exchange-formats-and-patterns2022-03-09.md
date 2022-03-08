---
author: 'Marcus Vinicius Richa'
title: 'Data Exchange Formats and Patterns'
date: '2022-03-09'
subject: 'development-articles'
description: '.'
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
5. ##### 
6. ##### 
7. #####  
8. ##### 
9. ##### Further Reading
10. ##### References

### Introduction

According to the [Harvard](https://enterprisearchitecture.harvard.edu/data-exchange-mechanisms) platform, traditionally the exchange of data was done transfering files.

But now days, network communiction has made message-based exchange between applications a routine job, and also the web and cloud infrastructure have allowed for a muth more diverse job of exchanging data in such a capacity that data format could be even thought in terms of the context job interaction.

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

- **SOAP**: this are official standards from the World Wide Web Consortium (W3C), and they send messages using HTTP and SMTP.   
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

#### Event Based/Brokered Messaging      

An application creates a message containing data and gives it to a service to deliever.

This method often requires technical components to manage queueing and caching, and rules related for messaging, as publisher, or as subscriber.

#### Data Streaming

Here, there is a continous chain between some source transfer and a receiving process.

It's a sequential ingestion of data that composes a incremented data record.


### Some Considerations in Selecting a Data Exchange Approach

As states the Harvard.edu document, the reason for the exchange of data may vary and change with time, and also may not resort in just 'one size fits all' solution.

Although, some characteristics would help to balance the advantages and disadvantages of a method:

1. **Data Set Characteristics**:      
	1.1. Data complexity: relates not only in terms of multitude of related data elements, but also in terms of a predefined or not set of properties.    
		1.1.1. In the case of a more complex and a more diverse data set, a **direct database access** should be the most effective.  
		1.1.2. In the cases of a set of a more structured set of data a **API service** could be a effective idea.
	1.2. Frequency of data update: the frequency of data update can bring a substantial overhead, so for these cases more automated methods like APIs and Messaging could be a better choise.   
	1.3. Data size: large data sets usually requires **file transfer** or **direct database connection**.
2. **Data Environment Characteristics**: 
	2.1.




https://enterprisearchitecture.harvard.edu/data-exchange-mechanisms

https://renenyffenegger.ch/notes/development/Data/exchange/formats/index

### Further Reading

[Web Architecture - W3C](https://www.w3.org/standards/webarch/)

### References

[]()

[]()

