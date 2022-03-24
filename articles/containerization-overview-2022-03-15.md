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
6. ##### 
7. #####  
8. ##### 
9. ##### Further Reading
10. ##### References

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














Understanding The Difference Between Kubernetes Vs. Openshift - SimpliLearn - https://www.simplilearn.com/kubernetes-vs-openshift-article

Gerenciamento de contêiners Docker, Kubernetes e Openshift

### Further Reading

[Use containers to Build, Share and Run your applications - Docker.com](https://www.docker.com/resources/what-container/#/VM)

Benefits of containerization - CircleCI - https://circleci.com/blog/benefits-of-containerization/

### References

[Containers Linux - Red Hat](https://www.redhat.com/pt-br/topics/containers)

[Containerization - IBM](https://www.ibm.com/cloud/learn/containerization)

[How Linux containers work - Olivo K.](https://kyleolivo.com/dev/2016/08/15/containers-how-do-they-work/)

[A Brief History of Containers: From the 1970s Till Now - Aqua](https://blog.aquasec.com/a-brief-history-of-containers-from-1970s-chroot-to-docker-2016)


[]()

