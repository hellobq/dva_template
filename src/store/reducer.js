import { combineReducers } from 'redux-immutable'
import homeReducer from '../pages/home/store/reducer'

export default combineReducers({
  home: homeReducer
})
