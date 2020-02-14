import React, { Component } from 'react';
import Chessboard from 'chessboardjsx';

class ChessBoard extends Component {
  
  constructor( props: any ) {
    super( props );
    this.state = {
      board: null,
      config: {
        draggable: true,
      }
    };
  }

  render() {
    return (
      <div>
        <Chessboard position="start"/>
      </div>
    );
  }
}

export default ChessBoard