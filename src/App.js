import './App.css';
import React from 'react';
import AddTask from './components/AddTask/AddTask';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/tasks';
import Task from './components/Task/Task';

export default class App extends React.Component {
  render() {
    const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return (
      <Provider store={store}>
        <div className="App">
          <h1 className="title">todo - items</h1>
          <AddTask />
          <Task />
        </div>
      </Provider>
    );
  }
}
