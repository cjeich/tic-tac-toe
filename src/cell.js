import React, { Component } from 'react';

export class Cell extends Component {
  handleClick(e) {
    if(this.props.clickedBy){ return false; }
    
    this.props.onClick(this.props.row, this.props.col);
  }
  renderClass(){
    return ['cell', `has-${this.props.clickedBy}`].join(' ')
  }
  render() {
    return (
      <div
        onClick={function(e){this.handleClick(e)}.bind(this)}
        className={this.renderClass()}
        />
    );
  }
}
