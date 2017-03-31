import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Row from './Row';
import { range } from 'lodash';
import { generateField, reveal, finish} from './engine';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: generateField(20, 20),
      gameOver: false,
    }
  }

  cellClick(index) {
    if(this.state.gameOver) return;
    const gameOver = Boolean(this.state.field.nodes[index].isMine);
    let nodes, field;

    if(gameOver) {
      console.log('Game Over');
      nodes = finish(this.state.field.nodes);
    } else {
      nodes = reveal(this.state.field.nodes, index);
    }
    field = Object.assign({}, this.state.field, {nodes});
    this.setState({field, gameOver});
  }

  render() {
    return (
      <div className="table">
        {
          range(this.state.field.numRows).map(i => {
            return <Row cellClick={this.cellClick.bind(this)} key={i} i={i} field={this.state.field} />
          })
        }
      </div>
    );
  }
}

export default App;
