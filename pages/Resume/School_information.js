import React from 'react'
import { withLayout } from '../../hoc'
import { compose , withProps , withState , withHandlers , lifecycle } from 'recompose'
import styled from 'styled-components'
import { Container , Icon , Divider , Grid  } from 'semantic-ui-react'
import theme from '../../theme/default'
import { inputWeigth,inputHeigth,input2Gride , input4GrideMG , input4Gride} from '../../components/Input'
import {btn_NextBack} from '../../components/Button'
import {StepApplyJobSchool} from '../../components/Step'
import Router from 'next/router'
import {firebase} from '../../firebase/index'
import { inject, observer } from 'mobx-react'

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

const FontInfo = styled.p`
    font-size: 20px;
    color: ${theme.colors.orange} !important;
`;

const FontInfoMG = styled.p`
    font-size: 20px;
    margin-left: 14.4% !important;
    color: ${theme.colors.orange} !important;
`;

const MgIcon = styled(Icon)`
    margin-top: -4% !important;
    color: ${theme.colors.orange} !important;
`;

const MgGridHeight = styled.div`
    margin-left: 6%;
    width: 100%;
`;

const WidthWeight = styled.div`
    width: 100%;
`;

const MgBTNOrange = styled.div`
    margin-left: 70%;
`;

