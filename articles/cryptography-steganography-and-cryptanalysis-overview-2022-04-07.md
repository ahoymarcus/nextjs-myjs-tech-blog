---
author: 'Marcus Vinicius Richa'
title: 'Cryptography, Steganography and Criptanalysis - Overview'
date: '2022-04-07'
subject: 'security-articles'
description: 'Cryptography is the study and practice of techniques for secure communication in the presence of third parties, and nowdays it works with developing and analysing protocols which prevents malicious third parties from retrieving information being exchanged through various means. The roots of the word comes from the Greek language, where Krypto means secret or hiden, and Graphene means written.'
---

# Cryptography, Steganography and Criptanalysis - Overview

1. ##### Introduction  
2. ##### Cryptography
    2.1. Cryptography Terminology    
    2.2. Cryptography Evolution Table
3. ##### Traditional Cipher Systems
    3.1. Ceasar Cipher    
    3.2. Simple Substitution Cipher   
    3.3. Playfair Cipher   
    3.4. Venegere Cipher    
    3.5. Transition Cipher
4. ##### Modern Cipher Systems
    4.1. Symmetric Key Encryption Methods   
    4.2. Asymmetric Key Encryption Methods   
    4.3. Kerckhoff's Principles for Cryptosystem    
5. ##### Assumptions About the Crytosystem Security Environment
    5.1. Details of the Encrypted Scheme    
    5.2. Availability of Plaintext and Ciphertext
6. ##### Cryptographic Attacks
        6.1. Modes of Attacks   
        6.2. Diffent Kinds of Cryptographic Attacks
7. #####  
8. ##### 
9. ##### Further Reading
10. ##### References

### Introduction

Cryptography is the study and practice of techniques for secure communication in the presence of third parties, and nowdays it works with developing and analysing protocols which prevents malicious third parties from retrieving information being exchanged through various means. The roots of the word comes from the Greek language, where 'Krypto' means secret or hiden, and 'Graphene' means written.

On the other side of cryptography there is the action of Crytanalysis, which is a practice to analytically break secret coded messages. And since cryptography is related to security, and specifically Information Security, they share this same key structures: 

1. **Confidentiality**
2. **Integrity**
3. **Authentication**
5. **Nonrepudiation**


###### See the definitions for these key structures and the basic concepts from information security in this article:
- `Information Security - Overview` [^4]


In general terms, a process of **Encryption** occurs when two parties want to trade messages, and so the first party uses a algorithm (a kind of processor) with some secret key to scramble the orginal message, that is called 'Plaintext', to produce a scrambled message, that now is called 'Ciphertext', and that it is the message to be sent ahead to the second party.

The second party, after receiving the ciphertext, uses the same algorithm with the shared secret key to transform the scrambled message back into its original form, a process called **Decryption**.


Finally, **Steganography** is a similar method, except here there is not only the interest to protect the content of the information from message, but also to conceal the whole message from any anauthorized party.



###### Other articles from the Governance and Management series:
- `PMBOK and others Project Management Methodologies` [^1]
- `ITIL - Service Management Framework` [^2]
- `Risk Management - Overview` [^3]
- `Information Security - Overview` [^4]



### Cryptography

#### Cryptography Terminology

1. **Symmetric key cryptography**: this method uses a algorithm together with a public key which has to be possed by both parties in the communication.   
    1.1. This method is fast, both less secure because depends on the transmission of the public key.   
    1.2. And for safety reasons the key should be updated frequentely, bringing another problem that creates overhead for the operation.
2. **Asymmetric key cryptography**: in this method, there is also a public key for encryption that has to be shared among the parties. The difference is the existance of individual private keys for each of the parties to decode messages.   
    2.1. This method is much more secure, since the private keys don't have to leave each of the owners.   
    2.2. The private key though different, they are mathematically related, and hence, capable to decrypting the ciphertext.   
    2.3. Though the public and private keys are related mathematically, it is computationally not feasible to find one from another.   
    2.4. The public key has to be put in a public repository.    
    2.5. It is much slower for processing though.
3. **Hashing**: it involves transforming the plaintext into a hash value which will always keep its value unaltered as long the message remains also unaltered.   
    3.1. This method serves to identify and to validate the parties.
4. **Classical attacks**:   
    4.1. Mathematical analyis: this method uses the analysis of the internal structure of the algorithm to decrypt the messages.   
    4.2. Brute force: the attacker has to use all possible cases to match a password.



#### Cryptography Evolution Table


