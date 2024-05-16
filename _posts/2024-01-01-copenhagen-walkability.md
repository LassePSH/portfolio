---
layout: post
author: Lasse P. S. H.
title: "Explaining Urban Walkability Through Network and Visual Features"
---

# Abstract
Understanding walking behavior in cities is critical to promoting physical activity and reducing reliance on fossil fuel-powered vehicles.
Individuals’ experience of moving through the city is influenced by many factors, including the structure of the street network, the perception of safety, the accessibility of amenities, and the visual qualities of its built environment. 
Existing research has combined these elements into walkability indexes, which assess the pedestrian-friendliness of urban areas and are widely used in policy-making, academic research, and real estate.

# Walkability Index
To measure the desirability of a street segment, we compare the number of trips passing through it against the number of trips along neighboring streets that have similar directions.

The desirability score for a given segment $i$ can be computed by the z-score.

$$Z_i = {x_i - \mu_i \over \sigma_i}$$

The Mean and standard deviation of trips along neighboring streets $X_j$ weighted by the difference in angle between $i$ and $j$.


$$
w_{ij} = 1 - \frac{|\theta_i - \theta_j|}{90^\circ} 
$$

$$
\mu_i = \frac{\sum_{j=1}^n w_{ij} x_j}{\sum_{j=1}^n w_{ij}} 
$$

$$ 
\sigma_i = \frac{\sqrt{\sum_{j=1}^n w_{ij} (x_j - \mu_i)^2}}{\sum_{j=1}^n w_{ij}} 
$$


<iframe
  src="https://lassepsh.github.io/walkability_map/"
  style="width:100%; height:700px;"
></iframe>