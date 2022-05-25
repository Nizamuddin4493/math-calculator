import React from 'react';
import '../index.css';

class CalDesign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="row"><input className="input" value="0" /></div>
        <div className="row">
          <div className="colr-grey item">AC</div>
          <div className="colr-grey item">+/-</div>
          <div className="colr-grey item">%</div>
          <div className="colr-orng item">+</div>
        </div>
        <div className="row">
          <div className="colr-grey item">7</div>
          <div className="colr-grey item">8</div>
          <div className="colr-grey item">9</div>
          <div className="colr-orng item">x</div>
        </div>
        <div className="row">
          <div className="colr-grey item">4</div>
          <div className="colr-grey item">5/-</div>
          <div className="colr-grey item">6</div>
          <div className="colr-orng item">-</div>
        </div>
        <div className="row">
          <div className="colr-grey item">1</div>
          <div className="colr-grey item">2</div>
          <div className="colr-grey item">3</div>
          <div className="colr-orng item">+</div>
        </div>
        <div className="last row">
          <div className="colr-grey item-zero">0</div>
          <div className="colr-grey item">.</div>
          <div className="colr-orng item">=</div>
        </div>
      </div>
    );
  }
}

export default CalDesign;
