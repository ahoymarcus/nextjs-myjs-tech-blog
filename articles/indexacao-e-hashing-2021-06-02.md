---
author: 'Marcus Vinicius Richa'
title: 'Indexação e Hashing'
date: '2021-06-02'
subject: 'databases-articles'
description: 'Otimização de bancos de dados na obra de Abraham
Silberschatz.'
---
   
# Indexação e Hashing  

1. ##### Introdução
2. ##### Índices ordenados
	2.1. Índice Denso    
	2.2. Índice Esparso    
	2.3. Índices Multinível   
	2.4. Índices Secundários    
	2.5. Índice de Árvore Binária   
3. ##### Quanto ao uso de Índices, observe ainda
4. ##### Índices de hash
5. ##### Definindo um Índice com SQL
6. ##### Referências

### Introdução

O autor inicia a apresentação do assunto propondo que não é eficiente para o banco de dados precisar percorrer toda uma tabela ou conjunto de tabelas para varrer em busca de um dado.


Ao contrário, para poder alcançar resultados melhores seria preciso que ele pudesse se dirigir diretamente para o dado que está sendo consultado, e que tal forma de acesso, segundo o autor, funcionaria através da associação desses dados a arquivos que passariam a paginar os dados de forma ordenada em índice.
  
Assim, além do fato da indexação funcionar ordenando os dados para o acesso, ela também guarda apenas um pequeno resumo dos em questão. Finalmente, como em alguns casos o número de ocorrências sendo indexadas pode ainda ser muito grande, existiriam técnicas possíveis de serem utilizadas para melhorar ainda mais os resultados.  

De modo geral um índice funcionaria como “um ponteiro para um registro” (323), que levaria ao bloco de disco onde ele estaria armazenado, juntamente com um valor de deslocamento para a posição correta dentro daquele bloco de disco.

Ademais, juntamente com essa questão, diz o autor que alguns conceitos importantes passam a fazer parte desta prática de indexação:

- Tempo de acesso: trata-se de quantificar o tempo gasto
utilizando-se a técnica de indexação.     

- Tempo de Inserção: aqui além de se considerar os tempos de inserção, falamos também do tempo necessário para se reestruturar as tabelas de índices.    
  
- Tempo de Exclusão: também aqui além do tempo propriamente dito, temos que considerar o tempo para reestruturação das tabelas de índices.    
   
- Espaço adicional: também é considerado para manter o
espaço ocupado pelo índice dentro da razoabilidade.   


A princípio o autor fala de dois tipos básicos de
índices:

### Índices ordenados:  

Criam uma associação para referência entre uma chave de busca que foi definida, com os registros que estão contidos dentro da sua definição. Assim, essa definição da busca pode ser alguma informação como nome ou algum valor que está ordenado pelo índice.


![Índices ordenados](/images/articles/databases/indexação-e-hashing-indices-secundarios.png)


Ainda dentro do tópico de Índices Ordenados, temos:

1. **Índice denso**: é um tipo de índice de agrupamento
que possui uma chave de busca apontada para cada um dos tipos de agrupamentos realizados na ordenação. Assim, começando no 1º valor daquele grupo, o índice denso vai iterar pelos demais valores do grupo até alcançar o registro desejado.    
  
![Índice denso](/images/articles/databases/indexação-e-hashing-indice-denso.png)	
	
	
2. **Índice esparso**: é “criado somente para alguns
registros”, de modo que com a chave de busca apontando para o índice com o maior valor de entrada, percorrendo, então, até o valor do registro procurado.

Embora índices densos tenham vantagem de performance de busca, ele tem também penalidades com relação à espaço em disco e em manutenção do arquivo de índice em inserções e exclusões.

Ademais, índices esparsos são perfeitos para fazer o
acesso de entrada aos blocos de dados, desde que eles caibam em memória (isto é, não estourem o cache), porque uma vez em cache, os blocos são percorridos com grande velocidade.

![Índice esparso](/images/articles/databases/indexação-e-hashing-indice-esparso.png)

3. **Índices Multinível**: estes índices são importantes, porque até mesmo os índices esparsos podem gerar arquivos muito grandes em grandes massas de dados, de modo através da criação de uma estrutura do tipo Árvore Binária para estruturar os índices em níveis, isto pode trazer grandes benefícios.

Assim, a estrutura de árvore gera índices externos e internos, numa quantidade de níveis proporcional às necessidades da massa de dados. De qualquer forma, independentemente do tipo de índice utilizado, haverá sempre a necessidade de alguma manutenção do arquivo de índice em casos de inserção e exclusão.

