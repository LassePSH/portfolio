---
layout: post
author: Lasse P. S. H.
title: Classifying hate speech with LLM and multi-SWAG
tags: [LLM, SWAG]
---

## SWAG
Stochastic Weight Averaging Gaussian (SWAG) emerged as a pioneering method for uncertainty representation in 2019 [2]. The approach involves a multi-step process wherein an initial model undergoes training, followed by further refinement using a Stochastic Gradient Descent (SGD) optimizer. During this training phase, crucial information about the weights at each step along the trajectory is meticulously preserved. This meticulous record-keeping allows for the computation of covariance, wherein an approximate distribution over the weights is established based on the SGD iterates.

Subsequently, this distribution serves as a basis for sampling new weights, thereby enabling exploration of a broader spectrum of the weight space. Notably, the covariance computation can be executed via two distinct methods: the SWAG-Diagonal approach or the Low Rank plus Diagonal Covariance Structure method. The SWAG-Diagonal method entails the calculation of diagonal elements within the covariance matrix, offering insights into the uncertainty inherent in individual weight parameters.

Given the sheer volume of weights involved, the computation of the covariance matrix often occurs in a continuous stream, with each SGD iterate contributing incrementally to its construction. This iterative process ensures a comprehensive representation of uncertainty throughout the training trajectory, facilitating robust exploration and refinement within the weight space.

The following figure shows an example of $$300$$ samples of 2 weights in the last dense layer in the model.

![swag](/portfolio/images/swag/swag.png)

### multiSWAG
MultiSWAG is a deep ensemble extension of SWAG [1]. 
Ensemble learning combines several individual models to obtain better generalization performance. 
By using MultiSWAG more of the weight-space is investigated. 
The following Figure shows SWAG samples from the dense layer from 15 individual Electra models. 

![multi_swag_samples](/portfolio/images/swag/samples.png)

# The Model
The 

## Training
The following Figure shows the training histories for 15 ensembles using the multiSWAG approach. 
The left side shows the initial step using ADAM optimizers. 
The right side shows the training histories for the SWAG approach using SGD optimizers.

![multi_swag_samples](/portfolio/images/swag/train.png)

## Results
The results shows that multiSWAG increases the performance of the base model.

|             | Precision | Recall | F1     |
|-------------|-----------|--------|--------|
| Base Model  | 0.8457    | 0.8452 | 0.8433 |
| SWAG        | 0.8413    | 0.8414 | 0.8400 |
| MultiSWAG   | 0.8543    | 0.8546 | 0.8533 |

*Table: Model macro averages.*



---
{: data-content="footnotes"}

[^1]: Bayesian Deep Learning and a Probabilistic Perspective of Generalization: Andrew Gordon, Wilson Pavel Izmailov
[^2]: A Simple Baseline for Bayesian Uncertainty in Deep Learning: Wesley J. Maddox, Timur Garipov, Pavel Izmailov, Dmitry Vetrov, Andrew Gordon Wilson