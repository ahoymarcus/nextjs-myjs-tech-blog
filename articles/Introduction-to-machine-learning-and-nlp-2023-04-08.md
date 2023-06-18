---
author: 'Marcus Vinicius Richa'
title: 'Introduction to Machine Learning and Natural Language Processing'
date: '2023-04-08'
subject: 'databases-articles'
description: 'As a field of study, **machile learning** is classified as a subset of **artificial intelligence** where computer science and statistics are brought together for creating predictive models used to allow machines learn from historical data.'
---

# Introduction to Machine Learning and Natural Language Processing

1. ##### Introduction  
2. ##### Introduction to Machine Learning
	2.1. Basic Concepts and Chronology   
	2.2. Machine Learning Life Cycle   
	2.3. Supervised Machine Learning   
	2.4. Unsupervised Machine Learning   
	2.5. Basic Machine Learning Algorithms   
	2.6. A Machine Learning Study Case
3. ##### Introduction to Natural Language Processing 
	3.1. Components of NLP    
	3.2. A Example of a NLP Pipeline    
	3.3. Phases of NLP   
	3.4. A List of NLP APIs
4. ##### 
5. ##### 
6. ##### 
7. #####
8. Further Reading
9. ##### References

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




### Basic Concepts and Chronology

As the article [Machine Learning Tutorial](https://www.javatpoint.com/machine-learning) from the site JavatPoint.com explain, **Machine Learning** is a technology which enables computers to learn automatically from past data.


So, while setting up the learning process for computers, the machine learning models use various algorithms for **"building mathematical models and making predictions using historical data or information"**.


The article from JavatPoint also points out that there is a wide range of applications for machine learning: image recognition, speech recognition, email filtering, Facebook auto-tagging, recommender system, cyber fraud detection, etc.


And in general terms, machine learning can also apply to facilitate many operations like solving or reducing the size of complex problems, in decision making and to extract "hidden" patterns from data, especially from large and very large datasets.


Comparing to humans, as the site states, there is a important difference in the learning process, because while a person may use its own experiences as a means to learn, computers and machines would have to work upon previously instructed information programmed into them.


So, the idea of the task for machine learning would be to allow a computer or machine to also learn from previous data as it would correlate to humans experiences.


As a field of study, **machile learning** is classified as a subset of **artificial intelligence** where computer science and statistics are brought together for creating predictive models used to allow machines learn from historical data:

> "With the help of sample historical data, which is known as training data, machine learning algorithms build a mathematical model that helps in making predictions or decisions without being explicitly programmed.[...] A Machine Learning system learns from historical data, builds the prediction models, and whenever it receives new data, predicts the output for it." [Machine Learning Tutorial](https://www.javatpoint.com/machine-learning)


In terms of its general operation than, the machine learning uses some input of data and sets a structure with a basic 4 steps:

``` 
       tranning data       ML           Data   test/new data
Input ---------------> Algorithms ---> Models ---------------> Output
```

In terms of its limitations, machine learning is restricted by the quality and the amount of data available, and also by its cost function as well.


Also, according its own structure, machine learning can be classified into three types:
1. Supervised learning: it's a type of ML method in which it is provided labeled data to the machine in order to be trained.   
	1.1. After the model is created it is used new data to test the model and check its accurancy.   
	1.2. It can be further grouped into 2 subcategories according with the kind of algoritm used: 1. Classification; 2. Regression.
2. Unsupervised learning: in this type the learning process is made without the the supervision, what means that there is no sort of classification (labels, categories) on the dataset, and the algoritm has to act upon the data unsupervised to create groups of objects with similar patterns.   
	2.1. The JavatPoint article says that here, **"we don't have a predetermined result"**, while the machine tries to find useful insinghts from the huge amount of data provided.   
	2.2. It also can be further grouped into two categories according with the kind of algorithm used: 1. Clustering; 2. Association.
3. Reinforcement learning: this last type is a feedback-based type in which a learning agent gets rewarded for each right actions and gets penalties for each wrong action. So, the agent learns automatically with these feedback and improves its performance.   
	3.1. Here, says JavatPoint's article, that through the reinforcement learning the agent interacts with the environment and explores it with the goal of improving its performance by the rewards conceived/gainded.



###### History of Machine Learning

According to JavatPoint, though the practical application of machine learning is a novelty from the lasts decades, its ideas and concepts are already old and have a long history.


Some milestones from ML History ([Machine Learning Tutorial](https://www.javatpoint.com/machine-learning)):
- **1834**: Charles Babbage, the father of the computer, conceived a device that could be programmed with punch cards. And though this machine was never built, its logical structure are present in all modern computers.   
- **1836**: Alan Turing gave a theory that a machine can determine and execute a set of instructions.
- **1940**: "ENIAC" was invented, the first manually operated computer, being the first eletronic general-porpuse computer (later came others like "EDSAC" in 1949 and "EDVAC" in 1951).
- **1943**: a human neural network was modeled with an electrical circuit.
- **1950**: the idea of a neural network starts to be applyed as a model to the working of human neurons.
- **1950** Alan Turing published a seminal paper: "Computer Machinery and Intelligence", on the topic of artificial intelligence, asking the question whether a machine could think.
- **1952**: Arthur Samuel created a program that helped IBM computers play checkers game: and it performed better as it play on.
- **1959**: the term "Machine Learning" was first coined by Arthur Samuel.
- **1974 to 1980**: called the AI Winter, a tough time for the field and its researchers (many failures and reduced funding are some of that problems).
- **1959**: the first neural network was applied to a real-world problem which was to remove echoes over phone lines.
- **1985**: Terry Sejnowski and Charles rosenberg invented a neuro network called Nettalk, which was able to teach itself how to correctly pronouce 20,000 words in one week.
- **1997**: IBM's Deep Blue intelligent computer won the chess game against the chess expert Garry Kasparov, becoming the first computer which to beat a human chess expert.
- **2006**: in this year the scientist Geoffrey Hilton renamed "neural net research" as "Deep Learning", this field that has become one of the most trending technologies today.
- **2012**: Google creates a deep neural network which learned to reconize the image of humans and cats in YouTube videos.
- **2014**: Facebook creates DeepFace, a deep neural network which they claimed that could recognize a person with the same precision as a human can do.
- **2016**: AlphaGo beat the world's second player Lee Sedol at Go game.
- **2017**: AlphaGo now beats beats the number one player at Go game, Ke Jie. Also, at this same year the Alphabet's Jigsaw team built an intelligent system that was able to lear the online trolling. It used to read millions of comments of different websites to learn to stop online trolling.


The article from JavatPoint points out that some of the most important prerequisites for one to learn ML would be:
1. Fundamental knowledge of probability and linear algebra. 
2. The ability to code in any computer language, especially in Python language.
3. Knowledge of Calculus, especially derivatives of single variable and multivariate functions. 



#### Machine Learning Life Cycle

The **life Cycle** of a system implies the cyclic process of building an efficient feature, in this case it's the efficient making of a machine learning  project.


So, in that sense, the ML life cycle involves 7 steps:
1. Gathering Data
2. Data Preparation
3. Data Wrangling
4. Data analysis
5. Train the model
6. Test the model
7. Deployment


But, just as the site JavatPoint explains, in any project the most important aspect is **to understand/know and to solve a real life problem/demand**:

> "The most important thing in the complete process is to understand the problem and to know the purpose of the problem. Therefore, before starting the life cycle, we need to understand the problem because the good result depends on the better understanding of the problem." [Machine learning Life cycle](https://www.javatpoint.com/machine-learning-life-cycle)


And the concept behind that is the simple fact that even the most perfect project and system doesn't mean anything if it does not tackle the exact need involved with the development of the system.



###### The Gathering Data

The step involves a very simple concept that is to obtain the data necessary to the ML project, noticing that the dataset has also to have the correct amount of data necessary to convey the ML operation to be used:

> "The quantity and quality of the collected data will determine the efficiency of the output. The more will be the data, the more accurate will be the prediction." [Machine learning Life cycle](https://www.javatpoint.com/machine-learning-life-cycle)


There are 3 subcategories here in this stage of the project:
1. Identify various data sources: files, databases, internet, mobile devices, sensors, etc.
2. Collect the data
3. Integrate the data obtained from the all the different sources.



###### The Data Preparation

This second step is also a very important part of the project because it will brings an immersion into the whole dataset already built and try to understand its characteristics, while also searching for any inconsistencies.


So, this step can also be divided into 2 stages:
1. Data exploration: this is the time that is spent to understand the nature of the data at hand, determining its characteristics, format and its quality. Also, it allows the researcher to find some **correlations**, **general trends** and **outliers**.
2. Data pre-processing: in this step the data is preprocessed for its analysis.



###### Data Wrangling

In this step the process of **data wrangling** is conveyd, meaning that the whole dataset is cleaned and it is converted to the necessary format to be used by the ML operation.


So, the article at JavatPoint even points out that this is one of the most important steps in the whole process, since it allows for looking for **missing values**, **duplicate data**, **invalid data** and many other problems that can cause **"noise"** in the result:

> "So, we use various filtering techniques to clean the data. It is mandatory to detect and remove the above issues because it can negatively affect the quality of the outcome." [Machine learning Life cycle](https://www.javatpoint.com/machine-learning-life-cycle)



###### The Data Analysis

This next step is responsible for the creation of the **Model**, and, as it was seem befere, it has the dataset as its imput.


Some important operations that will be carried out in this stage are the **selection of the analytical techniques to be apllied**, **the building of the models** and the **review of the results achieved**.


Thus, with the process already conformed to the problem or need for the project, the data that was previously prepared and formatted is going to be analysed using various analytical techniques (classification, regression, cluster analysis, association, etc) and a model then is to be build and to be tested to verify the accurancy of its predictions.



###### Training the Model

Just as in in the first steps where the data was treated and perfected to be used to produce the model, here also **training the model** imply to improve and perfect the accurance of this same model that had been previouly built.


So, using the correct ML algorithms onto the dataset, it allows the researches to tackle some problems from the model pertaining **biases** (4) and **variances** (4), etc.
 

> "We use datasets to train the model using various machine learning algorithms. Training a model is required so that it can understand the various patterns, rules, and, features." [Machine learning Life cycle](https://www.javatpoint.com/machine-learning-life-cycle)



###### Testing the Model

After the model has been enough trained, it's the time to test it with **new data**, because until this point it was restricted by all the data that was previously prepared and formatted for the operation.


The importance of this whole machine learning operation comes from the fact that the prediction model built has to work and has to be useful to be applied to new/strange data from real life situations, where it has to perform without all the previous preparation.


So, here the researches also need to know and be aware of the models limitations and its own capacity to be generalised onto others cases.



###### The Deployment


This last step is like a final report for the whole project, because after the data was correctly gathered, prepared and formatted, and the model constructed, perfected/trained and tested, its time to deploy the project as a stand alone system that has to be integrated with other systems and have to perform adequately.


After deploying the whole system, its operation has also to be tested to know if it is not degrading with time and use.



#### Supervised Machine Learning

As it was said before, the **supervised machine learning** is the type of ML operation where the data provided to furnishes the model is **"labelled"** before hand, and the output predictions from the model has to follow that data directions.


So, in this type of ML operation the labelled data functions as a **supervisor** that teaches to the machine how to predict the output correctly:


> "The aim of a supervised learning algorithm is to find a mapping function to map the input variable(x) with the output variable(y)." [Supervised Machine Learning](https://www.javatpoint.com/supervised-machine-learning)


A good exemple of a ML model is given by JavatPoint, where we could think of a operation to classify data shapes into three possible labels:
1. Triangle
2. Square
3. Hexagon


So, while training the model, if the algorithm finds a 3 sides shape, it will label as triangle, if it finds a four equal sided shape, it will label as square, and lastly if it has six sides, it should be labelled as a hexagon, and so on.


Also as it was said before, there 2 types of supervised machine learning algorithms: 
1. **Regression**: the regression algorithms are used if there is a relationship between the input variable and the output variable. And it is used for the prediction of **countinous variables**.   
	1.1. Some popular Regression Algorithms: Linear Regression, Regression Trees, Non-Linear Regression, Bayesian Linear Regression, Polynomial Regression, etc.   
	1.2. Some uses for the regression algorithm: Weather forecasting, Market Trends, etc.    
2. **Classification**: the classification algorithms are used when the output variable is categorical, which means there are two classes such as "Yes/No, Male/Female, True/False, etc.".   
	2.1. Some popular Classification Algorithms: Random Forest, Decision Trees, Logistic Regression, Support Vector Machines, etc.



###### Advantages of Supervised Learning

-> With the help of supervised learning, the model can predict the output on the basis of prior experiences.   
-> In supervised learning we can have an exact idea about the classes of objects.
-> Supervised learning model helps us to solve various real-world problems such as fraud detection, spam filtering, etc.


###### Disadvantages of Supervised Learning

-> Supervised learning models are not suitable for handling complex tasks.   
-> Supervised learning cannot predict the correct output if the test data is different from the training dataset.   
-> Training requires lots of computation times.   
-> In supervised learning we need enough knowledge about the classes of the object before hand.



#### Unsupervised Machine Learning

As it was just said, with the prior type of ML it is necessary enough knowledge before hand about the data being used. 


But in many sceneries there may not be access to any prior knowledge or labelled data, what would imply that in the **unsupervised machine learning** processes it is the job of the model to find patterns for the data being consumed:


> "The goal of unsupervised learning is to find the underlying structure of dataset, group that data according to similarities, and represent that dataset in a compressed format." [Unsupervised Machine Learning](https://www.javatpoint.com/unsupervised-machine-learning_)


And here we have some popular unsupervised learning algorithms:
- K-means clustering   
- KNN (K-nearest neighbors)   
- Hierarchical clustering   
- Anomaly detection   
- Neural networks   
- Principle Component Analysis   
- Independent Component Analysis   
- Apriori Algorithm   
- Single Value Decomposition


And as it was also said, the unsupervised learning can be further grouped into 2 categories according with the kind of algorithm used: 
1. **Clustering**: this is a method of grouping the objects into clusters such that objects with most similarities remains into a group and has less or no similarities with the objects of another group.   
	1.1. The cluster analysis finds the commonalities between the data objects and categorizes them as per the presence and absence of those commonalities.
2. **Association**: this method is used for finding the relationships between variables in the large database. It determines the set of items that occurs together in the dataset.   
	2.1. Association rule makes marketing strategy more effective. Such as people who buy **X** item are also tend to purchase **Y**, for exemple: x= bread and y= butter or jam.



###### Advantages of Unsupervised Learning

-> Unsupervised learning is helpful for finding useful insights from the data.   
-> Unsupervised learning is much similar as a human learns to think by their own experiences, which makes it closer to the real AI experience.    
-> Unsupervised learning works on unlabeled and uncategorized data which makes unsupervised learning useful in a larger extent (in real-world scenarios, we do not always have input data with the corresponding output as to solve each of cases).    
-> Unsupervised learning is used for more complex tasks as compared to supervised learning since it is not restricted to any before hand knowledge limiting it.    
-> Unsupervised learning is preferable to use since it is more common to get unlabeled data and it is more costly to format datasets in to previous lables schemes.


###### Disadvantages of Unsupervised Learning

-> On the other hand, the unsupervised learning is more difficult to tackle because we don't have knowledge of the correspondent output before hand.   
-> The result of the unsupervised learning might be less accurate as input data is not labeled, and algorithms do not know the exact output in advance.




#### Machine Learning by Reinforcement

As it was said before, in this type of ML operation, the learning agent is guided by a feedback based process where it is rewarded by right actions and it is penalised by wrong ones, aiming to improve its own performance.


A case study that can be pointed out here is a test, or according to a later retraction from the US military, a simulation, where a survailance drone that received points for striking out enemy targets had intented to kill its operator to improve its scoring record.


So, wheter in some instances the drone would attack and be rewarded, in other cases it would be instructed not to strike and therefore resulting in not improving its own score performance. And because of this it was said that issues were raised by the simulation when the drone decided to strike the drone operator which was hindering its scores.


And following the progress of the same simulation, the drone would have been speciffically trainned as viewing the killing of the operator as undesirable, and resulting in loss of points. But as it would seem, again the AI decided then that the lack of communication between it and the controlling tower could also be beneficial for its performance, witout the need for killing the controller.


> [AI-Controlled Drone Decides to Kill Human Operator in 'Thought Experiment'](https://www.pcmag.com/news/ai-controlled-drone-decides-to-kill-human-operator-in-simulated-mission)




#### Basic Machine Learning Algorithms

Jason Brownlee in [A Tour of Machine Learning Algorithms](https://machinelearningmastery.com/a-tour-of-machine-learning-algorithms/), from the site Machine Learning Mastery, explains that because of the large amount of machine learning algorithms, it would be a good idea to group them in order to facilitate their understanding.


So, in that fashion, that author proposes two ways tackle this problem:
1. First, grouping them according to the type of learning style.   
2. Secondly, grouping them in terms of their similarities of form or of function.


While grouping the algorithms by the **learning style**, the author brings three groups, where firts we find the ** Supervised Learning**. 


Here with the supervised learning the data input is labelled and it purposes to train the model, and the problems involve operations of classification and regression with algorithms like Logistic Regression and Back Propagation Neural Networks.


Than there is the **Unsupervised Learning** where the data input is not labelled and it does not have a known what the output or result could be. And costumary problems involve clusterization and Association, using algorithms like Apriori Algorithm or K-Means.


Finally, the third type of learning style for this author would be a intermediary kind of **Semi-Supervised Learning**, where the data is a mixture of labeled and unlabelled exemles. Here there may be a desired prediction problem, but the model must learn the structures to organize the data and to predict. So examples of problems for this type would be classification. 


Yet another way to group the ML algorithms would be by **Similarity**, though he explains that this classification may not be perfect to distinguis all cases, because of the complexity of some algoritms:


> "We could handle these cases by listing algorithms twice or by selecting the group that subjectively is the “best” fit. I like this latter approach of not duplicating algorithms to keep things simple." [Commonly used Machine Learning Algorithms (with Python and R Codes) - Analytics Vidhya](https://www.analyticsvidhya.com/blog/2017/09/common-machine-learning-algorithms/)



###### Regression Algorithms

Here the author notices that the term "regression" in machine learning is borrowed from the Statistical Field, where regression is in fact a process.


So, here in ML **regression** conforms another way to create classes or classification, and the most popular algorithms are:
- Ordinary Least Square Regression (OLSR)   
- Linear Regression   
- Logistic Regression   
- Stepwise Regression   
- Multivariative Adaptative Regression Splines (MARS)   
- Locally Estimates Scatterplot Smoothing (LOESS)



###### Instance-Based Algorithms

Instance-based learning model is a decision problem with instances or examples of training data that are deemed important or required to the model:


> "Such methods typically build up a database of example data and compare new data to the database using a similarity measure in order to find the best match and make a prediction. For this reason, instance-based methods are also called winner-take-all methods and memory-based learning. Focus is put on the representation of the stored instances and similarity measures used between instances." [Commonly used Machine Learning Algorithms (with Python and R Codes) - Analytics Vidhya](https://www.analyticsvidhya.com/blog/2017/09/common-machine-learning-algorithms/)


The most popular Instance-Based algorithms are:
- K-Nearest Neighbor (KNN)   
- Learning Vector Quantization (LVQ)   
- Self-Organization Map (SOM)   
- Locally Weighted Learning (LWL)   
- Support Vector Machines (SVM)



###### Regularization Algorithms

Yet according to Jason Brownlee in [A Tour of Machine Learning Algorithms](https://machinelearningmastery.com/a-tour-of-machine-learning-algorithms/), the **regularization algorithm** would be also an extension made to typically regression methods, where here the idea is to penalize models based on their complexities, favoring simpler models that are better at generalization:


> "I have listed regularization algorithms separately here because they are popular, powerful and generally simple modifications made to other methods." [A Tour of Machine Learning Algorithms](https://machinelearningmastery.com/a-tour-of-machine-learning-algorithms/)


The most popular Regularization Algorithms are:
- Ridge Regression   
- Least Absolute Shrinkage and Selection Operator (LASSO)   
- Elastic Net   
- Least-Angle Regression (LARS)



###### Decision Tree Algorithms

The **decision tree** methods construct a model of decisions made based on actual values of attributes in the data.


And as Jason Brownlee in [A Tour of Machine Learning Algorithms](https://machinelearningmastery.com/a-tour-of-machine-learning-algorithms/) says that "Decisions" fork in tree structures until a prediction decision is made for a given record. And **decision trees** are trained on data for classification and regression problems, and are often fast and accurate, what makes them some big favorites for the machine learning operations.


The most popular **Decision Trees** are:
- Classification and Regression Tree (CART)   
- Iterative Dichotomiser 3 (ID3)   
- C4.5 and C5.0 (different versions of a powerful approach)   
- Chi-squared Automatic Interaction Detection (CHAID)   
- Decision Stump   
- M5   
- Conditional Decision Trees



- **Some Other Popular Algorithms for ML** - [A Tour of Machine Learning Algorithms](https://machinelearningmastery.com/a-tour-of-machine-learning-algorithms/):   
- **Bayesian Algorithms**   
- **Clustering Algorithms**   
- **Association Rule Learning Algorithms**   
- **Artificial Neural Network Algorithms**   
- **Deep Learning Algorithms**  
- **Dimensionality Reduction Algorithms**  
- **Ensemble Algorithms**



#### A Machine Learning Study Case

As it is explained in the article [A visual introduction to machine learning](http://www.r2d3.us/visual-intro-to-machine-learning-part-1/) from the site R2D3, **Machine Learning** is related to a task of applying `"statistical learning techniques to automatically identify patterns in data"`.


And the same article starts with a very basic concept that is to determine whether some set of housing data may be applyied to some city like New Yourk or San Francisco.


So, in this experiment, since the author knows that San Francisco is a hilly city, than it could be a proper pattern to set some kind of hight as a means to classify and evaluate the data to try to distinguish one set of data from another.


But than, there should remain yet the problem to distinguishes lower-elevation homes from each city. And to cope with this new problem the article proposes to create another **"dimension"** (1) to the pattern or classification, thus creating more nuances to properly experiment with the housing data.


Once again, the article proposes to match price per square foot as a secong means of classification, since New York houses are known to be "extremely expensive per square foot".


Lastly, cross referencing the two dimensions created, the article proposed a pattern of classification that would:
1. Suggest that houses above some specif hight (73 meters) would probably be situated at San Francisco.
2. That lower-elevated houses (below 73 meters), those that have a cost per square foot of more than $19,116.7 would more properly be located at New York.


Another very interesting feature that comes together with the task of dealing with statistics and machine learning is the possibily to apply visualization to the job, allowing the researcher to dispose of a set of images and graphs that are also compeling tools to help with human understanding.


Below, there is a example of a two dimension scatterplot created by the article to classify the dataset into 3 regions: [A visual introduction to machine learning - R2D3](http://www.r2d3.us/visual-intro-to-machine-learning-part-1/)
1. The green part should be a boundary to the data refered to the San Francisco region.
2. The blue blue should be a boundary to the data refered to the New York region.
3. Lastly, in white there is the part of the dataset that has not been classified yet, meaning that there is not a pattern yet to differ homes with lower elevation and lower per-square-foot prices.


![two-dimension-scatterplot-example](/images/articles/databases/two-dimension-scatterplot-example.png)


But the article explains that the dataset they used to create the mode has at least 7 dimensions, and that it would be the task from the data scientist to furnish the model with the necessary variables to make it hold a dicisive picture necessary to classify all the data being handled.


Also, it is interesting to point out that for that task of creating a data model, the article explain that this task could also known as **"training a model"**.


So, it's at this point, according to the article, where the data scientist needs to come through all the data to find the rest of the patterns necessary to finish its model that **machine learning** becomes imperative, since it can apply its own set of algorithms to automatically test all the variables looking for the right match for the job.



> " Finding patterns in data is where machine learning comes in. Machine learning methods use statistical learning to identify boundaries. One example of a machine learning method is a decision tree. Decision trees look at one variable at a time and are a reasonably accessible (though rudimentary) machine learning method." [A visual introduction to machine learning - R2D3](http://www.r2d3.us/visual-intro-to-machine-learning-part-1/)


Another importante point highlighted by the article is the fact that that same machine learning algorithm can be used to test the accurancy of any other variable or dimension previouly set.


Just like the house elevation dimension case where the ML task can help to improve upon the 73 meters intuition that it was set:


> "A decision tree uses if-then statements to define patterns in data. [...] In machine learning, these statements are called forks, and they split the data into two branches based on some value. That value between the branches is called a split point. Homes to the left of that point get categorized in one way, while those to the right are categorized in another. A split point is the decision tree's version of a boundary." [A visual introduction to machine learning - R2D3](http://www.r2d3.us/visual-intro-to-machine-learning-part-1/)


Latter the article points out that even the best assertions can lead tome some false classifications (²), but that it is the job of the data scientist to aim for the **best split** (³), that is to expect that **"each branch should be as homogeneous (or pure) as possible"**.


Yet another task that the ML algorithms apply is the **recursion"** that is the repetition of the same process described onto the subsets of the data. And this process allows to insert layers onto the data model and improving its prediction accurancy:


> "You could even continue to add branches until the tree's predictions are 100% accurate, so that at the end of every branch, the homes are purely in San Francisco or purely in New York." [A visual introduction to machine learning - R2D3](http://www.r2d3.us/visual-intro-to-machine-learning-part-1/)


At this point the article explains that all the data used until now for creating the model, in this case housing data from San Francisco and from New York are called **"training data"**, and that with the result of this arrangement or trainning to the data the result was successful, than the data scientists call this a model.


And that according with the precision and quality of a model, it could be used to classify unseen data, ideally, performing the classification with somewhat the same accurancy perceived while training the model.


One interesting point made by the article is that while training the data model, there may have occurred a **"overfitting"** of the model, that is to say that while classifying the training data the model **"learned to treat every detail in the training data as important, even details that turned out to be irrelevant."**


At last the result from the experiment brought by the article is that a data model can error by both presenting patterns that are overly simple or overly complex, and that it is the job of the data scientist to bring the model into real-life approximations by applying other process and features that may tackle all these **biases** (4) and **variances** (4), as they are called.


One example set by the second part of the same article is to improve the configuration of the algorithm, that in the example was a **Decision Tree**, because while setting up its function, the algorithm can be regulated to filter in a more or less profund manner.


So, in the case of the first model trained by the article, the algorithm was set to split the data in a very complex and minute fraction, and the dataset, apparently, was not large enough to cope with that complex configuration, what caused the overfiting of the set up as it was said before.



> **_Notes from this case study_**: 
> 1. According to the article, "dimensions" in a data set can also be called **features**, **predictors**, or **variables**.
> 2. **False positives** or **False negatives** according to which reference of the data the algorithm is being set: New York or San Francisco.
> 3. **Split** is the term used by the algorithm to test data and separating it into differnt branches.
> 4. **Biases** and **Variances** are characteristics related to the models that can skew the predictions, and thus they have to be know and dealt accordingly.




### Introduction to Natural Language Processing

According to the site [JavatPoint](https://www.javatpoint.com/nlp), **Natural Language Processing** or **NLP** is a field which incorporates together three distinct learning segments that is **computer science**, **human languages** and **artificial intellingence**, all of that with the aim to provide the basis for computers to understand, analyse, manipulate and interpret human's languages.


So, NLP as a process **"helps developers to organize knowledge for performing tasks such as translation, automatic summarization, Named Entity Recognition (NER), speech recognition, relationship extraction and topic segmentation."**.



- **A Brief NLP Chronology from [NLP Tutorial - JavatPoint](https://www.javatpoint.com/nlp)**:   
- **1940**: the NLP starts as a frequent task of operation.
- **1948**: in this year happens the first recognisable NLP application introduced in Birkbeck College, London.
- **1950**: at this year NLP started to bring together both computer science and linguistics more closely.
- **1957**: Chomsky brings a great influenced with some of his ideas from his first book `Syntactic Structures` and from his `Generative Grammar`, "which is rule based descriptions of syntactic structures". 
- **1960**: starting from this year, Augmented Transition Networks (ATN), a "finite state machine capable of recognizing regular languages" became a important development. 
- **1968**: in this year the linguist Charles J. Fillmore brings the concept o `Case Grammar` which helps to define roles and relationships for the discourse, like the ones from nouns and verbs and prepositions, etc. So, "In Case Grammar, case roles can be defined to link certain kinds of verbs and objects." 
- **1970**: the system SHRDLU written by Terry Winograd which "helps users to comunicate with the computer and moving objects". So, according to the site JavatPoint it can handle instructions such as 'pick up the green ball' and also answer questions like 'what is inside the black box' -> "The main importance of SHRDLU is that it is shows those syntaxes, semantics, and resonings about the world that can combine to produce a system that understand natural language."
- **1970**: also from this year, developed by Woods, it became one of the largest and most successful question-answering system using AI techniques - [Artificial Intelligence](https://www.brainkart.com/article/ELIZA,-HAL,-LUNAR,-SHRDLU-System_8903/). And also from JavatPoint, it was capable of translating natural language expressions into database queries and handle 78% of the requests without errors.
- **1980**: the site JavatPoint says that from this year the natural processing systems started to change its operation from language processing systems based on complex sets of hand-written rule to the introduction of machine learning algorithms.
- **1990**: from this year, researchs from natural language processing starts to receive boosting from both the increase in the power capacity of the computer systems and also from the recent developments from the Internet.


- **Advantages from NLP**:   
- NLP helps users to ask questions about any subject and get a direct response within seconds.   
- According to the site JavatPoint, NLP has the benefit of summarizing answer with just the necessary information and avoiding to flood users with prolix and complex answers.   
- The NLP helps computers to communicate better with and users, returning more  favore answers.   
- NLP has been wildely applied in companies to improve the efficiency of documentation processes, accurancy of documentatin and to identify information from large databases.

- **Disadvantages from NLP**:   
- According to the site JavatPoint, NLP may not show context.   
- NLP may be unpredictable from time to time.   
- NLP may still requires some "more keystrokes" in its development.   
- Yet according to the site from JavatPoint, NLP is "unable to adapt to the new domain, and it has a limited function, that's why NLP is built for a single and specific task only."


- **A Brief Comparative Between Natural Language and Computer Language**:

According to the article [NLP Tutorial](https://www.javatpoint.com/nlp) from JavatPoint, the **natural languages** operate with a huge vocabulary and are commonly affected by a multitude of differnt contexts that creates a normal state or pace of ambiguity to the ordinary speech.


On the other side, the **computer languages** works with a very restricted set of vocabulary and have also a limited and hierarchical number of contexts, which have to be in line in terms of desambiguation in order to prevent the system to fail and to halt its operation.



#### Components of NLP

According to the JavatPoint site, NLP consists of the following components:
1. **Natural Language Understanding (NLU)**: this is the part of the operation that relates to gathering and extracting metadata from speech content (concepts, entities, keywords, emotions, relations, semantic roles, etc) to create a understanding of the problem.   
	1.1. It is mainly used in business applications to understand the "customer's problem" both in spoken and written language.
2. **Natural Language Generation (NLG)**: this is the part of NLP operation which "acts as a translator that converts the computerized data into natural language representation", though it is mainly involved with text planning, sentence planning and text realization.   
	2.1. The site from JavatPoint also points out that this operation is some what simpler than the NLU is.


| NLU | NLG |    
| --- | --- |   
| Inputs are human speech (or natural language) | Inputs are computer data (or non-linguistic elements) |   
| Outputs are computer data (or non-linguistic elements | Outputs are human speech (or natural language) |  




#### A Example of a NLP Pipeline

These are the common steps in producing a NLP pipeline, according to [NLP Tutorial - JavatPoint](https://www.javatpoint.com/nlp):
1. **Sentence Segmentation**: in this first step, the machine breaks the paragraphs into separated sentences.
2. **Word Tokenization**: in this step the sentences are broken into separate words or tokens.   
	2.1. I guess that at this point the words or tokens are also labelled according to those linguistics roles seen before...
3. **Stemming**: this step is also the name for the linguistic operation from morphology to reduce inflected or derived words into their correct stem, base or root form.   
	3.1. According to the article at JavatPoint, this operation still lacks from some accurence, resulting sometimes in the production of meaningless words at the results.
4. **Lemmatization**: this step is "quite similar" to the preciding one, perhaps with the distinction of breaking the inflected words into root words that have complete meaning, or as it is said in this article from [Stanford.edu](https://nlp.stanford.edu/IR-book/html/htmledition/stemming-and-lemmatization-1.html), "a dictionary form of a word".
5. **Identifying Stop Words**: these are a set of words or linguistic constructs which are secondary or subordinate to the speech, like the word "and", "the", etc.
6. **Dependency Parsing**: this step is used to find how the words in the sentece are related to one another.
7. **POS tags**: "POS" stands for the parts of the speech that tries to assemble the roles to the speech, like nouns, verbs, adverbs, adjectives, etc.
8. **Named Entity Recognition (NER)**: this is the process of detecting the named entities like proper nouns: person names, movie names, organization names, locations, etc.
9. **Chunking**: this last part of the pipeline is used to collect all the individual pieces of information, like sentences, and grouping them into bigger pieces of sentences.



#### Phases of NLP

The article from [JavatPoint](https://www.javatpoint.com/nlp) presents 5 layers for the analysis fo natural language processing:
1. **Lexical Analysis**: this phase parses through the text aiming for meaningful words or lexemes.
2. **Syntactic Analysis**: and here the text is parsed to check for the word arrangements, that is their relationship or their correct places or relation to paragraphs, sentences, etc.
3. **Semantic Analysis**: in this analysis it parses aiming for the literal or the dictionary meaning of the words.
4. **Discourse Integration**: this phase creates a chain of relationship between sentences from the preceding ones to those that follow to form a whole text relation.
5. **Pragmatic Analysis**: the pragmatic phase seens to aim for creating context for the sentences.   
	5.1. So the article from JavatPoint gives an example that the sentence `"Open the door"` would be interpreted as a request instead of a order, etc.


Another point from the [NLP Tutorial - JavatPoint](https://www.javatpoint.com/nlp) article is that besides the fact that NPL has to deal with the corrent technological difficulties and the necessary conceptual developments necessary for the field, there is yet another set of difficulties that are created by the fact that speech usually deals or goes along with a great deal of **"ambiguity"**, and that this can present itself in at least 3 levels: **lexical ambiguity**, **syntatic ambiguity** and **referential ambiguity**. 



#### A List of NLP APIs

A brief list of NLP APIs current today:
- **IBM Watson API**: it combines different sophisticated machine learning techniques to enable developers to classify text into various custom categories. It supports multiple languages, such as English, French, Spanish, German, Chinese, etc. With the help of IBM Watson API, you can extract insights from texts, add automation in workflows, enhance search, and understand the sentiment. The main advantage of this API is that it is very easy to use.   
- **Chatbot API**: it allows you to create intelligent chatbots for any service. It supports Unicode characters, classifies text, multiple languages, etc. It is very easy to use. It helps you to create a chatbot for your web applications.   
- **Speech to Text API**: it is used to convert speech to text.   
- **Sentiment Analysis API**: it is also called as 'opinion mining', and it is used to identify the tone of a user (positive, negative, or neutral)    
- **Text Analysis API by AYLIEN**: IT is used to derive meaning and insights from the textual content. It is available for both free as well as paid from$119 per month. It is easy to use.    
- **Cloud NLP API**: it is used to improve the capabilities of the application using natural language processing technology. It allows you to carry various natural language processing functions like sentiment analysis and language detection. It is easy to use.   
- **Google Cloud Natural Language API**: it allows you to extract beneficial insights from unstructured text. This API allows you to perform entity recognition, sentiment analysis, content classification, and syntax analysis in more the 700 predefined categories. It also allows you to perform text analysis in multiple languages such as English, French, Chinese, and German.












### Further Reading

- [Artificial Intelligence](https://www.brainkart.com/article/ELIZA,-HAL,-LUNAR,-SHRDLU-System_8903/)

- [Carnegie Mellon University Machine Learning Tutorials - AutonLab](https://autonlab.org/tutorials)

- [Commonly used Machine Learning Algorithms (with Python and R Codes) - Analytics Vidhya](https://www.analyticsvidhya.com/blog/2017/09/common-machine-learning-algorithms/)

- [Google Introduction to Machine Learning](https://developers.google.com/machine-learning/crash-course/ml-intro?hl=en)

- [Google Foundational courses on Machine Learning](https://developers.google.com/machine-learning/foundational-courses?hl=en)

- [Google Guides into Machine Learning](https://developers.google.com/machine-learning/guides?hl=en)

- [Google Advanced courses on Machine Learning](https://developers.google.com/machine-learning/advanced-courses?hl=en)

- [Machine Learning Tutorials and Courses - Hackr.io](https://hackr.io/tutorials/learn-machine-learning-ml)

- [R2D3](http://www.r2d3.us/)

- [Stemming and lemmatization - Stanford.edu](https://nlp.stanford.edu/IR-book/html/htmledition/stemming-and-lemmatization-1.html)


[]()


### References

- [A Tour of Machine Learning Algorithms - Machine Learning Mastery](https://machinelearningmastery.com/a-tour-of-machine-learning-algorithms/)

- [Machine Learning Tutorial - JavatPoint](https://www.javatpoint.com/machine-learning)

- [R2D3 - A visual introduction to machine learning](http://www.r2d3.us/visual-intro-to-machine-learning-part-1/)

- [R2D3 - Model Tuning and the Bias-Variance Tradeoff](http://www.r2d3.us/visual-intro-to-machine-learning-part-2/)

- [NLP Tutorial - JavatPoint](https://www.javatpoint.com/nlp)


[]()



[^1]:it-governance-and-management-overview-2022-03-27

[^2]:pmbok-and-project-management-methodologies-2022-03-29

[^3]:itil-service-management-framework-2022-03-30

[^4]:risk-management-overview-2022-04-03

[^5]:information-security-overview-2022-04-05

[^6]:cryptography-steganography-and-cryptanalysis-overview-2022-04-07

[^7]:continuity-plan-and-essentials-for-businesses-overview-2022-04-06

[^8]:open-web-application-project-foundation-owasp-overview-2022-04-18







