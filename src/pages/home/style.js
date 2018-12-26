import styled from 'styled-components'
import $avator from '../../static/images/avatar.jpg'

export const Wrapper = styled.div`
  color: red;
  width: 200px;
  height: 200px;
  line-height: 1;
  background: url(${$avator}) no-repeat;
  transform: translateX(100px);
`
