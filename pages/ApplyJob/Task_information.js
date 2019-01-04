import React from 'react'
import { withLayout } from '../../hoc'
import { compose, withProps , withState , withHandlers } from 'recompose'
import styled from 'styled-components'
import { Container , Icon , Divider , Grid , Checkbox , Button , Header , Label , Modal , Image } from 'semantic-ui-react'
import { Breadcrumb3Page } from '../../components/Breadcrumb'
import theme from '../../theme/default'
import { input2GrideGrideMG , input2Gride , InputTextArea , InputTextAreaMini } from '../../components/Input'
import { StepApplyJobTask } from '../../components/Step'
import Link from 'next/link'

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
    withState('option', 'setOption', [{ key: 'f', text: 'พอใช้', value: 'Fair' }, { key: 'g', text: 'ดี', value: 'goog' } , { key: 'vg', text: 'ดีมาก', value: 'vary good' }]),
    withState('motorcycles', 'setMotorcycles'),
    withState('car','setCar'),
    withState('outer','setOuter'),
    withProps({
        pageTitle: 'Task information'
    }),
    withLayout,
    withHandlers({
        handleChangeMotorcycles: props => (motorcycles) => event => {
            props.setMotorcycles(motorcycles)
        },
        handleChangeCar: props => (car) => event =>{
            props.setCar(car)
        },
        handleChangeOuter: props => (outer) => event => {
            props.setOuter(outer)
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
                    <MgGridLeft>{input2GrideGrideMG('ที่ทำงานปัจจุบัน :','กรุณากรอกที่ทำงานปัจจุบัน')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('ตำแหน่ง :','กรุณากรอกตำแหน่ง')}
                </Grid.Column>
            </Grid>
            <MgTextArea>
                {InputTextArea('ลักษณะงานที่รับผิดชอบ :', 'กรุณากรอกลักษณะงานที่รับผิดชอบ')}
            </MgTextArea>
            <br/>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ระยะเวลาเริ่มต้นการทำงาน :','เลือกระยะเวลาเริ่มต้นการทำงาน')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('ระยะเวลาสิ้นสุดการทำงาน :','เลือกระยะเวลาสิ้นสุดการทำงาน')}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('เงินเดือนสุดท้ายที่ได้รับ (บาท) :','กรุณากรอกเงินเดือนสุดท้ายที่ได้รับ')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('รายได้อื่นๆ ที่นอกเหนือจากเงินเดือนพื้นฐาน :','กรุณากรอกรายได้อื่นๆ ที่นอกเหนือจากเงินเดือน')}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('รวมรายได้สุดธิต่อเดือน (บาท) :','กรุณากรอกรายได้สุทธิต่อเดือน')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('สวัสดิการอื่นๆ ของบริษัท :','กรุณากรอกสวัสดิการอื่นๆ ของบริษัท')}
                </Grid.Column>
            </Grid>
            <MgTextArea>
                {InputTextAreaMini('สาเหตุที่ลาออก :', 'กรุณากรอกรายได้สุทธิต่อเดือน')}
            </MgTextArea>
            <br/>
            <center>
                <FontInfo><MgIconBlack name='window minimize outline' size='big'/></FontInfo>
            </center>
            <br/>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('บริษัท :','กรุณากรอกบริษัท')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('ตำแหน่ง :','กรุณากรอกตำแหน่ง')}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('เงินเดือนสุดท้าย :','กรุณากรอกเงินเดือนสุดท้าย')}</MgGridLeft>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ระยะเวลาเริ่มต้นการทำงานตั้งแต่ :','เลือกระยะเวลา')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('ระยะเวลาสิ้นสุดการทำงานตั้งแต่ :','กรุณากรอกตำแหน่ง')}
                </Grid.Column>
            </Grid>
            <MgTextArea>
                {InputTextAreaMini('สาเหตุที่ลาออก :', 'กรุณากรอกรายได้สุทธิต่อเดือน')}
            </MgTextArea>
            <br/>
            <center>
                <FontInfo><MgIconBlack name='window minimize outline' size='big'/></FontInfo>
            </center>
            <br/>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('บริษัท :','กรุณากรอกบริษัท')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('ตำแหน่ง :','กรุณากรอกตำแหน่ง')}
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('เงินเดือนสุดท้าย :','กรุณากรอกเงินเดือนสุดท้าย')}</MgGridLeft>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('ระยะเวลาเริ่มต้นการทำงานตั้งแต่ :','เลือกระยะเวลา')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('ระยะเวลาสิ้นสุดการทำงานตั้งแต่ :','กรุณากรอกตำแหน่ง')}
                </Grid.Column>
            </Grid>
            <MgTextArea>
                {InputTextAreaMini('สาเหตุที่ลาออก :', 'กรุณากรอกรายได้สุทธิต่อเดือน')}
            </MgTextArea>
            <br/><br/>
            <BoxGray>
                <MgChackbox label='ข้าพเจ้าขอรับรองว่า ข้อความที่ได้กล่าวมาข้างต้นทั้งหมดนี้เป็นความจริงทุกประการ หากสำนักงานฯ 
                ตรวจพบภายหลังว่าข้อมูลไม่ตรงกับความเป็นจริง สำนักงานฯ สามารถยกเลิกสิทธิการเป็นเจ้าหน้าที่ของข้าพเจ้าโดยชอบธรรม' />
            </BoxGray>
            <br/><br/>
                <MgBTNOrange>
                        <div>
                            <Link href='/ApplyJob/Ability_information'>
                                <BtnBack basic color='orange'>
                                    ย้อนกลับ
                                </BtnBack>
                            </Link>&nbsp;
                            <Modal trigger={
                                    <Button as='div' labelPosition='right'>
                                        <BtnSuccess>
                                            ยืนยันการสมัคร
                                        </BtnSuccess>
                                        <Colorlabel as='a' icon>
                                            <Image src='https://www.img.in.th/images/4ecc343bc0f151339a458ed57dfe5618.png' size='small' />
                                        </Colorlabel>
                                    </Button>
                                } size='tiny' closeIcon>
                                <Modal.Content image>
                                    <Modal.Description>
                                        <center>
                                            <br/>
                                            <Image size='medium' src='https://www.img.in.th/images/89c1a7fb5aeca8818567de71964a74f0.png' size='tiny' />
                                            <TextModelTaskSuccess>สมัครงานเรียบร้อย</TextModelTaskSuccess>
                                            <Link>
                                                <ButtonClick>ดาวน์โหลดเอกสารใบสมัคร</ButtonClick>
                                            </Link>
                                            <br/><br/>
                                        </center>
                                    </Modal.Description>
                                </Modal.Content>
                            </Modal>
                        </div>
                </MgBTNOrange>
            <br/><br/>
        </Box>
        <Divider hidden />
    </Container>    
)