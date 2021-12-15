import React from 'react';
import styles from './InputField.module.scss';

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <input
        type="text"
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.onChange}
        className={styles.input}
      />
    );
  }
}
