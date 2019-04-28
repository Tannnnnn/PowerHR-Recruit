import React from 'react'
import { AppHeader , AppFooter } from '../components'
import styled from 'styled-components'
import Box from '../components/Box'
import { compose } from 'recompose'
import { withApp } from './'

const ContentWrapper = styled(Box) `
    backgroud-color: lightgray;
    font-family: 'Kanit', sans-serif ;
`

const enhance = compose(
    withApp,
)

export default function withLayout(WrappedComponent) {
    return enhance((props) => (
        <div>
            <AppHeader {...props}/>
                <ContentWrapper>
                    <WrappedComponent {...props}/>
                </ContentWrapper>
            <AppFooter />
        </div>
    ))
}