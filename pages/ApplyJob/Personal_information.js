import React from 'react'
import { withLayout } from '../../hoc'
import { compose, withProps , withState , withHandlers} from 'recompose'
import styled from 'styled-components'
import { Container , Step , Icon , Divider , Grid , Image , Form , Radio } from 'semantic-ui-react'
import {Breadcrumb3Page} from '../../components/Breadcrumb'
import Link from 'next/link'
import theme from '../../theme/default'
import {input2GrideGrideMG , input2Gride , input4GrideMG , input4Gride } from '../../components/Input'
import {btn_orange} from '../../components/Button'
import {stepApplyJobInfomation} from '../../components/Step'

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
    withState('status','setStatus'),
    withState('soldier','setSoldier'),
    withState('congenitalDisease','SetCongenitalDisease'),
    withProps({
        pageTitle: 'Personal information'
    }),
    withLayout,
    withHandlers({
        handleChangeSex: props => (sex) => event => {
            props.setSex(sex)
        },
        handleChangeStatus: props =>(status) => event =>{
            props.setStatus(status)
        },
        handleChangeSoldier: props =>(soldier)=> event =>{
            props.setSoldier(soldier)
        },
        handleChangeCongenitalDisease: props => (congenitalDisease) => event =>{
            props.SetCongenitalDisease(congenitalDisease)
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
                {stepApplyJobInfomation('ข้อมูลส่วนบุคคล','ที่อยู่ผู้สมัคร','ประวัติการศึกษา','ความสามรถพิเศษ','ประสบการณ์ทำงาน')}
            <br/>
            <center>
                <FontInfo>ข้อมูลส่วนบุคคลของผู้สมัคร</FontInfo>
                <MgIcon name='window minimize outline' size='big'/>
            </center>
            <br/>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <BoxImg>
                        <center>
                            <ImgUser src='https://www.img.in.th/images/42b597219a8880bf0c8769a8eb93e38f.png' size='mini'/>
                            <TextImg>ขนาด 177*181<br/>คลิกเพื่อเพิ่มรูป</TextImg>
                        </center>
                    </BoxImg>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('ตำแหน่งงานที่รับสมัคร :','กรุณากรอกตำแหน่งงงานที่รับสมัคร')}<br/><br/>
                    {input2Gride('เงินเดือนที่ต้องการ :','กรุณากรอกเงินเดือนที่ต้องการ')}
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
                                        เพศ :
                                    </SizeFontRadio>
                                    <Form.Field>
                                        <MgRedio
                                            label='ชาย'
                                            name='male'
                                            value='male'
                                            checked={props.sex === 'male'}
                                            onChange={props.handleChangeSex('male')}
                                        />
                                        <MgRedio
                                            label='หญิง'
                                            name='female'
                                            value='female'
                                            checked={props.sex === 'female'}
                                            onChange={props.handleChangeSex('female')}
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
                    <Link href='/ApplyJob/Address_information'>
                        {btn_orange('ถัดไป','https://www.img.in.th/images/c0dce936813662e607bd5798e68fd712.png')}
                    </Link>
                </MgBTNOrange>
            <br/><br/>
        </Box>
        <Divider hidden />
    </Container>    
)