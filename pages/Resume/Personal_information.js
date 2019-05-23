import React from 'react'
import { withLayout ,withApp } from '../../hoc'
import { compose, withProps, withState, withHandlers, lifecycle } from 'recompose'
import styled from 'styled-components'
import { Container, Step, Icon, Divider, Grid, Image, Form, Radio } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react'
import theme from '../../theme/default'
import { 
    inputAge , 
    input2GrideOnKeyUp , 
    inputOnkeyup , 
    input2GrideGrideMG, 
    input2Gride, 
    inputWeigth,
    inputHeigth,
    inputEmail,
    inputIdcard
} from '../../components/Input'
import { btn_orange } from '../../components/Button'
import { stepApplyJobInfomation } from '../../components/Step'
import {firebase} from '../../firebase/index'
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
    margin-top: 3% !important;
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
    :focus + ${DivHiddenImage} {
        display : block ;
    }
    ${DivImage}:hover & {
        opacity: 0.1;
    }
`
const ImgUserHidden = styled(Image)`
    padding-top: 26% ;
    display : block ;
`;

const enhance = compose(
    withApp,
    inject('authStore'),
    withState('salary', 'setSalary'),
    withState('imageBase64', 'setImageBase64', undefined),
    withState('fname_thai', 'setFname_thai'),
    withState('lname_thai', 'setLname_thai'),
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
    withState('brethren', 'setBrethren' ),
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
    withState('stack', 'setStack' , false),
    withState('position_name' , 'setPosition_name' , ''),
    withState('check_soldier', 'setCheck_soldier'),
    withProps({
        pageTitle: 'Personal information'
    }),
    withLayout,
    withHandlers({
        initPersonalLocalStorege: props => () => {
            if (localStorage.Personal_page) {
                props.setSex(JSON.parse(localStorage.getItem('Personal_page')).sex)
                props.setSoldier(JSON.parse(localStorage.getItem('Personal_page')).soldier)
                props.setFname_thai(JSON.parse(localStorage.getItem('Personal_page')).fname_thai)
                props.setLname_thai(JSON.parse(localStorage.getItem('Personal_page')).lname_thai)
                props.setEmail(JSON.parse(localStorage.getItem('Personal_page')).email)
                props.setFacebook(JSON.parse(localStorage.getItem('Personal_page')).facebook)
                props.setIdcard(JSON.parse(localStorage.getItem('Personal_page')).idcard)
                props.setTel(JSON.parse(localStorage.getItem('Personal_page')).tel)
                props.setBirthday(JSON.parse(localStorage.getItem('Personal_page')).birthday)
                props.setAge(JSON.parse(localStorage.getItem('Personal_page')).age)
                props.setWeight(JSON.parse(localStorage.getItem('Personal_page')).weight)
                props.setHeight(JSON.parse(localStorage.getItem('Personal_page')).height)
                props.setEthnicity(JSON.parse(localStorage.getItem('Personal_page')).ethnicity)
                props.setNationality(JSON.parse(localStorage.getItem('Personal_page')).nationality)
                props.setReligion(JSON.parse(localStorage.getItem('Personal_page')).religion)
                props.setDad_name(JSON.parse(localStorage.getItem('Personal_page')).dad_name)
                props.setDad_career(JSON.parse(localStorage.getItem('Personal_page')).dad_career)
                props.setMom_name(JSON.parse(localStorage.getItem('Personal_page')).mom_name)
                props.setMom_career(JSON.parse(localStorage.getItem('Personal_page')).mom_career)
                props.setBrethren(JSON.parse(localStorage.getItem('Personal_page')).brethren)
                props.setSequence(JSON.parse(localStorage.getItem('Personal_page')).sequence)
                props.setUrgent_contact(JSON.parse(localStorage.getItem('Personal_page')).urgent_contact)
                props.setUrgent_relation(JSON.parse(localStorage.getItem('Personal_page')).urgent_relation)
                props.setUrgent_phone(JSON.parse(localStorage.getItem('Personal_page')).urgent_phone)
                props.setUrgent_apply(JSON.parse(localStorage.getItem('Personal_page')).urgent_apply)
                props.setRefer_name(JSON.parse(localStorage.getItem('Personal_page')).refer_name)
                props.setRefer_address(JSON.parse(localStorage.getItem('Personal_page')).refer_address)
                props.setRefer_phone(JSON.parse(localStorage.getItem('Personal_page')).refer_phone)
                props.setRefer_career(JSON.parse(localStorage.getItem('Personal_page')).refer_career)
                props.setImageBase64(JSON.parse(localStorage.getItem('Personal_page')).imageBase64)

                const local_status = JSON.parse(localStorage.getItem('Personal_page')).status
                props.setStatus(local_status)    
                if (local_status === 'สมรส') {
                    props.setCheck_status(true)
                    setState({
                        status_married_fname: JSON.parse(localStorage.getItem('Personal_page')).status_married_fname,
                        status_married_lname: JSON.parse(localStorage.getItem('Personal_page')).status_married_lname,
                        status_married_child: JSON.parse(localStorage.getItem('Personal_page')).status_married_child,
                        status_married_company: JSON.parse(localStorage.getItem('Personal_page')).status_married_company,
                    })
                }        

                const local_congenitalDisease = JSON.parse(localStorage.getItem('Personal_page')).congenitalDisease
                props.SetCongenitalDisease(local_congenitalDisease)
                if (local_congenitalDisease === 'มี') {
                    props.setCheck_status_congenitalDisease(true)
                    props.SetCongenitalDisease_name(JSON.parse(localStorage.getItem('Personal_page')).congenitalDisease_name)
                }
                else{
                    props.SetCongenitalDisease_name('')
                }
            }
        }
    }),
    lifecycle({
        async componentDidMount() {            
            window.scrollTo(0, 0)
            let data = this.props.authStore.userData
            let resultIdcard = `${data.idcard}`
            await this.props.initPersonalLocalStorege()
            this.props.sex && this.props.sex === 'ชาย' ? this.props.setCheck_soldier(true) : this.props.setCheck_soldier(false)
            this.props.setFname_thai(data.firstname)
            this.props.setLname_thai(data.lastname)
            this.props.setEmail(data.email)
            let result1 = [resultIdcard.slice(0,1), '-', resultIdcard.slice(1)].join('');
            let result2 = [result1.slice(0,6), '-', result1.slice(6)].join('');
            let result3 = [result2.slice(0,12), '-', result2.slice(12)].join('');
            let result4 = [result3.slice(0,15), '-', result3.slice(15)].join('');
            this.props.setIdcard(result4)
            // const url = `http://localhost:data.idcard4000/job_position/${this.props.url.query.id}`
            // const res =  await axios.get(url)            
            // this.props.setPosition_name(res.data[0].position_name)
            
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
                'fname_thai' : props.fname_thai ,
                'lname_thai' : props.lname_thai ,
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
            // const checkInputData = Object.getOwnPropertyNames(JSON.parse(localStorage.getItem('Personal_page')));
            if (
                props.congenitalDisease === 'มี' && 
                props.congenitalDisease_name === '' ||
                props.check_status === true &&
                props.status_married_fname === undefined
            ){
                window.alert('คุณกรอกข้อมูลไม่ถูกต้อง หรือ ไม่ครบถ้วน \nกรุณากรอกข้อมูลใหม่อีกครั้ง !!!')
            }
            else{
                const uid = props.authStore.currentUser.uid                 
                firebase.database().ref('resume/' + uid).update({
                    user_id : uid,
                    email : props.authStore.userData.email,
                    firstname : props.fname_thai,
                    lastname : props.lname_thai, 
                    idcard : props.authStore.userData.idcard,
                    facebook : props.facebook,
                    tel : props.tel ,
                    birthday : props.birthday ,
                    age : props.age ,
                    sex : props.sex ,
                    weight : props.weight ,
                    height : props.height ,
                    ethnicity : props.ethnicity ,
                    nationality : props.nationality ,
                    religion : props.religion ,
                    dad_name : props.dad_name ,
                    dad_career : props.dad_career ,
                    mom_name : props.mom_name ,
                    mom_career : props.mom_career ,
                    brethren : props.brethren ,
                    sequence : props.sequence ,
                    status : props.status ,
                    status_married_fname : props.status_married_fname || null ,
                    status_married_lname : props.status_married_lname || null,
                    status_married_child : props.status_married_child || null,
                    status_married_company : props.status_married_company || null,
                    soldier : props.soldier ,
                    congenitalDisease : props.congenitalDisease ,
                    congenitalDisease_name : props.congenitalDisease_name ,
                    urgent_contact : props.urgent_contact ,
                    urgent_relation : props.urgent_relation ,
                    urgent_phone : props.urgent_phone ,
                    urgent_apply : props.urgent_apply ,
                    refer_name : props.refer_name ,
                    refer_address : props.refer_address ,
                    refer_phone : props.refer_phone ,
                    refer_career : props.refer_career ,
                    imageBase64 : props.imageBase64,
                })
                Router.push({ pathname : '/Resume/Address_information' })
            }
        },
        handleFnameThai: props => () => event => {
            props.setFname_thai(event.target.value)
        },
        handleLnameThai: props => () => event => {
            props.setLname_thai(event.target.value)
        },
        handleEmail: props => () => event => {
            props.setEmail(event.target.value)
        },
        handleFacebook: props => () => event => {
            props.setFacebook(event.target.value)
        },
        handleIdcard: props => () => event => {
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
                    // if (
                    //     event.target.value.length === 1 && keycode === 8 || 
                    //     event.target.value.length === 6 && keycode === 8 || 
                    //     event.target.value.length === 12 && keycode === 8 || 
                    //     event.target.value.length === 15 && keycode === 8 
                    // ){
                    //     props.setStack(true)
                    // }
                    // if (props.stack === true) {
                        
                    // }                     
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
        handleTel: props => () => event => {
            let stack = props.tel    
            if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode > 47 && event.keyCode < 58) { 
                if (event.target.value.length > 10) {
                    event.target.value = stack
                }
                else{
                    props.setTel(event.target.value)
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
        handleBirthday: props => () => event => {
            props.setBirthday(event.target.value) 
            if (event.target.value === '') {
                props.setAge(event.target.value)
            }
            else{
                let set_age = event.target.value.split('-')
                let dateString = set_age[1]+"/"+set_age[2]+"/"+set_age[0]
                var now = new Date();
                var today = new Date(now.getFullYear(),now.getMonth(),now.getDate());
                var yearNow = now.getFullYear();
                var monthNow = now.getMonth();
                var dateNow = now.getDate();
                var dob = new Date( dateString.substring(6,10), dateString.substring(0,2)-1, dateString.substring(3,5));
                var yearDob = dob.getFullYear();
                var monthDob = dob.getMonth();
                var dateDob = dob.getDate();                        
                var yearAge = yearNow - yearDob;
                if (monthNow >= monthDob)
                    var monthAge = monthNow - monthDob;
                else {
                    yearAge--;
                    var monthAge = 12 + monthNow -monthDob;
                }
                if (dateNow >= dateDob)
                    var dateAge = dateNow - dateDob;
                else {
                    monthAge--;
                    var dateAge = 31 + dateNow - dateDob;
                    if (monthAge < 0) {
                        monthAge = 11;
                        yearAge--;
                    }
                } 
                props.setAge(yearAge)
            }
        },
        handleChangeSex: props => (sex) => event => {
            if (sex === 'ชาย') {
                props.setCheck_soldier(true)
                props.setSex(sex)
            }
            else{
                props.setCheck_soldier(false)
                props.setSex(sex)
            }
        },
        handleWeight: props => () => event => {
            let stack = props.weight    
            if (parseInt(event.target.value) < 1 || parseInt(event.target.value) > 150) {
                event.target.value = stack
            }
            else{
                if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode > 47 && event.keyCode < 58) { 
                    if (event.target.value.length > 3) {
                        event.target.value = stack
                    }
                    else{
                        props.setWeight(event.target.value)
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
            }
        },
        handleHeight: props => () => event => {
            let stack = props.height    
            if (parseInt(event.target.value) < 1 || parseInt(event.target.value) > 220) {
                event.target.value = stack
            }
            else{
                if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode > 47 && event.keyCode < 58) { 
                    if (event.target.value.length > 3) {
                        event.target.value = stack
                    }
                    else{
                        props.setHeight(event.target.value)
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
            }
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
            let stack = props.brethren                
            if (parseInt(event.target.value) > 15){
                event.target.value = stack
            }
            else{
                if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode > 47 && event.keyCode < 58) { 
                    if (event.target.value.length > 2) {
                        event.target.value = stack
                    }
                    else{
                        props.setBrethren(event.target.value)
                    }
                }
                else{
                    if (event.keyCode === 9) {
                        event.target.value = ''
                        props.setBrethren(event.target.value)
                    }
                    else{
                        event.target.value = stack
                    }
                }
            }
        },
        handleSequence: props => () => event => {
            let stack = props.sequence       
            if (parseInt(event.target.value) > 16){
                event.target.value = stack
            }
            else{
                if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode > 47 && event.keyCode < 58) { 
                    if (event.target.value.length > 2) {
                        event.target.value = stack
                    }
                    else{
                        props.setSequence(event.target.value)
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
            }
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
            let stack = props.status_married_child                
            if (parseInt(event.target.value) > 10){
                event.target.value = stack
            }
            else{
                if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode > 47 && event.keyCode < 58) { 
                    if (event.target.value.length > 2) {
                        event.target.value = stack
                    }
                    else{
                        props.setStatus_married_child(event.target.value)
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
            }
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
            let stack = props.urgent_phone    
            if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode > 47 && event.keyCode < 58) { 
                if (event.target.value.length > 10) {
                    event.target.value = stack
                }
                else{
                    props.setUrgent_phone(event.target.value)
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
            let stack = props.refer_phone    
            if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode > 47 && event.keyCode < 58) { 
                if (event.target.value.length > 10) {
                    event.target.value = stack
                }
                else{
                    props.setRefer_phone(event.target.value)
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
                                    {input2GrideGrideMG('ชื่อคู่สมรส :', 'กรุณากรอกชื่อคู่สมรส' , firstName , 'text' , props.status_married_fname , '' , true )}
                                </Grid.Column>
                                <Grid.Column>
                                    {input2GrideGrideMG('นามสกุลเดิมคู่สมรส :', 'กรุณากรอกนามสกุลเดิมคู่สมรส' , lastname , 'text' , props.status_married_lname , '' , true)}
                                </Grid.Column>
                            </Grid>
                            <Grid columns={2} >
                                <Grid.Column>
                                    {inputOnkeyup('จำนวนบุตร (คน) :', 'หากไม่มีบุตรกรุณากรอก 0' , child , 'text' , props.status_married_child , '', true)}
                                </Grid.Column>
                                <Grid.Column>
                                    {input2GrideGrideMG('สถานที่ทำงานคู่สมรส :', 'กรุณากรอกสถานที่ทำงานคู่สมรส' , company , 'text' , props.status_married_company , '' , true)}
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
                                    {input2GrideGrideMG('โรคประจำตัว :', 'กรุณากรอกชื่อโรคประจำตัว' , name , 'text' , props.congenitalDisease_name , '' , true)}
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
    }),
    observer
)

export default enhance((props) =>
    <Container>
        <br/><br/>
        <BoxHead>
            <center><br /><TextBox>ข้อมูลส่วนตัว</TextBox></center><br />
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
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ชื่อ (ภาษาไทย) :', 'กรุณากรอกชื่อ (ภาษาไทย)', props.handleFnameThai(), 'text', props.fname_thai , '',true)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('นามสกุล (ภาษาไทย) :', 'กรุณากรอกนามสกุล (ภาษาไทย)', props.handleLnameThai(), 'text', props.lname_thai, '',true)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{inputEmail('อีเมล :', 'ตัวอย่าง Example@test.com', props.handleEmail(), 'email', props.email, '',true)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('เฟสบุ๊ค :', 'กรุณากรอกเฟสบุ๊ค', props.handleFacebook(), 'text', props.facebook)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{inputIdcard('เลขบัตรประจำตัวประชาชน :', 'ตัวอย่าง 1-2345-67890-12-3', props.handleIdcard(), 'text', props.idcard, '',true)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2GrideOnKeyUp('เบอร์โทรติดต่อ :', 'ตัวอย่าง 0881234567', props.handleTel(), 'text', props.tel ,true)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('วัน/เดือน/ปีเกิด :', 'กรุณาเลือกวัน/เดือน/ปีเกิด', props.handleBirthday(), 'date', props.birthday, '',true)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            {inputAge('อายุ (ปี) :', 'กรุณากรอกอายุ', null, 'number' ,  props.age)}
                        </Grid.Column>
                        <Grid.Column>
                            <RadioSex>
                                <Form>
                                    <SizeFontRadio>
                                        เพศ :
                                        <text style={{ color : theme.colors.orange }}> *</text>
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
                            <WidthWeight>{inputWeigth('น้ำหนัก (กก.) :', 'กรุณากรอกน้ำหนัก', props.handleWeight(), 'text', props.weight , true)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{inputHeigth('ส่วนสูง (ซม.) :', 'กรุณากรอกส่วนสูง', props.handleHeight(), 'text', props.height , true)}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input2Gride('เชื้อชาติ :', 'กรุณากรอกเชื้อชาติ', props.handleEthnicity(), 'text', props.ethnicity , '' , true)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <Mg4Gridnationality>{input2Gride('สัญชาติ :', 'กรุณากรอกสัญชาติ', props.handleNationality(), 'text', props.nationality , '' , true)}</Mg4Gridnationality>
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
                    <MgGridLeft>{input2GrideGrideMG('ชื่อ-นามสกุล บิดา :', 'กรุณากรอกชื่อ-นามสกุลบิดา', props.handleDadName(), 'text', props.dad_name , '' , true)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('อาชีพ :', 'กรุณากรอกอาชีพ', props.handleDadCareer(), 'text', props.dad_career , '' , true)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ชื่อ-นามสกุล มารดา :', 'กรุณากรอกชื่อ-นามสกุลมารดา', props.handleMomName(), 'text', props.mom_name , '' , true)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('อาชีพ :', 'กรุณากรอกอาชีพ', props.handleMomCareer(), 'text', props.mom_career , '' , true)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{inputOnkeyup('จำนวนพี่น้อง (คน) :', 'กรุณากรอกจำนวนพี่น้อง', props.handleBrethren(), 'text', props.brethren)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2GrideOnKeyUp('คุณเป็นบุตรคนที่ :', 'กรุณากรอกข้อมูล', props.handleSequence(), 'text', props.sequence)}
                </Grid.Column>
            </Grid>
            <Grid columns={1} padded='horizontally'>
                <Grid.Column>
                    <MgRedioStatus>
                        <Form>
                            <SizeFontRadio>
                                สถานภาพการสมรส :
                                <text style={{ color : theme.colors.orange }}> *</text>
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
                                    label='หย่าร้าง'
                                    name='status'
                                    value='หย่าร้าง'
                                    checked={props.status === 'หย่าร้าง'}
                                    onChange={props.handleChangeStatus('หย่าร้าง')}
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
            {
                props.check_soldier
                    ?  <Grid columns={1} padded='horizontally'>
                            <Grid.Column>
                                <MgRedioStatus>
                                    <Form>
                                        <SizeFontRadio>
                                            การรับราชการทหาร :
                                            <text style={{ color : theme.colors.orange }}> *</text>
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
                                                label='ยังไม่ได้รับราชการทหาร'
                                                name='receivedWaiver'
                                                value='ยังไม่ได้รับราชการทหาร'
                                                checked={props.soldier === 'ยังไม่ได้รับราชการทหาร'}
                                                onChange={props.handleChangeSoldier('ยังไม่ได้รับราชการทหาร')}
                                            />
                                        </Form.Field>
                                    </Form>
                                </MgRedioStatus>
                            </Grid.Column>
                        </Grid>
                    : null
            }
            <Grid columns={1} padded='horizontally'>
                <Grid.Column>
                    <MgRedioStatus>
                        <Form>
                            <SizeFontRadio>
                                ท่านมีโรคประจำตัวหรือไม่ :
                                <text style={{ color : theme.colors.orange }}> *</text>
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
                    <MgGridLeft>{input2GrideGrideMG('บุคคลที่ติดต่อกรณีเร่งด่วน :', 'กรุณากรอกบุคคลที่ติดต่อกรณีเร่งด่วน' , props.handleUrgenContact() , 'text' , props.urgent_contact , '' , true)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('ความสัมพันธ์ :', 'กรุณากรอกความสัมพันธ์' , props.handleUrgenRelation() , 'text' , props.urgent_relation , '' , true)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{inputOnkeyup('เบอร์โทรศัพท์ :', 'กรุณากรอกเบอร์โทร' , props.handleUrgenPhone() , 'text' , props.urgent_phone , '' , true)}</MgGridLeft>
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
                    <MgGridLeft>{input2GrideGrideMG('ชื่อ-นามสกุล :', 'กรุณากรอกชื่อ-นามสกุล' , props.handleReferName() , 'text' , props.refer_name , '' , true)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('ที่อยู่ :', 'กรุณากรอกที่อยู่' , props.handleReferAddress() , 'text' , props.refer_address , '' , true)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{inputOnkeyup('เบอร์โทรศัพท์ :', 'กรุณากรอกเบอร์โทรศัพท์' , props.handleReferPhone() , 'text' , props.refer_phone , '' , true)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('อาชีพ :', 'กรุณากรอกอาชีพ' , props.handleReferCareer() , 'text' , props.refer_career , '' , true)}
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