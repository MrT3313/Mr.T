// REACT
  import React, { Component } from 'react';

// COMPONENTS
  import Example_LineChart from './Components/LineChart'

// DATA
  import { data } from './data/random_x10'

// CSS
  import './App.css';

// -- *** START CODE *** -- //
// -- *** START CODE *** -- // 

class App extends Component {
  render() {
    {console.log(data)}
    return (
      <div className="App">
        <h2>Hello inside APP</h2>
        <Example_LineChart data={data}/>
      </div>
    );
  }
}

export default App;
