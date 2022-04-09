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
3. ##### Historical Cipher Systems
    3.1. Ceasar Cipher    
    3.2. Simple Substitution Cipher   
    3.3. Playfair Cipher   
    3.4. Venegere Cipher    
    3.5. Transition Cipher
4. ##### Kerckhoff's Principles for a Cryptosystem
5. ##### Modern Cipher Systems
    5.1. Block Cipher Modes of Operation   
    5.2. Symmetric Key Encryption Methods   
    5.3. Asymmetric Key Encryption Methods
6. ##### Assumptions About the Crytosystem Security Environment
    6.1. Details of the Encrypted Scheme    
    6.2. Availability of Plaintext and Ciphertext   
    6.3. Cryptography Hash Functions
7. ##### Cryptographic Attacks
    7.1. Modes of Attacks    
    7.2. Diffent Kinds of Cryptographic Attacks
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



### Historical Cipher Systems

A cryptosystem, also called a 'cipher system', is a implementation for a system which uses cryptographic techniques to secure it features.


#### Ceasar Cipher

Also known as Shift Cipher, it is one historic example of a cryptosystem where to produce the cipher, the message was rearenged by shifitng the alphabetic occurrences a fixed number.

So, with the word 'tutorial' to be ciphered by this process and using the number 3 as key, which makes it for the classic Ceasar Cipher:


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



### Kerckhoff's Principles for Cryptosystem

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



### Modern Cipher System

In modern ciphersystems data is represented digitally by strings of binary digits (bits), instead of the direct manipulation over the message. And the ciphersystem can be divided into 2 groups depending on the type of process used to process the strings by the information system:

1. **Block Ciphers**: in this scheme the plain binary text is processed in blocks of bits, in a series of operations until there is no more binary text to be divided into blocks.    
    1.1. The number of bits in the blocks are fixed.   
    1.2. DES method, for example, uses blocks of 64 bits, while AES method uses blocks of 128 bits.
