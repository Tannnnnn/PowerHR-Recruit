import React from 'react'
import { withLayout } from '../hoc'
import styled from 'styled-components'
import { compose , withProps, withHandlers, withState } from 'recompose'
import { Container, Grid, Button, Form } from 'semantic-ui-react'
import theme from '../theme/default'
import { 
    input2GrideGrideMG,
    input2Gride
} from '../components/Input'
import {CarouselCompane} from '../components/Carousel'

const BoxHead = styled.div`
    margin-top: 40px !important;
    background-color: ${theme.colors.elementBackground};
    box-shadow: ${theme.colors.boxShadow};
`;

const BoxHead2 = styled.div`
    background-color: ${theme.colors.orange};
    box-shadow: ${theme.colors.boxShadow};
    height: 7px;
`;

const TextBox = styled.p`
    font-family: 'Kanit', sans-serif !important;
    font-size: 30px;
`;

const Box = styled.div`
    background-color: ${theme.colors.elementBackground};
    box-shadow: ${theme.colors.boxShadow};
    height: auto;
    margin-bottom: 3% !important;
`;

const MgGridLeft = styled.div`
    margin-left: 28% !important;
`;

const WidthGride = styled.div`
    margin-left: 13.5% !important;
    margin-right: 12.7% !important;
`;

const ButtonRegister = styled(Button)`
    width: 16% !important;
    height: 46px !important;
    background-color: #ee3900 !important;
    color: #ffffff !important;
    fontSize: 16 !important;
    font-family: 'Kanit',sans-serif !important;
    margin-left: 70.3% !important;
    margin-top: 2% !important;
`;

const ButtonCancel = styled(Button)`
    width: 13% !important;
    height: 47px !important;
    margin-left: -30% !important;
    fontSize: 16 !important;
    font-family: 'Kanit',sans-serif !important;
    background-color: ${theme.colors.elementBackground} !important;
    border-color: ${theme.colors.orange} !important;
`;

const enhance = compose(
    withState('firstName','setFirstName'),
    withProps({
        pageTitle: 'Register'
    }),
    withLayout,
    withHandlers({
        handleFirstName : props => () => event => {
            
        }
    })
)
 
export default enhance(() => 
    <div>
        {CarouselCompane ('CUPCODE CO., LTD.')}
        <Container>
            <BoxHead>
                <center><br/><TextBox>สมัครสมาชิก</TextBox></center><br/>
            </BoxHead>
            <BoxHead2/>
            <Box>
                <br/>
                    <Grid columns={2} padded='horizontally'>
                        <Grid.Column>
                            <MgGridLeft>
                                {input2GrideGrideMG('ชื่อ (ภาษาไทย) :', 'กรุณากรอกชื่อ (ภาษาไทย)' , props.handleFirstName() , 'text' , props.firstName)}
                            </MgGridLeft>
                        </Grid.Column>
                        <Grid.Column>
                            {input2Gride('นามสกุล (ภาษาไทย) :', 'กรุณากรอกนามสกุล (ภาษาไทย)')}
                        </Grid.Column>
                    </Grid>
                    <Grid columns={2} padded='horizontally'>
                        <Grid.Column>
                            <MgGridLeft>
                                {input2GrideGrideMG('อีเมล :', 'กรุณากรอกอีเมล')}
                            </MgGridLeft>
                        </Grid.Column>
                        <Grid.Column>
                            {input2Gride('เลขบัตรประจำตัวประชาชน :', 'กรุณากรอกเลขบัตรประจำตัวประชาชน')}
                        </Grid.Column>
                    </Grid>
                    <Grid columns={2} padded='horizontally'>
                        <Grid.Column>
                            <MgGridLeft>
                                {input2GrideGrideMG('รหัสผ่าน :', 'กรุณากรอกรหัสผ่าน')}
                            </MgGridLeft>
                        </Grid.Column>
                        <Grid.Column>
                            {input2Gride('ยืนยันรหัสผ่าน :', 'ยืนยันรหัสผ่าน')}
                        </Grid.Column>
                    </Grid>
                <ButtonRegister type='submit'>ยืนยันการสมัครสมาชิก</ButtonRegister>
                <ButtonCancel>ยกเลิกการสมัคร</ButtonCancel>
                <br/><br/>
            </Box>
        </Container>
    </div>
);