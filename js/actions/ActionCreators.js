import { createAction } from 'redux-actions';
import { INCREMENT, DECREMENT } from './ActionTypes';

// Action Creator
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const delay = 1000;


//  Promise を用いて非同期にタイマーをセットする。
function setTimeoutAsync(d) {
  return new Promise((resolve, reject) => (
    setTimeout(resolve, d)
  ))
}

//  Promise を用いて非同期に decrement する。
export const decrementAsync = (payload) => (dispatch, getState) => (
  setTimeoutAsync(delay)
  .then(() => dispatch(decrement(payload)))
)

//  Promise を用いて非同期に increment する。
export const incrementAsync = (payload) => (dispatch, getState) => (
  setTimeoutAsync(delay)
  .then(() => dispatch(increment(payload)))
)
