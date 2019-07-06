import { fromJS } from 'immutable'
import { COUNT_ADD } from './types'

const defaultState = fromJS({
  count: 0
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case COUNT_ADD:
      return state.set('count', state.get('count') + 1);
    default:
      return state;
  }
}
