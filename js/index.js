import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import { increment, decrement } from './actions'
import counter from './reducers'
import CounterComponent from './components/Counter';

// Store
const store = createStore(counter);

// Containers
function mapStateToProps (state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps (dispatch) {
  return {
    onClickPlus: () => dispatch(increment(1)),
    onClickMinus: () => dispatch(decrement(1))
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