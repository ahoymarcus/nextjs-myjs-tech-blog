---
author: 'Marcus Vinicius Richa'
title: 'Information Security - Overview'
date: '2022-04-05'
subject: 'management-articles'
description: 'The basic structure of information security has two primary focus or requirements, where the first one is related to the information itself and its contents, while the second refers to the persons who may use the information: the information and the user. And around these key factors arises a certain number of controls like: confidentiality, integrity, availability, authentication, authorization, nonrepudiation, etc.'
---

# Information Security - Overview

1. ##### Introduction  
2. ##### Information Security Concepts
	2.1. Basic Elements of Security Information   
	2.2. Security Police
3. ##### Basic Principles of Preventing Breaches of Security
    3.1. Individual Accountability   
    3.2. Audit   
    3.3. Separation of Duty
4. ##### Responding to Breaches of Security
    4.1. Detection Control   
    4.2. Recovery Control
5. ##### Developing Polices and Appropriate Controls
6. ##### Risks and Vulnerability 
7. ##### Privacy
    7.1. Protection of Information about Individuals    
    7.2. Employee Privacy in the Workplace
8. ##### Cyber Security Protocols and Devices
9. ##### Storage and Backup, Cloud and Safe Devolopment Techniques
10. ##### Security and Databases
    10.1. Adjusting System and Query Performances       
    10.2. Backup, Fault Tolerance and Recovery Routines   
    10.3. Database Configuration and Auditing
11. ##### 
12. ##### Further Reading
13. ##### References

### Introduction
 
