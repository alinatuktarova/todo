import React from 'react';
import { connect } from 'react-redux';
import { completeTask, deleteTask, editTask } from '../../actions/tasks';
import Button from '../Button/Button';
import styles from './Task.module.scss';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      editableArray: [],
    };
  }

  componentDidMount() {
    if (this.props.tasks.length > this.state.editableArray.length) {
      this.setState((prevState) => ({
        editableArray: [...prevState.editableArray, false],
      }));
    }
  }

  componentDidUpdate() {
    if (this.props.tasks.length > this.state.editableArray.length) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState((prevState) => ({
        editableArray: [...prevState.editableArray, false],
      }));
    }
  }

  handleComplete = (id) => {
    this.props.completeTask(id);
  };

  handleDelete = (id) => {
    this.props.deleteTask(id);
  };

  handleEdit = (index) => {
    const newarr = [];
    for (let i = 0; i < this.state.editableArray.length; i += 1) {
      if (index === i) {
        newarr.push(true);
      } else newarr.push(false);
    }
    this.setState({ editableArray: newarr });
  };

  handleCheck = (id) => {
    const newarr = [];
    for (let i = 0; i < this.state.editableArray.length; i += 1) {
      newarr.push(false);
    }
    this.setState({ editableArray: newarr });
    this.props.editTask({ id, text: this.myRef.current.innerText });
  };

  render() {
    return (
      <div className={styles.line} key={this.props.el.id}>
        <div
          ref={this.myRef}
          className={styles.text}
          suppressContentEditableWarning
          contentEditable={this.state.editableArray[this.props.index]}
        >
          {this.props.el.text}
        </div>
        <Button
          type="button"
          classStyle={!this.props.el.completed ? 'complete' : 'done'}
          text={!this.props.el.completed ? 'Complete' : 'Done'}
          onClick={() => this.handleComplete(this.props.el.id)}
        />
        <Button
          type="button"
          classStyle={
            this.state.editableArray[this.props.index]
              ? 'editWaitCheck'
              : 'edit'
          }
          onClick={() => this.handleEdit(this.props.index)}
        />
        <Button
          type="button"
          classStyle={
            this.state.editableArray[this.props.index]
              ? 'checkWaitSubmit'
              : 'check'
          }
          onClick={() => this.handleCheck(this.props.el.id)}
        />
        <Button
          type="button"
          classStyle="delete"
          text="X"
          onClick={() => this.handleDelete(this.props.el.id)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ tasks: state.tasks });

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (id) => dispatch(deleteTask(id)),
  completeTask: (id) => dispatch(completeTask(id)),
  editTask: (id, text) => dispatch(editTask(id, text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