4. **Índices Secundários**: segundo Abraham, estes índices secundários precisam ser densos, porque estes índices não estariam ordenados, de modo de que os valores que não estivessem devidamente agrupados e com as suas chaves de acesso definidas, poderiam estar espalhados em qualquer parte do arquivo, exigindo assim uma varredura completa nele.

Os índices secundários podem ser uma ferramenta às mãos do dba para melhorar a busca por dados de uso frequente, lembrando apenas que aqui também incorrem as mesmas penalidades de manutenção vistas para índices densos:


![Índice secundario](/images/articles/databases/indexação-e-hashing-indice-secundario.png)

5. **Arquivos de Índice de Árvore Binária**: este tipo de estrutura de índice tem muita importância pelo fato de que as estruturas indexadas tendem a sofrer muito com degradação à medida que crescem seus arquivos de índices. Ademais é sempre muito custoso fazer a sua manutenção, especialmente quando é feito com frequência.

Contudo, veja que há diferenças entre os tipos de árvores binárias utilizadas aqui para acesso de dados e para aquelas utilizadas em memória. As árvores binárias de acesso de dados tendem a ter muito mais metadados e ponteiros e portanto ocuparem mais blocos de disco.

Árvores B. precisam também ser rebalanceadas, isto é, passarem por manutenção em inserções e exclusões, mas o processo não é tão custoso, especialmente quando considerado em função do aumento de performance.

![Índice arvore-binaria](/images/articles/databases/indexação-e-hashing-indice-arvore-binaria.png)


### Quanto ao uso de Índices, observe ainda

- Índices sobre chaves múltiplas
- chaves de busca não exclusivas
- Índices de cobertura
- ìndices secundários e relocação de registros. 


### Índices de hash

A utilização de Hashing está muito ligada às tentativas de se evitar certas práticas comumente relacionadas com a utilização da indexação:

1. Organização sequencial dos arquivos de índices;
2. O uso de Busca Binária para a localização dos índices;

A grosso modo, o hashing se utiliza de uma unidade de armazenamento chamada de Bucket, que normalmente equivale a um bloco do disco, mas que pode variar para mais ou para menos.


Ademais, o hashing também implica no uso de uma função do tipo Hash(K) com retorno de B;, em que ‘K’ indicaria o conjunto de valores das chaves e ‘B’ o conjunto dos endereços que apontam ao bucket.

Assim, utilizando-se daquela função, a inserção de um registro num bucket significaria atribuir um endereço disponível no bucket por meio de hash(k1) para um novo registro, enquanto que uma pesquisa significaria acessar o mesmo endereço a partir de hash(k1) para leitura do registro.

E finalmente, no mesmo sentido, uma exclusão seria simplesmente o uso da função hash(k1) para acessar e excluir um registro no endereço do bucket definido pelo hash.

Contudo, além de ser usado para Organização de Arquivos de Hash, o hashing também pode ser usado para Organização de Índice de Hash, de modo que essa técnica funcionaria, então, tanto como um sistema de armazenamento de dados, quanto de um sistema de índices de pesquisa hash.

E da mesma forma que em árvores binárias, uma função de hash ideal pede um balanceamento em que se deve considerar:

1. Distribuição uniforme do número de valores aos buckets
existentes.
2. Distribuição aleatória, em que as atribuições dos valores
de hash não haveriam de estar definidos externamente à
própria função, como, por exemplo, na ordenação de
registros de uma tabela.

Assim, o uso de uma função hash balanceada permite se alcançar um projeto de armazenamento que garante a proporcionalidade no uso dos buckets e portanto um tempo de pesquisa médio que além de pequeno, independe “do número de chaves de busca no arquivo”. (p. 341)

Uma tarefa importante ao se trabalhar com hashing é a de como tratar os eventos de estouros de bucket, lembrando que num sistema balanceado o uso dos buckets deve ser proporcional, não apenas à distribuição dos valores da função de hash, bem como à própria capacidade de armazenamento dos buckets.

Dito isto, pode ocorrer que funções desbalanceadas, que não dividem os valores proporcionalmente ou que não definiram a corretamente a capacidade de armazenamento levem à ocorrência desses eventos de estouro de buckets.

Abaixo um exemplo do uso de hashing para organizar
índices, inclusive do uso de um bucket de estouro para
Bucket3:

