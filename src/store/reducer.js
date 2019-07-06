import { combineReducers } from 'redux-immutable'
import homeReducer from '../components/home/store/reducer'

export default combineReducers({
  home: homeReducer
})
