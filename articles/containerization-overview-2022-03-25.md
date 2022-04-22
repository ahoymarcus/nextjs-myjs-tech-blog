---
author: 'Marcus Vinicius Richa'
title: 'Containerization - Overview'
date: '2022-03-25'
subject: 'development-articles'
description: 'Containers are technologies which allow to package and isolate applications together with all their execution environment, there is, with all the arquives necessary to execute them. They are more portable, more resource-efficient in nature, more secure and easily to deploy.'
---

# Containerization - Overview

1. ##### Introduction  
2. ##### Linux Containers
    2.1. Brief History of Conainers    
    2.2. Basic Structure of the Containers Architecture   
    2.3. Advantages of Using Containers    
    2.4. Some Use Cases for Containers
3. ##### Containerization and Microservices
4. ##### Containezation and Security
5. ##### Docker
    5.1. Docker Objects   
    5.2. Advantages of Docker   
    5.3. Disadvantages of Docker
6. ##### Kubernetes
    6.1. Common Terms Used on the Kubernetes Operation   
    6.2. Basic Kubernetes Features    
    6.3. Basic Kubernetes Architecture    
    6.4. Related Tools Helping with the Kubernetes Operation    
    6.5. Kubernetes and Docker
7. ##### OpenShift
    7.1. Brief History of OpenShift   
    7.2. Basic Features of OpenShift   
    7.3. Basic Architecture of OpenShift
8. ##### Further Reading
9. ##### References

### Introduction
 
