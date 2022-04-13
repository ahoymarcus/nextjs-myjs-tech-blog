---
author: 'Marcus Vinicius Richa'
title: 'ICP-Brasil - Overview'
date: '2022-04-13'
subject: 'security-articles'
description: 'Infraestrutura de Chaves Públicas Brasileira ou ICP-Brasil é a hierarquia de confiança que viabiliza a emissão de certificados digitais para a identificação virtual do cidadão e de empresas, autoridade instituída pela Medida Provisória nº 2.000-2, de 24 de agosto de 2001. O modelo brasileiro de emissão de certificados digitais é o modelo de raíz única, em que a AC-Raiz é a primeira autoridade da cadeia de certificação, cujo papel é representado pelo Instituto Nacional de Tecnologia da Informação (ITI).'
---

# ICP-Brasil - Overview

1. ##### Introduction  
2. ##### [Estrutura da ICP-Brasil](#estrutura-icpbrasil)
    2.1. Autoridades Certificadoras (ACs)   
    2.2. Autoridade Certificadora do Tempo (ACT)   
    2.3. Prestador de Serviço Biométrico (PSBio)   
    2.4. Prestador de Serviço de Suporte (PSS)   
    2.5. Comitê Gestor da ICP-Brasil
3. ##### Vantagens na Operação de Certificados Digitais
4. ##### Tipos de Certificados Digitais
5. ##### Further Reading
6. ##### References

### Introduction
 
Infraestrutura de Chaves Públicas Brasileira ou ICP-Brasil é a hierarquia de confiança que viabiliza a emissão de certificados digitais para a identificação virtual do cidadão e de empresas, autoridade instituída pela Medida Provisória nº 2.000-2, de 24 de agosto de 2001. 


O modelo brasileiro de emissão de certificados digitais é o modelo de 'raíz única', em que a **AC-Raiz** é a primeira autoridade da cadeia de certificação, cujo papel é representado pelo Instituto Nacional de Tecnologia da Informação (ITI).


