---
author: 'Marcus Vinicius Richa'
title: 'UML e a Modelagem Orientada a Objetos'
date: '2022-07-02'
subject: 'development-articles'
description: 'A UML, que em português se traduz, Linguagem de Modelagem Unificada, é uma família de notações gráficas, apoiada por um metamodelo único, que tem como objetivo fazer a descrição e ajudar o projeto de sistemas de software. Ademais, enquanto linguagem a UML pode ser usada para a Especificação, Construção, Visualização, e Documentação de modelos para um sistema de software.'
---

# UML e a Modelagem Orientada a Objetos

1. ##### Introduction  
2. ##### A Unified Modeling Language - UML
	2.1. Listagem dos Diagramas da UML    
	2.2. O Diagrama de Classe  
	2.3. O Diagrama de Atividade    
	2.4. O Diagrama de Máquina de Estado    
	2.5. O Diagrama de Sequência   
	2.6. O Diagrama de Comunicação
3. ##### O Processo de Modelagem de Software com OO
    3.1. A Análise de Domínio   
    3.2. O Diagrama de Classes Conceitual   
    3.3. O Caso de Uso Essencial    
    3.4. O Caso de Uso Descritivo
4. ##### Artigo: Software Requirements Definition Based on a Business Modeling Architecture
    4.1. A Modelagem de Processos e os Casos de Uso de Negócios   
    4.2. Um Workflow para a Modelagem de Negócio
5. ##### Artigo: Aplicação da Modelagem UML na Fase de Análise de um Projeto de Software para Agendamento de Uso de Veículos Internos de uma Empresa
    5.1. Apresentando a Necessidade de um Sistema de Software   
    5.2. Exemplos do Uso dos Diagramas em Modelos do Sistema
6. ##### Artigo: Aplicação de uma Arquitetura de Modelagem de Processos de Negócios no Desenvolvimento de Software
    6.1. Apresentação Geral das Técnicas de Modelagem   
    6.2. Modelando Processos de Negócios com a UML
7. ##### Principais Ferrramentas  para UML
    7.1. FerramentasComerciais e as 'Free Editions'    
    7.2. Ferramentas livres BSD e GLP
8. #####    
9. #####    
10. #####    
11. ##### Further Reading
12. ##### References

### Introduction
 


###### Other articles from the Governance and Management series:
- `IT Governance and Mangement - Overview` [^1]
- `PMBOK and others Project Management Methodologies` [^2]
- `ITIL - Service Management Framework` [^3]
- `Risk Management - Overview` [^4]
- `Information Security - Overview` [^5]
- `Cryptography, Steganography and Criptanalysis - Overview` [^6]
- `Continuity Plan and Essentials for Businesses - Overview` [^7]     
- `Open Web Application Project Foundation (OWASP) - Overview` [^8]


###### Other articles related to Software Modeling:
- `UML e a Modelagem Orientada a Objetos` [^9]



### A Unified Modeling Language - UML

A UML, que em português se traduz, **Linguagem de Modelagem Unificada**, é uma família de notações gráficas, apoiada por um metamodelo único, que tem como objetivo fazer a descrição e ajudar o projeto de sistemas de software.

E de acordo com Reis e Videira (2003), a UML enquanto linguagem pode ser usada para a **Especificação**, **Construção**, **Visualização**, e **Documentação** de modelos para um sistema de software.


- **1996**: lançamento da 1ª versão da linguagem.
- **1997**: adoção da UML pelo Objetct Management Group  ou OMG como linguagem de modelagem padrão.


![timeline-da-evolução-e-versões-da-linguagem-uml](/images/articles/development/timeline-da-evolução-e-versões-da-linguagem-uml.png)


Em termos de objetivos, segundo a OMG a UML buscaria:
1. **Visualizar sistemas orientados a objetos**
2. **Especificar sistemas orientados a objetos**
3. **Construir sistemas orientados a objetos**
4. **Documentar sistemas orientados a objetos**


Ademais, como visto na parte introdutória deste curso, a **UML trabalha de forma a permitir a construção ou representação de modelos e estruturas do sistema que se está projetando**.


Especificamente no caso da modelagem orientada a objetos, a UML permite construir e representar, em especial, os seus **objetos**, permitindo ainda a construção de diversos outros modelos para representar também os comportamentos e as interações desses mesmos objetos entre si e com as demais estruturas todas.


- **Nota**:   
- Sobressalta o prof. Artur Marques que a UML em sua capacidade de generalização é capaz de trabalhar com todos os demais tipos de projetos, não sá de OOM.   
- Também, a UML serviria inclusive para aplicação de **Arquitetura Orientada à Modelos**, ou seja, de se fazer a modelagem de arquiteturas por completo.   
- Ademais, até mesmo alguns elementos relativos à modelagem de negócios (como **business process modeling notation BPMN**) a UML em suas versões mais novas busca fazer uma unificação.



Cabe acrescentar ainda que historicamente a construção da linguagem UML veio para unificar uma diversa gama de ferramentas e técnicas gerais referentes à modelagem e análise para projetos. 

Todo esse trabalho de unificações de todas essas linguagens e ferramentas foi feito por aquele grupo formado em **1997**, o **Object Management Group ou OMG**, se fundamentando, entre outros, em trabalhos como os de:
1. **Método de Booch de Grady Booch**
2. **Método OOSE de Iva Jacobson**
3. **Método de OMT de James Rumbaugh**
4. **Método de Coad/Yourdon**
5. **Método de Shlaer-Mellor**
6. **Método de Wirfs-Brock**



#### Listagem dos Diagramas da UML


- **Esquema Representando diversos tipos de diagramas presentes na linguagem UML**
![esquema-rep-diversos-tipos-de-diagramas-uml](/images/articles/development/esquema-rep-diversos-tipos-de-diagramas-uml.png)


E, dividindo os diagramas UML em categorias, temos:
1. **Diagramas Estruturais ou Estáticos**:   
    1.1. Diagrama de Classes: descreve a estrutura, mostrando as classes de sistema, atributos e relações.   
    1.2. Diagrama de Estrutura Composta: descreve a parte interior de uma classe e colaborações possíveis com essa estrutura.    
    1.3. Diagrama de Objetos: dá a visão total ou parcial do arcabouço do sistema em um momento particular.   
    1.4. Diagrama de Componentes: descreve a divisão do sistema em componentes e as dependências entre eles.   
    1.5. Diagrama de Distribuição/Implementação: modela o hardware para as implementações, bem como os ambientes onde será rodado o sistema.    
    1.6. Diagrama de Pacotes: mostra a divisão de agrupamentos lógicos no sistema, chamados de pacotes, mostrando as dependências entre eles.
2. **Diagramas Comportamentais ou Dinâmicos**: esta série de diagramas, inclusive em sua subespécie de Interações, busca trazer diversos níveis de abrangência para representar atividades e operações de um sistema.    
    2.1. Diagrama de Atividades: apresenta o passo a passo dos fluxos de trabalho dos componentes em um sistema. Foca no fluxo geral de controle.    
    2.2. Diagrama de Casos de Uso: traz a visualização da funcionalidade entregue em termos de atores, objetivos e dependências entre eles.    
    2.3. Diagrama de Máquina de Estados: apresenta os estados do sistema e coom ele pode mudar.    
3. **Diagramas de Interação**: fazendo a ressalva aqui que como tal, a interação funciona sim em realidade como parte do universo comportamental e de dinâmica das estruturas.         
	3.1. Diagrama de Sequência: apresenta a forma de comunicação entre os objetos em termos de sequência de msgs.   
	3.2. Diagrama de Colaboração/Comunicação: foca nas interações entre objetos ou partes da Classe, Sequência e Caso de Uso).   
	3.3. Diagrama de Tempo: foca nas restrições de tempo   
	3.4. Diagrama Geral de Interação: é considerado um tipo de diagrama de atividade em que os nós servem para representar as interações.


