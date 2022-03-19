---
author: 'Marcus Vinicius Richa'
title: 'Web Servers - Overview'
date: '2022-03-20'
subject: 'web-dev-articles'
description: 'A web server is a kind of server that works as a middleman application between the actual server and the clients, pulling content from the server on each user request and returning it across the Web. And speaking in a more specific way, web servers are the machines responsible to store the web contents over the Internet, such as text, images, videos and application data. Their most common type of clients are the web browsers, which is a client application that makes requests to the web server from links or from URL addresses in general. The communication between server and clients is done through the Hypertext Transfer Protocol (HTTP).'
---

# Web Servers - Overview

1. ##### Introduction  
2. ##### The Apache Web Server
    2.1. Apache Basic Structure   
    2.2. Other Features Present in Apache
3. ##### The Nginx Web Server
    3.1. Nginx Basic Structure   
    3.2. Other Features Present in Nginx
4. ##### 
5. ##### 
6. ##### 
7. ##### 
8. ##### 
9. ##### Further Reading
10. ##### References

### Introduction

A web server is a kind of server that works as a middleman application between the actual server and the clients, pulling content from the server on each user request and returning it across the Web. And speaking in a more specific way, web servers are the machines responsible to store the web contents over the Internet, such as text, images, videos and application data.

Their most common type of clients are the web browsers, which is a client application that makes requests to the web server from links or from URL addresses in general.

And one of the biggest chanllenges of a web server is to serve a great number of different web users at the same time, where each of them is requesting different resources from the web server.

The communication between server and clients is done through the Hypertext Transfer Protocol (HTTP), and the majority of documents shared between the two peers are HyperText Markup Language (HTML), for static web pages, and HTML and JavaScript, for dynamic contents.

Many web servers also support server-side scripting languages to encode business logic into the communication. The comon supported server-side languages:

- **Active Server Pages (ASP)**
- **JavaScript (Node-JS)**
- **PHP**
- **Python**
- **Ruby**
  
  
A web server may also perform other web related tasks, like caching content to speed the delivery of commonly requested contented (also known as web acceleration), or like limiting the speed of response to specific clients depending on specific contexts.   

- Read more about the general practice of servers in this article:
- `Concepts and Types fo Servers - Overview` [^1]


### The Apache Web Server

