import React from 'react';
import styles from './Button.module.scss';

export default class Button extends React.Component {
  render() {
    return (
      <>
        {this.props.add && (
          <button
            type={this.props.type}
            onClick={this.props.onClick}
            className={styles.add}
          >
            {this.props.text}
          </button>
        )}
        {this.props.delete && (
          <button
            type={this.props.type}
            onClick={this.props.onClick}
            className={styles.delete}
          >
            x
          </button>
        )}
        {this.props.complete && (
          <button
            type={this.props.type}
            onClick={this.props.onClick}
            className={
              this.props.text === 'Complete' ? styles.complete : styles.done
            }
          >
            {this.props.text}
          </button>
        )}
      </>
    );
  }
}
