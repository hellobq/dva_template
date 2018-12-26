import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WrapperAbout } from './style'
import $demo from '@/static/images/demo.jpg'

@connect()
class About extends Component {
  render () {
    return <WrapperAbout>
      <h3>this is about page!</h3>
      <img src={$demo} alt=""/>
    </WrapperAbout>
  }
}

export default About
