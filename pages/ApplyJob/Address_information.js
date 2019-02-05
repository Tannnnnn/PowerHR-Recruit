import React from 'react'
import { withLayout } from '../../hoc'
import { compose, withProps , withState , withHandlers , lifecycle } from 'recompose'
import styled from 'styled-components'
import { Container , Icon , Divider , Grid , Checkbox } from 'semantic-ui-react'
import {Breadcrumb3Page} from '../../components/Breadcrumb'
import theme from '../../theme/default'
import {
    inputZipcode,input2GrideGrideMG , 
    input2Gride , 
    input4GrideMG , 
    input4Gride ,
    input2GrideOnKeyUp ,
    inputOnkeyup
} from '../../components/Input'
import {btn_NextBack} from '../../components/Button'
import {stepApplyJobAddress} from '../../components/Step'
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

const MgChackbox = styled(Checkbox)`
    margin-left: 14.4% !important;   
    font-size: 18px !important;                                                         
`;

const MgBTNOrange = styled.div`
    margin-left: 70%;
`;

const enhance = compose(
    withState('primary_hno' , 'setPrimary_hno'),
    withState('primary_vilno' , 'setPrimary_vilno'),
    withState('primary_alley' , 'setPrimary_alley'),
    withState('primary_road' , 'setPrimary_road'),
    withState('primary_area' , 'setPrimary_area'),
    withState('primary_district' , 'setPrimary_district'),
    withState('primary_province' , 'setPrimary_province'),
    withState('primary_zipcode' , 'setPrimary_zipcode'),
    withState('primary_tel' , 'setPrimary_tel'),
    withState('primary_phone' , 'setPrimary_phone'),
    withState('checkAddress' , 'setCheckAddress' , false),
    withState('present_hno' , 'setPresent_hno'),
    withState('present_vilno' , 'setPresent_vilno'),
    withState('present_alley' , 'setPresent_alley'),
    withState('present_road' , 'setPresent_road'),
    withState('present_area' , 'setPresent_area'),
    withState('present_district' , 'setPresent_district'),
    withState('present_province' , 'setPresent_province'),
    withState('present_zipcode' , 'setPresent_zipcode'),
    withState('present_tel' , 'setPresent_tel'),
    withState('present_phone' , 'setPresent_phone'),
    withState('position_name' , 'setPosition_name' , ''),
    withProps({
        pageTitle: 'Address information'
    }),
    withLayout,
    lifecycle({
        async componentDidMount(){
            window.scrollTo(0, 0)
            if (localStorage.Address_page) {
                this.props.setPrimary_hno(JSON.parse(localStorage.getItem('Address_page')).primary_hno)
                this.props.setPrimary_vilno(JSON.parse(localStorage.getItem('Address_page')).primary_vilno)
                this.props.setPrimary_alley(JSON.parse(localStorage.getItem('Address_page')).primary_alley)
                this.props.setPrimary_road(JSON.parse(localStorage.getItem('Address_page')).primary_road)
                this.props.setPrimary_area(JSON.parse(localStorage.getItem('Address_page')).primary_area)
                this.props.setPrimary_district(JSON.parse(localStorage.getItem('Address_page')).primary_district)
                this.props.setPrimary_province(JSON.parse(localStorage.getItem('Address_page')).primary_province)
                this.props.setPrimary_zipcode(JSON.parse(localStorage.getItem('Address_page')).primary_zipcode)
                this.props.setPrimary_tel(JSON.parse(localStorage.getItem('Address_page')).primary_tel)
                this.props.setPrimary_phone(JSON.parse(localStorage.getItem('Address_page')).primary_phone)
                this.props.setCheckAddress(JSON.parse(localStorage.getItem('Address_page')).checkAddress)
                this.props.setPresent_hno(JSON.parse(localStorage.getItem('Address_page')).present_hno)
                this.props.setPresent_vilno(JSON.parse(localStorage.getItem('Address_page')).present_vilno)
                this.props.setPresent_alley(JSON.parse(localStorage.getItem('Address_page')).present_alley)  
                this.props.setPresent_road(JSON.parse(localStorage.getItem('Address_page')).present_road)      
                this.props.setPresent_area(JSON.parse(localStorage.getItem('Address_page')).present_area)      
                this.props.setPresent_district(JSON.parse(localStorage.getItem('Address_page')).present_district)     
                this.props.setPresent_province(JSON.parse(localStorage.getItem('Address_page')).present_province)      
                this.props.setPresent_zipcode(JSON.parse(localStorage.getItem('Address_page')).present_zipcode)      
                this.props.setPresent_tel(JSON.parse(localStorage.getItem('Address_page')).present_tel)      
                this.props.setPresent_phone(JSON.parse(localStorage.getItem('Address_page')).present_phone)       
            }
            if (localStorage) {
                this.props.setPosition_name(JSON.parse(localStorage.getItem('Personal_page')).position)
            }
        }
    }),
    withHandlers({
        handlePrimaryHouseNumber: props => () => event => {
            props.setPrimary_hno(event.target.value)
            if (props.checkAddress === true) {
                props.setPresent_hno(event.target.value)
            }
        },
        handlePrimaryVillageNumber: props => () => event => {
            props.setPrimary_vilno(event.target.value)
            if (props.checkAddress === true) {
                props.setPresent_vilno(event.target.value)
            }
        },
        handlePrimaryAlley: props => () => event => {
            props.setPrimary_alley(event.target.value)
            if (props.checkAddress === true) {
                props.setPresent_alley(event.target.value)
            }
        },
        handlePrimaryRoad: props => () => event => {
            props.setPrimary_road(event.target.value)
            if (props.checkAddress === true) {
                props.setPresent_road(event.target.value)
            }
        },
        handlePrimaryArea: props => () => event => {
            props.setPrimary_area(event.target.value)
            if (props.checkAddress === true) {
                props.setPresent_area(event.target.value)
            }
        },
        handlePrimaryDistrict: props => () => event => {
            props.setPrimary_district(event.target.value)
            if (props.checkAddress === true) {
                props.setPresent_district(event.target.value)
            }
        },
        handlePrimaryProvince: props => () => event => {
            props.setPrimary_province(event.target.value)
            if (props.checkAddress === true) {
                props.setPresent_province(event.target.value)
            }
        },
        handlePrimaryZipcode: props => () => event => {
            let stack = props.primary_zipcode
            if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8) { 
                if (event.target.value.length > 5) {
                    event.target.value = stack
                }
                else{
                    props.setPrimary_zipcode(event.target.value)
                    if (props.checkAddress === true) {
                        props.setPresent_zipcode(event.target.value)
                    }
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
        handlePrimaryTelephone: props => () => event => {
            let stack = props.primary_tel    
            if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8) { 
                if (event.target.value.length > 9) {
                    event.target.value = stack
                }
                else{
                    props.setPrimary_tel(event.target.value)
                    if (props.checkAddress === true) {
                        props.setPresent_tel(event.target.value)
                    }
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
        handlePrimaryPhone: props => () => event => {
            let stack = props.primary_phone    
            if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8) { 
                if (event.target.value.length > 10) {
                    event.target.value = stack
                }
                else{
                    props.setPrimary_phone(event.target.value)
                    if (props.checkAddress === true) {
                        props.setPresent_phone(event.target.value)
                    }
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
        handlePrimaryCheckAddress: props => () => event => {
            let { checkAddress } = props
            if (checkAddress === false) {
                props.setCheckAddress(true)
                props.setPresent_hno(props.primary_hno)
                props.setPresent_vilno(props.primary_vilno)
                props.setPresent_alley(props.primary_alley)
                props.setPresent_road(props.primary_road)
                props.setPresent_area(props.primary_area)
                props.setPresent_district(props.primary_district)
                props.setPresent_province(props.primary_province)
                props.setPresent_zipcode(props.primary_zipcode)
                props.setPresent_tel(props.primary_tel)
                props.setPresent_phone(props.primary_phone)
            }
            else{
                props.setCheckAddress(false)
                props.setPresent_hno(null)
                props.setPresent_vilno(null)
                props.setPresent_alley(null)
                props.setPresent_road(null)
                props.setPresent_area(null)
                props.setPresent_district(null)
                props.setPresent_province(null)
                props.setPresent_zipcode(null)
                props.setPresent_tel(null)
                props.setPresent_phone(null)
            }
        },
        handlePresentHouseNumber: props => () => event => {
            props.setPresent_hno(event.target.value)
            if (props.checkAddress === true) {
                props.setPrimary_hno(event.target.value)
            }
        },
        handlePresentVillageNumber: props => () => event => {
            props.setPresent_vilno(event.target.value)
            if (props.checkAddress === true) {
                props.setPrimary_vilno(event.target.value)
            }
        },
        handlePresentAlley: props => () => event => {
            props.setPresent_alley(event.target.value)
            if (props.checkAddress === true) {
                props.setPrimary_alley(event.target.value)
            }
        },
        handlePresentRoad: props => () => event => {
            props.setPresent_road(event.target.value)
            if (props.checkAddress === true) {
                props.setPrimary_road(event.target.value)
            }
        },
        handlePresentArea: props => () => event => {
            props.setPresent_area(event.target.value)
            if (props.checkAddress === true) {
                props.setPrimary_area(event.target.value)
            }
        },
        handlePresentDistrict: props => () => event => {
            props.setPresent_district(event.target.value)
            if (props.checkAddress === true) {
                props.setPrimary_district(event.target.value)
            }
        },
        handlePresentProvince: props => () => event => {
            props.setPresent_province(event.target.value)
            if (props.checkAddress === true) {
                props.setPrimary_province(event.target.value)
            }
        },
        handlePresentZipcode: props => () => event => {
            let stack = props.present_zipcode
            if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8) {                 
                if (event.target.value.length > 5) {
                    event.target.value = stack
                }
                else{
                    props.setPresent_zipcode(event.target.value)
                    if (props.checkAddress === true) {
                        props.setPrimary_zipcode(event.target.value)
                    }
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
        handlePresentTelephone: props => () => event => {
            let stack = props.present_tel
            if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8) { 
                if (event.target.value.length > 9) {
                    event.target.value = stack
                }
                else{
                    props.setPresent_tel(event.target.value)
                    if (props.checkAddress === true) {
                        props.setPrimary_tel(event.target.value)
                    }
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
        handlePresentPhone: props => () => event => {
            let stack = props.present_phone
            if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8) { 
                if (event.target.value.length > 9) {
                    event.target.value = stack
                }
                else{
                    props.setPresent_phone(event.target.value)
                    if (props.checkAddress === true) {
                        props.setPrimary_phone(event.target.value)
                    }
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
            localStorage.setItem('Address_page', JSON.stringify({
                'primary_hno' : props.primary_hno ,
                'primary_vilno' : props.primary_vilno,
                'primary_alley' : props.primary_alley,
                'primary_road' : props.primary_road,
                'primary_area' : props.primary_area,
                'primary_district' : props.primary_district,
                'primary_province' : props.primary_province,
                'primary_zipcode' : props.primary_zipcode,
                'primary_tel' : props.primary_tel,
                'primary_phone' : props.primary_phone,
                'checkAddress' : props.checkAddress,
                'present_hno' : props.present_hno,
                'present_vilno' : props.present_vilno,
                'present_alley' : props.present_alley,
                'present_road' : props.present_road,
                'present_area' : props.present_area,
                'present_district' : props.present_district,
                'present_province' : props.present_province,
                'present_zipcode' : props.present_zipcode,
                'present_tel' : props.present_tel,
                'present_phone' : props.present_phone
            }))
            const checkInputData = Object.getOwnPropertyNames(JSON.parse(localStorage.getItem('Address_page')));            
            if (
                checkInputData.length < 20 ||
                props.primary_zipcode.length !== 5 && props.present_zipcode.length !== 5 ||
                props.primary_tel.length !== 9 && props.present_tel.length !== 9 ||
                props.primary_phone.length !== 10 && props.primary_phone !== 10
            ) {
                window.alert('คุณกรอกข้อมูลไม่ถูกต้อง หรือ ไม่ครบถ้วน \nกรุณากรอกข้อมูลใหม่อีกครั้ง !!!')
            }
            else{
                Router.push({ pathname : '/ApplyJob/School_information' , query : { id : props.url.query.id }})
            }
        },
        saveThisPagePrev: props => () => event => {
            localStorage.setItem('Address_page', JSON.stringify({
                'primary_hno' : props.primary_hno ,
                'primary_vilno' : props.primary_vilno,
                'primary_alley' : props.primary_alley,
                'primary_road' : props.primary_road,
                'primary_area' : props.primary_area,
                'primary_district' : props.primary_district,
                'primary_province' : props.primary_province,
                'primary_zipcode' : props.primary_zipcode,
                'primary_tel' : props.primary_tel,
                'primary_phone' : props.primary_phone,
                'checkAddress' : props.checkAddress,
                'present_hno' : props.present_hno,
                'present_vilno' : props.present_vilno,
                'present_alley' : props.present_alley,
                'present_road' : props.present_road,
                'present_area' : props.present_area,
                'present_district' : props.present_district,
                'present_province' : props.present_province,
                'present_zipcode' : props.present_zipcode,
                'present_tel' : props.present_tel,
                'present_phone' : props.present_phone
            }))            
            Router.push({ pathname : '/ApplyJob/Personal_information' , query : { id : props.url.query.id }})
        },
    })
)

export default enhance( (props)=> 
    <Container>
        {Breadcrumb3Page('ตำแหน่งเปิดรับ', `รายละเอียดตำแหน่ง ${props.position_name}` , 'สมัครงาน' , '../index' ,`${props.url.query.id}` )}
        <BoxHead>
            <center><br/><TextBox>สมัครงาน</TextBox></center><br/>
        </BoxHead>
        <BoxHead2/>
        <Box>
            <br/>
                {stepApplyJobAddress('ข้อมูลส่วนบุคคล','ที่อยู่ผู้สมัคร','ประวัติการศึกษา','ความสามรถพิเศษ','ประสบการณ์ทำงาน')}
            <br/>
            <center>
                <FontInfo>ที่อยู่ของผู้สมัคร</FontInfo>
                <MgIcon name='window minimize outline' size='big'/>
            </center>
            <br/>
                <FontInfoMG>ที่อยู่ตามทะเบียนบ้าน</FontInfoMG>
            <br/>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input4GrideMG('บ้านเลขที่ :','กรุณากรอกบ้านเลขที่', props.handlePrimaryHouseNumber() , 'text' , props.primary_hno)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('หมู่ที่ :','กรุณากรอกหมู่' , props.handlePrimaryVillageNumber() , 'text' , props.primary_vilno)}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input2Gride('ซอย :','กรุณากรอกซอย' , props.handlePrimaryAlley() , 'text' , props.primary_alley)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <Mg4Gridnationality>{input2Gride('ถนน :','กรุณากรอกถนน' , props.handlePrimaryRoad() , 'text' , props.primary_road)}</Mg4Gridnationality>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input4GrideMG('ตำบล/แขวง :','กรุณากรอกตำบล/แขวง' , props.handlePrimaryArea() , 'text' , props.primary_area)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('อำเภอ/เขต :','กรุณากรอกอำเภอ/เขต' , props.handlePrimaryDistrict() , 'text' , props.primary_district)}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input2Gride('จังหวัด :','กรุณากรอกจังหวัด' , props.handlePrimaryProvince() , 'text' , props.primary_province)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <Mg4Gridnationality>{inputZipcode('รหัสไปรษณี :','กรุณากรอกรหัสไปรษณี' , props.handlePrimaryZipcode() , 'text' , props.primary_zipcode)}</Mg4Gridnationality>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{inputOnkeyup('เบอร์โทรศัพท์บ้าน :','กรุณากรอกเบอร์โทรศัพท์บ้าน' , props.handlePrimaryTelephone() , 'text' , props.primary_tel)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2GrideOnKeyUp('เบอร์มือถือ :','กรุณากรอกเบอร์มือถือ' , props.handlePrimaryPhone() , 'text' , props.primary_phone)}
                </Grid.Column>
            </Grid>
            <br/><br/>
                <FontInfoMG>ที่อยู่ปัจจุบัน</FontInfoMG>
            <br/>
            <MgChackbox label='ที่อยู่เดียวกับที่อยู่ทะเบียนบ้าน' onChange={props.handlePrimaryCheckAddress()} checked={props.checkAddress}/>
            <br/><br/><br/>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input4GrideMG('บ้านเลขที่ :','กรุณากรอกบ้านเลขที่' , props.handlePresentHouseNumber() , 'text' , props.present_hno)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('หมู่ที่ :','กรุณากรอกหมู่' , props.handlePresentVillageNumber() , 'text' , props.present_vilno)}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input2Gride('ซอย :','กรุณากรอกซอย' , props.handlePresentAlley() , 'text' , props.present_alley )}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <Mg4Gridnationality>{input2Gride('ถนน :','กรุณากรอกถนน' , props.handlePresentRoad() , 'text' , props.present_road)}</Mg4Gridnationality>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input4GrideMG('ตำบล/แขวง :','กรุณากรอกตำบล/แขวง' , props.handlePresentArea() , 'text' , props.present_area)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('อำเภอ/เขต :','กรุณากรอกอำเภอ/เขต' , props.handlePresentDistrict() , 'text' , props.present_district)}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid columns={2}>
                    <Grid.Column>
                            <WidthWeight>{input2Gride('จังหวัด :','กรุณากรอกจังหวัด' , props.handlePresentProvince() , 'text' , props.present_province)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <Mg4Gridnationality>{input2Gride('รหัสไปรษณี :','กรุณากรอกรหัสไปรษณี' , props.handlePresentZipcode() , 'text' , props.present_zipcode)}</Mg4Gridnationality>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{inputOnkeyup('เบอร์โทรศัพท์บ้าน :','กรุณากรอกเบอร์โทรศัพท์บ้าน' , props.handlePresentTelephone() , 'text' , props.present_tel)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2GrideOnKeyUp('เบอร์มือถือ :','กรุณากรอกเบอร์มือถือ' , props.handlePresentPhone() , 'text' , props.present_phone)}
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