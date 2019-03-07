import React, { Fragment, lazy, Suspense } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from '@/static/styles/global'
import IconfontStyle from '@/static/styles/iconfont'
import store from './store'
const Home = lazy(() => import(/* webpackChunkName: 'home' */ '@/pages/home/home'))
const About = lazy(() => import(/* webpackChunkName: 'about' */ '@/pages/about/about'))
const NoFind = lazy(() => import(/* webpackChunkName: '404' */ '@/pages/404/404'))

module.hot && module.hot.accept()

render(
  <Fragment>
    <GlobalStyle />
    <IconfontStyle />
    <Provider store={store}>
      <Router>
        <Suspense fallback={ <div>Loading...</div> }>
          <Switch>
            <Route path='/' exact render={() => <Home />} />
            <Route path='/about' render={() => <About />} />
            <Route render={() => <NoFind />} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  </Fragment>,

  document.getElementById('root')
)
