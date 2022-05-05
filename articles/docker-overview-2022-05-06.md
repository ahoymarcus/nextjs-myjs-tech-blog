---
author: 'Marcus Vinicius Richa'
title: 'Docker - Overview'
date: '2022-05-06'
subject: 'development-articles'
description: 'Docker is a open platform for developing, shipping, and running applications, and it works provinding the ability to package and run as application in a isolated environment called container.'
---

# Docker - Overview

1. ##### Introduction  
2. ##### Working with Images
3. #####  
	3.1.	
	3.2.
4. ##### 
5. ##### 
6. ##### 
7. #####  
8. ##### 
9. ##### Further Reading
10. ##### References

### Introduction
 
Docker is a open platform for developing, shipping, and running applications, and it works provinding the ability to package and run as application in a isolated environment called container


###### Other articles from the Governance and Management series:
- `IT Governance and Mangement - Overview` [^1]
- `PMBOK and others Project Management Methodologies` [^2]
- `ITIL - Service Management Framework` [^3]
- `Risk Management - Overview` [^4]
- `Information Security - Overview` [^5]
- `Cryptography, Steganography and Criptanalysis - Overview` [^6]
- `Continuity Plan and Essentials for Businesses - Overview` [^7]     
- `Open Web Application Project Foundation (OWASP) - Overview` [^8]


###### Articles about Containers and Containerization:
- Containerization - Overview [^9]


### Working with Images

Each and every container is based on an image, which provides everything Docker has to install and execute, and basically there is 2 kinds of images:

1. **Public image**
2. **Customized image**


Also to structure the image there is the _Dockerfile_, a file that usuallyt is kept at the root file for the application and which describes the steps necessary to create the image.

Bellow there is a example of an image for Node.js, taken from the Matthias .K and Kane S. book:


**Dockerfile**
``` 
FROM node:0.10
MAINTAINER Anna Doe <anna@example.com>
LABEL "rating"="Five Starts" "class"="First Class"
USER root
ENV AP /data/app
ENV SCPATH /etc/supervisor/conf.d
RUN apt-get -y update

# The daemons
RUN apt-get -y install supervisor
RUN mkdir -p /var/log/supervisor

# Supervisor Configuration
ADD ./supervisord/conf.d/* $SCPATH

# Application Code
ADD *.js* $AP/

WORKDIR  $AP
RUN npm install
CMD ["supervisord", "-n"]
``` 

The first line of the Dockerfile specifies that it is a Node.js application version 10, and the 'MAINTAINER' instruction gives information from the author of the image.









### Further Reading



[]()

### References

Matthias .K and Kane S. Primeiros Passos com Docker: usando contêineres em produção. Novatec, 2016.


[]()


[^1]:it-governance-and-management-overview-2022-03-27

[^2]:pmbok-and-project-management-methodologies-2022-03-29

[^3]:itil-service-management-framework-2022-03-30

[^4]:risk-management-overview-2022-04-03

[^5]:information-security-overview-2022-04-05

[^6]:cryptography-steganography-and-cryptanalysis-overview-2022-04-07

[^7]:continuity-plan-and-essentials-for-businesses-overview-2022-04-06

[^8]:open-web-application-project-foundation-owasp-overview-2022-04-18

[^9]:containerization-overview-2022-03-25


