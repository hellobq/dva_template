import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Wrapper } from './style'
// import './demo'
import $avatar from '@/static/images/avatar.jpg'
import $demo from '@/static/images/demo.jpg'

const mapState = (state) => ({
  list: state.getIn(['home', 'list'])
})

const mapDispatch = (dispatch) => ({

})

@connect(mapState, mapDispatch)
class Home extends Component {
  render () {
    console.log(this.props)
    return (
      <Wrapper className='home'>
        hahjs
        <i className='iconfont'>&#xe61d;</i>
        <img src={$avatar} alt=""/>
        <img src={$demo} alt=""/>
        <div className="home-list">
          <ul>
            {
              this.props.list.map(item => <li key={item}>{item}</li>)
            }
          </ul>
        </div>
        <button onClick={this.handleClick}>click!</button>
      </Wrapper>
    )
  }
}

export default Home
