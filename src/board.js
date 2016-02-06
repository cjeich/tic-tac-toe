import React, { Component } from 'react';
import { Row } from './row';
import { Cell } from './cell';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: this.props.initialUser,
      board: this.initializeBoard()
    }
  }
  initializeBoard(){
    var board =  []
    for (var i=0; i < this.props.rows; i++) {
      let row = [];
      for (var j=0; j < this.props.cols; j++) {
        row.push('');
      }
      board.push(row);
    }

    return board;
  }
  toggleUser(){
    var currentUser = (this.state.currentUser === 'x')? 'o':'x';
    this.setState({ currentUser });
  }
  handleClick(i ,j){
    var board = this.state.board;
    board[i][j] = this.state.currentUser;

    this.setState({board});
    this.toggleUser();
  }
  renderTagClass() {
    return ['board', `user-${this.state.currentUser}`].join(' ')
  }
  renderRows(){
    var rows =[];
    for (var i=0; i < this.props.rows; i++) {
      let row = [];
      for (var j=0; j < this.props.cols; j++) {
        row.push(
          <Cell
            key={`c-${i}-${j}`}
            onClick={this.handleClick.bind(this)}
            clickedBy={this.state.board[i][j]}
            row={i}
            col={j}
          />
        );
      }
      rows.push(row);
    }

    return rows.map( (r, i) => <Row key={`r-${i}`}>{r}</Row> );
  }
  render() {
    return (
      <div className={this.renderTagClass()}>
        {this.renderRows()}
      </div>
    );
  }
}

export { Board }
