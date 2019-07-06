import App, { Container } from 'next/app'
import { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import theme from '../src/config/theme'
import store from '../src/store'
import withReduxStore from '../src/tools/with-redux-store'
import GlobalStyle from '../src/components/global-style'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    }
  }

  render () {
    const { Component, pageProps, store } = this.props
    return (
      <Fragment>
        <GlobalStyle />
        <Container>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </Provider>
        </Container>
      </Fragment>
    )
  }
}

export default withReduxStore(MyApp)
