import React, { Component } from 'react';
import { HeaderNav } from '../components'
import ContentLayout from './ContentLayout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <ContentLayout />
      </div>
    );
  }
}

export default App;
