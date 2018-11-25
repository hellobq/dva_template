import React, { Component } from 'react'
import { connect } from 'dva'
import styles from './style.less'
// import { Button } from 'antd'

class IndexPage extends Component {

  render () {
    const {count, dispatch, users} = this.props

    const handleClick = () => {
      dispatch({
        type: 'home/add'
      })
    }

    return (
      <div>
        <span>{count}</span>
        <button className={styles.button} onClick={handleClick}>haha</button>
        <ul>
          {
            users.map(item => <li key={item.id}>{item.name}</li>)
          }
        </ul>
      </div>
    )
  }

  componentDidMount () {
    const { dispatch } = this.props

    dispatch({
      type: 'home/getUsers'
    })
  }
}

const mapState = state => ({
  count: state.home.count,
  users: state.home.users
})

export default connect(mapState)(IndexPage)
