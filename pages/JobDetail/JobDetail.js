import React from 'react'
import { withLayout , withApp } from '../../hoc'
import { compose , withState , lifecycle , withHandlers , withProps } from 'recompose'
import {CarouselCompane} from '../../components/Carousel'
import styled from 'styled-components'
import { Container , Divider , Grid , Button , Image , Label , Modal , Form } from 'semantic-ui-react'
import {Breadcrumb2Page} from '../../components/Breadcrumb'
import axios from 'axios'
import {inputOnkeyup } from '../../components/Input'
import { inject, observer } from 'mobx-react'
import auth from '../../firebase'
import Link from 'next/link'

const BodyBox = styled.div`
    background : #ffffff;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    width: 100%;
    height: 562px;
    border-radius: 5px;
    margin-top: 2%;
`;

const TextTopics1 = styled.p`
    font-size: 20px !important;
    margin-left: 6% !important;
    margin-top: 1% !important;
    margin-bottom: 0px;
`;
const TextTopics4 = styled.p`
    font-size: 20px !important;
    margin-left: 6% !important;
    margin-top: 2% !important;
    margin-bottom: 0px;
`;
const TextTopics2 = styled.p`
    font-size: 20px !important;
    margin-left: 5% !important;
    margin-top: 1% !important;
`;

const TextTopics3 = styled.p`
    font-size: 20px !important;
    margin-top: 1% !important;
`;

const ColorTextSmall1 = styled.small`
    font-size: 18px !important;
    color: #707070 !important;
`;

const DangerHTML = styled.div`
    font-size: 18px !important;
    color: #707070 !important;
    margin-left: 8% !important;
    margin-top: 2% !important;
    margin-bottom: 2% !important;
`;

const MarginBTN = styled(Button)`
    // margin-left: 47% !important;
    margin-left: 0% !important;

`;

const ColorBTN = styled(Button)`
    box-shadow: 0 0 0px 1px #ee3900 !important;
    background : #fff !important;
    color : #ee3900 !important;
    font-family : 'Kanit', sans-serif !important;
`;

const Colorlabel = styled(Label)`
    box-shadow: 0 0 0px 1px #ee3900 !important;
    background : #ee3900 !important;
    color : #fff !important;
`;

const IMGSize = styled(Image)`
    width: 24px !important;
    height: 24px !important;
    display: inline-block !important;
`;

const BgHandTask = styled.div`
    background : #ee3900 !important;
    height: 62px !important;
    width: 100% !important;
    border-radius: 5px;
`;

const TextTask = styled.p`
    font-family: 'Kanit', sans-serif !important;
    color : #fff !important;
    font-size: 25px !important;
    padding-top: 3% !important;
`;

const MgFrom = styled(Form.Field)`
    width: 100% !important;
    height: 47px !important;
    margin-top: 5% !important;
    font-family: 'Kanit', sans-serif !important;
    font-size: 16px !important;
    font-weight: 600 !important;
`;

const TextPosition = styled.p`
    font-family: 'Kanit', sans-serif !important;
    font-size: 16px !important;
    margin-top: 3% !important;
    font-weight: 600 !important;
`;

const TextSmallPosition = styled.small`
    font-size: 16px !important;
    font-weight: 600 !important;
`;

const ButtonOK = styled(Button)`
    margin-top: 3% !important;
    margin-left: 3px !important;
    background : #ee3900 !important;
    floated : right;
    fontSize: 18 !important;
    font-family: 'Kanit', sans-serif !important;
    width: 34% !important;
    height: 46px !important;
    color: #ffffff !important;
    font-weight: 500 !important;
`;

const ButtonCancel = styled(Button)`
    floated : right;
    margin-left: 30% !important;
    fontSize: 18 !important;
    font-family: 'Kanit', sans-serif !important;
    width: 34% !important;
    height: 46px !important;
    background-color: #ffffff !important;
    font-weight: 600 !important;
`;

const MgLogin = styled.div`
    margin-top: 3% !important;
`;

const MgPassword = styled.div`
    margin-top: 3% !important;
`;

const TextNoLogin = styled.p`
    font-size: 20px !important;
    font-family: 'Kanit', sans-serif !important;
`;

