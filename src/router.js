import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import dynamic from 'dva/dynamic'

const routes = [{
  path: '/',
  exact: true,
  models: () => [
    import('./models/Home')
  ],
  component: () => import('./pages/Home')
}]

const router = ({ history, app }) => (
  <Router history={history}>
    <Switch>
      {
        routes.map(({path, exact,  ...dynamics}) => 
          <Route
            key={path}
            path={path}
            exact={exact}
            component={dynamic({app, ...dynamics})} 
          />
        )
      }
    </Switch>
  </Router>
)

export default router
