---
author: 'Marcus Vinicius Richa'
title: 'Authorization and Authentication Protocols - Overview'
date: '2022-04-11'
subject: 'management-articles'
description: 'User Authorization and User Authentication are some of the biggest priorities related to software applications, and it is directly related to the role of the applications and to how they are designed to interact with its users. nd there are several protocols created that aim to standardaze this important feature in software security, including: OAuth2, OpenID, SAML, etc.'
---

# Authorization and Authentication Protocols - Overview

1. ##### Introduction  
2. ##### Different Protocols on the Market Place
    2.1. Kerberos    
    2.2. Lightweidh Directory Access Protocol (LDAP)    
    2.3. OAuth2    
    2.4. OpenID Connect (OIDC)    
    2.5. RADIUS    
    2.6. SAML   
    2.7. SSO
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


###### Other articles from the Governance and Management series:
- `IT Governance and Mangement - Overview` [^1]
- `PMBOK and others Project Management Methodologies` [^2]
- `Risk Management - Overview` [^3]
- `ITIL - Service Management Framework` [^4]
- `Cryptography, Steganography and Criptanalysis - Overview` [^5]



### Different Protocols on the Market Place


#### Kerberos

Kerberos is a protocol that aids in network authentication, which is used for validating clients/server using cryptographic key.


It is designed for executing storng authentication in mass-produced products, and it is a open protocol available by MIT.


- **Some Advantages of Kerberos**
- It supports various operating systems.
- The authentication key is shared much efficiently than public sharing.

- **Some Disadvantages of Kerberos**
- It is used only to authenticate clients and services used by them.
- It shows vulnerability to soft or weak passwords.


#### Lightweidh Directory Access Protocol (LDAP)

The Lightweight Directory Access Protocol (LDAP) is a protocol that is used for determining any individuals, organizations, and other devices accessing a network, regardless coming from a public of or corporate net. 

It is also treated as Director-as-a-Service, and it is the ground for Microsof building its Activity Directory.


