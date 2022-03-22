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
3. ##### Java Platform Application Server
	3.1.     
	3.2.    
	3.3.    
	3.4. 
4. ##### 
    4.1.    
    4.2. 
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


### Java Platform Application Server

The Java™ platform is the environment for developing and managing Java applets and applications, and it consists of 3 primary components:

1. **Java Language**
2. **Java packages**
3. **Java Virtual Machine**


The first two components creates a specialized working set with a common sintax and common resources from the language that meets with some extension codes which comes packaged in files and provides additional features to be used.

And the third component sets the enviroment for all the work to be done. And in this point the Java Platform differs from the traditional languages, because while this other languages they operate immediately over the OS from the host machine, Java works in its own environment. 

That means a ordinary programming language has compile their finished working product to bind the speciffic hardware and OS of a computer, while every specification of a work with Java is the same and it is always seated over the same environment structure all around, that is the Java Virtual Machine. Because it is only the Java Virtual Machine that has be be accomodated in the host machine and its OS.


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




    
    
    
    
    
[Top Java Application Servers: Tomcat vs. Jetty vs. GlassFish vs. WildFly](https://stackify.com/tomcat-vs-jetty-vs-glassfish-vs-wildfly/)

[A Tour of the Modern Java Platform](https://springone.io/2021/sessions/a-tour-of-the-modern-java-platform)

https://www.wildfly.org/about/

Conhecimento de servidores de aplicação Java Platform, Enterprise Edition (JEE): JBoss, Tomcat, Node.js e Wildfly.     

### Further Reading

[What Is a Server? - LifeWire](https://www.lifewire.com/servers-in-computer-networking-817380)

[Tomcat vs. Apache HTTP Server: What's the difference?](https://www.theserverside.com/video/Tomcat-vs-Apache-HTTP-Server-Whats-the-difference)

[]()

### References

[What Is an Application Server?](https://www.serverwatch.com/guides/application-server/)

[Server: Web vs. Application - JavaTPoint](https://www.javatpoint.com/server-web-vs-application)

[Java platform - IBM](https://www.ibm.com/docs/en/i/7.2?topic=java-platform)


[^1]:concepts-and-types-of-servers-2022-03-19

[^2]:web-servers-overview-2022-03-20


