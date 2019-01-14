import React, { Component } from 'react';
import styled,{css} from 'styled-components';

import AppLayout from './AppLayout';
import './App.css';

import {AppProvider} from './AppProvider';
import Welcome from './WelcomeMessage';
import AppBar from './AppBar';



class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Welcome/>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
