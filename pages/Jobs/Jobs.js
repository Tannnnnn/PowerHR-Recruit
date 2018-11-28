import { Image } from 'semantic-ui-react'
import React from 'react'
import { withLayout } from '../hoc'
import { compose, withProps } from 'recompose'
import styled from 'styled-components'

const enhance = compose(
    withProps({
      pageTitle: 'Welcome to PowerHR Admin'
    }),
    withLayout
  )
    
  export default enhance(() => 
    <div>
      <center>
        <h1>I'm glad to have you in my life</h1>
        <h1>💖</h1>
      </center>
    </div>
  );