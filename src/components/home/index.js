import { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { add } from './store/actions'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const Button = styled.button`
  color: #000;
`

class Home extends Component {
  render() {
    return (
      <div>
        <Title>{ this.props.count }</Title>
        <Button onClick={this.props.handleClick}>add</Button>
      </div>
    )
  }
}

const mapState = state => ({
  count: state.getIn(['home', 'count'])
})

const mapDispatch = dispatch => ({
  handleClick() {
    dispatch(add())
  }
})

export default connect(mapState, mapDispatch)(Home)
