import React from 'react'
import { withLayout } from '../../hoc'
import { compose, withProps , withState , withHandlers, lifecycle } from 'recompose'
import styled from 'styled-components'
import { Container , Icon , Divider , Grid , Checkbox , Button , Header , Label , Modal , Image } from 'semantic-ui-react'
import { Breadcrumb3Page } from '../../components/Breadcrumb'
import theme from '../../theme/default'
import { input2GrideGrideMG , input2Gride , InputTextArea , InputTextAreaMini } from '../../components/Input'
import { StepApplyJobTask } from '../../components/Step'
import Link from 'next/link'
import Router from 'next/router'
import Images from '../../static/vendor/Images/ImageDataUrl'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.fonts = {
    Kanit: {
      normal: 'Kanit-Light.ttf',
      bold: 'Kanit-Bold.ttf',
      italics: 'Kanit-Italic.ttf',
      bolditalics: 'Kanit-BoldItalic.ttf'
    },
    Roboto: {
      normal: 'Roboto-Regular.ttf',
      bold: 'Roboto-Medium.ttf',
      italics: 'Roboto-Italic.ttf',
      bolditalics: 'Roboto-MediumItalic.ttf'
    }
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

const FontInfo = styled.p`
    font-size: 20px;
    color: ${theme.colors.orange} !important;
`;

const MgIcon = styled(Icon)`
    margin-top: -4% !important;
    color: ${theme.colors.orange} !important;
`;

const MgIconBlack = styled(Icon)`
    margin-top: -4% !important;
    color: ${theme.colors.fontBlack} !important;
`;

const MgGridLeft = styled.div`
    margin-left: 28% !important;
`;

const MgBTNOrange = styled.div`
    margin-left: 63%;
`;

const MgTextArea = styled.div`
    margin-left: 14.5% !important;
    margin-top: 2%;
    width: 72%;
`;

const TextSort = styled.p`
    font-size: 18px;
    color: ${theme.colors.gray} !important;
    margin-left: 14.5% !important;
`;

const BoxGray = styled.div`
    background-color: ${theme.colors.Boxgray} !important;
    width: 82%;
    height: auto;
    margin-left: 9%;
`;

const MgChackbox = styled(Checkbox)`
    margin-top: 2%;
    margin-bottom: 2%;
    margin-right: 2%;
    margin-left: 4% !important;   
    font-size: 16px !important;  
    font-weight: 500;        
    line-height: 1.5;                                              
`;

const BtnBack = styled(Button)`
    box-shadow: 0 0 0px 1px #ee3900 !important;
    font-family : 'Kanit', sans-serif !important;
    background : #ee3900 !important;
    color : #fff !important;
    font-weight: 500 !important;
    height: 46px;
    width: 30%;
`;

const BtnSuccess = styled(Button)`
    box-shadow: 0 0 0px 1px #ee3900 !important;
    font-family : 'Kanit', sans-serif !important;
    background : #ee3900 !important;
    color : #fff !important;
    font-weight: 500 !important;
`;

const Colorlabel = styled(Label)`
    box-shadow: 0 0 0px 1px #ee3900 !important;
    background : #ee3900 !important;
    color : #fff !important;
`;

const TextModelTaskSuccess = styled.p`
    font-size: 18px;
    margin-top: 2%;
`;

const ButtonClick = styled(Button)`
    font-family : 'Kanit', sans-serif !important;
    font-size: 18px !important;
`;

const enhance = compose(
    withState('current_work' , 'setCurrent_work'),
    withState('current_position' , 'setCurrent_position'),
    withState('current_description' , 'setCurrent_description'),
    withState('current_startwork' , 'setCurrent_startwork'),
    withState('current_endwork' , 'setCurrent_endwork'),
    withState('current_final_salary' , 'setCurrent_final_salary'),
    withState('current_other_income' , 'setCurrent_other_income'),
    withState('current_net_income' , 'setCurrent_net_income'),
    withState('current_welfare' , 'setCurrent_welfare'),
    withState('current_resign' , 'setCurrent_resign'),
    withState('old_work' , 'setOld_work'),
    withState('old_position' , 'setOld_position'),
    withState('old_final_salary' , 'setOld_final_salary'),
    withState('old_startwork' , 'setOld_startwork'),
    withState('old_endwork' , 'setOld_endwork'),
    withState('old_resign' , 'setOld_resign'),
    withState('older_work' , 'setOlder_work'),
    withState('older_position' , 'setOlder_position'),
    withState('older_final_salary' , 'setOlder_final_salary'),
    withState('older_startwork' , 'setOlder_startwork'),
    withState('older_endwork' , 'setOlder_endwork'),
    withState('older_resign' , 'setOlder_resign'),
    withState('checkAccept' , 'setCheckAccept' , false),

    withProps({
        pageTitle: 'Task information'
    }),
    withLayout,
    lifecycle({
        async componentDidMount(){
            window.scrollTo(0, 0)
            if (localStorage.Task_page) {
                this.props.setCurrent_work(JSON.parse(localStorage.getItem('Task_page')).current_work)            
                this.props.setCurrent_position(JSON.parse(localStorage.getItem('Task_page')).current_position)
                this.props.setCurrent_description(JSON.parse(localStorage.getItem('Task_page')).current_description)
                this.props.setCurrent_startwork(JSON.parse(localStorage.getItem('Task_page')).current_startwork)
                this.props.setCurrent_endwork(JSON.parse(localStorage.getItem('Task_page')).current_endwork)
                this.props.setCurrent_final_salary(JSON.parse(localStorage.getItem('Task_page')).current_final_salary)
                this.props.setCurrent_other_income(JSON.parse(localStorage.getItem('Task_page')).current_other_income)
                this.props.setCurrent_net_income(JSON.parse(localStorage.getItem('Task_page')).current_net_income)
                this.props.setCurrent_welfare(JSON.parse(localStorage.getItem('Task_page')).current_welfare)
                this.props.setCurrent_resign(JSON.parse(localStorage.getItem('Task_page')).current_resign)
                this.props.setOld_work(JSON.parse(localStorage.getItem('Task_page')).old_work)
                this.props.setOld_position(JSON.parse(localStorage.getItem('Task_page')).old_position)
                this.props.setOld_final_salary(JSON.parse(localStorage.getItem('Task_page')).old_final_salary)
                this.props.setOld_startwork(JSON.parse(localStorage.getItem('Task_page')).old_startwork)
                this.props.setOld_endwork(JSON.parse(localStorage.getItem('Task_page')).old_endwork)
                this.props.setOld_resign(JSON.parse(localStorage.getItem('Task_page')).old_resign)
                this.props.setOlder_work(JSON.parse(localStorage.getItem('Task_page')).older_work)
                this.props.setOlder_position(JSON.parse(localStorage.getItem('Task_page')).older_position)
                this.props.setOlder_final_salary(JSON.parse(localStorage.getItem('Task_page')).older_final_salary)
                this.props.setOlder_startwork(JSON.parse(localStorage.getItem('Task_page')).older_startwork)
                this.props.setOlder_endwork(JSON.parse(localStorage.getItem('Task_page')).older_endwork)
                this.props.setOlder_resign(JSON.parse(localStorage.getItem('Task_page')).older_resign)
                this.props.setCheckAccept(JSON.parse(localStorage.getItem('Task_page')).checkAccept)
            } 
        }
    }),
    withHandlers({
        handleCurrentWork: props => () => event => {
            props.setCurrent_work(event.target.value)
        },
        handleCurrentPosition: props => () => event => {
            props.setCurrent_position(event.target.value)
        },
        handleCurrentDescription: props => () => event => {
            props.setCurrent_description(event.target.value)
        },
        handleCurrentStartwork: props => () => event => {
            props.setCurrent_startwork(event.target.value)
        },
        handleCurrentEndwork: props => () => event => {            
            props.setCurrent_endwork(event.target.value)
        },
        handleCurrentFinalSalary: props => () => event => {
            props.setCurrent_final_salary(event.target.value)
        },
        handleCurrentOtherIncome: props => () => event => {
            props.setCurrent_other_income(event.target.value)
        },
        handleCurrentNetIncome: props => () => event => {
            props.setCurrent_net_income(event.target.value)
        },
        handleCurrentWelfare: props => () => event => {
            props.setCurrent_welfare(event.target.value)
        },
        handleCurrentResign: props => () => event => {
            props.setCurrent_resign(event.target.value)
        },
        handleOldWork: props => () => event => {
            props.setOld_work(event.target.value)
        },
        handleOldPosition: props => () => event => {
            props.setOld_position(event.target.value)
        },
        handleOldFinalSalary: props => () => event => {
            props.setOld_final_salary(event.target.value)
        },
        handleOldStartwork: props => () => event => {
            props.setOld_startwork(event.target.value)
        },
        handleOldEndwork: props => () => event => {
            props.setOld_endwork(event.target.value)
        },
        handleOldResign: props => () => event => {
            props.setOld_resign(event.target.value)
        },
        handleOlderWork: props => () => event => {
            props.setOlder_work(event.target.value)
        },
        handleOlderPosition: props => () => event => {
            props.setOlder_position(event.target.value)
        },
        handleOlderFinalSalary: props => () => event => {
            props.setOlder_final_salary(event.target.value)
        },
        handleOlderStartwork: props => () => event => {
            props.setOlder_startwork(event.target.value)
        },
        handleOlderEndwork: props => () => event => {
            props.setOlder_endwork(event.target.value)
        },
        handleOlderResign: props => () => event => {
            props.setOlder_resign(event.target.value)
        },
        handleChangTimeToThai : props => (localTime) =>{     
            if (localTime !== undefined) {
                const dateTime = localTime.split('-')           
                const years = parseInt(dateTime[0])
                const month = parseInt(dateTime[1]) 
                const days  = parseInt(dateTime[2])                  
                let localDate = new Date(Date.UTC(years , month-1 , days));
                let options = { year: 'numeric', month: 'long', day: 'numeric' };
                return localDate.toLocaleDateString('th-TH', options)
            }
            else{
                return '-'
            }
        },
        saveThisPageNext: props => (setTimeLocal) => event => {                       
            localStorage.setItem('Task_page', JSON.stringify({
                'current_work' : props.current_work ,
                'current_position' : props.current_position,
                'current_description' : props.current_description,
                'current_startwork' : props.current_startwork,
                'current_endwork' : props.current_endwork,
                'current_final_salary' : props.current_final_salary,
                'current_other_income' : props.current_other_income,
                'current_net_income' : props.current_net_income,
                'current_welfare' : props.current_welfare,
                'current_resign' : props.current_resign,
                'old_work' : props.old_work,
                'old_position' : props.old_position,
                'old_final_salary' : props.old_final_salary,
                'old_startwork' : props.old_startwork,
                'old_endwork' : props.old_endwork,
                'old_resign' : props.old_resign,
                'older_work' : props.older_work,
                'older_position' : props.older_position,
                'older_final_salary' : props.older_final_salary,
                'older_startwork' : props.older_startwork,
                'older_endwork' : props.older_endwork,
                'older_resign' : props.older_resign,
                'checkAccept' : props.checkAccept,
            }))             

            //set Data Status For PDF
            const local_status = JSON.parse(localStorage.getItem('Personal_page')).status
            let married_fname = '-'
            let married_lname = '-'
            let married_child = '-'
            let married_company = '-'
            if (local_status === 'สมรส') {
                married_fname = JSON.parse(localStorage.getItem('Personal_page')).status_married_fname
                married_lname = JSON.parse(localStorage.getItem('Personal_page')).status_married_lname
                married_child = JSON.parse(localStorage.getItem('Personal_page')).status_married_child
                married_company = JSON.parse(localStorage.getItem('Personal_page')).status_married_company
            }
            
            //Date Now
            let today = new Date()
            let days = today.getDate()
            let month = today.getMonth()
            let years = today.getFullYear()
            let localDate = new Date(Date.UTC(years , month , days));
            let options = { year: 'numeric', month: 'long', day: 'numeric' };

            //Create PDF
            var docDefinition = {
                info: {
                    title: `Cupcode Recruitment : ${props.url.query.position}`,
                    author: `${props.url.query.position}`,
                    subject: `Recruitment ${props.url.query.position}`,
                    keywords: 'Cupcode Recruitment',
                },
                content: [
                    {
                        image : `${Images.Cupcode}`,
                        width: 110,
                        height: 50,
                        margin: [-30, -35 , 0 , 0],
                    },
                    {
                        text : 'บริษัท คัพโค้ด จำกัด (สำนักงานใหญ่)',
                        margin: [ 90, -45 , 0 , 0],
                        style: 'header'
                    },
                    {
                        text : 'ทาวน์อินทาวน์ ซอย 11 แขวง พลับพลา เขต วังทองหลาง กรุงเทพมหานคร 10312',
                        margin: [ 90 ,  0 , 0 , 0],
                        style: 'header'
                    },
                    {
                        text : 'ติดต่อสอบถาม : oraphan@cupcodeteam.com',
                        margin: [ 90 ,  0 , 0 , 0],
                        style: 'header'
                    },
                    {
                        canvas: [
                            { 
                                type: 'line', 
                                x1: -20, 
                                y1: 9, 
                                x2: 595-2*30, 
                                y2: 9, 
                                lineWidth: 1 ,
                                lineColor  : '#363636'
                            }
                        ]
                    },
                    {
                        text : 'ใบสมัครงาน',
                        margin: [ 0 , 15 , 0 , 0],
                        fontSize: 16,
                        alignment: 'center'
                    },
                    {
                        text : `ตำแหน่งงานที่สมัคร  :  ${props.url.query.position}      เงินเดือนที่ต้องการ  :  ${JSON.parse(localStorage.getItem('Personal_page')).salary}  บาท`,
                        margin: [ -20 , 25 , 0 , 0],
                        fontSize: 12,
                    },
                    {
                        image : `${Images.Profile}`,
                        width: 85,
                        height: 100,
                        margin: [ 450 , -63 , 0 , 0 ],
                    },
                    {
                        text : `1.  ชื่อ (ภาษาไทย)  :  ${JSON.parse(localStorage.getItem('Personal_page')).fname_thai} ${JSON.parse(localStorage.getItem('Personal_page')).lname_thai}    name (English)  :  ${JSON.parse(localStorage.getItem('Personal_page')).fname_eng} ${JSON.parse(localStorage.getItem('Personal_page')).lname_eng}     เพศ  :  ${JSON.parse(localStorage.getItem('Personal_page')).sex}
                        รหัสบัตรประชาชน : ${JSON.parse(localStorage.getItem('Personal_page')).idcard}    อีเมล : ${JSON.parse(localStorage.getItem('Personal_page')).email}    Facebook : ${JSON.parse(localStorage.getItem('Personal_page')).facebook}    ศาสนา : ${JSON.parse(localStorage.getItem('Personal_page')).religion}`,
                        margin: [ -20 , -10 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `2.  ที่อยู่ตามทะเบียนบ้าน  เลขที่ : ${JSON.parse(localStorage.getItem('Address_page')).primary_hno}    หมู่ที่ : ${JSON.parse(localStorage.getItem('Address_page')).primary_vilno}    ซอย : ${JSON.parse(localStorage.getItem('Address_page')).primary_alley}    ถนน : ${JSON.parse(localStorage.getItem('Address_page')).primary_road}    ตำบล/แขวง : ${JSON.parse(localStorage.getItem('Address_page')).primary_area}    อำเภอ/เขต : ${JSON.parse(localStorage.getItem('Address_page')).primary_district}     จังหวัด : ${JSON.parse(localStorage.getItem('Address_page')).primary_province}     รหัสไปรษณีย์ : ${JSON.parse(localStorage.getItem('Address_page')).primary_zipcode}     โทรศัพท์บ้าน : ${JSON.parse(localStorage.getItem('Address_page')).primary_tel}     มือถือ : ${JSON.parse(localStorage.getItem('Address_page')).primary_phone}`,
                        margin: [ -20 , 15 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `3.  ที่อยู่ปัจจุบันที่ติดต่อได้  เลขที่ : ${JSON.parse(localStorage.getItem('Address_page')).present_hno}    หมู่ที่ : ${JSON.parse(localStorage.getItem('Address_page')).present_vilno}    ซอย : ${JSON.parse(localStorage.getItem('Address_page')).present_alley}    ถนน : ${JSON.parse(localStorage.getItem('Address_page')).present_road}    ตำบล/แขวง : ${JSON.parse(localStorage.getItem('Address_page')).present_area}    อำเภอ/เขต : ${JSON.parse(localStorage.getItem('Address_page')).present_district}     จังหวัด : ${JSON.parse(localStorage.getItem('Address_page')).present_province}     รหัสไปรษณีย์ : ${JSON.parse(localStorage.getItem('Address_page')).present_zipcode}     โทรศัพท์บ้าน : ${JSON.parse(localStorage.getItem('Address_page')).present_tel}     มือถือ : ${JSON.parse(localStorage.getItem('Address_page')).present_phone}`,
                        margin: [ -20 , 15 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `4.  วัน/เดือน/ปีเกิด : ${setTimeLocal(JSON.parse(localStorage.getItem('Personal_page')).birthday)}    อายุ : ${JSON.parse(localStorage.getItem('Personal_page')).age} ปี    น้ำหนัก : ${JSON.parse(localStorage.getItem('Personal_page')).weight} กก.    ส่วนสูง : ${JSON.parse(localStorage.getItem('Personal_page')).height} ซม.    เชื้อชาติ : ${JSON.parse(localStorage.getItem('Personal_page')).ethnicity}    สัญชาติ : ${JSON.parse(localStorage.getItem('Personal_page')).nationality}`,
                        margin: [ -20 , 15 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `5.  ชื่อบิดา : ${JSON.parse(localStorage.getItem('Personal_page')).dad_name}    อาชีพ : ${JSON.parse(localStorage.getItem('Personal_page')).dad_career}    ชื่อมารดา : ${JSON.parse(localStorage.getItem('Personal_page')).mom_name}    อาชีพ : ${JSON.parse(localStorage.getItem('Personal_page')).mom_career}     จำนวนพี่น้อง : ${JSON.parse(localStorage.getItem('Personal_page')).brethren} คน     คุณเป็นลูกคนที่ : ${JSON.parse(localStorage.getItem('Personal_page')).sequence}`,
                        margin: [ -20 , 15 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `6.  สภานภาพการสมรส  :  ${local_status}    ชื่อคู่สมรส  :  ${married_fname}     นามสกุลเดิม  :  ${married_lname}     จำนวนบุตร  :  ${married_child}  คน     สถานที่ทำงาน (คู่สมรส)  :  ${married_company}`,
                        margin: [ -20 , 15 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `7. การรับราชการทหาร  :  ${JSON.parse(localStorage.getItem('Personal_page')).soldier}`,
                        margin: [ -20 , 15 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `8. ประวัติการศึกษา`,
                        margin: [ -20 , 15 , 0 , 0],
                        style : 'content'
                    },
                    {
                        table: {
                            widths: [ 90 , '*' , 60 , 40 , '*' , 65 ],
                            body: [
                                [{text : 'ระดับการศึกษา' , alignment: 'center'}, {text : 'ชื่อสถานศึกษา' , alignment: 'center'} , {text : 'ประเทศ' , alignment: 'center'} , {text : 'เกรดเฉลี่ย' , alignment: 'center'} , {text :  'สาขาวิชา' , alignment: 'center'} , {text : 'ปีที่สำเร็จการศึกษา' , alignment: 'center'}],
                                ['มัธยมศึกษาตอนปลาย/ปวช.' , `${JSON.parse(localStorage.getItem('School_page')).highSchool_name}` , `${JSON.parse(localStorage.getItem('School_page')).highSchool_country}` , `${JSON.parse(localStorage.getItem('School_page')).highSchool_grade}` , `${JSON.parse(localStorage.getItem('School_page')).highSchool_major}` , `${JSON.parse(localStorage.getItem('School_page')).highSchool_congrate}`],
                                ['ปวส./ปวท./อนุปริญญา' , `${JSON.parse(localStorage.getItem('School_page')).diplomaSchool_name}` , `${JSON.parse(localStorage.getItem('School_page')).diplomaSchool_country}` , `${JSON.parse(localStorage.getItem('School_page')).diplomaSchool_grade}` , `${JSON.parse(localStorage.getItem('School_page')).diplomaSchool_major}` , `${JSON.parse(localStorage.getItem('School_page')).diplomaSchool_congrate}`],
                                ['ปริญญาตรี' , `${JSON.parse(localStorage.getItem('School_page')).bechelorSchool_name}` , `${JSON.parse(localStorage.getItem('School_page')).bechelorSchool_country}` , `${JSON.parse(localStorage.getItem('School_page')).bechelorSchool_grade}` , `${JSON.parse(localStorage.getItem('School_page')).bechelorSchool_major}` , `${JSON.parse(localStorage.getItem('School_page')).bechelorSchool_congrate}`],
                                ['อื่นๆ' , `${JSON.parse(localStorage.getItem('School_page')).otherSchool_name}` , `${JSON.parse(localStorage.getItem('School_page')).otherSchool_country}` , `${JSON.parse(localStorage.getItem('School_page')).otherSchool_grade}` , `${JSON.parse(localStorage.getItem('School_page')).otherSchool_major}` , `${JSON.parse(localStorage.getItem('School_page')).otherSchool_congrate}`]
                            ],
                        },
                        margin: [ -20 , 5 , 0 , 0],
                        fontSize: 8,
                    },
                    {
                        text : `9. ความสามารถพิเศษ`,
                        margin: [ -20 , 15 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `9.1 ความรู้ด้านภาษาอังกฤษ  :  ${JSON.parse(localStorage.getItem('Ability_page')).english}     พูด  :  ${JSON.parse(localStorage.getItem('Ability_page')).english_speak}     อ่าน  :  ${JSON.parse(localStorage.getItem('Ability_page')).english_read}     เขียน  :  ${JSON.parse(localStorage.getItem('Ability_page')).english_writh}`,
                        margin: [ -8 , 0 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `9.2 พิมพ์ดีดภาษาไทย  :  ${JSON.parse(localStorage.getItem('Ability_page')).thaiprint}  คำ/นาที     พิมพ์ดีดภาษาอังกฤษ  :  ${JSON.parse(localStorage.getItem('Ability_page')).engprint}  คำ/นาที`,
                        margin: [ -8 , 0 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `9.3 ความสามารถด้านการขับรถ   ใบอนุญาติขับขี่รถจักรยายนต์  :  ${JSON.parse(localStorage.getItem('Ability_page')).motorcycles}   ใบอนุญาติขับขี่รถยนต์  :  ${JSON.parse(localStorage.getItem('Ability_page')).car}`,
                        margin: [ -8 , 0 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `9.4 สามารถออกปฏิบัติงานนอกพื้นที่  :  ${JSON.parse(localStorage.getItem('Ability_page')).outer}`,
                        margin: [ -8 , 0 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `9.5 ความสามารถด้านคอมพิวเตอร์ :`,
                        margin: [ -8 , 0 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `${JSON.parse(localStorage.getItem('Ability_page')).computerSkill}`,
                        margin: [ 8 , 0 , 0 , 0],
                        style : 'content',
                        pageBreak: 'after'
                    },
                    // PDF PAGE 2
                    {
                        image : `${Images.Cupcode}`,
                        width: 110,
                        height: 50,
                        margin: [-30, -35 , 0 , 0],
                    },
                    {
                        text : 'บริษัท คัพโค้ด จำกัด (สำนักงานใหญ่)',
                        margin: [ 90, -45 , 0 , 0],
                        style: 'header'
                    },
                    {
                        text : 'ทาวน์อินทาวน์ ซอย 11 แขวง พลับพลา เขต วังทองหลาง กรุงเทพมหานคร 10312',
                        margin: [ 90 ,  0 , 0 , 0],
                        style: 'header'
                    },
                    {
                        text : 'ติดต่อสอบถาม : oraphan@cupcodeteam.com',
                        margin: [ 90 ,  0 , 0 , 0],
                        style: 'header'
                    },
                    {
                        canvas: [
                            { 
                                type: 'line', 
                                x1: -20, 
                                y1: 9, 
                                x2: 595-2*30, 
                                y2: 9, 
                                lineWidth: 1 ,
                                lineColor  : '#363636'
                            }
                        ]
                    },
                    {
                        text : `10. ประสบการณ์การทำงาน เรียงลำดับจากปัจจุบันถึงอดีต`,
                        margin: [ -20 , 25 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `10.1 บริษัทที่ทำงานในปัจจุบัน  :  ${props.current_work}     ตำแหน่ง  :  ${props.current_position}`,
                        margin: [ -5 , 0 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `ลักษณะงานที่รับผิดชอบ`,
                        margin: [ 14 , 0 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `${props.current_description}`,
                        margin: [ 30 , 0 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `ระยะเวลาตั้งแต่  :  ${setTimeLocal(props.current_startwork)}     ถึง  :  ${setTimeLocal(props.current_endwork)}     เงินเดือนสุดท้ายที่ได้รับ  :  ${props.current_final_salary}`,
                        margin: [ 14 , 0 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `รายได้อื่นๆจากบริษัทนอกเหนือจากเงินเดือนพื้นฐาน  :  ${props.current_other_income}     รวมรายได้สุทธิต่อเดือน  :  ${props.current_net_income}`,
                        margin: [ 14 , 0 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `สวัสดิการอื่นๆของบริษัท  :  ${props.current_welfare}     สาเหตุที่ลาออก  :  ${props.current_resign}`,
                        margin: [ 14 , 0 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `10.2 บริษัท  :  ${props.old_work}     ตำแหน่ง  :  ${props.old_position}     เงินเดือนสุดท้ายที่ได้รับ  :  ${props.old_final_salary}`,
                        margin: [ -5 , 0 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `ระยะเวลาตั้งแต่  :  ${setTimeLocal(props.old_startwork)}     ถึง  :  ${setTimeLocal(props.old_endwork)}     เงินเดือนสุดท้ายที่ได้รับ  :  ${props.old_resign}`,
                        margin: [ 14 , 0 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `10.3 บริษัท  :  ${props.older_work}     ตำแหน่ง  :  ${props.older_position}     เงินเดือนสุดท้ายที่ได้รับ  :  ${props.older_final_salary}`,
                        margin: [ -5 , 0 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `ระยะเวลาตั้งแต่  :  ${setTimeLocal(props.older_startwork)}     ถึง  :  ${setTimeLocal(props.older_endwork)}     เงินเดือนสุดท้ายที่ได้รับ  :  ${props.older_resign}`,
                        margin: [ 14 , 0 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `11. โรคประจำตัว  :  ${(JSON.parse(localStorage.getItem('Personal_page')).congenitalDisease === 'มี') ? '' : 'ไม่มี'}${JSON.parse(localStorage.getItem('Personal_page')).congenitalDisease_name}`,
                        margin: [ -20 , 15 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `12. บุคคลที่ติดต่อกรณีเร่งด่วน  :  ${JSON.parse(localStorage.getItem('Personal_page')).urgent_contact}     ความสัมพันธ์  :  ${JSON.parse(localStorage.getItem('Personal_page')).urgent_relation}     โทรศัพท์  :  ${JSON.parse(localStorage.getItem('Personal_page')).urgent_phone}`,
                        margin: [ -20 , 15 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `13. ทราบการรับสมัครจากช่องทางใด  :  ${JSON.parse(localStorage.getItem('Personal_page')).urgent_apply}`,
                        margin: [ -20 , 15 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `14. แจ้งชื่อผู้ที่จะอ้างอิงหรือสอบถามได้ ซึ่งมิใช่ญาติ หรืออดีตผู้ว่าจ้าง`,
                        margin: [ -20 , 15 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `ชื่อ - นามสกุล  :  ${JSON.parse(localStorage.getItem('Personal_page')).refer_name}     อาชีพ  :  ${JSON.parse(localStorage.getItem('Personal_page')).refer_career}     โทรศัพท์  :  ${JSON.parse(localStorage.getItem('Personal_page')).refer_phone}`,
                        margin: [ -5 , 0 , 0 , 0],
                        style : 'content'
                    },
                    {
                        text : `ที่อยู่  :  ${JSON.parse(localStorage.getItem('Personal_page')).refer_address}`,
                        margin: [ -5 , 0 , 0 , 0],
                        style : 'content'
                    },
                    {
                        canvas : [
                            {
                                type: 'rect',
                                x: -20,
                                y: 60,
                                w: 550,
                                h: 50,
                                r: 4,
                                lineColor: 'black',
                            }
                        ]
                    },
                    {
                        text : `“ ข้าพเจ้าขอรับรองว่า ข้อความที่กล่าวไว้ข้างต้นทั้งหมดนี้เป็นความจริงทุกประการ หากสำนักงานฯ ตรวจพบภายหลังว่า\nข้อมูลใดไม่ตรงกับความจริงสำนักงานฯ สามารถยกเลิกสิทธิการเป็นเจ้าหน้าที่ของข้าพเจ้าโดยชอบธรรม ”`,
                        margin: [ -10 , -42 , 0 , 0],
                        fontSize: 11.3,
                    },
                    {
                        text : `ลงชื่อ.......................................................................ผู้สมัคร`,
                        margin: [ 0 , 80 , 0 , 0],
                        style : 'content',
                        alignment : 'right'
                    },
                    {
                        text : `( ${JSON.parse(localStorage.getItem('Personal_page')).fname_thai} ${JSON.parse(localStorage.getItem('Personal_page')).lname_thai} )`,
                        margin: [ 377 , 5 , 0 , 0],
                        style : 'content',
                    },
                    
                    {
                        text : `วันที่ ${localDate.toLocaleDateString('th-TH', options)}`,
                        margin: [ 376 , 5 , 0 , 0],
                        style : 'content',
                    },
                ],
                styles: {
                    header: {
                        fontSize: 8,
                    },
                    content: {
                        fontSize: 10,
                    }
                },
                defaultStyle:{
                    font : 'Kanit',
                }
            };
            pdfMake.createPdf(docDefinition).open()  
        },
        saveThisPagePrev: props => () => event => {
            localStorage.setItem('Task_page', JSON.stringify({
                'current_work' : props.current_work ,
                'current_position' : props.current_position,
                'current_description' : props.current_description,
                'current_startwork' : props.current_startwork,
                'current_endwork' : props.current_endwork,
                'current_final_salary' : props.current_final_salary,
                'current_other_income' : props.current_other_income,
                'current_net_income' : props.current_net_income,
                'current_welfare' : props.current_welfare,
                'current_resign' : props.current_resign,
                'old_work' : props.old_work,
                'old_position' : props.old_position,
                'old_final_salary' : props.old_final_salary,
                'old_startwork' : props.old_startwork,
                'old_endwork' : props.old_endwork,
                'old_resign' : props.old_resign,
                'older_work' : props.older_work,
                'older_position' : props.older_position,
                'older_final_salary' : props.older_final_salary,
                'older_startwork' : props.older_startwork,
                'older_endwork' : props.older_endwork,
                'older_resign' : props.older_resign,
                'checkAccept' : props.checkAccept,
            }))      
            Router.push({ pathname : '/ApplyJob/Ability_information' , query : { position : props.url.query.position }})      
        },
        handleCheckAccept: props => () => event => {
            const { checkAccept } = props
            if (checkAccept === false) {
                props.setCheckAccept(true)
            }
            else{
                props.setCheckAccept(false)
            }
        },
    })
)

export default enhance( (props)=> 
    <Container>
        {Breadcrumb3Page('ตำแหน่งเปิดรับ', 'รายละเอียดตำแหน่ง Fontend Devoloper' , 'สมัครงาน' , '../index' , '../JobDetail/JobDetail' )}
        <BoxHead>
            <center><br/><TextBox>สมัครงาน</TextBox></center><br/>
        </BoxHead>
        <BoxHead2/>
            <Box>
                <br/>
                    {StepApplyJobTask('ข้อมูลส่วนบุคคล','ที่อยู่ผู้สมัคร','ประวัติการศึกษา','ความสามรถพิเศษ','ประสบการณ์ทำงาน')}
                <br/>
                <center>
                    <FontInfo>ประสบการ์ทำงาน ประวัติการฝึกงาน หรือสหกิจศึกษาของผู้สมัคร</FontInfo>
                    <MgIcon name='window minimize outline' size='big'/>
                </center>
                <br/>
                <TextSort>เรียงลำดับจากปัจจุบันถึงอดีต</TextSort>
                <Grid columns={2} padded='horizontally'>
                    <Grid.Column>
                        <MgGridLeft>{input2GrideGrideMG('ที่ทำงานปัจจุบัน :','กรุณากรอกที่ทำงานปัจจุบัน' , props.handleCurrentWork() , 'text' , props.current_work)}</MgGridLeft>
                    </Grid.Column>
                    <Grid.Column>
                        {input2Gride('ตำแหน่ง :','กรุณากรอกตำแหน่ง' , props.handleCurrentPosition() , 'text' , props.current_position)}
                    </Grid.Column>
                </Grid>
                <MgTextArea>
                    {InputTextArea('ลักษณะงานที่รับผิดชอบ :', 'กรุณากรอกลักษณะงานที่รับผิดชอบ' , props.handleCurrentDescription() , props.current_description)}
                </MgTextArea>
                <br/>
                <Grid columns={2} padded='horizontally'>
                    <Grid.Column>
                        <MgGridLeft>{input2GrideGrideMG('ระยะเวลาเริ่มต้นการทำงาน :','เลือกระยะเวลาเริ่มต้นการทำงาน' , props.handleCurrentStartwork() , 'date' , props.current_startwork)}</MgGridLeft>
                    </Grid.Column>
                    <Grid.Column>
                        {input2Gride('ระยะเวลาสิ้นสุดการทำงาน :','เลือกระยะเวลาสิ้นสุดการทำงาน' , props.handleCurrentEndwork() , 'date' , props.current_endwork)}
                    </Grid.Column>
                </Grid>
                <Grid columns={2} padded='horizontally'>
                    <Grid.Column>
                        <MgGridLeft>{input2GrideGrideMG('เงินเดือนสุดท้ายที่ได้รับ (บาท) :','กรุณากรอกเงินเดือนสุดท้ายที่ได้รับ' , props.handleCurrentFinalSalary() , 'number' , props.current_final_salary)}</MgGridLeft>
                    </Grid.Column>
                    <Grid.Column>
                        {input2Gride('รายได้อื่นๆ ที่นอกเหนือจากเงินเดือนพื้นฐาน :','กรุณากรอกรายได้อื่นๆ ที่นอกเหนือจากเงินเดือน' , props.handleCurrentOtherIncome() , 'text' , props.current_other_income)}
                    </Grid.Column>
                </Grid>
                <Grid columns={2} padded='horizontally'>
                    <Grid.Column>
                        <MgGridLeft>{input2GrideGrideMG('รวมรายได้สุทธิต่อเดือน (บาท) :','กรุณากรอกรายได้สุทธิต่อเดือน' , props.handleCurrentNetIncome() , 'number' , props.current_net_income)}</MgGridLeft>
                    </Grid.Column>
                    <Grid.Column>
                        {input2Gride('สวัสดิการอื่นๆ ของบริษัท :','กรุณากรอกสวัสดิการอื่นๆ ของบริษัท' , props.handleCurrentWelfare() , 'text' , props.current_welfare)}
                    </Grid.Column>
                </Grid>
                <MgTextArea>
                    {InputTextAreaMini('สาเหตุที่ลาออก :', 'กรุณากรอกสาเหตุที่ลาออก' , props.handleCurrentResign() , props.current_resign)}
                </MgTextArea>
                <br/>
                <center>
                    <FontInfo><MgIconBlack name='window minimize outline' size='big'/></FontInfo>
                </center>
                <br/>
                <Grid columns={2} padded='horizontally'>
                    <Grid.Column>
                        <MgGridLeft>{input2GrideGrideMG('บริษัท :','กรุณากรอกบริษัท' , props.handleOldWork() , 'text' , props.old_work)}</MgGridLeft>
                    </Grid.Column>
                    <Grid.Column>
                        {input2Gride('ตำแหน่ง :','กรุณากรอกตำแหน่ง' , props.handleOldPosition() , 'text' , props.old_position )}
                    </Grid.Column>
                </Grid>
                <Grid columns={2} padded='horizontally'>
                    <Grid.Column>
                        <MgGridLeft>{input2GrideGrideMG('เงินเดือนสุดท้าย :','กรุณากรอกเงินเดือนสุดท้าย' , props.handleOldFinalSalary() , 'number' , props.old_final_salary)}</MgGridLeft>
                    </Grid.Column>
                </Grid>
                <Grid columns={2} padded='horizontally'>
                    <Grid.Column>
                        <MgGridLeft>{input2GrideGrideMG('ระยะเวลาเริ่มต้นการทำงานตั้งแต่ :','เลือกระยะเวลาเริ่มต้นการทำงาน' , props.handleOldStartwork() , 'date' , props.old_startwork)}</MgGridLeft>
                    </Grid.Column>
                    <Grid.Column>
                        {input2Gride('ระยะเวลาสิ้นสุดการทำงานตั้งแต่ :','เลือกระยะเวลาสิ้นสุดการทำงาน' , props.handleOldEndwork() , 'date' , props.old_endwork)}
                    </Grid.Column>
                </Grid>
                <MgTextArea>
                    {InputTextAreaMini('สาเหตุที่ลาออก :', 'กรุณากรอกสาเหตุที่ลาออก' , props.handleOldResign() , props.old_resign)}
                </MgTextArea>
                <br/>
                <center>
                    <FontInfo><MgIconBlack name='window minimize outline' size='big'/></FontInfo>
                </center>
                <br/>
                <Grid columns={2} padded='horizontally'>
                    <Grid.Column>
                        <MgGridLeft>{input2GrideGrideMG('บริษัท :','กรุณากรอกบริษัท' , props.handleOlderWork() , 'text' , props.older_work)}</MgGridLeft>
                    </Grid.Column>
                    <Grid.Column>
                        {input2Gride('ตำแหน่ง :','กรุณากรอกตำแหน่ง' , props.handleOlderPosition() , 'text' , props.older_position)}
                    </Grid.Column>
                </Grid>
                <Grid columns={2} padded='horizontally'>
                    <Grid.Column>
                        <MgGridLeft>{input2GrideGrideMG('เงินเดือนสุดท้าย :','กรุณากรอกเงินเดือนสุดท้าย' , props.handleOlderFinalSalary() , 'number' , props.older_final_salary)}</MgGridLeft>
                    </Grid.Column>
                </Grid>
                <Grid columns={2} padded='horizontally'>
                    <Grid.Column>
                        <MgGridLeft>{input2GrideGrideMG('ระยะเวลาเริ่มต้นการทำงานตั้งแต่ :','เลือกระยะเวลาเริ่มต้นการทำงาน' , props.handleOlderStartwork() , 'date' , props.older_startwork)}</MgGridLeft>
                    </Grid.Column>
                    <Grid.Column>
                        {input2Gride('ระยะเวลาสิ้นสุดการทำงานตั้งแต่ :','เลือกระยะเวลาสิ้นสุดการทำงาน' , props.handleOlderEndwork() , 'date' , props.older_endwork)}
                    </Grid.Column>
                </Grid>
                <MgTextArea>
                    {InputTextAreaMini('สาเหตุที่ลาออก :', 'กรุณากรอกสาเหตุที่ลาออก' , props.handleOlderResign() , props.older_resign)}
                </MgTextArea>
                <br/><br/>
                <BoxGray>
                    <MgChackbox 
                        label='ข้าพเจ้าขอรับรองว่า ข้อความที่ได้กล่าวมาข้างต้นทั้งหมดนี้เป็นความจริงทุกประการ หากสำนักงานฯ 
                    ตรวจพบภายหลังว่าข้อมูลไม่ตรงกับความเป็นจริง สำนักงานฯ สามารถยกเลิกสิทธิการเป็นเจ้าหน้าที่ของข้าพเจ้าโดยชอบธรรม' 
                        onChange={props.handleCheckAccept()} 
                        checked={props.checkAccept}
                    />
                </BoxGray>
                <br/><br/>
                    <MgBTNOrange>
                            <div>
                                <BtnBack basic color='orange' onClick={props.saveThisPagePrev()}>
                                    ย้อนกลับ
                                </BtnBack>
                                &nbsp;
                                {/* <Modal trigger={ */}
                                        <Button as='div' labelPosition='right' onClick={props.saveThisPageNext(props.handleChangTimeToThai)}>
                                            <BtnSuccess>
                                                ยืนยันการสมัคร
                                            </BtnSuccess>
                                            <Colorlabel as='a'>
                                                <Image src='https://www.img.in.th/images/4ecc343bc0f151339a458ed57dfe5618.png' size='small' />
                                            </Colorlabel>
                                        </Button>
                                    {/* } size='tiny' closeIcon>
                                    <Modal.Content image>
                                        <Modal.Description>
                                            <center>
                                                <br/>
                                                <Image size='medium' src='https://www.img.in.th/images/89c1a7fb5aeca8818567de71964a74f0.png' size='tiny' />
                                                <TextModelTaskSuccess>สมัครงานเรียบร้อย</TextModelTaskSuccess>
                                                    <ButtonClick>ดาวน์โหลดเอกสารใบสมัคร</ButtonClick>
                                                <br/><br/>
                                            </center>
                                            <p>*หมายเหตุ : ผู้ที่ผ่านการพิจารณาเบื้องต้นทางฝ่ายบุคคลจะติดต่อไปหาผู้สมัครโดยตรง</p>
                                        </Modal.Description>
                                    </Modal.Content>
                                </Modal> */}
                            </div>
                    </MgBTNOrange>
                <br/><br/>
            </Box>
        <Divider hidden />
    </Container>    
)