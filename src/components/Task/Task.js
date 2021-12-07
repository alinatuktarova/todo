import React from 'react';
import { completeTask, deleteTask } from '../../actions/tasks';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import styles from './Task.module.scss';
import Checkbox from '../Checkbox/Checkbox';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { complete: true, done: true };
  }
  handleDelete = (id) => {
    this.props.deleteTask(id);
  };
  handleComplete = (id) => {
    this.props.completeTask(id);
  };
  handleCheckComplete = () => {
    this.setState({ complete: !this.state.complete });
  };
  handleCheckDone = () => {
    this.setState({ done: !this.state.done });
  };
  render() {
    return (
      <>
        <div className={styles.checkboxContainer}>
          <Checkbox
            text="Complete"
            checked={this.state.complete}
            onChange={() => this.handleCheckComplete()}
          />
          <Checkbox
            text="Done"
            checked={this.state.done}
            onChange={() => this.handleCheckDone()}
          />
        </div>
        <div className={styles.taskContainer}>
          {this.props.tasks &&
            this.props.tasks.map((el) => {
              if (this.state.complete && this.state.done) {
                return (
                  <div className={styles.line} key={el.id}>
                    <div className={styles.text}>{el.text}</div>
                    <Button
                      classStyle={!el.completed ? 'complete' : 'done'}
                      text={!el.completed ? 'Complete' : 'Done'}
                      onClick={() => this.handleComplete(el.id)}
                    />
                    <Button
                      classStyle="delete"
                      text="X"
                      onClick={() => this.handleDelete(el.id)}
                    />
                  </div>
                );
              } else if (this.state.complete && el.completed === false) {
                return (
                  <div className={styles.line} key={el.id}>
                    <div className={styles.text}>{el.text}</div>
                    <Button
                      classStyle={!el.completed ? 'complete' : 'done'}
                      text={!el.completed ? 'Complete' : 'Done'}
                      onClick={() => this.handleComplete(el.id)}
                    />
                    <Button
                      classStyle="delete"
                      text="X"
                      onClick={() => this.handleDelete(el.id)}
                    />
                  </div>
                );
              } else if (this.state.done && el.completed === true) {
                return (
                  <div className={styles.line} key={el.id}>
                    <div className={styles.text}>{el.text}</div>
                    <Button
                      classStyle={!el.completed ? 'complete' : 'done'}
                      text={!el.completed ? 'Complete' : 'Done'}
                      onClick={() => this.handleComplete(el.id)}
                    />
                    <Button
                      classStyle="delete"
                      text="X"
                      onClick={() => this.handleDelete(el.id)}
                    />
                  </div>
                );
              } else return <></>;
            })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ tasks: state.tasks });

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (id) => dispatch(deleteTask(id)),
    completeTask: (id) => dispatch(completeTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
