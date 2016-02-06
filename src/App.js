import React, { Component } from 'react';
import { Board } from './board';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Board
          initialUser='x'
          cols={3}
          rows={3}
        />
      </div>
    );
  }
}
