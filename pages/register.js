import React from 'react'
import { withLayout , withApp } from '../hoc'
import styled from 'styled-components'
import { compose , withProps, withHandlers, withState , lifecycle } from 'recompose'
import { Container, Grid, Button } from 'semantic-ui-react'
import theme from '../theme/default'
import { 
    input2GrideGrideMG,
    input2Gride,
    input2GrideOnKeyUp
} from '../components/Input'
import {CarouselCompane} from '../components/Carousel'
import { inject, observer } from 'mobx-react'
import { firebase } from '../firebase/index'


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
    withApp,
    inject('authStore'),
    withState('firstName','setFirstName'),
    withState('lastName', 'setLastName'),
    withState('email','setEmail'),
    withState('idcard','setIdcard'),
    withState('password','setPassword'),
    withState('passwordCheck','setPasswordCheck'),
    withProps({
        pageTitle: 'Register'
    }),
    withLayout,
    withHandlers({
        handleFirstName : props => () => event => {
            props.setFirstName(event.target.value)
        },
        handleLastName : props => () => event => {
            props.setLastName(event.target.value)
        },
        handleIdcard : props => () => event => {
            let keycode = event.keyCode            
            let stack = props.idcard
            if (keycode > 95 && keycode < 106 || keycode === 8 || keycode > 47 && keycode < 58) {
                if (event.target.value.length > 17) {
                    event.target.value = stack
                }
                else{
                    if (
                        event.target.value.length === 1 && keycode !== 8 || 
                        event.target.value.length === 6 && keycode !== 8 || 
                        event.target.value.length === 12 && keycode !== 8 || 
                        event.target.value.length === 15 && keycode !== 8 
                    ){
                        event.target.value += '-'
                    }                
                    props.setIdcard(event.target.value)                    
                }
            }
            else{
                if (event.keyCode === 9) {
                    event.target.value = ''
                }
                else{
                    event.target.value = stack
                }
            }
        },
        onChange: props => () => event => {
            const { name , value } = event.target
            name === 'email' ? props.setEmail(value) : name === 'password' ? props.setPassword(value) : props.setPasswordCheck(value)
        },
        onSubmit: props => () => event => {      
           
            event.preventDefault()
            const { email , password , passwordCheck , idcard, firstName, lastName } = props
            let result_idcard = parseInt(idcard.split('-').join(''))    
            let check = idcard.split('-').join('')   
            if (firstName && lastName && email && password && passwordCheck && check.length === 13) {
                firebase.database()
                    .ref("users")
                    .orderByChild("idcard")
                    .equalTo(result_idcard)
                    .once("value").then( snapshot => {
                        if (password === passwordCheck && !snapshot.val()) {
                            props.authStore.createUser(props , result_idcard)
                        }
                        else{
                            snapshot.val() ? alert('ไม่สามารถสมัครสมาชิกได้ เนื่องรหัสบัตรประชาชนนี้มีอยู่ในระบบแล้ว !')
                            : alert('กรุณากรอกพาสเวิร์ดให้ตรงกันทั้งสองช่อง')
                        }
                    })
            }   
            else{
                alert('กรุณากรอกข้อมูลให้ครบถ้วนก่อนทำการกดยืนยัน!')
            }     
        }
    }),
    lifecycle({
        componentDidMount(){            
            !this.props.authStore.accessToken ? null : window.location.href = '/'
        }
    }),
    observer
)
 
export default enhance((props) => 
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
                                {input2GrideGrideMG('ชื่อ (ภาษาไทย) :', 'กรุณากรอกชื่อ (ภาษาไทย)' , props.handleFirstName(), 'text' , props.firstname )}
                            </MgGridLeft>
                        </Grid.Column>
                        <Grid.Column>
                            {input2Gride('นามสกุล (ภาษาไทย) :', 'กรุณากรอกนามสกุล (ภาษาไทย)' , props.handleLastName() , 'text' , props.lastName)}
                        </Grid.Column>
                    </Grid>
                    <Grid columns={2} padded='horizontally'>
                        <Grid.Column>
                            <MgGridLeft>
                                {input2GrideGrideMG('อีเมล :', 'กรุณากรอกอีเมล' , props.onChange() , 'email' , props.email , 'email')}
                            </MgGridLeft>
                        </Grid.Column>
                        <Grid.Column>
                            {input2GrideOnKeyUp('เลขบัตรประจำตัวประชาชน :', 'ตัวอย่าง 1-2345-67890-12-3', props.handleIdcard(), 'text', props.idcard)}
                        </Grid.Column>
                    </Grid>
                    <Grid columns={2} padded='horizontally'>
                        <Grid.Column>
                            <MgGridLeft>
                                {input2GrideGrideMG('รหัสผ่าน :', 'กรุณากรอกรหัสผ่าน' , props.onChange() , 'password' , props.password , 'password' )}
                            </MgGridLeft>
                        </Grid.Column>
                        <Grid.Column>
                            {input2Gride('ยืนยันรหัสผ่าน :', 'ยืนยันรหัสผ่าน' , props.onChange() , 'password' , props.passwordCheck , 'passwordCheck')}
                        </Grid.Column>
                    </Grid>
                <ButtonRegister type='submit' onClick={props.onSubmit()}>ยืนยันการสมัครสมาชิก</ButtonRegister>
                <ButtonCancel>ยกเลิกการสมัคร</ButtonCancel>
                <br/><br/>
            </Box>
        </Container>
    </div>
);