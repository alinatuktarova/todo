import React from 'react';
import './Button.scss';

export default class Button extends React.Component {
  render() {
    return (
      <>
        <button
          type={this.props.type}
          onClick={this.props.onClick}
          className={this.props.classStyle}
        >
          {this.props.text}
        </button>
      </>
    );
  }
}
