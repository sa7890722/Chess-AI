# Chess-AI
Created a chess AI from scratch using p5.js. Used the minimax algorithm with alpha beta pruning for move evaluation. Can play pretty well at an amatuer level.


# How to run the AI game : 

1: Download the zip file and extract it.
2: Run a local server on your system by typing the command : 
 # python -m SimpleHTTPServer
   in the terminal.
3. Go to a web browser and enter the url :
 # localhost:8000
4. Go to the extracted file.
5. Go to the AI Game folder.
6. The game is displayed on the screen.
7. To receive instructios regarding the game open the Console in Inspect Elemnt by using right click.


# Types of instructions :
  You can only play the game as the Black player.
1: picked : It means that the chess piece has been picked and now you must choose a valid location to place it.
            (all of the valid locations are displayed in the console).
2: placed : It means that the piece that was picked has now been placed and now you are ready to pic another piece.
3: pick again : It means that some incorrect action has been done and you now need to repick the piece.
4: Game Over : It means that the game is over and the side which won is displayed thereafter.
6: Move is OK : If it was your turn to move and you moved.
7: Move is not OK : If it is not your turn to move.

# Be aware : 
Always be attentive because the game does not tell whether you are in check or not and it immediately captures the king if possible.

# "Enjoy playing"
