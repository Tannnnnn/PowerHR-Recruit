import React from 'react'
import { withLayout } from '../../hoc'
import { compose, withProps , withState , withHandlers , lifecycle } from 'recompose'
import styled from 'styled-components'
import { Container , Step , Icon , Divider , Grid , Image , Form , Radio } from 'semantic-ui-react'
import {Breadcrumb3Page} from '../../components/Breadcrumb'
import Link from 'next/link'
import theme from '../../theme/default'
import {input2GrideGrideMG , input2Gride , redio2 , input4GrideMG , input4Gride , redio4 , redio5 , inputGridePosition } from '../../components/Input'
import {btn_orange} from '../../components/Button'

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
    withState('sex','setSex'),
    withState('salary','setSalary'),
    withState('image' , 'setImage' , undefined),
    withProps({
        pageTitle: 'Personal information'
    }),
    withLayout,
    lifecycle({
        async componentWillMount(){
            localStorage.getItem('salary') && this.props.setSalary(JSON.parse(localStorage.getItem('salary')))
        },
        async componentDidMount(){

        }
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
        onChangeSalary: props => () => event => {
            console.log(event.target.value , event.keyCode);
            props.setSalary(event.target.value)
        },
        saveThisPage: props => () => event => {
            localStorage.setItem('salary' , JSON.stringify(props.salary))
        }
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
                {props.handleShowStep()}
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
                    <MgGridLeft>{input2GrideGrideMG('ชื่อ (ภาษาไทย) :','กรุณากรอกชื่อ (ภาษาไทย)')}</MgGridLeft>
                </Grid.Column>  
                <Grid.Column>
                    {input2Gride('นามสกุล (ภาษาไทย) :','กรุณากรอกนามสกุล (ภาษาไทย)')}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ชื่อ (ภาษาอังกฤษ) :','กรุณากรอกชื่อ (ภาษาอังกฤษ)')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('นามสกุล (ภาษาอังกฤษ) :','กรุณากรอกนามสกุล (ภาษาอังกฤษ)')}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('อีเมล :','กรุณากรอกอีเมล')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('เฟสบุ๊ค :','กรุณากรอกเฟสบุ๊ค')}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('เลขบัตรประจำตัวประชาชน :','กรุณากรอกเลขบัตรประจำตัวประชาชน')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('เบอร์โทรติดต่อ :','กรุณากรอกเบอร์โทรติดต่อ')}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('วัน/เดือน/ปีเกิด :','กรุณาเลือกวัน/เดือน/ปีเกิด')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            {input2Gride('อายุ (ปี) :','กรุณากรอกอายุ')}
                        </Grid.Column>
                        <Grid.Column>
                            <RadioSex> 
                                <Form>
                                    <SizeFontRadio>
                                        เพศ
                                    </SizeFontRadio>
                                    <Form.Field>
                                        <MgRedio
                                            label='ชาย'
                                            name='male'
                                            value='male'
                                            checked={props.sex === 'male'}
                                            onChange={props.handleChange('male')}
                                        />
                                        <MgRedio
                                            label='หญิง'
                                            name='female'
                                            value='female'
                                            checked={props.sex === 'female'}
                                            onChange={props.handleChange('female')}
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
                            <WidthWeight>{input4GrideMG('น้ำหนัก (กก.) :','กรุณากรอกน้ำหนัก')}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('ส่วนสูง (ซม.) :','กรุณากรอกส่วนสูง')}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input2Gride('เชื้อชาติ :','กรุณากรอกเชื้อชาติ')}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <Mg4Gridnationality>{input2Gride('สัญชาติ :','กรุณากรอกสัญชาติ')}</Mg4Gridnationality>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ศาสนา :','กรุณากรอกศาสนา')}</MgGridLeft>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ชื่อ-นามสกุล บิดา :','กรุณากรอกชื่อ-นามสกุลบิดา')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('อาชีพ :','กรุณากรอกอาชีพ')}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ชื่อ-นามสกุล มารดา :','กรุณากรอกชื่อ-นามสกุลมารดา')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('อาชีพ :','กรุณากรอกอาชีพ')}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('จำนวนพี่น้อง (คน) :','กรุณากรอกจำนวนพี่น้อง')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('บุตรคนที่ :','กรุณากรอกจำนวนบุตร')}
                </Grid.Column>
            </Grid>
            <Grid columns={1} padded='horizontally'>
                <Grid.Column>
                    <MgRedioStatus>{redio4('สถานภาพการสมรส :','โสด','สมรส','หย่า' , 'หม้าย')}</MgRedioStatus>
                </Grid.Column>
            </Grid>
            <Grid columns={1} padded='horizontally'>
                <Grid.Column>
                    <MgRedioStatus>{redio5('การรับราชการทหาร :','รับราชการทหารแล้ว','สมรส','จบ ร.ด.' , 'จับใบดำ' , 'ได้รับการยกเว้น')}</MgRedioStatus>
                </Grid.Column>
            </Grid>
            <Grid columns={1} padded='horizontally'>
                <Grid.Column>
                    <MgRedioStatus>{redio2('ท่านมีโรคประจำตัวหรือไม่ :','มี','ไม่มี')}</MgRedioStatus>
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
                <MgBTNOrange>{btn_orange('ถัดไป','https://www.img.in.th/images/c0dce936813662e607bd5798e68fd712.png' , props.saveThisPage())}</MgBTNOrange>
            <br/><br/>
        </Box>
        <Divider hidden />
    </Container>
)