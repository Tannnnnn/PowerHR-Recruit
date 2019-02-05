import React from 'react'
import { withLayout } from '../../hoc'
import { compose , withProps , withState , withHandlers , lifecycle } from 'recompose'
import styled from 'styled-components'
import { Container , Icon , Divider , Grid  } from 'semantic-ui-react'
import {Breadcrumb3Page} from '../../components/Breadcrumb'
import theme from '../../theme/default'
import { input2Gride , input4GrideMG , input4Gride} from '../../components/Input'
import {btn_NextBack} from '../../components/Button'
import {StepApplyJobSchool} from '../../components/Step'
import Router from 'next/router'

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
    withLayout,
    lifecycle({
        async componentDidMount(){
            window.scrollTo(0, 0)
            if (localStorage.School_page) {
                this.props.setHighSchool_name(JSON.parse(localStorage.getItem('School_page')).highSchool_name)            
                this.props.setHighSchool_country(JSON.parse(localStorage.getItem('School_page')).highSchool_country)            
                this.props.setHighSchool_major(JSON.parse(localStorage.getItem('School_page')).highSchool_major)            
                this.props.setHighSchool_grade(JSON.parse(localStorage.getItem('School_page')).highSchool_grade)            
                this.props.setHighSchool_congrate(JSON.parse(localStorage.getItem('School_page')).highSchool_congrate) 

                this.props.setDiplomaSchool_name(JSON.parse(localStorage.getItem('School_page')).diplomaSchool_name)            
                this.props.setDiplomaSchool_country(JSON.parse(localStorage.getItem('School_page')).diplomaSchool_country)            
                this.props.setDiplomaSchool_major(JSON.parse(localStorage.getItem('School_page')).diplomaSchool_major)            
                this.props.setDiplomaSchool_grade(JSON.parse(localStorage.getItem('School_page')).diplomaSchool_grade)            
                this.props.setDiplomaSchool_congrate(JSON.parse(localStorage.getItem('School_page')).diplomaSchool_congrate) 

                this.props.setBechelorSchool_name(JSON.parse(localStorage.getItem('School_page')).bechelorSchool_name)            
                this.props.setBechelorSchool_country(JSON.parse(localStorage.getItem('School_page')).bechelorSchool_country)            
                this.props.setBechelorSchool_major(JSON.parse(localStorage.getItem('School_page')).bechelorSchool_major)            
                this.props.setBechelorSchool_grade(JSON.parse(localStorage.getItem('School_page')).bechelorSchool_grade)            
                this.props.setBechelorSchool_congrate(JSON.parse(localStorage.getItem('School_page')).bechelorSchool_congrate)  

                this.props.setOtherSchool_name(JSON.parse(localStorage.getItem('School_page')).otherSchool_name)            
                this.props.setOtherSchool_country(JSON.parse(localStorage.getItem('School_page')).otherSchool_country)            
                this.props.setOtherSchool_major(JSON.parse(localStorage.getItem('School_page')).otherSchool_major)            
                this.props.setOtherSchool_grade(JSON.parse(localStorage.getItem('School_page')).otherSchool_grade)            
                this.props.setOtherSchool_congrate(JSON.parse(localStorage.getItem('School_page')).otherSchool_congrate)
            }
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
            props.setHighSchool_grade(event.target.value)
        },
        handleHighSchoolCongrate: props => () => event => {
            props.setHighSchool_congrate(event.target.value)
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
            props.setDiplomaSchool_grade(event.target.value)
        },
        handleDiplomaSchoolCongrate: props => () => event => {
            props.setDiplomaSchool_congrate(event.target.value)
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
            props.setBechelorSchool_grade(event.target.value)
        },
        handleBechelorSchoolCoungrate: props => () => event => {
            props.setBechelorSchool_congrate(event.target.value)
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
            props.setOtherSchool_grade(event.target.value)
        },
        handleOtherSchoolCongrate: props => () => event => {
            props.setOtherSchool_congrate(event.target.value)
        },

        saveThisPageNext: props => () => event => {
            localStorage.setItem('School_page', JSON.stringify({
                'highSchool_name' : props.highSchool_name ,
                'highSchool_country' : props.highSchool_country,
                'highSchool_major' : props.highSchool_major,
                'highSchool_grade' : props.highSchool_grade,
                'highSchool_congrate' : props.highSchool_congrate,
                'diplomaSchool_name' : props.diplomaSchool_name,
                'diplomaSchool_country' : props.diplomaSchool_country,
                'diplomaSchool_major' : props.diplomaSchool_major,
                'diplomaSchool_grade' : props.diplomaSchool_grade,
                'diplomaSchool_congrate' : props.diplomaSchool_congrate,
                'bechelorSchool_name' : props.bechelorSchool_name,
                'bechelorSchool_country' : props.bechelorSchool_country,
                'bechelorSchool_major' : props.bechelorSchool_major,
                'bechelorSchool_grade' : props.bechelorSchool_grade,
                'bechelorSchool_congrate' : props.bechelorSchool_congrate,
                'otherSchool_name' : props.otherSchool_name,
                'otherSchool_country' : props.otherSchool_country,
                'otherSchool_major' : props.otherSchool_major,
                'otherSchool_grade' : props.otherSchool_grade,
                'otherSchool_congrate' : props.otherSchool_congrate,
            }))            
            Router.push({ pathname : '/ApplyJob/Ability_information' , query : { id : props.url.query.id }})
        },
        saveThisPagePrev: props => () => event => {
            localStorage.setItem('School_page', JSON.stringify({
                'highSchool_name' : props.highSchool_name ,
                'highSchool_country' : props.highSchool_country,
                'highSchool_major' : props.highSchool_major,
                'highSchool_grade' : props.highSchool_grade,
                'highSchool_congrate' : props.highSchool_congrate,
                'diplomaSchool_name' : props.diplomaSchool_name,
                'diplomaSchool_country' : props.diplomaSchool_country,
                'diplomaSchool_major' : props.diplomaSchool_major,
                'diplomaSchool_grade' : props.diplomaSchool_grade,
                'diplomaSchool_congrate' : props.diplomaSchool_congrate,
                'bechelorSchool_name' : props.bechelorSchool_name,
                'bechelorSchool_country' : props.bechelorSchool_country,
                'bechelorSchool_major' : props.bechelorSchool_major,
                'bechelorSchool_grade' : props.bechelorSchool_grade,
                'bechelorSchool_congrate' : props.bechelorSchool_congrate,
                'otherSchool_name' : props.otherSchool_name,
                'otherSchool_country' : props.otherSchool_country,
                'otherSchool_major' : props.otherSchool_major,
                'otherSchool_grade' : props.otherSchool_grade,
                'otherSchool_congrate' : props.otherSchool_congrate,
            }))      
            Router.push({ pathname : '/ApplyJob/Address_information' , query : { id : props.url.query.id }})      
        },
    })
)