const enhance = compose(
    withApp,
    inject('authStore'),
    withState('detail','setDetail',[]),
    withState('startdate','setStartdate'),
    withState('enddate','setEnddate'),
    withState('salary','setSalary'),
    withState('email','setEmail'),
    withState('password','setPassword'),
    withProps({
        pageTitle: 'Jobs Detail'
    }),
    withLayout,
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
                window.location.href = `/JobDetail/JobDetail?id=${this.props.url.query.id}`
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
        async componentDidMount(){
            if (this.props.url.query.id !== undefined) {
                const url = `http://localhost:4000/job_position/${this.props.url.query.id}`
                const res = await axios.get(url)
                this.props.setDetail(res.data)                            
                res.data.map( data => {
                    //set startdate in thai
                    const st_event = data.startdate.split('-')
                    const st_years = parseInt(st_event[0])
                    const st_month = parseInt(st_event[1]) - 1
                    const st_days  = parseInt(st_event[2])                  
                    const st_localDate = new Date(Date.UTC(st_years,st_month,st_days));
                    const st_options = { year: 'numeric', month: 'long', day: 'numeric' };
                    this.props.setStartdate(st_localDate.toLocaleDateString('th-TH', st_options))
                    
                    //set enddate in thai
                    const end_event = data.enddate.split('-')
                    const end_years = parseInt(end_event[0])
                    const end_month = parseInt(end_event[1]) - 1
                    const end_days  = parseInt(end_event[2])                  
                    const end_localDate = new Date(Date.UTC(end_years,end_month,end_days));
                    const end_options = { year: 'numeric', month: 'long', day: 'numeric' };
                    this.props.setEnddate(end_localDate.toLocaleDateString('th-TH', end_options))
                })
            }
            else{
                const url = `http://localhost:4000/job_position/${this.props.url.query.data[1]}`
                const res = await axios.get(url)
                this.props.setDetail(res.data)            
                res.data.map( data => {
                    //set startdate in thai
                    const st_event = data.startdate.split('-')
                    const st_years = parseInt(st_event[0])
                    const st_month = parseInt(st_event[1]) - 1
                    const st_days  = parseInt(st_event[2])                  
                    const st_localDate = new Date(Date.UTC(st_years,st_month,st_days));
                    const st_options = { year: 'numeric', month: 'long', day: 'numeric' };
                    this.props.setStartdate(st_localDate.toLocaleDateString('th-TH', st_options))
                    
                    //set enddate in thai
                    const end_event = data.enddate.split('-')
                    const end_years = parseInt(end_event[0])
                    const end_month = parseInt(end_event[1]) - 1
                    const end_days  = parseInt(end_event[2])                  
                    const end_localDate = new Date(Date.UTC(end_years,end_month,end_days));
                    const end_options = { year: 'numeric', month: 'long', day: 'numeric' };
                    this.props.setEnddate(end_localDate.toLocaleDateString('th-TH', end_options))
                })
            }
        }
    }),
    withHandlers({
        handleButtonApplyJob: props => (name) => {                        
            return(
                <Modal size={'tiny'} trigger={
                    <MarginBTN as='div' labelPosition='right' >
                        <ColorBTN>
                            สมัครงาน
                        </ColorBTN>
                        <Colorlabel as='a'>
                            <Image src='https://www.img.in.th/images/68c0f730b867d22a3086b9fdfd7cf787.png' size='small' />
                        </Colorlabel>
                    </MarginBTN>} closeIcon>
                    {
                        props.authStore.accessToken
                        ? <Modal.Content>
                            <Modal.Description>
                                <center>
                                    <BgHandTask>
                                        <TextTask>สมัครงาน</TextTask>
                                    </BgHandTask>
                                </center>
                                <from>
                                    <TextPosition>ตำแหน่งงานที่สมัคร : <smaTextSmallPositionll>{name}</smaTextSmallPositionll></TextPosition>
                                    {inputOnkeyup('เงินเดือนที่ต้องการ :','กรุณากรอกเงินเดือนที่ต้องการ' , '' , 'text' , '')}
                                    <ButtonCancel>ยกเลิกสมัครงาน</ButtonCancel>
                                    <ButtonOK>ยืนยันสมัครงาน</ButtonOK>
                                </from>
                            </Modal.Description>
                        </Modal.Content>
                        :<Modal.Content>
                            {/* <Modal.Description>
                                <center>
                                    <BgHandTask>
                                        <TextTask>เข้าสู่ระบบ</TextTask>
                                    </BgHandTask>
                                </center>
                                <from>
                                    <MgLogin>{inputOnkeyup('อีเมล :','กรุณากรอกอีเมล' , props.onChange() , 'email' , props.email , 'email')}</MgLogin>
                                    <MgPassword>{inputOnkeyup('รหัสผ่าน :','กรุณากรอกรหัสผ่าน' , props.onChange() , 'password' , props.password, 'password')}</MgPassword>
                                    <Link href='../register'>
                                        <ButtonCancel>สมัครสมาชิก</ButtonCancel>
                                    </Link>
                                    <ButtonOK onClick={props.onSubmitLogin()}>เข้าสู่ระบบ</ButtonOK>
                                </from>
                            </Modal.Description> */}
                            <Modal.Description>
                                <center>
                                    <TextNoLogin>ไม่สามารถสมัครงานได้ เนื่องจากท่านยังไม่ได้เข้าสู่ระบบ</TextNoLogin>
                                    {/* <BgHandTask>
                                        <TextTask>เข้าสู่ระบบ</TextTask>
                                    </BgHandTask> */}
                                </center>
                                {/* <from>
                                    <MgLogin>{inputOnkeyup('อีเมล :','กรุณากรอกอีเมล' , props.onChange() , 'email' , props.email , 'email')}</MgLogin>
                                    <MgPassword>{inputOnkeyup('รหัสผ่าน :','กรุณากรอกรหัสผ่าน' , props.onChange() , 'password' , props.password, 'password')}</MgPassword>
                                    <Link href='../register'>
                                        <ButtonCancel>สมัครสมาชิก</ButtonCancel>
                                    </Link>
                                    <ButtonOK onClick={props.onSubmitLogin()}>เข้าสู่ระบบ</ButtonOK>
                                </from> */}
                            </Modal.Description>
                        </Modal.Content>
                    }
                </Modal>
            )
        }
    }),
    observer
)

