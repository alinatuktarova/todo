import './App.css';
import React from 'react';
import AddTask from './components/AddTask/AddTask';
import Task from './components/Task/Task';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">todo - items</h1>
        <AddTask />
        <Task />
      </div>
    );
  }
}
