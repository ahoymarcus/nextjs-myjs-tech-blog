---
author: 'Marcus Vinicius Richa'
title: 'Open Web Application Project Foundation (OWASP) - Overview'
date: '2022-04-18'
subject: 'web-dev-articles'
description: 'The Open Web Application Security Project (OWASP) is a nonprofit foundation that works to improve the security of software, and servers as the base for developers and technologists to secure the web: Tools and Resources;  Community and Networking; Education & Training.'
---

# Open Web Application Project Foundation (OWASP) - Overview

1. ##### Introduction  
2. ##### Some Projects Based at OWASP
3. ##### OWASP Top 10
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

The Open Web Application Security Project (OWASP) is a nonprofit foundation that works to improve the security of software, and servers as the base for developers and technologists to secure the web: 

- **Tools and Resources**
- **Community and Networking**
- **Education & Training**



###### Other articles from the Governance and Management series:
- `IT Governance and Mangement - Overview` [^1]
- `PMBOK and others Project Management Methodologies` [^2]
- `ITIL - Service Management Framework` [^3]
- `Risk Management - Overview` [^4]
- `Information Security - Overview` [^5]
- `Cryptography, Steganography and Criptanalysis - Overview` [^6]
- `Continuity Plan and Essentials for Businesses - Overview` [^7]       


### Some Projects Based at OWASP


