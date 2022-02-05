---
author: 'Marcus Vinicius Richa'
title: 'Plano de Consultas em Bancos de Dados NoSQL'
date: '2021-06-28'
subject: 'databases-articles'
description: 'Melhorando a Performance dos bancos de dados NoSQL- Um Estudo de Caso.'
---
    
# Banco de Dados NoSQL - Plano de Consultas   

1. #### Melhorando a Performance - Um Estudo de Caso
2. #### Índices   
3. #### Intersecção de Índices
4. #### Estratégias para o uso de Índices
5. #### Leitura Complementar
6. #### Referências

### Melhorando a Performance - Um Estudo de Caso  
  
No primeiro artigo do site Medium.com, o autor Matheus Braga fala das experiências realizadas em sua empresa para lidar com os problemas de performances gerados com o crescimento da base de dados da empresa.    
     
Entre outros meios, está a experiência com o uso dos índices, que são, segundo ele, estruturas opcionais que criariam algum tipo de ordenação ao registros na tabela. Em uma de suas dias para se lidar com a questão, ele diz que:    
    
> "A indexação é mais eficaz para colunas com  cardinalidade alta em relação ao número de linhas  da tabela, com poucos valores duplicados. Uma  coluna que só contenha valores ‘V’ ou ‘F’, por  exemplo, não é uma boa candidata para índice."        
      
Outro ponto importante de se observar, segundo o autor seria o de buscar no SGBD do banco confirmação se os índices estariam mesmo sendo utilizados nas consultas:
      
No MongoDB, por exemplo, existe o comando **EXPLAIN** para se analizar os planos de consulta.
     
E, segundo o autor, tal experiência deu certo e trouxe melhor performance para o banco de dados da empresa.
     
Já no segundo artigo, Henri Cavalcanti diz que ao se falar de performance haveria diferenctes maneiras de se atacar o problema, sendo que um deles seria o de escalar máquinas de forma vertical incorporando mais hardware ao sistema.
      
Contudo, outras maneira estariam mais relacionadas com o funcionamento propriamente dito da aplicação de banco de dados.
      
Por, exemplo, o MongoDB ofereceria diferentes Storage Engines, porque em muitos casos específicos a utilização de um pode ser mais performática que a de outro.
      
Assim, enquanto a storage engine **MMAPV1** faria gravação automáticas em disco, a engine WiredTiger criaria filas para fazer as gravações a cada 60s ou de 2GB de limite de estouro, diminuindo então uso de I/O.
      
- **Observação: contudo, a engine **WiredTiger** exigiria muito mais do processador, segundo o autor...**
  
  
Exemplo do uso do **EXPLAIN** para observar o uso dos índices escolhidos para consulta.
     
E abaixo temos um exemplo da criação de dois índices, sendo um com dois atributos ordenados de forma crescente, e o outro de um atributo de forma decrescente:
       
Outra característica do MongoDB são os índices em Background e em Foreground:
      
1.    Em Background o índice trabalharia de uma forma um pouco menos performática, mas teria um Lock menos severo.
2.    Em Foreground, a forma mais tradicional, a performance é melhorada, mas há um Lock rígido.
      
Diz o autor também que tão importante quanto a presença de um índice é o cuidado para que este esteja bem estruturado em termos de sua cobertura no cache, ou seja, que ele não estoure o cache exigindo acesso ao disco:
   
- **Exemplo: o uso do método stats() do MongoDB para análise das características estruturais de um Índice.**


### Índices
     
Segundo a **Documentação do MongoDB** a Indexação seria uma parte fundamental dos esforços do SGBD dar performance aos trabalhos, porque em pesquisas sem índices, ele precisaria iterar por todos os documentos de uma coleção.
      
Outro ponto importante é que o MongoDB se utiliza de índices com estrutura de árvore binária(B-tree).
      
Tipos de índices:
     
1.  Índice relativo a uma função ObjectId: na forma de uma função Hash cujo valor é único e representativo para uma única coleção.
2.  Single field: engloca um atributo singular próprio de uma coleção.
3.  Complex: estes índices podem englobar dois ou mais atributos de uma coleção.
      

- **Observação: em índices complexos a ordem de definição dos atributos é significativa para o processo de busca.**

    
Exemplo de um índice composto de dois atributos.


### Intersecção de Índices
    
O MongoDB tem a capacidade de trabalhar pesquisas tanto com o uso de índices compostos ou com a utilização da intersecção de dois índices simples para a busca dos dados.


### Estratégias para o uso de Índices
     
Segundo a Documentação do MongoDB, o bom trabalho com índices depende bastante de 3 aspectos:
     
1. O Tipo de Queries que são frequentemente utilizados num banco de dados específico.
2. A Razão de Leitura-Escrita que é frequente num banco de dados específico.
3. A quantidade de Memória Livre no sistema.
     
E se um Índice deixa de ser importante, ele deve ser dropado!!!
 

 
### Leitura Complementar
     
1. [Create Indexes to Support Your Queries](https://docs.mongodb.com/manual/tutorial/create-indexes-to-support-queries/)
2. [Use Indexes to Sort Query Results](https://docs.mongodb.com/manual/tutorial/sort-results-with-indexes/)
3. [Ensure Indexes Fit in RAM](https://docs.mongodb.com/manual/tutorial/ensure-indexes-fit-ram/)
4. [Create Queries that Ensure Selectivity](https://docs.mongodb.com/manual/tutorial/create-queries-that-ensure-selectivity/)
    

    



### Referências   
   
1. [Indexes - MongoDB Documents](https://docs.mongodb.com/manual/indexes/)
2. [Indexing Strategies - MongoDB Documents](https://docs.mongodb.com/manual/applications/indexes/)
3. [Melhorando a performance de consultas MySQL/MongoDB - Medium.com](https://medium.com/eusouelliot/melhorando-a-performance-de-consultas-mysql-mongodb-b467baf31714)
4. [MongoDB — Falando sobre performance com eficiência. - Medium.com](https://medium.com/@henricavalcante/mongodb-falando-sobre-performance-com-efici%C3%AAncia-17f6a979fcdb)
   
     





