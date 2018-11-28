import React from 'react'
import { withLayout } from '../hoc'
import { compose, withProps } from 'recompose'
import styled from 'styled-components'

const H1 = styled.h1 `
  padding-top : 18px;
  font-size: 3rem !important;
  color : #515151 ;
`;

const enhance = compose(
  withProps({
    pageTitle: 'Welcome to PowerHR Admin'
  }),
  withLayout
)
  
export default enhance(() => 
  <div>
    <center>
      <H1>I'm glad to have you in my life</H1>
      <H1>💖</H1>
    </center>
  </div>
);