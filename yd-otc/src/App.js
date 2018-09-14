import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './styles/swiper.min.css';
class App extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return this.props.children;
  }
}

export default hot(module)(App);