export default enhance( (props)=> 
    <div>
        {CarouselCompane ('CUPCODE CO., LTD.')}
            { props.detail.map( (data , i) => {                
                return(
                    <Container key={i}>
                        {Breadcrumb2Page('ตำแหน่งเปิดรับ', `รายละเอียดตำแหน่ง ${data.position_name}`)}
                        <BodyBox>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={11}>
                                        <TextTopics1>ตำแหน่ง : <ColorTextSmall1> {data.position_name}</ColorTextSmall1></TextTopics1>
                                        <TextTopics4>
                                            รายละเอียดตำแหน่งงาน :
                                        </TextTopics4>
                                        <DangerHTML dangerouslySetInnerHTML={{ __html: data.description }} />
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <TextTopics3>วันที่รับสมัคร : <ColorTextSmall1>{props.startdate} - {props.enddate}</ColorTextSmall1> </TextTopics3>
                                        {props.handleButtonApplyJob(data.position_name)}
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <TextTopics2> เวลาทำงาน : <ColorTextSmall1>ทำงานวันจันทร์ - ศุกร์ เวลา 10:00 - 19:00 น. (Flexible Hours)</ColorTextSmall1> </TextTopics2>
                            <TextTopics2> สถานที่ปฏิบัติการ : <ColorTextSmall1>1679/2 town in town 11 ladprao road, plabpla, wangthonglang Bangkok 10310</ColorTextSmall1> </TextTopics2>
                            <TextTopics2>อัตรา : <ColorTextSmall1> {data.value} </ColorTextSmall1></TextTopics2>
                            <TextTopics2>เงินเดือน : <ColorTextSmall1> <IMGSize src='https://www.img.in.th/images/5d8d89d8b5d3db32c8d66c2b5db62234.png' /> {data.rate} </ColorTextSmall1></TextTopics2>
                        </BodyBox>
                    </Container>
                )
            })}
        <Divider hidden />
    </div>
)