According to [IBM](https://www.ibm.com/cloud/learn/containerization), containerization `is the packaging of software code with just the operating system libraries and dependnecies required to run the code to create a single lightweight executable - called a container - that runs consistently on any infrastructure.`

And to [Red Hat](https://www.redhat.com/pt-br/topics/containers) Linux Containers are technologies which allow to package and isolate applications together with all their execution environment, there is, with all the arquives necessary to execute them, everything which make easier to migrate the application between environment without losing functionalities. 

And the great benefits that Containers brought to make than `the de facto units of modern cloud-native applications` are its more portable, more resource-efficient in nature, more secure and easily to deploy.



### Linux Containers

#### Brief History of Conainers

As it is explained at the site [Aqua](https://blog.aquasec.com/a-brief-history-of-containers-from-1970s-chroot-to-docker-2016), the begging of the landscape for containers started far back at **1979** with the Unix V7 OS.

It turns out that at that time a new filesystem was introduced, the `chroot`, which brought separation to a process and its childreen to some isolated location of the filesystem. Finally, `chroot` was also added to BSD/OS in **1982**.

So, still according to the site [Aqua](https://blog.aquasec.com/a-brief-history-of-containers-from-1970s-chroot-to-docker-2016), it was not until the **2000s** when came up the idea to create a small shared-environment called FreeBSD Jails, which in effect would allow administrators to partition a FreeBSD computer system into several independent smaller systems with their own IP address for network and configuration also.

In **2001** there was a implementation from Linux VServer that would patch a Linux Kernel as to bring that jail feature to Linux. But it was experimental and it was discontinued since **2006**.

In **2004** Solaris Containers produced a feature that could leverage snapshots from the partitions that ware created, and then used to be cloned. And in **2005** Open VZ this Linux application introduced a patched Linux Kernel for the same purposes, but that was not released as part of the official Linux kernel.

In **2006** Google launched a feature of Process Containers, renamed it later to `Cotnrol Groups (cgroups)` and eventually came to be merged to the Linux Kernel, until that in **2008** came the most complete use of Linux container manager implement using `cgroups` and Linux namespaces, withou any sort of patches.

There were also contributions to these efforts in **2011** and in **2013**, but it was later in **2013** that Docker emerged and brought popularity to the whole process.

Then, from **2016** ahead the site brings a very descriptive development of the whole environtment of Linux containers, including security advancements, tools, etc.

###### Note: 
- BSD/OS is a discontined proprietary version of the BSD operating system developed by the Berkeley Software Design. [Wikipedia](https://en.wikipedia.org/wiki/BSD/OS)



#### Basic Structure of the Containers Architecture

When comparing containers to a virtural machines, it is easy to see the fact that because containers share the machine's operating system kernel and do not create overhead by detaching resources from the OS besides for the application itself, this container feature becomes very lightweight.

Totally different from VMs, for example, which need to grasp computational resources direct from the machine, like memory and disk space, and has to configure its own operanting system for all the environment is which it is operating. For all that it become a very heavy feature with a lot of overdead for the whole system.


First, there is the Linux architecture of isolating process in the machine. Though, this process conducted by `chroot` brings isolation only in the filesystem and configuration layer, but it does not isolate the process from reaching arbitrarily resources from the computer like memory, CPU, network, etc.

Also, as it was seeem, the use of VMs to achieve that other level of isolation come with great cost in resources, so instead of the traditional VMs it was introduced a arrangement of 4 basic features, and through the common use of all these features to have a Linux machine handling isolated containers:

1.  **namespaces**: it allows to group resources together with processes in one common collection.   
    1.1. There are currently six namespaces in the Linux kernel: mount, process, network, interprocess communication, hostname and user.   
    1.2. This namespaces allow the each collection may tune its resource configurations without meddling with other collections resources.
2. **cgroups or 'control groups'**: it solates processes and its children in the filesystem.   
    2.1. And also work for limiting and recording the usage of the system resources..
3. **images**: the image has in itself the software and the devices arranged for each container.
    3.1. Also, the image has to define a base for a internal representation of the filesystem inside of the container, and for that it creates a `a slimmed-down representation of the target operating system`.  [Olivo K.](https://kyleolivo.com/dev/2016/08/15/containers-how-do-they-work/)
4. **userspace tools**: which can be like LXC or docker.


As we can understanting, bring this structure from the operation of a traditional Linux system, where this system is started with the `init process` created during the `boot` start of the system, and each subsequent process is `fork-execed` from its parent process creating the basic design for the system process tree.

Now, in the case of components, one important element for hosting and managing a new `init process` is with the use of `namespace`, that allow to spaw a new process tree inside the system. But, the `namespace` alone cannot isolate each new collection or tree of processes to overreaching the systems resources.

And that's when `cgroups` comes into place, because together with managing the strucutre of the container process in the filesystem, it is also responsible for placing limits to the consumption of resources from each container.


`With the combination of namespacing and cgroups, we’re able to spawn a separate process hierarchy with a limited view of system resources, and we can constrain how much access this process hierarchy has to the resources that it can see.` [Olivo K.](https://kyleolivo.com/dev/2016/08/15/containers-how-do-they-work/)


Finally, after the containers were adjusted and configured by the features above, there still the matter of defining the contents of each container built has from the container image and to define some means to manage and orchestrate the whole containerization process, from tools like Docker or LXC.



#### Advantages of Using Containers

Some of the signicant benefits from containers to developers and teams:

- **Portability**
- **Agility**
- **Speed**: the containers are lightwaight and share directly from the machine's OS. For exemple, there is no operational system boot for containers.
- **Fault Isolation**:  each containerized application is isolated and operates independently of others, meaning that any fauilure point does not affect the other points of the containers operation. And even during patches or correction, the processes with the other container are kept without any downtime.
- **Efficiency**: again, because the container is lightweight, there can be more containers operating in a machine any given time.
- **Ease of Management**: there are also tools for container orchestration that helps or even automates with many tasks related with containers: installation, scaling, management of workloads and services, etc.
- **Security**: not only each container is isolated from the other containers, but also it is possible to tune each individual containers configuration to restrict communications from any unnecessary resources.



#### Some Use Cases for Containers

- **Native-Cloud development**
- **Serveless development**
- **Distributed systems**
- **DevOps**
- **Microservices**



### Standardization and The Open Container Initiative (OCI)

According to [IBM](https://www.ibm.com/cloud/learn/containerization) the Open Container Initiative (OCI) stablished in 2015 by Docker and many other industry leaders has been promoting common, minimal, open standards and specifications for the container technology.


And one of the many results from that efforts is to allow a better understanding of the whole ecosystem and the appearence of more players on the market:

- **Containerd**
- **CoreOS rkt**
- **Mesos Containerizer**
- **LXC Linux Containers**
- **OpenVZ**
- **Crio-d**


### Containerization and Microservices

The are many common points between these two kinds of architectures or pattern, beside the fact that they also make a very good fit together. 

So, some concepts from both pattern are very similar:

1. Smaller components.
2. Simpler deployments.
3. Portability.
4. Scalability.


But together, containezation allows microservices to gain with encapsulation, even more portability, fault isolation, automation of installation, scaling and management.


### Containezation and Security

Firstly, containerized application have a inherently level of security because of the isolation of the process in the operations. But there are still some layers where resources are share between containers processes, like interfaces and the OS itself. Also, there the problem of security with the containers images itself.


Thus, all those points are closely followed by the groups responsible with standards for container, which have been taking the approach to 'secure-by-default' all the containerized operation.


While all this are still a work in progress, but efforts to bring the elements of security found in the Linux system to be replicated at the container level, just as to provide to Linux features themselves a more granular and refined features to deal specifically with the constraints of containers and their processes.


### Docker

Docker is a open platform for developing, shipping, and running applications, and it works provinding the ability to package and run as application in a isolated environment called container.

Also, Docker provides a standardized environment with tooling and a platform to manage the lifecycle of the containers, all that inside a Client-Server architecture that can run either in the same machine or over a network, using REST API or UNIX sockets:

1. **Docker Server or Daemon**: which runs with the command `dockerd` and listens for Docker API requests.   
    1.1. The Docker server can also communicate with othes daemons to manage Docker services.
2. **Docker Client**: which runs with the command `docker`, it is the primary way to Docker users interact with the daemon.   
    2.1. The Docker client can communicate with more then one daemon.
3. **Docker Desktop**: it's a easy-to-install application to run Docker in the Windows or Mac environment.   
    3.1. The Docker Desktop comes with a list of components: the daemon, the client, Docker Compose, Docker Content Trust, Kubernetes, and Credential Helpers.
4. **Docker Registries**: it is a registry to store Docker images.    
    4.1. There is also the public registries, which Docker Hub is a default option where the server searchs for images.   
    4.2. Much like the GIT applicatioin, Docker uses `docker pull` to fetch a image and `docker push` to send an image to the remote repository.


### Docker moto: build, ship and run anywhere...


###### Docker Underlying Technology

Docker is written in the Go language and uses the Linux kernel functionality of `namespace` to provide a isolation and a wrapper to the application process as a container.

`When you run a container, Docker creates a set of namespaces for that container. These namespaces provide a layer of isolation. Each aspect of a container runs in a separate namespace and its access is limited to that namespace.` [Docker.com](https://docs.docker.com/get-started/overview/)



#### Docker Objects

The Docker objects are much like the structures or basic components which pertains to the Docker environment:

1. **Image**: it's a read-only template with instructions to create a speciffic Docker container.
2. **Containers**: this is a runnable instance of an image, which can be managed using either the Docker API or the CLI.
    2.1. Any changes to the  container that are not stored in persistant storage will desapear when a container is deleted.


###### Exemple of a Docker Image

In this example from [GeekHunter](https://blog.geekhunter.com.br/docker-na-pratica-como-construir-uma-aplicacao/) there is a `Dockerfile` that creates a image with Python and its required dependencies:

```
# syntax=docker/dockerfile:1
FROM python:3.7-alpine
WORKDIR /code
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
RUN apk add --no-cache gcc musl-dev linux-headers
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
EXPOSE 5000
COPY . .
CMD ["flask", "run"]
```


###### A Example Case form the Docker CLI

Here, a simple example from [Docker](https://docs.docker.com/get-started/overview/), so when this command bellow is run, the following happens (assuming you are using the default registry configuration):

```
$ docker run -i -t ubuntu /bin/bash
```

1. If you do not have the ubuntu image locally, Docker pulls it from your configured registry, as though you had run docker pull ubuntu manually.
2. Docker creates a new container, as though you had run a docker container create command manually.
3. Docker allocates a read-write filesystem to the container, as its final layer. This allows a running container to create or modify files and directories in its local filesystem.
4. Docker creates a network interface to connect the container to the default network, since you did not specify any networking options. This includes assigning an IP address to the container. By default, containers can connect to external networks using the host machine’s network connection.
5. Docker starts the container and executes /bin/bash. Because the container is running interactively and attached to your terminal (due to the -i and -t flags), you can provide input using your keyboard while the output is logged to your terminal.
6. When you type exit to terminate the /bin/bash command, the container stops but is not removed. You can start it again or remove it.


###### Note: the `/bin/bash` instruction calls an interative BaSH session, and sometimes it could also be called using `/bin/sh`


#### Advantages of Docker

1. **Docker is fast**: a container is managed much like any other system process.
2. **Docker is multi-platform**
3. **Easy to configurate**
4. **Easy to reuse the containers**
5. **Docker maintain a clean environment**: each container is isolated and can be excluded at any time.
6. **Easy to deploy**


#### Disadvantages of Docker

1. Only the core platform is open source and standardized.
2. To deal with persistant data storage is still a matter to be apprimored.
3. Docker does not work well with graphical applications.
4. Except for easy delivery and an easy packaging mechanism, Docker is a better fit for distributed applications and those that have somewhat a microservice design pattern.
5. Eventhough Docker is lightweight, it still has some overhead when compered to bare-metal speeds.


###### Using Docker with specific languages:
- [Language-specific guides](https://docs.docker.com/language/)



### Kubernetes

Kubernetes, also known as 'K8s', is a open-source platform for automatizing Linux containers. It's a tool that eliminates most part of the manual processes to deploy and scalate the applications, and that is important to set up and manage clusters of containers.

The technology was originally developed by Google, inspired from a container platform called Borg, and it was then released as open-source to the Cloud Native Computing Foundation in 2015. 


The importance of Kubernetes to the container operation comes from the fact that today applications are designed across multiples containers, and need many layers, including security, all that which nedd also to be deployed and scaled.


So, to all those complexities one could add things like balancing, also, besides the necessary integration to other services like network, storage, security, etc., making the whole set for the container structure even more complex.


###### Note: the word 'K8s' cames from the Greek language meaning pilot or helsmen.


#### Common Terms Used on the Kubernetes Operation

- **Master**: it is the machine which manage the Kubernete operation.
- **Node**: this are the machines involved in the operation with containers.
- **Pod**: it's the smallest peace in the operation, and it's a group of containers that share resources like IP, IPC, etc.
- **Replicaset** and **Replication Controller**: these features are features related to replication, but the `replicaset` has taken came to simplefy most of the concepts for the `replication controller**.
- **Namespace**: through this feature Kubernetes manage virtual clusters, and even can create partitioin for different users to share resources.
- **Service**: its a logical set of pods woriking together, that exists to easy the task of load balancing configuration.
- **Kubelet**: it is a service executed at the node level which reads the manifests from the containers and validated their states.
- **Kubectl**: it is a tool for configuring the command line.


#### Basic Kubernetes Features    

1. To orchestrate containers in multiple hosts.
2. Tune up the hardware resource usage, and also to define maximum and minimum usage by the feature `Automatic Bin Packing`.
3. Manage and automate the deploy and updates.
4. To mount and to add storage for the applications and to monitoring their state.
5. To help to scale applications.
6. A declarative method for managing the operation.
7. To check for integrity and to promote auto recovery for the operation promoting this self-healing feature like.
8. Automated 'rollouts' to distribute and update applications or configurations, and also a rollback feature for immediately turn back them.



#### Basic Kubernetes Architecture

According to the site [JavaTPoint](https://www.javatpoint.com/kubernetes) Kubernetes works in a client-server pattern:

1. **Master node**: its the control pane and the entrypoint for all types of administrative tasks at the cluster level. But in terms of faul tolerance, there can be more than one master node present in a cluster. It also has some important features within:   
    1.1. API Server: it receives the REST commands from the user, validates, processes and them execute them. It also saves the resulting state of a cluster in a 'etcd' file, a distributed key-value store.    
    1.2. Scheduler: its a process responsible for assigning pods to the available worker nodes.    
    1.3. Controller Manager: its a deamon for the managing and execution of non-terminating control loops.   
    1.4. ETCD: it is an open-source, simple, distributed key-value storage which is used to store the cluster data.
2. **Slave/Worker node**: it is also known as 'minions', which is a phisical machine with execute the applications using the pods. And as its components:   
    2.1. Kubelet: its an agent executed on each worker node in a cluster that it is in constant communication with the master node, and that accesses the works of the worker pods.   
    2.2. Kube-proxy: it's a proxy service of Kubernetes executed on each worker node in the cluster. And its main responsibility is to request forwarding messages.   
    2.3. Pod: a pod is a combination of one or more containers which logically execute together on nodes. And one worker can easily execute multiple pods.


[JavaTPoint](https://www.javatpoint.com/kubernetes) - Kubernetes
![basic-kubernetes-operation-scheme](/images/articles/development/basic-kubernetes-operation-scheme.png)



####  Kubernetes and Docker

And so, in general term the basic operation of Kubernetes happens in a mode of client-server pattern, where using a master node to communicate with the workers nodes/machines while the pods are assigned to tasks defined.


As to achieve all that working operation, Kubernetes is placed in a hiegher layer where it automatizes the instructions, programming a Node, while its own feature, the Kubelet insructs that Docker delivers the containers necessary and the Kubelet also collects and stores status from the containers being used. 

So, the great difference in this set is that within this whole automatized operation, it is the Kubernetes, and not the administrator,  that make all the direct solicitations to Docker to deliver the necessary containers to fill all the requirements from the tasks organized.


#### Related Tools Helping with the Kubernetes Operation

- **Registry**: with the Atomic Registry or the Docker Registry.
- **Network**: with the OpenvSwitch and the 'inteligent border router'.
- **Telemetry**: with the Heapster, the Kibana, the Hawkular, and the Elastic.
- **Security**: with the LDAP, the SELinux, the RBAC, and the OAUTH.
- **Automation**: with the use of playbooks from Ansible for the installation and the management of the cluster life cycle.
- **Service**: together with a varied catalog by popular applications.


### OpenShift

According to the site [JavaTPoint](https://www.javatpoint.com/what-is-openshift), OpenShift is a cloud development Platform as a Service (PAAS) by Red Hat, which is a open-source cloud-based platform to create, test, deploy, and run applications on the cloud.


It can manage applications in different languages, Ruby, Node.js, java, Perl, and Python, and it also can support 3 kinds of platform for developers and users:

1. Infrastructure as a Service (IaaS): this service implies the provision of hardware-level virtual machines with pre-defined configuration.   
    1.1. Disadvantages: it is the responsability of the client to make the installment of OS and server packages, also managing network, etc.
    1.2. Some competitors from Red Hat in IaaS: Rackspace, AWS, Google Cloud, etc.
2. Software as a Service (SaaS): in this service model there are less tasks related to infrastructure, as the service is implied to be plug and play like, where the user should sign up and start using it.   
    2.1. Disadvantages: there are a minimal amount of customization allowed. And it is not so much userfull from the developer point of view.
3. Platform as a Service (PaaS): this version should be considered the middle ground between the other two kinds of services, where they a designed to satisfy all the development needs, like databases or for application deployment, etc.


#### Brief History of OpenShift

- In 2010, Red Hat acquires the Makara componay which as had a proprietary PaaS solution on Linux containers.
- In 2011 the OpenShift implementation is lauched, and in 2012 it becomes open-source. The technology used for containerization and for orchestration was custom-developed.
- In 2013, with version 3.0 of OpenShift, the company began to support Docker and Kubernetes.
- And in 2019 came OpenShift version 4.0 with some architectural changes.    

`The v4 product has many other architectural changes, such as a prominent one being a shift to using CRI-O as the container runtime (and Podman for interacting with pods and containers), and Buildah as the container build tool, thus breaking the complete dependency on Docker.` [JavaTPoint](.https://www.javatpoint.com/what-is-openshift)


#### Basic Features of OpenShift

OpenShift works as a layered system designed to expose a underlying Docker-formatted container image and Kubernetes concepts with a focus on the easy composition of applications by developers.

Not only that, but it has been evolving, from version 2.0, for example, to allow even more flexibilization for the composition of the container services. And in this sense, there is this essential layers:

1. **Docker**: which provides abstraction for packaging and creating a Linux-based lightweight container image.
2. **Kubernetes**: which provides cluster management and container orchestration on multiple hosts.
3. **OpenShift**: the OpenShift layer offers:   
    3.1. Source code for management, builds, and deployments.    
    3.2. Managing and promoting images at scale as they flow through the system.    
    3.3. Application management at scale.   
    3.4. Team and user tracking for organizing a large developer organization.   
    3.5. Networking infrasctructure that supports the cluster.


[OpenShift Docs](https://docs.openshift.com/container-platform/3.11/architecture/index.html) - Red Hat
![basic-openshift-operation-scheme](/images/articles/development/basic-openshift-operation-scheme.png)

`O Kubernetes é uma tecnologia open source. Por isso, ele não conta com uma estrutura de suporte formal em que as empresas podem confiar totalmente. [...] Para isso, existe o Red Hat OpenShift. Essa é uma solução de nível corporativo que oferece o Kubernetes e muito mais. O OpenShift vem com todos os elementos extras que tornam o Kubernetes potente e viável para as empresas, incluindo componentes de registro, rede, telemetria, segurança, automação e serviços.` [Kubernetes (K8s) - Red Hat](https://www.redhat.com/pt-br/topics/containers/what-is-kubernetes)

###### My translation: The Kubernetes is a open-source technology, and for that it does not count with a formal professional support in which the companies can proper relate [...] For that exists the Red Hat OpenShif, that is a solution for corporate level which offers the Kubernetes and much more. The OpenShift comes with all the extra elements that made the Kubernetes potent and viable for the companies, including components for registry, network, telemetry, security, automation, and services.


#### Basic Architecture of OpenShift

OpenShift has a microservice-based architecture of smaller decoupled units that work together at a layer on top of Kubernetes cluster, and working with data about the Kubernetes objects stored in the `etcd` file.

Its services are bronken down by function:

1. **REST APIs**: which exposes each of the core objects.
2. **Controllers**: which read those APIs, apply changes to other objects, and report status or write back to the object.


So, the users make calls to the REST API to change the state of the system, and controllers use the REST API to read the user's desired state, and then try to bring the other parts of the system into sync.

Also, the controller pattern means that much of the functionality in the OpenShift Container Platform is extensible for more client customization, tuning the 'business logic' of the system into different behaviors.

`To make this possible, controllers leverage a reliable stream of changes to the system to sync their view of the system with what users are doing. This event stream pushes changes from etcd to the REST API and then to the controllers as soon as changes occur, so changes can ripple out through the system very quickly and efficiently. However, since failures can occur at any time, the controllers must also be able to get the latest state of the system at startup, and confirm that everything is in the right state. This resynchronization is important, because it means that even if something goes wrong, then the operator can restart the affected components, and the system double checks everything before continuing. The system should eventually converge to the user’s intent, since the controllers can always bring the system into sync.` [Red Hat](https://docs.openshift.com/container-platform/3.11/architecture/index.html)




### Further Reading

[Use containers to Build, Share and Run your applications - Docker.com](https://www.docker.com/resources/what-container/#/VM)

[Get Started with Docker - Docker.com](https://www.docker.com/get-started/)

[Kubernetes Training and Certification - Kubernetes.io](https://kubernetes.io/training/)

[Learn Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/)

[Benefits of containerization - CircleCI](https://circleci.com/blog/benefits-of-containerization/)

[Why Red Hat Chose Kubernetes for OpenShift - Red Hat](https://cloud.redhat.com/blog/red-hat-chose-kubernetes-openshift)

[Understanding The Difference Between Kubernetes Vs. Openshift - SimpliLearn](https://www.simplilearn.com/kubernetes-vs-openshift-article)


### References

[Containers Linux - Red Hat](https://www.redhat.com/pt-br/topics/containers)

[Containerization - IBM](https://www.ibm.com/cloud/learn/containerization)

[How Linux containers work - Olivo K.](https://kyleolivo.com/dev/2016/08/15/containers-how-do-they-work/)

[Docker overview - Docker.com](https://docs.docker.com/get-started/overview/)

[Docker Downsides: Container Cons to Consider before Adopting Docker - Aqua](https://www.channelfutures.com/open-source/docker-downsides-container-cons-to-consider-before-adopting-docker)

[A Brief History of Containers: From the 1970s Till Now - Aqua](https://blog.aquasec.com/a-brief-history-of-containers-from-1970s-chroot-to-docker-2016)

[Como construir uma aplicação com Docker? - GeekHunter.com](https://blog.geekhunter.com.br/docker-na-pratica-como-construir-uma-aplicacao/)

[Kubernetes (K8s) - Red Hat](https://www.redhat.com/pt-br/topics/containers/what-is-kubernetes)

[Kubernetes Tutorial JavaTPoint](https://www.javatpoint.com/kubernetes)

[OpenShift Docs - Red Hat](https://docs.openshift.com/container-platform/3.11/architecture/index.html)

[What is OpenShift? - JavaTPoint](https://www.javatpoint.com/what-is-openshift)



