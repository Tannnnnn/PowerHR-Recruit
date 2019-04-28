import { Segment , Header , Container , Menu , Image , Icon , Dropdown , Input , Form , Checkbox ,Button } from 'semantic-ui-react'
import styled from 'styled-components'
import theme from '../theme/default'
import Link from 'next/link'
import { compose , withProps, withHandlers, withState , lifecycle } from 'recompose'
import { inject, observer } from 'mobx-react'
import _ from 'lodash'
import auth from '../firebase'

const SegmentHeader = styled(Segment) `
    overflow : none !important;
    background : #ff5722 !important;
    padding-bottom : 0px !important;
    border-radius : 0px !important;
    border-bottom: 8px solid #ee3900 !important;
    position: fixed !important;
    top: 0 !important;
    width: 100% !important;
    z-index: 999;
`;

const TextHeader = styled(Header)`
    margin-bottom : 16px !important;
    font-family: 'Kanit', sans-serif !important;
    color : #fff !important;
    margin-top: 0.6% !important;
`;

const ImageHeader = styled(Header)`
    margin-top: 0% !important;
    margin-right: 0rem !important;
`;

const MenuItem = styled(Menu.Item)`
    color : #fff !important;
    cursor : pointer ;
    &:hover {
        color : #000 !important;
    }
`;

const MarginDrowMenu = styled(Dropdown.Menu)`
    left: -426% !important;
    top: 138% !important;
    height: 349px;
    width: 430px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16) !important;
`;

const TextLogin = styled.h1`
    font-family: 'Kanit', sans-serif !important;
    color : #000000 !important;
    margin-top: 20px !important;
    font-size: 25px !important;
    font-weight: 400 !important;
`;

const MgHR = styled.hr`
    width: 88%;
    height: 5px;
    color: ${theme.colors.orange} !important;
    border-radius: 87px;
    background-color: ${theme.colors.orange} !important;
    border: aliceblue;
`;

const MgFrom = styled(Form.Field)`
    margin-left: 6% !important;
    width: 88% !important;
    height: 47px !important;
    margin-top: 5% !important;
    font-family: 'Kanit', sans-serif !important;
    font-size: 16px !important;
`;

const MgFromPassword = styled(Form.Field)`
    padding-top: 5% !important;
    margin-left: 6% !important;
    width: 88% !important;
    height: 47px !important;
    margin-top: 3% !important;
    font-family: 'Kanit', sans-serif !important;
    font-size: 16px !important;
`;

const TextInputLogin = styled.input`
    font-family: 'Kanit', sans-serif !important;
    font-size: 16px !important;
`;

const ButtonLogin = styled(Button)`
    width: 34% !important;
    height: 46px !important;
    background-color: ${theme.colors.orange} !important;
    color: ${theme.colors.elementBackground} !important;
    fontSize: 16 !important;
    font-family: 'Kanit', sans-serif !important;
    margin-left: 60% !important;
`;

// const HR = styled.hr`
//     width: 100.4%;
//     height: 5px;
//     margin-left: -0.3% !important;
//     color: #ee3900 !important;
//     margin-top: 7% !important;
//     background-color: #ee3900 !important;
//     border: aliceblue;
//     border-radius: 87px;
// `;

const MgRegister = styled.text`
    margin-left: -60% !important;
    font-family: 'Kanit', sans-serif !important;
    font-size: 16px !important;
    color: ${theme.colors.fontBlack} !important;
    cursor : pointer ;
    &:hover {
        color: ${theme.colors.orange} !important;
    }
`;



const enhance = compose(
    inject('authStore'),
    withState('email','setEmail'),
    withState('password','setPassword'),
    withHandlers({
        onChange: props => () => event => {
            const { name , value } = event.target
            name === 'email' ? props.setEmail(value) : props.setPassword(value)            
        },
        onSubmitLogin: props => () => event => { 
            event.preventDefault()
            const { email , password } = props   
            auth.signInWithEmailAndPassword(email, password)
            .then(response => {
                props.authStore.login(response)
                window.location.href = '/'
            })
            .catch(error => {
                const errorCode = error.code;
                if (errorCode === 'auth/wrong-password') {
                    alert('รหัสผ่านไม่ถูกต้อง');
                } else {
                    alert('อีเมลไม่ถูกต้อง หรือ ไม่มีอยู่ในระบบ');
                }             
            })
        }
    }),
    lifecycle({
        componentDidMount(){
            
        }
    }),
    observer 
)

export default enhance((props) => 
    <div>
        <SegmentHeader clearing >
            <Container>
                {
                    props.authStore.accessToken
                    ? <div>
                        {/* <ImageHeader as='h4' floated='left'>
                            <Image  src='https://www.img.in.th/images/687206af74ec86d36b815002c694b34e.png' size='small' />
                        </ImageHeader>
                        <TextHeader as='h4' floated='left'>
                            <MenuItem>
                                {props.authStore.currentUser.email}
                            </MenuItem>
                        </TextHeader> */}
                        <TextHeader as='h4' floated='right' onClick={() => props.authStore.logout()}> 
                            <Link>
                                <MenuItem >
                                    ออกจากระบบ
                                </MenuItem>
                            </Link>
                        </TextHeader>
                        <TextHeader as='h4' floated='right' >
                            <Link href={{ pathname : '../Resume/Personal_information' }}>
                                <MenuItem>
                                    ข้อมูลส่วนตัว
                                </MenuItem>
                            </Link>
                        </TextHeader>
                        <TextHeader as='h4' floated='right'>
                            <Link href='#'>
                                <MenuItem>
                                    ประวัติการสมัครงาน
                                </MenuItem>
                            </Link>
                        </TextHeader>
                        <TextHeader as='h4' floated='right'>
                            <Link href='../Interview/ListPositionInterview'>
                                <MenuItem>
                                    ประกาศผล
                                </MenuItem>
                            </Link>
                        </TextHeader>
                    </div> 
                    : <div>
                        <TextHeader as='h4' floated='right'>
                            <Link href='#'>
                                <MenuItem>
                                    <Dropdown text='เข้าสู่ระบบ' >
                                        <MarginDrowMenu>
                                            <Form>
                                                <center>
                                                    <TextLogin>เข้าสู่ระบบ</TextLogin>
                                                    <MgHR/>
                                                </center>
                                                <MgFrom>
                                                    <label>อีเมล :</label>
                                                    <TextInputLogin type="email" name="email" placeholder='กรุณากรอกอีเมล' onClick={e => e.stopPropagation()} onChange={props.onChange()}/>
                                                </MgFrom>
                                                <MgFromPassword>
                                                    <label>รหัสผ่าน :</label>
                                                    <TextInputLogin type="password" name="password" placeholder='กรุณากรอกรหัสผ่าน' onClick={e => e.stopPropagation()} onChange={props.onChange()}/>
                                                </MgFromPassword><br/><br/><br/>
                                                <ButtonLogin type='submit' onClick={props.onSubmitLogin()}>เข้าสู่ระบบ</ButtonLogin>
                                                <Link href='/register'>
                                                    <MgRegister>
                                                        สมัครสมาชิก
                                                    </MgRegister>
                                                </Link>
                                            </Form>
                                        </MarginDrowMenu>
                                    </Dropdown>
                                </MenuItem>
                            </Link>
                        </TextHeader>
                    </div>
                }
                <TextHeader as='h4' floated='right'>
                    <Link href='/index'>
                        <MenuItem>
                            ตำแหน่งเปิดรับสมัคร
                        </MenuItem>
                    </Link>
                </TextHeader>
            </Container>
        </SegmentHeader>
    </div>
)