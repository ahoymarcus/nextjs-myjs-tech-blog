---
author: 'Marcus Vinicius Richa'
title: 'Open Web Application Project Foundation (OWASP) - Overview'
date: '2022-04-18'
subject: 'web-dev-articles'
description: 'The Open Web Application Security Project (OWASP) is a nonprofit foundation that works to improve the security of software, and servers as the base for developers and technologists to secure the web: Tools and Resources;  Community and Networking; Education & Training.'
---

# Open Web Application Project Foundation (OWASP) - Overview

1. ##### Introduction  
2. ##### The Open Web Application Security Project (OWASP)
    2.1. Some Projects Based at OWASP   
    2.2. OWASP Top 10
3. ##### Application Security
    3.1. Types of Application Security    
    3.2. Best Practices in Application Security
4. ##### Web Application Security Testing Guide
    4.1. Methods for Web Security Testing
5. ##### Static Code Analysis
    5.1. Techniques for Static Code Analysis     
    5.2. Advantages and Disadvantages from Static Code Analysis   
    5.3. Static Code Analysis Tools List
6. ##### SonarQube
7. ##### Further Reading
8. ##### References

### Introduction

The Open Web Application Security Project (OWASP) is a nonprofit foundation that works to improve the security of software, and servers as the base for developers and technologists to secure the web: 

- **Tools and Resources**
- **Community and Networking**
- **Education & Training**



###### Other articles from the Governance and Management series:
- `IT Governance and Mangement - Overview` [^1]
- `PMBOK and others Project Management Methodologies` [^2]
- `ITIL - Service Management Framework` [^3]
- `Risk Management - Overview` [^4]
- `Information Security - Overview` [^5]
- `Cryptography, Steganography and Criptanalysis - Overview` [^6]
- `Continuity Plan and Essentials for Businesses - Overview` [^7]       



### The Open Web Application Security Project (OWASP)

#### Some Projects Based at OWASP


