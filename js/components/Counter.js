import React, { Component, PropTypes } from 'react'


class CounterComponent extends Component {
  render () {
    const { count, onClickPlus, onClickMinus } = this.props;
    return (
      <div>
        <p><span>Count: {count}</span></p>
        <div>
          <button onClick={onClickPlus}>+1</button>
          <button onClick={onClickMinus}>-1</button>
        </div>
      </div>
    );
  }
}

CounterComponent.propTypes = {
  count       : PropTypes.number.isRequired,
  onClickPlus : PropTypes.func.isRequired,
  onClickMinus: PropTypes.func.isRequired
};

export default CounterComponent