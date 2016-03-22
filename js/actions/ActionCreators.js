import { createAction } from 'redux-actions';
import { INCREMENT, DECREMENT, INCREMENT_ASYNC } from './ActionTypes';

// Action Creator
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const incrementAsync = (payload) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(increment(payload))
    }, 1000)
  }
}
