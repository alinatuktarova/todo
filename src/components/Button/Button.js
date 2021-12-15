import React from 'react';
import './Button.scss';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button
        type={this.props.type}
        onClick={this.props.onClick}
        className={this.props.classStyle}
      >
        {this.props.text}
      </button>
    );
  }
}
