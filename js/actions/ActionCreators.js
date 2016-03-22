import { createAction } from 'redux-actions';
import { INCREMENT, DECREMENT } from './ActionTypes';

// Action Creator
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

//  非同期に increment する。
export const incrementAsync = (payload) => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(increment(payload))
  }, 1000)
}
//  非同期に increment する。
export const decrementAsync = (payload) => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(decrement(payload))
  }, 1000)
}
