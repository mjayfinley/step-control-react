import React, { Component } from 'react';
import {CurrentNumber} from './components/CurrentNumber'
import './App.css';
import './Styles.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentNumber : 0
    }
  }

  handleDecreaseNumber = (() => {

    let number = this.state.currentNumber

    this.setState({
      currentNumber : number-1

    })

  })

  handleIncreaseNumber = (() => {

    let number = this.state.currentNumber

    this.setState({
      currentNumber : number+1

    })

  })



  render() {
    return (
      <div id="container">
        <button onClick={this.handleDecreaseNumber}>-</button>
        <CurrentNumber number = {this.state.currentNumber}/>
        <button onClick={this.handleIncreaseNumber}>+</button>
      </div>
    );
  }
}

export default App;
