import React, { Fragment, lazy, Suspense } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GlobalStyle from '@/static/styles/global'
import IconfontStyle from '@/static/styles/iconfont'
import store from './store'
const Home = lazy(() => import('@/pages/home/home'))
const About = lazy(() => import('@/pages/about//about'))

module.hot && module.hot.accept()

render(
  <Fragment>
    <GlobalStyle />
    <IconfontStyle />
    <Provider store={store}>
      <Router>
        <Suspense fallback={ <div>Loading...</div> }>
          <Route path='/' exact render={() => <Home />} />
          <Route path='/about' render={() => <About />}></Route>
        </Suspense>
      </Router>
    </Provider>
  </Fragment>,
  document.getElementById('root')
)