The Apache web server is a very important web server application on the market, dominating around 33% across all websites [Hostinger](https://www.hostinger.com/tutorials/what-is-apache), and it is the most widely used web server in Unix-like operational systems. [Guru99.com](https://www.guru99.com/apache.html)


It's a free and open-source web server application maintained by the Apache Software Foundation, being one of the oldest and most reliable web server software, which was first released in 1995. 

It is HTTP application compatible with any operation system, highly customizable because of its modular architecture, which allows its administrators to turn on and off many of the additional functionalities.


Among others, some of the modules of the Apache application:

- **Security**
- **Caching**
- **URL rewriting**
- **Password authentication**
- **Server Side Languages**
- **Virtual hosting**
- **Logging**


#### Apache Basic Structure

It's a modular, process-based web server application which creates threads for each simultaneous connection, and because the use of is Virtual Hosting module, this web server can also serve a wide number of different websites..

It's interesting the already mentioned capability of the application to have its feature modules installed by demand, and in more specific terms:

`All modules can be compiled as a Dynamic Shared Objects (DSO is an object file that could be shared by multiple apps while they are executing) that exists separately from the main apache file. The DSO approach is highly recommended, it makees the task of adding/removing/updatiing modules from the servers configuration very simple`  Guru99.com](https://www.guru99.com/apache.html)


#### Other Features Present in Apache

The Virtual Host, for example, allows the web server to host multiple web sites on the same server, so there is no need to work with many separeted machines for the single purpose of hosting web sites.

They are of two types:

1. **Name-based Virtual host**: it allows to host multiple virtual sites on a single IP address.
2. **Address-based or IP based Virtual host**: for this type here there is the need of more than one IP address configured on the server.


Working with security features in Apache:

1. **Hide Apache version and OS information**: informations that may be sent to the client by the errors notifications, and that could be used by hackers to plain attacks.
2. **Disabling the Directory Listing**: if the document root directory does not have an index file, by default Apache will show all the content on the document root directory. And this feature should be turn off.
3. **Disabling unnecessary modules**: it's a good practice to disable all unnecessary modules that are not in use.   
    3.1. All the enabled modules can be seem in the Apache configuration file.
4. **Restrict access to files outside the web root directory**: this can also be done in the web server configuration file.
5. **Using mod_evasive to rebutting the DoS attack**: this is a third-party module that detects DoS attack and prevents it from doing larger damage, as if it would do if the server was left to run its course.
6. **Using mod_security to enhance apache security**: this module works as a firewall allowing to monitor traffic in real time. It also prevents the web server from brute force attacks.
7. **Limiting request size**: since Apache does not have any restriction on the total size of the HTTP request this could lead to a DoS attack. So, it's possible to limit the request size with the Apache directive "LimitRequestBody" and the direct tab. 
    7.1. The value could be set to anything frm 0 to 2GB as per the requirements.

    
There is also the Apache Logging, that can provide detailed information that helps to detect common issues with the web server, and in order to create access logs, mod_log_configmodule must be enabled.

Three directives available in Apache config file:

1. **TransferLog**: creating a log file.
2. **LogFormat**: Specifying a custom format.
3. **CustomLog**: creating and formating a log file.
    

And 2 types for the Apache Log Format:

1. **Common Log Format**
2. **Combined Log Format**
 
    
- Read more about the Apache web server:
- [What Is Apache? An In-Depth Overview of Apache Web Server - Hostinger](https://www.hostinger.com/tutorials/what-is-apache)
- [Apache.org/](https://httpd.apache.org/)
- [How-To Tutorials - Apache.org](https://httpd.apache.org/docs/2.4/howto/)
- [Apache Tutorials for Beginners - Guru99.com](https://www.guru99.com/apache.html)


### The Nginx Web Server

`Nginx is an open source, fast, lightweight, and high-performance web server that can be used to serve static files. Nginx is considered as the popular web server behind Apache web server and Microsoft's IIS`. [JavaTPoint](https://www.javatpoint.com/nginx-tutorial)

And more recently, `2019 update: NGINX has now passed Apache to become the most popular web server for the top 1,000, 10,000, 100,000, and 1 million busiest websites in the world`. [Nginx.com](https://www.nginx.com/blog/using-nginx-plus-web-server/)

It's pronouced as `engine-ex`, and in its initial release Nginx functioned for HTTP web serving, but later it has been evolving as to tackle more features like:

- Serves as a **reverse proxy** for HTTP, HTTPS, SMTP, IMAP, POP3 protocols.
- As a **HTTP load balanceer**
- As a **HTTP cache**
- As a **email proxy** for IMAP, POP3, and SMTP.


#### Nginx Basic Structure

It's a concurrent based architecture that also deals with event-driven and asynchronous tasks, features which `makes nginx as the most reliable servers for scalability and speed`.  [JavaTPoint](https://www.javatpoint.com/nginx-tutorial)

Also, Nginx is easier than Apache to be configurated, and has set some changes over the traditional web server environment, where it was usual to have deployed the web server itself and the reverse-proxy load balancer (ADC) as two separate components.

But, according to the same [Nginx article](https://www.nginx.com/blog/using-nginx-plus-web-server/), as one reason for the deployment of ADC was to mitigate performance problems with the web service, to combine the ADC and the web server into a single tool has brought a great hype to the application, improving performance and scalability at both of the ADC and web server layers of the whole application.


Comparing to Apache which uses threads to deal with the connections, there is a overhead of resource in this architecture, while Nginx can scale better the resources. So, not only it can handle more requests, but it can maintain a stead use of memory and other resources.


Another interesting point in its architecture is that Nginx while specializing in serving static content, it can use its proxy feature to deliver the dynamic contents to the specialized dynamic web server (WebSphere, JBoss, Tomcat, Apache, etc.), thus handling a very smooth operation.


#### Other Features Present in Nginx

- **Support for multiple protocols**: HTTP, HTTPS, WebSocket, IMAP, POP3, SMTP.
- **Caching**
- **Compression**
- **SSL terminal**
- **HTTP video streaming**: MP4, FLV, HDS, and HLS.
- **Request filtering**
- **Header manipulation**
- **Acrivity monitoring**
- **Live binary upgrades**: to eliminate downtime.
- **Graceful restart**: with non-stop request processing.
- **Logging**
- **Full reverse proxy and load balancing functionality**


- Read more about the Nginx web server:
- [The Complete NGINX Cookbook - Free Ebook](https://www.nginx.com/resources/library/complete-nginx-cookbook/)
- [Installing NGINX on Debian/Ubuntu - JavaTPoint](https://www.javatpoint.com/how-to-install-nginx-on-debian-ubuntu)
- [Nginx Tutorial - JavaTPoint](https://www.javatpoint.com/nginx-tutorial)











What Is Apache? An In-Depth Overview of Apache Web Server - https://www.hostinger.com/tutorials/what-is-apache

Tomcat vs. Apache HTTP Server: What's the difference? - https://www.theserverside.com/video/Tomcat-vs-Apache-HTTP-Server-Whats-the-difference

Conhecimento de servidores web: Nginx e Apache.

### Further Reading

[The Complete NGINX Cookbook - Free Ebook](https://www.nginx.com/resources/library/complete-nginx-cookbook/)


### References

[Using NGINX and NGINX Plus as a Web Server - Nginx.com](https://www.nginx.com/blog/using-nginx-plus-web-server/)

[Web Server - TutorialsPoint](https://www.tutorialspoint.com/internet_technologies/web_servers.htm)

[Apache Tutorials for Beginners - Guru99.com](https://www.guru99.com/apache.html)

[O que é um servidor web (web server)? - MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/What_is_a_web_server)

[What Is a Web Server? - Nginx.com](https://www.nginx.com/resources/glossary/web-server/)

[What Is a Server? - LifeWire](https://www.lifewire.com/servers-in-computer-networking-817380)


[]()


[^1]:concepts-and-types-of-servers-2022-03-19


