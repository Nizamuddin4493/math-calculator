import React, { useState } from 'react';
import '../index.css';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

const CalDesign = () => {
  const [displayed, setDisplayed] = useState({ total: 0, next: '', operation: '' });

  const onClick = (e) => {
    setDisplayed((state) => calculate(state, e.target.innerText));
  };

  const { total, next, operation } = displayed;

  return (
    <div className="calculator">
      <div className="result">
        {total}
        {operation}
        {next}
      </div>
      <Buttons click={onClick} />
    </div>
  );
};

export default CalDesign;
