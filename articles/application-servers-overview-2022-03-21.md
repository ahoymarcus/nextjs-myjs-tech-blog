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
	3.1. General Structure of the Java Platform Environment    
	3.2. Tomcat   
	3.3. Jetty   
	3.4. GlassFish   
	3.5. WildFly
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
 
 
 
    





[A Tour of the Modern Java Platform](https://springone.io/2021/sessions/a-tour-of-the-modern-java-platform)

Conhecimento de servidores de aplicação Java Platform, Enterprise Edition (JEE): JBoss, Tomcat, Node.js e Wildfly.     

### Further Reading

[What Is a Server? - LifeWire](https://www.lifewire.com/servers-in-computer-networking-817380)

[Tomcat vs. Apache HTTP Server: What's the difference?](https://www.theserverside.com/video/Tomcat-vs-Apache-HTTP-Server-Whats-the-difference)

[A Tour of the Modern Java Platform](https://springone.io/2021/sessions/a-tour-of-the-modern-java-platform)

[]()

### References

[What Is an Application Server?](https://www.serverwatch.com/guides/application-server/)

[Server: Web vs. Application - JavaTPoint](https://www.javatpoint.com/server-web-vs-application)

[Java platform - IBM](https://www.ibm.com/docs/en/i/7.2?topic=java-platform)

[How is Java platform independent? - Geeksforgeeks.org](https://www.geeksforgeeks.org/java-platform-independent/)

[Top Java Application Servers: Tomcat vs. Jetty vs. GlassFish vs. WildFly - Stackify.com](https://stackify.com/tomcat-vs-jetty-vs-glassfish-vs-wildfly/)

[^1]:concepts-and-types-of-servers-2022-03-19

[^2]:web-servers-overview-2022-03-20


