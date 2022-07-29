# OdinTicTacToe
TicTacToe implementation using HTML/CSS/JS
    -The board is constructed using a div container that contains nine additional divs.
    -container is then formatted using CSS grid 
    -The UI/UX design was kept simple in this iteration to focus on the Javascript logic
    -Factory function used to create two player objects that possess a name and a "mark"
    -Module function used to create a Gameboard object that represents the current gameboard
     --this module contains additional functions to resets the board, detect wins, and update the board.
    -Module function used to manage the flow of the game
     -- utilized the Player factory to create two players
     -- used a flag variable to keep track of whos turn it is allowing turn taking
     -- additional flag variables used to freeze the users ability to place more characters on the board
     -- event listeners used to give each div tile their functionality and the buttons to reset the board and counter variables
      --given listeners for the same reason. 

