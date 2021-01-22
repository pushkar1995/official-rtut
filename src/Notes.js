//Square Component before Functional Component Until Lifing State Up

class Square extends React.Component {

    // Making an Interactive Component
    // constructor(props) {
    //   super(props)
    //   this.state = {
    //     value: null,
    //   }
    // }
  
      render() {
        return (
          <button 
            className="square"
            // onClick={() => alert('click')}
  
             // Making an Interactive Component
            // onClick={() => this.setState({value: 'X'})} 
            //to set value X when clicked at squares
            //By calling this.setState from an onClick handler in the Square’s render method,
            //we tell React to re-render that Square whenever its <button> is clicked. 
          
            // After Lifting State Up
            onClick={ () => this.props.onClick()} 
          >
              
            {/* Making an Interactive Component */}
            {/* {this.state.value} */}
  
            {/* After lifting up the state */}
            {this.props.value}
  
          </button>
        );
      }
    }


    //Board Component before Functional Component Until Lifing State Up

    class Board extends React.Component {

        //Lifting State Up:
        // Add a constructor to the Board and 
        // set the Board’s initial state to contain an array of 9 nulls corresponding to the 9 squares:
        constructor(props) {
          super(props)
          this.state = {
            squares: Array(9).fill(null),
          }
        }
    
         //Lifting State Up:
         handleClick(i) {
           const squares = this.state.squares.slice();
           // Note : we call .slice() to create a copy of the squares array to 
           //modify instead of modifying the existing array. 
    
           squares[i] = 'X';
           this.setState({squares: squares})
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
      