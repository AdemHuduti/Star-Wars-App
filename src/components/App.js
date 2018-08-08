import React, { Component } from 'react';
import ShowMovie from './ShowMovie';
import Welcome from './Welcome';

class App extends Component {
  render() {

    return (
      <div>
        <div>
          <Welcome />
          <ShowMovie />
        </div>
      </div>
    );
  }
}

export default App;
