export function increment() {
  return {
      type: 'INCREMENT_COUNTER',
      count: 1
  };
}

export function decrement() {
  return {
      type: 'DECREMENT_COUNTER',
      count: -1
  };
}