export default enhance( (props)=> 
    <Container>
        {Breadcrumb3Page('ตำแหน่งเปิดรับ', `รายละเอียดตำแหน่ง ${JSON.parse(localStorage.getItem('Personal_page')).position}` , 'สมัครงาน' , '../index' ,`${props.url.query.id}` )}
        <BoxHead>
            <center><br/><TextBox>สมัครงาน</TextBox></center><br/>
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
                            <WidthWeight>{input4GrideMG('เกรดเฉลี่ย :','กรุณากรอกเกรดเฉลี่ย' , props.handleHighSchoolGrade() , 'text' , props.highSchool_grade)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('ปีที่สำเร็จการศึกษา :','กรุณากรอกปีที่สำเร็จการศึกษา' , props.handleHighSchoolCongrate() , 'text' , props.highSchool_congrate)}</MgGridHeight>
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
                            <WidthWeight>{input4GrideMG('เกรดเฉลี่ย :','กรุณากรอกเกรดเฉลี่ย' , props.handleDiplomaSchoolGrade() , 'text' , props.diplomaSchool_grade)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('ปีที่สำเร็จการศึกษา :','กรุณากรอกปีที่สำเร็จการศึกษา' , props.handleDiplomaSchoolCongrate() , 'text' , props.diplomaSchool_congrate)}</MgGridHeight>
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
                            <WidthWeight>{input4GrideMG('เกรดเฉลี่ย :','กรุณากรอกเกรดเฉลี่ย' , props.handleBechelorSchoolGrade() , 'text' , props.bechelorSchool_grade)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('ปีที่สำเร็จการศึกษา :','กรุณากรอกปีที่สำเร็จการศึกษา' , props.handleBechelorSchoolCoungrate() , 'text' , props.bechelorSchool_congrate)}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <br/><br/>
                <FontInfoMG>ระดับการศึกษา : อื่นๆ</FontInfoMG>
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
                            <WidthWeight>{input4GrideMG('เกรดเฉลี่ย :','กรุณากรอกเกรดเฉลี่ย' , props.handleOtherSchoolGrade() , 'text' , props.otherSchool_grade)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('ปีที่สำเร็จการศึกษา :','กรุณากรอกปีที่สำเร็จการศึกษา' , props.handleOtherSchoolCongrate() , 'text' , props.otherSchool_congrate)}</MgGridHeight>
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