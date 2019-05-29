import React from 'react'
import { withLayout , withApp } from '../../hoc'
import { compose , withState , lifecycle , withHandlers , withProps } from 'recompose'
import styled from 'styled-components'
import { Container , Divider , Grid , Button , Image , Label , Modal , Icon , Loader } from 'semantic-ui-react'
import {Breadcrumb2Page} from '../../components/Breadcrumb'
import {input2GrideGrideMG } from '../../components/Input'
import { inject, observer } from 'mobx-react'
import { PDF_GENERATOR } from '../../components/PdfMake'
import { ref , firebase } from '../../firebase/index'
import Router from 'next/router'

const BodyBox = styled.div`
    background : #ffffff;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    width: 100%;
    height: auto;
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
    font-family : 'Kanit', sans-serif !important;
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
    line-height: 1.6 !important;
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
const ButtonClick = styled(Button)`
    font-family : 'Kanit', sans-serif !important;
    font-size: 14px !important;
`;
const ImgCarousel = styled(Image)`
    margin-Top: 65px !important;
`;

const enhance = compose(
    withApp,
    inject('authStore' , 'jobStore'),
    withState('detail','setDetail',[]),
    withState('startdate','setStartdate'),
    withState('enddate','setEnddate'),
    withState('salary','setSalary' , (props) => {return props.jobStore.job_positions.rate.length <= 7 ? props.jobStore.job_positions.rate : undefined}),
    withState('isSalary','setIsSalary' , (props) => {return props.jobStore.job_positions.rate.length <= 7 ? true : false}),
    withState('email','setEmail'),
    withState('password','setPassword'),
    withState('open' , 'setOpen' , false),
    withState('resume' , 'setResume'),
    withState('isApply' , 'setIsApply' , false),
    withState('isLoading' , 'setIsLoading' , false),
    withState('isOpen' , 'setIsOpen' , false),
    withProps({
        pageTitle: 'Jobs Detail'
    }),
    withLayout,
    withHandlers({
        onChange: props => () => event => {
            const { name , value } = event.target
            name === 'email' ? props.setEmail(value) : props.setPassword(value)            
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
        },
        handleSubmitRegister: props => () => event => {
            props.setOpen(false)
            props.setIsLoading(true)
            props.setIsOpen(true)
            let pdfDocGenerator = PDF_GENERATOR(props.resume , props)
            let uniqueID = firebase.database().ref().push().key
            let pdfID = firebase.database().ref().push().key            
            pdfDocGenerator.getDataUrl((dataUrl) => {
                ref.child(pdfID).putString(dataUrl, 'data_url')
                .then( () => {
                    let getUrl = ref.child(pdfID)
                    getUrl.getDownloadURL()
                    .then(function(url) {
                        let result = {
                            apply_job_id : uniqueID,
                            department_id : props.jobStore.job_positions.department_id,
                            apply_date : firebase.database.ServerValue.TIMESTAMP,
                            position_id : props.jobStore.job_positions.position_id,
                            job_position_id : props.jobStore.job_positions.job_position_id,
                            uid : props.authStore.accessToken,
                            rate : props.salary,
                            status : 0,
                            resume_pdf : url
                        }
                        firebase.database().ref('apply_jobs/' + uniqueID).set(result , (err) => {
                            err 
                            ?   null 
                            :   props.setIsLoading(false) 
                                props.setIsOpen(true)
                        })    
                    })
                    .catch(function(error) {
                        switch (error.code) {
                            case 'storage/object-not-found':
                            break;
                        
                            case 'storage/unauthorized':
                            break;
                        
                            case 'storage/canceled':
                            break;
                                    
                            case 'storage/unknown':
                            break;
                        }
                    });
                    
                })
                .catch( err => console.log(err))
            });
        },
        handleApplyJobsData: props => () => {
            let jobID = props.jobStore.job_positions.job_position_id
            firebase.database()
            .ref('apply_jobs')
            .orderByChild("uid")
            .equalTo(props.authStore.accessToken)
            .once("value").then( snapshot => { 
                let result = Object.values(snapshot.val())           
                result 
                    ? result.map( data => {
                        data.job_position_id === jobID ? props.setIsApply(true) : null
                    })     
                    : props.setIsApply(false)
            })
        }
    }),
    lifecycle({
        async componentDidMount(){
            await this.props.initGetJobPositionData()  
            await this.props.initGetDataResume()
            await this.props.handleApplyJobsData()            
        }
    }),
    withHandlers({
        handleButtonApplyJob: props => (name) => {                        
            return(
                <Modal 
                    size={'tiny'} 
                    trigger={
                        <MarginBTN as='div' labelPosition='right' onClick={() => props.setOpen(true)} disabled={props.isApply}>
                            <ColorBTN>
                                สมัครงาน
                            </ColorBTN>
                            <Colorlabel as='a'>
                                <Image src='https://www.img.in.th/images/68c0f730b867d22a3086b9fdfd7cf787.png' size='small' />
                            </Colorlabel>
                        </MarginBTN>
                    } 
                    open={props.open}
                    dimmer={"inverted"}
                >
                {
                    props.authStore.accessToken
                    ? <Modal.Content >
                        <Modal.Description>
                            <center>
                                <BgHandTask>
                                    <TextTask>สมัครงาน</TextTask>
                                </BgHandTask>
                            </center>
                                <TextPosition>ตำแหน่งงานที่สมัคร : {name}</TextPosition>
                                {input2GrideGrideMG('เงินเดือนที่ต้องการ :','กรุณากรอกเงินเดือนที่ต้องการ' , (event) => props.setSalary(event.target.value) , 'text' , props.salary , 'salary' , false , props.isSalary)}
                                <center>
                                    <ButtonCancle onClick={() => props.setOpen(false) }>ยกเลิก</ButtonCancle>
                                    <ButtonOK onClick={props.handleSubmitRegister()} disabled={props.salary ? false : true}>ยืนยันสมัครงาน</ButtonOK>
                                </center>
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
        <ImgCarousel src='https://firebasestorage.googleapis.com/v0/b/powerhr-auth.appspot.com/o/powerHRSaveForWebTrue.jpg?alt=media&token=a82c6662-60e6-4358-b7da-dcb863c18c2b' fluid />
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
                                <ColorTextSmall1> 65/184 อาคารชำนาญเพ็ญชาติ บิสเนส เซ็นเตอร์ ถนน พระราม 9 แขวง ห้วยขวาง เขต ห้วยขวาง กรุงเทพมหานคร 10310 </ColorTextSmall1> 
                            </TextTopics2>
                            <TextTopics2>
                                <ColorText>อัตรา : </ColorText>
                                <ColorTextSmall1> {props.detail.value} ตำแหน่ง </ColorTextSmall1>
                            </TextTopics2>
                            <TextTopics2>
                                <ColorText>เงินเดือน : </ColorText>
                                <ColorTextSmall1> <Icon name='money bill alternate outline' /> {props.detail.rate === "ตามประสบการณ์" ? props.detail.rate : props.detail.rate + " บาท"} </ColorTextSmall1>
                            </TextTopics2>
                            <br/>
                        </BodyBox>
                        <br/><br/>
                    </Container>
                : null
        }       
        {
            props.isLoading
            ?   <Modal basic size='small' open={props.isLoading} dimmer={"inverted"}>
                    <Loader size='large'>กำลังดำเนินการ กรุณารอสักครู่...</Loader>
                </Modal>
            :   <Modal size={'tiny'} open={props.isOpen} dimmer={"inverted"}>
                    <Modal.Header>
                        <center>
                            <Icon name='check' size='big' color={"orange"}/>
                        </center>
                    </Modal.Header>
                    <Modal.Content>
                        <center>
                            <ColorTextSmall1>สมัครงานเรียบร้อย</ColorTextSmall1>
                        </center>
                    </Modal.Content>
                    <Modal.Actions>
                        <center>
                            <ButtonClick
                                color={"orange"}
                                onClick={() => {return Router.push('/Interview/ListPositionInterview')}} 
                                content='ตกลง' 
                            />
                        </center>
                    </Modal.Actions>
                </Modal>
        }
        <Divider hidden />
    </div>
)