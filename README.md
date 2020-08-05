# TicTacToe Solo Project

A website built from scratch to run a game of tic-tac-toe

## Project Overview

This website all of the code (and art) therin were built by me (Caleb Cyphers) for the final TicTacToe Solo Project. The website uses three js files to build game and player objects which handle all of the game logic, win tracking, and interactions with local storage.

The left and right columns represent the players tokens, and the numbers are representative of the number of 'won' games that each player has gotten. the text displayed in the center of the screen informs who's turn it is, or who has won if a win state has been achieved. The win states 'AWAKENED' and 'DESTROYED' (as well as the third state 'DRAW') will remain for three seconds before the game board is reset to default. Un-taken spaces cannot be taken during the three-second pause.

When a player gains a win, the win is added to the data model and saved into local storage. When the page is refreshed, the number of wins persists.
<center>
<img src="https://i.imgur.com/f2vwM8w.jpg" alt="image of website" width="500">
</center>

### Code Architecture
A brief overview of the responsibility of files
#### Data model
- **game.js:** Defines the Game class, which builds the 'game' object and has functions to check the player's moves against the eight win-states. The Game object can hold two Player objects and updates them as the game progresses.
- **player.js:** Defines the Player class, which is used to build two players each time the page is loaded. the Player objects track player wins, store moves inside an array for the Game class to check against win-conditions, and have methods to retrieve and store win data to local storage.
- **main.js:** Instantiates two instances of the Player class and feeds them into an Instantiation of the Game class. Within ```main.js``` are all of the functions that connect the Data Model to the DOM, including the most powerful function, the ```resolver()``` which decides what functions get run based on wether a game is a win, a draw, or unresolved.
#### DOM
- **index.html:** Contains the website skeleton. Each of the images which represent spaces on the 'game board' have a ```data-sector="#"``` in which the a number from 1-9 is stored. This data is accessed in ```main.js``` when the user clicks to tell the Game object what move has been made.
- **styles.css:** Acts as the stylesheet for the website. The font used on the website is not hosted online, and had to be downloaded from fontspace.com and added to the project in the stylesheet using ```@font-face {}```.

### Challenges & Wins
- **Challenge - game-logic:** Designing the logic of the game took a lot of time. I ended up researching the mechanics of tic-tac-toe pretty deeply, and my first attempts (such as: building three arrays one tracking each row, giving spaces values that would only add up to 15 if the three proper spaces were picked, and giving each of the winning board configurations a unique id) were busts.
- **Win - game-logic:** Figuring out how best to run the game was an exercise in reduction. I had to keep asking myself 'how can I simplify this? What is this doing at its core? What steps aren't necessary?' and eventually I figured out that the only things that needed to be tracked were the *moves the players had made* and the *win conditions.* The logic for checking to see wether an array contained all of the elements of another array (in the player's moves array contained all of the 'spaces' of a win, with no regards to order or length) was really exciting to figure out.
- **Challenge - timeOut:** When I got the timeOut to work, I was initially relieved, until I clicked on another space on the game-board, and everything broke. Not only that, but the win counts weren't updating until *after* the three seconds. Those were tricky issues to patch, and involved some (unfortunately) WET code and a crash course in ```position: absolute```.
- **Win - localStorage:** This project helped me grasp localStorage pretty well. Implementing it was a lot less painless then I had originally expected, and it felt good to get it running.
