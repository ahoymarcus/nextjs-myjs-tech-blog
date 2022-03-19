---
author: 'Marcus Vinicius Richa'
title: 'Concepts and Types fo Servers - Overview'
date: '2022-03-19'
subject: 'web-dev-articles'
description: '.'
---

# Concepts and Types fo Servers - Overview

1. ##### Introduction
2. ##### Comon Types of Servers
3. ##### Web Servers
	3.1. Basic Structure of the Web Servers    
	3.2. The HyperText Transfer Protocol (HTTP)   
	3.3. Web Server Architecture   
	3.4. Leading Web Servers Available on the Market
4. ##### Nginx and Apache
5. ##### Application Servers
6. ##### Storage Servers
7. ##### 
8. ##### 
9. ##### Further Reading
10. ##### References

### Introduction

A server is a computer designed to process and deliver data to others computers over a network, being web servers some of the most famous while they are responsible to process requests and deliver data across the Wide World Web.

And, eventhough a server application software may be installed in most current machines, usually servers designate high end machines that are able to serve to a lot of clients.

`The server is the software that handles a specific task. However, the powerful hardware that supports this software is also called a server. This is because the server software that coordinates a network of hundreds or thousands of clients requires hardware that's more robust than computers for consumer use.` [Mitchell B.](https://www.lifewire.com/servers-in-computer-networking-817380)


- Read about the Client-Server architecture and pattern in these articles:
- `Software Architecture and Design` [¹]
- `Software Architecture Patterns - Overview` [²]


### Comon Types of Servers

Just as a powerful machine can manage a server for multiple purposes, it is also common to have dedicated servers specialized  on singular functions. So, these are some types of servers that can be found:

1. **Web server**: a server that distribute web content for browsers, specially web pages.
2. **Email Server**: these servers manages the distribution of email messaging over a network.
3. **FTP server**: these servers use the File Transfer Protocol tools to manage files to its clients.
4. **Identity server**: these ones are servers dedicated to authorization and login purposes for its clients.
5. **DNS server**: these servers are responsible to store IP addressess and to service its clients translating the URLs passed to it into a stored IP address.
6. **Proxy server**: this servers concentrate traffict on network, serving as a additional layer between the architecture of client-server.
    6.1. When connections to a proxy server, it hides the IP address of the client from the other servers, which can only see the  proxy's address.
7. **DHCP server**: these servers are responsible for assigning IP Addresses using the Dynamic Host Configuration Protocol (DHCP).
    7.1. The DHCP server found in the larger networks has its counterpart in the routers that are found at small networks.


    
### Web Servers

A web server is a machine or application which shares its data and its methods over the Wide Wolrd Web to client machines and applications. And speaking in a more specific way, web servers are the machines responsible to store the web contents over the Internet, such as text, images, videos and application data.

Also, as it was already stated, a server may refer to the hardware/machine, to the software application installed, or to both machine and application working together to server clients in the Web.

Their most common type of clients are the web browsers, which is a client application that makes requests to the web server from links or from URL addresses in general.

The communication between server and clients is done through the Hypertext Transfer Protocol (HTTP), and the majority of documents shared between the two peers are HyperText Markup Language (HTML), for static web pages, and HTML and JavaScript, for dynamic contents.

Many web servers also support server-side scripting languages to encode business logic into the communication. The comon supported server-side languages:

- **Active Server Pages (ASP)**
- **JavaScript (Node-JS)**
- **PHP**
- **Python**
- **Ruby**
  
  
A web server may also perform other web related tasks, like caching content to speed the delivery of commonly requested contented (also known as web acceleration), or like limiting the speed of response to specific clients depending on specific contexts.   
    
    
#### Basic Structure of the Web Servers    
    
As the learning platform MDN reminds, in terms of capacity a web server should have at least a HTTP service running, with which it can store URLs (web addresses) and then communicate with the clientes.

In this manner, the web server responds to a client request where both are using HTTP, and depending on the development of the communication the server can also return some desired file/document:

![example-of-a-http-request-to-web-server](/images/articles/web-development/example-of-a-http-request-to-web-server.svg)
    

The web servers can be of two kinds:

1. **Static Web Servers**:  they are called static when are limited in the capacity to process the arquives and documents it sends to the clients.
2. **Dynamic Web Servers**: and they are called dynamic when they are capable of updating the arquives/documents  before returning them to the client.  
    2.1. Usualy, the dynamic web server uses a Application Server and Database to perform these dynamic tasks.
    
    
Reasons to extend that storage capacity to a web server:

- Its a more robust machine.
- it's almost always alive in the Internet.
- Have a real IP address, thus unchanging address, contrary to the majority of the clients that are not using fixed IPs.


#### The HyperText Transfer Protocol (HTTP)

As its name implies, the HTTP defines how to transfer hypertext between two dispositives, and a hypertext is a text which support links as metadata.

Besides, HTTP has also these attributes:

- **Text based**: it is readble by humans.
- **Stateless**: by itself, this protocol does not feature transactions, since without states it cannot remember/keep the informations passed by.
- Only clients can make requests and only server can respond to requests.
- When clients request some arquive over HTTP, they have to inform the URL of the arquive.
- All the requests made to the web server have to be answered, even if it is done with error messages.


###### Basic Structre of a HTTP Response

1. The web server has to validate the URL informed by the client.
2. Once the URL is confirmed, the web server has to send the arquive back, or it has to created the necessary arquive.
3. If there is no valid content to the URL provided or if the web server is incapable of matching the request for any reason, it has to return a error response to the client.


#### Web Server Architecture

The Web Server Architecture can follow two approaches:

1. **Concurrent Approach**: it allows the web server to handle multiple client requests at the same time, and it can be done through some methods:   
    1.1. Multi-process: one single thread process initiate several single-threaded child processes, and it has the responsability to manage over the child processes.    
    1.2. Multi-threaded: multiple single-threaded process  a created.   
    1.3. Hybrid method: in this method, the web server can create multiple process to responds a request each. And each of these process created can also initiate other threads to deal with taks inside its related request. 
2. **Single-Process-Event-Driven Approach**:


#### Leading Web Servers Available on the Market

1. **Apache HTTP server**: this is the most popular web server in the world developed by the Apache Software Foundation.    
    1.1. It's open-source
2. **Internet Information Services (IIS)**: this is a high performance web server from Microsoft. It runs on Windows systems. 
    2.1. `Internet Information Services (IIS)` [Microsoft Docs]https://docs.microsoft.com/en-us/lifecycle/products/internet-information-services-iis)
3. **Lighttpd**: this web server is also open-source distributed by FreeBSD OS, and it is pronouced `lighty`.    
    3.1. It's a fast, secure, and less resources consuming web server.   
    3.2. It can also run in Windows, Mac, Linux and Solaris OSs.
4. **Sun Java System Web Server**:  this web server from is suited for medium and large web sites.
    4.1. Though the web server is free, it's not open-source.   
    4.2. It runs on Windows, Linux and UNIX platforms.  
    4.3. It supports various languages, scripts and technologies required for Web 2.0 such as JSP, Java Servlets, PHP, Perl, Python,  Ruby on Rails, ASP, and Coldfusion, etc.
5. **Jigsaw server**: this is the W3C server, which comes from the World Wide Web Consortium.   
    5.1. It's open-source and free.   
    5.2. It can run on various platforms like Linux, UNIX, Windows, Mac, FreeBSD, etc.    
    5.3. It's written in Java and can run CGI scripts and PHP programs.


### Nginx and Apache










    
    
    
https://www.nginx.com/resources/glossary/web-server/
    
O que é armazenamento de objetos? - https://www.purestorage.com/br/knowledge/what-is-object-storage.html
    
    
Conhecimento de servidores web: Nginx e Apache.
Conhecimento de servidores de aplicação Java Platform, Enterprise Edition (JEE): JBoss, Tomcat, Node.js e Wildfly. 
Conceito de servidores de armazenamento de objetos. 

### Further Reading

[]()

### References

[Web Server - TutorialsPoint](https://www.tutorialspoint.com/internet_technologies/web_servers.htm)

[O que é um servidor web (web server)? - MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/What_is_a_web_server)

[What Is a Web Server? - Nginx.com](https://www.nginx.com/resources/glossary/web-server/)

[What Is a Server? - LifeWire](https://www.lifewire.com/servers-in-computer-networking-817380)


[^1]:software-architecture-and-design-2022-02-22

[^2]:software-architecture-patterns-overview-2022-02-18



