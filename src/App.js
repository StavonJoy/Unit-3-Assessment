import React, { Component } from 'react';
import './App.css';
import Circles from './components/Circles/Circles'
import CircleSelector from './components/CircleSelector/CircleSelector'

const circleNo = ['0', '1', '2', '3']

class App extends Component {
  state = {
    circleIdx: 0
  }
  
  handleCircleSelect = (idx) => {
    this.setState({ circleIdx: idx })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 3 ASSESSMENT</header>
        <main>
          <CircleSelector 
          circleNo={circleNo}
          circleIdx={this.state.circleIdx}
          handleCircleSelect={this.handleCircleSelect}
          />
          <Circles 
          circleNo={circleNo}
          circleIdx={this.state.circleIdx}
          handleCircleSelect={this.handleCircleSelect}
          />
        </main>
      </div>
    );
  }
}

export default App;
