import React from 'react';
import styles from './Checkbox.module.scss';

export default class Checkbox extends React.Component {
  render() {
    return (
      <>
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={this.props.onChange}
          className={styles.checkbox}
          id={this.props.text}
        />
        <label htmlFor={this.props.text} className={styles.labelForCheckbox}>
          {this.props.text}
        </label>
      </>
    );
  }
}
