---
layout: post
author: Lasse P. S. H.
title: "Explaining Successful Reddit Posts"
---

This post shows the key results from my Master Thesis. 
The thesis explores how the acknowledgment of individuals can be quantitively measured by exploiting the Reddit award system. 
The thesis primarily focuses on data from the subreddit [wallstreetbets](https://www.reddit.com/r/wallstreetbets/), where we analyzed the social dynamics of the community using network science and Natural Language Processing. 
We developed a Deep Learning model that classifies awarded posts, using network features and the transformer model ELECTRA. 
Finally, we explained some of the underlying social mechanisms within the community, revealing a ”rich get richer” effect for the award system, where the probability of receiving an award increases prior to the amount previously awarded posts. 
We also investigate the impact of the network size on individuals’ identity within the community, revealing that larger networks have different social dynamics, making it more challenging for individuals to establish identity. 
Overall, this research provides insights into how repuation is formed and maintained within online communities and the factors that contribute to it.

# Constructing the Network(s)
We created discrete­time dynamic networks for wallstreetbets. Where every unique author is represented as a node in the graph.
An edge is created between the two nodes if they interact by commenting on a post or comment. 
These networks are a static snapshot of 10 weeks in the period before a post was created, this creates a network for each individual post. 
By doing this we are able to analyze the network before a post is created and the behavior of the individual who made the post in that 10­ week period.
The data is balanced such that it contains an equal amount of awarded and not awarded posts, this is done by down sampling the majority class not awarded posts.
<br>
<br>
We created a total $$56278$$ diffrent networks. 
The following figure shows an example of a single discrete­time dynamic graph from 2020-­12-­25 to 2021-­03-­25.
![theme logo](/portfolio/images/master_thesis/frontpage_4.jpg)

For each network we extracted 12 diffrent features explaining the behavior of the author within the network.

| Feature         | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| N edges                      | The number of edges in the graph                                            |
| N nodes                      | The number of nodes in the graph                                            |
| degree                       | The degree of the author                                                    |
| degree centrality            | The degree centrality of the author                                         |
| closeness centrality         | The closeness centrality of the node                                        |
| in­degree                     | The in­degree of the author in the directed graph                            |
| out­degree                    | The out­degree of the author in the directed graph                           |
| Fraction of Reciprocal Edges | The fraction of reciprocal edges of the whole network                       |
| N Reciprocal Edges (author)  | The sum of reciprocal edges of the author                                   |
| N Reciprocal Edges           | The total sum of reciprocal edges                                           |
| activity                     | The number of posts & comments in the time interval by the author           |
| mentions                     | The number of times the author has been mentioned in other posts & comments |



# Predicting Awarded Reddit Posts
The Model uses the ELECTRA transformer model to handle the textual input, tokenizing the raw text before feeding it into the transformer. 
A dropout layer is used to prevent overfitting of the textual input before concatenating the output of the ELECTRA with the network features.
![theme logo](/portfolio/images/master_thesis/MasterThesisModel.png)

![theme logo](/portfolio/images/master_thesis/confusion_matrix.png)

|        | Precision | Recall  |   F1-score  |
|--------|:---------:|:-------:|:-----------:|
| not awarded    |  0.8130   | 0.7217  |   0.7217    |
| awarded        |  0.7583   | 0.8403  |   0.7647    |
| accuracy       |           |         |   0.7821    |
| macro avg      |  0.7857   | 0.7810  |   0.7810    |
| weighted avg   |  0.7852   | 0.7822  |   0.7813    |



# Key Findings


## Individuals Identity in Communities

The following section shows the result of the study we conducted on the importance of identity in communities. ....... an individual’s identity is a crucial part of a user’s reputation within a com­munity. 
For a user to have a true and accurate reputation, they must be well­known and recognizable within the community.

The subreddit wallstreetbets gained widespread popularity at the end of 2020, resulting in a large influx of new members joining the community. 
This section shows the result of the investigation conducted on how community size affects the identity of an individual.

### Reciprocal edges
Reciprocal edges are edges that go in both directions in directed networks. 
The total number of reciprocal edges, can be seen as a metric of how well individual nodes are connected to each other and how dense the community is. 
The following figures shows the the total number of reciprocal edges and the network size.
![theme logo](/portfolio/images/master_thesis/mentions.png)


### Mentions
Reddit uses a system where users can mention individuals in the text by writing ”/u/” followed by a username. We computed the total number of mentions, which can be used as a measure of how well users know each other within the community.
![theme logo](/portfolio/images/master_thesis/reciprocal.png)

## Awards Increases Awards
This section seeks to investigate how the probability of receiving an award increases if the user is already awarded. 
As previously mentioned, awards are a rare commodity, with only $$4\ %$$ of the authors from wallstreetbets receiving an award. 
These awards are expected to be given to users that have produced high­quality, informative, entertaining, or otherwise valuable content for the community. However, there are indications that individuals receive more awards if they are previously awarded. 
This could suggest a ”rich get richer” effect, which refers to the phenomenon where those who are already successful are more likely to continue to be successful. 
This concept is often used in the context of economics, but can also be applied to social systems such as awards on Reddit communities. 
We computed the percentage of awards given to the top $$n\%$$ awarded users of the awarded users. The following figure shows the cumulative rate of the total awards given to the top awarded users.

![theme logo](/portfolio/images/master_thesis/getrich.png)

It can be seen that the majority of awards are given to a small proportion of the awarded users. 
The top $$1\%$$ awarded users have received $$40 \%$$ of the total awards. 
This suggests that the award system follows the ”rich get richer” phenomenon. 
Users who are already well­known or have established a reputation are more likely to receive awards, which enhances their visibility and popularity, leading to even more awards. 
This creates a feedback loop where the rich get richer and the poor get poorer.