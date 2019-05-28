import React from 'react'
import { withLayout } from '../../hoc'
import { compose, withProps , withState , withHandlers, lifecycle } from 'recompose'
import styled from 'styled-components'
import { Container , Icon , Divider , Grid , Checkbox , Button , Header , Label , Modal , Image } from 'semantic-ui-react'
import theme from '../../theme/default'
import { input2GrideOnKeyUp , inputOnkeyup , input2GrideGrideMG , input2Gride , InputTextArea , InputTextAreaMini , inputOnkeyupDisabled } from '../../components/Input'
import { StepApplyJobTask } from '../../components/Step'
import Router from 'next/router'
import { firebase } from '../../firebase/index'
import { inject } from 'mobx-react'

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
    width: 32%;
    padding-top: 10px !important;
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

const ButtonClick = styled(Button)`
    font-family : 'Kanit', sans-serif !important;
    font-size: 14px !important;
`;

const enhance = compose(
    withLayout,
    inject('authStore'),
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
    withState('openModal' , 'setOpenModal' , false),
    withState('messageModal' , 'setMessageModal' , false),
    withState('saveSuccess' , 'setSaveSuccess' , false),

    withProps({
        pageTitle: 'Task information'
    }),
    withHandlers({
        initTaskInfoLocalStorage: props => () => {
            firebase.database().ref('resume/' + props.authStore.accessToken)
            .once("value").then( snapshot => {
                let resume = snapshot.val()         
                props.setCurrent_work(resume.current_work)            
                props.setCurrent_position(resume.current_position)
                props.setCurrent_description(resume.current_description)
                props.setCurrent_startwork(resume.current_startwork)
                props.setCurrent_endwork(resume.current_endwork)
                props.setCurrent_final_salary(resume.current_final_salary)
                props.setCurrent_other_income(resume.current_other_income)
                props.setCurrent_net_income(resume.current_net_income)
                props.setCurrent_welfare(resume.current_welfare)
                props.setCurrent_resign(resume.current_resign)
                props.setOld_work(resume.old_work)
                props.setOld_position(resume.old_position)
                props.setOld_final_salary(resume.old_final_salary)
                props.setOld_startwork(resume.old_startwork)
                props.setOld_endwork(resume.old_endwork)
                props.setOld_resign(resume.old_resign)
                props.setOlder_work(resume.older_work)
                props.setOlder_position(resume.older_position)
                props.setOlder_final_salary(resume.older_final_salary)
                props.setOlder_startwork(resume.older_startwork)
                props.setOlder_endwork(resume.older_endwork)
                props.setOlder_resign(resume.older_resign)
                props.setCheckAccept(resume.checkAccept)
            })
        }
    }),
    lifecycle({
        async componentDidMount(){
            window.scrollTo(0, 0)
            await this.props.initTaskInfoLocalStorage()
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
            let stack = props.current_final_salary
            if (parseInt(event.target.value) < 1) {
                event.target.value = ''
            }        
            else{
                if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode > 47 && event.keyCode < 58) { 
                    if (event.target.value.length > 6) {
                        event.target.value = stack
                    }
                    else{
                        props.setCurrent_final_salary(event.target.value)
                        let current_final_salary = parseInt(event.target.value)
                        let current_other_income = parseInt(props.current_other_income)
                        let sumMoney = parseInt(current_final_salary + current_other_income)
                        props.setCurrent_net_income(!sumMoney ? '' : sumMoney)
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
        handleCurrentOtherIncome: props => () => event => {
            let stack = props.current_other_income
            if (parseInt(event.target.value) < 1) {
                event.target.value = ''
            }        
            else{
                if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode > 47 && event.keyCode < 58) { 
                    if (event.target.value.length > 6) {
                        event.target.value = stack
                    }
                    else{
                        props.setCurrent_other_income(event.target.value)
                        let current_final_salary = parseInt(props.current_final_salary)
                        let current_other_income = parseInt(event.target.value)
                        let sumMoney = parseInt(current_final_salary + current_other_income)
                        props.setCurrent_net_income(!sumMoney ? '' : sumMoney)
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
        // handleCurrentNetIncome: props => () => event => {
        //     let stack = props.current_net_income
        //     if (parseInt(event.target.value) < 1) {
        //         event.target.value = ''
        //     }        
        //     else{
        //         if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode > 47 && event.keyCode < 58) { 
        //             if (event.target.value.length > 7) {
        //                 event.target.value = stack
        //             }
        //             else{
        //                 props.setCurrent_net_income(event.target.value)
        //             }
        //         }
        //         else{
        //             if (event.keyCode === 9) {
        //                 event.target.value = ''
        //             }
        //             else{
        //                 event.target.value = stack
        //             }
        //         }
        //     }
        // },
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
            let stack = props.old_final_salary
            if (parseInt(event.target.value) < 1) {
                event.target.value = ''
            }        
            else{
                if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode > 47 && event.keyCode < 58) { 
                    if (event.target.value.length > 6) {
                        event.target.value = stack
                    }
                    else{
                        props.setOld_final_salary(event.target.value)
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
            let stack = props.older_final_salary
            if (parseInt(event.target.value) < 1) {
                event.target.value = ''
            }        
            else{
                if (event.keyCode > 95 && event.keyCode < 106 || event.keyCode === 8 || event.keyCode > 47 && event.keyCode < 58) { 
                    if (event.target.value.length > 6) {
                        event.target.value = stack
                    }
                    else{
                        props.setOlder_final_salary(event.target.value)
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
        handleOlderStartwork: props => () => event => {
            props.setOlder_startwork(event.target.value)
        },
        handleOlderEndwork: props => () => event => {
            props.setOlder_endwork(event.target.value)
        },
        handleOlderResign: props => () => event => {
            props.setOlder_resign(event.target.value)
        },
        saveThisPageNext: props => () => event => {    
            const uid = props.authStore.currentUser.uid                                    
            if (props.current_startwork !== undefined && props.current_endwork !== undefined) {
                const c_startDate = new Date(props.current_startwork)
                const c_endDate = new Date(props.current_endwork)
                if (c_startDate.setHours(0,0,0,0) > c_endDate.setHours(0,0,0,0)) {
                    props.setMessageModal("คุณกรอกข้อมูลวันที่ไม่ถูกต้อง กรุณากรอกข้อมูลใหม่อีกครั้ง !!!")
                    props.setOpenModal(true)
                    props.saveSuccess(false)
                }
            }
            if (props.old_startwork !== undefined && props.old_endwork !== undefined) {
                const old_startDate = new Date(props.old_startwork)
                const old_endDate = new Date(props.old_endwork)
                if (old_startDate.setHours(0,0,0,0) > old_endDate.setHours(0,0,0,0)) {
                    props.setMessageModal("คุณกรอกข้อมูลวันที่ไม่ถูกต้อง กรุณากรอกข้อมูลใหม่อีกครั้ง !!!")
                    props.setOpenModal(true)
                    props.saveSuccess(false)
                }
            }
            if (props.older_startwork !== undefined && props.older_endwork !== undefined) {
                const older_startDate = new Date(props.older_startwork)
                const older_endDate = new Date(props.older_endwork)
                if (older_startDate.setHours(0,0,0,0) > older_endDate.setHours(0,0,0,0)) {
                    props.setMessageModal("คุณกรอกข้อมูลวันที่ไม่ถูกต้อง กรุณากรอกข้อมูลใหม่อีกครั้ง !!!")
                    props.setOpenModal(true)
                    props.saveSuccess(false)
                }
            }
            if (props.checkAccept === false) {
                props.setMessageModal("คุณกรอกข้อมูลวันที่ไม่ถูกต้อง กรุณากรอกข้อมูลใหม่อีกครั้ง !!!")
                props.setOpenModal(true)
                props.saveSuccess(false)
            }
            else{
                firebase.database().ref('resume/' + uid).update({
                    current_work : props.current_work ,
                    current_position : props.current_position,
                    current_description : props.current_description,
                    current_startwork : props.current_startwork,
                    current_endwork : props.current_endwork,
                    current_final_salary : props.current_final_salary,
                    current_other_income : props.current_other_income,
                    current_net_income : props.current_net_income,
                    current_welfare : props.current_welfare ? props.current_welfare : '-',
                    current_resign : props.current_resign ? props.current_resign : '-',
                    old_work : props.old_work  !== undefined ? props.old_work : '-',
                    old_position : props.old_position !== undefined ? props.old_position : '-',
                    old_final_salary : props.old_final_salary !== undefined ? props.old_final_salary : '-',
                    old_startwork : props.old_startwork || null,
                    old_endwork : props.old_endwork || null,
                    old_resign : props.old_resign !== undefined ? props.old_resign : '-',
                    older_work : props.older_work !== undefined ? props.older_work : '-',
                    older_position : props.older_position !== undefined ? props.older_position : '-',
                    older_final_salary : props.older_final_salary !== undefined ? props.older_final_salary : '-',
                    older_startwork : props.older_startwork  || null,
                    older_endwork : props.older_endwork  || null,
                    older_resign : props.older_resign !== undefined ? props.older_resign : '-',
                    checkAccept : props.checkAccept !== undefined ? props.checkAccept : '-',
                },
                (error) => {
                    error 
                        ?   props.setMessageModal(error)
                        :   props.setOpenModal(true)
                            props.setMessageModal('บันทึกข้อมูลเรียบร้อยแล้ว')
                            props.setSaveSuccess(true)
                }) 
            }    
        },
        saveThisPagePrev: props => () => event => {
            const uid = props.authStore.currentUser.uid
            firebase.database().ref('resume/' + uid).update({
                current_work : props.current_work ,
                current_position : props.current_position,
                current_description : props.current_description,
                current_startwork : props.current_startwork,
                current_endwork : props.current_endwork,
                current_final_salary : props.current_final_salary,
                current_other_income : props.current_other_income,
                current_net_income : props.current_net_income,
                current_welfare : props.current_welfare ? props.current_welfare : '-',
                current_resign : props.current_resign ? props.current_resign : '-',
                old_work : props.old_work  !== undefined ? props.old_work : '-',
                old_position : props.old_position !== undefined ? props.old_position : '-',
                old_final_salary : props.old_final_salary !== undefined ? props.old_final_salary : '-',
                old_startwork : props.old_startwork || null,
                old_endwork : props.old_endwork || null,
                old_resign : props.old_resign !== undefined ? props.old_resign : '-',
                older_work : props.older_work !== undefined ? props.older_work : '-',
                older_position : props.older_position !== undefined ? props.older_position : '-',
                older_final_salary : props.older_final_salary !== undefined ? props.older_final_salary : '-',
                older_startwork : props.older_startwork  || null,
                older_endwork : props.older_endwork  || null,
                older_resign : props.older_resign !== undefined ? props.older_resign : '-',
                checkAccept : props.checkAccept !== undefined ? props.checkAccept : '-',
            })
            Router.push({ pathname : '/Resume/Ability_information' })      
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
        <br/><br/>
        <BoxHead>
            <center><br/><TextBox>ข้อมูลส่วนตัว</TextBox></center><br/>
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
                        <MgGridLeft>{input2GrideGrideMG('ที่ทำงานปัจจุบัน :','กรุณากรอกที่ทำงานปัจจุบัน' , props.handleCurrentWork() , 'text' , props.current_work , '', true)}</MgGridLeft>
                    </Grid.Column>
                    <Grid.Column>
                        {input2Gride('ตำแหน่ง :','กรุณากรอกตำแหน่ง' , props.handleCurrentPosition() , 'text' , props.current_position , '' , true)}
                    </Grid.Column>
                </Grid>
                <MgTextArea>
                    {InputTextArea('ลักษณะงานที่รับผิดชอบ :', 'กรุณากรอกลักษณะงานที่รับผิดชอบ' , props.handleCurrentDescription() , props.current_description , true)}
                </MgTextArea>
                <br/>
                <Grid columns={2} padded='horizontally'>
                    <Grid.Column>
                        <MgGridLeft>{input2GrideGrideMG('วันที่เริ่มการทำงาน :','เลือกวันที่เริ่มต้นการทำงาน' , props.handleCurrentStartwork() , 'date' , props.current_startwork , '' , true)}</MgGridLeft>
                    </Grid.Column>
                    <Grid.Column>
                        {input2Gride('วันที่สิ้นสุดการทำงาน :','เลือกวันที่สิ้นสุดการทำงาน' , props.handleCurrentEndwork() , 'date' , props.current_endwork , '' , true)}
                    </Grid.Column>
                </Grid>
                <Grid columns={2} padded='horizontally'>
                    <Grid.Column>
                        <MgGridLeft>{inputOnkeyup('เงินเดือนสุดท้ายที่ได้รับ (บาท) :','กรุณากรอกเงินเดือนสุดท้ายที่ได้รับ' , props.handleCurrentFinalSalary() , 'text' , props.current_final_salary , '' , true)}</MgGridLeft>
                    </Grid.Column>
                    <Grid.Column>
                        {input2GrideOnKeyUp('รายได้อื่นๆ ที่นอกเหนือจากเงินเดือนพื้นฐาน (บาท) :','กรุณากรอกรายได้อื่นๆ ที่นอกเหนือจากเงินเดือน' , props.handleCurrentOtherIncome() , 'text' , props.current_other_income , true)}
                    </Grid.Column>
                </Grid>
                <Grid columns={2} padded='horizontally'>
                    <Grid.Column>
                        <MgGridLeft>{inputOnkeyupDisabled('รวมรายได้สุทธิต่อเดือน (บาท) :','กรุณากรอกรายได้สุทธิต่อเดือน' , null , 'text' , props.current_net_income)}</MgGridLeft>
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
                        <MgGridLeft>{inputOnkeyup('เงินเดือนสุดท้าย :','กรุณากรอกเงินเดือนสุดท้าย' , props.handleOldFinalSalary() , 'text' , props.old_final_salary)}</MgGridLeft>
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
                        <MgGridLeft>{inputOnkeyup('เงินเดือนสุดท้าย :','กรุณากรอกเงินเดือนสุดท้าย' , props.handleOlderFinalSalary() , 'text' , props.older_final_salary)}</MgGridLeft>
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
                                <Icon name='left arrow' /> ย้อนกลับ
                            </BtnBack>
                            &nbsp;
                            <Button as='div' labelPosition='right'>
                                <BtnSuccess onClick={props.saveThisPageNext()}>
                                    บันทึกข้อมูล
                                </BtnSuccess>
                                <Colorlabel as='a'>
                                    <Image src='https://www.img.in.th/images/4ecc343bc0f151339a458ed57dfe5618.png' size='small' />
                                </Colorlabel>
                            </Button> 
                        </div>
                    </MgBTNOrange>
                <br/><br/>
                <Modal size={'tiny'} open={props.openModal}>
                    <Modal.Header>
                        <center>
                            <Icon name='info circle' size='big' color={props.saveSuccess ? "green" : "red"}/>
                        </center>
                    </Modal.Header>
                    <Modal.Content>
                        <center>
                            <p style={{ fontSize : '20px'}}>{props.messageModal}</p>
                        </center>
                    </Modal.Content>
                    <Modal.Actions>
                        <center>
                            <ButtonClick 
                                color={props.saveSuccess ? "orange" : "red"}
                                onClick={() => {return props.saveSuccess ? Router.push('/') : props.setOpenModal(false)}} 
                                icon='close' 
                                labelPosition='left' 
                                content='ปิด' 
                            />
                        </center>
                    </Modal.Actions>
                </Modal>
            </Box>
        <Divider hidden />
    </Container>    
)