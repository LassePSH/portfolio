---
layout: post
author: Lasse P. S. H.
title: "Explaining Successful Reddit Posts"
---

This post shows the key results from my Master Thesis. The thesis explores how the acknowledgment of individuals can be quantitively measured by exploiting the Reddit award system. 
The thesis primarily focuses on data from the subreddit wallstreetbets, where we analyzed the social dynamics of the community using network science and Natural Language Processing. 
We developed a Deep Learning model that classifies awarded posts, using network features and the transformer model ELECTRA. 
Finally, we explained some of the underlying social mechanisms within the community, revealing a ”rich get richer” effect for the award system, where the probability of receiving an award increases prior to the amount previously awarded posts. 
We also investigate the impact of the network size on individuals’ identity within the community, revealing that larger networks have different social dynamics, making it more challenging for individuals to establish identity. 
Overall, this research provides insights into how repuation is formed and maintained within online communities and the factors that contribute to it.




# Predicting Awarded Reddit Posts
The Model uses the ELECTRA transformer  model to handle the textual input, tokenizing the raw text before feeding it into the transformer. 
A dropout layer is used to prevent overfitting of the textual input before concatenating the output of the ELECTRA with the network features.
![theme logo](/portfolio/images/master_thesis/MasterThesisModel.png)

![theme logo](/portfolio/images/master_thesis/confusion_matrix.png)

|                | Precision | Recall  | F1-score |
|----------------|:---------:|:-------:|:--------:|
| not awarded    |  0.8130   | 0.7217  |  0.7217  |
| awarded        |  0.7583   | 0.8403  |  0.7647  |
| accuracy       |           |         |  0.7821  |
| macro avg      |  0.7857   | 0.7810  |  0.7810  |
| weighted avg   |  0.7852   | 0.7822  |  0.7813  |



# Key Findings

## Individuals Identity in Communities

![theme logo](/portfolio/images/master_thesis/mentions.png)

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