2. **Stream Ciphers**: this process uses works direct with the bits that are disposed in a stream of information.    
    2.1. As the site [TutorialsPoint](https://www.tutorialspoint.com/cryptography/traditional_ciphers.htm) states a bit stream could be thought as  one bit block size.


`A block cipher takes a block of plaintext bits and generates a block of ciphertext bits, generally of same size. The size of block is fixed in the given scheme. The choice of block size does not directly affect to the strength of encryption scheme. The strength of cipher depends up on the key length.`  [TutorialsPoint](https://www.tutorialspoint.com/cryptography/traditional_ciphers.htm)



#### Block Cipher Modes of Operation

This is a very technical subject about the operation of a block cipher. And as it is stated at the cryptosystem tutorial from [TutorialsPoint](https://www.tutorialspoint.com/cryptography/block_cipher_modes_of_operation.htm), these are procedural rules for designing generic block cipher, which in term provides different modes of results for the encryption process, including security.


###### More about Block Cipher Modes of Operation
- [Block Cipher Modes of Operation - TutorialsPoint](https://www.tutorialspoint.com/cryptography/block_cipher_modes_of_operation.htm)
[Block Cipher modes of Operation - GeekforGeeks](https://www.geeksforgeeks.org/block-cipher-modes-of-operation/)



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


###### The Feistel Block Cipher

The Feistel Cipher is not a specifif scheme of block cipher, but it is a design model which servers as model for the implementation of many block ciphers, including the traditions DES block scheme.

In the Feistel cipher design the same algorithm works both the encrypting and the decrypting, where the task is based on multiple rounds of processing of the plaintext, where in each round there is two steps:

1. **Substitution step**
2. **Permutation step**


Observe that the number of rounds affects both security and performance, therefore it should be thought in terms of implementation as a `efficiency-security tradeoff.


###### The DES Scheme Block

According to the site [TutorialsPoint](https://www.tutorialspoint.com/cryptography/cryptosystems.htm), the DES scheme satisfies both the desired properties of block cipher, which in turn makes the cipher very strong:

1. **Avalnache effect**: a small change in plaintext results in a extensive change in the ciphertext.
2. **Completeness**: each bit of ciphertext depends on many bits of plaintext.


`During the last few years, cryptanalysis have found some weaknesses in DES when key selected are weak keys. These keys shall be avoided. DES has proved to be a very well designed block cipher. There have been no significant cryptanalytic attacks on DES other than exhaustive key search.` [TutorialsPoint](https://www.tutorialspoint.com/cryptography/cryptosystems.htm)



###### The Triple DES Scheme Block

According to  [TutorialsPoint](https://www.tutorialspoint.com/cryptography/cryptosystems.htm), despite being a important cryptographic scheme, DES started to raise some disconfort among users, specially the `speed of exhaustive key searchs`. 


But for economic and compatibility reasons, the decision was to change some aspect of its use, than to complete abandon the DES scheme. And it was creates two variants:

1. **3-key Triple DES (#TDES)**
2. **2-key Triple DES (2TDES)**


The TDES has a design of a Triple DES keys architecture, which is encrypt-decypt-encrypt process, and eventhough it is a more secure system than the simple DES, it is also much a much slower process.


Another interesting note is that because of the Triple DES scheme, the TDES can provide backward compatibility with DES by simply repeating all the triple key scheme architecture with the same value.


Finally, the 2-key TDES is a variation that instead of adding formally a third key, it simply repeates the same first key at the end of the process.


###### The Advanced Encryption Standard (AES)

The most popular symmetric implementaion og scheme today is the adavanced encryption standard (AES), which is at least 6 times faster then DES.

Because of the small size key and with the increasing raise of the computational power, DES began to be considered vulnerable. At first, the Tripe DES was made to overcome this problem, and eventhough it brought more security to the DES scheme, it was also much slower.


The features of AES are as follows:

1. **Symmetric key symmetric block cipher**
2. **128-bit data, 128/192/256-bit keys**
3. **Strong and faster than Tripe-DES**
4. **Provide full specification and design details**


According to the tutorial in the [TutorialsPoint](https://www.tutorialspoint.com/cryptography/cryptosystems.htm), the AES scheme doesn't use the Feistel cipher architecture.

Instead, it is a iterative algorithm, based on 'substitution-permutation network', which is comprised of a series of linked operations, `some of which involve replacing inputs by specifc outputs (substitutions) and other involve shuffling bits around (permutations)`.


Though it is singned as a 128 bits process, its computations uses bytes instead, and the 128 bits block is treated as 16 bytes, which are arranged in 4 columns and 4 rows for processing the data as a matrix.


Another difference is in the number of rounds for AES that depends on the size of the key:

1. **128 bit keys**: 10 rounds
2. **192 bit keys**: 12 rounds
3. **256 bit keys**: 14 rounds


Another resulting characteristic of the AES algorithm is the necessity to have different algorithms for encryption and decryption, different from what happens with the Feistel Cipher.


Finally, till this date there was no practical cryptography attack against AES that has been discovered.



#### Asymmetric Key Encryption Methods

Also known as the Public Key Cryptography, this is a relatively new concept, thus there isn't any known historical use of a public-key cryptography. And to it work, the two parties willing to engage in communication have to generate the pairs of keys.


And as the site [TutorialsPoint](https://www.tutorialspoint.com/cryptography/public_key_encryption.htm) says, the method of symmetric cryptography is very well suited for using inside organizations, like financial institutions, or agencies, like the military, but it is not suited fot the use in a open environment like the Internet.


It's not a practical solution for management of the secret key, and as its more important features there are:

1. **Different Keys are used for Encryption and Decreption**
2. **Each receiver has its own unique decryption key, generally refered as Private Key**
3. **The parties involved in the communication have to publish their encription key, refered as Public Key**
4. **For preventing spoofing by adversaries trying to pass as the receiver, there has to be some assurance of the authenticity of the Public Key**.   
    4.1. Generally, this type of cryptosystem involves trusted third party which certifies that a particular public key belongs to a specific person or entity only.
5. **The encryption algorithm is complex enough to prohibit attacker from deducing the plaintext from the ciphertext and the encryption (public) key**
6. **Though Private and Public Keys are related mathematically, it is not feasible to calculate the private key from the public key.**   
    6.1. In fact, a important part of the asymmetric ecossystem is the design of the relationship between the two keys.



###### The RSA Cryptosystem

The RSA cryptosystem is one of the earliest implementations and remains as the most employed cryptosystem today. It's name comes from the first letter of its developers: **R**ivest, **S**hamir, and **A**dleman.


According to the site [TutorialsPoint](https://www.tutorialspoint.com/cryptography/public_key_encryption.htm),One interesting characteristic from the RSA algorithm is that it does not work with strings, like the symmetric cryptosystem does, but it operates on numbers, and the plaintext has to be represented as a series of numbers less than n.
    

- **RSA Features**:
1. **Security**: Its security depends on the strenghs of the two separate functions.
2. **Its Strengh**: the RSA cryptosystem is dependent on the practical difficulty of factoring very large numbers.   
    2.1. If the numbers 'p' and 'q' are not large primes, and/or chosen key 'e' is a small number, its strengh reduces drastically.
    2.1. It is the most popular public-key cryptosystem of this kind.
3. **Encryption function**: it is a one-way function for converting plaintext into ciphertext and can only be reversed with the knowledge of the private key.
4. **The Key Generation**: the difficulty of determining a private key from an RSA public key is equivalent to factoring the modulus n. An attacker thus cannot use knowledge of an RSA public key to determine an RSA private key, unless he can factor n.    
    4.1. It is also a one way function.  
    4.2. Going from p & q values to modulus n is easy, but the reverse is impossible.
5. **One way function**: if either of the two functions are proved to be non one-way, the RSA will be broken.   
    5.1. In fact, if a technique for factoring efficiently is developed then RSA will no longer be safe.


###### The ElGamal Cryptosystem

There are others public-key cryptosystems like the RSA, and many of the are different versions of the Discrete Logarithm Problem.
    
So, the ElGamal cryptosystem, called Elliptic Curve Variant, is also based on the Discrete Logarithm Problem, and it is based on the assumption  that the discrete logarithms cannot be found in practical time frame for a given number, while the inverse operation of the power can be computed efficently,


- **ElGamal Features**
1. **Its Strenth**: it is based on the difficulty of discrete logarithm problem.
2. **The Key**: the secure size is generally greater than 1024, but today even 2048 bits long key are used.
3. **Uses**: the ElGamal is quite slow on the speed front, being used mainly for key authentication protocols.   
    3.1. But due higher processing efficiency, the Elliptic Curve variants of ElGamal are becoming increasinly popular.


###### The Elliptic Curve Cryptography (ECC)

The elliptic curve cryptography (ECC) is a term used to describe cryptographic tools and protocols whose security is based on special cases of the discrete logarithm problem.


`ECC includes a variants of many cryptographic schemes that were initially designed for modular numbers such as ElGamal encryption and Digital Signature Algorithm.` [TutorialsPoint](https://www.tutorialspoint.com/cryptography/public_key_encryption.htm)



###### Comparison of RSA and ElGamal Schemes

| RSA | ELGAMAL |    
| ------ | -------------- |    
| More efficient for encryption | More efficient for decryption |    
| It needs lengthy keys for enhanced security | At the same level of security from RSA, it needs shorter keys |    
| It's widely accepted and used | It's new and not very popular in the market |   



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



#### Cryptography Hash Functions

Hash functions, also known as compression functions, are a very common practice among information security applications, which are mathmatical functions that converts a numerical input value into another compressed numerical value.


In a hash function the inputs are of an arbitrary length, but the output is always of fixed length. Also, these values returned by the hash function are called a **message digest** or simply **hash values**.


###### Features of Hash Functions
1. **Fixed Length Output (Hash Value)**:   
    1.1. This process of converts data of arbitrary length into fixed length is called hashing the data.   
    1.2. In general, the hash is much smaller that the input data, hence hash fucntions are sometimes called **compression functions**.   
    1.3. And since a hash is a smaller representation of  larger data, it is also refered as digest.   
    1.4. Hash function with n bit output is referred to as an n-bit hash function. Popular hash functions generate values between 160 and 512 bits.
2. **Efficiency of Operation**:   
    2.1. Generally for any hash function h with input x, computation of h(x) is a fast operation.   
    2.2. Computationally hash functions are much faster than a symmetric encryption.


###### Properties of Hash Functions

In order to be an effective cryptographic tool, the hash function should have these properties:

1. **Pre-Image Resistance**:  
    1.2. This property means that is should be computationally hard to reverse a hash function.   
    1.2. In other words, if a hash function 'h' produced a hash value 'z', then it should be a difficult process to find any input value 'x' that hashes to 'z'.   
    1.3. This property protects against an attacker who only has a hash value and is trying to find the input.
2. **Second Pre-Image Resistance**:  
    2.1. This property means that a given input and its hash value, it should be hard to find a different input with the same hash.    
    2.2. In other words, if a hash function 'h' for an input 'x' produces hash value h(x), then it should be difficult to find any other input value 'y' such that `h(y) = h(x)`.   
    2.3. This property of hash function protects against an attacker who has an input value and its hash, and wants to substitute different value as legitimate value in place of the original input value.
3. **Collision Resistance**:   
    3.1. This property means it should be hard to find two different inputs of any length that result in the same hash. This property is also referred to as collision free hash function.   
    3.2. In other words, for a hash function 'h', it is hard to find any two different inputs 'x' and 'y' such that `h(x) = h(y)`.   
    3.3. Since, hash function is compressing function with fixed hash length, it is impossible for a hash function not to have collisions. This property of collision free only confirms that these collisions should be hard to find.   
    3.4. This property makes it very dificult for an attacker to find two input vlaues with the same hash.   
    3.5. Also, if a hash function is collision-resistant them it is second pre-image resistant.


###### Understanding the Design of Hashing Algorithms

By general design, the hashing algorithm operates on `two fixed-size blocks of data` in a sequential way until the data is extinguished and the hash code then is returned. See also that in these sequential process the 'hash furnction' result of one step will be the the input for the next step.


The site also says that the typical size for the data block should be from 126 bits to 512 bits, and that through the entire process, the data being digested will change significantly:

`Since, the hash value of first message block becomes an input to the second hash operation, output of which alters the result of the third operation, and so on. This effect, known as an avalanche effect of hashing.` [TutorialsPoint](https://www.tutorialspoint.com/cryptography/cryptography_hash_functions.htm)


###### Popular Hash Functions

1. **Message Digest (MD)**: this was a very popular and widely used hash function for quite a lot of years.   
    1.1. It's a 128 bits hash function, which was adoted as a Internet Standard RFC1321.    
    1.2.  The MD family comprises of hash functions: MD2, MD4, MD5, and MD6.   
    1.3. MD5, for example, has been widely used in software to provide assurance about integrity of transferred file. Thus, the servers can provide a pre-computed MD5 checksum for the files, so that the user can compare the checksum of the downloaded file to it.    
    1.4. In 2004, using a computer cluster an analytical attack was reported to be successful in only an hour. Then, this hash function is no longer recommended for use.
2. **Secure Hash Function (SHA)**: the family of SHA comprise of 4 algorithms: SHA-0, SHA-1, SHA-2, and SHA-3.   
    2.1. Ther original version is SHA-0, a 160 bits hash function, published by the National Institute of Standards and Technology (NIST) in 1993. It had some weakness and didn' become popular.    
    2.2. The SHA-1 is the most widely used of the SHA family. It is employed in several widely used applications and protocols including Secure Socket Layer (SSL).    
    2.3. In 2005, a method was found for uncovering collisions for SHA-1 within a practical timeframe, making it also another doubtful hash function.   
    2.4. The SHA-2 has 4 specimen (SHA-224, SHA-256, SHA-384, and SHA-512), which vary according the number of bits in their hash value. And there has necer been reported an successful attack on a SHA-2 function.   
    2.5. In 2012 the National Institute of Standards and Technology chose the **Keccak algorithm**  to be its new SHA-3 standard.
3. **RIPEMD**: the name is a acronym for RACE Integrity Primitives Evaluation Message Digest. It was developed by the open research community, and it is generally known as a family of European hash functions.     
    3.1. The set includes, beside the RIPEMD, also the RIPEMD-128, and RIPEMD-160. There are also 256 bits and 320 bits version of the algorithm.   
    3.2. The original RIPEMD is based upon MD$, but was found to provide questionable security. Then the RIPEMD-128 came as a quick fix for the vulnerabilities.    
    3.3. The RIPEMD-160 is an improved version and the most widely used version in the family. Finally, the 256 bits and 320 bits versions, though they reduce the chance of accidental collision, they do not provide higher levels of security when compared with the versions RIPEMD-128 and RIPEMD-160.
4. **Whirlpool**: this is a 512 bits hash function.   
    4.1. It is derived from the modified version of the Advanced Encryption Standard (AES). And one of its designers, Vicent Rijmen, was also a co-creator of the AES.   
    4.2. Three versions of the Whirlpool have been released: WHIRLPOOL-0, WHIRLPOOL- T, and WHIRLPOOL.



###### Applications of Hash Functions

There a 2 direct applications for hash functions based on its cryptographic properties:

1. **Password Storage**: here the organization responsible for the password stores it as a hash value.   
    1.1. An intruder can only see the hashes of passwords, and he can neither logon using hash nor can he derive the password from hash value since hash functions possesses the property of per-image resistance.
2. **Data Integrity Check**: the hash function generates checksums on data files, providing assurance about the correctness of the data.   
    2.1. Beware: eventhough the 'integrity check' is capable of providing assessment on changes made to the original file, it is cannot provide assurance about the data originality.   
    2.2. That means an attacker could simply change the entire original file data and compute a new hash to be sent over to the receirve, instead of changing the original data.   
    2.3. Thus, this chechsum validation is only useful to be used when the user is sure about the originality of the data file in store.







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




















Conceitos de criptografia, esteganografia e criptoanálise. Sistemas criptográficos simétricos e de chave pública. Modos de operação de cifradores. Funções digestoras (hashes).

Características dos algoritmos RSA, AES, SSL e SHA-256. 

Infraestruturas de chaves públicas (PKI - Public Key Infrastrutucture).

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


