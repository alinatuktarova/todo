import React from 'react';
import { connect } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import { addTask } from '../../actions/tasks';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import styles from './AddTask.module.scss';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleAdd = (event) => {
    event.preventDefault();
    if (this.state.value !== '') {
      this.props.addTask({
        id: uuidv1(),
        text: this.state.value,
        completed: false,
      });
      this.setState({ value: '' });
    }
  };

  handleChange = (event) => this.setState({ value: event.target.value });

  render() {
    return (
      <form className={styles.form}>
        <InputField
          placeholder="New task"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Button
          type="submit"
          text="Add"
          onClick={this.handleAdd}
          classStyle="add"
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTask: (payload) => dispatch(addTask(payload)),
});

export default connect(null, mapDispatchToProps)(AddTask);
