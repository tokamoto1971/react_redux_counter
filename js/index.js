import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import createFinalStore from './store/configureStore';
import { Provider, connect } from 'react-redux';

import { increment, decrement, incrementAsync, decrementAsync } from './actions/ActionCreators'
import CounterComponent from './components/Counter';


// Store
const store = createFinalStore();


// Containers
function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  const payload = 1
  return {
    onClickPlus: () => dispatch(increment(payload)),
    onClickMinus: () => dispatch(decrement(payload)),
    onClickPlusAsync: () => dispatch(incrementAsync(payload)),
    onClickMinusAsync: () => dispatch(decrementAsync(payload)),
  };
}

const App = connect(
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
