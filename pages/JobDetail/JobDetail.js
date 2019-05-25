import React from 'react'
import { withLayout , withApp } from '../../hoc'
import { compose , withState , lifecycle , withHandlers , withProps } from 'recompose'
import {CarouselCompane} from '../../components/Carousel'
import styled from 'styled-components'
import { Container , Divider , Grid , Button , Image , Label , Modal , Icon } from 'semantic-ui-react'
import {Breadcrumb2Page} from '../../components/Breadcrumb'
import {input2GrideGrideMG } from '../../components/Input'
import { inject, observer } from 'mobx-react'
import auth from '../../firebase'
import {firebase} from '../../firebase/index'
import { PDF_GENERATOR } from '../../components/PdfMake'
import Images from '../../static/vendor/Images/ImageDataUrl'

const BodyBox = styled.div`
    background : #ffffff;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    width: 100%;
    height: 590px;
    border-radius: 5px;
    margin-top: 2%;
`;

const TextTopics1 = styled.p`
    font-size: 20px !important;
    margin-left: 9% !important;
    margin-top: 1% !important;
    margin-bottom: 0px;
`;

const TextTopics2 = styled.p`
    font-size: 20px !important;
    margin-left: 5% !important;
    margin-top: 1% !important;
`;

const ColorTextSmall1 = styled.small`
    font-size: 18px !important;
`;
const ColorText = styled.small`
    font-size: 18px !important;
    color : #ee3900 !important ;
`;

const DangerHTML = styled.div`
    font-size: 18px !important;
    margin-left: 7% !important;
    margin-top: -1% !important;
    margin-bottom: 2% !important;
`;

const MarginBTN = styled(Button)`
    margin-left: 60% !important;
    margin-top: 2% !important;
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

const TextPosition = styled.p`
    font-family: 'Kanit', sans-serif !important;
    font-size: 16px !important;
    margin-top: 3% !important;
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

const ButtonCancle = styled(Button)`
    floated : left;
    margin-top: 3% !important;
    margin-left: 3px !important;
    background : #ffffff !important;
    fontSize: 18 !important;
    font-family: 'Kanit', sans-serif !important;
    width: 34% !important;
    height: 46px !important;
    color: #ee3900 !important;
    font-weight: 500 !important;
    border: 1px solid #cccccc !important;
`;

