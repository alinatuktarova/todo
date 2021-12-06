import React from 'react';
import { completeTask, deleteTask } from '../../actions/tasks';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import styles from './Task.module.scss';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: null,
    };
  }
  handleDelete = (id) => {
    this.props.deleteTask(id);
  };
  handleComplete = (id) => {
    this.props.completeTask(id);
  };

  render() {
    return (
      <div className={styles.taskContainer}>
        {this.props.tasks &&
          this.props.tasks.map((el) => (
            <div className={styles.line}>
              <div className={styles.text}>{el.text}</div>
              <Button
                complete
                text={!el.completed ? 'Complete' : 'Done'}
                onClick={() => this.handleComplete(el.id)}
              />
              <Button delete onClick={() => this.handleDelete(el.id)} />
            </div>
          ))}
      </div>
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
