import { handleActions } from 'redux-actions';
import { INCREMENT, DECREMENT } from '../actions/ActionTypes';

const counter = handleActions({
  INCREMENT: (state, action) => ({ count: state.count + action.payload }),
  DECREMENT: (state, action) => ({ count: state.count - action.payload })
}, { count: 0 });

export default counter;