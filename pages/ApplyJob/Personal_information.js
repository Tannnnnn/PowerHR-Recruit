import React from 'react'
import { withLayout } from '../../hoc'
import { compose, withProps, withState, withHandlers, lifecycle } from 'recompose'
import styled from 'styled-components'
import { Container, Step, Icon, Divider, Grid, Image, Form, Radio } from 'semantic-ui-react'
import { Breadcrumb3Page } from '../../components/Breadcrumb'
import theme from '../../theme/default'
import { input2GrideGrideMG, input2Gride, input4GrideMG, input4Gride, inputGridePosition } from '../../components/Input'
import { btn_orange } from '../../components/Button'
import { stepApplyJobInfomation } from '../../components/Step'
import Router from 'next/router'

const buildFileSelector = (fn) => {
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    fileSelector.setAttribute('accept', 'image/x-png,image/jpeg');
    fileSelector.onchange = fn
    return fileSelector;
}

const BoxHead = styled.div`
    background-color: ${theme.colors.elementBackground};
    box-shadow: ${theme.colors.boxShadow};
`;

const BoxHead2 = styled.div`
    background-color: ${theme.colors.orange};
    box-shadow: ${theme.colors.boxShadow};
    height: 7px;
`;

const Box = styled.div`
    background-color: ${theme.colors.elementBackground};
    box-shadow: ${theme.colors.boxShadow};
    height: auto;
`;

const TextBox = styled.p`
    font-size: 30px;
`;

const StepStyle = styled(Step.Title)`
    font-family : 'Kanit', sans-serif !important;
    color: ${theme.colors.fontBlack} !important;
    font-weight: 500 !important;
`;

const StepStyle1 = styled(Step.Title)`
    font-family : 'Kanit', sans-serif !important;
    color: ${theme.colors.elementBackground} !important;
    font-weight: 600 !important;
`;

const ColorStep1 = styled(Step)`
    background: ${theme.colors.orange} !important;
    ::after {
        background: ${theme.colors.orange} !important;
    }
`;

const FontInfo = styled.p`
    font-size: 20px;
    color: ${theme.colors.orange} !important;
`;

const MgIcon = styled(Icon)`
    margin-top: -4% !important;
    color: ${theme.colors.orange} !important;
`;

const BoxImg = styled.div`
    width: 164px;
    height: 185px;
    border: 1px solid ${theme.colors.gray};
    background-color: ${theme.colors.elementBackground};
    margin-left: 28%;
    border-radius: 5px;
    cursor : pointer ;
`;

const ImgUser = styled(Image)`
    margin-top: 26%;
`;

const TextImg = styled.p`
    margin-top: 6%;
    color: ${theme.colors.gray};
`;

const RadioSex = styled.div`
    margin-left: -34% !important;
`;

const MgRedioStatus = styled.div`
    margin-left: 14% !important;
`;

const MgGridLeft = styled.div`
    margin-left: 28% !important;
`;

const Mg4Gridnationality = styled.div`
    margin-left: -34%;
    width: 106%;
`;

const MgGridHeight = styled.div`
    margin-left: 6%;
    width: 100%;
`;

const WidthWeight = styled.div`
    width: 100%;
`;

const MgBTNOrange = styled.div`
    margin-left: 80%;
`;

const SizeFontRadio = styled(Form.Field)`
    font-size: 16px !important;
    font-weight: 600 !important;
`;

const MgRedio = styled(Radio)`
    margin-left: 2%;
    font-size: 16px !important;
`;

const HiddenStatus = styled.div`
    border: 1px solid #cccccc ;
    border-radius: 5px;
    margin-left: 15%;
    margin-right: 14%;
    margin-top: 2%;
    margin-bottom: 2%;
`;

const MgGridHidden = styled.div`
    padding-top: 2% !important;
    padding-bottom: 2% !important;
    padding-left: 4% !important;
    padding-right: 4% !important;
    width: 100% ;
`;

