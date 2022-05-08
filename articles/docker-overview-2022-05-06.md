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
    2.2. Logging at Docker Hub
3. ##### Basic Operations with the Containers
	3.1. Using Arguments from the Terminal   
	3.2. Storage Volumes
	3.3. Containers Resources
4. ##### Exploring the Docker Application
    4.1. Logs and Statistics from Docker   
    4.2. Application Deployments with Docker   
    4.3. Debugging the Containers
5. ##### Advanced Topics
    5.1. Backend Modes   
    5.2. Extended Security with SELinux and AppArmor
6. ##### Further Reading
7. ##### References

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


The [Docker Hub](hub.docker.com) is one example of remote repository create by the Docker enterprise to be shared by the Docker community. 


- Other public repositories:
1. [Docker Hub](https://hub.docker.com)
2. [Quay.io](https://quay.io)



- And some players for private repositories:
1. [GitHub](http://github.com/docker/docker-registry)
2. [CoreOS Enterprise Registry](https://www.redhat.com/en/technologies/cloud-computing/quay)
3. [Docker Hub Enterprise](https://www.docker.com/pricing/)


#### Logging at Docker Hub

By defaul Docker uses as remote repository the Docker Hub and it can be logged on by 'username' and 'password':

```
$ docker login
``` 


###### It is interesting to access Docker Hub with tokes for 2 reasons:

1. To investigate the last usage of the access token and disable or delete it if you find any suspicious activity.
2. When using an access token, it's not allowed to perform any admin activity on the account, including changing the password. It protects your account if your computer is compromised.


[Docker Docs](https://docs.docker.com/docker-hub/access-tokens/):
![docker-hub-access-token](/images/articles/development/docker-hub-access-token.png)


- To create your access token at Docker Hub:
1. Log in to hub.docker.com.
2. Click on your username in the top right corner and select Account Settings.
3. Select Security > New Access Token.    
    3.1.  Add a description for your token. Use something that indicates where the token will be used, or set a purpose for the token. You can view the following access permissions from the drop-down.   
    3.2. Copy the token that appears on the screen and save it. You will not be able to retrieve the token once you close this prompt.
4. Use `docker logout` to avoid problems with cached login credentials.
5. Proceed to login with `docker login --username <username>`
    4.1. Enter the token and asked for the password


- **Security notes**
1. **Treat access tokens like your password and keep them secret. Store your tokens securely (for example, in a credential manager).**
2. **Access tokens are valuable for building integrations, as you can issue multiple tokens, one for each integration, and revoke them at any time.**


### Basic Operations with the Containers

One basic command to use with containers is `docker run`, which deals in fact with 2 different processes, one to create the container and the other to start it. Thus, it could also be substited by a sequence of commands, a `docker create` and a `docker start`. Other related commands would be `docker stop` and `docker kill`, `docker pause`, `docker unpause`.


Another import command is `docker ps` which allows to search and filter for running containers. For all the containers, even those not in execution, `docker ps -a`. And it also brings some information about the containers like:

1. **Container ID**
2. **Image**
3. **Command**
4. **Created**
5. **Status**
6. **Ports**
7. **Names**


And to search for some speciffic container metadata there is the `docker inspect` which returns a JSON with the 'labels' information as one of its properties:

``` 
$ docker inspect 83453834348ba4
``` 

Finally, to erese a container from the host there is the `docker rm`:

```
$ docker rm 873c28292d23
``` 

And, eventhough there isn't a general commando to erase all the containers from the system, the authors point to a costum solution:

```
$ docker rm $(docker ps -a -q)
``` 

And all the images:

```
$ docker rmi $(docker images -q -)
``` 


###### Other articles about Containers and Containerization:
- Containerization - Overview [^9]


###### Using Docker with specific languages:
- [Language-specific guides - Docker.com](https://docs.docker.com/language/)
- [Official Node.js Docker Image - Docker.com](https://hub.docker.com/_/node/)
- [Dockerizing a Node.js web app - nodejs.org](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
- [Node.js Docker Best Practices Guide - github.com](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md)
- [Introduction to Docker for Javascript Developers (feat Node.js and PostgreSQL) - Dev.to](https://dev.to/alexeagleson/docker-for-javascript-developers-41me)
- [Learn Docker - DevOps with Node.js & Express - FreeCodeCamp](https://www.youtube.com/watch?v=9zUHg7xjIqQ)
- [Build an IoT application with Node.js and Docker - FreeCodeCamp](https://www.youtube.com/watch?v=mtDJfSHQfAM)
- [Docker and Kubernetes - Full Course for Beginners - FreeCodeCamp](https://www.youtube.com/watch?v=Wf2eSG3owoA)
- [Kubernetes Course - Full Beginners Tutorial (Containerize Your Apps!) - FreeCodeCamp](https://www.youtube.com/watch?v=d6WC5n9G_sM)



#### Using Arguments from the Terminal

###### --dns --dns-search


```
$ docker run --rm -ti --dns=8.8.8.8 --dns=8.8.4.4 \ 
    --dns-search=example1.com --dns-search=example2.com \
    ubuntu:latest /bin/bash
``` 


###### --hostname

The default hostname for a container is tis ID, but using the `--hostname` argument it is possible to fully qualify the container. But it is important to notice that this is only a internal qualification for the container hostname, since externally it does not change the DNS outside of Docker, nor the networking isolation, meaning that others container cannot connect to it with this qualified hostname:

```
$ docker run --rm -ti --hostname="mycontainer.example.com" \ 
    ubuntu:latest /bin/bash 
``` 

###### -l (labels)

As it was seem before, with creating the Dockerfile, it is possible to use the **LABEL** instruction to set this labels there, but it's also possible to create these metadata from the command line:

```
$ docker run -d --name labels-example -l deployer=Duck l- tester=Daft \
    ubuntu:latest sleep 1000
``` 

###### --mac-address


``` 
$ docker run --rm -ti --mac-address="a2:11:aa:22:bb:33" \
    ubuntu:latest /bin/bash
``` 


###### --name

The `--name` argument allows the user to give a specific name for the container, otherwise it would receive a random name from the Docker application, and it's important to notice that there can be only one container with such a name at the Docker host.:

```
$ docker create --name="awesome-service" ubuntu:latest
``` 


###### --restart

The `restart` argument can accept one of 3 different values:

1. **no**: it never restart after a shutdown.
2. **always**: it always restart after a shutdown, even if it was a normal endding for the app.
3. **on-failure**: it will always try to restart a certain amount of times if the container stop running with a code differente from **0**.

```
$ docker run -ti --restart=on-falure:3 -m 200m --memory-swap=300m \
    progrium/stress --cpu 2 --io 1 --vm 2 --vm-bytes 128M --timeout 120s
```


###### --rm

This argument allows to run a container even if it's image is already up by removing the preexistent:

```
$ docker run --rm -ti ubuntu:latest /bin/bash
``` 


#### Storage Volumes

Working with volumes for storage implies some pattern decisions, for example, deploying a storage backend solution from the Docker host, which would create dependencies for the created container.


The same is true creating internal storage in the container, though, it is possible to mount a internal filesystem in the container with `-v` argument:

```
$ docker run -rm -ti -v /mnt/session_data:/data ubuntu:latest /bin/bash
``` 

And for operational purposes there can be used a `--read-only` flag, so the container may not be overload with unexpected informations like log data:

```
$ docker run --rm -ti --read-only=true -v /mnt/session_data:/data \
    ubuntu:latest /bin/bash
``` 

And, according to the Matthias .K and Kane S. in their book, in that last example, the root folder is read-only, while the `/session_data` folder mounted is writable and ready for storage operations.


#### Containers Resources

Another important point made by the authors Matthias .K and Kane S in their book is the term 'noisy neighbor', which in IT usually means processes or applications draining resources from the others in the environment.

So, according to them this problem is easier to tackle while using virtual machines, while in Docker it requires more operations like:

1. **cgroup**: to inspect the resources being used by the kernel processes.
2. **Defining speciffic arguments with docker create**   
    2.1. The argument `-c` from Docker which provides CPU allocation for the container (and this is a relative value, meaning that it is only effective if there is more them one process available).    
    2.2. The argument `--cpuset` where the user defines a speciffic CPU for the container to work in.   
    2.3. The argument `-m`: `-m 512m` (but in this case, this is an absolute value, meaning that even if there was more memory available, it would stick to the value set. And if more memory is set that there is in the system, Linux would use swap memory).   
    2.4. The argument `--memory-swap`: this works with the `-m` argument, where the swap value would be the remainder of a subtration with the memory value (`-m 512m --memory-swap=768m`)   
    2.5. The argument `--ulimit`: using the flag `ulimit -a` it is possible to list all the settings for the argument. Another interesting point is the possibility to have default values together with the values for speciffic containers using `--deault-ulimit`.


```
$ docker run --rm -ti -c 512 --cpuset=0 progrium/stress \
    --cpu 2 --io 1 --vm 2 --vm-bytes 128M --timeout 120s
``` 

```
$ sudo docker -d --default-ulimit nofile=50:150 --default-ulimit nproc=10:20
``` 

``` 
$ docker run -d --ulimit nproc=100:200 nginx
``` 


- **Notes from the examples**:
- See that in the first example above, only the arguments before the image of the container are for the Docker application.
- The arguments after the image are for the `stress` command.


One point to be aware here is the fact that for Docker have access to some features like swap memory, for example, it is necessary that these feature are present at the kernel first during its initialization. So, there is the `docker info` command from terminal to get information about some features:

```
$ docker info
``` 


### Exploring the Docker Application

The Docker application makes available a set of some important commands for the user:

1. **Print the Docker version**: _docker version_   
    1.1. One interesting point returned from the terminal is the fact that the Docker application have many components where each of them guard their own speciffic versions.
2. **Print Server information**: _docker info_   
    2.1. The command brings many informations from the Docker Client, Docker Server, Linux kernel, etc.   
    2.2. And among of the Server information: number of containers and their states, number of images, Server version, Storage device, Plugins, Docker Root Dir, etc.
3. **Download of Images Upgrades**: _docker pull <image>:latest_
4. **Containers inspection**: _docker inspect <containerID>_  
    4.1. It returns a JSON with fields like: id, created, Args, state, name, Networks, Config.Env, Config.Labels, Config.Hostname, etc.   
    4.2. The _nsenter_ is a package from **linux-utils** which allow operations related with the Linux namespaces (thus, this means that this command does not need the Docker Server interation to function, just like when it is not responding).   
    4.3. Another difference from using _nsenter_ is that instead of the ContainerID it is necessary to have the process PID (Process ID).
5. **Access a running container**: _docker exec <containerID>_
6. **Visualize logs**: **docker log <containerID>** 
7. **Monitor statistics**: **docker stats <containerID>**



###### Bellow we have the command to access a running container and inside it the return from printing to the log the container's processes with the 'ps' Linux utility:
![docker-exec-01](/images/articles/development/docker-exec-01.png)
   


#### Logs and Statistics from Docker

According to the authors, Matthias .K and Kane S., in their book they explain that logs in Docker works by catching **stdout** and **sdterr**, and sending everything to a backend by the daemon stored in a JSON file for each container.


Bellow, we can return the logs from a container:

```
$ docker logs <containerID>
``` 


In terms of monitoring Docker has 2 commands that brings some statistics back:

1. **docker stats**:   
    1.1. ContainerID   
    1.2. Name   
    1.3. CPU usage  
    1.4. Memory usage (together with memory limit)   
    1.5. Menory percentage   
    1.6. Network I/O   
    1.7. Block I/O    
    1.8. PIDs
2. **docker events**: this command accepts 2 arguments to deal with timestamp in a ISO format:   
    2.1. The argument **--since**  
    2.2. The argument **--until**


``` 
$ docker stats <containerID>
``` 

The **docker stats**  command brings a summation with that 8 stats pointed above, more could be returned through a API call in the form of a JSON file. And there is also that second command **docker events** which creates a steam with events bring information from the containers life cycle.


``` 
$ docker events
``` 


![docker-events-01](/images/articles/development/docker-events-01.png)


Finally, there is a open source solution from Google, the cAdvisor which brings graphs, besides implementations to connect the Docker Server and its API to retrieve a prettier formmated JSON log.


![cadvisor-docker-monitoring-tool](/images/articles/development/cadvisor-docker-monitoring-tool.png)


#### Application Deployments with Docker

Also according to the authors, Matthias .K and Kane S., in their book they say that the deploying phase of software life cycle used to be the most complicated one, but that containerization came to help to simplify the process and also to achieve a reliable model of delivering.


As a comparing image, the traditional process of shipping applications can be safely coined from the navy task of bringing goods to a ship and trying to deal with all the complexities of storaging all kinds of commodities with shapes, forms, consistance all together.

But with containers, there is a unified model, where all the commodities are stored with the same pattern with well known features to be handled in a more reliable manner.

So, as a workflow for deployment the authors suggest:

1. **To build and test a Docker/Container image locally**
2. **To build the official image for test and deploying**
3. **Depoying the image to the server**


At its base, the basic deploy operation would imply a **docker pull** to the server and a **docker run** to atcivate the image into a running container, But, as the authors point out, this manual operation is prone to erros, because of the mechanical repetition and specially the lack of configuration consistance.

So, a consistant automatic process should deal with both the problems:

1. **Provide a repeatable process**: at each invoking the same process should be called.
2. **Provide the set of configurations**: to garantee that the same defined configurations will be deployed in each instance.


It is at this point that come in hand the tools for containers orchestration, like Docker Swarm or Kubernets, that not only deals with the Docker Client limitation to be connected to a single server, but they also provide a handful of features that are related to the whole process. Others orchestration tools:

1. **Kubernets**
2. **OpenShift**
3. **Nomad**
4. **Docker Swarm**
5. **Docker Compose**
6. **MiniKube**
7. **Marathon**
8. **Cloudify**
9. **Rancher**
10. **Containership**
11. **AZK**
12. **GKE**
13. **AKS**
14. **AWS EKS**



#### Debugging the Containers

For general debugging reasons there is the command **docker top** that can easily bring process running inside containers:

```
$ docker top <containerID>
```

###### Notes: but the authors Matthias .K and Kane alert that while using the 'docker top' command it is necessary to distinguish process that are running inside the containers and those from the host, using the commands from Linux terminal.:

1. **ps axlfww** 
2. **ps -ejH** 
3. **pstree 'pidof docker'**
4. **ps 'pidof docker'**` 
5. **strace -p PID**
6. **lsof -p PID**



###### Debugging the Network 

Also according to Matthias .K and Kane, the authors say that the operation to debug the net system should be a little more complicated, because when the Docker containers are not running in the 'host net option', they will have their own IPs, and they will not appear in the **netstat** command. Another command could be the **tcpdump**.


``` 
$ netstat -an
``` 

#### Debugging the Image History 

The history of the image can be traced with the 'docker history' command:

``` 
$ docker history <images-name>
``` 

#### Debugging the Containers Filesystem

The filesystem inspection is another important debugging operation because it is by the containers filesystem that its layers are build and so it is possible to search for any unusual change.

Here a the command is **docker diff**. It is interesting to notice that printed at the terminal, the first column with the values 'C' or 'A', means 'Added' and 'Changed':

```
docker diff <containerID>
``` 


### Advanced Topics


#### Backend Modes

According to Matthias .K and Kane, the authors say that as a application, Docker is not featured to connect direct to the Linux kernel, and that it only appears that way because of the easy of the operations.


On the contrary, they focus on the driver that is set at compile time, but that could be altered at running time. So, before Docker 0.9 there was 2 basic drivers, and their containers are not compatible one with another:

1. **LXC**
2. **Native-driver**


But form Docker 0.9 ahead the LXC version was substituted by another library, the **libcontainer**, which is written in Go, and that it is now responsible to deal with containers, namespaces, groups, and the default backend from Docker.


###### Storage Types

1. **AUFS**: this used to be the original storage drvier, but it started to lose compatibility with many distros, like RedHat, Fedora, CentOS and Ubuntu, etc.
2. **devicemapper**: this is another implementation that can support such features like LVM, disc encrypting, RAID, etc.
3. **BTRFS**: this backend brings the feature 'copy-on-write' which is the same feature used by docker to layer the images model.
4. **vfs**: this one is the simpler kind from the batch, but it is reliable for development enviroment.  
    4.1. Then, it is a slower solution, that it is not compatible with the feature 'copy-on-write'.
5. **overlayfs**: this is the default driver union filesystem for the Linux kernel.   
    5.1. It is quite similar to AUFS, but it is a simpler implementation.



#### Extended Security with SELinux and AppArmor

Eventhough the implementation of Linux kernel provides isolation from the processes being manipulated by Docker in the form of containers, in many cases using features like:

1. **cgroups**
2. **namespaces**


The process as a whole are still flowing through the Linux kernel, what in practical terms make them more exposed than a virtual machine that runs with a complete separed OS from the host machine.

And it for that reason 2 security features are presented to help to implement a more throughfully isolation for the containers:

1. **SELinux**
2. **AppArmor**


They are both features from Linux, where AppArmor comes from a Immunix Linux distribution from 1988 and the SELinux came as a featured developed by the NSA (National Security Agency), where both try to provide what is known as Mandatory Access Control.


The Mandatory Access Control is a important security feature, because it brings more refinement while delegating authorization in the Linux kernel environment. Thus, working with 2 general attributes:

1. **Initiatiors**
2. **Target**


So to extend the capacity of applying restrictions. Then, for exemple, if in plain terms a root user would have complete access to the whole system, having a target flag to it, defining its current job, the root user would then be limited by the current end that some application could have by itself.





### Further Reading

[Docker Hub - Docker](hub.docker.com)

[Quay.io - Red Hat](https://quay.io)

[Language-specific guides - Docker.com](https://docs.docker.com/language/)

[Official Node.js Docker Image - Docker.com](https://hub.docker.com/_/node/)

[Dockerizing a Node.js web app - nodejs.org](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

[Node.js Docker Best Practices Guide]- github.com(https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md)

[Introduction to Docker for Javascript Developers (feat Node.js and PostgreSQL) - Dev.to](https://dev.to/alexeagleson/docker-for-javascript-developers-41me)

[Learn Docker - DevOps with Node.js & Express - FreeCodeCamp](https://www.youtube.com/watch?v=9zUHg7xjIqQ)

[Build an IoT application with Node.js and Docker - FreeCodeCamp](https://www.youtube.com/watch?v=mtDJfSHQfAM)

[Docker and Kubernetes - Full Course for Beginners - FreeCodeCamp](https://www.youtube.com/watch?v=Wf2eSG3owoA)

[Kubernetes Course - Full Beginners Tutorial (Containerize Your Apps!) - FreeCodeCamp](https://www.youtube.com/watch?v=d6WC5n9G_sM)

### References

Matthias .K and Kane S. Primeiros Passos com Docker: usando contêineres em produção. Novatec, 2016.


[^1]:it-governance-and-management-overview-2022-03-27

[^2]:pmbok-and-project-management-methodologies-2022-03-29

[^3]:itil-service-management-framework-2022-03-30

[^4]:risk-management-overview-2022-04-03

[^5]:information-security-overview-2022-04-05

[^6]:cryptography-steganography-and-cryptanalysis-overview-2022-04-07

[^7]:continuity-plan-and-essentials-for-businesses-overview-2022-04-06

[^8]:open-web-application-project-foundation-owasp-overview-2022-04-18

[^9]:containerization-overview-2022-03-25


