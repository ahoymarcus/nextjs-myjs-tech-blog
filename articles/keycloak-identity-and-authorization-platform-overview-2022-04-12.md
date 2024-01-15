---
author: 'Marcus Vinicius Richa'
title: 'Keycloak Identity and Authentication Platform - Overview'
date: '2022-04-12'
subject: 'management-articles'
description: 'Keycloak is an open-cource application that provides identity and authorization management, which allow users to to authenticate with Keycloak instead of authenticating with each individual application separately. For that reason the client applications managed by Keycloak does not have to deal with login forms, authenticating users and storing users. And the same with signing-out.'
---

# Keycloak Identity and Authentication Platform - Overview

1. ##### Introduction  
2. ##### Keycloak Platform
    2.1. Keycloak Features   
    2.2. Keycloak Concepts   
    2.3. Keycloak Password Polices   
    2.4. Keycloak Client Certificate
3. ##### Keycloak Working Procedure
4. ##### Further Reading
5. ##### References

### Introduction

As it was seem in the previous article about User Authorization and User Authentication, these are some of the biggest priorities related to software applications, and they are directly related to the role of the applications and to how they are designed to interact with its users.

And there are several protocols created that aim to standardaze this important feature in software security, including:

- **Kerberos**
- **Lightweight Directory Access Protocol (LDAP)**
- **OAuth2**
- **OpenID Connect (OIDC)**
- **RADIUS**
- **SAML**
- **SSO**


So, in this second article about these concerns we will talk specifically about the Keycloak Application.


###### Other articles from the Governance and Management series:
- `IT Governance and Mangement - Overview` [^1]
- `PMBOK and others Project Management Methodologies` [^2]
- `Risk Management - Overview` [^3]
- `ITIL - Service Management Framework` [^4]
- `Cryptography, Steganography and Criptanalysis - Overview` [^5]
- `Authorization and Authentication Protocols - Overview` [^6]
 

### Keycloak Platform

Keycloak is an open-source application that provides identity and authorization management, which allow users to to authenticate with Keycloak instead of authenticating with each individual application separately. 


For that reason the client applications managed by Keycloak doesn't have to deal with login forms, authenticating users and storing users. And all about the same with signing-out as well. Lastly, it's interesting to notice that Keycloak also have implementations to LDAP and Active Directory.


Another interesting point is the fact that Keycloak application comes with some pre-defined configurations and features that can enhance the application usability:

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

There are 3 basic concepts that Keycloak rely on to manage security:

1. **Users**: this are entities that are able to log into the application. They are stakeholders for the system and make up to a fine-grained security configurations.
2. **Roles**: this are categories that users can be part of, and they can help to manage constraints and requirements for login procedures. And it is a best practice to define access and permission on roles rather than on users.
3. **Groups**: these are logical aggregation of users. The groups will often mimic the organization internal structure. So, groups can be associated with roles, while the users pertaining to each group inherit those roles attributes.


`Groups are a Keycloak concept, which does not surface in the Application.` [KeyCloak - IBM](https://www.ibm.com/docs/en/doc/4.0.2?topic=rights-keycloak)


There are 3 predefined roles:

1. **SYSTEM**
2. **PERMISSIONS_ADMIN**
3. **GENE_USER**


And also, to cope with the predefined roles, there are 3 predefined groups in which the basic users can be arranged:

1. **GENE_SERVICES**: this is like a container group to represent technical users necessary to the platform to function, like backend service, data service, or execution service, etc.
2. **GENE_USERS**: this is the group for end users of the system.
3. **GENE_ADMINS**: this last group is typically meant to contain the sub part of the GENE_USERS that need also to make use of the PERMISSIONS_ADMIN role.


#### Keycloak Password Polices

The simple settings for the Keycloak are enough for learning and developing, but unacceptable in production environments where it is mandatory to adhere to a more tight security.

So, there are many instances where it is necessary to define users procedures that are essential in production. For example, password polices, like determining how long or how complex passwords should to be.


###### There are 2 Types of Password Generators

1. **TOTP (Time based OTP)**
2. **HOTP (Counter based OTP)**




#### Keycloak Client Certificate

The Client Authentication Certificate is a enhancement which users use to access a server, and that the most popular web browsers support. So, when certificates are enabled, only users who attempt to connect from browsers with the right client certificates will succeed.


Then, in the case above:

`Even if a legitimate user attempts to connect with the right username and password, if that user isn't on a client application loaded with the right client certificate, that user will not be granted access. In fact, if that user's connecting from a Web browser, the login page [...] might not even load[...]`. [CoMakeIT.com](https://www.comakeit.com/blog/quick-guide-using-keycloak-identity-access-management/)



###### Read more about Digital Certificates in this article:
- `Cryptography, Steganography and Criptanalysis - Overview` [^2]




### Keycloak Working Procedure

On a complete system secured with Keycloak, it is possible to experience a smooth flow of navigation between the components of the Keycloak application and the client applications while handling the users requests.


So, for example, the users tries to navigate to a link of a protected area within the application environment (the link is in the settings of Keycloak admin console):

First, the user will be redirected to the Keycloak authentication page. After providing username and password, Keycloak redirects the user back to the application again with a code that is a valid to a very short span of time.

Then, the application communicates this code to Keycloak along with the application's ID and the application's secret, which Keycloak replies with the Access token, ID token, and a Refresh token to the application that will need:


`[...] only one of these tokens to see which claims the user has, and according to the claims, the user will be granted or denied access to the requested protected URL(s).` [CoMakeIT.com](https://www.comakeit.com/blog/quick-guide-using-keycloak-identity-access-management/)





### Further Reading

[Keycloak Guides - Keycloak.org](https://www.keycloak.org/guides)


### References

[KeyCloak - IBM](https://www.ibm.com/docs/en/doc/4.0.2?topic=rights-keycloak)

[A Quick Guide to Using Keycloak for Identity and Access Management - CoMakeIT.com](https://www.comakeit.com/blog/quick-guide-using-keycloak-identity-access-management/)



[^1]:it-governance-and-management-overview-2022-03-27

[^2]:pmbok-and-project-management-methodologies-2022-03-29

[^3]:risk-management-overview-2022-04-03

[^4]:itil-service-management-framework-2022-03-30

[^5]:cryptography-steganography-and-cryptanalysis-overview-2022-04-07

[^6]:authorization-and-authentication-protocols-overview-2022-04-11


