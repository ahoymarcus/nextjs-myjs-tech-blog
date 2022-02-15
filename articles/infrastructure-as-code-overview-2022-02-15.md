---
author: 'Marcus Vinicius Richa'
title: 'Infrastructure as Code - (IaC)'
date: '2022-02-15'
subject: 'development-articles'
description: 'Infrastructure as a code (IaC) is the managing and provisioning of automated infrastructure from coding that also helps with the configuration, the documentation and the versioning all the software structure involved.'
---

# Infrastructure as Code - (IaC)

1. ##### Introduction  
2. ##### Declarative IaC versus Imperative IaC
3. ##### Advantages of IaC 
4. ##### Advantages of IaC
5. ##### Popular Tools       
	5.1. What is Ansible     
	5.2. What is Terraform     
6. ##### Iac and DevOps
7. ##### Immutable Infrastructure vs Mutable Infrastructure
8. ##### Further Reading
9. ##### References

### Introduction

Infrastructure as a code (IaC) is the managing and provisioning of automated infrastructure from `high-level descriptive coding language`.
[IBM](https://www.ibm.com/cloud/learn/infrastructure-as-code)

Also, the IaC helps with the configuring code, the documentation and for versioning all the software structure, so the version source code can be replicated into many equal environment as it necessary.


### Declarative IaC versus Imperative IaC

1. **Declarative** or **Functional**: this scheme works with some frameworks that configurate the whole set resources needed for the infrastructure and corresponds with the majority of the implementing cases.      
	1.1. It also version all the versions of the source code.      
	1.2. It's should also become a locked in solution with vendors.      
2. **Imperative** or **Procedural**: this sceme works with a more lower level coding, that references and executes commands in a script.      
	2.1. It also implies more knowledge to script and to configure more for the infrastructure.       
	2.2. On the other hand, it should allow to create environments more tailored and with more flexibility.      

`Choosing a declarative or imperative approach is analogous to using a GPS or following turn-by-turn instructions. With a GPS, you enter an address and the GPS does the rest, plotting the fastest route and avoiding traffic for you—but you probably need an expert to tell you why it made the choices it made. The turn-by-turn instructions are based on personal experience; the provider knows the route and why he/she chose it, but if you encounter obstacles or want to optimize the route, you have to call for help or do the work yourself.`
[IBM](https://www.ibm.com/cloud/learn/infrastructure-as-code)


### Advantages of IaC

- The migration of the infrastructure from expensive datacenters to the cloud native or from virtualizing.
- The autotomation of the process with scripts that bring up the whole environment, also documented and with version.
- The same environment can be replicated throughout the application, creating less 'configuration drift' that is differents environments not fully compatible colliding.
- More components and services are available.
- Easier to scale.
- Automation makes it less prone to error.
- Protection agains **churn**: this is rework done for so9me external cause like the leave of important especialists of the team or the organization.


### Popular Tools

- Chef
- Puppet
- Red Hat Ansible Automation Plataform
- Saltstack
- Terraform
- AWS CloudFormation

#### What is Ansible

This is an open source community project sponsored by Red Hat that uses the YAML language and it is very popular with Docker and Kubernetes.


### What is Terraform

This is another declarative provisioning and infrastructure orchestration tool that are present with all the leading cloud providers, and it can also provision applications written in any language.

Terraform does not offer configuration management capabilities, but it works hand-in-hand with configuration management tools to automate the job.


### Iac and DevOps

The resources from IaC are essential for DevOps in the sense that IaC turns the Continous Integration and Deployment (CI / CD) easier tasks, that can be achieved through the execution of scripts.

It also brings monitoring, documenting and testing to the life cycle of the application across many sets of reproducible environments.

And finally, because all the scaling environments are set the same, with the same dependencies and version, development and operations can actualy work in synchrony with the same timeline.


### Immutable Infrastructure vs Mutable Infrastructure


1. **Immutable infrastructure**: this is the case where once provisioned the environment cannot change. This is more ideal to IaC for reasons of versioning and anytime it makes necessary to change the infrastructure needs it can be automated sprung as a whole.     
	1.1. It all eliminates configuration drift.     
	1.2. It gives more consistancy between test and configuration environment.      
	1.3. It is also easier to maintain and track the infrastructure and to confidently roll it back to any version.
2. **Mutable infrastructure**: this is the case where the infrastructure can be modified or updated after originally provisioned. This gives more flexibilitity to make ad hoc customizations and to responds to emergent securitiy issues.



### Further Reading


[O que é infraestrutura como código (IaC)? - RedHat](https://www.redhat.com/pt-br/topics/automation/what-is-infrastructure-as-code-iac)


### References


[ Infrastructure as Code  - IBM](https://www.ibm.com/cloud/learn/infrastructure-as-code)

