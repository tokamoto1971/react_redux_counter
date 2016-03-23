import expect from 'expect'
import counter from '../../js/reducers'

describe('reducers', () => {
  describe('counter', () => {
    it('should provide the initial state', () => {
      expect(counter(undefined, {})).toEqual({ count: 0 })
    })

    it('should handle INCREMENT action', () => {
      expect(counter({ count: 1 }, { type: 'INCREMENT', payload: 1 })).toEqual({ count: 2 })
    })

    it('should handle DECREMENT action', () => {
      expect(counter({ count: 1 }, { type: 'DECREMENT', payload: 1 })).toEqual({ count: 0 })
    })

    it('should ignore unknown actions', () => {
      expect(counter({ count: 1 }, { type: 'unknown', payload: 1 })).toEqual({ count: 1 })
    })
  })
})
