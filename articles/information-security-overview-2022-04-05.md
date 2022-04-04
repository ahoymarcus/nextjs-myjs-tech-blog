---
author: 'Marcus Vinicius Richa'
title: 'Information Security - Overview'
date: '2022-04-05'
subject: 'security-articles'
description: '.'
---

# Information Security - Overview

1. ##### Introduction  
2. ##### Information Security Concepts
	2.1. Basic Elements of Security Information   
	2.2. Security Police
4. ##### 
5. ##### 
6. ##### 
7. #####  
8. ##### 
9. ##### Further Reading
10. ##### References

### Introduction
 
The Internet today is really a world wide entity that as the site [SecureReading.com](https://securereading.com/infobasics-basic-concept-information-security/) states, the number of internet clients has crossed 3,4 billions by the year 2016, in more than 200 nations, from Arctic to Antarctica`.  


And with the worlwide presence of Internet, also comes the easy access to the information, which is more vulnerable than the ones tightly locked at headquarters, and also can be reached from any country in the world.


###### Other articles from the Governance and Management series:
- `IT Governance and Mangement - Overview` [^1]
- `PMBOK and others Project Management Methodologies` [^2]
- `ITIL - Service Management Framework` [^3]


### Information Security Concepts


#### Basic Elements of Security Information

The basic structure of information security has two primary focus or requirements, where the first one is related to the information itself and its contents, while the second refers to the persons who may use the information:

1. **The Information**: the security of the related information, works focusing in a triad  concept known as CIA Triad (Confidentiality, Integrity, and Availability)   
    1.1. Confidentiality: In brief it limits the access of information.   
    1.2. Integrity: it is the assurance that the information is trustworth and accurate.      
    1.3. Availability: that is the guarantee of reliable access to the information by authorized people.
2. **The Persons**: these are concepts related to the access of the clients who should be rightly interacting with the information.   
    2.1. Authentication   
    2.2. Authorization   
    2.3. Non-Repudiation


###### Note: another alternative model to the CIA Triad is the Parkerian hexad (Confidentiality, Possession or Control, Integrity, Authenticity, Availability and Utility).



`[...] requirements may be emphasized differently in various applications. For a national defense system, the chief concern may be ensuring the confidentiality of classified information, whereas a funds transfer system may require strong integrity controls. The requirements for applications that are connected to external systems will differ from those for applications without such interconnection. Thus the specific requirements and controls for information security can vary. National Academies of Sciences, Engineering, and Medicine. 1991. Computers at Risk: Safe Computing in the Information Age. Washington, DC: The National ` [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51)


The document from [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51) also states ahead that the correct use of the controls should depend much more on the use of the system that on its own kind of system. 

And the document even gives a example where a same kind of publishing system while being used to publish corporate proprietary material, it should have conidentiality as the primary control, but if the same system was publishing laws, then integrity should be the priority. And finally, if it was to publish publih daily information, then availability should be the priority.
    

###### Confidentiality
 
Information is a proprietary resource, and specially the **Sensitive information** has be kept from unwanted access. For example, finantial banking information, personal information, govern documents are information that must not be handled to the wrong clients.


###### Integrity
 
The information that is distributed digitally cannot have its contents changed during storage, transmission, and usage by unwanted parties, nor by human error.

The site [SecureReading.com](https://securereading.com/infobasics-basic-concept-information-security/) says that in some areas like financial data, air traffic control, and financial accounting, this concept strikes to be particularly important.

One interesting example of a specific control for maintaining the integrity of the information is cited by [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51) where it is showed a task of dividing a task in order to prevent fraud.

So, in that case, a purchasing system could be divided into 3 parts which have to be assigned to 3 different persons, and have each speciffic signature in order to have a sound process for in each section: ordering, receiving, and payment.
 
 
###### Availability
 
Also, the digital information has to be available by the rightful clients, meaning that not only it has be protected from data losses, but also be accessable for the parties that need to use the information.
 
One example of service where availability can be highlighted with particular importance is in service-oriented businesses, where the core of the business depends on the correct distribution of information to clients.
 
Also, observe that this controls implies some secondary taits that are necessary to system be properly used by its legitimate clients:

1. Response time
2. Guaranteed bandwidth
3. Recovery procedure
 

###### Authentication

This is the process that provides proof that some user is really the person he is claiming to be. Usually it applies some sort of digital identity, like passwords, smartcards, fingerprint, etc.


###### Authorization

But it is not sufficient to determ that some user is who he claims to be, because it is necessary also to restrict the correct activities the user can rightly carry out, whether it is to run a certain kind of program, to acess some specific area in a site or perform some kind of process to some information as updating it.


###### Non-Repudiation
 
Finally, another crucial process in other to guarantee a strong security to the information is to guarantee that the person authenticated cannot be later refused, that is to say that a user cannot deny his ownership to some activity performed. So, this is non-repudiation.
 
 
 
#### The Security Police
 
This is a document by those responsible for a system (e.g. senior management), which brings concise description about the information values, the protection responsabilities, and the organization commitment.
 

Together with that prior information, the security police needs to describe the basic elements from the information system, and also to explain the range of the circunstances embraced in the processes and their priorities. And finally the residual risks.


And this second part is so relevant that the [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51) states that the absence of this later part would make the security police so general that it would become quite useless.
 
 
`In any particular circumstance, some threats are more probable than others, and a prudent policy setter must assess the threats, assign a level of concern to each, and state a policy in terms of which threats are to be resisted. For example, until recently most policies for security did not require that security needs be met in the face of a virus attack, because that form of attack was uncommon and not widely understood. As viruses have escalated from a hypothetical to a commonplace threat, it has become necessary to rethink such policies in regard to methods of distribution and acquisition of software. Implicit in this process is management's choice of a level of residual risk that it will live with, a level that varies among organizations.`  [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51)



Another important point within the **Security Police** document is the fact, eventhough many of its controls are related to protecting the information or the information systems, there are many other important topics that needs to be addressed:

1. **The information and its values.**
2. **The controls in the information systems.**
3. **Phisical security.**
4. **Classification of information.**
5. **Recovery procedures**
6. **Personel training, awareness, and acceptance**
7. **Residual risks**
8. **Auditing, backup**





MANAGEMENT CONTROLS-CHOOSING THE MEANS TO SECURE INFORMATION AND OPERATIONS
National Academies of Sciences, Engineering, and Medicine. 1991. Computers at Risk: Safe Computing in the Information Age. Washington, DC: The National Academies Press. https://doi.org/10.17226/1581.
 
 
 



[Computers at Risk: Safe Computing in the Information Age (1991) - Chapter 04 - National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51)

Segurança da informação. Conceitos de segurança da informação: classificação de informações, confidencialidade, integridade, disponibilidade, não repúdio, privacidade, controle de acesso, segurança física e lógica; 

identificação, autorização e autenticação.

### Further Reading

[Information Security Career Looking Bright, Rewarding and Attractive! - SecureReading.com](https://securereading.com/information-security-career/)

[Cyber Security Threats and Attacks: All You Need to Know - StealthLabs.com](https://www.stealthlabs.com/blog/cyber-security-threats-all-you-need-to-know/)

[]()


### References

[INFOBASICS-Basic Concept of Information Security - SecureReading.com](https://securereading.com/infobasics-basic-concept-information-security/)


[]()


[^1]:it-governance-and-management-overview-2022-03-27

[^2]:pmbok-and-project-management-methodologies-2022-03-29

[^3]:itil-service-management-framework-2022-03-30