`Lightweight Directory Access Protocol (LDAP) is simply an industry standard that defines a way to organize and query directory information. LDAP allows you to centrally manage resources like users and systems. LDAP, however, does not define how you log into those systems, meaning it does not define the actual protocols that are used in authentication. It is, however, often used as part of the authentication process and access control processes. For example, before a user can access a particular resource, LDAP might be used to query for that user and any groups that they belong to in order to see if the user has access to that resource. LDAP solutions like OpenLDAP do provide authentication through their support of authentication protocols like Simple Authentication and Security Layer (SASL)`  [Onelogin.com](https://www.onelogin.com/learn/how-single-sign-on-works)



- **Some Advantages of LDAP**
- It is an automated protocol which makes it upgrade easier.
- It supports the existing technologies and allow multiple directories.

- **Some Disadvantages of LDAP**
- It requires the experience of deployment.
- The directory servers are required to be LDAP obedient for deployment.


#### OAuth2

OAuth is an HTTP protocol for accessing services account, which delegates user authentication to the host of the service provider, while controlling authorization.


`OAuth 2.0 is explicitly designed to support a variety of different client types that access REST APIs. This includes applications running on enterprise web servers conversing with the cloud as well as applications running on employee or customer mobile devices. The OAuth framework supports a variety of client types by defining multiple mechanisms for getting a token where the different mechanisms acknowledge the client type constraints.` [PingIdentity.com](https://www.pingidentity.com/en/resources/content-library/articles/openid-connect.html)



- **Some Advantages of OAth2**
- It is a simple protocol and is easy to implement.
- It provides server-side authorization of code.

- **Some Disadvantages of OAuth2**
- It is vulnerable to manage different sets of code.
- It shows serious effects on sites which are connected to other affected system.


#### OpenID Connect (OIDC)

The OpneID Connect 1.0 is a simple identity layer, launched in 2006, that works on top of the OAuth2 protocol which allows clients to verify the indentity of the End-user based on the authentication performed by an Authorization Server, as well as to obtain basic profile information about the End-User in an interoperable and REST-like manner.

In 2007 OpenID2 was released, while OpenID Connect came upon in 2014:

`OpenID Connect allows clients of all types, including Web-based, mobile, and JavaScript clients, to request and receive information about authenticated sessions and end-users. The specification suite is extensible, allowing participants to use optional features such as encryption of identity data, discovery of OpenID Providers, and session management, when it makes sense for them.` [OpenID.net](https://openid.net/connect/)


Eventhough the OpenID Connect and OpenID2 performs many of the same tasks alike, but OpenID Connect also allow:

1. API-friendly mechanism.
2. Usable by native or mobile applications.
3. Defines optional mechanisms for robust signing and encryption.
4. Already have OAuth2 integrated in the protocol itsel.


Well, in terms of the relationship between OpenID and OAuth2, by introducing an authorization layer, OAuth2 separates the role of the client from the resource owner.


Also, the OpenID Connect allows its clients to access additional information about the end-user, like real name, email, address, birthdate, etc.

###### How Does the OpenID Connect Work

he application starts with an OAuth flow that asks the user to authorize a request. As part of that flow, the client will include the OpenID Connect scope along with scopes for any additional information it wants about the user.


After the request is processed, the client will receive an access token as well as an ID token issued by the authorization server that contains claims that carry information about the user. The user’s SSO experience is made possible by the delivery of the ID token from the authorization server to the client. The client can then contact a special endpoint on the authorization server known as the UserInfo endpoint to receive the remaining claims about the user.


OpenID Connect also defines mechanisms for discovery and session management beyond OAuth. 


- **Some Advantages of OpenID**
- It is an open and trusted authentication protocol, that can abstract this task separating end-user and provider.
- It augments OAuth2 framework capabilities.



#### RADIUS

RADIUS stands for Remote Authentication Dial-In User Service, and it is a network protocol with centralized authentication, accounting, and authorization.

`The functioning of the protocol occurs when the user requests access to network resources, where the RADIUS server encrypts the credentials which are entered by the user. After this, the user credentials are mapped through the local database and provide access.` [GeeksforGeeks](https://www.geeksforgeeks.org/types-of-authentication-protocols/)


- **Some Advantages of RADIUS**
- It's a great mechanism for providing multiple access for admins.
- It provides a unique identity to each user in a session.

- **Some Disadvantages of RADIUS**
- Initial implementation for this mechanism is hard on hardware.
- It has a variety of models that may require a special team which is cont consuming.


#### SAML

SAML stands for Security Assertion Markup Language which is based on XML. It has a data scheme for authentication between a provider and a consumer. And it is a product of  Organization for the Advancement of Structured Information Standards (OASIS). 


It works as a federation pattern allowing that a identity provider (IdP) may manage user authentication while providing a token also for a application known as service provider (SP).


So, within this architecture the SP does not need to manage itself authentication, besides it allows secure communications between domains through clouds and other systems as well.


With SAML there is a experience of o Single Sign-on (SSO), allowing that a SSO may execute a variaty of security functions for one or more applications.


###### How the SAML Protocol Works

SAML works passing informations about the users, and also logins and attributes between the IdP and the SP applications. So, with SAML each user may have a single authentication by the IdP application an can extend its session authenticating with many other applications.


The IdP pass what is known as SAML assertion to the SP when the user tries to access the services being managed by the SP. So here there is a example for a potential login with SAML:

1. Make the login and have access and authentication like SSO.
2. Export metadata from the IdP and import them.
3. Give metadata back to the service of SSO.
4. It's suggested that users only make logins with its SSO credentials.



Finalmente, a SAML assertion is a XML document that the IdP send to the SP having the authorization status from the user, and there can be 3 types os SAML assertions: **Assertion of Authentication**, **Attributed Assertion**, and **Assertion of Authorization**.



- **Some Advantages of SAML**
- It reduced the administrative costs for the end-users.
- It provides a single sing-in for authenticating across service providers.

- **Some Disadvantages of SAML**
- It is dependent on the identity provider.
- All the data is managed in a single XML format.


#### SSO

A Single Sign-On is an authentication method that enables users to securely authenticate with multiple applications and websites by using just one set of credentials.


###### How does SSO Works

SSO is based on a trust relationship set up between an application, known as service provider, and an identity provider application, which has its trust based upon a certificate that is exchanged between the identity provider and the service provider.


`This certificate can be used to sign identity information that is being sent from the identity provider to the service provider so that the service provider knows it is coming from a trusted source. In SSO, this identity data takes the form of tokens which contain identifying bits of information about the user like a user’s email address or a username.` [Onelogin.com](https://www.onelogin.com/learn/how-single-sign-on-works)


Steps with a example of how SSO works:

1.  A user browses to the application or website they want access to, aka, the Service Provider.
2. The Service Provider sends a token that contains some information about the user, like their email address, to the SSO system, aka, the Identity Provider, as part of a request to authenticate the user.
3. The Identity Provider first checks to see whether the user has already been authenticated, in which case it will grant the user access to the Service Provider application and skip to step 5.
4. If the user hasn’t logged in, they will be prompted to do so by providing the credentials required by the Identity Provider. This could simply be a username and password or it might include some other form of authentication like a One-Time Password (OTP).
5. Once the Identity Provider validates the credentials provided, it will send a token back to the Service Provider confirming a successful authentication.
6. This token is passed through the user’s browser to the Service Provider.
7. The token that is received by the Service Provider is validated according to the trust relationship that was set up between the Service Provider and the Identity Provider during the initial configuration.
8. The user is granted access to the Service Provider.
9. When the user tries to access a different website, the new website would have to have a similar trust relationship configured with the SSO solution and the authentication flow would follow the same steps.


###### Different Types of SSO Implementations

1. **Federated Identity Management (FIM)**
2. **OAuth (specifically OAuth2)**
3. **OpenID Connect (OIDC)**
4. **Security Access Markup Language (SAML)**
5. **Same Sign On (SSO)**: Same Sign On which is also often referred to as SSO is actually not the same as Single Sign-on because it doesn’t involve any trust relationship between the entities that are doing the authentication. It is more dependent on credentials being duplicated between systems and simply passing in those credentials when necessary. It is not as secure as any of the Single Sign-on solutions.




### Further Reading

[OAuth 2.0 - OAuth.net](https://oauth.net/2/)


### References

[Types of Authentication Protocols - GeeksforGeeks](https://www.geeksforgeeks.org/types-of-authentication-protocols/)

[OpenID Connect - OpenID.net](https://openid.net/connect/)

[OIDC: What Is OpenID Connect and How Does It Work? What You Need to Know - PingIdentity.com](https://www.pingidentity.com/en/resources/content-library/articles/openid-connect.html)

[O que é SAML (Security Assertion Markup Language, Linguagem de marcação de asserção de segurança)? - Oracle.com](https://www.oracle.com/br/security/cloud-security/what-is-saml/)

[How Does Single Sign-On Work? - Onelogin.com](https://www.onelogin.com/learn/how-single-sign-on-works)


[^1]:it-governance-and-management-overview-2022-03-27

[^2]:pmbok-and-project-management-methodologies-2022-03-29

[^3]:risk-management-overview-2022-04-03

[^4]:itil-service-management-framework-2022-03-30

[^5]:cryptography-steganography-and-cryptanalysis-overview-2022-04-07


