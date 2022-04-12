---
author: 'Marcus Vinicius Richa'
title: 'Authentication Protocols - Overview'
date: '2022-04-11'
subject: 'security-articles'
description: '.'
---

# Authentication Protocols - Overview

1. ##### Introduction  
2. ##### Kerberos
3. ##### Lightweidh Directory Access Protocol (LDAP)
4. ##### OAuth2
5. ##### OpenID Connect (OIDC)
6. ##### RADIUS
7. ##### SAML
8. ##### SSO
9. ##### Further Reading
10. ##### References

### Introduction
 
User Authentication is one of the biggest priorities related to software application, and it is directly related to the role of the applications and to how they are designed to interact with its users.


And there are several protocols created that aim to standardaze this important feature in software security, including:

- **Kerberos**
- **Lightweight Directory Access Protocol (LDAP)**
- **OAuth2**
- **OpenID Connect (OIDC)**
- **RADIUS**
- **SAML**
- **SSO**


###### Other articles from the Governance and Management series:
- `IT Governance and Mangement - Overview` [^1]
- `PMBOK and others Project Management Methodologies` [^2]
- `Risk Management - Overview` [^3]
- `ITIL - Service Management Framework` [^4]
- `Cryptography, Steganography and Criptanalysis - Overview` [^5]



### Kerberos

Kerberos is a protocol that aids in network authentication, which is used for validating clients/server using cryptographic key.


It is designed for executing storng authentication in mass-produced products, and it is a open protocol available by MIT.


- **Some Advantages of Kerberos**
- It supports various operating systems.
- The authentication key is shared much efficiently than public sharing.

- **Some Disadvantages of Kerberos**
- It is used only to authenticate clients and services used by them.
- It shows vulnerability to soft or weak passwords.


### Lightweidh Directory Access Protocol (LDAP)

The Lightweight Directory Access Protocol (LDAP) is a protocol that is used for determining any individuals, organizations, and other devices accessing a network, regardless coming from a public of or corporate net. 

It is also treated as Director-as-a-Service, and it is the ground for Microsof building its Activity Directory.


- **Some Advantages **
- It is an automated protocol which makes it upgrade easier.
- It supports the existing technologies and allow multiple directories.

- **Some Disadvantages **
- It requires the experience of deployment.
- The directory servers are required to be LDAP obedient for deployment.


### OAuth2

OAuth is an HTTP protocol for accessing services account. 



- **Some Advantages **
- It is a simple protocol and is easy to implement.
- It provides server-side authorization of code.

- **Some Disadvantages **
- It is vulnerable to manage different sets of code.
- It shows serious effects on sites which are connected to other affected system.


### OpenID Connect (OIDC)





- **Some Advantages **


- **Some Disadvantages **



### RADIUS

RADIUS stands for Remote Authentication Dial-In User Service, and it is a network protocol with centralized authentication, accounting, and authorization.

`The functioning of the protocol occurs when the user requests access to network resources, where the RADIUS server encrypts the credentials which are entered by the user. After this, the user credentials are mapped through the local database and provide access.` [GeeksforGeeks](https://www.geeksforgeeks.org/types-of-authentication-protocols/)


- **Some Advantages **
- It's a great mechanism for providing multiple access for admins.
- It provides a unique identity to each user in a session.

- **Some Disadvantages **
- Initial implementation for this mechanism is hard on hardware.
- It has a variety of models that may require a special team which is cont consuming.


### SAML

SAML stands for Security Assertion Markup Language which is based on XML. It has a data scheme for authentication between a provider and a consumer. And it is a product of  Organization for the Advancement of Structured Information Standards (OASIS). 


- **Some Advantages **
- It reduced the administrative costs for the end-users.
- It provides a single sing-in for authenticating across service providers.

- **Some Disadvantages **
- It is dependent on the identity provider.
- All the data is managed in a single XML format.


### SSO




- **Some Advantages **


- **Some Disadvantages **













[O que é SAML (Security Assertion Markup Language, Linguagem de marcação de asserção de segurança)? - Oracle.com](https://www.oracle.com/br/security/cloud-security/what-is-saml/)

How Does Single Sign-On Work? - Onelogin.com - https://www.onelogin.com/learn/how-single-sign-on-works

Autenticação do OpenID Connect (OIDC) - IBM - https://www.ibm.com/docs/pt-br/sva/9.0.5?topic=methods-openid-connect-oidc-authentication

Protocolos de autenticação OpenID Connect (OIDC), SSO, OAuth2 e SAML. 

### Further Reading

[OAuth 2.0 - OAuth.net](https://oauth.net/2/)

[]()


### References

[Types of Authentication Protocols - GeeksforGeeks](https://www.geeksforgeeks.org/types-of-authentication-protocols/)


[]()


[^1]:it-governance-and-management-overview-2022-03-27

[^2]:pmbok-and-project-management-methodologies-2022-03-29

[^3]:risk-management-overview-2022-04-03

[^4]:itil-service-management-framework-2022-03-30

[^5]:cryptography-steganography-and-cryptanalysis-overview-2022-04-07


