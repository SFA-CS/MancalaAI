# MancalaAI
This is a student research project to train an A.I. to play Mancala.

## Background

The basic rules for Mancala are as follows [Mancala Rules](https://www.scholastic.com/content/dam/teachers/blogs/alycia-zimmerman/migrated-files/mancala_rules.pdf).

Also, the history of Mancala can be read on the [Wikipedia page](https://en.wikipedia.org/wiki/Mancala).

## Devliverables

1) Program for training.
2) Project Demo/Simulation
3) Documentation

## Current State
The logic for the game is mostly working, the only issue is that the game doesn't end when a player runs out of gems on their side. The current state of the code is very crude and could definitely be cleaned up as this was my first time using JavaScript in this manner. The game has no visual interactions and the players are just random number generators right now because the decisions will eventually be made by neural networks. I would recommend rewriting the game with an MVC design pattern to make the code easier to understand and navigate.

The repo includes the matrix.js and nn.js files from the [Toy Neural Network](https://github.com/CodingTrain/Toy-Neural-Network-JS.git) repo. Once the game logic is complete, these files can be used to replace the players with neural networks which can be trained using a genetic algorithm. I got this idea from The Coding Train's [Neuroevolution Flappy Bird](https://www.youtube.com/watch?v=c6y21FkaUqw) videos where he walks through how to use his neural networks and set up the algorithm.