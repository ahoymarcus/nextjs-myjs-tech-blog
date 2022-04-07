---
author: 'Marcus Vinicius Richa'
title: 'Cryptography, Steganography and Criptanalysis - Overview'
date: '2022-04-07'
subject: 'security-articles'
description: '.'
---

# Cryptography, Steganography and Criptanalysis - Overview

1. ##### Introduction  
2. ##### Cryptography Terminology
    2.1. 
    2.2. 
    2.3. 
3. #####
    3.1. 
5. ##### 
6. ##### 
7. #####  
8. ##### 
9. ##### Further Reading
10. ##### References

### Introduction

Cryptography is the study and practice of techniques for secure communication in the presence of third parties, and nowdays it works with developing and analysing protocols which prevents malicious third parties from retrieving information being exchanged through various means. The roots of the word comes from the Greek language, where 'Crypto' means secret or hiden, and 'Graphy' means written.

On the other side of cryptography there is the action of Crytanalysis, which is a practice to analytically break secret coded messages. And since cryptography is related to security, and specifically Information Security, they share this same key structures: 

1. **Confidentiality**
2. **Integrity**
3. **Availability**
4. **Authentication**
5. **Authorization**
6. **Nonrepudiation**


###### See the definitions for these key structures and the basic concepts from information security in this article:
- `Information Security - Overview` [^4]


In general terms, a process of **Encryption** occurs when two parties want to trade messages, and so the first party uses a algorithm (a kind of processor) with some secret key to scramble the orginal message, that is called 'Plaintext', to produce a scrambled message, that now is called 'Ciphertext', and that it is the message to be sent ahead to the second party.

The second party, after receiving the ciphertext, uses the same algorithm with the shared secret key to transform the scrambled message back into its original form, a process called **Decryption**.



###### Other articles from the Governance and Management series:
- `PMBOK and others Project Management Methodologies` [^1]
- `ITIL - Service Management Framework` [^2]
- `Risk Management - Overview` [^3]
- `Information Security - Overview` [^4]



### Cryptography Terminology

1. **Symmetric key cryptography**: this method uses a algorithm together with a public key which has to be possed by both parties in the communication.   
    1.1. This method is fast, both less secury because depends on the transmission of the public key.
2. **Asymmetric key cryptography**: in this method, there is also a public key for encryption that has to be shared among the parties. The difference is the existance of individual private keys for each of the parties to decode messages.   
    2.1. This method is much more secure, since the pravate keys don't have to leave each owner.   
    2.2. It is much slower for processing though.
3. **Hashing**: it involves transforming the plaintext into a hash value which will always keep its value unaltered as long the message remains also unaltered.   
    3.1. This method serves to identify and to validate the parties.
4. **Classical attacks**:   
    1.1. Mathematical analyis: this method uses the analysis of the internal structure of the algorithm to decrypt the messages.   
    1.2. Brute force: the attacker has to use all possible cases to match a password.






















[Cryptography Tutorial - TutorialsPoint](https://www.tutorialspoint.com/cryptography/origin_of_cryptography.htm)

[Cryptography Introduction - GeekforGeeks.org](https://www.geeksforgeeks.org/cryptography-introduction/)

Conceitos de criptografia, esteganografia e criptoanálise. Sistemas criptográficos simétricos e de chave pública. Modos de operação de cifradores. Funções digestoras (hashes).


ISO 27001 – Annex A.17: Information Security Aspects of Business Continuity Management - Isms.online - https://www.isms.online/iso-27001/annex-a-17-information-security-aspects-of-business-continuity-management/

Organização da ICP-Brasil. Norma de segurança ISO/IEC 27001.

### Further Reading

[Unit: Cryptography - Khanacademy.org](https://www.khanacademy.org/computing/computer-science/cryptography)

[ISO 22301 - Wikipedia](https://en.wikipedia.org/wiki/ISO_22301)

[]()


### References

[Cryptography Introduction - GeekforGeeks.org](https://www.geeksforgeeks.org/cryptography-introduction/)

[]()


[^1]:pmbok-and-project-management-methodologies-2022-03-29

[^2]:itil-service-management-framework-2022-03-30

[^3]:risk-management-overview-2022-04-03

[^4]:information-security-overview-2022-04-05


