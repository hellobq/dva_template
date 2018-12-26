import { fromJS } from 'immutable'

const defaultState = fromJS({
  list: [1, 2, 3]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
