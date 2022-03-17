---
author: 'Marcus Vinicius Richa'
title: 'Advanced Message Queuing Protocol (AMQP)'
date: '2022-03-16'
subject: 'development-articles'
description: 'AMQP was standardized in 2012, and it provides a platform-agnostic method for ensuring information safely transported between applications, and it is used in a variaty of areas like financial front office trading, ocean observation, transportation, smart grid, computer-generated animation, online gaming, etc.'
---

# Advanced Message Queuing Protocol (AMQP)

1. ##### Introduction
2. ##### The Broker Architecture
3. ##### The Model in Brief
    3.1. Exchanges and Exchanges Types   
    3.2. Queues   
    3.3. Bidings
4. ##### Consumers
5. ##### Messages
    5.1. Message Acknowledgements   
    5.2. Prefetching Messages   
    5.3. Message Attributes and Payload
6. ##### Connections
7. ##### Channels
8. ##### Virtual Hosts
9. ##### AMQP Extensions
10. ##### AMQP Clients Ecosystem
11. ##### Further Reading
12. ##### References

### Introduction
 
According to the [Oasis-open.org](https://www.oasis-open.org/news/pr/iso-and-iec-approve-oasis-amqp-advanced-message-queuing-protocol/), AMQP was standardized in 2012, and it provides a platform-agnostic method for ensuring information safely transported between applications, and it is used in a variaty of areas like financial front office trading, ocean observation, transportation, smart grid, computer-generated animation, online gaming, etc.


Also, there are OSs that include AMQP implementations, and many other application frameworks which are AMQP-aware, including Cloud-based and embedded ones.


The RabbitMQ is a project from Erlang, and it is a important product in the market that uses the AMQP protocol for dealing with the tranfering of messages in a fast and reliable way. RabbitMQ is a open-source messagery server, and it states that the AMQP protocol `enables conforming client applications to communicate with corforming messaging middleware brokers`. [RabbitMQ](https://www.rabbitmq.com/tutorials/amqp-concepts.html)
 
 
- Read more about the RabbitMQ software in this article:
- `RabbitMQ - Overview` [¹]
 
### The Broker Architecture 

The messaging brokers receive messages from publishers, and this this messages are either directly or through some layer routed to the consumers. Also, since this is a network protocol, publishers and consumers can all reside on different machines.    

-  read more about the Broker Architecture in these articles:
- `Software Architecture Patterns - Overview` [²]
- `Software Architecture and Design` [³]
 

 
### The Model in Brief 
 
In a netshell, the AMQL Model has publishers posting their messages at some intermediary layer or component that would exchange and queue the messages, which would then be available to the consumers through subscriptions or through fetch/pull operations on demand.

And there are different features that could be extended to allow the applications deal with errors or problems with the communication and with acknowledgments from the client.
 

There are 3 basic entities found in this model:

1. **Exchanges**
2. **Queues**
3. **Bindings**


#### Exchanges and Exchanges Types

Exchanges are AMQP entities where messages are sent to, and they in turn route those messages into 0 or many queues. These exchanges entities have some attributes like:

1. **Name**
2. **Durability**: the exchanges survive the broker restart.
3. **Auto-delete**: the exchange is deleted when the last queue is unbound from it.
4. **Arguments**: this one is optinal, and it is used by plugins for broker-specific features.


###### Default exchange 
 
This type of exchange may appear to be direct, because it has a empty string as the name property, which comes predefined by the broker. And this is a simpler disposition that may be useful to simpler applications:

Every `queue that is created is automatically bound to it with a routing key which is the same as the queue name`. [RabbitMQ](https://www.rabbitmq.com/tutorials/amqp-concepts.html)


###### Direct Exchange

This type may be more common to unicast messages and to be use to distribute tasks to workers, and the load are balanced between consumers and not queues. Though, it still able to be used for multicasting messages.

And how it works:

- A queue binds to the exchange with a routing key K.
- When a new message with routing key R arrives at the direct exchange, the exchange routes it to the queue if K = R.

![example-of-direct-queue-in-amqp-protocol](/images/articles/development/example-of-direct-queue-in-amqp-protocol.png)


###### Fanout Exchange 

In this type the exchange routes the messages to all the queues that are bound to it, and it is the task of the queue to ignore different routing keys. And this this case the Fanout Exchange is ideal for broadcast routing messages.
 

Some kind of applications that could use this type of exchange:

- Massively multi-player online (MMO).
- Sports new sites to distribute score updates for clients in real-time.
- Distributed systems to broadcast states and configuration updates.
- Group chats to distribute messages between participants.


###### Topic Exchange 
 
This type can route message to one of many queues based on a match between a message routing key and the pattern that was used to bind a queue to an exchange.

And the Topic Exchanges have a very broad set of use cases, because whenever `a problem involves multiple consumers/applications that selectively choose which type of messages they want to receive, the use of topic exchanges should be considered` [RabbitMQ](https://www.rabbitmq.com/tutorials/amqp-concepts.html)


Some kind of applications that could use this type of exchange:

1. Distributing data relevant to specific geographic location, for example, points of sale.
2. Background task processing done by multiple workers, each capable of handling specific set of tasks.
3. Stocks price updates (and updates on other kinds of financial data)
4. News updates that involve categorization of tagging (for example, ony for a particular sport or team)
5. Orchestration of services of different kinds in the cloud.
6. Distributed architecture/OS-specific software or packaging where each builder can handle only one architecture or OS.


###### Headers Exchange

This are exchanges that are designed for routing on multiple attributes that are more easily expressed as message headers than a routing key. So, here, the routing key is ignored, and the match is taken from the value of the header and the value specified upon the binding.

It is possible to bind a queue to a headers exchange using more than one header for matching. In this case, the broker needs one more piece of information from the application developer, namely, should it consider messages with any of the headers matching, or all of them? This is what the "x-match" binding argument is for. When the "x-match" argument is set to "any", just one matching header value is sufficient. Alternatively, setting "x-match" to "all" mandates that all the values must match.


`Headers exchanges can be looked upon as "direct exchanges on steroids". Because they route based on header values, they can be used as direct exchanges where the routing key does not have to be a string; it could be an integer or a hash (dictionary) for example.` [RabbitMQ](https://www.rabbitmq.com/tutorials/amqp-concepts.html)
 

- **note**: headers beginning with the string 'x-' will not be used to evaluate matches.


#### Queues
 
The queues in the AMQP protocol work in a similar fashion to the ones in other message or task related systems: they store messages that are consumed by applications. 

It is interesting to notice that the queues share some properties with exchanges, eventhough they have properties of their own:

1. **Name**: applications may pick names for the queues or let for the broker to generate a name for then.   
    1.1. Names may be up to 255 bytes and UTF-8 characters.   
    1.2. The broker can generate a unique name for the queue.   
    1.3. Queue names starting with **amg.** are reserved for internal use by the broker and attempting to use it will generate the error 403 (ACCESS_REFUSED).
2. **Durable**: the queue will survive the broker restart.
3. **Exclusive**: used by only one connection and the queue will be deleted when consumer connection closes.
4. **Auto-delete**: queue that has had at least one consumer is deleted when last consumer unsubscribes.
5. **Arguments**: optional, which is used by plugins and broker-specific features such as message TTL, queue length limit, etc.
 
`Before a queue can be used it has to be declared. Declaring a queue will cause it to be created if it does not already exist. The declaration will have no effect if the queue does already exist and its attributes are the same as those in the declaration. When the existing queue attributes are not hte same as those in the declaration a channel-level exception with code 406 (PRECONDITION_FAILED) will be raised`.  [RabbitMQ](https://www.rabbitmq.com/tutorials/amqp-concepts.html)


#### Bidings

Bindings are rules that exchanges use (among other things) to route messages to queues, and therefore for a Exchange x to route for a Queue Y, **X has to bound to Y**.

Also, bindings may have optional routing key attributes that are use by some exchange types, and they function as a filter for the messaging.


According to the site [RabbitMQ](https://www.rabbitmq.com/tutorials/amqp-concepts.html) this layer of indirection enables routing scenarios that should be impossible or very hard to be implemented using publishing directly to queues, and would also eliminates certain amount of duplicated work application developers have to do.´


### Consumers

Consumers are togther with the publishers, the other side of the dispositives that  are pairing to trade messages. And in the AMQP protocol there are 2 ways for client applications to consume messages:

1. **Subscription**: this is the recommended option, where a subscription allows the client to have the message(s) delivered to them, that is pushed to them (**push API**).
2. **Polling**: this type is considered inefficient and should be avoided, where the client reaches the queue to pull the message to it  **(pull API)**.


- **note**: each consumer has an identifier, also called a **consumer tag**, and it can be used to unsubscribe it from messaging.



### Messages

###### Message Acknowledgements

The Message Acknowlegement is a feature that tries to deal with the matter of reassuriment that the message is delivered and that it may be acquired by the consumer, and this feature makes the implementations of the protocol certainly more robust.

This is important not only because messages may be lost because of network issues, but there is also the possibility of problems related with the consumer that may prevent it to reach the message.

But in the other hand, it also raises the problem of when the broker should remove the messages, since even the acknowlegements of the consumer can occur at different period of times, like just after the consumer receives the message, or just after it stores the message, or even only after it processes the message.

Also, there is the event where the consumer for any reason just cannot give its acknowlegements and the broker may stays without answer.

Anyway, there are 2 modes for the acknowlegements of the messages:

1. After broker sends a message to an application using the methods **basic.deliver** or **basic.get-ok**.
2. After the application sends back an acknowlegements using the method **basic.ack**.


###### Acknowlegement Methods

This methods from AMQP are similar to HTTP verbs or operations, but they nothing to do with methods found in OO programming.

And just like HTTP operations are categorized in their hundreds, here this protocol groups them in classes:

1. **Exchange class**: this methods or operations acts as requrests from the consumer and responses from the broker   
    1.1. exchange.declare method   
    1.2. exchange.declare-ok   
    1.3. exchange.delete    
    1.4. exchange.delete-ok


- **Note**: that there are acceptions to this parallel mode of communication when methods like **basic.publish** does not have a corresponding response or the **basic.get** which may have more than one possible response.


###### Rejecting Messages

When a consumer application receives a message, processing of that message may or may not succeed. An application can indicate to the broker that message processing has failed (or cannot be accomplished at the time) by rejecting a message.

When rejecting a message, an application can ask the broker to discard or requeue it. And when there is only one consumer on a queue, make sure you do not create infinite message delivery loops by rejecting and requeueing a message from the same consumer over and over again.


###### Negative Acknowledgements

Messages are rejected with the **basic.reject** method. There is one limitation that **basic.reject** has: there is no way to reject multiple messages as you can do with acknowlegements.

However, if you are using RabbitMQ. then there is a solution, because RabbitMQ provides an AMQP 0-g-1 exetensioin known as negative acknowlegements or nacks.


#### Prefetching Messages 

For cases when multiple consumers share a queue, it is useful to be able to specify how many messages each consumer can be sent at once before sending the next acknowledgement.

This can be used as a simple load balancing technique or to improve throughput if messages tend to be published in batches. For example, if a producing application sends messages every minute because of the nature of the work it is doing.

- **Note**: that RabbitMQ only supports channel-level prefetch-count, not connections or size based prefetching.


#### Message Attributes and Payload

Attributes are a commen set on the AMQP protocol, and therefore many operations with them are facilitated by the protocol itself. And besides, some attributes are used by the brokers, but the majority of them `are open to interpretation by applications that receive them`.  [RabbitMQ](https://www.rabbitmq.com/tutorials/amqp-concepts.html)

Some examples of attributes:

1. **Content type**
2. **Content encoding**
3. **Routing key**
4. **Delivery mode (persistent or not)**
5. **Message priority**
6. **Message publishing timestamp**
7. **Expiration period**
8. **Publisher application id**


One important distinction that the site of RabbitMQ seems to do about this protocol is that there is a difference when the message is deemed persistent by the broker/publisher or simply from the queue, because in the first case it is used the disk to store, and that would bring the same kind of optimization analysis that should be made by data storages in general:

`Messages may be published as persistent, which makes the broker persist them to disk. If the server is restarted the system ensures that received persistent messages are not lost. Simply publishing a message to a durable exchange or the fact that the queue(s) it is routed to are durable doesn't make a message persistent: it all depends on persistence mode of the message itself. Publishing messages as persistent affects performance (just like with data stores, durability comes at a certain cost in performance)`. RabbitMQ](https://www.rabbitmq.com/tutorials/amqp-concepts.html)


-- Read more about this point in the [RabbitMQ Publisers Guide](https://www.rabbitmq.com/publishers.html)
 

 
### Connections

The AMQP uses TCP at the transport layer for reliable delivery, and because of that the connections are typically long-lived. Besides, the connections use authentication and can be protected using TLS.

And when an application no longe needs to be connected to the server, it should gracefully close its AMQP connection, instead of abruptly closing the underlying TCP connection.


### Channels
 
Another great feature from AMQP is the use of channels as a feature to optimize the TCP connection, instead of opening multiple ones. And in doing this the protocol saves system resources and facilitates configuration with the firewall.

So, in AMQP connections are multiplexed, and use channels to create these `lightweight connections that share a single TCP connetion`. RabbitMQ](https://www.rabbitmq.com/tutorials/amqp-concepts.html)
 
 
Also important to see that eventhough the channel exists within some connection, it has its own Id and have a separated context from all the other channels in this same connection.
 
 
### Virtual Hosts

This is another feature that allows a single broker to have many isolated 'environments', which could be group of users, or exchanges, or queues, etc.
 
 
### AMQP Extensions

- **Custom exchange types**
- **Additional attributes for the definition of Exchanges**
- **Broker-specific extensions**
- **New AMQP 0-g-1 method classes**
- **Brokers can be extended with additional plugins**


### AMQP Clients Ecosystem
 
Finally, this last point in this description of the AMQP protocol at the site of RabbitMQ is also very important, because it focuses on the point of interoperability.

And the matter here is that clients may implement very different systems to work all these concepts, like including additional features to the protocol, dealing with synchronality or asynchronality features, etc.


But, observing that the main goal of AMQP is interoperability, `it is a good idea for developers to understand protocol operations and not limit themselves to terminology of a particular client library. This way communication with developers using different libraries will be significantly easier`. [RabbitMQ](https://www.rabbitmq.com/tutorials/amqp-concepts.html)
 
 

### Further Reading

[AMQP - amqp.org]( https://www.amqp.org/)

[ISO and IEC Approve OASIS AMQP Advanced Message Queuing Protocol](https://www.oasis-open.org/news/pr/iso-and-iec-approve-oasis-amqp-advanced-message-queuing-protocol/)

[RabbitMQ: o que é e como utilizar - Cedro Blog](https://blog.cedrotech.com/rabbitmq-o-que-e-e-como-utilizar)
 
[RabbitMQ Tutorials - RabbitMQ](https://www.rabbitmq.com/getstarted.html)
 
[Part 1: RabbitMQ for beginners - What is RabbitMQ? - CloudAMQP](https://www.cloudamqp.com/blog/part1-rabbitmq-for-beginners-what-is-rabbitmq.html)
 
[Docs - CloudAMQP](https://www.cloudamqp.com/docs/index.html)
 
### References

[AMQP 0-9-1 Model Explained - RabbitMQ](https://www.rabbitmq.com/tutorials/amqp-concepts.html)


[¹]:rabbitmq-2022-03-17

[²]:software-architecture-patterns-overview-2022-02-18

[³]:software-architecture-and-design-2022-02-22


