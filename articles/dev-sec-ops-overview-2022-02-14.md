---
author: 'Marcus Vinicius Richa'
title: 'Dev-Sec-Ops - Overview'
date: '2022-02-14'
subject: 'development-articles'
description: 'DevSecOps is short for Development, Security and Operations, and it aims for the automation of security at every phase of software development lifecycle, from the planning and design through testing, deployment and software delivery.'
---

# DevSecOps - Overview

1. ##### Introduction  
2. ##### Benefits of DevSecOps
3. ##### Best Practices for DevSecOps
4. ##### Environment and Data Security
5. ##### CI/CD Process Security
6. ##### Further Reading
7. ##### References

### Introduction

As it is stated in the [IBM Cloud Education](https://www.ibm.com/cloud/learn/devsecops) site, the DevSecOps brings **Security** to the culture of software automation, allowing the `development of secure software at the speed of Agile and DevOps`.

So, DevSecOps is short for Development, Security and Operations, and it aims for the automation of security at every phase of software development lifecycle, from the planning and design through testing, deployment and software delivery.

`DevSecOps means thinking about application and infrastructure security from the start. It also means automating some security gates to keep the DevOps workflow from slowing down. Selecting the right tools to continuously integrate security, like agreeing on an integrated development environment (IDE) with security features, can help meet these goals. However, effective DevOps security requires more than new tools—it builds on the cultural changes of DevOps to integrate the work of security teams sooner rather than later.`
[RedHat](https://www.redhat.com/en/topics/devops/what-is-devsecops)


### Benefits of DevSecOps

The major benefit is to insert security, but it does that while takes advantage of all the prescribed values of Agile and DevOps, that is more-secure code with agility and with a continous improvement, respectively.

But, other benefits are:

- Better costs, because securing some code is easier done when it is done from the firsts iterations.
- Reducing duplicative reviews and unnecessary rebuilds only to insert security in a system already operational.
- Better understanding among development, security and operations teams member and they collaborate in the the system from the start.
- Reduced time spent to path vulnerabilities.
- It shortens the window of opportunities for maliscious actor as the security is scanned and patchs are made in each release cycles.
- Cybersecurity can also benefit form automation when it is integrated in the pipeline.

### Best Practices for DevSecOps

1. **Shift left**: this as a DevSecOps mantra according to the IBM's article, as it `encourages software engineers to move security from the right (end) to the left (beginning) of the DevOps (delivery) process`. So, it is not only the development team thinking about building the product efficiently, but also dealing with security as they are continously building the system.
2. **Security education**: since everyone involved with the delivery process should be famiiar with the basic principles of application security, the `Open Web Application Security Project (OWASP)`.
3. **Traceability, Auditability, and Visibility**: implementing these practices in the project leads to deeper insight and a more secure environment:     
	3.1. Traceability: allow you to track configuration items across the development cycle, since it helps tho achieve compliance, reduce bugs and help code maintainability.
	3.2. Auditability: it is important to apply security controls, since the tasks should have to present security controls autitable, well-documented and adhered to by all team members.
	3.3. Visibility: this is a good management practice that is very useful for monitoring and alerting within a DevSecOps environment.


### Environment and Data Security

1. **Standardize and automate the environment**: each service should have the least priviledge possible to minimize unauthorized connections and access.
2. **Centralize user identity and access control capabilities**: tight access control and centralized authenticaton mechanisms are essential for securing microservices, since authenticatio is initiated at multiple points.
3. **Isolate containers running microservices from each other and the network**: this includes both in transit and at rest data, since both can represent high-value for attackers.
4. **Encrypt data beween apps and services**: a container orchestration platform with integrated security features helps minimize the chance of unauthorized access.
5. **Introduce secure API gateways**: secure APIs increase authorization and routing visibility. By reducing exposed APIs, organizations can reduce surfaces of attacks.


### Continous Integration and Continous Deployment (CI/CD) Process Security

1. **Integrate security scanners for containers**: this should be part of the process for adding containers to the registry.
2. **Automate security testing in the CI process**: this includes running security static analysis tools as part of builds, as well as scanning any pre-build container images for known security vulnerabilities as they are pulled into the build pipeline.
3. **Add automated tests for security capabilities into the acceptance test process**: automate input validation tests, as well as verification authentication an authorization features.
4. **Automate security updates, such as patches for known vulnerabilities**: do this via the DevOps pipeline. It should eliminate the need for admins to log into production systems, while creating a documented and traceable change log.
5. **Automate system and service configuration management capabilities**: this allow for compliance with security polices and the elimination of manual errors. Audit and remediation should be automated as well.



### Further Reading


[What is DevSecOps? - RedHat](https://www.redhat.com/en/topics/devops/what-is-devsecops)


### References


[DevSecOps - IBM](https://www.ibm.com/cloud/learn/devsecops)