const DivImage = styled.div`
    position :relative;
`
const DivHiddenImage = styled.div`
    position :relative;
    display : none ;
    :hover {
        display : block ;
    }
`
const ImgLocalStorage = styled.img`
    position : absolute;
    opacity: 1.0;
    -webkit-transition: .3s ease-in-out;
    -moz-transition: .3s ease-in-out;
    -o-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
    :hover + ${DivHiddenImage} {
        display : block ;
    }
    ${DivImage}:hover &{
        opacity: 0.1;
    }
`
const ImgUserHidden = styled(Image)`
    padding-top: 26% ;
    display : block ;
`;

const enhance = compose(
    withState('salary', 'setSalary'),
    withState('imageBase64', 'setImageBase64', undefined),
    withState('fname_thai', 'setFname_thai'),
    withState('lname_thai', 'setLname_thai'),
    withState('fname_eng', 'setFname_eng'),
    withState('lname_eng', 'setLname_eng'),
    withState('email', 'setEmail'),
    withState('facebook', 'setFacebook'),
    withState('idcard', 'setIdcard'),
    withState('tel', 'setTel'),
    withState('birthday', 'setBirthday'),
    withState('age', 'setAge'),
    withState('sex', 'setSex'),
    withState('weight', 'setWeight'),
    withState('height', 'setHeight'),
    withState('ethnicity', 'setEthnicity'),
    withState('nationality', 'setNationality'),
    withState('religion', 'setReligion'),
    withState('dad_name', 'setDad_name'),
    withState('dad_career', 'setDad_career'),
    withState('mom_name', 'setMom_name'),
    withState('mom_career', 'setMom_career'),
    withState('brethren', 'setBrethren'),
    withState('sequence', 'setSequence'),
    withState('status', 'setStatus'),
    withState('check_status', 'setCheck_status', false),
    withState('status_married_fname', 'setStatus_married_fname'),
    withState('status_married_lname', 'setStatus_married_lname'),
    withState('status_married_child', 'setStatus_married_child'),
    withState('status_married_company', 'setStatus_married_company'),
    withState('soldier', 'setSoldier'),
    withState('check_status_congenitalDisease', 'setCheck_status_congenitalDisease', false),
    withState('congenitalDisease', 'SetCongenitalDisease'),
    withState('congenitalDisease_name', 'SetCongenitalDisease_name'),
    withState('urgent_contact', 'setUrgent_contact'),
    withState('urgent_relation', 'setUrgent_relation'),
    withState('urgent_phone', 'setUrgent_phone'),
    withState('urgent_apply', 'setUrgent_apply'),
    withState('refer_name', 'setRefer_name'),
    withState('refer_address', 'setRefer_address'),
    withState('refer_phone', 'setRefer_phone'),
    withState('refer_career', 'setRefer_career'),

    withProps({
        pageTitle: 'Personal information'
    }),
    withLayout,
    lifecycle({
        async componentDidMount() {
            if (localStorage.Personal_page) {
                this.props.setSalary(JSON.parse(localStorage.getItem('Personal_page')).salary)            
                this.props.setSex(JSON.parse(localStorage.getItem('Personal_page')).sex)
                this.props.setSoldier(JSON.parse(localStorage.getItem('Personal_page')).soldier)
                this.props.setFname_thai(JSON.parse(localStorage.getItem('Personal_page')).fname_thai)
                this.props.setLname_thai(JSON.parse(localStorage.getItem('Personal_page')).lname_thai)
                this.props.setFname_eng(JSON.parse(localStorage.getItem('Personal_page')).fname_eng)
                this.props.setLname_eng(JSON.parse(localStorage.getItem('Personal_page')).lname_eng)
                this.props.setEmail(JSON.parse(localStorage.getItem('Personal_page')).email)
                this.props.setFacebook(JSON.parse(localStorage.getItem('Personal_page')).facebook)
                this.props.setIdcard(JSON.parse(localStorage.getItem('Personal_page')).idcard)
                this.props.setTel(JSON.parse(localStorage.getItem('Personal_page')).tel)
                this.props.setBirthday(JSON.parse(localStorage.getItem('Personal_page')).birthday)
                this.props.setAge(JSON.parse(localStorage.getItem('Personal_page')).age)
                this.props.setWeight(JSON.parse(localStorage.getItem('Personal_page')).weight)
                this.props.setHeight(JSON.parse(localStorage.getItem('Personal_page')).height)
                this.props.setEthnicity(JSON.parse(localStorage.getItem('Personal_page')).ethnicity)
                this.props.setNationality(JSON.parse(localStorage.getItem('Personal_page')).nationality)
                this.props.setReligion(JSON.parse(localStorage.getItem('Personal_page')).religion)
                this.props.setDad_name(JSON.parse(localStorage.getItem('Personal_page')).dad_name)
                this.props.setDad_career(JSON.parse(localStorage.getItem('Personal_page')).dad_career)
                this.props.setMom_name(JSON.parse(localStorage.getItem('Personal_page')).mom_name)
                this.props.setMom_career(JSON.parse(localStorage.getItem('Personal_page')).mom_career)
                this.props.setBrethren(JSON.parse(localStorage.getItem('Personal_page')).brethren)
                this.props.setSequence(JSON.parse(localStorage.getItem('Personal_page')).sequence)
                this.props.setUrgent_contact(JSON.parse(localStorage.getItem('Personal_page')).urgent_contact)
                this.props.setUrgent_relation(JSON.parse(localStorage.getItem('Personal_page')).urgent_relation)
                this.props.setUrgent_phone(JSON.parse(localStorage.getItem('Personal_page')).urgent_phone)
                this.props.setUrgent_apply(JSON.parse(localStorage.getItem('Personal_page')).urgent_apply)
                this.props.setRefer_name(JSON.parse(localStorage.getItem('Personal_page')).refer_name)
                this.props.setRefer_address(JSON.parse(localStorage.getItem('Personal_page')).refer_address)
                this.props.setRefer_phone(JSON.parse(localStorage.getItem('Personal_page')).refer_phone)
                this.props.setRefer_career(JSON.parse(localStorage.getItem('Personal_page')).refer_career)
                this.props.setImageBase64(JSON.parse(localStorage.getItem('Personal_page')).imageBase64)

                const local_status = JSON.parse(localStorage.getItem('Personal_page')).status
                this.props.setStatus(local_status)    
                if (local_status === 'สมรส') {
                    this.props.setCheck_status(true)
                    this.setState({
                        status_married_fname: JSON.parse(localStorage.getItem('Personal_page')).status_married_fname,
                        status_married_lname: JSON.parse(localStorage.getItem('Personal_page')).status_married_lname,
                        status_married_child: JSON.parse(localStorage.getItem('Personal_page')).status_married_child,
                        status_married_company: JSON.parse(localStorage.getItem('Personal_page')).status_married_company,
                    })
                }        

                const local_congenitalDisease = JSON.parse(localStorage.getItem('Personal_page')).congenitalDisease
                this.props.SetCongenitalDisease(local_congenitalDisease)
                if (local_congenitalDisease === 'มี') {
                    this.props.setCheck_status_congenitalDisease(true)
                    this.props.SetCongenitalDisease_name(JSON.parse(localStorage.getItem('Personal_page')).congenitalDisease_name)
                }
                else{
                    this.props.SetCongenitalDisease_name('')
                }
            }
        },
    }),
    withHandlers({
        handleShowStep: props => () => {
            return (
                <center>
                    <Step.Group>
                        {console.log(props.salary)}
                        <ColorStep1 active>
                            <Step.Content>
                                <StepStyle1>ข้อมูลส่วนบุคคล</StepStyle1>
                            </Step.Content>
                        </ColorStep1>
                        <Step>
                            <Step.Content>
                                <StepStyle>ที่อยู่ผู้สมัคร</StepStyle>
                            </Step.Content>
                        </Step>
                        <Step>
                            <Step.Content>
                                <StepStyle>ประวัติการศึกษา</StepStyle>
                            </Step.Content>
                        </Step>
                        <Step>
                            <Step.Content>
                                <StepStyle>ความสามรถพิเศษ</StepStyle>
                            </Step.Content>
                        </Step>
                        <Step>
                            <Step.Content>
                                <StepStyle>ประสบการณ์ทำงาน</StepStyle>
                            </Step.Content>
                        </Step>
                    </Step.Group>
                </center>
            )
        },
        handleFileSelect: props => (fn) => event => {
            event.preventDefault();
            buildFileSelector(fn).click();
        },
        onChangeInputFile: props => () => event => {
            let profileImg = event.target.files[0]
            let reader = new FileReader();
                reader.onloadend = function() {
                    props.setImageBase64(reader.result)
                }
            reader.readAsDataURL(profileImg);
        },
        handleShowImage: props => () => {
            if (props.imageBase64 === undefined) {
                return (
                    <center>
                        <ImgUser src='https://www.img.in.th/images/42b597219a8880bf0c8769a8eb93e38f.png' size='mini' />
                        <TextImg>ขนาด 160 x 180<br />คลิกเพื่อเพิ่มรูป</TextImg>
                    </center>
                )
            }
            else {
                return (
                    <ImgLocalStorage src={props.imageBase64} style={{ width: '160px', height: '180px' , marginTop: '1.1px' , marginLeft: '1px'}} id="profileImg"/>
                )
            }
        },
        saveThisPage: props => () => event => {
            localStorage.setItem('Personal_page', JSON.stringify({
                'salary' : props.salary , 
                'fname_thai' : props.fname_thai ,
                'lname_thai' : props.lname_thai ,
                'fname_eng' : props.fname_eng ,
                'lname_eng' : props.lname_eng ,
                'email' : props.email ,
                'facebook' : props.facebook ,
                'idcard' : props.idcard ,
                'tel' : props.tel ,
                'birthday' : props.birthday ,
                'age' : props.age ,
                'sex' : props.sex ,
                'weight' : props.weight ,
                'height' : props.height ,
                'ethnicity' : props.ethnicity ,
                'nationality' : props.nationality ,
                'religion' : props.religion ,
                'dad_name' : props.dad_name ,
                'dad_career' : props.dad_career ,
                'mom_name' : props.mom_name ,
                'mom_career' : props.mom_career ,
                'brethren' : props.brethren ,
                'sequence' : props.sequence ,
                'status' : props.status ,
                'status_married_fname' : props.status_married_fname ,
                'status_married_lname' : props.status_married_lname ,
                'status_married_child' : props.status_married_child ,
                'status_married_company' : props.status_married_company ,
                'soldier' : props.soldier ,
                'congenitalDisease' : props.congenitalDisease ,
                'congenitalDisease_name' : props.congenitalDisease_name ,
                'urgent_contact' : props.urgent_contact ,
                'urgent_relation' : props.urgent_relation ,
                'urgent_phone' : props.urgent_phone ,
                'urgent_apply' : props.urgent_apply ,
                'refer_name' : props.refer_name ,
                'refer_address' : props.refer_address ,
                'refer_phone' : props.refer_phone ,
                'refer_career' : props.refer_career ,
                'imageBase64' : props.imageBase64,
            }))            
            Router.push({ pathname : '/ApplyJob/Address_information' , query : { data : props.url.query.data }})
        },
        onChangeSalary: props => () => event => {
            props.setSalary(event.target.value)
        },
        handleFnameThai: props => () => event => {
            props.setFname_thai(event.target.value)
        },
        handleLnameThai: props => () => event => {
            props.setLname_thai(event.target.value)
        },
        handleFnameEng: props => () => event => {
            props.setFname_eng(event.target.value)
        },
        handleLnameEng: props => () => event => {
            props.setLname_eng(event.target.value)
        },
        handleEmail: props => () => event => {
            props.setEmail(event.target.value)
        },
        handleFacebook: props => () => event => {
            props.setFacebook(event.target.value)
        },
        handleIdcard: props => () => event => {
            props.setIdcard(event.target.value)
        },
        handleTel: props => () => event => {
            props.setTel(event.target.value)
        },
        handleBirthday: props => () => event => {
            props.setBirthday(event.target.value)            
        },
        handleAge: props => () => event => {
            props.setAge(event.target.value)
        },
        handleChangeSex: props => (sex) => event => {
            props.setSex(sex)
        },
        handleWeight: props => () => event => {
            props.setWeight(event.target.value)
        },
        handleHeight: props => () => event => {
            props.setHeight(event.target.value)
        },
        handleEthnicity: props => () => event => {
            props.setEthnicity(event.target.value)
        },
        handleNationality: props => () => event => {
            props.setNationality(event.target.value)
        },
        handleReligion: props => () => event => {
            props.setReligion(event.target.value)
        },
        handleDadName: props => () => event => {
            props.setDad_name(event.target.value)
        },
        handleDadCareer: props => () => event => {
            props.setDad_career(event.target.value)
        },
        handleMomName: props => () => event => {
            props.setMom_name(event.target.value)
        },
        handleMomCareer: props => () => event => {
            props.setMom_career(event.target.value)
        },
        handleBrethren: props => () => event => {
            props.setBrethren(event.target.value)
        },
        handleSequence: props => () => event => {
            props.setSequence(event.target.value)
        },
        handleChangeStatus: props => (data) => event => {
            props.setStatus(data)
            if (data === 'สมรส') {
                props.setCheck_status(true)
            }
            else {
                props.setCheck_status(false)
            }      
        },
        handleMarriedFirstname: props => () => event => {            
            props.setStatus_married_fname(event.target.value)
        },
        handleMarriedLastname: props => () => event => {            
            props.setStatus_married_lname(event.target.value)
        },
        handleMarriedChild: props => () => event => {            
            props.setStatus_married_child(event.target.value)
        },
        handleMarriedCompany: props => () => event => {            
            props.setStatus_married_company(event.target.value)
        },
        handleChangeSoldier: props => (soldier) => event => {
            props.setSoldier(soldier)
        },
        handleChangeCongenitalDisease: props => (congenitalDisease) => event => {
            props.SetCongenitalDisease(congenitalDisease)
            if (congenitalDisease === 'มี') {
                props.setCheck_status_congenitalDisease(true)
            }
            else{
                props.setCheck_status_congenitalDisease(false)
                props.SetCongenitalDisease_name('')
            }
        },
        handleCongenitalDiseaseName: props => () => event => {
            props.SetCongenitalDisease_name(event.target.value)
        },
        handleUrgenContact: props => () => event => {
            props.setUrgent_contact(event.target.value)
        },
        handleUrgenRelation: props => () => event => {
            props.setUrgent_relation(event.target.value)
        },
        handleUrgenPhone: props => () => event => {
            props.setUrgent_phone(event.target.value)
        },
        handleUrgenApply: props => () => event => {
            props.setUrgent_apply(event.target.value)
        },
        handleReferName: props => () => event => {
            props.setRefer_name(event.target.value)
        },
        handleReferAddress: props => () => event => {
            props.setRefer_address(event.target.value)
        },
        handleReferPhone: props => () => event => {
            props.setRefer_phone(event.target.value)
        },
        handleReferCareer: props => () => event => {
            props.setRefer_career(event.target.value)
        },
        showPanelStatus: props => (firstName , lastname , child , company) => {
            if (props.check_status === true) {
                return (
                    <HiddenStatus>
                        <MgGridHidden>
                            <Grid columns={2} >
                                <Grid.Column>
                                    {input2GrideGrideMG('ชื่อคู่สมรส :', 'กรุณากรอกชื่อคู่สมรส' , firstName , 'text' , props.status_married_fname )}
                                </Grid.Column>
                                <Grid.Column>
                                    {input2GrideGrideMG('นามสกุลเดิมคู่สมรส :', 'กรุณากรอกนามสกุลเดิมคู่สมรส' , lastname , 'text' , props.status_married_lname)}
                                </Grid.Column>
                            </Grid>
                            <Grid columns={2} >
                                <Grid.Column>
                                    {input2GrideGrideMG('จำนวนบุตร (คน) :', 'กรุณากรอกจำนวนบุตร' , child , 'number' , props.status_married_child)}
                                </Grid.Column>
                                <Grid.Column>
                                    {input2GrideGrideMG('สถานที่ทำงานคู่สมรส :', 'กรุณากรอกสถานที่ทำงานคู่สมรส' , company , 'text' , props.status_married_company)}
                                </Grid.Column>
                            </Grid>
                        </MgGridHidden>
                    </HiddenStatus>
                )
            }
            else {
                return null
            }
        },
        showPanelCongenitalDisease: props => (name) => {
            if (props.check_status_congenitalDisease === true) {
                return (
                    <HiddenStatus>
                        <MgGridHidden>
                            <Grid columns={1} >
                                <Grid.Column>
                                    {input2GrideGrideMG('โรคประจำตัว :', 'กรุณากรอกชื่อโรคประจำตัว' , name , 'text' , props.congenitalDisease_name)}
                                </Grid.Column>
                            </Grid>
                        </MgGridHidden>
                    </HiddenStatus>
                )
            }
            else {
                return null
            }
        },
    })
)

