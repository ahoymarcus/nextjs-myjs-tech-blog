---
author: 'Marcus Vinicius Richa'
title: 'Information Security - Overview'
date: '2022-04-05'
subject: 'security-articles'
description: 'The basic structure of information security has two primary focus or requirements, where the first one is related to the information itself and its contents, while the second refers to the persons who may use the information: the information and the user. And around these key factors arises a certain number of controls like: confidentiality, integrity, availability, authentication, authorization, nonrepudiation, etc.'
---

# Information Security - Overview

1. ##### Introduction  
2. ##### Information Security Concepts
	2.1. Basic Elements of Security Information   
	2.2. Security Police
4. ##### Basic Principles of Preventing Breaches of Security
    2.1. Individual Accountability   
    2.2. Audit   
    2.3. Separation of Duty
5. ##### Responding to Beaches of Security
    5.1. Detection Control   
    5.2. Recovery Control
6. ##### Developing Polices and Appropriate Controls
7. ##### Risks and Vulnerability 
8. ##### Privacy
    8.1. Protection of Information about Individuals    
    8.2. Employee Privacy in the Workplace
9. ##### Further Reading
10. ##### References

### Introduction
 
The Internet today is really a world wide entity that as the site [SecureReading.com](https://securereading.com/infobasics-basic-concept-information-security/) states, the number of internet clients has crossed 3,4 billions by the year 2016, in more than 200 nations, from Arctic to Antarctica`.  


And with the worlwide presence of Internet, also comes the easy access to the information, which is more vulnerable than the ones tightly locked at headquarters, and also can be reached from any country in the world.


###### Other articles from the Governance and Management series:
- `IT Governance and Mangement - Overview` [^1]
- `PMBOK and others Project Management Methodologies` [^2]
- `Risk Management - Overview` [^3]
- `ITIL - Service Management Framework` [^4]


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



### Basic Principles of Preventing Breaches of Security

The document from [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51) presents 3 key principles for management controls related to security and risk management:

1. **Individual accountability**: this on is the sole person responsible for some property or some action, and also this is the person responsible to monitor, to analyse the goals, etc.   
    1.1. So, together with the concept of a singular and individual accountability to respond for some resource or action is the necessity for assurance of identity, besides authentication, and nonrepudiation controls.
2. **Audit**: the audit processes are important not only to make the nonrepudiation controls more robust, but also to create analitical data for monitoring accesses to the system, whether authorized or not.   
    2.1. The document from [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51) says that one main drawback from the  auditing process is the overhead created by interpreting and auditing the data.
3. **Separation of duty**: this concept says that important operations cannot be performed by a single person.
    3.1. The separation of duty not only strenghten the security, but can also reduce errors by providing for independent checks.


### Responding to Beaches of Security

One important process to deal with breaches of security is **Recovery Control**, which exists not to prevent, but to bring some responses to breaches events.


And it is interesting as the site [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51) states that the presence of **detection and recovery** does not indicate a adimition of shortcomings in the security operation, but that it is by itself a important part of the whole process. The site even says that in some cases the **detection and recovery controls** can be even more cost-effective that attempts at a total prevention.
´


`Recovery from a security breach may involve taking disciplinary or legal action, notifying incidentally compromised parties, or changing policies, for example. From a technical standpoint, a security breach has much in common with a failure that results from faulty equipment, software, or operations. Usually some work will have to be discarded, and some or all of the system will have to be rolled back to a clean state.` [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51)



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


And one interesting point that brought by the same site is the fact that most of the times organizations have to deal with the problem of controls and security services considering what is available on the market than everything that should be needed, because most of the time purchasers of compute systems cannot afford to have a system designed from scratch to their needs.


`However, for many of the management controls discussed above, there is not a clear, widely accepted articulation of how computer systems should be designed to support these controls, what sort of robustness is required in the mechanisms, and so on. As a result, customers for computer security are faced with a "take-it-or-leave-it" marketplace. For instance, customers appear to demand password-based authentication because it is available, not because analysis has shown that this relatively weak mechanism provides enough protection. This effect works in both directions: a service is not demanded if it is not available, but once it becomes available somewhere, it soon becomes wanted everywhere.`  [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51) 



At the end of the Chapter 4, the [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51) document also brings another 2 important points that should be at mind while defining polices and controls:

1. **Awareness from personel to the security controls**: as it was already stated before, personal trainning, awareness, and acceptance are key factors here, because as the site says, technology anlone cannot provide security, if there is no commitment from users.
2. **While securiting the whole system, it is better to work from a collection of components distrustiful from one another**: meaning that while there is a holistic view in information security, because security is a weak-link, **a security program must be multidimensional**.   
    2.1. So, eventhough the system is formed by a independent collection of components, which have all of its resources kept restrict from the outside, they can still operate as a whole in terms of interoperability.



### Risks and Vulnerability 

Here, there is a small list of security problems or abuse reported:

1. **Misusing authority**: improper accesses or surreptitious misuses.
2. **Masquerading**: as in one user impersonating another
3. **Bypassing controls**: these are attacks that typically exploit system flaws or hidden circumventive 'features'.
4. **General attcks to the system**: trojan horses, viruses, etc.
5. **Carrying out hardware and media abuses**: these a mischievous activities aimed direct against equipaments or even scavenging information frm discarded media.
6. **Using a computer system as an indirect aid in committing a criminal act**: as in auto-dialing telephone numbers in search of answering modems, cracking another system's encrypted password files, or running an illicit business. (For example, drug operations are becoming increasingly computerized.)


### Privacy

Still according to the document from [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51), the concern for privacy should arise in computer systems is two disparate ways:

1. **Personal information**: the need to protect personal information kept in the system.
2. **Employees compliance**: the need to ensure that employees of an organization are complying with the organization's polices and procedures.


#### Protection of Information about Individuals

Some basic principles from major regulations in US and Europe:

1. There must be no secrety storage system for personal data record which existence is secret.
2. There must be a way for individuals to find out what information about is n a record and how it is used*.
3. There must be a way for individuals to prevent information obtained about them for one purpose from being used or made available for other purposes without their consent.
4. There must be a way for individuals to correct or amend a record of identifiable information about them.
5. Any organization creating, maintaining, using, or disseminating records of identifiable personal data must assure that data are used as intended and must take precautions to prevent misuse of the data.


#### Employee Privacy in the Workplace

There is a dificul line to be drawn here, because from one side it is imperative that management could monitor employees activities to guarantee compliance with polices and procidures, but on the other side it is necessary not to trespass the employees pravacy also.


`Random spot checks of user files by information security analysts may be conducted to ensure that personal business items, games, and so on, are not put on company computing resources. Disciplinary action may result when violations of policy are discovered. The above situation does not, in itself, relate to security. However, one method proposed to increase the level of system security involves monitoring workers' actions to detect, for example, patterns of activity that suggest that a worker's password has been stolen. This level of monitoring provides increased opportunity to observe all aspects of worker activity, not just security-related activity, and to significantly reduce a worker's expectation for privacy at work.`   [National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51)




### Further Reading

[Information Security Career Looking Bright, Rewarding and Attractive! - SecureReading.com](https://securereading.com/information-security-career/)

[Cyber Security Threats and Attacks: All You Need to Know - StealthLabs.com](https://www.stealthlabs.com/blog/cyber-security-threats-all-you-need-to-know/)

[]()


### References

[Computers at Risk: Safe Computing in the Information Age (1991) - Chapter 04 - National Research Concil](https://nap.nationalacademies.org/read/1581/chapter/4#51)

[INFOBASICS-Basic Concept of Information Security - SecureReading.com](https://securereading.com/infobasics-basic-concept-information-security/)



[]()


[^1]:it-governance-and-management-overview-2022-03-27

[^2]:pmbok-and-project-management-methodologies-2022-03-29

[^3]:risk-management-overview-2022-04-03

[^4]:itil-service-management-framework-2022-03-30



