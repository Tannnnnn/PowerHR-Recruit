import React from 'react'
import { withLayout , withApp } from '../hoc'
import styled from 'styled-components'
import { compose , withProps, withHandlers, withState , lifecycle } from 'recompose'
import { Container, Grid, Button, Form } from 'semantic-ui-react'
import theme from '../theme/default'
import axios from 'axios'
import { 
    input2GrideGrideMG,
    input2Gride
} from '../components/Input'
import {CarouselCompane} from '../components/Carousel'
import { inject, observer } from 'mobx-react'


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
    withState('idCard','setIdCard'),
    withState('password','setPassword'),
    withState('passwordCheck','setPasswordCheck'),
    withProps({
        pageTitle: 'Register'
    }),
    withLayout,
    lifecycle({
        async componentDidMount(){
        //   const urlIdCard = `http://localhost:4000/user/${this.props.urlIdCard.query.data}`
        //   const resIdCard = await axios.get(urlIdCard)
        //   this.props.setIdCard(resIdCard.data[0].idCard)

        //   const url = `http://localhost:4000/user`
        //   const res = await axios.get(url)
        //   let users = []
        //   res.data.map( data => {
        //     users.push(data.firstName , data.lastName , data.email , data.password , data.idCard)
        //   })
        //   this.props.setAllUsers(users) 
        }
    }),
    withHandlers({
        handleFirstName : props => () => event => {
            props.setFirstName(event.target.value)
        },
        handleLastName : props => () => event => {
            props.setLastName(event.target.value)
        },
        handleIdCard : props => () => event => {
            props.setIdCard(event.target.value)
        },
        onChange: props => () => event => {
            const { name , value } = event.target
            name === 'email' ? props.setEmail(value) : name === 'password' ? props.setPassword(value) : props.setPasswordCheck(value)
        },
        onSubmit: props => () => event => {        
            event.preventDefault()
            const { email , password , passwordCheck , idCard, firstName, lastName } = props   
            if (password == passwordCheck) {
                const urlIdCard = `http://localhost:4000/user/${props.idCard}`
                axios.get(urlIdCard)
                .then( res => {
                    console.log(res);
                })
                .catch( err => console.log(err))
            }
            // props.authStore.createUser(email,password)
            
            //     const url = 'http://localhost:4000/user'
            //     axios.post(url , {
            //         firstName : props.firstName,
            //         lastName : props.lastName,
            //         email : props.email,
            //         password : props.password,
            //         idCard : props.idCard
            //     })
            //     .then( res => {
            //         console.log(res)
            //        
            //     })
            //     .catch( err => {
            //         console.log(err);
            //     })
            // }
            // else{
            //     window.alert('wrong password')
            // }
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
                                {input2GrideGrideMG('อีเมล :', 'กรุณากรอกอีเมล' , props.onChange() , 'email' , props.email)}
                            </MgGridLeft>
                        </Grid.Column>
                        <Grid.Column>
                            {input2Gride('เลขบัตรประจำตัวประชาชน :', 'กรุณากรอกเลขบัตรประจำตัวประชาชน' , props.handleIdCard() , 'text' , props.idCard)}
                        </Grid.Column>
                    </Grid>
                    <Grid columns={2} padded='horizontally'>
                        <Grid.Column>
                            <MgGridLeft>
                                {input2GrideGrideMG('รหัสผ่าน :', 'กรุณากรอกรหัสผ่าน' , props.onChange() , 'password' , props.password )}
                            </MgGridLeft>
                        </Grid.Column>
                        <Grid.Column>
                            {input2Gride('ยืนยันรหัสผ่าน :', 'ยืนยันรหัสผ่าน' , props.onChange() , 'password' , props.passwordCheck)}
                        </Grid.Column>
                    </Grid>
                <ButtonRegister type='submit' onClick={props.onSubmit()}>ยืนยันการสมัครสมาชิก</ButtonRegister>
                <ButtonCancel>ยกเลิกการสมัคร</ButtonCancel>
                <br/><br/>
            </Box>
        </Container>
    </div>
);