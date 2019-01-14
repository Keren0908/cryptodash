import React, { Component } from 'react';
import styled,{css} from 'styled-components';

import AppLayout from './AppLayout';
import './App.css';

import {AppProvider} from './AppProvider';
import AppBar from './AppBar';
import Settings from '../Settings';



class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Settings />
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