![Índice de hashing](/images/articles/databases/indexação-e-hashing-indice-de-hashing.png)


Contudo, essa forma inicial de se trabalhar com hashing, do ponto de vista da definição da capacidade de armazenamento é muito propensa a inconvenientes:

1. Buckets lotados resultam e perda de performance;
2. Uso de buckets muito grandes na expectativa do
crescimento do banco de dados.
3. Reorganização periódica da estrutura de Hash do banco de
dados. Mas esta operação é trabalhosa, além de tornar o
banco indisponível enquanto ela estiver acontecendo.


Assim, para contratar essa 1ª técnica estática, criou-se um sistema Dinâmico ou Extensível de hashing. Aqui, de modo geral, os buckets são reorganizados em termos de unidade, o que permite manter a consistência de espaço do banco e diminuir o overheading de reorganização para manter o banco de dados disponível.

E segundo o autor, além de todas aquelas vantagens do uso do hash dinâmico, apenas uma desvantagem é citada, que é uma operação de referência extra ou secundária para a pesquisa passando primeiro pela tabela de endereços de hash para depois seguir em direção aos buckets.

Contudo, como afirma o autor, essa operação adicional não seria custosa demais, daria pouca vantagem em relação à pesquisa com hash estático.

E abaixo um exemplo do crescimento da tabela de endereços seguindo-se o preenchimento de uma tabela de banco de dados:

![estrutura-de-indices-de-hashing-parte1](/images/articles/databases/indexação-e-hashing-estrutura-de-indices-de-hashing-parte1.png)

![estrutura-de-indices-de-hashing-parte2](/images/articles/databases/indexação-e-hashing-estrutura-de-indices-de-hashing-parte2.png)

![estrutura-de-indices-de-hashing-parte3](/images/articles/databases/indexação-e-hashing-estrutura-de-indices-de-hashing-parte3.png)

![estrutura-de-indices-de-hashing-parte4](/images/articles/databases/indexação-e-hashing-estrutura-de-indices-de-hashing-parte4.png)



Segundo o autor, em termos de projetos, a escolha dos tipos de estruturas utilizados por um banco de dados deveria ser considerada a partir da situação concreta. Ademais, em termos de custos, ele também diz que não seria conveniente querer ter à disposição de uso para todas as soluções, porque isso aumenta o número de códigos e de códigos não usados, etc...

>[!Observação]

![observações-para-uso-de-indices](/images/articles/databases/indexação-e-hashing-observações-para-uso-de-indices.png)


Assim, com relação ao 4º ponto levantado pelo autor,
consultas que envolvem intervalos não são adequadas ao hashing, porque devido ao caráter aleatório das distribuições dos valores, seria necessário uma leitura completa, pois não haveria uma transição eficiente de um bucket ao próximo e assim por diante:

```
SELECT a1, a2, ..., An
FROM r
WHERE A1 <= c2 AND A1 >= c1
```

Mas quando a recuperação implica em trazer toda a massa de dados, então hashing é muito mais direto:

```
SELECT A1, A2, ..., An
FROM r
WHERE A1 = c
```


Finalmente, o autor termina o capítulo falando sobre a Operação de Mapa de Bits, que segundo ele são operações extremamente rápidas porque trabalham diretamente mapeando bits dos blocos do disco, mas que do outro lado geram complicações na hora de testar a consistência dos dados mapeados caso tenha ocorrido operações de alteração no banco (inserção ou exclusão).

De qualquer forma, essa técnica seria bastante útil para operações baseadas em análises de dados, como as que envolvem dados definidos em categorias (categorias de rendas, categoria de sexo, etc...), que mapeados podem ser cruzados na leitura de todos de uma vez.


### Definindo um Índice com SQL


Segundo o Abraham, embora exista um certo consenso na no
uso de uma sintaxe para tal operação, não existe uma
padronização formal da comunidade, sendo um índice criado com
a palavra CREATE INDEX e excluído com DROP INDEX:

```
CREATE INDEX <nome-índice>
<nome-relação> (<lista-atributos>);
DROP INDEX <nome-índice>;
```

![definindo indices com sql](/images/articles/databases/indexação-e-hashing-definindo-um-indices-sql.png)

Mas já com relação ao modo como são criados e mantidos os índices propriamente ditos, a falta de padronização é ainda maior, cabendo a cada produto a definição de seus próprios requisitos.


### Referências

1. Sistema de Banco de Dados - Abraham Silberschatz - Cap. 12


