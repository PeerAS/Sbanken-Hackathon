import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './state/store'; 
import logo from './logo.svg';
import Wrapper from './components';
import ACTIONS from './state/actions';
import './App.css';
import { getLoans } from './state/actions';

class App extends Component {

  componentWillMount(){
    console.log('dette store', store.getState());
    const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);
  }
  
  render() {
    
    return (
      <Provider store={store}>
      <div className="App">
        <Wrapper />
      </div>
      </Provider>
    );
  }
}

export default App;
