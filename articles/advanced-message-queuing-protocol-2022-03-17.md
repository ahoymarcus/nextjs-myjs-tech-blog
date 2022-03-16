---
author: 'Marcus Vinicius Richa'
title: 'Advanced Message Queuing Protocol (AMQP)'
date: '2022-03-17'
subject: 'development-articles'
description: 'AMQP was standardized in 2012, and it provides a platform-agnostic method for ensuring information safely transported between applications, and it is used in a variaty of areas like financial front office trading, ocean observation, transportation, smart grid, computer-generated animation, online gaming, etc.'
---

# Advanced Message Queuing Protocol (AMQP)

1. ##### Introduction
2. ##### The Broker Architecture
3. ##### The Model in Brief
4. #####
The Broker Architecture 
The Model in Brief 
Exchanges and Exchanges Types
    Default exchange 
    Direct Exchange
    Fanout Exchange 
    Topic Exchange 
Queues
2. ##### Further Reading
3. ##### References

### Introduction
 
According to the [Oasis-open.org](https://www.oasis-open.org/news/pr/iso-and-iec-approve-oasis-amqp-advanced-message-queuing-protocol/), AMQP was standardized in 2012, and it provides a platform-agnostic method for ensuring information safely transported between applications, and it is used in a variaty of areas like financial front office trading, ocean observation, transportation, smart grid, computer-generated animation, online gaming, etc.


Also, there are OSs that include AMQP implementations, and many other application frameworks which are AMQP-aware, including Cloud-based and embedded ones.


The RabbitMQ is a project from Erlang, and it is a important product in the market that uses the AMQP protocol for dealing with the tranfering of messages in a fast and reliable way. RabbitMQ is a open-source messagery server, and it states that the AMQP protocol `enables conforming client applications to communicate with corforming messaging middleware brokers`. [RabbitMQ](https://www.rabbitmq.com/tutorials/amqp-concepts.html)
 
 
### The Broker Architecture 

The messaging brokers receive messages from publishers, and this this messages are either directly or through some layer routed to the consumers. Also, since this is a network protocol, publishers and consumers can all reside on different machines.    

-  read more about the Broker Architecture in these articles:
- `Software Architecture Patterns - Overview`[¹]
- `Software Architecture and Design` [²] 
 

 
### The Model in Brief 
 
In a netshell, the AMQL Model has publishers posting their messages at some intermediary layer or component that would exchange and queue the messages, which would then be available to the consumers through subscriptions or through fetch/pull operations on demand.

And there are different features that could be extended to allow the applications deal with errors or problems with the communication and with acknowledgments from the client.
 

There are 3 basic entities found in this model:

1. **Exchanges**
2. **Queues**
3. **Bindings**  


### Exchanges and Exchanges Types
 
 Exchanges are AMQP entities where messages are sent to, and they in turn route those messages into 0 or many queues. These exchanges entities have some attributes like:
 
 1. **Name**
 2. **Durability**: the exchanges survive the broker restart
 3. **Auto-delete**: the exchange is deleted when the last queue is unbound from it.
 4. **Arguments**: this one is optinal, and it is used by plugins for broker-specific features.
 
 
#### Default exchange 
 
This type of exchange may appear to be direct, because it has a empty string as the name property, which comes predefined by the broker. And this is a simpler disposition that may be useful to simpler applications:

Every `queue that is created is automatically bound to it with a routing key which is the same as the queue name`. [RabbitMQ](https://www.rabbitmq.com/tutorials/amqp-concepts.html)
 
 
#### Direct Exchange

This type may be more common to unicast messages and to be use to distribute tasks to workers, and the load are balanced between consumers and not queues. Though, it still able to be used for multicasting messages.

And how it works:

- A queue binds to the exchange with a routing key K.
- When a new message with routing key R arrives at the direct exchange, the exchange routes it to the queue if K = R.

![example-of-direct-queue-in-amqp-protocol](/images/articles/development/[example-of-direct-queue-in-amqp-protocol.png)
 
 
#### Fanout Exchange 

In this type the exchange routes the messages to all the queues that are bound to it, and it is the task of the queue to ignore different routing keys. And this this case the Fanout Exchange is ideal for broadcast routing messages.
 

Some kind of applications that could use this type of exchange:

- Massively multi-player online (MMO).
- Sports new sites to distribute score updates for clients in real-time.
- Distributed systems to broadcast states and configuration updates.
- Group chats to distribute messages between participants.
 
 
#### Topic Exchange 
 
This type can route message to one of many queues based on a match between a message routing key and the pattern that was used to bind a queue to an exchange.
 
And the Topic Exchanges have a very broad set of use cases, because whenever `a problem involves multiple consumers/applications that selectively choose which type of messages they want to receive, the use of topic exchanges should be considered` [RabbitMQ](https://www.rabbitmq.com/tutorials/amqp-concepts.html)
 
 
Some kind of applications that could use this type of exchange:

- Distributing data relevant to specific geographic location, for example, points of sale.
- Background task processing done by multiple workers, each capable of handling specific set of tasks.
- Stocks price updates (and updates on other kinds of financial data)
- News updates that involve categorization of tagging (for example, ony for a particular sport or team)
- Orchestration of services of different kinds in the cloud.
- Distributed architecture/OS-specific software or packaging where each builder can handle only one architecture or OS.


#### Headers Exchange

This are exchanges that are designed for routing on multiple attributes that are more easily expressed as message headers than a routing key. So, here, the routing key is ignored, and the match is taken from the value of the header and the value specified upon the binding.

It is possible to bind a queue to a headers exchange using more than one header for matching. In this case, the broker needs one more piece of information from the application developer, namely, should it consider messages with any of the headers matching, or all of them? This is what the "x-match" binding argument is for. When the "x-match" argument is set to "any", just one matching header value is sufficient. Alternatively, setting "x-match" to "all" mandates that all the values must match.


`Headers exchanges can be looked upon as "direct exchanges on steroids". Because they route based on header values, they can be used as direct exchanges where the routing key does not have to be a string; it could be an integer or a hash (dictionary) for example.` [RabbitMQ](https://www.rabbitmq.com/tutorials/amqp-concepts.html)
 

- **note**: headers beginning with the string 'x-' will not be used to evaluate matches.


### Queues
 
 
 
 

 
AMQP 0-9-1 Model Explained - RabbitMQ - https://www.rabbitmq.com/tutorials/amqp-concepts.html

### Further Reading

[AMQP - amqp.org]( https://www.amqp.org/)

 [ISO and IEC Approve OASIS AMQP Advanced Message Queuing Protocol](https://www.oasis-open.org/news/pr/iso-and-iec-approve-oasis-amqp-advanced-message-queuing-protocol/)

 [RabbitMQ: o que é e como utilizar - Cedro Blog](https://blog.cedrotech.com/rabbitmq-o-que-e-e-como-utilizar)
 
### References

[]()


[¹]:software-architecture-patterns-overview-2022-02-18

[²]:software-architecture-and-design-2022-02-22