The Internet today has really evolved as a World Wide Web entity; and as the site [SecureReading.com](https://securereading.com/infobasics-basic-concept-information-security/) states, the number of internet clients has crossed 3,4 billions by the year 2016, in more than 200 nations, from Arctic to Antarctica`.  


And with the worlwide presence of Internet, also comes the easy access to the information, which is more vulnerable than the ones tightly locked at headquarters, and also can be reached from any country in the world.


###### Other articles from the Governance and Management series:
- `IT Governance and Mangement - Overview` [^1]
- `PMBOK and others Project Management Methodologies` [^2]
- `Risk Management - Overview` [^3]
- `ITIL - Service Management Framework` [^4]
- `Cryptography, Steganography and Criptanalysis - Overview` [^5]
- `Continuity Plan and Essentials for Businesses - Overview` [^6]


### Information Security Concepts


#### Basic Elements of Security Information

The basic structure of information security has two primary focus or requirements, where the first one is related to the information itself and its contents, while the second refers to the persons who may use the information:

1. **The Information**: the security of the related information, works focusing in a triad  concept known as CIA Triad (Confidentiality, Integrity, and Availability)   
    1.1. Confidentiality: in brief it limits the access of information.   
    1.2. Integrity: it is the assurance that the information is trustworth and accurate.      
    1.3. Availability: that is the guarantee of reliable access to the information by authorized people.
2. **The Persons**: these are concepts related to the access of the clients who should be rightly interacting with the information.   
    2.1. Authentication   
    2.2. Authorization   
    2.3. Non-Repudiation


###### Note: another alternative model to the CIA Triad is the Parkerian hexad (Confidentiality, Possession or Control, Integrity, Authenticity, Availability and Utility).



`"[...] requirements may be emphasized differently in various applications. For a national defense system, the chief concern may be ensuring the confidentiality of classified information, whereas a funds transfer system may require strong integrity controls. The requirements for applications that are connected to external systems will differ from those for applications without such interconnection. Thus the specific requirements and controls for information security can vary."` [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51)


The document from [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51) also states ahead that the correct use of the controls should depend much more on the use of the system that on its own kind of system. 

And the document even gives a example where a same kind of publishing system while being used to publish corporate proprietary material, it should have conidentiality as the primary control, but if the same system was publishing laws, then integrity should be the priority. And finally, if it was to publish publih daily information, then availability should be the priority.
    

###### Confidentiality

Information is a proprietary resource, and specially the **Sensitive information** has be kept from unwanted access. For example, finantial banking information, personal information, govern documents are information that must not be handled to the wrong clients.


###### Integrity
 
The information that is distributed digitally cannot have its contents changed during storage, transmission, and usage by unwanted parties, nor by human error.


The site [SecureReading.com](https://securereading.com/infobasics-basic-concept-information-security/) says that in some areas like financial data, air traffic control, and financial accounting, for example, this concept strikes to be particularly important.


The [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51) gives another example for a specific control related with maintaining the integrity of the information where there is a task that is divided itself in order to prevent fraud.


So, in the stated case, a **purchasing system** could be divided into 3 parts which have to be assigned to 3 different persons, and have each speciffic signature in order to have a sound process for each of its sections: may it be the ordering, or the receiving, or the payment part of the system.
 
 
###### Availability
 
Also, the digital information has to be available by the rightful clients, meaning that not only it has to be protected from data losses, but also it has to be accessable for the parties that need to use that information.


One example of service where availability can be highlighted with particular importance is in service-oriented businesses, where the core of the business depends on the correct distribution of information to clients.


Another point of **availability** that implies some of its secondary traits which are necessary for a system be properly functional according to its own standards, and thus brings that guarantee of propor use by its legitimate clients:

1. Response time: this means that it should not be enough that a client could reach the information it possess, but it should reach it in due time as well.
2. Guaranteed bandwidth: again, for the correct availability of any kind of information, it should also be accounted the necessary use and the means to do so in a meaningful capacity.
3. Recovery procedure: that even problems concerning to the use of some information should give way to the necessary means of recovering its necessary functionalities in a meaningful time and manner.



###### Authentication

This is the process that provides proof that some user is really the person it is claiming to be. Usually it applies some sort of digital identity, like passwords, smartcards, fingerprint, etc.



###### Authorization

Althorization is another important piece related to the whole effort of making the information available, because it should not be sufficient to determ that some user is really whom it claims to be, but to also bring the necessary restrictions so that this user could carry out its own diligences sandboxed into what it rightly own.


So, whether it is to run a certain kind of program, or to access some specific area in a site, or to perform some kind of process to some information, as updating it, each specific user should only have access to its own information rights.



###### Non-Repudiation
 
Finally, another crucial process in other to guarantee a strong security to the information is the guarantee that the person authenticated cannot be later refused, that is to say, that a user cannot deny later its ownership to some activity performed. So, this is the quality of non-repudiation, since somewhere or someway it's recorded the user interaction with the system or information, etc.



#### The Security Police
 
This is a document by those responsible for a system (e.g. senior management), which brings concise description about the information values, the protection responsabilities, and the organization commitment.
 

Together with that prior information, the security police needs to describe the basic elements from the information system, and also to explain the range of the circunstances embraced in the processes and their priorities. And finally the residual risks.


And this second part is so relevant that the [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51) states that the absence of this later part would make the security police so general that it would become quite useless.
 
 
`"In any particular circumstance, some threats are more probable than others, and a prudent policy setter must assess the threats, assign a level of concern to each, and state a policy in terms of which threats are to be resisted. For example, until recently most policies for security did not require that security needs be met in the face of a virus attack, because that form of attack was uncommon and not widely understood. As viruses have escalated from a hypothetical to a commonplace threat, it has become necessary to rethink such policies in regard to methods of distribution and acquisition of software. Implicit in this process is management's choice of a level of residual risk that it will live with, a level that varies among organizations."`  [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51)



Another important point within the **Security Police** document is the fact, eventhough many of its controls are related to protecting the information or the information systems, there are many other important topics that needs to be addressed:

1. **The information and its values.**
2. **The controls in the information systems.**
3. **Phisical security.**
4. **Classification of information.**
5. **Recovery procedures**
6. **Personel training, awareness, and acceptance**
7. **Residual risks**
8. **Auditing, backup**



### Basic Principles of Preventing Breaches of Security

The document from [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51) presents 3 key principles for management controls related to security and risk management:

1. **Individual accountability**: this means that there should always be some person direct responsible for each property or to each action, and that this same individual should also be the person responsible to speak for it, to  monitor it, and to analyse its goals, etc.:      
    1.1. So, here, together with this concept of a singular and individual accountability to each resource/action, it adds the necessity for assurance of all those other controls seem before: authentication, authorization, and nonrepudiation.
2. **Audit**: the audit processes are important not only to make the nonrepudiation controls more robust, but also to create analytical data for monitoring accesses to the system, whether authorized or not:      
    2.1. The document from [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51) says that one main drawback from the  auditing process is the overhead created by the process of interpreting and auditing the data.
3. **Separation of duty**: this concept says that important operations cannot be performed by a single person:   
    3.1. The separation of duty not only strenghten the security, but can also reduce errors by providing for independent checks.


### Responding to Breaches of Security

One important process to deal with breaches of security is **Recovery Control**, which exists not to prevent, but to bring the necesary responses to some breache event that takes place.


And, as the site [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51) says, the presence of **detection and recovery** does not indicate a adimition of shortcomings in the security operation, but that it is by itself a important part of the whole process. The site even says that in some cases the **detection and recovery controls** can be even more cost-effective then to attempt a total prevention process.



`"Recovery from a security breach may involve taking disciplinary or legal action, notifying incidentally compromised parties, or changing policies, for example. From a technical standpoint, a security breach has much in common with a failure that results from faulty equipment, software, or operations. Usually some work will have to be discarded, and some or all of the system will have to be rolled back to a clean state."` [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51)



### Developing Polices and Appropriate Controls

The site [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51) also gives a step-by-step guide for developing polices:

1. Evaluation of the assets being protected
2. Cataloging vulnerabilities and evaluating their potential costs
3. Cataloging potential threats, their probability and potential costs
4. Cataloging risks and points of failure in the operation
5. Define the organization's degree of risk aversion
6. Definition of available countermeasures (controls and securities services)
7. The effectiveness of controls and securities services
8. The costs and the opportunities to install all these controls and securities services


And another interesting point also brought by the same site above, it is the additional difficulty and responsability to the fact that most of the time the organizations and the companies might have to deal with problems of controls and probelms of security services related to systems and services provided by what it is available on the market rather than designing those itself.


`"However, for many of the management controls discussed above, there is not a clear, widely accepted articulation of how computer systems should be designed to support these controls, what sort of robustness is required in the mechanisms, and so on. As a result, customers for computer security are faced with a "take-it-or-leave-it" marketplace. For instance, customers appear to demand password-based authentication because it is available, not because analysis has shown that this relatively weak mechanism provides enough protection. This effect works in both directions: a service is not demanded if it is not available, but once it becomes available somewhere, it soon becomes wanted everywhere."`  [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51) 



At the end of the Chapter 4, the [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51) document also brings another 2 important points that should be at mind while defining polices and controls:

1. **Awareness from personel to the security controls**: as it was already stated before, personal trainning, awareness, and acceptance are key factors here, because as the site says, technology alone cannot provide proper security, if there is no commitment from the users.
2. **While securiting the whole system, it is better to work from a collection of components distrustiful from one another**: meaning that while there is a holistic view in information security, because security is a weak-link, **a security program must be multidimensional**:     
    2.1. So, eventhough the system is formed by a independent collection of components, which have all of its resources kept restrict from the outside, they can still operate as a whole in terms of interoperability.




### Risks and Vulnerability 

Here, there is a small list of security problems or abuse reported:

1. **Misusing authority**: improper accesses or surreptitious misuses.
2. **Masquerading**: as in one user impersonating another
3. **Bypassing controls**: these are attacks that typically exploit system flaws or hidden circumventive 'features'.
4. **General attacks to the system**: trojan horses, viruses, etc.
5. **Carrying out hardware and media abuses**: these a mischievous activities aimed direct against equipaments or even scavenging information form discarded media.
6. **Using a computer system as an indirect aid in committing a criminal act**: as in auto-dialing telephone numbers in search of answering modems, cracking another system's encrypted password files, or running an illicit business:   
    6.1. For example, drug operations are becoming increasingly computerized.



### Privacy

Still according to the document from [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51), the concern for privacy should arise in computer systems in two disparate ways:

1. **Personal information**: the need to protect personal information kept in the system.
2. **Employees compliance**: the need to ensure that employees of an organization are complying with the organization's polices and procedures.



#### Protection of Information about Individuals

Some basic principles from major regulations in US and Europe:

1. There must be no secrety storage system for personal data record which existence is secret.
2. There must be a way for individuals to find out what information about them is being recorded and how it is being used*.
3. There must be a way for individuals to prevent information obtained about them for one purpose from being used or made available for other purposes without their consent.
4. There must be a way for individuals to correct or amend a record of identifiable information about them.
5. Any organization creating, maintaining, using, or disseminating records of identifiable personal data must assure that data are used as intended and must take precautions to prevent misuse of the data.



#### Employee Privacy in the Workplace

Here, there is a dificult line to be drawn, because from one side it is imperative that management could monitor employees activities to guarantee compliance with polices and procidures, but on the other side it is necessary not to trespass the employees privacy also.


`"Random spot checks of user files by information security analysts may be conducted to ensure that personal business items, games, and so on, are not put on company computing resources. Disciplinary action may result when violations of policy are discovered. The above situation does not, in itself, relate to security. However, one method proposed to increase the level of system security involves monitoring workers' actions to detect, for example, patterns of activity that suggest that a worker's password has been stolen. This level of monitoring provides increased opportunity to observe all aspects of worker activity, not just security-related activity, and to significantly reduce a worker's expectation for privacy at work."` [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51)



### Cyber Security Protocols and Devices

According to the article [6 Network Security Protocols You Should Know](https://https://www.catonetworks.com/network-security/network-security-protocols/) from CATO Networks, the security protocols are a string of tools and safeguards that help the Internet, and that as we may say, should help all systems and processes to keep in check all those necessary security scontrols already stated in this present article:

1. Confidentiality
2. Integrity
3. Availability, etc.


So, in the case of the Internet Security Protocols, the article from Cyber Pedia presents four types:

1. Access Control protocols: here, again it is the task of validating the right user to the correct identity provided.
2. Encryption Algorithms protocols: these are mostly processes that ensures the safeguard of the original resources by applying a level of encoding and encryption above them.
3. Key Management protocols: these are protocols that deal and handle with user identity and all the necessary means to manage and to monitor them.
4. Message Integrity protocols: this sets of protocols handles mainly integrety for messages and for data, bringing means that they are kept true to its original form and are not tempered with.


There is also a recurrent relation that can be made for these types of protocols with the commonly known abstractions layers found in networks, specially those of the Internet with the OSI (Open Systems Interconnection) model.


So, in each of these layers there is the same idea of protecting and imposing all the necessary controls within each own layer or level of abstraction:
1. **Physical layer**: at this level, it is a control defined over equipaments and of the premises that house the information. 
2. **Data Link layer**: at this level, it is the control defined over links responsible to the exchange of messages or data.   
    2.1. Common protocols found here are: encrypting protocols.
3. **Network layer**: at this level, a network is managed by devising forms of communication by means of Addressing and and Packaging efforts:   
    3.1. Common protocols found here are: IPSec (Internet Protocol Security) and VPNs (Virtual Private Networks).
4. **Transport layer**: at this level, the task is to promote the delivery of data in a safely and error-free manner:     
    4.1. Common protocols found here are: the TSL (Transport Layer Security) is a important current protocol that ensure security for others protocols like the new HTTPS (HyperText Transfer Protocol Secure). 
5. **Session layer**: at this level, the protocols here work to define the behavior for all the user agents present in the ecosystem by what is called a "Session", just like a session over Internet, for example:  
    5.1. Common protocols found here are: SSL (Secure Socket Layer).
6. **Presentation layer**: at this level, the protocols work in terms of presenting information for those same user agents that are participants in all the system:       
    6.1. Common protocols found here are: protocols related to logins and to encrypting are very common.
7. **Application layer**: at this layer, there are all the tools and application that are currently being used by all the parties involved in all these processes:   
    7.1. Common protocols found here are: SFTP (Secure File Transfer Protocol), PGP (Pretty Good Privacy), SMP (Secure Messaging Protocol), FTP (File Transfer Protocol), DNS (Domain Name System), Kerberos, SNMP (Simple Network Management Protocol), etc.



> _**Note**_:
> For understanding purposes, taking the TCP/IP _de facto_ architecure for LANs, we can reference four layers only that would hold together these generic protocols:
1. **Access or Link layer**:   
    1.1. Common protocols found here are: the TCP/IP architecture does not dictate specific protocols for transmission over the physical layer, only discribes then (SILVA, 2021, p. 105).
2. **Internert layer**:   
    2.1. Common protocols found here are: IP (Internet Protocol), ARP (Address Revolution Protocol), ICMP (Internet Control Message Protocol).
3. **Transport layer**:   
    3.1. Common protocols found here are: TCP (Transmission Control Protocol) and UDP (User Datagram Protocol).
4. **Application layer**:   
    4.1. Common protocols found here are: DHCP (Dynamic Host Configuration Protocol), DNS (Domain Name Systems), FTP (File Transfer Protocol), HTTP (HyperText Transfer Protocol), SMTP (Simple Mail Transfer Protocol), POP (Post Office Protocol), IMAP (Internet Message Access Protocol), etc.



#### A gereral list of important security protocols:
- **DTLS (Datagram Transport Layer Security)**:    
It is a transport protocol that is based on TSL and operates trough datagram kind of messaging.
- **HTTPS (HyperText Transfer Protocol Secure)**:    
This is a broader protocol that operats over Internet links, that together with other protocols like SSL and TSL, allow the linkage connection of two or more systems.
- **IPSec (Internet Protocol Security)**:    
Released by the IETF (Internet Engineering Task Force) in the 1900s, it offers a suit of tools that provide data authentication and integrity with the help of protocols like ESP (Encapsulating Security Payload) and AH (Authentication Header), while allowing manual and automatic management of cryptographic keys (with the help of IKE, Internet Key Exchange protocol):    
    - It also can protect VPNs by providing tunneling to encrypt data transfers.
- **Kerberos**:    
This is a network validation protocol that provides strong authentication between client-server applications.   
    - It can be used over untrusted networks, like public networks, providing trusted communication, and it has support over many OSs like Windows (which uses it by default), Mac and Linux.
- **SNMP (Simple Network Management Protocol)**:    
It is a network device management and monitoring protocol working at the application layer, which can secure devices on LANs OR WANs, and it is an original part of the Internet Protocol suit defined by the IETF (Internet Engineering Task Force).   
    - SNMP has a three fold architecture based on a manager, an agent and a information base (the manager is the client, the agent the server and the information base the database).   
    - With its 3rd version in 2004, SNMP incorporated also features for encrypting packages, integrity checks and authentication.
- **SSH (Secure Shell)**:    
Invented in 1995, it is a security protocol that acts over a network, allowing a command-line tool to login and remotely operates tasks.
- **SSL (Secure Sockets Layer)**:    
It is a standard security mechanism for preserving a secure connection between two parties:    
    - It encrypts data, authenticates data origins, and ensures message integrity, negotiating security within the Session.
- **TSL (Transport Layer Security)**:     
This protocol is related to the SSL protocol, but that is is currently defined by the IETF (Internet Engineering Task Force) group.







### Further Reading

[Information Security Career Looking Bright, Rewarding and Attractive! - SecureReading.com](https://securereading.com/information-security-career/)

[Cyber Security Threats and Attacks: All You Need to Know - StealthLabs.com](https://www.stealthlabs.com/blog/cyber-security-threats-all-you-need-to-know/)

[]()


### References

[CATO Networks. 6 Network Security Protocols You Should Know](https://www.catonetworks.com/network-security/network-security-protocols/)

[Computers at Risk: Safe Computing in the Information Age (1991) - Chapter 04 - National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51)

[CYBERPEDIA. Types of Security Protocols (And How They Protect You from Risks)](https://www.bitdefender.com/cyberpedia/types-of-security-protocols/from)

[INFOBASICS-Basic Concept of Information Security - SecureReading.com](https://securereading.com/infobasics-basic-concept-information-security/)

`SILVA, Eduardo Marques da Silva. Redes de Computadores: Teoria e Prática. Ed. Senac, 2021.

[W3Schools. Network Protocols and Its Security](https://www.w3schools.in/cyber-security/network-protocols-and-its-security)


[]()


[^1]:it-governance-and-management-overview-2022-03-27

[^2]:pmbok-and-project-management-methodologies-2022-03-29

[^3]:risk-management-overview-2022-04-03

[^4]:itil-service-management-framework-2022-03-30

[^5]:cryptography-steganography-and-cryptanalysis-overview-2022-04-07

[^6]:continuity-plan-and-essentials-for-businesses-overview-2022-04-06