- **Já abaixo temos um esquema representando quais os diagramas UML são mais utilizados**
![esquema-rep-diagramas-uml-mais-utilizados](/images/articles/development/esquema-rep-diagramas-uml-mais-utilizados.png)


```
Grady Booch -> “Para 80% de todos os softwares, apenas 20% da UML é necessária”

- Os 6 Diagramas UML mais Utilizados:

- Diagrama de Classe
- Diagrama de Casos de Uso
- Diagrama de Sequência
- Diagrama de Atividades
- Diagrama de Máquina de Estado
``` 


#### O Diagrama de Classe

Bell (2004) referencia que o diagrama de classe fornece um conjunto inicial de elementos de notação que todos os outros diagramas de estrutura para modelagem OO se utilizam, enquanto que o texto do curso acrescenta que o foco neste diagrama seria justamente definir a **representação dos tipos que irão modelar o software**.


Dentre os elementos presentes no diagrama temos:
1. **Classe**: um retângulo que traz 3 níveis de informação: nome da classe, atributos da classe e operações/métodos da classe.
2. **Visibilidade da classe**: parâmetros como + (público), - (privado), # (protegido), / (derivado), ~ (pacote), * (aleatória).
3. **Relacionamentos**:   
    3.1. Associação: uma seta contínua de ponta aberta   
    3.2. Herança: uma seta contínua de pont fechada    
    3.3. Realização/Implementação: uma seta tracejada com ponta fechada   
    3.4. Dependência: uma seta tracejada com ponta aberta   
    3.5. Agragação: uma seta com um diamante vazio    
    3.6. Composiçao: uma seta com um diamante preenchido~
4. **Cardinalidade**: de forma similar a um banco de dados relacional, este diagrama também representa a cardinalidade dos relacionamentos.   
    4.1. Classe de Associação: também como em sistemas relacionais de BD, aqui também se faz uso dessas classes de apoio.   


Alguns propósitos de um diagrama de classes:   
- analisar e desenvolver a visão estática de uma aplicação;
- engenharia avançada e reversa;
- servir de base para diagramas de componentes e implementação;
- descrever as responsabilidades de um sistema.


###### Entendendo Alguns Elementos dos Relacionamentos de Classes 

- **Associação**:
É o tipo de relacionamento entre instâncias de tipos diversos. Por exemplo:

```
**Pessoa** M:1 **Empresa** 

ou

**Empresa** 1:M **Escritórios**
```

- **Agregação**:
É uma forma de relacionamento binário, quer ela seja parcial ou total, de modo que ela só pode envolver duas classes, e em que uma classe recebe estruturas de outra classe.

**Ademais, é um ponto definidor para a agregação o fato de que quaisquer das classes, e especialmente a doadora, pode e continua a existir mesmo que não esteja se relacionando com outra.**


- **Composição**:
Do outro lado, a Composição difere da anterior justamente no fato de que neste relacionamento umas das classes só existe concretamente no sistema se ligado à classe principal.


- **Dependência**:
Finalmente, é possível também se tratar de um tipo ainda mais geral de relacionamento que é Dependência, sendo que esta é a forma mais fraca de vínculo entre as classes e indica um uso feito por uma das classes em algum ponto do funcionamento do sistema.


- **Notas**:   
- Veja que a **Agregação** é binária entre 2 classes. Porém, nada impede que uma classe realize mais de um relacionamento, binário, com diferentes classes.
- Entenda-se aqui que **Agregação** e a **Composição** são 2 tipos de herança em modelos OO.
- Em termos do estudo das formas de ligação entre as classes, podemos muito bem comparar como os tipos de vínculos entre as classes gera diferentes tipos de complexidades para o sistema. Assim, sendo a **Dependência**, o tipo que tem o vínculo mais fraco dentre todos, especialmente quando comparado, por exemplo, com a **Herança**, esta que pode se tornar extremamente complexa como pode ser visto na imagem abaixo com as heranças múltiplas:


![a-questão-da-herança-multipla-em-oo](/images/articles/development/a-questão-da-herança-multipla-em-oo.png)



####  O Diagrama de Atividade

Este diagrama busca fazer a representação do fluxo de uma operação do sistema, levando em conta principalmente:

1. **Atividades**
2. **Associações**
3. **Condições**
4. **Restrições**


Ademais, um diagrama de atividade apresenta um ponto entrada/início e outro de finalização. Possue destacadamente retângulos contendo as atividades e elementos para definir o fluxo e o controle. Ele pode inclusive inserir o uso de **partição** que permite colocar em legenda os atores participando daqueles fluxos. 


![diagrama-de-atividades-com-raia-uml](/images/articles/development/diagrama-de-atividades-com-raia-uml.png)


#### O Diagrama de Máquina de Estado

Este diagrama busca **retratar o comportamento dinâmico de uma entidade com base em sua resposta a eventos**, mostrando como a entidade reage a vários eventos, dependendo do estado atual que se encontra.


Assim, este diagrama mostra as transições de estado possíveis entre vários objetos, e de forma também relacionada, este diagrama de máquina de estado permite fazer referência às combinações das diferentes informações que um objeto pode conter.

![exemplo-de-um-diagrama-de-maquina-de-estado](/images/articles/development/exemplo-de-um-diagrama-de-maquina-de-estado-uml.png)


Logo, como foi visto, estes diagramas são aplicados em casos como:
1. Objetos orientados a eventos.
2. Sistemas reativos: é um sistema que depende de um evento qualquer para reagir.
3. Ilustrações de casos de uso.
4. Como um objetos se move através de vários estados dentro de sua vida útil.
5. Comportamento geral de uma máquina de estado.


#### O Diagrama de Sequência

Lembrando daquela lista com as 3 categorias de diagramas, este está na parte referentes aos diagramas de Interação (que por sua vez podem ser vistos como subespécie dos diagramas que tratam de comportamentos ou dinâmicas).


Segundo Bell (2004), o diagrama de sequência é usado principalmente para mostrar as interações entre os objetos na ordem sequencial ou em uma timeline em que as interações acontecem.


Desse modo, pode-se dizer que os diagramas de sequência podem servir ainda para definir sequência de eventos que resultem em algum resultado desejado, sendo o foco mais na ordem do que no próprio conteúdo dessas mensagens.


![exemplo-de-um-diagrama-de-sequencia-uml](/images/articles/development/exemplo-de-um-diagrama-de-sequencia-uml.png)


#### O Diagrama de Comunicação

O diagrama de comunicação, que até a versão 1.5 da UML era conhecido como **Diagrama de Colaboração**, enfoca em um processo, normalmente baseado em um caso de uso, buscando fazer uma representação mais simples e mais específica das interações entre os objetos à medida que o número de objetos e de mensagens relacionados aumenta, diferentemente daquilo que é encontrado no diagram de sequência que além de mais complexo busca representar também toda a temporalidade dessas interações.


- **No exemplo da imagem abaixo 4 objetos possuem 7 tipos de mensagens sendo catalogadas ou representadas no sistema**:
![exemplo-de-um-diagrama-de-comunicacao](/images/articles/development/exemplo-de-um-diagrama-de-comunicacao.png)


De forma geral, este diagrama de comunicação é muito usado para:
1. Examinar o comportamento de vários objetos em um único caso de uso.
2. Mostrar as colaborações entre os objetos.


