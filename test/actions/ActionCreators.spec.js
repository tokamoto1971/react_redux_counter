import expect from 'expect'
import { incrementAsync, decrementAsync } from '../../js/actions/ActionCreators'
import { INCREMENT, DECREMENT } from '../../js/actions/ActionTypes';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {

  it('{type: INCREMENT, payload: 123} が約1000ms後に返されるはず', (done) => {

    const store = mockStore()

    store.dispatch(incrementAsync(123))
    .then(() => {
      const actions = store.getActions()
      expect(actions).toEqual([{ type: INCREMENT, payload: 123 }])
    })
    .then(done)
    .catch(done)
  })

  it('{type: DECREMENT, payload: 456} が約1000ms後に返されるはず', (done) => {

    const store = mockStore()

    store.dispatch(decrementAsync(456))
    .then(() => {
      const actions = store.getActions()
      expect(actions).toEqual([{ type: DECREMENT, payload: 456 }])
    })
    .then(done)
    .catch(done)

  })
})