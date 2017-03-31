import {difference, range} from 'lodash';

export const reveal = (nodes, start = 0, gameOverMode = false) => {
  let nodeIndexes = range(nodes.length);
  let visited = new Set();
  let toVisit = [start];
  let nodeChildren, current;
  while(toVisit.length){
    current = toVisit.shift();
    if(visited.has(current) || nodes[current].isMine)
      continue;
    visited.add(current);
    nodeChildren = new Set(nodes[current].edges);
    nodes[current].mines = [...nodeChildren].filter(index => nodes[index].isMine).length;
    toVisit = toVisit.concat(difference(nodes[current].path, [...visited]));
  }
  return nodes;
};

export const finish = (nodes) => {
  return nodes.map( node => {
    node.gameOverMode = true;
    return node
  });
};

/**
 * Creates a cell object.
 */
const createCell = (edges, isMine = false, hidden = true, gameOverMode = false) => {
  return { isMine, edges, hidden, gameOverMode};
};

/**
 * Given some coords and the field
 * boundaries it retrieves the adjacent nodes.
 */
const getEdges = (coords, bounds) => {
  let edges = []
  let rowStart = Math.max(coords.i - 1, 0);
  let rowStop = Math.min(coords.i + 1, bounds.numRows - 1);
  let colStart = Math.max(coords.j - 1, 0);
  let colStop = Math.min(coords.j + 1, bounds.numColums - 1);
  let nodeIndex = bounds.numColums * coords.i  + coords.j;

  for(let i = rowStart; i <= rowStop; i++) {
    for(let j = colStart; j <= colStop; j++) {
      if(i !== coords.i || j !== coords.j) {
        let index = bounds.numColums * i  + j;
        edges.push(index);
      }
    }
  }
  let diagonals = getDiagonals(nodeIndex, bounds.numColums);
  const path = difference(edges, diagonals);
  return { edges, path };
};

const getDiagonals = (index, numColums) => {
  return [
    index - numColums - 1,
    index + numColums + 1,
    index - (numColums - 1),
    index + (numColums - 1),
  ];
}

/**
 * Create the field with nodes and edges.
 */
export const generateField = (numRows, numColums) => {
  let nodes = [];
  let isMine, index;
  for(let i = 0; i < numRows; i++) {
    for (let j = 0; j < numColums; j++) {
      let {edges, path} = getEdges({i, j}, {numRows, numColums});
      isMine = Math.round(Math.random());
      index = numColums * i  + j;
      nodes[index] = createCell(edges, isMine);
      nodes[index].index = index;
      nodes[index].path = path;
    }
  }
  return { nodes, numRows, numColums };
};

