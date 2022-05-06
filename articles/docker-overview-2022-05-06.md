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
    2.1. Base-Images, Repositories and Registries
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


###### Using Docker with specific languages:
- [Language-specific guides - Docker.com](https://docs.docker.com/language/)
- [Official Node.js Docker Image - Docker.com](https://hub.docker.com/_/node/)
- [Dockerizing a Node.js web app - nodejs.org](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
- [Node.js Docker Best Practices Guide]- github.com(https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md)


### Working with Images

Each and every container is based on an image, which provides everything Docker has to install and execute, and basically there is 2 kinds of images:

1. **Public image**
2. **Customized image**


Also to structure the image there is the _Dockerfile_, a file that usuallyt is kept at the root file for the application and which describes the steps necessary to create the image.

Bellow there is a example of an image for Node.js, taken from the Matthias .K and Kane S. book:


- **Dockerfile**
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

The first line of the Dockerfile specifies that it is a Node.js application version 10, and the **MAINTAINER** instruction gives information from the author of the image.

Next there the **LABEL** feature, which was introduced in Docker 1.6, giving the operation the ability to add metadata which can be used to search and identify the images and containers. And the command `docker inspect` can be used to inspect the applyed labels for the containers.

The **USER** instruction gives the ability to change the default user for the processes. In the example it was used the same user which is already the default user for the Docker operation, that is the root user.

Here those authors make an important assessment about security, that is the fact that eventhough the containers are executed in isolation, they are still managed in the kernel of the host, and for that reason, also for best practices, they should be executed in the context of the least priviledge.


Continuing the image creating there is the **ENV** instructions which allow for the use of environment variables, simplifying the operation and keeping the Dockerfile according the DRYer pattern (Don't Repeat Yourself pattern).


Next, there is a chain of **RUN** instructions used to initiate and create the processes, and in which it is possible to see the use of that enviroment variable created.

Also here the authors bring a warning about performance issues when building the containers. So, to speed up the process, instead of jamming a image with many high costing commands like `apt-get -y update` or `yum -y update`, it should be better to insert executing images that have already process those processes.


With the **ADD** instruction we can have local files copied into the image, which in turn give the ability to the container to have themselves these important data in their own filesystem.


Then, with the **WORKDIR** instruction the operation can change the the working directory for the subsequent instructions, and finally the **CMD** instruction defines the commands to initialize processes inside the container.

At this point the author give 2 last best practices:

1. To be aware that the building process runs in layers, and that each layer is currently based in the last layer built.   
    1.1. So, placing those layers that are constantly changing at the end helps to keep the operation more agile, since only the last changing layers will hve to be rebuilt with the new changes during the updates.
2. To improve scalability and to lower complexities, it should be wise to use a single process for each container.   
    2.1. In the example above, the application `supervisord` is being used to monitor the node application inside the container.


#### Base-Images, Repositories and Registries

Base-images are the lowest level of which other images can be made from, and they usually bring only the basic installation for some application, file or feature. So, a good example of this would be the basic installation of the prefered Linux distro: Ubuntu, Fedora or CentOS, etc.


Once the images are ready, the normal operation would be to put the images created at some kind of remote repository where the images could be accessed from any point or host. So, there can be either public repositories or private ones.


The [Docker Hub](hub.docker.com) is one example of remote repository create by the Docker enterprise to be shared by the Docker community. Other public repositories:

1. [Docker Hub](https://hub.docker.com)
2. [Quay.io](https://quay.io)


And some players for private repositories:

1. [GitHub](http://github.com/docker/docker-registry)
2. [CoreOS Enterprise Registry](https://www.redhat.com/en/technologies/cloud-computing/quay)
3. [Docker Hub Enterprise](https://www.docker.com/pricing/)


#### Logging at Docker GitHub

By defaul Docker uses as remote repository the Docker Hub and it can be logged on by 'username' and 'password':

```
$ docker login
``` 


But it is interesting to access Docker Hub with tokes for 2 reasons:

1. **To investigate the last usage of the access token and disable or delete it if you find any suspicious activity.**
2. **When using an access token, it's not allowed to perform any admin activity on the account, including changing the password. It protects your account if your computer is compromised.**



- To create your access token:
1. Log in to hub.docker.com.
2. Click on your username in the top right corner and select Account Settings.
3. Select Security > New Access Token.    
    3.1.  Add a description for your token. Use something that indicates where the token will be used, or set a purpose for the token. You can view the following access permissions from the drop-down.   
    3.2. Copy the token that appears on the screen and save it. You will not be able to retrieve the token once you close this prompt.
4. Use `docker logout` to avoid problems with cached login credentials.
5. Proceed to login with `docker login --username <username>`
    4.1. Enter the token and asked for the password


![docker-hub-access-token](/images/articles/development/docker-hub-access-token.png)
    

###### Notes: 

- Treat access tokens like your password and keep them secret. Store your tokens securely (for example, in a credential manager).
- **Access tokens** are valuable for building integrations, as you can issue multiple tokens – one for each integration – and revoke them at any time.






### Further Reading

[Docker Hub - Docker](hub.docker.com)

[Quay.io - Red Hat](https://quay.io)

[Language-specific guides - Docker.com](https://docs.docker.com/language/)

[Official Node.js Docker Image - Docker.com](https://hub.docker.com/_/node/)

[Dockerizing a Node.js web app - nodejs.org](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

[Node.js Docker Best Practices Guide]- github.com(https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md)


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


