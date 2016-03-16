export default function counter (state = {count: 0}, action) {
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