export default enhance((props) =>
    <Container>
        {Breadcrumb3Page('ตำแหน่งเปิดรับ', `รายละเอียดตำแหน่ง ${props.url.query.data[0]}` , 'สมัครงาน' , '../index' , `${props.url.query.data[0]}` ,`${props.url.query.data[1]}` )}
        <BoxHead>
            <center><br /><TextBox>สมัครงาน</TextBox></center><br />
        </BoxHead>
        <BoxHead2 />
        <Box>
            <br />
            {stepApplyJobInfomation('ข้อมูลส่วนบุคคล', 'ที่อยู่ผู้สมัคร', 'ประวัติการศึกษา', 'ความสามรถพิเศษ', 'ประสบการณ์ทำงาน')}
            <br />
            <center>
                <FontInfo>ข้อมูลส่วนบุคคลของผู้สมัคร</FontInfo>
                <MgIcon name='window minimize outline' size='big' />
            </center>
            <br />
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <BoxImg onClick={props.handleFileSelect(props.onChangeInputFile())}>
                        <DivImage>
                            {props.handleShowImage()}
                            <DivHiddenImage id="div5">
                                <center>
                                    <ImgUserHidden src='https://www.img.in.th/images/42b597219a8880bf0c8769a8eb93e38f.png' size='mini' />
                                    <TextImg>ขนาด 160 x 180<br />เลือกรูปภาพอื่น</TextImg>
                                </center>
                            </DivHiddenImage>
                        </DivImage>
                    </BoxImg>
                </Grid.Column>
                <Grid.Column>
                    {inputGridePosition('ตำแหน่งงานที่รับสมัคร :', 'กรุณากรอกตำแหน่งงงานที่รับสมัคร', props.url.query.data[0])}<br /><br />
                    {input2Gride('เงินเดือนที่ต้องการ :', 'กรุณากรอกเงินเดือนที่ต้องการ', props.onChangeSalary(), 'number', props.salary)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ชื่อ (ภาษาไทย) :', 'กรุณากรอกชื่อ (ภาษาไทย)', props.handleFnameThai(), 'text', props.fname_thai)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('นามสกุล (ภาษาไทย) :', 'กรุณากรอกนามสกุล (ภาษาไทย)', props.handleLnameThai(), 'text', props.lname_thai)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ชื่อ (ภาษาอังกฤษ) :', 'กรุณากรอกชื่อ (ภาษาอังกฤษ)', props.handleFnameEng(), 'text', props.fname_eng)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('นามสกุล (ภาษาอังกฤษ) :', 'กรุณากรอกนามสกุล (ภาษาอังกฤษ)', props.handleLnameEng(), 'text', props.lname_eng)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('อีเมล :', 'กรุณากรอกอีเมล', props.handleEmail(), 'email', props.email)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('เฟสบุ๊ค :', 'กรุณากรอกเฟสบุ๊ค', props.handleFacebook(), 'text', props.facebook)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('เลขบัตรประจำตัวประชาชน :', 'กรุณากรอกเลขบัตรประจำตัวประชาชน', props.handleIdcard(), 'number', props.idcard)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('เบอร์โทรติดต่อ :', 'กรุณากรอกเบอร์โทรติดต่อ', props.handleTel(), 'number', props.tel)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('วัน/เดือน/ปีเกิด :', 'กรุณาเลือกวัน/เดือน/ปีเกิด', props.handleBirthday(), 'date', props.birthday)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            {input2Gride('อายุ (ปี) :', 'กรุณากรอกอายุ', props.handleAge(), 'number', props.age)}
                        </Grid.Column>
                        <Grid.Column>
                            <RadioSex>
                                <Form>
                                    <SizeFontRadio>
                                        เพศ :
                                    </SizeFontRadio>
                                    <Form.Field>
                                        <MgRedio
                                            label='ชาย'
                                            name='ชาย'
                                            value='ชาย'
                                            checked={props.sex === 'ชาย'}
                                            onChange={props.handleChangeSex('ชาย')}
                                        />
                                        <MgRedio
                                            label='หญิง'
                                            name='หญิง'
                                            value='หญิง'
                                            checked={props.sex === 'หญิง'}
                                            onChange={props.handleChangeSex('หญิง')}
                                        />
                                    </Form.Field>
                                </Form>
                            </RadioSex>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input4GrideMG('น้ำหนัก (กก.) :', 'กรุณากรอกน้ำหนัก', props.handleWeight(), 'number', props.weight)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('ส่วนสูง (ซม.) :', 'กรุณากรอกส่วนสูง', props.handleHeight(), 'number', props.height)}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input2Gride('เชื้อชาติ :', 'กรุณากรอกเชื้อชาติ', props.handleEthnicity(), 'text', props.ethnicity)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <Mg4Gridnationality>{input2Gride('สัญชาติ :', 'กรุณากรอกสัญชาติ', props.handleNationality(), 'text', props.nationality)}</Mg4Gridnationality>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ศาสนา :', 'กรุณากรอกศาสนา', props.handleReligion(), 'text', props.religion)}</MgGridLeft>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ชื่อ-นามสกุล บิดา :', 'กรุณากรอกชื่อ-นามสกุลบิดา', props.handleDadName(), 'text', props.dad_name)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('อาชีพ :', 'กรุณากรอกอาชีพ', props.handleDadCareer(), 'text', props.dad_career)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ชื่อ-นามสกุล มารดา :', 'กรุณากรอกชื่อ-นามสกุลมารดา', props.handleMomName(), 'text', props.mom_name)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('อาชีพ :', 'กรุณากรอกอาชีพ', props.handleMomCareer(), 'text', props.mom_career)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('จำนวนพี่น้อง (คน) :', 'กรุณากรอกจำนวนพี่น้อง', props.handleBrethren(), 'number', props.brethren)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('คุณเป็นบุตรคนที่ :', 'กรุณากรอกข้อมูล', props.handleSequence(), 'number', props.sequence)}
                </Grid.Column>
            </Grid>
            <Grid columns={1} padded='horizontally'>
                <Grid.Column>
                    <MgRedioStatus>
                        <Form>
                            <SizeFontRadio>
                                สถานภาพการสมรส :
                            </SizeFontRadio>
                            <Form.Field>
                                <MgRedio
                                    label='โสด'
                                    name='status'
                                    value='โสด'
                                    checked={props.status === 'โสด'}
                                    onChange={props.handleChangeStatus('โสด')}
                                />
                                <MgRedio
                                    label='สมรส'
                                    name='status'
                                    value='สมรส'
                                    checked={props.status === 'สมรส'}
                                    onChange={props.handleChangeStatus('สมรส')}
                                />
                                <MgRedio
                                    label='หย่า'
                                    name='status'
                                    value='หย่า'
                                    checked={props.status === 'หย่า'}
                                    onChange={props.handleChangeStatus('หย่า')}
                                />
                                <MgRedio
                                    label='หม้าย'
                                    name='status'
                                    value='หม้าย'
                                    checked={props.status === 'หม้าย'}
                                    onChange={props.handleChangeStatus('หม้าย')}
                                />
                            </Form.Field>
                        </Form>
                    </MgRedioStatus>
                </Grid.Column>
            </Grid>
            {props.showPanelStatus(props.handleMarriedFirstname(),props.handleMarriedLastname(),props.handleMarriedChild(),props.handleMarriedCompany())}
            <Grid columns={1} padded='horizontally'>
                <Grid.Column>
                    <MgRedioStatus>
                        <Form>
                            <SizeFontRadio>
                                การรับราชการทหาร :
                            </SizeFontRadio>
                            <Form.Field>
                                <MgRedio
                                    label='รับราชการทหารแล้ว'
                                    name='militaryService'
                                    value='รับราชการทหารแล้ว'
                                    checked={props.soldier === 'รับราชการทหารแล้ว'}
                                    onChange={props.handleChangeSoldier('รับราชการทหารแล้ว')}
                                />
                                <MgRedio
                                    label='ได้รับการผ่อนผัน'
                                    name='receivedWaiver'
                                    value='ได้รับการผ่อนผัน'
                                    checked={props.soldier === 'ได้รับการผ่อนผัน'}
                                    onChange={props.handleChangeSoldier('ได้รับการผ่อนผัน')}
                                />
                                <MgRedio
                                    label='จบโรงเรียนรักษาดินแดน'
                                    name='graduate'
                                    value='จบโรงเรียนรักษาดินแดน'
                                    checked={props.soldier === 'จบโรงเรียนรักษาดินแดน'}
                                    onChange={props.handleChangeSoldier('จบโรงเรียนรักษาดินแดน')}
                                />
                                <MgRedio
                                    label='จับใบดำ'
                                    name='blackLeaf'
                                    value='จับใบดำ'
                                    checked={props.soldier === 'จับใบดำ'}
                                    onChange={props.handleChangeSoldier('จับใบดำ')}
                                />
                                <MgRedio
                                    label='ได้รับการยกเว้น'
                                    name='except'
                                    value='ได้รับการยกเว้น'
                                    checked={props.soldier === 'ได้รับการยกเว้น'}
                                    onChange={props.handleChangeSoldier('ได้รับการยกเว้น')}
                                />
                            </Form.Field>
                        </Form>
                    </MgRedioStatus>
                </Grid.Column>
            </Grid>
            <Grid columns={1} padded='horizontally'>
                <Grid.Column>
                    <MgRedioStatus>
                        <Form>
                            <SizeFontRadio>
                                ท่านมีโรคประจำตัวหรือไม่ :
                            </SizeFontRadio>
                            <Form.Field>
                                <MgRedio
                                    label='มี'
                                    name='yes'
                                    value='มี'
                                    checked={props.congenitalDisease === 'มี'}
                                    onChange={props.handleChangeCongenitalDisease('มี')}
                                />
                                <MgRedio
                                    label=' ไม่มี'
                                    name='no'
                                    value='ไม่มี'
                                    checked={props.congenitalDisease === 'ไม่มี'}
                                    onChange={props.handleChangeCongenitalDisease('ไม่มี')}
                                />
                            </Form.Field>
                        </Form>
                    </MgRedioStatus>
                </Grid.Column>
            </Grid>
            {props.showPanelCongenitalDisease(props.handleCongenitalDiseaseName())}
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('บุคคลที่ติดต่อกรณีเร่งด่วน :', 'กรุณากรอกบุคคลที่ติดต่อกรณีเร่งด่วน' , props.handleUrgenContact() , 'text' , props.urgent_contact)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('ความสัมพันธ์ :', 'กรุณากรอกความสัมพันธ์' , props.handleUrgenRelation() , 'text' , props.urgent_relation)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('เบอร์โทรศัพท์ :', 'กรุณากรอกเบอร์โทร' , props.handleUrgenPhone() , 'number' , props.urgent_phone )}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('ทราบการรับสมัครจาก :', 'กรุณากรอกข้อมูล' , props.handleUrgenApply() , 'text' , props.urgent_apply)}
                </Grid.Column>
            </Grid>
            <br />
            <center>
                <FontInfo>แจ้งผู้ที่อาจจะอ้างอิงหรือสอบถามได้ ซึ่งมิใช่ญาติ หรืออดีตผู้ว่าจ้าง</FontInfo>
                <MgIcon name='window minimize outline' size='big' />
            </center>
            <br />
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ชื่อ-นามสกุล :', 'กรุณากรอกชื่อ-นามสกุล' , props.handleReferName() , 'text' , props.refer_name)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('ที่อยู่ :', 'กรุณากรอกที่อยู่' , props.handleReferAddress() , 'text' , props.refer_address)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('เบอร์โทรศัพท์ :', 'กรุณากรอกเบอร์โทรศัพท์' , props.handleReferPhone() , 'number' , props.refer_phone)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('อาชีพ :', 'กรุณากรอกอาชีพ' , props.handleReferCareer() , 'text' , props.refer_career)}
                </Grid.Column>
            </Grid>
            <br /><br />
            <MgBTNOrange>
                {btn_orange('ถัดไป', 'https://www.img.in.th/images/c0dce936813662e607bd5798e68fd712.png', props.saveThisPage())}
            </MgBTNOrange>
            <br /><br />
        </Box>
        <Divider hidden />
    </Container>
)