const TextNoLogin = styled.p`
    font-size: 20px !important;
    font-family: 'Kanit', sans-serif !important;
`;
const IconModal = styled(Icon)`
  font-size: 55px !important;
`;
const enhance = compose(
    withApp,
    inject('authStore' , 'jobStore'),
    withState('detail','setDetail',[]),
    withState('startdate','setStartdate'),
    withState('enddate','setEnddate'),
    withState('salary','setSalary'),
    withState('email','setEmail'),
    withState('password','setPassword'),
    withState('open' , 'setOpen' , false),
    withState('resume' , 'setResume'),
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
        },
        handleSubmitRegister: props => () => event => {
            props.setOpen(false)
            PDF_GENERATOR(props.resume , props)
        },
        initGetJobPositionData: props => () => {
            let result = props.jobStore.job_positions
            props.setDetail(result)
            //set startdate in thai
            const st_event = result.startdate.split('-')
            const st_years = parseInt(st_event[0])
            const st_month = parseInt(st_event[1]) - 1
            const st_days  = parseInt(st_event[2])                  
            const st_localDate = new Date(Date.UTC(st_years,st_month,st_days));
            const st_options = { year: 'numeric', month: 'long', day: 'numeric' };
            props.setStartdate(st_localDate.toLocaleDateString('th-TH', st_options))
            
            //set enddate in thai
            const end_event = result.enddate.split('-')
            const end_years = parseInt(end_event[0])
            const end_month = parseInt(end_event[1]) - 1
            const end_days  = parseInt(end_event[2])                  
            const end_localDate = new Date(Date.UTC(end_years,end_month,end_days));
            const end_options = { year: 'numeric', month: 'long', day: 'numeric' };
            props.setEnddate(end_localDate.toLocaleDateString('th-TH', end_options))
        },
        initGetDataResume: props => () => {
            firebase.database().ref('resume/' + props.authStore.accessToken)
            .once("value").then( snapshot => {
                props.setResume(snapshot.val())
            })
        }
    }),
    lifecycle({
        async componentDidMount(){
            await this.props.initGetJobPositionData()  
            await this.props.initGetDataResume()
        }
    }),
    withHandlers({
        handleButtonApplyJob: props => (name) => {                        
            return(
                <Modal 
                    size={'tiny'} 
                    trigger={
                        <MarginBTN as='div' labelPosition='right' onClick={() => props.setOpen(true)}>
                            <ColorBTN>
                                สมัครงาน
                            </ColorBTN>
                            <Colorlabel as='a'>
                                <Image src='https://www.img.in.th/images/68c0f730b867d22a3086b9fdfd7cf787.png' size='small' />
                            </Colorlabel>
                        </MarginBTN>
                    } 
                    open={props.open}
                >
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
                                <TextPosition>ตำแหน่งงานที่สมัคร : {name}</TextPosition>
                                {input2GrideGrideMG('เงินเดือนที่ต้องการ :','กรุณากรอกเงินเดือนที่ต้องการ' , (event) => props.setSalary(event.target.value) , 'text' , '')}
                                <center>
                                    <ButtonCancle onClick={() => props.setOpen(false) }>ยกเลิก</ButtonCancle>
                                    <ButtonOK onClick={props.handleSubmitRegister()} disabled={props.salary ? false : true}>ยืนยันสมัครงาน</ButtonOK>
                                </center>
                            </from>
                        </Modal.Description>
                    </Modal.Content>
                    :<Modal.Content>
                        <Modal.Description>
                            <br/>
                            <center>
                                <IconModal name="exclamation circle"/><br/><br/><br/>
                                <TextNoLogin>ไม่สามารถสมัครงานได้ เนื่องจากท่านยังไม่ได้เข้าสู่ระบบ</TextNoLogin>
                                <ButtonOK onClick={() => props.setOpen(false) }>ปิด</ButtonOK>
                            </center>
                            <br/>
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
        {
            props.detail
                ?   <Container>
                        {Breadcrumb2Page('ตำแหน่งเปิดรับ', `รายละเอียดตำแหน่ง ${props.detail.position_name}`)}
                        <BodyBox>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={9}>
                                        <TextTopics1>
                                            <ColorText>วันที่รับสมัคร : </ColorText>
                                            <ColorTextSmall1> {props.startdate} - {props.enddate}</ColorTextSmall1> 
                                        </TextTopics1>
                                    </Grid.Column>
                                    <Grid.Column width={7}>
                                        {props.handleButtonApplyJob(props.detail.position_name)}
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <TextTopics2><ColorText>ตำแหน่ง : </ColorText>
                                <ColorTextSmall1> {props.detail.position_name}</ColorTextSmall1>
                            </TextTopics2>
                            <TextTopics2>
                                <ColorText>รายละเอียดตำแหน่งงาน : </ColorText>
                            </TextTopics2>
                            <DangerHTML dangerouslySetInnerHTML={{ __html: props.detail.description }} />
                            <TextTopics2> 
                                <ColorText>เวลาทำงาน : </ColorText>
                                <ColorTextSmall1> ทำงานวันจันทร์ - ศุกร์ เวลา 10:00 - 19:00 น. (Flexible Hours)</ColorTextSmall1> 
                            </TextTopics2>
                            <TextTopics2>
                                <ColorText>สถานที่ปฏิบัติการ : </ColorText>
                                <ColorTextSmall1> 1679/2 town in town 11 ladprao road, plabpla, wangthonglang Bangkok 10310</ColorTextSmall1> 
                            </TextTopics2>
                            <TextTopics2>
                                <ColorText>อัตรา : </ColorText>
                                <ColorTextSmall1> {props.detail.value} </ColorTextSmall1>
                            </TextTopics2>
                            <TextTopics2>
                                <ColorText>เงินเดือน : </ColorText>
                                <ColorTextSmall1> <Icon name='money bill alternate outline' /> {props.detail.rate} </ColorTextSmall1>
                            </TextTopics2>
                        </BodyBox>
                    </Container>
                : null
        }       
        <Divider hidden />
    </div>
)