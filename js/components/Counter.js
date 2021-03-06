import React, { PropTypes } from 'react'


const CounterComponent = ({
    count,
    onClickPlus,
    onClickMinus,
    onClickPlusAsync,
    onClickMinusAsync,
  }) => (
  <div>
    <p><span>Count: {count}</span></p>
    <div>
      <button onClick={onClickPlus}>+1</button>
      <button onClick={onClickMinus}>-1</button>
      <button onClick={onClickPlusAsync}>+1(Async)</button>
      <button onClick={onClickMinusAsync}>-1(Async)</button>
    </div>
  </div>
)

CounterComponent.propTypes = {
  count: PropTypes.number.isRequired,
  onClickPlus: PropTypes.func.isRequired,
  onClickMinus: PropTypes.func.isRequired,
  onClickPlusAsync: PropTypes.func.isRequired,
  onClickMinusAsync: PropTypes.func.isRequired,
};

export default CounterComponent
