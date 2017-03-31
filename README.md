## Minesweeper

## Time 5:30 hs.

To solve this I've used a graph structure to transverse all the cells and compute how much mines are around. 

To walk through the graph I've used the Depth-first search algorithm. To keep the original game UX diagonals are excluded from the loop. In other words when the algorithm can open a new branch only from a node placed at the top, bottom, left or right from the current one.

