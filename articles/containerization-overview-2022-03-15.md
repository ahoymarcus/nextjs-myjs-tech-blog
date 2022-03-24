---
author: 'Marcus Vinicius Richa'
title: 'Containerization - Overview'
date: '2022-03-25'
subject: 'development-articles'
description: 'Containers are technologies which allow to package and isolate applications together with all their execution environment, there is, with all the arquives necessary to execute them. They are more portable, more resource-efficient in nature, more secure and easily to deploy.'
---

# Containerization - Overview

1. ##### Introduction  
2. ##### Brief History of Conainers
3. ##### Basic Structure of the Containers Architecture
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
 
According to [IBM](https://www.ibm.com/cloud/learn/containerization), containerization `is the packaging of software code with just the operating system libraries and dependnecies required to run the code to create a single lightweight executable - called a container - that runs consistently on any infrastructure.`

And to [Red Hat](https://www.redhat.com/pt-br/topics/containers) Linux Containers are technologies which allow to package and isolate applications together with all their execution environment, there is, with all the arquives necessary to execute them, everything which make easier to migrate the application between environment without losing functionalities. 

And the great benefits that Containers brought to make than `the de facto units of modern cloud-native applications` are its more portable, more resource-efficient in nature, more secure and easily to deploy.


### Brief History of Conainers

As it is explained at the site [Aqua](https://blog.aquasec.com/a-brief-history-of-containers-from-1970s-chroot-to-docker-2016), the begging of the landscape for containers started far back at **1979** with the Unix V7 OS.

It turns out that at that time a new filesystem was introduced, the **chroot**, which brought separation to a process and its childreen to some isolated location of the filesystem. Finally, **chroot** was also added to BSD/OS in **1982**.

So, still according to the site [Aqua](https://blog.aquasec.com/a-brief-history-of-containers-from-1970s-chroot-to-docker-2016), it was not until the **2000s** when came up the idea to create a small shared-environment called **FreeBSD Jails**, which in effect would allow administrators to partition a FreeBSD computer system into several independent smaller systems with their own IP address for network and configuration also.

In **2001** there was a implementation from Linux VServer that would patch a Linux Kernel as to bring that jail feature to Linux. But it was experimental and it was discontinued since **2006**.

In **2004** Solaris Containers produced a feature that could leverage snapshots from the partitions that ware created, and then used to be cloned. And in **2005** Open VZ this Linux application introduced a patched Linux Kernel for the same purposes, but that was not released as part of the official Linux kernel.

In **2006** Google launched a feature of Process Containers, renamed it later to 'Cotnrol Groups (cgroups)' and eventually came to be merged to the Linux Kernel, until that in **2008** came the most complete use of Linux container manager implement using cgroups and Linux namespaces, withou any sort of patches.

There were also contributions to these efforts in **2011** and in **2013**, but it was later in **2013** that Docker emerged and brought popularity to the whole process.

Then, from **2016** ahead the site brings a very descriptive development of the whole environtment of Linux containers, including security advancements, tools, etc.

###### Notes:
- BSD/OS is a discontined proprietary version of the BSD operating system developed by the Berkeley Software Design. [Wikipedia](https://en.wikipedia.org/wiki/BSD/OS)



### Basic Structure of the Containers Architecture

When comparing containers to a virtural machines, it is easy to see the fact that because containers share the machine's operating system kernel and do not create overhead by detaching resources from the OS besides for the application itself, this container feature becomes very lightweight.

Totally different from VMs, for example, which need to grasp computational resources direct from the machine, like memory and disk space, and has to configure its own operanting system for all the environment is which it is operating. For all that it become a very heavy feature with a lot of overdead for the whole system.

Application containerization-https://www.ibm.com/cloud/learn/containerization
O que é orquestração de containers?-https://www.redhat.com/pt-br/topics/containers













Understanding The Difference Between Kubernetes Vs. Openshift - SimpliLearn - https://www.simplilearn.com/kubernetes-vs-openshift-article

Benefits of containerization - CircleCI - https://circleci.com/blog/benefits-of-containerization/

Gerenciamento de contêiners Docker, Kubernetes e Openshift

### Further Reading

[]()

### References

[Containers Linux - Red Hat](https://www.redhat.com/pt-br/topics/containers)

[Containerization - IBM](https://www.ibm.com/cloud/learn/containerization)

[A Brief History of Containers: From the 1970s Till Now - Aqua](https://blog.aquasec.com/a-brief-history-of-containers-from-1970s-chroot-to-docker-2016)


[]()

