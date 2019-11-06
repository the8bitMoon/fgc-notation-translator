import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Body from './components/body.jsx';

class App extends Component {
  constructor() {
    super()
    this.state = {
      page: 'main',
      map: '',
      combo: [],
      notation: '5A > 5B > 5C > 236A',
      textOutput: ''
    }

    this.onInput = this.onInput.bind(this);
  }

  onInput(event) {
    const rawInput = event.target.value;
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <h1>Under construction!</h1>
        </header>
          {/* <Body
          map={this.state.map}
          combo={this.state.combo}
          notation={this.state.notation}
          textOuput={this.state.textOutput}
          onInput={this.onInput}
        /> */}
      </div>
    )
  }
}

export default App;
