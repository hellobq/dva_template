import React, { Component } from 'react'
import { connect } from 'react-redux'
import Test from './components/Test'
import styles from './style'

const mapState = (state) => ({
  list: state.getIn(['home', 'list'])
})

const mapDispatch = (dispatch) => ({

})

@connect(mapState, mapDispatch)
class Home extends Component {
  render () {
    return (
      <div className={styles.wrapper}>
        hello world
        <Test />
      </div>
    )
  }
}

export default Home
