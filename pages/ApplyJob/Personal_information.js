import React from 'react'
import { withLayout } from '../../hoc'
import { compose, withProps , withState , withHandlers , lifecycle } from 'recompose'
import styled from 'styled-components'
import { Container , Step , Icon , Divider , Grid , Image , Form , Radio } from 'semantic-ui-react'
import {Breadcrumb3Page} from '../../components/Breadcrumb'
import Link from 'next/link'
import theme from '../../theme/default'
import {input2GrideGrideMG , input2Gride , input4GrideMG , input4Gride , inputGridePosition } from '../../components/Input'
import {btn_orange} from '../../components/Button'
import {stepApplyJobInfomation} from '../../components/Step'
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
    width: 177px;
    height: 181px;
    border: 1px solid ${theme.colors.gray};
    background-color: ${theme.colors.elementBackground};
    margin-left: 27%;
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

const enhance = compose(
    withState('salary','setSalary'),
    withState('image' , 'setImage' , undefined),
    withState('fname_thai','setFname_thai'),
    withState('lname_thai','setLname_thai'),
    withState('fname_eng','setFname_eng'),
    withState('lname_eng','setLname_eng'),
    withState('email','setEmail'),
    withState('facebook','setFacebook'),
    withState('idcard','setIdcard'),
    withState('tel','setTel'),
    withState('birthday','setBirthday'),
    withState('age','setAge'),
    withState('sex','setSex'),
    withState('weight','setWeight'), 
    withState('height','setHeight'),
    withState('ethnicity','setEthnicity'),
    withState('nationality','setNationality'),
    withState('religion','setReligion'),
    withState('dad_name','setDad_name'),
    withState('dad_career','setDad_career'),
    withState('mom_name','setMom_name'),
    withState('mom_career','setMom_career'),
    withState('brethren','setBrethren'),
    withState('sequence','setSequence'),

    withState('status','setStatus'),
    withState('soldier','setSoldier'),
    withState('congenitalDisease','SetCongenitalDisease'),
    withProps({
        pageTitle: 'Personal information'
    }),
    withLayout,
    lifecycle({
        async componentWillMount(){            
            localStorage && this.setState({
                salary : JSON.parse(localStorage.getItem('salary')),
                fname_thai : JSON.parse(localStorage.getItem('fname_thai')),
                lname_thai : JSON.parse(localStorage.getItem('lname_thai')),
                fname_eng : JSON.parse(localStorage.getItem('fname_eng')),
                lname_eng : JSON.parse(localStorage.getItem('lname_eng')),
                email : JSON.parse(localStorage.getItem('email')),
                facebook : JSON.parse(localStorage.getItem('facebook')),
                idcard : JSON.parse(localStorage.getItem('idcard')),
                tel : JSON.parse(localStorage.getItem('tel')),
                birthday : JSON.parse(localStorage.getItem('birthday')),
                age : JSON.parse(localStorage.getItem('age')),
                sex : JSON.parse(localStorage.getItem('sex')),
                weight : JSON.parse(localStorage.getItem('weight')),
                height : JSON.parse(localStorage.getItem('height')),
                ethnicity : JSON.parse(localStorage.getItem('ethnicity')),
                nationality : JSON.parse(localStorage.getItem('nationality')),
                religion : JSON.parse(localStorage.getItem('religion')),
                dad_name : JSON.parse(localStorage.getItem('dad_name')),
                dad_career : JSON.parse(localStorage.getItem('dad_career')),
                mom_name : JSON.parse(localStorage.getItem('mom_name')),
                mom_career : JSON.parse(localStorage.getItem('mom_career')),
                brethren : JSON.parse(localStorage.getItem('brethren')),
                sequence : JSON.parse(localStorage.getItem('sequence')),

            })            
        },
        async componentDidMount(){
            
        },
    }),
    withHandlers({
        handleShowStep: props => () => {
            return(
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
        handleChange: props => (sex) => event => {
            props.setSex(sex)
        },
        handleFileSelect: props => (fn) => event => {
            event.preventDefault();
            buildFileSelector(fn).click();
        },
        onChangeInputFile: props => () => event => {
            props.setImage(URL.createObjectURL(event.target.files[0]))
        },
        handleShowImage: props => () => {
            if (props.image === undefined) {
                return(
                    <center>
                        <ImgUser src='https://www.img.in.th/images/42b597219a8880bf0c8769a8eb93e38f.png' size='mini'/>
                        <TextImg>ขนาด 177 x 181<br/>คลิกเพื่อเพิ่มรูป</TextImg>
                    </center>
                )
            }
            else{
                return( <img src={props.image} style={{ width : '177px' , height : '181px' }}/> )
            }
        },
        saveThisPage: props => () => event => {
            Router.push('/ApplyJob/Address_information')
        },
        onChangeSalary: props => () => event => {
            localStorage.setItem('salary' , JSON.stringify(event.target.value))   
            props.setSalary(event.target.value)
        },
        handleFnameThai: props => () => event => {
            localStorage.setItem('fname_thai' , JSON.stringify(event.target.value))   
            props.setFname_thai(event.target.value)
        },
        handleLnameThai: props => () => event => {
            localStorage.setItem('lname_thai' , JSON.stringify(event.target.value))   
            props.setLname_thai(event.target.value)
        },
        handleFnameEng: props => () => event => {
            localStorage.setItem('fname_eng' , JSON.stringify(event.target.value))   
            props.setFname_eng(event.target.value)
        },
        handleLnameEng: props => () => event => {
            localStorage.setItem('lname_eng' , JSON.stringify(event.target.value))   
            props.setLname_eng(event.target.value)
        },
        handleEmail: props => () => event => {
            localStorage.setItem('email' , JSON.stringify(event.target.value))   
            props.setEmail(event.target.value)
        },
        handleFacebook: props => () => event => {
            localStorage.setItem('facebook' , JSON.stringify(event.target.value))   
            props.setFacebook(event.target.value)
        },
        handleIdcard: props => () => event => {
            localStorage.setItem('idcard' , JSON.stringify(event.target.value))   
            props.setIdcard(event.target.value)            
        },
        handleTel: props => () => event => {
            localStorage.setItem('tel' , JSON.stringify(event.target.value))   
            props.setTel(event.target.value)            
        },
        handleBirthday: props => () => event => {
            localStorage.setItem('birthday' , JSON.stringify(event.target.value))   
            props.setBirthday(event.target.value)
        },
        handleAge: props => () => event => {
            localStorage.setItem('age' , JSON.stringify(event.target.value))   
            props.setAge(event.target.value)
        },
        handleChangeSex: props => (sex) => event => {
            localStorage.setItem('sex' , JSON.stringify(sex))   
            props.setSex(sex)            
        },
        handleWeight: props => () => event => {
            localStorage.setItem('weight' , JSON.stringify(event.target.value))   
            props.setWeight(event.target.value)           
        },
        handleHeight: props => () => event => {
            localStorage.setItem('height' , JSON.stringify(event.target.value))   
            props.setHeight(event.target.value)           
        },
        handleEthnicity: props => () => event => {
            localStorage.setItem('ethnicity' , JSON.stringify(event.target.value))   
            props.setEthnicity(event.target.value)           
        },
        handleNationality: props => () => event => {
            localStorage.setItem('nationality' , JSON.stringify(event.target.value))   
            props.setNationality(event.target.value)           
        },
        handleReligion: props => () => event => {
            localStorage.setItem('religion' , JSON.stringify(event.target.value))   
            props.setReligion(event.target.value)           
        },
        handleDadName: props => () => event => {
            localStorage.setItem('dad_name' , JSON.stringify(event.target.value))   
            props.setDad_name(event.target.value)           
        },
        handleDadCareer: props => () => event => {
            localStorage.setItem('dad_career' , JSON.stringify(event.target.value))   
            props.setDad_career(event.target.value)           
        },
        handleMomName: props => () => event => {
            localStorage.setItem('mom_name' , JSON.stringify(event.target.value))   
            props.setMom_name(event.target.value)           
        },
        handleMomCareer: props => () => event => {
            localStorage.setItem('mom_career' , JSON.stringify(event.target.value))   
            props.setMom_career(event.target.value)           
        },
        handleBrethren: props => () => event => {
            localStorage.setItem('brethren' , JSON.stringify(event.target.value))   
            props.setBrethren(event.target.value)  
        },
        handleSequence: props => () => event => {
            localStorage.setItem('sequence' , JSON.stringify(event.target.value))   
            props.setSequence(event.target.value)  
        },

        handleChangeStatus: props =>(status) => event =>{
            props.setStatus(status)
        },
        handleChangeSoldier: props =>(soldier)=> event =>{
            props.setSoldier(soldier)
        },
        handleChangeCongenitalDisease: props => (congenitalDisease) => event =>{
            props.SetCongenitalDisease(congenitalDisease)
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
                {stepApplyJobInfomation('ข้อมูลส่วนบุคคล','ที่อยู่ผู้สมัคร','ประวัติการศึกษา','ความสามรถพิเศษ','ประสบการณ์ทำงาน')}
            <br/>
             <center>
                <FontInfo>ข้อมูลส่วนบุคคลของผู้สมัคร</FontInfo>
                <MgIcon name='window minimize outline' size='big'/>
            </center>
            <br/>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <BoxImg onClick={props.handleFileSelect(props.onChangeInputFile())}>
                        {props.handleShowImage()}
                    </BoxImg>
                </Grid.Column>
                <Grid.Column>
                    {inputGridePosition('ตำแหน่งงานที่รับสมัคร :','กรุณากรอกตำแหน่งงงานที่รับสมัคร', props.url.query.position )}<br/><br/>
                    {input2Gride('เงินเดือนที่ต้องการ :','กรุณากรอกเงินเดือนที่ต้องการ',props.onChangeSalary() , 'number' , props.salary)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ชื่อ (ภาษาไทย) :','กรุณากรอกชื่อ (ภาษาไทย)',props.handleFnameThai() , 'text' , props.fname_thai)}</MgGridLeft>
                </Grid.Column>  
                <Grid.Column>
                    {input2Gride('นามสกุล (ภาษาไทย) :','กรุณากรอกนามสกุล (ภาษาไทย)' , props.handleLnameThai() , 'text' , props.lname_thai)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ชื่อ (ภาษาอังกฤษ) :','กรุณากรอกชื่อ (ภาษาอังกฤษ)' , props.handleFnameEng() , 'text' , props.fname_eng)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('นามสกุล (ภาษาอังกฤษ) :','กรุณากรอกนามสกุล (ภาษาอังกฤษ)' , props.handleLnameEng() , 'text' , props.lname_eng)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('อีเมล :','กรุณากรอกอีเมล' , props.handleEmail() , 'email' , props.email )}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('เฟสบุ๊ค :','กรุณากรอกเฟสบุ๊ค' , props.handleFacebook() , 'text' , props.facebook )}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('เลขบัตรประจำตัวประชาชน :','กรุณากรอกเลขบัตรประจำตัวประชาชน' , props.handleIdcard() , 'number' , props.idcard)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('เบอร์โทรติดต่อ :','กรุณากรอกเบอร์โทรติดต่อ' , props.handleTel() , 'number' , props.tel)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('วัน/เดือน/ปีเกิด :','กรุณาเลือกวัน/เดือน/ปีเกิด' , props.handleBirthday() , 'date' , props.birthday)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            {input2Gride('อายุ (ปี) :','กรุณากรอกอายุ' , props.handleAge() , 'number' , props.age )}
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
                            <WidthWeight>{input4GrideMG('น้ำหนัก (กก.) :','กรุณากรอกน้ำหนัก' , props.handleWeight() , 'number' , props.weight)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('ส่วนสูง (ซม.) :','กรุณากรอกส่วนสูง' ,  props.handleHeight() , 'number' , props.height)}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input2Gride('เชื้อชาติ :','กรุณากรอกเชื้อชาติ' , props.handleEthnicity() , 'text' , props.ethnicity)}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <Mg4Gridnationality>{input2Gride('สัญชาติ :','กรุณากรอกสัญชาติ' , props.handleNationality() , 'text' , props.nationality)}</Mg4Gridnationality>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ศาสนา :','กรุณากรอกศาสนา' , props.handleReligion() , 'text' , props.religion)}</MgGridLeft>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ชื่อ-นามสกุล บิดา :','กรุณากรอกชื่อ-นามสกุลบิดา' , props.handleDadName() , 'text' , props.dad_name)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('อาชีพ :','กรุณากรอกอาชีพ' , props.handleDadCareer() , 'text' , props.dad_career)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ชื่อ-นามสกุล มารดา :','กรุณากรอกชื่อ-นามสกุลมารดา' , props.handleMomName() , 'text' , props.mom_name)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('อาชีพ :','กรุณากรอกอาชีพ' , props.handleMomCareer() , 'text' , props.mom_career)}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('จำนวนพี่น้อง (คน) :','กรุณากรอกจำนวนพี่น้อง' , props.handleBrethren() , 'number' , props.brethren)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('คุณเป็นบุตรคนที่ :','กรุณากรอกข้อมูล' , props.handleSequence() , 'number' , props.sequence)}
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
                                    name='single'
                                    value='single'
                                    checked={props.status === 'single'}
                                    onChange={props.handleChangeStatus('single')}
                                />
                                <MgRedio
                                    label='สมรส'
                                    name='married'
                                    value='married'
                                    checked={props.status === 'married'}
                                    onChange={props.handleChangeStatus('married')}
                                />
                                <MgRedio
                                    label='หย่า'
                                    name='divorce'
                                    value='divorce'
                                    checked={props.status === 'divorce'}
                                    onChange={props.handleChangeStatus('divorce')}
                                />
                                <MgRedio
                                    label='หม้าย'
                                    name='widow'
                                    value='widow'
                                    checked={props.status === 'widow'}
                                    onChange={props.handleChangeStatus('widow')}
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
                                การรับราชการทหาร :
                            </SizeFontRadio>
                            <Form.Field>
                                <MgRedio
                                    label='รับราชการทหารแล้ว'
                                    name='militaryService'
                                    value='militaryService'
                                    checked={props.soldier === 'militaryservice'}
                                    onChange={props.handleChangeSoldier('militaryservice')}
                                />
                                <MgRedio
                                    label='ได้รับการผ่อนผัน'
                                    name='receivedWaiver'
                                    value='receivedWaiver'
                                    checked={props.soldier === 'receivedWaiver'}
                                    onChange={props.handleChangeSoldier('receivedWaiver')}
                                />
                                <MgRedio
                                    label='จบ ร.ด.'
                                    name='graduate'
                                    value='graduate'
                                    checked={props.soldier === 'graduate'}
                                    onChange={props.handleChangeSoldier('graduate')}
                                />
                                <MgRedio
                                    label='จับใบดำ'
                                    name='blackLeaf'
                                    value='blackLeaf'
                                    checked={props.soldier === 'blackLeaf'}
                                    onChange={props.handleChangeSoldier('blackLeaf')}
                                />
                                <MgRedio
                                    label='ได้รับการยกเว้น'
                                    name='except'
                                    value='except'
                                    checked={props.soldier === 'except'}
                                    onChange={props.handleChangeSoldier('except')}
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
                                    value='yes'
                                    checked={props.congenitalDisease === 'yes'}
                                    onChange={props.handleChangeCongenitalDisease('yes')}
                                />
                                <MgRedio
                                    label=' ไม่มี'
                                    name='no'
                                    value='no'
                                    checked={props.congenitalDisease === 'no'}
                                    onChange={props.handleChangeCongenitalDisease('no')}
                                />
                            </Form.Field>
                        </Form>
                    </MgRedioStatus>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('บุคคลที่ติดต่อกรณีเร่งด่วน :','กรุณากรอกบุคคลที่ติดต่อกรณีเร่งด่วน')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('ความสัมพันธ์ :','กรุณากรอกความสัมพันธ์')}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('เบอร์โทรศัพท์ :','กรุณากรอกเบอร์โทร')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('ทราบการรับสมัครจาก :','กรุณากรอกข้อมูล')}
                </Grid.Column>
            </Grid>
            <br/>
            <center>
                <FontInfo>แจ้งผู้ที่อาจจะอ้างอิงหรือสอบถามได้ ซึ่งมิใช่ญาติ หรืออดีตผู้ว่าจ้าง</FontInfo>
                <MgIcon name='window minimize outline' size='big'/>
            </center>
            <br/>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ชื่อ-นามสกุล :','กรุณากรอกชื่อ-นามสกุล')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('ที่อยู่ :','กรุณากรอกที่อยู่')}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('เบอร์โทรศัพท์ :','กรุณากรอกเบอร์โทรศัพท์')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('อาชีพ :','กรุณากรอกอาชีพ')}
                </Grid.Column>
            </Grid>
            <br/><br/>
                <MgBTNOrange>
                    {btn_orange('ถัดไป','https://www.img.in.th/images/c0dce936813662e607bd5798e68fd712.png', props.saveThisPage())}
                </MgBTNOrange>
            <br/><br/>
        </Box>
        <Divider hidden />
    </Container>    
)