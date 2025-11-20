import { BlogPost } from '../../types';

export const cdmIntroPost: BlogPost = {
  id: "b2",
  title: "Introduction to Cognitive Diagnosis Models (CDM)",
  date: "February 14, 2025",
  summary: "Exploring the fundamentals of CDMs and how to implement a basic DINA model using R.",
  tags: ["Psychometrics", "R", "Statistics"],
  content: `
Cognitive Diagnosis Models (CDMs) are a class of latent variable models used to diagnose the presence or absence of specific fine-grained attributes (skills) required to solve test items.

## Why CDMs?
Unlike traditional IRT models that place students on a continuous scale of ability ($\theta$), CDMs classify students into latent classes based on mastery profiles.

- **Diagnostic Feedback**: Provides detailed strengths and weaknesses.
- **Remediation**: Helps teachers target specific skills for improvement.

## The DINA Model
The *Deterministic Input, Noisy "And" gate* (DINA) model is one of the most popular CDMs. It assumes that a student must master **all** required attributes to answer an item correctly.

### Key Parameters
1. **Guessing (g)**: Probability of answering correctly despite lacking skills.
2. **Slipping (s)**: Probability of answering incorrectly despite having skills.

## Implementation in R
We can use the \`GDINA\` package in R to estimate these models.

### 1. Load Data & Package
\`\`\`r
library(GDINA)
dat <- sim10gdina$simdat
Q   <- sim10gdina$simQ
\`\`\`

### 2. Fit the Model
\`\`\`r
est <- GDINA(dat = dat, Q = Q, model = "DINA")
summary(est)
\`\`\`

### 3. Visualize Results
We can plot the item parameters to see which items are the most difficult or prone to slipping.

\`\`\`r
plot(est, item.par = TRUE)
\`\`\`

> **Note**: This is a simplified example. Real-world applications often require Q-matrix validation and model fit analysis.

In future posts, I will discuss how to handle longitudinal data in CDMs using the methods described in my recent *Language Assessment Quarterly* paper.
  `
};