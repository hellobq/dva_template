import dva from 'dva'
import { createBrowserHistory  } from 'history'
import router from './router'
import './assets/styles/index.less'

const app = dva({
  history: createBrowserHistory()
})
app.router(router)
app.start('#root')
