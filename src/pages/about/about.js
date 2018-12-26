import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WrapperAbout } from './style'

@connect()
class About extends Component {
  render () {
    return <WrapperAbout>about!</WrapperAbout>
  }
}

export default About
