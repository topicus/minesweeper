import React, { Component } from 'react';
import { range } from 'lodash';
import Cell from './Cell';

export default class Row extends Component {
  cellClick(index) {
    this.props.cellClick(index);
  }

  render() {
    const {nodes, numRows, numColums} = this.props.field;
    const i = this.props.i;
    return (
      <div className="row">
        {
          range(this.props.field.numRows).map( (j) => {
            return <Cell cellClick={this.cellClick.bind(this)} key={j} {...nodes[(numColums * i) + j]}/>
          })
        }
      </div>
    );
  }
}

//