| CLASSIC CRYPTOGRAPHY | MODERN CRYPTOGRAPHY |    
| --------------------------------------- | --------------------------------------- |    
| It uses direct manipulation over the message, exchanging parts of it | It operates on binary bit sequences |   
| It used some particular operation only known by the participants | It uses and relies on public known mathematical algorithms together with secret keys |   


So, as it is explained in the table above, the early crytosystems were based on symmetric key encryption scheme, that is when both of the parties have knowledge of the same secret key. 

Also, before the digital systems emerge, the cryptosystem worked direct at the message/text layer, meaning that the message and the so called ciphertext were one and the same.



### Traditional Cipher Systems

A cryptosystem, also called a 'cipher system', is a implementation for a system which uses cryptographic techniques to secure it features.


#### Ceasar Cipher

Also known as Shift Cipher, it is one historic example of a cryptosystem where to produce the cipher, the message was rearenged by shifitng the alphabetic occurrences a fixed number.

So, with the word 'tutorial' was to be ciphered by this process, using the number 3 which makes for the classic Ceasar Cipher:


![ceasar-cipher-example-01](/images/articles/security/ceasar-cipher-example-01.png)


```
WXWRULDO
```


#### Simple Substitution Cipher

In order to bring more security to the traditional Ceasar Cipher which has a limited possibilit of 26 alphabetic keys to change, the simple substitution cipher uses of permutation to allow permutqation of the letters in the alphabet.

The gain here is that the permutaions possible are 26! (Factorial of 26) what would give a range of `4X10 ** 26`.


#### Playfair Cipher

This is a method that uses a table as a visual apparatus which makes the processes of encrypting and decrypting easier. In this case both parties communicating have the same alphabetic table schema that it is going to be used to create the cipher and to reverse to the plaintext.


It is also a method more secure than the classic cipher because it works with a 25x25 table which has a range of 625 possibilities.


#### Vigenere Cipher

