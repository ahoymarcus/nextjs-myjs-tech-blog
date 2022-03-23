---
author: 'Marcus Vinicius Richa'
title: 'Application Servers - Overview'
date: '2022-03-21'
subject: 'development-articles'
description: 'While the lightweight desing of web servers is enough to process high traffic of static resources there is request throughout the Internet, dynamic resources, often in the form of applications, requires additional assistance. The use of application servers insert another layer to the whole operation. So, not only the application servers is put in the middle of web servers and the precious database servers to help and to protect this operation, but it also is capable of providing program redundancy to the web server operation, beside the capacity to process more complicated business logic for requests, which, in terms, would make an attempt to SQL Injection much harder.'
---

# Application Servers - Overview

1. ##### Introduction
2. ##### Leading Application Servers Available on the Market
3. ##### Diffrent Platforms for Applications Servers
    3.1. MinIO Object Store
4. ##### Java Platform Application Server
	4.1. General Structure of the Java Platform Environment    
	4.2. Tomcat   
	4.3. Jetty   
	4.4. GlassFish   
	4.5. WildFly
5. ##### Other Applications that Use the Java Platform and Ecosystem
    5.1. Jackrabbit (JCR)   
    5.2. H2 Database   
    5.3. Elasticsearch    
    5.4. Apache Kafka
5. ##### 
6. ##### 
9. ##### Further Reading
10. ##### References

### Introduction

