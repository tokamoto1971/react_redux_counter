import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../js/actions/ActionCreators'
import * as types from '../../js/actions/ActionTypes'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', (done) => {

    const expectedActions = [
      { type: types.INCREMENT },
    ]
    const store = mockStore({ count: 0 }, expectedActions, done)
    store.dispatch(actions.incrementAsync(1))
  })
})