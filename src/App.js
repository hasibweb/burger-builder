import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BurgerBuilder from './components/BurgerBuilder';
import { Provider } from './context/context';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="container">
          <BurgerBuilder />
        </div>
      </Provider>
    );
  }
}

export default App;
