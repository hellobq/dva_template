import React from 'react'
import { connect } from 'dva'
import styles from './style.less'
// import { Button } from 'antd'

const IndexPage = (props) => {
  return (
    <button className={styles.button}>haha</button>
  )
}

export default connect()(IndexPage)
