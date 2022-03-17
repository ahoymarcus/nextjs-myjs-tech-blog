---
author: 'Marcus Vinicius Richa'
title: 'Modelo Nacional de Interoperabilidade (MNI)'
date: '2022-03-14'
subject: 'web-dev-articles'
description: 'Segundo o tutorial online do PJe, o Modelo Nacional de interoperabilidade (MNI) é definido como a integração entre os sistemas, por meio da tecnologia Web Service, para garantir interoperabilidade, junto com segurança, para os processos judiciais, permitindo o intercâmbio de dados de maneira independente de tecnologias individuais sendo utilizadas, além de estar disponível para acesso por pessoas físicas, jurídicas ou por entidades.'
---

# Modelo Nacional de Interoperabilidade (MNI)

1. ##### Introduction
2. ##### Further Reading
3. ##### References

### Introduction
 
Segundo o manual técnico do PJERJ para o MNI, o Modelo Nacional de Interoperabilidade se destina a normatizar a transmissão de dados entre os orgãos e instituições relacionadas à Justiça no Brasil. 

E no tutorial online do [PJe](https://www.pje.jus.br/wiki/index.php/Tutorial_MNI), o MNI é definido como a integração entre os sistemas, por meio da tecnologia 'Web Service', para garantir interoperabilidade, junto com segurança, para os processos judiciais, permitindo o intercâmbio de dados de maneira independente de tecnologias individuais sendo utilizadas, além de estar disponível para acesso por pessoas físicas, jurídicas ou por entidades.


Ademais, o tutorial PJe também especifica que o padrão sendo utilizado é o do Web Service Description Language (WSDL), que é a linguagem baseada em XML para descrição de web services.   

- Leia mais sobre o protocolo WSDL neste artigo:
- `Web Services Technologies - Overview` [¹]


O PJe, por exemplo, explica que possui a implementação para 4 dos 6 serviços previstos no MNI:

1. **entregarManifestaçãoProcessual**
2. **consultrProcesso**
3. **consultarAvisosPendentes**
4. **consultarTeorComunicacao**


E cada qual dos serviços ainda se divide em operações mais específicas. Por exemplo, o serviço **entregarManifestaçãoProcessual** do PJe permite ao cliente as seguintes atividades como, Peticionamento, Entrega avulsa, e Resposta de expediente. E assim por diante.


Outro exemplo no funcionamento do modelo seria a criação de um Processo, em que o tutorial do PJe traz ao desenvolvedor a descrição de todos os parâmetros utilizados, descrevendo ainda seu tipo, se é obrigatório ou não, com uma breve descrição dele.

Novamente, o tutorial traz a descrição dos parâmetros de saída, junto com o seu tipo, além de uma descição breve. Abaixo temos um exemplo dessa especificação e de como ela é feita:

| Parâmetro  | Tipo | Descrição |   
| --------------  | ------ | ------------- |   
| sucesso     | bollean  |  	Indica se houve sucesso na requisição. |   
| mensagem | string  | Mensagem que indica o retorno correto da requisição |   
| protocoloRecebimento  | int | Número do processo que foi gerado na requisição. |    
| dataOperacao | string | Data e hora da criação do processo. |   
| recibo | xs:base64Binary| Comprovante do protocolo do processo, que contém os dados básicos do processo. |   


E, da mesma forma, todos os demais serviços no sistema implementado pela PJe para o MNI traz todas essas descrições, dos tipos de serviços, com os parâmetros para entrada e para saída.


Já ao final do tutorial, a PJe repete o processo para apresentar também o processo para **recuperarInformacoesFluxo** que dentro do serviço web vai fazer todo o tratamento de erro para o sistema.


### Further Reading

[Modelo Nacional de Interoperabilidade - CNJ](https://www.cnj.jus.br/tecnologia-da-informacao-e-comunicacao/comite-nacional-de-gestao-de-tecnologia-da-informacao-e-comunicacao-do-poder-judiciario/modelo-nacional-de-interoperabilidade/)

### References

[Modelo Nacional de Interoperabilidade (MNI) - Manual Técnico](http://www.tjrj.jus.br/web/guest/intrav2/manuais/manuais/manuais-e-videos-publicos/mni-modelo-nacional-de-interoperabilidade)

[Tutorial MNI - PJe](https://www.pje.jus.br/wiki/index.php/Tutorial_MNI)


[¹]:web-services-technologies-overview-2022-03-11