At the [OWASP platform](https://owasp.org/) it is possible to find many projects that brings to the Internet Community access to security information. Among some of its projects it's possible to find:

1. [OWASP Security Knowledge Framework](https://owasp.org/www-project-security-knowledge-framework/)
2. [OWASP ModSecurity Core Rule Set](https://owasp.org/www-project-modsecurity-core-rule-set/)
3. [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)



###### OWASP Security Knowledge Framework

It's an open source web application that explains secure coding principles in multiple programming languages. The OWASP-SKF does this through manageable sortware development projects with checklists and labs to practice security verification.

- **Some of the OWASP-SKF**:
1. **Projects**
2. **Code examples**
3. **Checklists**
4. **Labs**
5. **Knowledge base**
6. **User management**
7. **Design patterns**
8. **Support**



###### OWASP ModSecurity Core Rule Set

The OWASP ModSecurity Core Rule Set (CRS) is a set of generic attack detection rules for use with ModSecurity or compatible web application firewalls.


`The CRS aims to protect web applications from a wide range of attacks, including the OWASP Top Ten, with a minimum of false alerts.` [OWASP](https://owasp.org/www-project-modsecurity-core-rule-set/)


- **The CRS v3 tutorials**:
1. [Installing ModSecurity](https://www.netnea.com/cms/apache-tutorial-6_embedding-modsecurity/)
2. [Including the OWASP ModSecurity Core Rule Set](https://www.netnea.com/cms/apache-tutorial-7_including-modsecurity-core-rules/)
3. [Handling False Positives with the OWASP ModSecurity Core Rule Set](https://www.netnea.com/cms/apache-tutorial-8_handling-false-positives-modsecurity-core-rule-set/)
4. [ModSecurity Handbook, 2nd edition](https://www.feistyduck.com/books/modsecurity-handbook/)



###### OWASP Web Security Testing Guide

The web Security Testing Guide (WSTG) Project produces the premier cybersecurity testing resource for web application developers and security professionals.


`The WSTG is a comprehensive guide to testing the security of web applications and web services. Created by the collaborative efforts of cybersecurity professionals and dedicated volunteers, the WSTG provides a framework of best practices used by penetration testers and organizations all over the world.` [OWASP](https://owasp.org/www-project-web-security-testing-guide/)



#### OWASP Top 10

The OWASP Top 10 is a book/referential document outlining the 10 most critical security concerns for web application security. The report is put together by a team of security experts from all over the world and the data comes from a number of organizations and is then analysed.


As it can be seem in the graph, there are three new categories, four categories with naming and scoping changes, and some consolidation in the Top 10 for 2021.


The changes of name were made to shift the focus from generic symptoms from the problems to its root cause:


![owasp-top-10-2021](/images/articles/web-development/owasp-top-10-2021.png)


1. **A01:2021 - Broken access Control**: it moves up from the fifth position to the category with the most serious web application security risk; the contributed data indicates that on average, 3.81% of applications tested had one or more Common Weakness Enumerations (CWEs) with more than 318k occurrences of CWEs in this risk category. The 34 CWEs mapped to Broken Access Control had more occurrences in applications than any other category.
2. **A02:2021 - Cryptographic Failures**: it shifts up one position to #2, previously known as A3:2017-Sensitive Data Exposure, which was broad symptom rather than a root cause. The renewed name focuses on failures related to cryptography as it has been implicitly before. This category often leads to sensitive data exposure or system compromise.
3. **A03:2021 - Injection**: it slides down to the third position. 94% of the applications were tested for some form of injection with a max incidence rate of 19%, an average incidence rate of 3.37%, and the 33 CWEs mapped into this category have the second most occurrences in applications with 274k occurrences. Cross-site Scripting is now part of this category in this edition.
4. **A04:2021 - Insecure Design**: it is a new category for 2021, with a focus on risks related to design flaws. If we genuinely want to "move left" as an industry, we need more threat modeling, secure design patterns and principles, and reference architectures. An insecure design cannot be fixed by a perfect implementation as by definition, needed security controls were never created to defend against specific attacks.
5. **A05:2021 - Security Misconfiguration**: it moves up from #6 in the previous edition; 90% of applications were tested for some form of misconfiguration, with an average incidence rate of 4.5%, and over 208k occurrences of CWEs mapped to this risk category. With more shifts into highly configurable software, it's not surprising to see this category move up. The former category for A4:2017-XML External Entities (XXE) is now part of this risk category.
6. **A06:2021 - Vulnerable and Outdated Components**: it was previously titled Using Components with Known Vulnerabilities and is #2 in the Top 10 community survey, but also had enough data to make the Top 10 via data analysis. This category moves up from #9 in 2017 and is a known issue that we struggle to test and assess risk. It is the only category not to have any Common Vulnerability and Exposures (CVEs) mapped to the included CWEs, so a default exploit and impact weights of 5.0 are factored into their scores.
7. **A07:2021 - Identification and Authentication Failures**: it  was previously Broken Authentication and is sliding down from the second position, and now includes CWEs that are more related to identification failures. This category is still an integral part of the Top 10, but the increased availability of standardized frameworks seems to be helping.
8. **A08:2021 - Software and Data Integrity Failures**: it is a new category for 2021, focusing on making assumptions related to software updates, critical data, and CI/CD pipelines without verifying integrity. One of the highest weighted impacts from Common Vulnerability and Exposures/Common Vulnerability Scoring System (CVE/CVSS) data mapped to the 10 CWEs in this category. A8:2017-Insecure Deserialization is now a part of this larger category.
9. **A09:2021 - Security Logging and Monitoring Failures**: it was previously A10:2017-Insufficient Logging & Monitoring and is added from the Top 10 community survey (#3), moving up from #10 previously. This category is expanded to include more types of failures, is challenging to test for, and isn't well represented in the CVE/CVSS data. However, failures in this category can directly impact visibility, incident alerting, and forensics.
10. **A10:2021 - Server-Side Requrest Forgery**: it is added from the Top 10 community survey (#1). The data shows a relatively low incidence rate with above average testing coverage, along with above-average ratings for Exploit and Impact potential. This category represents the scenario where the security community members are telling us this is important, even though it's not illustrated in the data at this time.


###### Note: Common Weakness Enumeration (CWE)



### Application Security

Application security is the security measures that are described at application development level and that have the aim to enforce the Information Security, like the primary requirements of information security like confidentiality, integrity, availability, authentication, authorization, nonrepudiation, etc.


Another important point is the fact that application level also reaches the whole cycle of software development, including testing or even deployment and the layers that may be involved in those tasks. Just like the use of different hardware, like routers, proxy servers, or any other mean that may add security for the application operation.


And the site of [Vmware.com](https://www.vmware.com/topics/glossary/content/application-security.html) brings a very good statement about the importance of application security:

`Application security is important because today’s applications are often available over various networks and connected to the cloud, increasing vulnerabilities to security threats and breaches. There is increasing pressure and incentive to not only ensure security at the network level but also within applications themselves. One reason for this is because hackers are going after apps with their attacks more today than in the past. Application security testing can reveal weaknesses at the application level, helping to prevent these attacks. `


#### Types of Application Security

As it was stated, application security applies to all of the application life cycle:

1. **Developement cycle**:   
    1.1. Authentication   
    1.2. Authorization  
    1.3. Nonrepudiation   
    1.4. Encryption  
    1.5. Logging   
    1.6. Application security controls: these are techniques at coding level that enhance security.
2. **Testing cycle**: it makes sure that the application is in compliance with a specific set of security criteria.
3. **Deployment cycle**:
    3.1. Cloud-based application   
    3.2. Mobile application   
    3.3. Web-based application/services: this kind of deployment implies accesses through a browser interface.


#### Best Practices in Application Security

Some important pratices to be applyed to any application projetct:

1. **Planning**:   
    1.1. Strategic goals   
    1.2. Define management: funds, const, responsabilities, etc.   
    1.3. Cataloging application requirements   
    1.4. Cataloging risks   
    1.5. Risk assessment 
2. **Project management**:   
    2.1. Cataloging applications: to map and details all the applications running, which in turn helps to find redundant applications, 'rogue applications', and even unnecessary applications inside the system.   
    2.2. Defining application Prioraty Levels: it is essential to focus resourse at the most important parts of the operation. **Critic** assets are those related to the strategic goals, that are more exposed, that deals with confidential or private data, and so these are the assets which should receive the most focus, like from extensive testing, for example.    
    2.3. Logging
3. **Documenting**
4. **Deployment**:   
    3.1. Definition of privileges: here is important to use the rule of the least privileges for authentication and authorization, for example.



### Web Application Security Testing Guide

A web application security testing could be applied to check, for example, things related to authentication and authorization in the system to avoid restricted information being seem by strange persons or even some kind of functionality being unauthorized to the wrong kind of user.


#### Methods for Web Security Testing

1. **Password Cracking**: which can be done by varous methods like brute force or by social engineering.   
    1.1. Strong passwords    
    1.2. Cryptography    
    1.3. Not using cookies to store sensitive information.
2. **URL Manipulation through HTTP GET methods**: to test if the application is passing sensitive information in the query string.   
    2.1. This happens when the application uses the HTTP GET  method to pass information between the client and the server.   
    2.2. This could be used to try other values while trying to access restrict information or even altering data.
3. **SQL Injection**: this is a serious threat because it could lend direct access to the database scripting language.
4. **Cross-Site Scriptiong (XSS)**: meaning that any scripting language should be accepted by the application.   
    4.1. This time not only the database could be affected, but even the server itself could be completely compromised.




### Static Code Analysis

The Static Code Analysis, also known as Source Code Analysis, is a task permormed usually as a part of code review that is carried out the the implementation phase of a Security Development Lifecycle (SDL).


In this method analytic tools are used to check and highlight possible vulnerabilities direct at the source code written for the application, and for that reason it is named 'static', because it analysis the static code written and not the running application.


It is also common now days that the Integrated Development Environments (IDEs) provind such types of checking also, and usually they detect:

- **Security vulnerabilities**
- **Performance issues**
- **Non-compliance with standards**
- **Use of out of date programming constructs**



#### Techniques for Static Code Analysis

1. **Data Flow Analysis**: this kind of technique collects run-time (or dynamic) information about the software while it is still in the static state, and there are 3 common terms used for the data flow analysis:   
    1.1. Basic Block (the code)   
    1.2. Control Flow Analysis (the flow of data)   
    1.3. Control Flow Path (the path the data takes)
 

This kind of analysis is restricted to a basic block of code only and its internal operations, like analysis the flow of a loop block or a if/else statement to determ if they fullfill its internal premises.


For example, a loop may enter a infinite loop, and a if/else statement can have a clause that is never reached because a wrong set of conditions.


`Regular Expression matching on text is very flexible, easy to write rules to match, but can often lead to a lot of false positives and the matching rules are ignorant of the surrounding code context. AST matching treats the source code as program code, and not just files filled with text, this allows for more specific, contextual matching and can reduce the number of false positives reported against the code.` [SecureCodeWarion.com](https://www.securecodewarrior.com/blog/what-is-static-analysis)


###### Control Flow Graph (CFG)

`An abstract graph representation of software by use of nodes that represent basic blocks. A node in a graph represents a block; directed edges are used to represent jumps (paths) from one block to another. If a node only has an exit edge, this is known as an ‘entry’ block, if a node only has a entry edge, this is know as an ‘exit’ block. ` (Wögerer, 2005)

In this example below Control Flow Graph; ‘node 1’ represents the entry block and ‘node 6’ represents the exit block.

![control_flow_graph](/images/articles/web-development/control_flow_graph.png)


###### Taint Analysis

In this method, the taint analysis uses variables that are temperd to trace vulnerability in the functions that receive them, which are known as 'sink'. Thus, if that tainted variable is passad to the 'sink' without first being sanitized, this brings a flag for vulnerability by the security tool.


`Some programming languages such as Perl and Ruby have Taint Checking built into them and enabled in certain situations such as accepting data via CGI.` [OWASP.org](https://owasp.org/www-community/controls/Static_Code_Analysis)


###### Lexical Analysis

And according to the article at [OWASP.org](https://owasp.org/www-community/controls/Static_Code_Analysis), in this method the tool using lexical analysis would convert the source code syntas into 'tokens' of information to abstract the source code and make it easy to be manipulated.


So, the pre-tokenised PHP source code could be:

```
<?php $name = "Ryan"; ?>
```

And the post tokenised PHP source code would be then:

```
T_OPEN_TAG
T_VARIABLE
=
T_CONSTANT_ENCAPSED_STRING
;
T_CLOSE_TAG
```


#### Advantages and Disadvantages from Static Code Analysis

1. **Advantages**:   
    1.1. Scales well and can be repeatd easy.    
    1.2. For things that can be autmatically found with high confidence.
2. **Disadvantages**:   
    2.1. The current state of the art restricts this tools to deals with simpler issues which can be more easily automated, and eventhough many tools are getting better, now days more serious vulnerabilities are not covered by these tools.   
    2.2. High number of false positives.   
    2.3. Frequently can't find configuration issues, because they are not represented in the code.   
    2.4. Difficult to 'prove' that an identified security issue is an actual vulnerability.   
    2.5. Many of these tools have difficulty analysing code that can't be compiled. Analysts frequently can't compile code because they don't have the right libraries, all the compilation instructions, all the code, etc.


#### Static Code Analysis Tools List

1. [OWASP - Source Code Analysis Tools](https://owasp.org/www-community/Source_Code_Analysis_Tools)
2. [NIST - Source Code Security Analysers](https://samate.nist.gov/index.php/Source_Code_Security_Analyzers.html)
3. [Wikipedia - List of tools for static code analysis](https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis)
4. **The inbuilt IntelliJ Inspections**: common coding patterns
5. **SpotBugs**: common errors
6. **SonarLint**: common usage patterns
7. **CheckStyle**: common style patterns
8. **Sensei from Secure Code Warrior**: custom rule creation



### SonarQube

According to the [SonarQube Docs](https://docs.sonarqube.org/latest/), the SonarQube® is an automatic code review tool to detect bugs, vulnerabilities, and code smells which can be integrated with the existing workflow to enable continous code inspection across the project branches and pull requests.


![sonarqube-development-cycle](/images/articles/web-development/sonarqube-development-cycle.png)


So, in a typical development process:

1. Developers develop and merge code in an IDE (preferably using SonarLint to receive immediate feedback in the editor) and check-in their code to their DevOps Platform.
2. An organization’s continuous integration (CI) tool checks out, builds, and runs unit tests, and an integrated SonarQube scanner analyzes the results.
3. The scanner posts the results to the SonarQube server which provides feedback to developers through the SonarQube interface, email, in-IDE notifications (through SonarLint), and decoration on pull or merge requests (when using Developer Edition and above).


The SonarQube tool can work at the branches level and at the pull requests made, and the toolset have the following tools:

1. **SonarLint**: it is a tool for the text editor which gives immediate feedbacks.
2. **Quality Gate**: it allows the developer to know if the project is ready for deployment.
3. **Clean as You Code**: this is an approach to code quality that maintain its focus on high standards.
4. **Issues**: the issues are raised whenever a piece of your code breaks a coding rule.   
    4.1. Whether it's an error that will break your code (bug),   
    4.2. A point in your code open to attack (vulnerability),    
    4.3. Or a maintainability issue (code smell).
5. **Security Hotspots**: it highlights security-sensitive pieces of code that need to be reviewed.





### Further Reading

[OWASP Top 10 - 2017 The Ten Most Critical Web Application Security Risks - OWASP](https://wiki.owasp.org/images/0/06/OWASP_Top_10-2017-pt_pt.pdf)

[Open Web Application Security Project Top 10 (OWASP Top 10) - Synopsys](https://www.synopsys.com/glossary/what-is-owasp-top-10.html)

[TOP 10 OWASP – Conheça as principais vulnerabilidades - Gocache](https://www.gocache.com.br/seguranca/top-10-owasp-conheca-as-principais-vulnerabilidades/)

[Installing ModSecurity](https://www.netnea.com/cms/apache-tutorial-6_embedding-modsecurity/)

[Including the OWASP ModSecurity Core Rule Set](https://www.netnea.com/cms/apache-tutorial-7_including-modsecurity-core-rules/)

[Handling False Positives with the OWASP ModSecurity Core Rule Set](https://www.netnea.com/cms/apache-tutorial-8_handling-false-positives-modsecurity-core-rule-set/)

[ModSecurity Handbook, 2nd edition](https://www.feistyduck.com/books/modsecurity-handbook/)


### References

[Welcome to the OWASP Top 10 - 2021 - Owasp.org](https://owasp.org/Top10/)

[OWASP platform](https://owasp.org/)

[What is application security? - Vmware.com](https://www.vmware.com/topics/glossary/content/application-security.html)

[Melhores Práticas de Segurança em Aplicações Web - Gocache.com.br](https://www.gocache.com.br/seguranca/seguranca-em-aplicacoes-web/)

[Web Application Security Testing Guide - SoftwareTestingHelp.com](https://www.softwaretestinghelp.com/security-testing-of-web-applications/)

[Static Code Analysis - OWASP.org](https://owasp.org/www-community/controls/Static_Code_Analysis)

[What is static analysis? - SecureCodeWarion.com](https://www.securecodewarrior.com/blog/what-is-static-analysis)

[SonarQube Documentation - SonarQube.org](https://docs.sonarqube.org/latest/)


[^1]:it-governance-and-management-overview-2022-03-27

[^2]:pmbok-and-project-management-methodologies-2022-03-29

[^3]:itil-service-management-framework-2022-03-30

[^4]:risk-management-overview-2022-04-03

[^5]:information-security-overview-2022-04-05

[^6]:cryptography-steganography-and-cryptanalysis-overview-2022-04-07

[^7]:continuity-plan-and-essentials-for-businesses-overview-2022-04-06


