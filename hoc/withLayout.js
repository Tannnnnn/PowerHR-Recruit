import React from 'react'
import { AppHeader , AppFooter } from '../components'
import styled from 'styled-components'
import Box from '../components/Box'

const ContentWrapper = styled(Box) `
    backgroud-color: lightgray;
`

export default function withLayout(WrappedComponent) {
    return ((props) => (
        <div>
            <AppHeader {...props}/>
                <ContentWrapper>
                    <WrappedComponent {...props}/>
                </ContentWrapper>
            <AppFooter />
        </div>
    ))
}