Segundo o site [Monitoriadeengenhariadesoftware](https://monitoriadeengenhariadesoftware.wordpress.com/2016/03/20/diagrama-de-comunicacao/), no artigo `Diagrama de Comunicação`, em verdade, o diagrama de comunicação e o diagrama de sequência se complementariam.


`As informações mostradas no diagrama de comunicação são, com frequência, praticamente as mesmas apresentadas no diagrama de sequência, porém com um enfoque diferente, visto que esse diagrama não se preocupa com a temporalidade do processo, concentrando-se em como os elementos do diagrama estão vinculados e quais mensagens trocam entre si durante o processo.` [Monitoriadeengenhariadesoftware](https://monitoriadeengenhariadesoftware.wordpress.com/2016/03/20/diagrama-de-comunicacao/)


![esquema-rep-as-diferenças-entre-diagramas-de-sequencia-e-comunicacao](/images/articles/development/esquema-rep-as-diferenças-entre-diagramas-de-sequencia-e-comunicacao.png)



### O Processo de Modelagem de Software com OO

#### A Análise de Domínio

Como adverte o texto base desta disciplina, o processo de modelagem de um software deve se iniciar pela **análise de domínio**, termo como que é trazido por Valério (1997), pois é aqui que os desenvolvedores irão conhecer e entender sobre o que se trata o domínio ou negócio a que o software deve prestar auxílio.

`Representação: do domínio como uma coleção de entidades interconectadas: quando identificados nas etapas anteriores são organizados em uma visão de alto nível, ou seja, uma arquitetura de domínio geral. Essas classes são agora os tijolos usados para construir um sistema que satisfaça uma estrutura subjacente.` (VALÉRIO, 1997)


E, recorrendo a autores tradicionais como, Pressman e Sommerville, esta etapa inicial do trabalho de modelagem começaria naquilo que o primeiro chama de **etapa de comunicação** e o segundo **etapa de especificação**. 


`Quando falamos domínio em modelagem de sistemas de informação, especificamente de software, nos referimos a todo o conjunto de atividades e processos de negócios nos quais os usuários/clientes atuam e esperam utilizar na futura solução de software. [...] Quanto as formas de se obter isso, já são muito conhecidas e incluem, etnografia, questionários, entrevistas, brainstorming, além de análise de casos de uso.` [texto base do curso: apostila 3]


E, ainda segundo o texto base de aula, ao se observar uma análise de domínio bem fetia, é possível esperar pelo 3 importantes vantagens para o modelo a ser feito:    
- Desenvolvimento mais rápido/ágil, por causa tanto de uma melhor interação entre desenvolvedores e clientes, bem como de uma melhor resposta dos desenvolvedores na realização das tarefas em geral.    
- Um sistema melhor, porque ele será coerente com as expectativas dos clientes, além de poder avançar nas expectivas gerais, o que pode trazer um sistema final ainda mais rico em termos de funcionalidades.    
- Uma maior capacidade de resposta dos desenvolvedores às mudanças, ao lançamento de novas versões.


É por isso, que Laganiere (2010), tem o cuidado de trazer um foco especial à esta etapa de análise do domínio, dividindo-a em 8 etapas:
1. **Introdução**: nomeação do domínio, junto com a sua motivação e a problemática específica que traz a necessidade por esse sistema.
2. **Glosário**: descrição dos significados de toso os termos usados no domínio, sejam o termos cotidiano, sejam os especiais/especializados.   
    2.1. É essencial conhecer para melhor interação com clientes e para que esses mesmo termos apareçam novamente na interface do sistema.
3. **Conhecimentos gerais sobre o domínio**: trata-se de um resumo de todos os fatos, regras importantes e conhecimentos especializados presentes no domínio, e que necessariamente devem estar presente no sistema, seja em termos de dados, seja em termos de operações ou cálculos, etc.
4. **Clientes e Usuários**: aqui se trata de também descriver os aspectos essenciais de clientes, usuários ou quaisquer outro indivíduo que possa vir a ser usuário do software.   
    4.1. Vale mesmo até mencionar históricos e atitudes relevantes a todas essas pessoas que representam stakeholders.
5. **Ambiente**: descrição dos equipamentos e sistemas existes no negócio, uma vez que o sistema e suas extensão terão que trabalhar com todos aqueles.
6. **Tarefas e procedimentos atualmente executados**: trata-se aqui de conhecer o contexto dos usuários mais de perto, para tentar entender melhor não apenas os melhores termos para uma melhor experiência por parte deles, mas até para evitar criar e moldar processos que podem não ser bem reconhecidos por eles.
7. **Software concorrente**: descrever tantos os softwares em operação para auxiliar os clientes e usuários, como também versões existentes no mercado, para facilitar a descoberta de vantagens e desvantagens de implementação e de operação.
8. **Semelhanças entre domínios e organizações**: segundo Laganiere, este item é importante porque ao se entender as possíveis semelhanças entre o domínio/organização cliente, com outras em geral, pode permitir ao analista compreender possibilidades para a generalização das funcionalidades e para o seu reuso. 


E, tranzendo também o que apresenta o prof. Artur Marques, podemos apontar 3 principais tarefas para esta análise de domínio:
1. Determinar os objetivos e as estratégias do modelo de negócios.
2. Investigação dos problemas e dos requisitos (e não solução ainda).
3. E em relação ao design a ênfase em uma solução conceitual em software e hardware que possa preencher todos os requisitos levantados.


#### O Diagrama de Classes Conceitual

O autor Wagner (2016) lembra que os modelos feitos durante a análise de domínio são modelos bastante genéricos e, portanto, estão afastados e são independentes de qualquer processo ou solução tecnológica particular.


E, embora estes documentos estejam longe de se preocuparem com escolhas de design específicas de tecnologia, o texto base do curso observa **a possibilidade do uso de um documento assemelhado ao diagrama de classes tradicional da UML**, ainda que se utilizando de informações e de descrições conceituais e de alto-nível, além de uma linguagem, como diz o mesmo texto base do curso, que tem o seu foco `na perspectiva e na linguagem dos especialistas do domínio, portanto, clientes, consultores, usuários e outros.` (apostlila 3)


![exemplo-de-uma-modelagem-de-diagrama-conceitual](/images/articles/development/exemplo-de-uma-modelagem-de-diagrama-conceitual.png)


E o texto do curso traz ainda a questão de sua própria natureza conceitual, esta documentação que se cria nessa etapa não deve fazer referência para questões de tecnologia ou de TI, mas apenas uma ampla descrição do negócio, que posteriormente permitirá que os desenvolvedores possam retirar as suas estruturas, que no caso do OO seriam os **objetos**.


E em relação ao caso ágil, o prof. resume:
1. **Projeto**: 
	1.1. Definição de objetos de software   
	1.2. Definição das colaborações/interações
2. **Análise de requisitos**:  
	2.1. Histórias (por entrevistas)   
	2.2. Cenários de como as pessoas usam o aplicativo ou programa.   
	2.3. Escrito como casos de uso UML


#### O Caso de Uso Essencial

O caso de uso essencial seria outro desses modelos de domínio e com um caráter mais genérico e conceitual que vão participar para a melhor descrição do modelo de negócio para o novo sistema de software.


Neste caso específico, **o caso de uso essencial é um tipo de documento inspirado no caso de uso tradicional da UML, porém fazendo uso de uma linguagem mais abstrata e mais simplificada para explicar uma tarefa ou uma interação específica**.


Interessante, inclusive, que o autor Ambler (2014) admite o uso de códigos do tipo **BR** ou Business Rules, para melhor identificar e definir as regras vindas do âmbito do domínio do negócio.


E como visto com o prof. Artur Marques, tendo como objetivos gerais:
1. Auxiliar a comunicação entre analistas e clientes.
2. Descrever um cenário mostrando as funcionalidades de acordo com o ponto de vista do usuário (escrito uma linguagem do próprio domínio ou leiga)


Já com relação a benefícios em geral:
1. Documenta o processo de negócios.
2. Documenta as regras de negócios que estão impulsionando a ação.
3. Capta os requisitos de alto nível.
4. Separa os processos de negócios em área do sistema funcional.
5. Serve como documentação de requisitos para o desenvolvimento do sistema e define os requisitos de maneira não implementada (fácil de ler)
6. Serve como teste de alto nível para requisitos.


Finalmente, de maneira geral, encontramos nestes tipos de diagramas:
- Os atores   
- Casos de usos (ação e objeto)   
- Relacionamentos   
- Os tipos de relacionamento: associação, composição


#### O Caso de Uso Descritivo

Neste novo documento adaptado pelo texto base do curso (apostila 3), traz novamente a ideia de um diagrama de caso de uso tradicional da UML sendo usado como base para delinear, do ponto de vista do usuário, um determinado comportamento do sistema para a realização de uma operação ou atividade.


Nesses termos, o **caso de uso descritivo seria usado como uma sequência de etapas simples, começando com a meta de um usuário e terminando quando essa meta é cumprida**, sendo que a ideia principal aqui é esclarecer e refinar pontos específicos que foram previamente documentados, como por exemplo, pré-condições, pós-condições, restrições, fluxos, subfluxos ou fluxos alternativos, etc. 


- **Exemplo de um caso de uso descritivo Basal, isto é, da forma mais simples possível**:
![exemplo-de-caso-de-uso-descritivo-basal](/images/articles/development/exemplo-de-caso-de-uso-descritivo-basal.png)


- **Exemplo de um caso de uso descritivo Detalhado. Ou seja, que traz consigo fluxos alternativos, todos os requisitos funcionais, situações de contorno, etc.**:
![exemplo-de-caso-de-uso-descritivo-detalhado](/images/articles/development/exemplo-de-caso-de-uso-descritivo-detalhado.png)


#### O Diagrama de Sequência

Esta é uma adição do professor do curso, Artur Marques e tem por objetivo dar entendimento do comportamento das classes em relação ao uso e ao consumo de recursos e os seus métodos.



### Artigo: Software Requirements Definition Based on a Business Modeling Architecture

Em seu artigo, AZEVEDO JÚNIOR et al (2008) intenta a proposição de um método/metodologia para uma modelagem de negócios e levantamento de requisitos baseada em uma **arquitetura de modelagem de negócios**.


Assim, seria objetivo dos autores pensar em uma engenharia de software com **métodos mais ordenados** e **etapas devidamente sistematizadas**, buscando fugir de um trabalho que é basicamente paltado pelo empirismo.

`Quanto mais rápido um negócio puder alterar seus processos e os sistemas de informação que lhe dão su-porte, mais preparado estará para reagir a eventos de concorrência no mercado. O levantamento de requisitos é a etapa do desenvolvimento de sistemas de informação responsável por identificar e modelar as necessidades do negócio a serem atendidas pelos sistemas de informação, e é, portanto, uma atividade cada vez mais relevante em um dinâmico cenário. [...] A integração entre os objetivos do negócio, os processos de negócio e sistemas de informação é um fator determinante da dinâmica necessária à organização e também um desafio aos gerentes. [...] Existem vários métodos, técnicas e ferramentas de modelagem para facilitar o entendimento e a análise da complexidade das organizações moder-nas (KALPIC; BERNUS, 2002; LI; WILLIAMS, 2002; VERNADAT, 2002). E. [...] a análise de requisitos tem sido feita com base num elemento de modelagem da UML (Unified Modeling Language) chamado Caso de Uso. Embora exis-tam algumas heurísticas propostas para identificação de casos de uso, como as apresentadas em Schneider e Winters (1998), em Jacobson, Booch e Rumbaugh (1999), e em Lilly (1999), não existem métodos estabelecidos que tornem esta atividade mais sistemática.` (Introdução)


A seguir os autores fazem um apanhado dos desenvolvimento da engenharia de software com base em Pressman, primeiro se reportam às 3 etapas básicas de processo de desenvolvimento de software (definição, desenvolvimento e manutenção) e às 4 metodologias mais correntes (ciclo de vida clássico ou cascata, prototipação, espiral e os de Quarta Geração), e mais rescentemente, segundo os autores, o modelo iterativo e incremental.

E como definição geral para a **engenharia de requisitos**, o artigo diz que: seria a **aplicação de técnicas de engenharia e métodos de análise para efetuar a ligação entre a necessidade de informatização de processos de domínio e o projeto de software para atender às tais necessidades levantadas**.


Dessa forma, para atender ao primeiro ponto em suas observações, os autores apontam como **métodos de análise** elementos do UP ou Processo Unifica, que serviu de base para o desenvolvimento da linguagem de UML:

`O UP (Processo Unificado) é um processo estabelecido para o desenvolvimento de software resultado de três déca-das de desenvolvimento e de uso prático. Jacobson, Booch e Rumbaugh (1999) apresentam as origens do UP no pro-cesso Objectory, que teve sua primeira versão apresentada em 1987, passando pelas contribuições do Processo Ra-tional Objectory (1997), até chegar ao Processo Unificado da Rational – RUP (KRUCHTEN, 2003).`


E, aprofundando na questão, os autores determinam que o modelo de **caso de uso** serviria de base para analítica para todo o processo de desenvolvimento, enquanto que técnicas de trabalho (workflow) iterativas e incrementais, tiradas da engenharia de software, trabalharia levar a cabo os esforços de construção do modelo de domínio (seção: ENGENHARIA DE REQUISITOS E O UP).


#### A Modelagem de Processos e os Casos de Uso de Negócios

Aqui, então, para iniciar no processo de modelagem do domínio, como foi definido pelos autores, em que artefatos de software são construídos com o intuito de **suprir uma necessidade de informatiação de processos de negócio**, os autores se reportam a  JOHANSSON et al., (1995). para definir o **processo de negócio** como entrada de um ensumo e uma saída como resultado de valor:

`Processo de negócio pode ser definido como um conjunto de atividades conexas que toma um insumo de entrada e o transforma para criar um resultado de saída. Teoricamente, a transformação que nele ocorre deve adicionar valor e criar um resultado que seja mais útil e eficaz ao cliente que recebe o serviço ou produto (JOHANSSON et al., 1995).`



###### A Proposta de Eriksson e Penker

Estes buscam se utilizar da extensão da UML para focar basicamente em uma modelagem de negócio baseada em 2 estruturas básicas:

1. **Objetos**: estes são em OOM as estruturas, inclusive dados, referentes ao próprio negócio.
2. **Relacionamantos**: tratam-se dos relacionamentos analisados que compõem os processos de negócio da organização.


Ademais, propõem que estas 2 estruturas seriam desenvolvidas em 4 fases/estágios:

1. **Visão do Negócio**: modela conceitos e objetivos a serem seguidos de acordo com a estratégia do negócio.
2. **Processo do Negócio**: modela os processos de negócio levantados, juntamente com os seus relacionamentos para fazerem uso dos recursos (Inputs) necessários para atingir seus objetivos e gerar valor.
3. **Estrutura do Negócio**: modela a estrutura dos recursos (físicos, informacionais, humanos).
4. **Comportamento do Negócio**: modela o comportamento e a interaçao entre recursos e entre processos.


`A iden-tificação dos casos de uso através desta técnica mostra-se mais adequada, pois faz com que os objetivos dos atores, e conseqüentemente os requisitos do sistema em forma de casos de uso, estejam alinhados aos objetivos globais do negócio, já que são analisados com base nos processos de negócio e estes, por sua vez, foram definidos em função dos objetivos do negócio.` (seção: Proposta de Eriksson e Penker)


Contudo, os autores ainda apontam uma divergência teórica entre correntes acadêmicas, em que uma dessas correntes poderia ser representada por um esforço inicial da própria OMG em 1997 de extender a UML para tratar de modelos de domínio, e a outra corrente representada por propostas como as de Eriksson e Penker (2000) ou a  Proposta de Marshall (1999).

`A segunda linha corresponde às iniciativas de Marshall (1999) e Eriksson e Penker (2000), que sustentam não serem os processos de negócio bem representados pelos casos de uso, pois estes servem para representar um domí-nio fechado correspondente a determinados requisitos de usuários e não podem ser vistos simplificadamente como requisitos de clientes. [...] Os casos de uso podem ser con-siderados como as especificações dos serviços que o sistemade software fornece ao processo de negócio (ERIKSSON;PENKER, 2000) [...] É necessário, portanto, que a modelagem dos processos de negócio dê ênfase ao fluxo de informações entre os processos ao longo da cadeia de valores que busca atingir os objetivos globais do negócio. Atentando para isto, a segunda linha propõe a utilização de diagramas de ativi-dades para a representação dos processos de negócio no domínio da modelagem de negócio, exibidos através do diagrama de atividade da UML, em que os itens atividade são estereotipados como processos, conforme o proposto por Eriksson e Penker (2000).`


E, ao que parece, a divergência existiria nos termos dos autores citados nas propostas observarem uma clara distinção/divergência entre:

```
Requisitos de usuários (relativos às especificações dos serviços de software)

                                            VERSUS

Requisitos de clientes (relativos aos processo de negócio propriamente ditos)
```


#### Um Workflow para a Modelagem de Negócio

Em termos de workflow os autores propõem:
1. **Modelar os Objetivos do Negócio**: por meio de uma extensão, com o Diagrama de Modelo de Objetivos, a **identificação hierarquisada dos principais objetivos,  com as suas dependências mútuas**.
2. **Modelar os Processos de Negócio**: já aqui, por meio de outra extensão, com o Diagrama de Processos de Negócio, estes modelos têm como inculbência modelar a realização dos objetivos de negócio levantados na fase anterior.
3. **Modelar os Recursos Envolvidos**: por meio de uma extensão como o Diagrama da Vista de Estrutura de Negócio, e serviriam de apoio à modelagem no item 2, feita para os processos de negócio.
4. **Modelar Comportamentos dos Recursos**: esta estensão tratada como um Diagrama de Estados de Recurso seria um outro apoio para a definição do item 2 e modelagem de processos de negócio, em que com este diagrama busca-se inserir a capacidade de representação de uma timeline usada para refinar a cadeia de valor para os objetos.
5. **Definir Papéis e Responsabilidades**: aqui, segundo explicam os autores, cada processo de negócio deve ter um responsável; mas que também seria importante apresentar em modelo todos os atores, isto é, aqueles com responsabilidades definida, e  que devem participar do fluxo de eventos de cada um daqueles processos de negócios.


- **Exemplo de PEIXTO (2008)**:
![workflow-para-modelagem-de-negocio-delmir-peixoto-2008](/images/articles/development/workflow-para-modelagem-de-negocio-delmir-peixoto-2008.png)


Finalmente, os autores oferecem as suas considerações finais nas quais fazem um breve resumo dos rumos escolhidos por eles neste artigo:

`Neste artigo enfatizou-se a necessidade de o desenvolvi-mento de sistemas complexos de software ser guiado por uma metodologia ou um processo de desenvolvimento que organize e controle a produção das várias partes (artefatos) constituintes de um sistema. O UP contempla boas práticas de engenharia de software, mas não define adequadamente atividades para a modelagem de negócio. O RUP oferece uma proposta de modelagem de negócio, porém, apresenta limitações quanto à modelagem e quanto ao alinhamento dos casos de uso identificados aos reais objetivos do negócio. A técnica de construção de arquiteturas de negócio proposta por Eriksson e Penker (2000) é, dentre as propostas de mo-delagem de negócio com UML pesquisadas neste trabalho, a única que aborda de forma sistemática a passagem da arquitetura de negócio para uma arquitetura de software.` 


1. As boas práticas de engenharia de software da UP. 
2. Uma base de modelagem de negócio oferecida pela RUP.
3. As propostas de extensão para esses modelos, baseada principalmente em Eriksson e Penker (2000).


###### Artigo de referência:`DELMIR, Peixoto de A. Junior e CAMPOS, Renato de. Definição de requisitos de software baseada numa arquitetura de modelagem de negócios, 2008.`



### Article: Aplicação da Modelagem UML na Fase de Análise de um Projeto de Software para Agendamento de Uso de Veículos Internos de uma Empresa 

Este artigo de Almeida (2013) tem or objetivo fazer a aplicação dos diagramas de UML para documentar o processo de levantamentamento de requisitos junto aos clientes e, assim, dar suporte à fase de análise de projeto de software.


Ademais, o artigo baseia suas observações em estudo de caso, isto é, do caso real da aplicação dessas técnicas em uma empresa privada que agenda o uso de veículos da empresa para funcionários. 

Finalmente, segundo o autor, os requisitos foram levantados e fora observado que o **diagrama de caso de uso** foi realmente um auxílio na construção do modelo conceitual que serviu de base para a geração da base de dados para o sistema.


#### Apresentando a Necessidade de um Sistema de Software

Segundo o autor, um sistema é impressindível para uma empresa que dispõe de veículos de serviços, pois, seja ela de grande ou de médio porte, ela precisa de ser capaz de gerenciar adequadamente os empréstimos, bem como resolver todos os problemas relacionados.


Assim, como aponta o autor, os problemas podem ser diversificados, como, por exemplo:
1. Organizar os horários, além de dados gerais do sistema.
2. Definir quem pode tomar empréstimo.
3. Gerenciar prioridades.
4. Gerenciar os agendamentos de veículos.
5. Gerenciar manutenção dos veículos.
6. Gerar relatórios.


E diante da quantidade de processos apontada acima, fica clara também a necessidade de tal sistema ser automatizado, porque apenas para gerenciar o fluxo de informações e dados envolvidos dos envolvidos já seria suficiente para sobrecarregar um sistema manual.

Ademais, a automatização também traz segurança para o sistema, na medida que ela permite a validação em tempo real de todas as informações, bem como de todas as operações sendo realizadas.


#### Exemplos do Uso dos Diagramas em Modelos do Sistema

Assim, segundo o artigo, os principais diagrams as serem utilizados seriam o **diagrama de classe** e o **diagrama de caso de uso**, sendo que a UML como um todo é explicada como uma linguagem gráfica, que se utiliza de uma série de símbolos padronizados para construir modelos de documentação para software.


E nesse sentido, o diagrama de classes é um diagrama que tradicionalmente é usado pela modelagem orientada a objetos para **apresentar as classes, juntamente com os seus atributos e operações, além dos seus relacionamentos com outras classes**.


Do outro lado, o diagrma de caso de uso seria um diagrama utilizado para **descrever a visão externa de um sistema de software e as suas interações com o mundo exterior**. Por exemplo, como o de descrever do início ao fim as formas de interação de um usuário ou de algum hardware com o sistema (cada ente de interação é tratado como sendo um ator no sistema). Ademais, este modelo não tem a pretenção de adentrar na forma de funcionamento do próprio sistema, apenas nas suas funções.


- **Exemplo do uso do diagrama de caso de uso para uma análise conceitual do sistema de empréstimos de veículos**:
![analise-conceitual-feita-com-diagrama-de-caso-de-uso](/images/articles/development/analise-conceitual-feita-com-diagrama-de-caso-de-uso.png)


###### Artigo de referência: `Aplicação da modelagem uml na fase de análise de um projeto de software para agendamento de uso de veículos internos de uma empresa DE ALMEIDA, A.A.L. Aplicação da modelagem uml na fase de análise de um projeto de software para agendamento de uso de veículos internos de uma empresa. 2013.`



### Artigo: Aplicação de uma Arquitetura de Modelagem de Processos de Negócios no Desenvolvimento de Software

O objetivo deste artigo é propor a adoções de melhores práticas para a etapa de especificação de um projeto de software, buscando para isso incorporar elementos utilizados pelo Processo Unificado para o desenvolvimento de software, para serem aplicados também nas atividades que fazem parte da **modelagem de negócios** e do **levantamento de requisitos**.


E, nesse sentido, os autores ainda acrescentam em sua introdução que nos últimos tempos, as evoluções que têm perpassado tanto o mundo dos negócios, como também as organizações, o sistema software acabou passando a fazer parte direta da tradicional relação **objetivos do negócio** e **processos de negócio**.


Assim, nesse novo desenho do cenário atual no mundo dos negócios, o sistema de software aumentou muito em importância, e daí também seu uso e a complexide das formas como passa a ser usado. **Mas não apenas o software passa a ser usado de forma mais regular, ele passa a ter a necessidade de também se adequar melhor ao modelo de negócio para por ser realmente útil.**


E, segundo os autores, haveria nessa ligação entre o modelo de negócio e o processo de desenvolvimento de software uma inconsistência, por causa de uma falta de ligação mais sistematizada entre estes 2 mundos.

Nisso, embora haja inúmeras técnicas e metodologias do lado da administração dos negócios para ajudar a simplificar os seus próprios processos de negócios, e também haja técnicas e padrões maduros para a construção de sistemas, o processo de **levantamento de requisitos** ainda seria em muitas de suas partes `um processo empírico, não considerando de forma sistemática a importância do foco nos objetivos do negócio`. (na seção introdutória)


Em termos mais específicos à modelagem orientada a objetos, dizem os autores que o trabalho de levantamento de requisitos tem sido feito usando-se a linguagem da UML, principalmente em relação ao **diagrama de caso de uso**, juntamente com algumas heurísticas propostas por renomados autores:

`No paradigma da orientação a objeto a análise de requisitos tem sido feita com base num elemento de modelagem da Unified Modeling Language (UML) chamado de Caso de Uso. Embora existam algumas heurísticas propostas para identificação de casos de uso, como as apresentadas em Schneider e Winters (1998), Jacobson et al. (1999), e em Lilly (1999), não existem métodos estabelecidos que tornem esta atividade mais sistemática.` (na seção introdutória)


Em termos de uma proposta particular para servir de apoio a essa ordenação e sistematização das atividades de levantamento de requisitos, **o artigo busca se basear nas propostas apresentadas por Eriksson e Penker (2000) de arquitetura de modelagem juntamente com o uso de modelos e de técnicas tradicionais da UP**.


#### Apresentação Geral das Técnicas de Modelagem

Os autores se reportam a Pressman (2002) para montarem um quadro geral do processo de desenvolvimento de software, que de forma genérica teria 3 grandes fase, **Definição**, **Desenvolvimento** e **Manutenção**.

E além dessa divisão do processo geral em 3 fases, haveria pelo menos 4 modelos de desenvolvimento de software com grande presença na área de TI, o modelo de **ciclo de vida clássico (ou cascata)**, o de **prototipação**, o **espiral** e as **técnicas de Quarta geração**. 


Dentro desse quadro geral apresentado acima, a **análise de requisitos** seria um processo que faria parte da fase de definição do software, sendo responsável principalmente por empregar técnicas para:
1. **Levantar requisitos**
2. **Detalhar os requisitos**
3. **Documentar os requisitos**
4. **Validar os requisitos**


Assim, seria aqui juntamente com processo de análise de requisitos, dentro da fase de definição do software que **os autores colocariam o ponto de intersecção entre a área de domínio do negócio e a área de projeto de software**.


Já com relação à formação de um quadro geral do desenvolvimento da UP enquanto técnica de apoio para ao processo de software, os autores apresentam a seguinte evolução:

`O UP é um processo estabelecido para o desenvolvimento de software que resultou de três décadas de desenvolvimento e uso prático. Jacobson et al. (1999) apresenta as origens do UP desde o processo Objectory (com primeira versão em 1987) passando pelas contribuições do Processo Rational Objectory (em 1997) até o Processo Unificado da Rational (RUP).` (seção 2: Engenharia de Requisitos e o Processo Unificado)


Assim, o UP se utiliza da linguagem da UML e teria como objetivo determinar um conjunto das atividades necessárias para transformar requisitos em sistemas de software, baseando-se para isso em 3 tipos de boas práticas:
1. **Caso de uso**
2. **Centrado em arquitetura**
3. **Processo iterativo e incremental**


Nesses termos, os autores definem que seguindo aquela proposta base e Eriksson e Penker (2000), o **ciclo de vida de software do UP** seria composto de 4 fases sequenciais que, em si mesmas, iterariam dentro do workflow geral do ciclo de vida do software, isto é, das fases de especificação, projeto, implementação, até validação e testes:
1. **Concepção**
2. **Elaboração**
3. **Construção**
4. **Transição**


Finalmente, para encerrar a sua seção do artigo que apresenta as ferramentas a serem aplicadas para a tarefa de sistemar o processo de análise de requisitos, os autores lembram que a própria UML possui flexibilidade em sua concepção ao permitir o desenvolvimento e o uso de extensões para a própria linguagem.

Dessa maneira, é corrente o uso de se extender a UML, maneira controlada, poder ser possível cobrir as possíveis nuances necessárias à aplicação de domínio de análise qualquer: **sendo que neste artigo, os autores extendem a UML para poder aplicá-la ao domínio da análise de negócios**´.


###### Outras Propostas de Extensões para Modelagem de Processos de Negócios com a UML

Como dito na seção anterior, os autores escolheram para este trabalho usar a proposta de Eriksson e Penker (2000) como base para a formulação de sua modelagem de negócio usando da UML.


Contudo, os autores ainda assim trazem, em aparte, outras propostas também feitas no mesmo sentido, de extensão da UML para o domínio de análise de requisitos:

- **Proposta da OMG**:  
 
Já em **1997** a OMG teria publicado um modelo extensivo da UML para modelagem de negócios, sendo que tal documento, ao invés de tentar uma descrição ampla do assunto, prefere descrever **stereotypes** e outros elementos que poderiam ser usados para adaptar o uso da UML para o domínio da modelagem de negócios.


- **Proposta de Marshall**;  

Em **1999** Marshall também apresenta uma proposta de extensão da UML para a modelagem de processos de negócios, propondo o uso de um "meta-modelo" para identificar e descrever conceitos relacionados aos processos de negócios e a UML sendo utilizada para a ilustração desses mesmos conceitos.


E, em geral, segundo os autores, Marshall teria organizado o processo de modelagem do negócio a partir de 4 elementos centrais:

1. **Propósito**
2. **Processo**
3. **Entidade**
4. **Organização**


- **Proposta de Eriksson e Penker**:   

Esta proposta é do ano **2000**, e nela os seus proponentes preferem seguir um sentido mais tradicional da modelagem orientada a objetos, baseando o trabalho no uso de extensões da UML (stereotypes, tagged values e constraints), juntamente com a transposição dos elementos de negócios para a arquitetura de OO, na forma de objetos e dos seus relacionamentos.


Assim, **desse uso da linguagem descritiva da UML, juntamente com a aplicação de uma arquitetura orientada a objetos**, Eriksson e Penker propõe a criação de **Vistas** para representar os modelos do negócio:
1. **Visão do negócio (business vision)**: modela conceitos e objetivos a serem seguidos pela estratégia do negócio.    
    1.1. Identificação dos principais objetivos.   
    1.2. Definição da estrutura de hierarquia entre os objetivos.   
    1.3. Apresentação das dependências existentes entre todos esses objetivos apontados.    
    1.4. É realizado principalmente com base em **entrevistas com stakeholders**.    
    1.5. Produto resultante: **diagrama de modelo de objetivos**.
2. **Processo do negócio (business process)**: modela os processos de negócio e os seus relacionamentos com os recursos a serem seguidos para atingir os objetivos. Especificamente, esta visão abordaria questões como:    
    2.1. quais são as atividades requeridas para se atingirem os objetivos?  
    2.2. quando as atividas são realizadas, e em que ordem?  
    2.3. qual é o objetivo de cada atividade?   
    2.4. como as atividades são realizadas?   
    2.5. que recursos são necessários para realizarr as atividades?   
    2.6. o que é consumido e produzido por atividade?   
    2.7. quem controla as atividades ou processos?    
    2.8. como os processos estão relacionados com a organização do negócio?   
    2.9. como os processos se relacionam com outros processos?   
    2.10. **Atenção**: não há necessidade de haver paridade entre processos de negócios e objetivos do negócio, pois muitos processos auxiliares não estarão diretamente ligados aos objetivos.   
    2.11. Novamente, **entrevistas** como os stakeholders são os meios de buscar informação.   
    2.12. Para modelar as pessoas envolvidas ou com controle/responsabilidade, inclusive no casos em que os processos não estão presos a uma única unidade organizacional, cria-se a **tabela de papéis e responsabilidades**.
    Produto resultante: **diagrama de processos de negócio** e **tabela de papéis e responsabildiades**.
3. **Estrutura do negócio (business structure)**: modela a estrutura dos recursos (físicos, informacionais, humanos).    
    3.1. Essa visão corre paralelamente a de processo de negócios, uma vez que serve para aumentar o entendimento geral dos termos relacionados ao negócio.  
     Produto resultante: **diagramas de modelos de recursos, informações e organização**.
4. **Comportamento do negócio (business behavior)**: modela o comportamento e a interação entre recursos e entre processos.   
     4.1. Esta visão também serve para trazer maior entendimento ao processo de negócio ao longo de transformações dos seus estados.   
     4.2. Esta visão pode fazer uso de um **diagrama de estados de recurso** para oferecer subsídio ao seu trabalho.   
     4.3. Produto resultante: **diagrama de estado de recurso** e **diagrama de interação de recursos e de estados**.



#### Modelando Processos de Negócios com a UML

No início desta nova seção do artigo, os autores começam por buscar definir o que seriam **processos de negócios**, uma vez que eles são justamente aquilo que é buscado para a construção de um modelo viável de especificação de requisitos.

Assim, o artigo define esse processo de negócio como sendo **um conjunto de atividades que tomam/recebem um insumo de entrada, devendo transformá-lo para criar um resultado de saída**.


Aliais, o artigo chega ao ponto de dizer que esse descompasso atual existente entre o modelo do negócio e a grande dificuldade dos gestores de projeto de **dar uma correta delimitação para o sistema de acordo com aqueles processos de negócios da organização** (seção 3: Modelagem de Processos de Negócios com a UML) 


Ademais, fazendo um adendo a este ponto, os autores vão além e dizem que também seria do interesse das próprias empresas e organizações ter o seu modelo de negócio devidamnete descrito e documentado de maneira simples e unificando todas as suas entidades. E, para tal tarefa, os autores propõe mais uma vez o uso da UML e de todas as suas técnicas relacionadas. 


###### A Identificação de Casos de Uso do Negócio

Nesse ponto da modelagem, existe uma divergência geral, quando consideradas aquelas 3 propostas de extensão da UML tratadas anteriormente.


De um lado está a proposta da OMG de 1997 e que depois foi aprimorada pela RUP, enquanto que do outro lado estão aqueles outros 2 proponentes, tanto Marshal (1999), quanto Eriksson e Penker (2000).


E, o ponto de divergência se dá **na escolha do modelo a ser usado para descrever os processos de negócio**, porque enquanto a OMG aponta o uso do modelo de **caso de uso** para tal fim, os outros proponentes dizem que este modelo é restrito por demais e simplifica os processos além da conta, confundindo as figuras **requisitos de usuários** dos **processos de negócios** propriamente ditos.


`á a segunda linha defende que os processos de negócio não são bem representados pelos casos de uso, pois estes servem para representar um domínio fechado correspondente a determinados requisitos de usuários, e que os processos de negócio não podem ser vistos simplificadamente como requisitos de clientes (OMG, 1997). Isto é, um caso de uso nem sempre é equivalente a um processo. Um caso de uso fornece um serviço que é requerido como parte de um processo exterior ao sistema de software.` (seção 4: Identificação de Casos de Uso do Negócio)


Nesse sentido, **os proponentes divergentes da OMG, preferem o uso do modelo de diagramas de atividades para a representação dos processos de negócio no domínio da modelagem de negócio**.


E, seguindo na modelagem como um todo, inserindo o componente **iterativo** dessa arquitetura orientada ao negócio, é preciso trazer de volta aquelas 4 fase propostas por Eriksson e Penker (2000):
1. **Concepção**:  
    1.1. Todos os objetivos reconhecidos devem ser modelados, desde os mais estratégicos, até os de nível de processo de negócio.   
    1.2. Identificação dos principais processos de negócios, relação com recursos, e a sequência correta de execução.   
    1.3. Detalhamento de todos os recursos significativos e também as suas dependências.   
    1.4. Modelar o comportamento de recursos nos casos em que estes sofram alterações ao longo dos processos de negócios.    
    1.5. Definir apenas os responsáveis por cada processo de negócio, sejam eles unidades organizacionais ou funções.
2. **Elaboração**:   
    2.1. Os objetivos devem ser atualizados e esclarecidos.    
    2.2. Aprofundamento do detalhamento para os fluxos de eventos dos processos sendo abordados na iteração atual.   
    2.3. Atualizar detalhamentos de recursos para os fluxos da iteração atual.   
    2.4. Detalhar os diagramas de estado de recursos existentes.   
    2.5. definir os papéis (atores) associados aos eventos que ocorrem no fluxo de evento de cada processo de negócio.
3. **Construção**: segundo os autores, para este não houve mundança em relação à proposta original de Eriksson e Penker (2000).
4. **Transição**: segundo os autores, para este não houve mundança em relação à proposta original de Eriksson e Penker (2000).`


- **Abaixo, um quadro comparativo do autor AZEVEDO (2003) entre a proposta básica de Eriksson e Penker (2000) e o resultado obtido com a revisão proposta pelos autores em um sistema de controle de expedição de uma empresa**:
![quadro-comparativo-final-apresentando-adições-feitas-ao-modelo-eriksson-de-modelagem](/images/articles/development/quadro-comparativo-final-apresentando-adições-feitas-ao-modelo-eriksson-de-modelagem.png)


`[...] que o UP não define adequadamente atividades para a modelagem de negócio. Nele, as atividades começam a partir do levantamento de requisitos e a modelagem de negócio é apenas citada como um possível facilitador para a identificação de possíveis atores do sistema. O RUP apresenta uma proposta de modelagem de negócio através de casos de uso de negócio. Esta proposta, no entanto, apresenta limitações quanto à modelagem de fluxos entre os processos de negócio e quanto ao alinhamento dos casos de uso identificados aos reais objetivos do negócio. No domínio da modelagem de negócio, a técnica de construção de arquiteturas de negócio proposta por Eriksson e Penker (2000) é, dentre as propostas de modelagem de negócio com UML pesquisadas, a única que aborda de forma sistemática a passagem da arquitetura de negócio para uma arquitetura de software que dê suporte à primeira. Eriksson e Penker, porém, não exploram a sistematização desta passagem no contexto de um processo ou metodologia de desenvolvimento de sistemas.` (seção: Considerações Finais)


Assim, concluem os autores, resumindo que a UP é usada sem um forma sistematizada, e embora tenha havido atualizaçẽos com a RUP, esta não identificaria corretamente os processos de negócios dos meros casos de uso de clientes/usuários. Assim, com a proposição de Eriksson e Penker (2000), um caminho concreto é definido, mas que estes autores mesmos não teriam explorado diretamente a questão, de modo que é a isto que os autores se prestaram fazer aqui neste artigo.


###### Artigo de referência: `Aplicação da técnica de modelagem de negócio com uml a processos Iterativos de desenvolvimento de software DE AZEVEDO JÚNIOR, D.P. Aplicação da técnica de modelagem de negócio com uml a processos Iterativos de desenvolvimento de software 2003`


### Principais Ferrramentas  para UML

#### FerramentasComerciais e as 'Free Editions' 

1. MagicDraw
2. Together
3. Poseidon
4. Enterprise Architect
5. Ratinal Rose
6. Jude
7. Omondo Eclipse UML
8. Visio


#### Ferramentas livres BSD e GLP
1. Umbrello
2. ArgoUML
3. Dia
4. BOUML
5. Fajuba
6. StarUML





### Further Reading

[CRC Editor - GuidoIX](https://guidolx.github.io/simple-crc-app/)

[Shedule Complience Risk Assessment Methodology - SCRAM](https://sites.google.com/site/scramsitenew/home)

`PRESSMAN, R. S. Engenharia de Software. 7.ed. Rio de Janeiro: Mcgraw-Hill do Brasil, 2011, a partir do login do aluno, clicando em “Serviços”, “Biblioteca” e em “E-books – Bib. Virtual Universitária”.`

`SOMMERVILLE, I. Engenharia de software. 8. ed. São Paulo: Pearson, 2011, a partir do login do aluno, clicando em “Serviços”, “Biblioteca” e em “E-books – Bib. Virtual Universitária”.`

`JOHANSSON, H. J. et al. Processos de negócios. São Paulo: Pioneira, 1995.`

`SCHNEIDER, G.; WINTERS, J. P. Applying use cases: a practical guide. Boston: Addison-Wesley, 1998.`

`VERNADAT, F. B. Enterprise modeling and integration (EMI): current status and research perspectives. Annual Reviews in Control, v. 26, n. 1, p. 15-25, 2002.` 

`LI, H.; WILLIAMS, T. J. Management of complexity in enterprise integration projects by the PERA methodology. Journal of Intelligent Manufacturing, v. 13, n. 6, p. 417-427, Dec. 2002.`


[]()


### References

1. `AMBLER, S. Essential (Abstract) Use Cases: An Agile Introduction, 2014. Disponível em: <http://agilemodeling.com/artifacts/essentialUseCase.htm>. Acesso em: 21/04/2018.`

2. `BOOCH, G. Object-Oriented Analysis and Design with Applications BOOCH, G. Object-Oriented Analysis and Design with Applications, 1st ed. Benjamin/Cummings, Redwood City, Calif., 1991.`

3. `COAD, P. e YOURDON. Object-Oriented Analysis COAD,P. YOURDON, E. Object-Oriented Analysis, 2nd ed. Yourdon Press, Englewood Cliffs, N.J., 1991.`

4. `DE AZEVEDO, J. DE CAMPOS, R. Definição de requisitos de software baseada numa arquitetura de modelagem de negócios DE AZEVEDO JÚNIOR, D. P.; DE CAMPOS, R. Definição de requisitos de software baseada numa arquitetura de modelagem de negócios. Prod. vol.18 n.1. São Paulo, 2008 https://goo.gl/oznCqq`

5. `DELMIR, Peixoto de A. Junior e CAMPOS, Renato de. Definição de requisitos de software baseada numa arquitetura de modelagem de negócios, 2008.`

7. `ERIKSSON, H. E.; PENKER, M. Business modeling with UML: business patterns at work. New York: John Wiley, 2000.` 

8. 

9. `JACOBSON, I.; BOOCH, G.; RUMBAUGH, J. The Unified Software Development Process. Boston: Addison Wesley, 1999.`

10. `LAGANIERE, R. Domain Analysis 2010. Disponivel em: <http://www.site.uottawa.ca/~laganier/seg2500/domain>. Acesso em: 20/04/2018.`

11. `LILLY, S. Use Case Pitfalls: top 10 problems from real projects using use cases. In: Proceedings of technology of object oriented languages and systems-tools, 1999.` 

12. `MARSHALL, C. Enterprise modeling with UML: designing successful software through business analysis. Reading: Addison-Wesley, 1999`

13. 

14. 

15. `RUMBAUGH, J et altri. Object-Oriented Modeling and Design RUMBAUGH, J. BLAHA, M. PREMERLANI, W. EDDY, F. LORENSEN,W. Object-Oriented Modeling and Design. Prentice Hall, Englewood Cliffs, N.J., 1991.`

16. `SHLAER, S e MELLOR, S.T. -Oriented Systems Analysis: Modeling the World in Data SHLAER, S. MELLOR, S.T. Object-Oriented Systems Analysis: Modeling the World in Data. Yourdon Press, Englewood Cliffs, N.J., 1988` 

17. 

18. `VALÉRIO, A.; SUCCI, G.; FENAROLI, M. Domain Analysis and Framework-based Software Development, ACM SIGAPP Applied Computing Review Volume 5, 2. Ed., Set. 1997 Pg 4-15.`

19. `WAGNER, G. The difference between a Conceptual Class Diagram and a Detailed Class Diagram, 2016. Disponível em: <https://stackoverflow.com/questions/39606683/what-is-the-difference-between-conceptual-class-diagram-and-detailed-class-diagr?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa>. Acesso em: 18/04/2018.`

20. `WIRFS-BROCK, R. et altri. Designing Object-Oriented Software WIRFS-BROCK, R. WILKERSON, B. WIENER, L. Designing Object-Oriented Software. Prentice Hall, Englewood Cliffs, N.J., 1990.`









[]()


[^1]:it-governance-and-management-overview-2022-03-27

[^2]:pmbok-and-project-management-methodologies-2022-03-29

[^3]:itil-service-management-framework-2022-03-30

[^4]:risk-management-overview-2022-04-03

[^5]:information-security-overview-2022-04-05

[^6]:cryptography-steganography-and-cryptanalysis-overview-2022-04-07

[^7]:continuity-plan-and-essentials-for-businesses-overview-2022-04-06

[^8]:open-web-application-project-foundation-owasp-overview-2022-04-18


[^9]:uml-and-object-oriented-modeling-2022-07-02



