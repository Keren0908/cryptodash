import React, { Component } from 'react';
import styled,{css} from 'styled-components';

import './App.css';

import Welcome from './WelcomeMessage';

const MyButton = styled.div`
  color: green;

  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
  `;


class App extends Component {
  render() {
    return (
      <div>
        <Welcome/>
        <MyButton>Hello</MyButton>
        <MyButton primary>Hello</MyButton>
      </div>
    );
  }
}

export default App;