According to the site [TutorialsPoint](https://www.tutorialspoint.com/cryptography/traditional_ciphers.htm), the Vigenere Cipher was designed by tweaking the standard Caesar Cipher to reduce the effectiveness of cryptanalysis on the ciphertext and make the cryptosystem more robust: `It is significantly more secure than a regular Caesar Cipher`.


The site also states that historically this cipher was used to protect sensitive political and military information, and that it was refered as the `unbreakable cipher` due to the difficulty it posed to the cryptoanalysis.


There is also two variations to the basic Vigenere Cipher:

1. **Vernam Cipher**
2. **One-time pad**


`Let us say, we encrypt the name “point” with a one-time pad. It is a 5 letter text. To break the ciphertext by brute force, you need to try all possibilities of keys and conduct computation for (26 x 26 x 26 x 26 x 26) = 265 = 11881376 times. That’s for a message with 5 alphabets. Thus, for a longer message, the computation grows exponentially with every additional alphabet. This makes it computationally impossible to break the ciphertext by brute force.` [TutorialsPoint](https://www.tutorialspoint.com/cryptography/traditional_ciphers.htm)


#### Transition Cipher

This is another case of cryptosystem that uses a table as a visual auxiliary tool, where the secret key is a number which defines the number of columns in the table. 


The plaintext is then written horizontally and produces the necessary number of rows to extinguish the plaintext. Then the ciphertext is created by concatenating the information from each column starting from the left.


Finallt, the receiver of the ciphertext who already knows the number of columns, will define the number of rows by diving the total number ciphertext alphabets by the key secret number.


Then, once the receiver prepared the table, he will lay the chipertext in the columns, top to bottom, starting from the left.



### Modern Cipher System

In modern ciphersystems data is represented digitally by strings of binary digits (bits), instead of the direct manipulation over the message. And the ciphersystem can be divided into 2 groups depending on the type of process used to process the strings by the information system:

1. **Block Ciphers**: in this scheme the plain binary text is processed in blocks of bits, in a series of operations until there is no more binary text to be divided into blocks.    
    1.1. The number of bits in the blocks are fixed.   
    1.2. DES method, for example, uses blocks of 64 bits, while AES method uses blocks of 128 bits.
2. **Stream Ciphers**: this process uses works direct with the bits that are disposed in a stream of information.    
    2.1. As the site [TutorialsPoint](https://www.tutorialspoint.com/cryptography/traditional_ciphers.htm) states a bit stream could be thought as  one bit block size.


`A block cipher takes a block of plaintext bits and generates a block of ciphertext bits, generally of same size. The size of block is fixed in the given scheme. The choice of block size does not directly affect to the strength of encryption scheme. The strength of cipher depends up on the key length.`  [TutorialsPoint](https://www.tutorialspoint.com/cryptography/traditional_ciphers.htm)



#### Symmetric Key Encryption Methods


###### Block Cipher Schemes

Bellow, some examples of symmetric key encryption methods:

1. **Digital Encryption Standard (DES)**: from the 1990s, it is now considered 'broken' as a block cipher, due primarily to its small size key.
2. **Triple-DES (3DES)**: it is a variation from the DES scheme, which is still in use, but that has considerable disadvantages of performance compared to others block ciphers available.
3. **IDEA**: it a sufficiently strong block cipher with blocks of 64 bits size and a key of 128 bits. But this scheme has restricted use due to patent issues.
4. **BLOWFISH**: it has a block of 64 bits.
5. **TWOFISH**: it is a scheme based on the Blowfish block sceme, but using blocks of 128 bits and a key of variable length.   
    5.1. It is a AES finalist.
6. **SERPENT**: it is a block cipher with a block of 128 bits size and a key whose length may vary from 128, 192, 256 bits.
    6.1. It is also a AES finalist.


###### DES Analysis

According to the site [TutorialsPoint](https://www.tutorialspoint.com/cryptography/cryptosystems.htm), the DES scheme satisfies both the desired properties of block cipher, which in turn makes the cipher very strong:

1. **Avalnache effect**: a small change in plaintext results in a extensive change in the ciphertext.
2. **Completeness**: each bit of ciphertext depends on many bits of plaintext.


`During the last few years, cryptanalysis have found some weaknesses in DES when key selected are weak keys. These keys shall be avoided. DES has proved to be a very well designed block cipher. There have been no significant cryptanalytic attacks on DES other than exhaustive key search.` [TutorialsPoint](https://www.tutorialspoint.com/cryptography/cryptosystems.htm)



#### Asymmetric Key Encryption Methods

**Coming Soon...***







#### Kerckhoff's Principles for Cryptosystem

In the turial about Cryptography from [TutorialsPoint](https://www.tutorialspoint.com/cryptography/cryptosystems.htm), the site brings a example from an important development to the theory and study of cryptography by a 19th century Dutch cryptographer by the name A. Kerckhoff.


And in his assessment for a secure cryptography system, he says that as long as the 'secret key' was kept safe, the system should be completely secure, even when everything else from it was public known.


There are 6 principles by Kerckhoff:

1. The cryptosystem should be unbreakale practically, if not mathematically.
2. Falling of the cryptosystem in the hands of an intruder should not lead to any compromise of the system.
3. The key should be easily communicable, memorable, and changeble.
4. The ciphertext should be transmissible by telegraph, that is, any such unsecure channel.
5. The encryption apparatus and documents should be portable and operable by a single person.
7. Finally, it is necessary that the system be easy to use, requiring neither mental strain nor the knowledge of a long series of rules to observe.´


`The second rule is currently known as Kerckhoff principle. It is applied in virtually all the contemporary encryption algorithms such as DES, AES, etc. These public algorithms are considered to be thoroughly secure. The security of the encrypted message depends solely on the security of the secret encryption key. Keeping the algorithms secret may act as a significant barrier to cryptanalysis. However, keeping the algorithms secret is possible only when they are used in a strictly limited circle.` [TutorialsPoint](https://www.tutorialspoint.com/cryptography/cryptosystems.htm)




### Assumptions About the Security Environment

#### Details of the Encrypted Scheme

There can be 2 kinds of systems considering the algorithms:

1. Public algorithms
2. Proprietary algorithms


Though, as it was stated by Kerckhoff in his studies, a cryptosystem should be prefered to be public, since it strengh should rely on the key. And also, communications among closed groups only are not suitable for modern digital communications over the Net.

`Thus, the first assumption about security environment is that the encryption algorithm is known to the attacker.` [TutorialsPoint](https://www.tutorialspoint.com/cryptography/cryptosystems.htm)


#### Availability of Plaintext and Ciphertext

Here, it is known that the plaintext is encrypted into the ciphertext, and that the last one can be transmited on unsecure channels. So, the site [TutorialsPoint](https://www.tutorialspoint.com/cryptography/cryptosystems.htm) observes 3 possible occurences:

1. The attacker influences the sender to convert plaintext of his choise and obtains the ciphertext.
2. The raceiver may divulge the plaintext to the attacker inadvertenly. The attacker has access to corresponding ciphertext gathered from open channel.
3. In a public-key cryptosystem, the encryption key is in open domain and is known to any potential attacker. Using this key, he can generate pairs of corresponding plaintexts and ciphertexts.


### Cryptographic Attacks

#### Modes of Attacks

Atacks can be of two forms depending on the action performed by the perpetrator:

1. **Passive Attacks**: the aims of this action is to gain unauthorized access to information, so they don't aim to taint the information or to disrupt the communication channel.   
    1.1. For example, eavesdropping.
2. **Active Attacks**: this action aims to apply some distupt process to the system.   
    2.1. Change the information.   
    2.2. Public disclosure the information.    
    2.3. Delete the information.   
    2.4. Denial of access to information for the legitimate users (denial of service).


### Diffent Kinds of Cryptographic Attacks

1. **Ciphertext Only Attacks (COA)**: here the attacker has access to a set of ciphertext(s), and with them tries to determ the corresponding plaintext, because eventually the key can be determined from this attack.
2. **Known Plaintext Attack (CPA)**: in this attack the perpetrator already know some parts of the plaintext based on the chipertext, so his task is to decrypt the rest of the ciphertext.   
    2.1. This may be done by determining the key or via some other method. The best example of this attack is linear cryptanalysis against block ciphers.
3. **Chosen Plaintext Attack (CPA)**: In this method, the attacker has the text of his choice encrypted. So he has the ciphertext-plaintext pair of his choice. This simplifies his task of determining the encryption key. An example of this attack is differential cryptanalysis applied against block ciphers as well as hash functions. A popular public key cryptosystem, RSA is also vulnerable to chosen-plaintext attacks.
4. **Dictionary Attack**: this kind of attack can have many variants, but they all imply the use of a kind of dictionary that correlates plaintexts and its correlated ciphertexts.
5. **Brute Force Attack (BFA)**: in this attack the perpetrator tries to fill all the possible outcomes to determine the secret key.   
    5.1. For example, a 8 bits long key would give a number of `2 ** 8 = 256`possibilities.   
    5.2. Since the attacker knows ciphertext and the algorithm, he would try each of the 256 possibilities to break the encryption.
6. **Birthday Attack**: this attack is similar to the brute force attack, except it is used against the cryptographic hash function.    
    6.1. Because the hash function also produces values in a range of possibilities, the attack test them all to break the cryptosystem.   
    6.2. By repeatedly evaluating the function for different inputs, the same output is expected to be obtained after a certain number of random input, and when the attacker is able to find two different inputs that give the same hash value, it is a collision and that hash function is said to be broken`. [TutorialsPoint](https://www.tutorialspoint.com/cryptography/cryptosystems.htm) 
7. **Man in Middle Attack (MIM)**: in this attack the perpetrator places himself in the middle of the public key exchange between the communication parties. So, instead of a direct process where the parties decrypt and encrypt the communications, it is the attacker who perform these services for the unsuspecting parties.
8. **Side Channel Attack (SCA)**: these attacks aim for the physical environment of the cryptopsystem to gain knowledge of its weakness.
9. **Timing Attacks**: it uses analysis over the timming of the computational processes to detern its possible structures.   
    9.1. For example, a longer encryption would indicate that the secret key is longer.
10. **Power Analysis Attack**: these are similar to the timming attacks, except the analysis is directed to the power consumption of the system to try to obtain information about the computational processes.
11. **Fault Analysis Attacks**: in these attacks errors are introduced in the cryptosystem so the attacker can study them to get useful information about the system.


### Modern Symmetric Key Encryption

https://www.tutorialspoint.com/cryptography/modern_symmetric_key_encryption.htm

































[Cryptography Tutorial - TutorialsPoint](https://www.tutorialspoint.com/cryptography/origin_of_cryptography.htm)

Conceitos de criptografia, esteganografia e criptoanálise. Sistemas criptográficos simétricos e de chave pública. Modos de operação de cifradores. Funções digestoras (hashes).

ISO 27001 – Annex A.17: Information Security Aspects of Business Continuity Management - Isms.online - https://www.isms.online/iso-27001/annex-a-17-information-security-aspects-of-business-continuity-management/

Organização da ICP-Brasil. Norma de segurança ISO/IEC 27001.

### Further Reading

[Unit: Cryptography - Khanacademy.org](https://www.khanacademy.org/computing/computer-science/cryptography)

[ISO 22301 - Wikipedia](https://en.wikipedia.org/wiki/ISO_22301)

[]()


### References

[Cryptography Introduction - GeekforGeeks.org](https://www.geeksforgeeks.org/cryptography-introduction/)

[Cryptography Tutorial - TutorialsPoint](https://www.tutorialspoint.com/cryptography/origin_of_cryptography.htm)


[]()


[^1]:pmbok-and-project-management-methodologies-2022-03-29

[^2]:itil-service-management-framework-2022-03-30

[^3]:risk-management-overview-2022-04-03

[^4]:information-security-overview-2022-04-05


