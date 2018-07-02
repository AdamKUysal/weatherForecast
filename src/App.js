import React, { Component } from 'react';
import ForecastList from './components/forecast_list';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <ForecastList />
      </div>
    );
  }
}

export default App;