At the [OWASP platform](https://owasp.org/) it is possible to find many projects that brings to the Internet Community access to security information. Among some of its projects it's possible to find:

1. [OWASP Security Knowledge Framework](https://owasp.org/www-project-security-knowledge-framework/)
2. [OWASP ModSecurity Core Rule Set](https://owasp.org/www-project-modsecurity-core-rule-set/)
3. [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)



###### OWASP Security Knowledge Framework

It's an open source web application that explains secure coding principles in multiple programming languages. The OWASP-SKF does this through manageable sortware development projects with checklists and labs to practice security verification.

- **Some of the OWASP-SKF**:
1. **Projects**
2. **Code examples**
3. **Checklists**
4. **Labs**
5. **Knowledge base**
6. **User management**
7. **Design patterns**
8. **Support**



###### OWASP ModSecurity Core Rule Set

The OWASP ModSecurity Core Rule Set (CRS) is a set of generic attack detection rules for use with ModSecurity or compatible web application firewalls.


`The CRS aims to protect web applications from a wide range of attacks, including the OWASP Top Ten, with a minimum of false alerts.` [OWASP](https://owasp.org/www-project-modsecurity-core-rule-set/)


- **The CRS v3 tutorials**:
1. [Installing ModSecurity](https://www.netnea.com/cms/apache-tutorial-6_embedding-modsecurity/)
2. [Including the OWASP ModSecurity Core Rule Set](https://www.netnea.com/cms/apache-tutorial-7_including-modsecurity-core-rules/)
3. [Handling False Positives with the OWASP ModSecurity Core Rule Set](https://www.netnea.com/cms/apache-tutorial-8_handling-false-positives-modsecurity-core-rule-set/)
4. [ModSecurity Handbook, 2nd edition](https://www.feistyduck.com/books/modsecurity-handbook/)



###### OWASP Web Security Testing Guide

The web Security Testing Guide (WSTG) Project produces the premier cybersecurity testing resource for web application developers and security professionals.


`The WSTG is a comprehensive guide to testing the security of web applications and web services. Created by the collaborative efforts of cybersecurity professionals and dedicated volunteers, the WSTG provides a framework of best practices used by penetration testers and organizations all over the world.` [OWASP](https://owasp.org/www-project-web-security-testing-guide/)



### OWASP Top 10

The OWASP Top 10 is a book/referential document outlining the 10 most critical security concerns for web application security. The report is put together by a team of security experts from all over the world and the data comes from a number of organizations and is then analysed.

As it can be seem in the graph, there are three new categories, four categories with naming and scoping changes, and some consolidation in the Top 10 for 2021.

The changes of name were made to shift the focus from generic symptoms from the problems to its root cause:

![owasp-top-10-2021](/images/articles/web-development/owasp-top-10-2021.png)


1. **A01:2021 - Broken access Control**: it moves up from the fifth position to the category with the most serious web application security risk; the contributed data indicates that on average, 3.81% of applications tested had one or more Common Weakness Enumerations (CWEs) with more than 318k occurrences of CWEs in this risk category. The 34 CWEs mapped to Broken Access Control had more occurrences in applications than any other category.
2. **A02:2021 - Cryptographic Failures**: it shifts up one position to #2, previously known as A3:2017-Sensitive Data Exposure, which was broad symptom rather than a root cause. The renewed name focuses on failures related to cryptography as it has been implicitly before. This category often leads to sensitive data exposure or system compromise.
3. **A03:2021 - Injection**: it slides down to the third position. 94% of the applications were tested for some form of injection with a max incidence rate of 19%, an average incidence rate of 3.37%, and the 33 CWEs mapped into this category have the second most occurrences in applications with 274k occurrences. Cross-site Scripting is now part of this category in this edition.
4. **A04:2021 - Insecure Design**: it is a new category for 2021, with a focus on risks related to design flaws. If we genuinely want to "move left" as an industry, we need more threat modeling, secure design patterns and principles, and reference architectures. An insecure design cannot be fixed by a perfect implementation as by definition, needed security controls were never created to defend against specific attacks.
5. **A05:2021 - Security Misconfiguration**: it moves up from #6 in the previous edition; 90% of applications were tested for some form of misconfiguration, with an average incidence rate of 4.5%, and over 208k occurrences of CWEs mapped to this risk category. With more shifts into highly configurable software, it's not surprising to see this category move up. The former category for A4:2017-XML External Entities (XXE) is now part of this risk category.
6. **A06:2021 - Vulnerable and Outdated Components**: it was previously titled Using Components with Known Vulnerabilities and is #2 in the Top 10 community survey, but also had enough data to make the Top 10 via data analysis. This category moves up from #9 in 2017 and is a known issue that we struggle to test and assess risk. It is the only category not to have any Common Vulnerability and Exposures (CVEs) mapped to the included CWEs, so a default exploit and impact weights of 5.0 are factored into their scores.
7. **A07:2021 - Identification and Authentication Failures**: it  was previously Broken Authentication and is sliding down from the second position, and now includes CWEs that are more related to identification failures. This category is still an integral part of the Top 10, but the increased availability of standardized frameworks seems to be helping.
8. **A08:2021 - Software and Data Integrity Failures**: it is a new category for 2021, focusing on making assumptions related to software updates, critical data, and CI/CD pipelines without verifying integrity. One of the highest weighted impacts from Common Vulnerability and Exposures/Common Vulnerability Scoring System (CVE/CVSS) data mapped to the 10 CWEs in this category. A8:2017-Insecure Deserialization is now a part of this larger category.
9. **A09:2021 - Security Logging and Monitoring Failures**: it was previously A10:2017-Insufficient Logging & Monitoring and is added from the Top 10 community survey (#3), moving up from #10 previously. This category is expanded to include more types of failures, is challenging to test for, and isn't well represented in the CVE/CVSS data. However, failures in this category can directly impact visibility, incident alerting, and forensics.
10. **A10:2021 - Server-Side Requrest Forgery**: it is added from the Top 10 community survey (#1). The data shows a relatively low incidence rate with above average testing coverage, along with above-average ratings for Exploit and Impact potential. This category represents the scenario where the security community members are telling us this is important, even though it's not illustrated in the data at this time.












Principais vulnerabilidades e remediações (OWASP Top Ten).

### Further Reading

[OWASP Top 10 - 2017 The Ten Most Critical Web Application Security Risks - OWASP](https://wiki.owasp.org/images/0/06/OWASP_Top_10-2017-pt_pt.pdf)

[Open Web Application Security Project Top 10 (OWASP Top 10) - Synopsys](https://www.synopsys.com/glossary/what-is-owasp-top-10.html)

[TOP 10 OWASP – Conheça as principais vulnerabilidades - Gocache](https://www.gocache.com.br/seguranca/top-10-owasp-conheca-as-principais-vulnerabilidades/)

[Installing ModSecurity](https://www.netnea.com/cms/apache-tutorial-6_embedding-modsecurity/)

[Including the OWASP ModSecurity Core Rule Set](https://www.netnea.com/cms/apache-tutorial-7_including-modsecurity-core-rules/)

[Handling False Positives with the OWASP ModSecurity Core Rule Set](https://www.netnea.com/cms/apache-tutorial-8_handling-false-positives-modsecurity-core-rule-set/)

[ModSecurity Handbook, 2nd edition](https://www.feistyduck.com/books/modsecurity-handbook/)


### References

[Welcome to the OWASP Top 10 - 2021 - Owasp.org](https://owasp.org/Top10/)

[OWASP platform](https://owasp.org/)

[]()


[^1]:it-governance-and-management-overview-2022-03-27

[^2]:pmbok-and-project-management-methodologies-2022-03-29

[^3]:itil-service-management-framework-2022-03-30

[^4]:risk-management-overview-2022-04-03

[^5]:information-security-overview-2022-04-05

[^6]:cryptography-steganography-and-cryptanalysis-overview-2022-04-07

[^7]:continuity-plan-and-essentials-for-businesses-overview-2022-04-06


