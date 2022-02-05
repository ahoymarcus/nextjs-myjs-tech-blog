---
author: 'Marcus Vinicius Richa'
title: 'Google Analytics básico'
date: '2022-02-05'
subject: 'web-development-articles'
description: 'O artigo trata como novos usuários podem criar uma conta, implementar um código de acompanhamento e configurar filtros de dados. Navegar na interface e nos relatórios e configurar painéis e atalhos. O curso também ensina a analisar relatórios básicos.'
---

# Google Analytics

1. #### Introdução
2. #### Estrutura Básica da Aplicação
3. #### Acesso e Autorizações
4. #### A Interface Gráfica da Aplicação
5. #### Campanhas de Marketing
6. #### Leitura Complementar
7. #### Referências

### Introdução

O Google Analytics é uma ferramenta capaz de gerar dados sobre uma plataforma, como uma webpage ou webapp, criando uma série de funcionalidades encima desses dados para serem analisados e gerarem decisão.

Outro ponto fundamental é que a ferramenta é capaz de criar dados categorizados permitindo enriquecer as análises, como, por exemplo, ajudar a determinar os modos de interação dos usuários no site.

Num site de e-commerce, por exemplo, poderiam ser criados quadros para definir momentos como:

1. Aquisição (Aquisition): ou seja, a chegada do usuário ao site e como ela se deu.   
2. Comportamento (Behavior): ou a forma de interação do usuário com a plataforma.
3. Conversão (Conversion): que são as diferentes formas de transações realizadas pelo user no site.


Em termos gerais de funcionamento, a plataforma de analytics da Google se conecta a um site ou app por meio de um código ou script de JavaScript, que passa a contabilizar uma série de métricas em medida de Sessões (Sessions) que se iniciam com a chegada do usuário à pagina com o código JavaScript, coletando inclusive:

- Linguagem
- Tipo do browser
- Dispositivo
- Sistema Operacional
- Origem da conexão (Traffic Source)

### Configurando uma Conta


Uma conta de analytics no Google pode receber uma definição de **Organização** para agrupar dentro dela todo o conjunto de **Contas** para uma operação ou negócio.

Por sua vez, as contas permitem a criação de uma ou mais **Propriedades**, cada uma com uma ou mais **Views** por sua vez permite a criação de **Filtros** e **Goals** para cada view.



**Nota:** 

- Separar diversas propriedades em uma conta, permite especificar as leituras realizadas de forma mais categorizada. Contudo, isto também vai impedir a agregação dos dados entre as categorias.

- Observe também que a coleta de tados e a posterior transformação desses dados é sempre considerado temporalmente para para frente. Ou seja, que quando um filtro é aplicado selecionando e descartando potenciais dados, os resultados potenciais no passado deixam de poder ser repetidos. 


![esquema-representando-a-operacao-do-google-analytics](/images/articles/web-development/google-analytics-basico-esquema-representando-a-operacao-do-google-analytics.png)



### Acesso e Autorizações


As autorizações podem ser feitas seguindo o próprio esquema da operação do Google Analytics, além de poderem ser herdadas. Ou seja, uma autorização de Administrador vai herdar também por sobre a conta, propriedades, etc...


![esquema-representando-a-operacao-do-google-analytics](/images/articles/web-development/google-analytics-basico-esquema-de-autorizacao-dentro-do-google-analytics.png)



### Visão Geral da Ferramenta


De maneira geral todos os relatórios da ferramenta incluem uma visão geral, com resumos para as principais informações de suas seções e na sequência sub-relatórios específicos.   

Assim, relatórios de Tempo Real, relatórios voltados para o público-alvo da aplicação, de Aquisição (Ads e Mídias Sociais, por exemplo), de Comportamento e de Conversões (ou fechamento de negócios), tudo isso podendo ser ainda receber a aplicação de datas e intervalos de datas.

Ademais, é possível a criação de dashboards customizados capazes de reunir as informações mais importantes do modelo de negócio ao qual se liga o site, ou mesmo criar grupos de dashboards temáticos, etc...


### Campanhas de Marketing


A aplicação permite o acompanhamento de várias formass de campanhas de marketing, como por exemplo:

1. Ads comprados em resultados de pesquisa.
2. Banners utilizados em sites de conteúdo.
3. Ads em mídias sociais.


E para o acompanhamento específico de cada uma campanhas criadas, o Google Analytics cria **Tags** a partir de parâmetros adicionas na URL do link de aquisição ou entrada no site, passando a associar todas essas informações de acesso de usuário, comprtamento, etc, com os dados para as campanhas.


Algumas Tags padrões da ferramenta, sendo que as 3 primeiras são tags já definidas por padrão:

- Medium: é o tipo de mecanismo utilizado para a campanha, como por meio de e-mail, anúncios pagos, etc...
- Source: é a referência de origem ou de entrada no site, como mecanismo de pesquisa ou um link de ad.
- Campaign: o nome da campanha
- Content: que indica um versionamento para as campanhas.
- Term: a palavra chave em campanhas por pesquisas pagas.
  	 
```
https://www.googlemerchandisestore.com/?utm_source=google&utm_medium=email&campaign=2015-back-to-school&utm_content=version1-10dollars-off&utm_term=android-doll
```



### Leitura Complementar

[Cursos da instituição Analytics Academy](https://analytics.google.com/analytics/academy/)



### Referências

[ Google Analytics para iniciantes - Google Academy](https://analytics.google.com/analytics/academy/course/6)
[Treinamento e suporte do Google Analytics](https://support.google.com/analytics/answer/4553001?hl=pt-BR)

