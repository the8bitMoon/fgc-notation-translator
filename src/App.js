import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Body from './components/body.jsx';
import * as data from './maps/numpad.json';
import buildPattern from './helpers/buildPattern.js';
import splitText from './helpers/splitText';
import buildCombo from './helpers/buildCombo';

class App extends Component {
  constructor() {
    super()
    this.state = {
      page: 'main',
      map: '',
      combo: [],
      notation: '5A > 5B > 5C > 236A -> 236B',
      textOutput: ''
    }

    this.onInput = this.onInput.bind(this);
  }

  onInput(event) {
    const rawInput = event.target.value;
  }

  render() {
    const { notation } = this.state;
    const lineSplitPattern = buildPattern(data.cancels);
    const splitLines = splitText(notation, lineSplitPattern);
    console.log(splitLines);
    const combo = buildCombo(splitLines, data);
    return(
      <div className="App">
        {/* <header className="App-header">
          <h1>FGC Notation Translator Under Construction!</h1>
        </header> */}
        <Body
          map={this.state.map}
          combo={this.state.combo}
          notation={this.state.notation}
          textOuput={this.state.textOutput}
          onInput={this.onInput}
        />
      </div>
    )
  }
}

export default App;