const enhance = compose(
    withLayout,
    inject('authStore'),
    withState('highSchool_name','setHighSchool_name'),
    withState('highSchool_country','setHighSchool_country'),
    withState('highSchool_major','setHighSchool_major'),
    withState('highSchool_grade','setHighSchool_grade'),
    withState('highSchool_congrate','setHighSchool_congrate'),
    withState('diplomaSchool_name','setDiplomaSchool_name'),
    withState('diplomaSchool_country','setDiplomaSchool_country'),
    withState('diplomaSchool_major','setDiplomaSchool_major'),
    withState('diplomaSchool_grade','setDiplomaSchool_grade'),
    withState('diplomaSchool_congrate','setDiplomaSchool_congrate'),
    withState('bechelorSchool_name','setBechelorSchool_name'),
    withState('bechelorSchool_country','setBechelorSchool_country'),
    withState('bechelorSchool_major','setBechelorSchool_major'),
    withState('bechelorSchool_grade','setBechelorSchool_grade'),
    withState('bechelorSchool_congrate','setBechelorSchool_congrate'),
    withState('otherSchool_name','setOtherSchool_name'),
    withState('otherSchool_country','setOtherSchool_country'),
    withState('otherSchool_major','setOtherSchool_major'),
    withState('otherSchool_grade','setOtherSchool_grade'),
    withState('otherSchool_congrate','setOtherSchool_congrate'),
    withProps({
        pageTitle: 'School information'
    }),
    withHandlers({
        initSchoolLocalStorege: props => () => {
            firebase.database().ref('resume/' + props.authStore.accessToken)
            .once("value").then( snapshot => {
                let resume = snapshot.val()
                props.setHighSchool_name(resume.highSchool_name)            
                props.setHighSchool_country(resume.highSchool_country)            
                props.setHighSchool_major(resume.highSchool_major)            
                props.setHighSchool_grade(resume.highSchool_grade)            
                props.setHighSchool_congrate(resume.highSchool_congrate) 

                props.setDiplomaSchool_name(resume.diplomaSchool_name)            
                props.setDiplomaSchool_country(resume.diplomaSchool_country)            
                props.setDiplomaSchool_major(resume.diplomaSchool_major)            
                props.setDiplomaSchool_grade(resume.diplomaSchool_grade)            
                props.setDiplomaSchool_congrate(resume.diplomaSchool_congrate) 

                props.setBechelorSchool_name(resume.bechelorSchool_name)            
                props.setBechelorSchool_country(resume.bechelorSchool_country)            
                props.setBechelorSchool_major(resume.bechelorSchool_major)            
                props.setBechelorSchool_grade(resume.bechelorSchool_grade)            
                props.setBechelorSchool_congrate(resume.bechelorSchool_congrate)  

                props.setOtherSchool_name(resume.otherSchool_name)            
                props.setOtherSchool_country(resume.otherSchool_country)            
                props.setOtherSchool_major(resume.otherSchool_major)            
                props.setOtherSchool_grade(resume.otherSchool_grade)            
                props.setOtherSchool_congrate(resume.otherSchool_congrate)
            })
        }
    }),
    lifecycle({
        async componentDidMount(){
            window.scrollTo(0, 0)
            await this.props.initSchoolLocalStorege()
        }
    }),
    withHandlers({
        handleHighSchoolName: props => () => event => {
            props.setHighSchool_name(event.target.value)
        },
        handleHighSchoolCountry: props => () => event => {
            props.setHighSchool_country(event.target.value)
        },
        handleHighSchoolMajor: props => () => event => {
            props.setHighSchool_major(event.target.value)
        },
        handleHighSchoolGrade: props => () => event => {
            let stack = props.highSchool_grade            
            if (event.target.value < '5') {
                if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode === 110 || event.keyCode > 47 && event.keyCode < 58 || event.keyCode === 190) {                 
                    if (event.target.value.length > 4 || event.target.value.length === 2 && event.target.value[1] !== '.') {
                        event.target.value = stack
                    }
                    else{
                        props.setHighSchool_grade(event.target.value)
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
            else{
                event.target.value = ''
            }
        },
        handleHighSchoolCongrate: props => () => event => {
            let stack = props.highSchool_congrate
            if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode > 47 && event.keyCode < 58) { 
                if (event.target.value.length > 4) {
                    event.target.value = stack
                }
                else{
                    props.setHighSchool_congrate(event.target.value)
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
        handleDiplomaSchoolName: props => () => event => {
            props.setDiplomaSchool_name(event.target.value)
        },
        handleDiplomaSchoolCountry: props => () => event => {
            props.setDiplomaSchool_country(event.target.value)
        },
        handleDiplomaSchoolMajor: props => () => event => {
            props.setDiplomaSchool_major(event.target.value)
        },
        handleDiplomaSchoolGrade: props => () => event => {
            let stack = props.diplomaSchool_grade
            if (event.target.value < '5') {
                if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode === 110 || event.keyCode > 47 && event.keyCode < 58 || event.keyCode === 190) {                 
                    if (event.target.value.length > 4 || event.target.value.length === 2 && event.target.value[1] !== '.') {
                        event.target.value = stack
                    }
                    else{
                        props.setDiplomaSchool_grade(event.target.value)
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
            else{
                event.target.value = ''
            }
        },
        handleDiplomaSchoolCongrate: props => () => event => {
            let stack = props.diplomaSchool_congrate
            if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode > 47 && event.keyCode < 58) { 
                if (event.target.value.length > 4) {
                    event.target.value = stack
                }
                else{
                    props.setDiplomaSchool_congrate(event.target.value)
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
        handleBechelorSchoolName: props => () => event => {
            props.setBechelorSchool_name(event.target.value)
        },
        handleBechelorSchoolCountry: props => () => event => {
            props.setBechelorSchool_country(event.target.value)
        },
        handleBechelorSchoolMajor: props => () => event => {
            props.setBechelorSchool_major(event.target.value)
        },
        handleBechelorSchoolGrade: props => () => event => {
            let stack = props.bechelorSchool_grade
            if (event.target.value > '1' && event.target.value < '5') {
                if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode === 110 || event.keyCode > 47 && event.keyCode < 58 || event.keyCode === 190) {                 
                    if (event.target.value.length > 4 || event.target.value.length === 2 && event.target.value[1] !== '.') {
                        event.target.value = stack
                    }
                    else{
                        props.setBechelorSchool_grade(event.target.value)
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
            else{
                event.target.value = ''
            }
        },
        handleBechelorSchoolCoungrate: props => () => event => {
            let stack = props.bechelorSchool_congrate
            if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode > 47 && event.keyCode < 58) { 
                if (event.target.value.length > 4) {
                    event.target.value = stack
                }
                else{
                    props.setBechelorSchool_congrate(event.target.value)
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
        handleOtherSchoolName: props => () => event => {
            props.setOtherSchool_name(event.target.value)
        },
        handleOtherSchoolCountry: props => () => event => {
            props.setOtherSchool_country(event.target.value)
        },
        handleOtherSchoolMajor: props => () => event => {
            props.setOtherSchool_major(event.target.value)
        },
        handleOtherSchoolGrade: props => () => event => {
            let stack = props.otherSchool_grade
            if (event.target.value < '5') {
                if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode === 110 || event.keyCode > 47 && event.keyCode < 58 || event.keyCode === 190) {                 
                    if (event.target.value.length > 4 || event.target.value.length === 2 && event.target.value[1] !== '.') {
                        event.target.value = stack
                    }
                    else{
                        props.setOtherSchool_grade(event.target.value)
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
            else{
                event.target.value = ''
            }
        },
        handleOtherSchoolCongrate: props => () => event => {
            let stack = props.otherSchool_congrate
            if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode > 47 && event.keyCode < 58) { 
                if (event.target.value.length > 4) {
                    event.target.value = stack
                }
                else{
                    props.setOtherSchool_congrate(event.target.value)
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

        saveThisPageNext: props => () => event => {
            const uid = props.authStore.currentUser.uid   
            firebase.database().ref('resume/' + uid).update({
                highSchool_name : props.highSchool_name !== undefined ? props.highSchool_name : '-',
                highSchool_country : props.highSchool_country !== undefined ? props.highSchool_country : '-',
                highSchool_major : props.highSchool_major !== undefined ? props.highSchool_major : '-',
                highSchool_grade : props.highSchool_grade !== undefined ? props.highSchool_grade : '-',
                highSchool_congrate : props.highSchool_congrate !== undefined ? props.highSchool_congrate : '-',
                diplomaSchool_name : props.diplomaSchool_name !== undefined ? props.diplomaSchool_name : '-',
                diplomaSchool_country : props.diplomaSchool_country !== undefined ? props.diplomaSchool_country : '-',
                diplomaSchool_major : props.diplomaSchool_major !== undefined ? props.diplomaSchool_major : '-',
                diplomaSchool_grade : props.diplomaSchool_grade !== undefined ? props.diplomaSchool_grade : '-',
                diplomaSchool_congrate : props.diplomaSchool_congrate !== undefined ? props.diplomaSchool_congrate : '-',
                bechelorSchool_name : props.bechelorSchool_name !== undefined ? props.bechelorSchool_name : '-',
                bechelorSchool_country : props.bechelorSchool_country !== undefined ? props.bechelorSchool_country : '-',
                bechelorSchool_major : props.bechelorSchool_major !== undefined ? props.bechelorSchool_major : '-',
                bechelorSchool_grade : props.bechelorSchool_grade !== undefined ? props.bechelorSchool_grade : '-',
                bechelorSchool_congrate : props.bechelorSchool_congrate !== undefined ? props.bechelorSchool_congrate : '-',
                otherSchool_name : props.otherSchool_name !== undefined ? props.otherSchool_name : '-',
                otherSchool_country : props.otherSchool_country !== undefined ? props.otherSchool_country : '-',
                otherSchool_major : props.otherSchool_major !== undefined ? props.otherSchool_major : '-',
                otherSchool_grade : props.otherSchool_grade !== undefined ? props.otherSchool_grade : '-',
                otherSchool_congrate : props.otherSchool_congrate !== undefined ? props.otherSchool_congrate : '-',
            })
            Router.push({ pathname : '/Resume/Ability_information' })        
            // const checkInputData = Object.getOwnPropertyNames(JSON.parse(localStorage.getItem('School_page')));            
            // if (checkInputData.length < 10){
            //     window.alert('คุณกรอกข้อมูลไม่ถูกต้อง หรือ ไม่ครบถ้วน \nกรุณากรอกข้อมูลใหม่อีกครั้ง !!!')
            // }      
            // else{
            //     Router.push({ pathname : '/Resume/Ability_information' , query : { id : props.url.query.id }})
            // }
        },
        saveThisPagePrev: props => () => event => {
            const uid = props.authStore.currentUser.uid
            firebase.database().ref('resume/' + uid).update({
                highSchool_name : props.highSchool_name !== undefined ? props.highSchool_name : '-',
                highSchool_country : props.highSchool_country !== undefined ? props.highSchool_country : '-',
                highSchool_major : props.highSchool_major !== undefined ? props.highSchool_major : '-',
                highSchool_grade : props.highSchool_grade !== undefined ? props.highSchool_grade : '-',
                highSchool_congrate : props.highSchool_congrate !== undefined ? props.highSchool_congrate : '-',
                diplomaSchool_name : props.diplomaSchool_name !== undefined ? props.diplomaSchool_name : '-',
                diplomaSchool_country : props.diplomaSchool_country !== undefined ? props.diplomaSchool_country : '-',
                diplomaSchool_major : props.diplomaSchool_major !== undefined ? props.diplomaSchool_major : '-',
                diplomaSchool_grade : props.diplomaSchool_grade !== undefined ? props.diplomaSchool_grade : '-',
                diplomaSchool_congrate : props.diplomaSchool_congrate !== undefined ? props.diplomaSchool_congrate : '-',
                bechelorSchool_name : props.bechelorSchool_name !== undefined ? props.bechelorSchool_name : '-',
                bechelorSchool_country : props.bechelorSchool_country !== undefined ? props.bechelorSchool_country : '-',
                bechelorSchool_major : props.bechelorSchool_major !== undefined ? props.bechelorSchool_major : '-',
                bechelorSchool_grade : props.bechelorSchool_grade !== undefined ? props.bechelorSchool_grade : '-',
                bechelorSchool_congrate : props.bechelorSchool_congrate !== undefined ? props.bechelorSchool_congrate : '-',
                otherSchool_name : props.otherSchool_name !== undefined ? props.otherSchool_name : '-',
                otherSchool_country : props.otherSchool_country !== undefined ? props.otherSchool_country : '-',
                otherSchool_major : props.otherSchool_major !== undefined ? props.otherSchool_major : '-',
                otherSchool_grade : props.otherSchool_grade !== undefined ? props.otherSchool_grade : '-',
                otherSchool_congrate : props.otherSchool_congrate !== undefined ? props.otherSchool_congrate : '-',
            })   
            Router.push({ pathname : '/Resume/Address_information'})
        },
    }),
    observer
)

export default enhance( (props)=> 
    <Container>
        <br/><br/>
        <BoxHead>
            <center><br/><TextBox>ข้อมูลส่วนตัว</TextBox></center><br/>
        </BoxHead>
        <BoxHead2/>
        <Box>
            <br/>
                {StepApplyJobSchool('ข้อมูลส่วนบุคคล','ที่อยู่ผู้สมัคร','ประวัติการศึกษา','ความสามรถพิเศษ','ประสบการณ์ทำงาน')}
            <br/>
            <center>
                <FontInfo>ประวัติการศึกษาของผู้สมัคร</FontInfo>
                <MgIcon name='window minimize outline' size='big'/>
            </center>
            <br/>
                <FontInfoMG>ระดับการศึกษา : มัธยมศึกษาตอนปลาย/ปวช. </FontInfoMG>
            <br/>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input4GrideMG('ชื่อสถานศึกษา :','กรุณากรอกชื่อสถานศึกษา' , props.handleHighSchoolName() , 'text' , props.highSchool_name)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('ประเทศ :','กรุณากรอกประเทศ' , props.handleHighSchoolCountry() , 'text' , props.highSchool_country)}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid.Column>
                        {input2Gride('สาขาวิชา :','กรุณากรอกสาขาวิชา' , props.handleHighSchoolMajor() , 'text' , props.highSchool_major)}
                    </Grid.Column>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{inputWeigth('เกรดเฉลี่ย :','กรุณากรอกเกรดเฉลี่ย' , props.handleHighSchoolGrade() , 'text' , props.highSchool_grade)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{inputHeigth('ปีที่สำเร็จการศึกษา :','กรุณากรอกปีที่สำเร็จการศึกษา' , props.handleHighSchoolCongrate() , 'text' , props.highSchool_congrate)}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <br/><br/>
                <FontInfoMG>ระดับการศึกษา : ปวส./ปวท./อนุปริญญา</FontInfoMG>
            <br/>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input4GrideMG('ชื่อสถานศึกษา :','กรุณากรอกชื่อสถานศึกษา' , props.handleDiplomaSchoolName() , 'text' , props.diplomaSchool_name)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('ประเทศ :','กรุณากรอกประเทศ' , props.handleDiplomaSchoolCountry() , 'text' , props.diplomaSchool_country)}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid.Column>
                        {input2Gride('สาขาวิชา :','กรุณากรอกสาขาวิชา' , props.handleDiplomaSchoolMajor() , 'text' , props.diplomaSchool_major)}
                    </Grid.Column>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{inputWeigth('เกรดเฉลี่ย :','กรุณากรอกเกรดเฉลี่ย' , props.handleDiplomaSchoolGrade() , 'text' , props.diplomaSchool_grade)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{inputHeigth('ปีที่สำเร็จการศึกษา :','กรุณากรอกปีที่สำเร็จการศึกษา' , props.handleDiplomaSchoolCongrate() , 'text' , props.diplomaSchool_congrate)}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <br/><br/>
                <FontInfoMG>ระดับการศึกษา : ปริญาตรี</FontInfoMG>
            <br/>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input4GrideMG('ชื่อสถานศึกษา :','กรุณากรอกชื่อสถานศึกษา' , props.handleBechelorSchoolName() , 'text' , props.bechelorSchool_name)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('ประเทศ :','กรุณากรอกประเทศ' , props.handleBechelorSchoolCountry() , 'text' , props.bechelorSchool_country)}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid.Column>
                        {input2Gride('สาขาวิชา :','กรุณากรอกสาขาวิชา' , props.handleBechelorSchoolMajor() , 'text' , props.bechelorSchool_major)}
                    </Grid.Column>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{inputWeigth('เกรดเฉลี่ย :','กรุณากรอกเกรดเฉลี่ย' , props.handleBechelorSchoolGrade() , 'text' , props.bechelorSchool_grade)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{inputHeigth('ปีที่สำเร็จการศึกษา :','กรุณากรอกปีที่สำเร็จการศึกษา' , props.handleBechelorSchoolCoungrate() , 'text' , props.bechelorSchool_congrate)}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <br/><br/>
                <FontInfoMG>ระดับการศึกษาสูงกว่า : อื่นๆ</FontInfoMG>
            <br/>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input4GrideMG('ชื่อสถานศึกษา :','กรุณากรอกชื่อสถานศึกษา' , props.handleOtherSchoolName() , 'text' , props.otherSchool_name)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('ประเทศ :','กรุณากรอกประเทศ' , props.handleOtherSchoolCountry() , 'text' , props.otherSchool_country)}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid.Column>
                        {input2Gride('สาขาวิชา :','กรุณากรอกสาขาวิชา' , props.handleOtherSchoolMajor() , 'text' , props.otherSchool_major)}
                    </Grid.Column>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{inputWeigth('เกรดเฉลี่ย :','กรุณากรอกเกรดเฉลี่ย' , props.handleOtherSchoolGrade() , 'text' , props.otherSchool_grade)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{inputHeigth('ปีที่สำเร็จการศึกษา :','กรุณากรอกปีที่สำเร็จการศึกษา' , props.handleOtherSchoolCongrate() , 'text' , props.otherSchool_congrate)}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <br/><br/>
                <MgBTNOrange>
                    {btn_NextBack('ย้อนกลับ', 'ถัดไป' ,'https://www.img.in.th/images/c0dce936813662e607bd5798e68fd712.png' , props.saveThisPageNext() , props.saveThisPagePrev())}
                </MgBTNOrange>
            <br/><br/>
        </Box>
        <Divider hidden />
    </Container>    
)