The site from [Serverwatch.com](https://www.serverwatch.com/guides/application-server/) states that a application server is a high-powered computer that provides application resources to users and to web clients.

`Application servers physically or virtually sit between datases servers storing application data and web servers communicating with clients. App servers and akin middleware are the operating systems supporting an application's development and delivery. Whether it's a destop, mobile, or web app, application servers play a critical role in connecting a world of devices`. [Serverwatch.com](https://www.serverwatch.com/guides/application-server/)


And in its article, [JavaTPoint](https://www.javatpoint.com/server-web-vs-application), highlights these 2 attributes from a application server:

1. That it is a component based product.
2. That it has a role as a middleware service for state maintenance and security, along with persistence and data access to the web operations.


`It is a type of server designed to install, operate and host associated services and applications for the IT services, end users and organizations`.  [JavaTPoint](https://www.javatpoint.com/server-web-vs-application)


- Read more about servers in thiese articles:
- `Concepts and Types fo Servers - Overview` [^1]
- `Web Servers - Overview` [^2]


### Leading Application Servers Available on the Market

It's important to notice that the current struture of the market place has been seeing a continue growth in the importance of the application server role,  because not only the operations rely more on the role of applications, but also the modern infrastructure of cloud platforms and all the specialized services provided by them.

1. **ColdFusion**: this is a commercial product of Adobe.
2. **JRun**: this is another commercial product of Adobe.
3. **Geronimo**:  this one is a free product of Apache.
4. **Tomcat**: here is another free product of Apache.
5. **TomEE**: once again another free product of Apache.
6. **WebObjects**: a commercial product from Apple.
7. **GlassFish**: a free product from Eclipse.
8. **Jetty**: another free product from Eclipse.
9. **WebSphere**: a commercial product from IBM.
10. **WebSphere AppServer (AS) Community**: another commercial product from IBM.
11. **Interstage Application Server**: a commercial product from Jujitsu.
12. **Magic XPA Application Platform**: a commercial product from Magic.
13. **IIS**: a commercial product from Microsoft.
14. **Fusion Middleware**: a commercial product from Oracle.
15. **Oracle Containers J2EE**: another commercial product from Oracle.
16. **WebLogic**: also another commercial product from Oracle.


#### MinIO Object Store

MinIO is a high performance, single layer, lightweight, and distributed object storage system. It's open source, Amazon's S3 compatible, which serves as a hybrid private/cloud store.

It's written in Go and capable of defining Private Cloud infrasctructure qhie S3 storage functionality.


###### MinIO Features

It has a **erasure coding** for data protection: `MinIO protects data with per-object inline erasure coding written in assembly code to deliver the highest possible performance. MinIO uses Reed-Solomon code to stripe objects into data and parity blocks with user-configurable redundancy levels. MinIO's Erasure Coding performs healing at the object level and can heal multiple objects independently.` [Min.io](https://min.io/product/overview#)


It has also a **Bitrot Protection** to prevent data loss: To avoid data curruption or bitrot, MinIO has a `HighwayHash` system algorithm that capture and heals corrupted objets ensuring inegrity with end to end `Hash on READ and verifying it on Write`.


It has **Encryption** on both server-side and client-side: Because encrypted objects are tamper-proofed, for the data in flight or at rest, but without add a lot of overhead.


There is also the **WORM** feature: This is a feature important for some regulatory requirements which makes the configured data immutable once written,  so escaping the reach of the APIs.


Also with **Identity Management**: MinIO supports the most advanced standards in identity management, integrating with the OpenID connect compatible providers as well as key external IDP vendors. That means that access is centralized and passwords are temporary and rotated, not stored in config files and databases. Furthermore, access policies are fine grained and highly configurable, which means that supporting multi-tenant and multi-instance deployments become simple.


Another feature is **Continuous Replication**: MinIO's continuous replication is designed for large scale, cross data center deployments. By leveraging Lambda compute notifications and object metadata it can compute the delta efficiently and quickly. Lambda notifications ensure that changes are propagated immediately as opposed to traditional batch mode.

This features also helps to lower potential damages to partitions on the system, since replication is more provalent in this architecture.


There is also a **Global Federation** feature: this allows the enterprise to has data everywhere, since MinIO can have various instances combined to form a unified global namespace.

`Specifically, any number of MinIO servers can be combined into a Distributed Mode set and multiple Distributed Mode sets can be combined into a MinIO Server Federation. Each MinIO Server Federation provides a unified admin and namespace.` [Min.io](https://min.io/product/overview#)

This Global Federation features gives the opportunity for the object store to massively scale for a large geographically area, `while retaining the ability to accomodate a variety of applications (Splaunk, Teradata, Spark, Hive, Presto TensorFlow, H20) from a single console.` [Min.io](https://min.io/product/overview#)


Finnaly, the **Multi-Cloud Gateway** feature: `The implications are profound. Now organizations can truly unify their data infrastructure - from file to block, all appearing as objects accessible via the Amazon S3 API without the requirement for migration.` [Min.io](https://min.io/product/overview#)


###### Advantages of MinIO

1. S3 API compability
2. Data redundancy
3. High availability
4. Horizontal and Vertical scaling
5. Supports multiple Pluggable storage backend
6. Data security using encryption on both server and client side


###### Read more about the MinIO Object Store:
- [Minio Distributed Object Storage Architecture and Performance - XenonStack](https://www.xenonstack.com/insights/minio)











### Java Platform Application Server

The Java™ platform is the environment for developing and managing Java applets and applications, and it consists of 3 primary components:

1. **Java Language**
2. **Java packages**
3. **Java Virtual Machine**


The first two components creates a specialized working set with a common sintax and common resources from the language that meets with some extension codes which comes packaged in files and provides additional features to be used.

And the third component sets the enviroment for all the work to be done. And in this point the Java Platform differs from the traditional languages, because while this other languages they operate immediately over the OS from the host machine, Java works in its own environment. 

That means a ordinary programming language has compile their finished working product to bind the speciffic hardware and OS of a computer, while every specification of a work with Java is the same and it is always seated over the same environment structure all around, that is the Java Virtual Machine. Because it is only the Java Virtual Machine that has be be accomodated in the host machine and its OS.

`An important point to be noted is that while JAVA is platform-independent language, the JVM is platform-dependent. Different JVM is designed for different OS and byte code is able to run on different OS`. [Geeksforgeeks.org](https://www.geeksforgeeks.org/java-platform-independent/)


#### General Structure of the Java Platform Environment

Here, in this documentation from IBM, [Java platform](https://www.ibm.com/docs/en/i/7.2?topic=java-platform), we can get some general steps from this process:

1. **Java Applets and Applications**: an applet is a Java program that can included in some HTML and can view while using some Java-enable browser, that in its turn will call the machine OS and run the Java Virtural machine.
2. **Java Virtual Machine**: it is an environment that read `bytecodes` that is the working result of a Java program.     
    2.1. And since the virtual machine will be running the application on top of the OS, the Java program can run on any platform, regardless of the platform on which the program was originally developed.
3. **Java JAR and class files**: the Java ARchive (JAR) file is a file format that combines many packages into one and aims to the virtual machine to execute its operations, not the OS of the machine.
4. **Java threads**: Java is a multithread programming language, meaning that within each individual thread the Java Virtual Machine can run multiple tasks at the same time.   
    4.1. A thread is simply a flow of control in a program, and since Java is multithread, it can manage multiple flows of control at the same time.
5. **Java Development Kit (JDK)**: this is the software for Java developers, which includes the Java interpreter, Java classes, and Java development tools:   
    5.1. compiler   
    5.2. debugger  
    5.3. disassember   
    5.4. appletviewer   
    5.5. stub file generator   
    5.6. document generator


#### Tomcat

According to [Stackify.com](https://stackify.com/tomcat-vs-jetty-vs-glassfish-vs-wildfly/)Tomcat which is developed by Apache is the most popular application server used with Java web applications. The site even says that there are some claims that Tomcat's market share could be more than 60% of all Java application server deployments.

Though, the site Stackify.com also alerts to the fact that eventhough Tomcat has acquired all this popularity, this application server is not listed at [Oracle.com](https://www.oracle.com/java/technologies/compatibility-jsp.html) as a `Java EE 8 Platform Compatible Implementations`.


`Indeed, Tomcat doesn't implement all the features required of a Java EE application server. The accurate title for Tomcat would be either 'web server' of 'servlet container'. But even though Tomcat doesn't support some Java EE features out of the box, you ca still use most of these features. You'll just need to include them as additional third-party dependencies in your application`. [Stackify.com](https://stackify.com/tomcat-vs-jetty-vs-glassfish-vs-wildfly/)


Finally, the site Stackify.com also states that Tomcat is a mature implementation, well-documented, and with not shortage of tutorials.


###### Read more about the Tomcat Application Server:
- [A Step By Step Guide to Tomcat Performance Monitoring](https://stackify.com/tomcat-performance-monitoring/)


#### Jetty

Jetty is another application server and it is developed by the Eclipse Foundation which also, just like Tomcat, it is not listed by [Oracle.com](https://www.oracle.com/java/technologies/compatibility-jsp.html) as a full implementation of the Java EE 8 Platform.

But again, just like Tomcat, Jetty also can extend its features to support most of the Java EE 8 Platform by including additional third-party dependencies.
    
Finally, states [Stackify.com](https://stackify.com/tomcat-vs-jetty-vs-glassfish-vs-wildfly/), eventhough Jetty is nowhere near Tomcat's market share, it's still widely used, and it thrives in two main points that makes it `a great fit for constrained environments and for embedding in other products`:

1. **Compactness**
2. **Small footprint**


#### GlasFish    

GlassFish is a fully featured and certified Java EE application server developed by Oracle, that stacks up to a more heavyweight fit than either Tomcat or Jetty. It's also somewhat more difficult to operate according to [Stackify.com](https://stackify.com/tomcat-vs-jetty-vs-glassfish-vs-wildfly/).
    
`In fact, GlassFish is more than just a generic Java EE application server. It’s the reference implementation of the Java EE standard. This means that GlassFish is used to showcase Java EE capabilities, and it gets contributions from the same people who define Java EE standards. Therefore, GlassFish will always support the latest Java EE features first. That’s a plus.` [Stackify.com](https://stackify.com/tomcat-vs-jetty-vs-glassfish-vs-wildfly/)
    
 
But the site Stackify.com points out a important downside of the GlassFish implementation, that is its lack of commercial support, because eventhough a solution may be open-source, it is a important business point that some product would have a wide base of technical support.
 
`So keep in mind that if you use GlassFish and need commercial support in the future, you’ll need to migrate to a completely different application server. It might not sound like a big deal to you right now, but it’s a deal-breaker for many businesses. ` [Stackify.com](https://stackify.com/tomcat-vs-jetty-vs-glassfish-vs-wildfly/)
 
 
#### WildFly
 
WildFly is another fully featured and certified application server by  [Oracle.com](https://www.oracle.com/java/technologies/compatibility-jsp.html). It was formely known as JBoss Application Server, and its big advantage over GlassFish is the fact that Red Hat provides commercial support to its application server that still uses the trademark JBoss Enterprise Application Platform.

So, this means that it's easy to be using the open-source version of the application server, WildFly, and then quickly migrate to JBoss EAP ahead.

Also, the site Stackify.com states that Red Hat is one of the most respected software vendeor there is, and it was just acquired by IBM for $34 billion, in its largest deal ever.
 
`WildFly and JBoss AS are the Community Version of JBoss application server offerings. The term “JBoss application server” has been used since the beginning, however to avoid confusion with the supported version, called JBoss Enterprise Application platform (JBoss EAP in short) it has been renamed to WildFly`. [Mastertheboss.com](http://www.mastertheboss.com/jbossas/jboss-eap/what-is-the-difference-between-jboss-eap-wildfly-and-jboss-as/)


###### Read more about WildFly:
- [What is the difference between JBoss EAP, WildFly and JBoss AS ?](http://www.mastertheboss.com/jbossas/jboss-eap/what-is-the-difference-between-jboss-eap-wildfly-and-jboss-as/)
 
 
### Other Applications that Uses the Java Platform and Ecosystem
    
#### Jackrabbit (JCR)

The Apache Jackrabbit is a Java Content repository (JCR), that is a java open source content repository. [Tutorialandexemple](https://www.tutorialandexample.com/apache-jackrabbit-tutorial#), completely written in Java which started in 2004.

And in speciffic terms it works as a type of oject database for customizing, storing, searching and retrieving content, and it is also full complaint with a Java speciffication for repositories: JSR-170.

###### Read more about the JSR-170:
- [JSR 170](https://jcp.org/en/jsr/detail?id=170)
- [JSR 170: A standard content repository](https://www.infoworld.com/article/2657451/jsr-170--a-standard-content-repository.html)


###### For more information about Object Store Server:
- `Concepts and Types fo Servers - Overview` [^1]


###### Apache Jackrabbit Basic Structure

The general structure of the Jackrabbit is a 3 layers component system:

1. **Content Application Layer**: there can be speciffic applications or very general ones.
2. **API Layer**: it has two major sections:    
    2.1. The Content Repository API defined by JSR-170.   
    2.2. Several features of a content repository that has been removed from the JSR-170 speciffication.
3. **Content Repository Implementation Layer**: these are the building blocks for the construction of a Jackrabbit content repository.



#### H2 Database

H2 DB  is an open-source lightweight SQL database which engine is written in Java and tha timplements the JDBC API. Also, it has included a browser-base application.

Also, the H2 DB can be embedded in a Java application or run in the client-server mode,  and it can even run as inmemory database, which means that data won't persist on the disk.

###### H2 DB Features

- **Very fast open source JDBC API**
- **Embedded and server modes**
- **Transaction support, multi-version concurrency**
- **Encrypted databases**
- **Fulltext search**
- **Pure Java with a small footprint**: around 2.5 MB  jar file size.
- **ODBC driver**


###### Read more about the H2 DB:
- [H2 Database - Introduction - TutorialsPoint](https://www.tutorialspoint.com/h2_database/h2_database_introduction.htm)
- [H2 Database Engine - 2database.com](https://www.h2database.com/html/main.html)



#### Elasticsearch

The Elasticsearch has become a multi-functionality implementation which traverse from features like 'search engine', 'analytic database', to a 'big data solution', etc.

Besides the Elasticsearch implementation, there is also a ecosystem of components called 'Elastic Stack' that helps to extend even more its wild range of functionalities.


`Elasticsearch allows you to store, search, and analyze huge volumes of data quickly and in near real-time and give back answers in milliseconds. It’s able to achieve fast search responses because instead of searching the text directly, it searches an index. It uses a structure based on documents instead of tables and schemas and comes with extensive REST APIs for storing and searching the data. At its core, you can think of Elasticsearch as a server that can process JSON requests and give you back JSON data`. [Knowi.com](https://www.knowi.com/blog/what-is-elastic-search/)


Elasticsearch is a distributed, open-source search and analytics engine built on Apache Lucene and developed in Java.


###### Logical Concepts Structures from Elasticsearch


1. It's document based using JSON format.
2. It uses a index on its collections.
3. Inverted index: which is a process of mapping various individual terms or strings instead of the ordinary index system of mapping a attribute of the collection.


###### Backend Components Structures from Elasticsearch

1. **Cluster**: a group of one or more node instances connected, and it is one key feature of Elasticsearch since it allows it to distribute different tasks to the different nodes.
2. **Node**: its a single server instance as part of a cluster, and that stores data. It can be configured into 3 ways:   
    2.1. Master node
    2.2. Data node
    2.4. Client node: forwards cluster requests to the master node and data-related request to the data nodes.
3. **Shards**: Elasticsearch provides the ability to subdivide the index into multiple pieces called shards, where each shard is in itself a fully-functional and independent 'index' that can be hosted on any node within a cluster.
    3.1. `By distributing the documents in an index across multiple shards, and distributing those shards across multiple nodes, Elasticsearch can ensure redundancy, which both protects against hardware failures and increases query capacity as nodes are added to a cluster.`  [Knowi.com](https://www.knowi.com/blog/what-is-elastic-search/)
4. **Replicas**: Elasticsearch allows to make one or more copies of the index's shards which are called 'replica shards' or just 'replicas'. Basically, a replica shard is a copy of a primary shard. Each document in an index belongs to one primary shard. Replicas provide redundant copies of your data to protect against hardware failure and increase capacity to serve read requests like searching or retrieving a document.


###### The Elastic Stack (ELK)

1. **Kibana**: its a data visialization and management tool that provides real-time histograms. It allows visualization of the data and also navigation on the Elastic Stack.
2. **Logstash**: it is used to aggregate and process data to be send to Elasticsearch. So, its an open-source, server-side data processing pipeline that can ingest data from a multitude of sources simultaneously, transforms it, and then sends it to collect.
3. **Beats**: its a collection of lightweight, single-purpose data shipping agents used to send data from a miriad of machines and systems to Logstash or Elasticsearch.


###### Primary Use Cases for Elasticsearch

1. Application search
2. Website search
3. Enterprise search
4. Logging and Log Analytics
5. Infrastruture metrics and Container monitoring
6. Security analytics
7. Business analytics



#### Apache Kafka

According to a article at [Red Hat](https://www.redhat.com/pt-br/topics/integration/what-is-apache-kafka) Apache Kafka is a distributed platform for subscription, storage and processing of data in real-time, which was initially developed by Linkedin, but that later was released as open source..

It was conceived to process data from a multitude of resources and to deliver them to the clients. All of this that make Apache Kafka one alternative to the tradition enterprise messaging systems availale.


###### Apache Kafka and the Microservice Pattern

Still according to the article at Red Hat, it is stated that the Microservice architecture brought a new shift in the development of software, aggregating more agility with the reduction of excessive dependencies.


However, there is still some kind of iIntegration in the business of data that the developers need while working with distributed systems. For this scene, there should be some options:

1. **Synchronous Method**: the use of application interfaces (APIs) to connect them to the clients.
2. **Asynchronous Method**: this method would involve the replication of the data in a intermediary layer.    
    2.1. Apache Kafka: it is here that Kafka can be used for the transmission of data between the various working teams.


###### Integration Requirements for  the Microservice Architecture
    
Here, the article at [Red Hat](https://www.redhat.com/pt-br/topics/integration/what-is-apache-kafka) explain that there are speciffic requirements for developers have while working with integranting distributed systems:

1. **Distributed Integrations**: lightweight integrations based in continous deployments at demand and that are not limited by a centralized point in the architecture.
2. **APIs**: these are the traditional data services available.
3. **Containers**: which are a method for develop, manage and scale native application in the cloud.    
    3.1. These are individual `lean artefacts`, which are part of the DevOps process that create clusters and release high disponibility.


So, through the use of these 3 types of requirements, [Red Hat](https://www.redhat.com/pt-br/topics/integration/what-is-apache-kafka) sees a important `Agile Integration` approach that gives more opportunities and freedom to developers to work in a synchrous or asynchronous mode, being Apache Kafka one excelent option of `Asynchrous event oriented integration`. 


###### When to Use Apache Kafka

The Apache Kafka is a part of pipelines for data transmission between systems or applications that consumes data. And, besides being compatible with various uses cases, Apache Kafka brings some important differentials:

1. To minimize the necessity to pear-to-pear (P2P) connections.
2. To reduce data latency in miliseconds, which is essential in real-time operations.
3. The capacity to operate with millions of data points per second, what makes it perfect for the Big Data scenario.
4. To deal operations which may start conventionally low, but have subtle peaks in short span of time, like IoT nad social medias.


###### Apache Kafka and Kubernets

Just as was said in our article that talks about Object Storage Servers, there is a great fit while dealing with distributed architecture and Kubernets, since Kubernets brings the agile style of operation to the management of containers, that in turn are a optimal case for automatic deployment, configuring and management of Apache Kafka nodes.

So, together with Apache Kafka and Kubernets:

1. Scalability
2. High disponibility
3. Portability between providers and OS.
4. Easy management


###### Read more about Object Storage Server in this article:
- `Concepts and Types fo Servers - Overview`[^1] 


###### Basic Structure from Apache Kafka

The Apache Kafka is a distributed system consisting of servers and clients that communicate via TCP:

1. **Server**: Kafka is run as a cluster of one or more servers with fault-tolerance.
2. **Client**: this is the consumer that can connect in parallel.   
    2.1. Kafka has default clients included.   
    2.2. There are clients available through the Kafka Community.   
    2.3. Languages: they are available for Java and Scala including the higher-level Kafka Streams library, for Go, Python, C/C++, and many other programming languages as well as REST APIs.


In this introdutory article about Kafka, the site [Apache.org](https://kafka.apache.org/intro) says that it is improtant to note from the Apach Kafka architecture that `producers and consumers are fully decoupled and agnostic of each other, which is a key design element to achieve the high scalability that Kafka is know for`. 
    
Another interesting point of its own architeture is that while the Apache Kafka may work in a similar disposition of some traditional messaging systems, it has also the robostiness to treat the data, or its messages, like a storage system, giving to management the decision about deleting the passed data or messages.    
    

Finally, other features from Apache Kafka is **replication** and **topic partition**, where the first one reduces loss of data, and the second operates to increase even more scalability:

`Topics are partitioned, meaning a topic is spread over a number of "buckets" located on different Kafka brokers. This distributed placement of your data is very important for scalability because it allows client applications to both read and write the data from/to many brokers at the same time. When a new event is published to a topic, it is actually appended to one of the topic's partitions. Events with the same event key (e.g., a customer or vehicle ID) are written to the same partition, and Kafka guarantees that any consumer of a given topic-partition will always read that partition's events in exactly the same order as they were written.` [Apache.org](https://kafka.apache.org/intro)


###### Read more about Apache Kafka in these articles:
- [Apache Kafka Quickstart - Apache.org](https://kafka.apache.org/quickstart)
- [Documentation - Apache.org](https://kafka.apache.org/documentation/)





[A Tour of the Modern Java Platform](https://springone.io/2021/sessions/a-tour-of-the-modern-java-platform)

Conhecimentos das plataformas  Apache Kafka.

Conhecimento de servidores de aplicação Java Platform, Enterprise Edition (JEE): JBoss, Tomcat, Node.js e Wildfly.     

### Further Reading

[What Is a Server? - LifeWire](https://www.lifewire.com/servers-in-computer-networking-817380)

[Tomcat vs. Apache HTTP Server: What's the difference?](https://www.theserverside.com/video/Tomcat-vs-Apache-HTTP-Server-Whats-the-difference)

[A Tour of the Modern Java Platform](https://springone.io/2021/sessions/a-tour-of-the-modern-java-platform)

[Apache Jackrabbit - Apache.org](https://jackrabbit.apache.org/jcr/first-hops.html)


### References

[What Is an Application Server?](https://www.serverwatch.com/guides/application-server/)

[Server: Web vs. Application - JavaTPoint](https://www.javatpoint.com/server-web-vs-application)

[Java platform - IBM](https://www.ibm.com/docs/en/i/7.2?topic=java-platform)

[How is Java platform independent? - Geeksforgeeks.org](https://www.geeksforgeeks.org/java-platform-independent/)

[Top Java Application Servers: Tomcat vs. Jetty vs. GlassFish vs. WildFly - Stackify.com](https://stackify.com/tomcat-vs-jetty-vs-glassfish-vs-wildfly/)

[Apache Jackrabbit Tutorial for Beginners - Tutorialandexemple.com](https://www.tutorialandexample.com/apache-jackrabbit-tutorial)

[MinIO Object Storage Overview - Min.io](https://min.io/product/overview#)

[Elasticsearch: What it is, How it works, and what it’s used for - Knowi.com](https://www.knowi.com/blog/what-is-elastic-search/)

[O que é Apache Kafka? Red Hat](https://www.redhat.com/pt-br/topics/integration/what-is-apache-kafka)

[Apache Kafka Introduction - Apache.org](https://kafka.apache.org/intro)


[^1]:concepts-and-types-of-servers-2022-03-19

[^2]:web-servers-overview-2022-03-20


