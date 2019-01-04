import React from 'react'
import { withLayout } from '../../hoc'
import { compose, withProps , withState , withHandlers} from 'recompose'
import styled from 'styled-components'
import { Container , Radio  , Icon , Divider , Grid , Form } from 'semantic-ui-react'
import {Breadcrumb3Page} from '../../components/Breadcrumb'
import theme from '../../theme/default'
import {input2GrideGrideMG , input2Gride , InputTextArea} from '../../components/Input'
import {btn_NextBack} from '../../components/Button'
import {StepApplyJobAbility} from '../../components/Step'

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

const MgGridLeft = styled.div`
    margin-left: 28% !important;
`;

const MgBTNOrange = styled.div`
    margin-left: 70%;
`;

const TextSelect = styled.p`
    font-size: 16px !important;
    font-weight: 600 !important;
`;

const SizeFontSelect = styled(Form.Select)`
    font-size: 16px !important;
    margin-top: -3%;
`;

const SizeSelectFormRight = styled.div`
    width: 74%;
`;

const MgTextArea = styled.div`
    margin-left: 14.5% !important;
    margin-top: 2%;
    width: 72%;
`;

const MgRedio = styled(Radio)`
    margin-left: 1%;
    font-size: 16px !important;
`;

const SizeFontRadio = styled(Form.Field)`
    margin-left: 6% !important;
    font-size: 16px !important;
`;

const SizeFontRadioArea = styled(Form.Field)`
    margin-left: 6% !important;
    font-size: 16px !important;
`;

const FontRadioCar = styled.p`
    font-size: 16px !important;
    font-weight: 600 !important;
`;

const enhance = compose(
    withState('option', 'setOption', [{ key: 'f', text: 'พอใช้', value: 'Fair' }, { key: 'g', text: 'ดี', value: 'goog' } , { key: 'vg', text: 'ดีมาก', value: 'vary good' }]),
    withState('motorcycles', 'setMotorcycles'),
    withState('car','setCar'),
    withState('outer','setOuter'),
    withProps({
        pageTitle: 'Ability information'
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
                {StepApplyJobAbility('ข้อมูลส่วนบุคคล','ที่อยู่ผู้สมัคร','ประวัติการศึกษา','ความสามรถพิเศษ','ประสบการณ์ทำงาน')}
            <br/>
            <center>
                <FontInfo>ความสามารถพิเศษของผู้สมัคร</FontInfo>
                <MgIcon name='window minimize outline' size='big'/>
            </center>
            <br/>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>
                        <Form.Group widths='equal'>
                            <TextSelect>ความรู้ด้านภาษาอังกฤษ :</TextSelect>
                            <SizeFontSelect 
                                fluid 
                                options={props.option} placeholder='กรุณาเลือกระดับความรู้ด้านภาษาอังกฤษ' />
                        </Form.Group>
                    </MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    <SizeSelectFormRight>
                        <Form.Group widths='equal'>
                            <TextSelect>ความรู้ด้านภาษาอังกฤษ (การพูด) :</TextSelect>
                            <SizeFontSelect 
                                fluid 
                                options={props.option} placeholder='เลือกระดับความรู้ด้านภาษาอังกฤษ (การพูด)' />
                        </Form.Group>
                    </SizeSelectFormRight>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>
                        <Form.Group widths='equal'>
                            <TextSelect>ความรู้ด้านภาษาอังกฤษ (การอ่าน) :</TextSelect>
                            <SizeFontSelect 
                                fluid 
                                options={props.option} placeholder='กรุณาเลือกระดับความรู้ด้านภาษาอังกฤษ (การอ่าน)' />
                        </Form.Group>
                    </MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    <SizeSelectFormRight>
                        <Form.Group widths='equal'>
                            <TextSelect>ความรู้ด้านภาษาอังกฤษ (การเขียน) :</TextSelect>
                            <SizeFontSelect 
                                fluid 
                                options={props.option} placeholder='เลือกระดับความรู้ด้านภาษาอังกฤษ (การเขียน)' />
                        </Form.Group>
                    </SizeSelectFormRight>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('การพิมพ์ดีดภาษาไทย (คำ/นาที) :','กรุณากรอกจำนวนคำพิมพ์ดีดภาษาไทย')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('จำนวนคำพิมพ์ดีดภาษาอังกฤษ (คำ/นาที) :','กรุณากรอกจำนวนคำพิมพ์ดีดภาษาอังกฤษ')}
                </Grid.Column>
            </Grid>
            <MgTextArea>
                {InputTextArea('ความสามารถด้านคอมพิวเตอร์ : ', 'กรุณากรอกความสามาถด้านคอมพิวเตอร์')}
            </MgTextArea>
            <MgTextArea>
                <FontRadioCar>ความสามารถด้านการขับรถ :</FontRadioCar>
                <Form>
                    <SizeFontRadio>
                         <Form.Field>
                            ใบอนุญาติขับขี่รถจักรยายนต์ : &nbsp;&nbsp;
                            <MgRedio
                                label='มี'
                                name='haveMotorcycles'
                                value='haveMotorcycles'
                                checked={props.motorcycles === 'haveMotorcycles'}
                                onChange={props.handleChangeMotorcycles('haveMotorcycles')}
                            />
                            <MgRedio
                                label='ไม่มี'
                                name='notHaveMotorcycles'
                                value='notHaveMotorcycles'
                                checked={props.motorcycles === 'notHaveMotorcycles'}
                                onChange={props.handleChangeMotorcycles('notHaveMotorcycles')}
                            />
                        </Form.Field>
                    </SizeFontRadio>
                    <SizeFontRadio>
                         <Form.Field>
                            ใบอนุญาติขับขี่รถยนต์ :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <MgRedio
                                label='มี'
                                name='haveCar'
                                value='haveCar'
                                checked={props.car === 'haveCar'}
                                onChange={props.handleChangeCar('haveCar')}
                            />
                            <MgRedio
                                label='ไม่มี'
                                name='notHaveCar'
                                value='notHaveCar'
                                checked={props.car === 'notHaveCar'}
                                onChange={props.handleChangeCar('notHaveCar')}
                            />
                        </Form.Field>
                    </SizeFontRadio>
                    <SizeFontRadio>
                         <Form.Field>
                            สามารถออกปฏิบัติงานนอกพื้นที่ :
                            <MgRedio
                                label='ได้'
                                name='haveOuter'
                                value='haveOuter'
                                checked={props.outer === 'haveOuter'}
                                onChange={props.handleChangeOuter ('haveOuter')}
                            />
                            <MgRedio
                                label='ไม่ได้'
                                name='notHaveOuter'
                                value='notHaveOuter'
                                checked={props.outer === 'notHaveOuter'}
                                onChange={props.handleChangeOuter('notHaveOuter')}
                            />
                        </Form.Field>
                    </SizeFontRadio>
                </Form>
            </MgTextArea>
            <br/><br/>
                <MgBTNOrange>
                    {btn_NextBack('ย้อนกลับ', '/ApplyJob/School_information', 'ถัดไป' ,'https://www.img.in.th/images/c0dce936813662e607bd5798e68fd712.png' , '/ApplyJob/Task_information')}
                </MgBTNOrange>
            <br/><br/>
        </Box>
        <Divider hidden />
    </Container>    
)