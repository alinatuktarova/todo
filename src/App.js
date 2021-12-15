import './App.css';
import React from 'react';
import AddTask from './components/AddTask/AddTask';
import Container from './components/Container/Container';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">todo - items</h1>
        <AddTask />
        <Container />
      </div>
    );
  }
}
