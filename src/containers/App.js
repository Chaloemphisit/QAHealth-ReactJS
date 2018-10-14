import React, { Component } from 'react';
import { HeaderNav } from '../components'
import HomeLayout from './HomeLayout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <HomeLayout />
      </div>
    );
  }
}



export default App;
