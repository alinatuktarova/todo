import React from 'react';
import { connect } from 'react-redux';
import styles from './Container.module.scss';
import Checkbox from '../Checkbox/Checkbox';
import Task from '../Task/Task';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: true,
      done: true,
    };
  }
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
          <span className={styles.totalTasks}>
            Total: {this.props.tasks.length}
          </span>
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
            this.props.tasks.map((el, index) => {
              if (this.state.complete && this.state.done) {
                return <Task el={el} index={index} />;
              } else if (this.state.complete && el.completed === false) {
                return <Task el={el} index={index} />;
              } else if (this.state.done && el.completed === true) {
                return <Task el={el} index={index} />;
              } else return <></>;
            })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ tasks: state.tasks });

export default connect(mapStateToProps, null)(Container);
