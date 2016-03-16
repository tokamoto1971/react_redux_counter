import { createAction } from 'redux-actions';

// ActionType
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action Creator
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);


// export function increment() {
//   return {
//       type: 'INCREMENT_COUNTER',
//       count: 1
//   };
// }

// export function decrement() {
//   return {
//       type: 'DECREMENT_COUNTER',
//       count: -1
//   };
// }