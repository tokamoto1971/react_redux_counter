import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';


// Action
const INCREMENT_COUNTER = {
  type: 'INCREMENT_COUNTER',
  count: 1
};

const DECREMENT_COUNTER = {
  type: 'DECREMENT_COUNTER',
  count: -1
};

// Reducer
function counter (state = {count: 0}, action) {
  let count = state.count;
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {count: count + action.count};
    case 'DECREMENT_COUNTER':
      return {count: count + action.count};
    default:
      return state;
  }
}

// Store
let store = createStore(counter);

// Component
class CounterComponent extends React.Component {
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
  count: PropTypes.number.isRequired,
  onClickPlus: PropTypes.func.isRequired
};

// Containers
function mapStateToProps (state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps (dispatch) {
  return {
    onClickPlus: () => dispatch(INCREMENT_COUNTER),
    onClickMinus: () => dispatch(DECREMENT_COUNTER)
  };
}

let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);

// main
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-container')
);