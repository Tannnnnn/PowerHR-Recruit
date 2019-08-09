import React from 'react'
import { AppHeader , AppFooter } from '../components'
import styled from 'styled-components'
import Box from '../components/Box'
import { compose , withState } from 'recompose'
import { withApp } from './'
import { Icon , Button , Modal } from 'semantic-ui-react'

const ContentWrapper = styled(Box) `
    backgroud-color: lightgray;
    font-family: 'Kanit', sans-serif ;
`

const ColorTextSmall1 = styled.small`
    font-size: 18px !important;
    font-family : 'Kanit', sans-serif !important;
`;

const ButtonClick = styled(Button)`
    font-family : 'Kanit', sans-serif !important;
    font-size: 14px !important;
`;

const enhance = compose(
    withApp,
    withState('isOpenInvalidCode' , 'setIsOpenInvalidCode' , false),
    withState('message' , 'setMessage')
)

export default function withLayout(WrappedComponent) {
    return enhance((props) => (
        <div>
            <AppHeader {...props}/>
                <ContentWrapper>
                    <WrappedComponent {...props}/>
                    <Modal size={'tiny'} open={props.isOpenInvalidCode} dimmer={"blurring"}>
                        <Modal.Header>
                            <center>
                                <Icon name='warning circle' size='big' color={"red"}/>
                            </center>
                        </Modal.Header>
                        <Modal.Content>
                            <center>
                                <ColorTextSmall1>{props.message}</ColorTextSmall1>
                            </center>
                        </Modal.Content>
                        <Modal.Actions>
                            <center>
                                <ButtonClick
                                    color={"orange"}
                                    onClick={() => props.setIsOpenInvalidCode(false)} 
                                    content='ตกลง' 
                                />
                            </center>
                        </Modal.Actions>
                    </Modal>
                </ContentWrapper>
            <AppFooter />
        </div>
    ))
}