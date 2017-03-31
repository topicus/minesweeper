import React, { Component } from 'react';
import cx from 'classnames';

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false
    };
    this.handleRelease = this.handleRelease.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.handleRelease, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleRelease, false);
  }

  handlePress(e) {
    this.setState({pressed: true});
  }

  handleRelease(e) {
    this.setState({pressed: false});
  }

  handleClick(e) {
    this.props.cellClick(this.props.index);
  }

  render() {
    const isMine = this.props.isMine;
    const gameOverMode = this.props.gameOverMode;
    const classes = cx('cell', {
      pressed: this.state.pressed,
      revealed: typeof this.props.mines !== 'undefined',
      mine: isMine && gameOverMode
    });
    const mines = (Number(this.props.mines)) ? this.props.mines : '';
    return (
      <div
        onMouseDown={this.handlePress}
        onMouseUp={this.handleRelease}
        className={classes}
        onClick={this.handleClick.bind(this)}>
        {mines}
      </div>
    )
  }
}