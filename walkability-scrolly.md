---
layout: scrollytelling
title: "What Makes Copenhagen Walkable?"
subtitle: "A data-driven exploration of street desirability, network structure, and computer vision."
permalink: /walkability-scrolly
outro: |
  **Thank you for scrolling.**

  This project combined network science, smartphone mobility data, and computer vision to understand what makes streets desirable for walking. The full analysis is part of ongoing research at DTU.
---

{% include step.html id="1"
   img="/images/walkability/desirable_map_2.png"
   content="**Copenhagen is one of the world's most walkable cities.** But not all streets are equal — some attract far more foot traffic than others. What makes certain streets more *desirable* to walk?" %}

{% include step.html id="2"
   img="/images/walkability/cool_map_2.png"
   content="Using **smartphone mobility data**, we can measure which streets people actually choose to walk. This reveals a walkability index — a map of preference, not just possibility." %}

{% include step.html id="3"
   img="/images/walkability/segments.png"
   content="Copenhagen's street network contains **thousands of individual segments**. Each one carries a different story — from busy shopping streets to quiet residential lanes." %}

{% include step.html id="4"
   img="/images/walkability/dual.png"
   content="To analyze the network, we transform it into a **dual graph**: streets become nodes, and intersections become edges. This reveals the topological structure hidden in the urban fabric." %}

{% include step.html id="5"
   img="/images/walkability/dual_conti.png"
   content="We refine the graph with **directional continuity** — streets that flow in the same direction stay connected. This captures how people actually experience movement through the city." %}

{% include step.html id="6"
   img="/images/walkability/degree.png"
   content="From the network structure, a **street hierarchy** emerges. Degree centrality reveals which streets are most connected — the arteries of the urban network." %}

{% include step.html id="7"
   img="/images/walkability/segformer/segformer1_org.png"
   content="But numbers aren't everything. **What do these streets actually look like?** The physical environment — trees, buildings, road width — shapes the walking experience." %}

{% include step.html id="8"
   img="/images/walkability/segformer/segformer1_seg.png"
   content="Using **SegFormer**, an AI vision model, we segment every pixel of street-level imagery into 18 environmental classes: vegetation, road surface, buildings, sky, and more." %}

{% include step.html id="9"
   img="/images/walkability/segformer/segformer3_seg.png"
   content="The segmentation works across diverse urban scenes — **trees, roads, buildings, and sky** are all classified automatically, giving us a quantitative view of the streetscape." %}

{% include step.html id="10"
   img="/images/walkability/confusion_matrix.png"
   content="Combining network features with visual features, we train an **XGBoost classifier** to predict walkability. The model achieves an **F1 score of 0.79** — street structure and appearance together explain most of what makes a street desirable." %}

{% include step.html id="11"
   img="/images/walkability/permutation_importance.png"
   content="**Which features matter most?** Permutation importance reveals the key drivers of walkability — a mix of network centrality measures and visual characteristics of the built environment." %}
