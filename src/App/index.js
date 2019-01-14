import React, { Component } from 'react';
import styled,{css} from 'styled-components';

import AppLayout from './AppLayout';
import './App.css';

import Welcome from './WelcomeMessage';



class App extends Component {
  render() {
    return (
      <AppLayout>
        <Welcome/>
      </AppLayout>
    );
  }
}

export default App;
