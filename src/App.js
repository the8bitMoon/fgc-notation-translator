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
  }

  render() {
    return(
      <div className="App">
        App will go here.
        <Body
          map={this.state.map}
          combo={this.state.combo}
          notation={this.state.notation}
          textOuput={this.state.textOutput}
        />
      </div>
    )
  }
}

export default App;
