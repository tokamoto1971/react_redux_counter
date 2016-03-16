import { createAction } from 'redux-actions';
import { INCREMENT, DECREMENT } from './ActionTypes';

// Action Creator
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
