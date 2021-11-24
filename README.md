Battleships project

Battleship coding project 
Programming Challenge
Build a two player battleship game as a web app
 
Project Requirements
You can use any framework or library that you are comfortable with
You can use publicly available libraries with MIT or comparable licenses for web app components
When the user refreshes the browser, the game returns the same state it was in previously (it doesn't restart the game)
 
Game Requirements and Rules
Battleship rules as outlined in the classic battleship game (with a twist)
Grid should be of size 8x8
There should be 4 boats for each team, but they need to be the shapes of tetris blocks
"L" shape (3 tall, 2 wide at boot), block (2x2), and two lines (4x1)
It should have a lobby with a start button to start the game
The ships are randomly placed on the grid to start
The game is turn based, so player 1 only sees their grid and their shots in player 2's water with their hits and sunk ships. When it is player 2's turn, they see their grid and ships, and player 1's water with their hits and sunk ships
A move should involve firing a shot by clicking on other player's grid, and if on a boat, hitting it
If a boat has been hit on each grid space, it is sunk
The player who fired the shot should be informed if a shot hits or misses, and also should be informed if they have sunk a ship, and if so, what ship has been sunk
The game should have a reset button to restart to the "lobby" state (beginning of game with no state)
The game should switch to an end state if one team loses all their ships. The end game state should show who won, total shots fired, ships sunk for both players, and include a restart button
 
What we are looking for
We will primarily judge the application based on functionality
This includes game mechanics, well organized code, sensible design decisions
The game should work and we should not be able to put the game into a bad state
We care that the UI makes sense and looks reasonable
The web app should work on desktop computers
 
Note: In cases that the game requirements are not clear, feel free to interpret them as seems reasonable to you to provide a sensible game experience. Please make sure to document those assumptions.
