import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
} 
  class Board extends React.Component {

    //Lifting State Up:
    // Add a constructor to the Board and 
    // set the Board’s initial state to contain an array of 9 nulls corresponding to the 9 squares:
    constructor(props) {
      super(props)
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      }
    }

     //Lifting State Up:
     handleClick(i) {
       const squares = this.state.squares.slice();
       // Note : we call .slice() to create a copy of the squares array to 
       //modify instead of modifying the existing array. 

       squares[i] = this.state.xIsNext ? 'X' : 'O';

       this.setState({
         squares: squares,
         xIsNext: !this.state.xIsNext,
        })
     }

    renderSquare(i) {
      return (
      <Square 
        //value={i}
        //value={this.state.squares[i]}

        //Lifting State Up:
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        //The onClick prop is a function that Square can call when clicked
      />
      )
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  