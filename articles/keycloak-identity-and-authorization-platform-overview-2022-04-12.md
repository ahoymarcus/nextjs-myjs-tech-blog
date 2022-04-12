---
author: 'Marcus Vinicius Richa'
title: 'Keycloak Identity and Authentication Platform - Overview'
date: '2022-03-25'
subject: 'security-articles'
description: 'Keycloak is an open-cource application that provides identity and authorization management, which allow users to to authenticate with Keycloak instead of authenticating with each individual application separately. For that reason the client applications managed by Keycloak doesn't have to deal with login forms, authenticating users and storing users. And the same with signing-out.'
---

# Keycloak Identity and Authentication Platform - Overview

1. ##### Introduction  
2. ##### Keycloak Platform
    2.1. Keycloak Features   
    2.2. Keycloak Concepts
3. #####  
	3.1.	
	3.2.
4. ##### 
5. ##### 
6. ##### 
7. #####  
8. ##### 
9. ##### Further Reading
10. ##### References

### Introduction

User Authorization and User Authentication are some of the biggest priorities related to software applications, and it is directly related to the role of the applications and to how they are designed to interact with its users.

And there are several protocols created that aim to standardaze this important feature in software security, including:

- **Kerberos**
- **Lightweight Directory Access Protocol (LDAP)**
- **OAuth2**
- **OpenID Connect (OIDC)**
- **RADIUS**
- **SAML**
- **SSO**


 
###### Article on Authorization and Authentication Protocols:
- `Cryptography, Steganography and Criptanalysis - Overview` [^1] 


### Keycloak Platform
 
Keycloak is an open-cource application that provides identity and authorization management, which allow users to to authenticate with Keycloak instead of authenticating with each individual application separately. 


For that reason the client applications managed by Keycloak doesn't have to deal with login forms, authenticating users and storing users. And the same with signing-out. Finally, Keycloak have inplementations to LDAP and Active Directory as well.


Another interesting point is the Keycloak application comes with some pre-defined configurations and features to enhance the usability:

- **A Docker container that run Keycloak application**
- **The Platform theme for the login pages**
- **A default configuration for the security management**
- **Basic configuration for some default users**


#### Keycloak Features

Keycloak offers centralized security and user management interface:

1. **Easy integration of an existing directory system with LDAP protocol**
2. **Single Sign On feature**
3. **Social Authentication**: letting users access to the applications through social networks accounts like Google, Github, etc.
4. **Brokering**: delegating security to an existing identity-management system standard protocol such as OIDC or SAML2.


#### Keycloak Concepts
















[A Quick Guide to Using Keycloak for Identity and Access Management - CoMakeIT.com](https://www.comakeit.com/blog/quick-guide-using-keycloak-identity-access-management/)

KeyCloak - Keycloak.org - https://www.ibm.com/docs/en/doc/4.0.2?topic=rights-keycloak

Gerenciamento de contêiners Docker, Kubernetes e Openshift

### Further Reading

[Keycloak Guides - Keycloak.org](https://www.keycloak.org/guides)

[]()

### References



[]()


[^1]:authorization-and-authentication-protocols-overview-2022-04-11


