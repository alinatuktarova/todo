import React from 'react';
import { completeTask, deleteTask, editTask } from '../../actions/tasks';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import styles from './Task.module.scss';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      editableArray: [],
    };
  }
  handleDelete = (id) => {
    this.props.deleteTask(id);
  };
  handleComplete = (id) => {
    this.props.completeTask(id);
  };
  handleEdit = (index) => {
    const newarr = this.state.editableArray.map((_, indexOfArray) => {
      if (index === indexOfArray) return true;
      else return false;
    });
    this.setState({ editableArray: newarr });
  };
  handleCheck = (id) => {
    const newarr = this.state.editableArray.map((_) => {
      return false;
    });
    this.setState({ editableArray: newarr });
    this.props.editTask({ id: id, text: this.myRef.current.innerText });
  };

  componentDidMount() {
    if (this.props.tasks.length > this.state.editableArray.length) {
      this.setState({ editableArray: [...this.state.editableArray, false] });
    }
  }
  componentDidUpdate() {
    if (this.props.tasks.length > this.state.editableArray.length) {
      this.setState({ editableArray: [...this.state.editableArray, false] });
    }
  }
  render() {
    return (
      <>
        <div className={styles.line} key={this.props.el.id}>
          <div
            ref={this.myRef}
            className={styles.text}
            suppressContentEditableWarning={true}
            contentEditable={this.state.editableArray[this.props.index]}
          >
            {this.props.el.text}
          </div>
          <Button
            classStyle={!this.props.el.completed ? 'complete' : 'done'}
            text={!this.props.el.completed ? 'Complete' : 'Done'}
            onClick={() => this.handleComplete(this.props.el.id)}
          />
          <Button
            classStyle={
              this.state.editableArray[this.props.index]
                ? 'editWaitCheck'
                : 'edit'
            }
            onClick={() => this.handleEdit(this.props.index)}
          />
          <Button
            classStyle={
              this.state.editableArray[this.props.index]
                ? 'checkWaitSubmit'
                : 'check'
            }
            onClick={() => this.handleCheck(this.props.el.id)}
          />
          <Button
            classStyle="delete"
            text="X"
            onClick={() => this.handleDelete(this.props.el.id)}
          />
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
    editTask: (id, text) => dispatch(editTask(id, text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
