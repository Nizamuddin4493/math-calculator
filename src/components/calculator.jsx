import React from 'react';
import '../index.css';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

class CalDesign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      operation: null,
      next: null,
    };
  }

  onClick = (e) => {
    this.setState((state) => calculate(state, e.target.innerText));
  };

  render() {
    const { total } = this.state;
    const { operation } = this.state;
    const { next } = this.state;
    const btn = {
      value: ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', ' ='],
    };

    return (
      <div className="calculator">
        <div className="result">
          {total}
          {operation}
          {next}
        </div>
        <Buttons btn={btn} click={this.onClick} />
      </div>
    );
  }
}

export default CalDesign;