`O ITI, além de desempenhar o papel de Autoridade Certificadora Raiz – AC-Raiz, credencia e descredencia os demais participantes da cadeia, supervisiona e audita os processos.` [ICP-Brasil - Gov.br](https://www.gov.br/iti/pt-br/acesso-a-informacao/perguntas-frequentes/icp-brasil)


E segundo o site [Tecnospeed.com](https://blog.tecnospeed.com.br/icp-brasil/), o ano de 2021 teria visto a emissão de 590 mill certificados no padrão ICP-Brasil, 41,9% maior do que o emitido no ano anterior.


Já o site [Ergonrh.com](https://blog.ergonrh.com.br/icp-brasil/) vê nesse novo desenvolvimento tecnológico nacional uma transformação digital para o cenário burocrático e de demandas cartoriais no Brasil, em que aumenta a qualidade e flexibilidade do serviço de emissão de documentos, haja vista o fato dos documentos assinados digitalmente dento da estrutura do ICP-Brasil estarem diretamente respaldados e reconhecidos pela lei brasileira.



###### Read more about Digital Certificates in this article:
- `Cryptography, Steganography and Criptanalysis - Overview` [^1]



### Estrutura da ICP-Brasil{#estrutura-icpbrasil}

A ICP-Brasil é composta por uma cadeia de entidades credenciadas, formada pelas entidades:

1. **Autoridade Certificadora Raiz (AC-Raiz)**
2. **Autoridades Certificadoras (ACs)**
3. **Autoridades de Registro (ARS)**
4. **Autoridades Certificadoras do Tempo (ACTs)**
5. **Prestadores de Serviço Biométrico (PSBios)**
6. **Presatadores de Serviço de Suporte (PSS)**
7. **Comitê Gestor da ICP-Brasil**



#### Estrutura das Autoridades Certificadoras (ACs)

As Autoridades Certificadoras (ACs) são entidades públicas ou pessoas jurídicas de direito privado credenciadas à AC-Raiz e que emitem certificados digitais vinculando pares de chaves criptográficas ao respectivo titular.


`ACs emitem, expedem, distribuem, revogam e gerenciam os certificados, disponibilizando aos usuários lista de certificados revogados e outras informações necessárias, e mantendo o registro de suas operações.` (art. 6º da MP 2.200/01)


Finalmente, é preciso notar que existem dois níveis para as ACs:

1. **Autoridades Certificadoras de 1º Nível**: estão diretamente abaixo da AC-Raíz, e recebem diretamente desta estrutura raíz seu certificado digital para operar.
2. **Autoridades Certificadoras de 2º Nível: estas ACs estão imediatamente abaixo daquelas ACs de 1º nível, e portanto, delas recebem certificado digital que operacionaliza os seus próprios trabalhos.


#### Autoridade Certificadora do Tempo (ACT)

Uma Autoridade Certificadora do Tempo (ACT) é a parte da estrutura da ICP-Brasil responsável por fornecer carimbo/certificação para prova de existência de alguma entidade digital em determinado período.


Assim, por meio da análise de um conjunto de atributos fornecidos pela parte confiável, a ACT tem a função de atestar a sua existência dentro do período indicado.


#### Prestador de Serviço Biométrico (PSBio)

Os PSBio são a parte da estrutura da ICP-Brasil com capacidade técnica para realizar a identificação biométrica:


`[...]tornando um registro/requerente único em um ou mais bancos/sistemas de dados biométricos para toda ICP-Brasil, a verificação biométrica do requerente de um certificado digital e a comparação de uma biometria, que possua característica perene e unívoca, de acordo com os padrões internacionais de uso.` [ICP-Brasil - Gov.br](https://www.gov.br/iti/pt-br/acesso-a-informacao/perguntas-frequentes/icp-brasil)



#### Prestador de Serviço de Suporte (PSS)

O Prestador de Serviço de Suporte (PSS) desempenha sua atividade prestando serviço em 3 áreas distintas:

1. **Disponibilização de infraestrutura física e lógica**
2. **Disponibilização de recursos humanos especializados**
3. **Disponibilização de infraestrutura física e lógica e de recursos humanos especializados**


Ademais, esses serviços prestados pele PSS pode se dar diretamente em uma AC, ou ainda vinculado a uma AR, ou uma ACT, etc...


#### Comitê Gestor da ICP-Brasil

O Comitê Gestor da ICP-Brasil exerce a função de autoridade gestora de políticas de certificação digital. A entidade está vinculada à Casa Civil da Presidência da República, sendo composta por 7 representantes governamentais e 5 representantes da sociedade civil.



### Vantagens na Operação de Certificados Digitais

São muitas as vantagens e garantias oferecidas ao se trabalhar com certificações digitais:

1. **Assinatura e averbação de documentos digitais**
2. **Autenticação de operações eletrônicas com sigilo e segurança necessários**
3. **Emissão de documentos fiscais**
4. **Acesso a diversos serviços públicos como e-Social**
5. **Desburocratização de processos e de procedimentos**
6. **Flexibilização da estrutura pública ligada a emissão de documentos no Brasil**


`Dentro das classificações, eles se diferenciam por sua finalidade (assinatura, carimbo de tempo e sigilo), armazenamento e validade (A1 e A3, por exemplo) e tipos específicos, conectados ao documento ou uso que representam virtualmente (e-CPF, e-CNPJ, e-Jurídico e , por exemplo).` [Tecnospeed.com](https://blog.tecnospeed.com.br/icp-brasil/)


Contudo, é preciso ter em mente o cuidado para o fato de que nada impede a existência de outras organizações que prestam serviços de certificação digital. O modelo e estrutura da ICP-Brasil, entretanto, é o único no território nacional cuja produção de documentos digitais tem a autenticidade garantida juridicamente. Ou seja, funcionando como documentos legais, enquanto que certificações digitais fora da estrutura da ICP-Brasil servem apenas como testemunha ou prova de algum fato.



### Tipos de Certificados Digitais

1. **Certificado tipo A**: `Assinatura Digital`  
    1.1. Comprovação de autenticidade, autoria e integridade de documentos eletrônicos.
2. **Certificado tipo T**: `Tempo (Time stamping)`  
    2.1. Este certificado garante a temporalidade de documentos importantes, ou entidades digitais, na medida em que ele atesta sua existência no timestamp referido no documento assinado.
3. **Certificado tipo S**: `Sigilo ou Confidencalidade`   
    3.1. utilizat tecnologia de criptografia para garantir o sigilo de dados. além da própria autoria e integridade do documento.




Organização da ICP-Brasil. Norma de segurança ISO/IEC 27001.

### Further Reading

[ICP-Brasil - Gov.br](https://www.gov.br/iti/pt-br/acesso-a-informacao/perguntas-frequentes/icp-brasil)


### References

[ICP-Brasil: tudo sobre essa organização-chave do mercado de certificados - Tecnospeed.com](https://blog.tecnospeed.com.br/icp-brasil/)

[ICP-Brasil: Entenda o seu funcionamento! - Ergonrh.com](https://blog.ergonrh.com.br/icp-brasil/)


[^1]:cryptography-steganography-and-cryptanalysis-overview-2022-04-07


