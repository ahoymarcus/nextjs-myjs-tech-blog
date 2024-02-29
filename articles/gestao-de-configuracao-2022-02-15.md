---
author: 'Marcus Vinicius Richa'
title: 'Gestão de Configuração'
date: '2022-02-15'
subject: 'management-articles'
description: 'Durante o ciclo de vida de um sistema ou de um software, indo desde do seu design, passando pelo desenvolvimento, testes, implementação e manutenção, ocorrem inúmeras mudanças e uma grande quantidade de código é constituído. Nesse sentido, facilitar o trabalho de reunir todo esse material e de permitir gerir as suas mudanças e versões faz parte de uma prática genérica chamada de Gestão de Configuração.'
---

# Gestão de Configuração

1. ##### Introduction  
2. ##### Software Configuring Manager (SCM)
3. ##### Por que nós Precisamos de Gestão de Configuração?
4. ##### O Processo de SCM     
	4.1. Identificação dos objetos que participam e fazem parte da configuração do software       
	4.2. Controle de versão        
	4.3. Mudança de controle      
	4.4. Auditoria de configuração       
	4.5. Relatório de estado         
5. ##### SCM Tools
6. ##### Further Reading
7. ##### References

### Introduction

Durante o ciclo de vida de um sistema ou de um software, indo desde do seu design, passando pelo desenvolvimento, testes, implementação e manutenção, ocorrem inúmeras mudanças e uma grande quantidade de código é constituído.

Nesse sentido, facilitar todo esse trabalho de reunir todo esse material e de permitir gerir as suas mudanças e versões faz parte de uma prática genérica chamada de **Gestão de Configuração**.

`O gerenciamento de configuração é um processo de manutenção consistente em sistemas, servidores e softwares. É uma forma de se certificar de que o sistema funciona como o esperado enquanto as mudanças são feitas.`
[Red Hat](https://www.redhat.com/pt-br/topics/automation/what-is-configuration-management)


### Software Configuring Manager (SCM)

Para o caso do software, todo esse trabalho para tratar e gerir todo esse produto é feito com o Software Configuring Manager (SCM) e em geral eles oferecem tarefas do tipo: 

- Trabalho colaborativo.
- Identificar mudanças no código.
- Monitorar e controloar mudanças, inclusive de garantir controle sobre a instalação de software externos.
- Garantir uma implementação apropriada de mudanças no código.
- Auditoria e relatórios nas mudanças feitas.
- Realizar backups.
- Facilitar o setup do projeto.


### Por que nós Precisamos de Gestão de Configuração?

Especialmente em trabalhos coletivos e com atualizações feitas rotineiramente, uma grande quantidade de atualizações e mudanças sendo, torna-se preciso fazer a gestão de acomdação de todas essas mudanças de forma centralizada e com controle privilegiado de administrador.

Permite ainda separar do projeto tudo o que não deve participar dele, menos então de afetar o que é produzido. A gestão de configuração também deve facilita a configuração de novos usuários participantes ou as instalações do projeto.

Nesse sentido, inconsistências ou não conformidades no conjunto do código, dependências ou configurações pode afetar a performance do sistema e até representar risco de operação ou segurança.

Ademais, a inexistência desse tipo de controle, junto com o necessario monitoramento extensivo dele, pode inviabilizar o trabaho de administração dos sistemas por não haver informações a serem utilizadas para a realização das tarefas e para a tomada das decisões. 

Assim, seja pela necessidade de se manter o código corrente consistente, é preciso também lidar com as versões anteriores.

`Por exemplo, você pode se certificar de que o seu ambiente de teste corresponde ao de produção. Desse jeito, você terá menos problemas depois que as aplicações forem implantadas do que teria caso os ambientes fossem diferentes. Com o gerenciamento de configuração, é possível replicar com precisão um ambiente, com todas as configurações e softwares corretos, já que você já sabe o que está no ambiente original.`
[Red Hat](https://www.redhat.com/pt-br/topics/automation/what-is-configuration-management)


### O Processo de SCM
  
O processo de software configuring manager enquanto ferramenta tem o objetivo de fazer com as mudanças feita ao código sejam adequadamente passadas aos componentes. E entre as suas tarefas mais básicas:


#### Identificação dos objetos que participam e fazem parte da configuração do software

Trata-se da tarefa de monitoramento da ferramenta que visa reconhecer os ponto de alteração ao código e que devem ser atualizados.

#### Controle de versão 

Este controle permite ao SCM manter um histórico de versões do código, em que cada uma das versões possue seus próprios estados específicos e que não são afetados por atualizações feitas em qualquer das outras versões.

#### Mudança de controle

Esta é uma tarefa complexa que deve permitir ao código gerido trabalhar mesmo quando atualizado colaborativamente, caso em que as mudanças precisam passar pela avaliação de uma pessoa ou de um grupo com poder de administração para decidir qual mudança deve prevalecer ou deve ter prioridade em atualizções que se choquem. 

Ela, além de definir o controle de um usuário especial como administrador e decisor, ela também deve criar o Relatório de Mudança (Change Report) que vai acessorar o administrador a decidir, além de alertar aos usuários quando suas mudanças são negadas. 

Ela também tem importância de segurança, porque ela deve controlar as autorizações dos usuários para cada objeto, além de ser responsável ao final de sincronizar toda a base de código para os usuários participantes.


#### Auditoria de configuração

Esta auditoria de configuração representa tarefas de monitoramento que deve garantir que o código com toda a sua base de configurações e dependências deve permanecer preservado e sob o alcance de todos os usuários que pertencem ao projeto. 

#### Relatório de estado

Esta tarefa é responsável por providenciar relatório de estado claro e atualizado de toda a configuração do código e projeto. 


### SCM Tools

- CFEngine
- Bcfg2 server
- Vagrant
- SmartFrog
- CLEAR CASETOOL (CC)
- SaltStack
- CLEAR QUEST TOOL
- Puppet
- SVN-Subversion
- Perforce
- TortoiseSVN
- IBM Rational Team Concert
- IBM Configuration Management Version
- Razor
- Ansible


### Further Reading

[O que é gerenciamento de configuração? - Red Hat](https://www.redhat.com/pt-br/topics/automation/what-is-configuration-management)

[Software Engineering | System configuration management - GeeksforGeeks](https://www.geeksforgeeks.org/software-engineering-system-configuration-management/)

[Objectives of Software Configuration Management - GeeksforGeeks](https://www.geeksforgeeks.org/objectives-of-software-configuration-management/)


### References


[Software Configuration Management - JavaTPoint](https://www.javatpoint.com/software-configuration-management)

