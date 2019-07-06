import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddle from 'redux-thunk'
import { logger } from 'redux-logger'
import reducer from './reducer'

const bindMiddleware = middleware => {
  console.log( 'process.env.NODE_ENV---------------------', process.env.NODE_ENV )

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger)
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const store = createStore(
  reducer,
  bindMiddleware([thunkMiddle])
)

export default store
