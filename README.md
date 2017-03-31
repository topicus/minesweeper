## Minesweeper

## URL 
Deployed using now.

https://ns-psnacsgdji.now.sh/

## Time 5:30 hs.

To solve this I've used a graph structure to transverse all the cells and compute how much mines are around. 

To walk through the graph I've used the Depth-first search algorithm. To keep the original game UX diagonals are excluded from the loop. In other words when the algorithm can open a new branch only from a node placed at the top, bottom, left or right from the current one.

##
- [X] When a cell with no adjacent mines is revealed, all adjacent squares will be revealed (and repeat)
- [ ] Ability to 'flag' a cell with a question mark or red flag (SOLUTION: a flag in the cell to prevent clicks)
- [x] Alert when game is over
- [ ] Persistence. Not to lose the game if browser is closed (SOLUTION: a localstorage saving the app state)
- [ ] Time tracking (SOLUTION: just a timer)
- [ ] Ability to start a new game and preserve/resume the old ones (SOLUTION: call to generateField again and wipe the old state. A list of app states using local storage)
- [ ] Ability to select the game parameters: number of rows, columns, and mines. (SOLUTION: partially done without UX)
- [ ] Ability to support multiple users/accounts (SOLUTION: passport or similar using JWT and some backend to store the app state)
- [ ] Design and implement an API for the game (think of a mobile app for your API) (Idem)
- [ ] Nice user experience (eg avoid page reload while playing) (SOLUTION: just a button to generate a new field)