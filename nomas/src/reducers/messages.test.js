import messages from './messages'
import * as types from '../constants/ActionTypes'

describe('Messages reducer', () => {
  it('should return the initial state, empty', () => {
    expect(messages(undefined, {})).toEqual([])
  })

  it('should handle ADD_MESSAGE and store every message', () => {
    expect(messages([], {
      type: types.ADD_MESSAGE,
      message: 'Hey',
    })).toEqual([
      {
        message: 'Hey',
      }
    ])

    expect(messages(
      [
        {
          message: 'Hey',
        }
      ],
      {
        type: types.ADD_MESSAGE,
        message: 'Hey again',
      }
    )).toEqual([
      {
        message: 'Hey',
      },
      {
        message: 'Hey again',
      }
    ])
  })
})
