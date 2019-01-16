import React from 'react'
import { withLayout } from '../../hoc'
import { compose, withProps , withState , withHandlers , lifecycle } from 'recompose'
import styled from 'styled-components'
import { Container , Radio  , Icon , Divider , Grid , Form } from 'semantic-ui-react'
import {Breadcrumb3Page} from '../../components/Breadcrumb'
import theme from '../../theme/default'
import {input2GrideGrideMG , input2Gride , InputTextArea} from '../../components/Input'
import {btn_NextBack} from '../../components/Button'
import {StepApplyJobAbility} from '../../components/Step'
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

const FontRadioCar = styled.p`
    font-size: 16px !important;
    font-weight: 600 !important;
`;

const enhance = compose(
    withState('option', 'setOption', [{ key: 'พอใช้', text: 'พอใช้', value: 'พอใช้' }, { key: 'ดี', text: 'ดี', value: 'ดี' } , { key: 'ดีมาก', text: 'ดีมาก', value: 'ดีมาก' }]),
    withState('motorcycles', 'setMotorcycles'),
    withState('car','setCar'),
    withState('outer','setOuter'),
    withState('english','setEnglish'),
    withState('english_speak','setEnglish_speak'),
    withState('english_read','setEnglish_read'),
    withState('english_writh','setEnglish_writh'),
    withState('thaiprint','setThaiprint'),
    withState('engprint','setEngprint'),
    withState('computerSkill','setComputerSkill'),
    withState('positionEng','setPositionEng'),
    withProps({
        pageTitle: 'Ability information'
    }),
    withLayout,
    lifecycle({
        async componentDidMount(){
            window.scrollTo(0, 0)
            if (localStorage.Ability_page) {
                this.props.setMotorcycles(JSON.parse(localStorage.getItem('Ability_page')).motorcycles)            
                this.props.setCar(JSON.parse(localStorage.getItem('Ability_page')).car)            
                this.props.setOuter(JSON.parse(localStorage.getItem('Ability_page')).outer)            
                this.props.setEnglish(JSON.parse(localStorage.getItem('Ability_page')).english)            
                this.props.setEnglish_speak(JSON.parse(localStorage.getItem('Ability_page')).english_speak)            
                this.props.setEnglish_read(JSON.parse(localStorage.getItem('Ability_page')).english_read)            
                this.props.setEnglish_writh(JSON.parse(localStorage.getItem('Ability_page')).english_writh)            
                this.props.setThaiprint(JSON.parse(localStorage.getItem('Ability_page')).thaiprint)            
                this.props.setEngprint(JSON.parse(localStorage.getItem('Ability_page')).engprint)            
                this.props.setComputerSkill(JSON.parse(localStorage.getItem('Ability_page')).computerSkill) 
            }
        }
    }),
    withHandlers({
        handleChangeMotorcycles: props => (motorcycles) => event => {
            props.setMotorcycles(motorcycles)
        },
        handleChangeCar: props => (car) => event =>{
            props.setCar(car)
        },
        handleChangeOuter: props => (outer) => event => {
            props.setOuter(outer)
        },
        handleEnglishLanguage: props => (e , {value}) => { 
            props.setEnglish(value)            
        },
        handleEnglishSpeak: props => (e , {value}) => {            
            props.setEnglish_speak(value)
        },
        handleEnglishRead: props => (e , {value}) => {
            props.setEnglish_read(value)
        },
        handleEnglishWrith: props => (e , {value}) => {
            props.setEnglish_writh(value)
        },
        handleThaiLanguagePrint: props => () => event => {
            props.setThaiprint(event.target.value)
        },
        handleEnglishLanguagePrint: props => () => event => {
            props.setEngprint(event.target.value)
        },
        handleComputerSkill: props => () => event => {
            props.setComputerSkill(event.target.value)
        },

        saveThisPageNext: props => () => event => {
            localStorage.setItem('Ability_page', JSON.stringify({
                'motorcycles' : props.motorcycles ,
                'car' : props.car,
                'outer' : props.outer,
                'english' : props.english,
                'english_speak' : props.english_speak,
                'english_read' : props.english_read,
                'english_writh' : props.english_writh,
                'thaiprint' : props.thaiprint,
                'engprint' : props.engprint,
                'computerSkill' : props.computerSkill,
            }))            
            Router.push({ pathname : '/ApplyJob/Task_information' , query : { position : props.url.query.position }})
        },
        saveThisPagePrev: props => () => event => {
            localStorage.setItem('Ability_page', JSON.stringify({
                'motorcycles' : props.motorcycles ,
                'car' : props.car,
                'outer' : props.outer,
                'english' : props.english,
                'english_speak' : props.english_speak,
                'english_read' : props.english_read,
                'english_writh' : props.english_writh,
                'thaiprint' : props.thaiprint,
                'engprint' : props.engprint,
                'computerSkill' : props.computerSkill,
            }))            
            Router.push({ pathname : '/ApplyJob/School_information' , query : { position : props.url.query.position }})
        },
    })
)

export default enhance( (props)=> 
    <Container>
        {Breadcrumb3Page('ตำแหน่งเปิดรับ', `รายละเอียดตำแหน่ง ${props.url.query.position}` , 'สมัครงาน' , '../index' , '../JobDetail/JobDetail' )}
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
                                options={props.option} 
                                placeholder='กรุณาเลือกระดับความรู้ด้านภาษาอังกฤษ' 
                                onChange={props.handleEnglishLanguage}
                                value={props.english}
                            />
                        </Form.Group>
                    </MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    <SizeSelectFormRight>
                        <Form.Group widths='equal'>
                            <TextSelect>ความรู้ด้านภาษาอังกฤษ (การพูด) :</TextSelect>
                            <SizeFontSelect 
                                fluid 
                                options={props.option} 
                                placeholder='เลือกระดับความรู้ด้านภาษาอังกฤษ (การพูด)' 
                                onChange={props.handleEnglishSpeak}
                                value={props.english_speak}
                            />
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
                                options={props.option} 
                                placeholder='กรุณาเลือกระดับความรู้ด้านภาษาอังกฤษ (การอ่าน)' 
                                onChange={props.handleEnglishRead}
                                value={props.english_read}
                            />
                        </Form.Group>
                    </MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    <SizeSelectFormRight>
                        <Form.Group widths='equal'>
                            <TextSelect>ความรู้ด้านภาษาอังกฤษ (การเขียน) :</TextSelect>
                            <SizeFontSelect 
                                fluid 
                                options={props.option} 
                                placeholder='เลือกระดับความรู้ด้านภาษาอังกฤษ (การเขียน)' 
                                onChange={props.handleEnglishWrith}
                                value={props.english_writh}
                            />
                        </Form.Group>
                    </SizeSelectFormRight>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('การพิมพ์ดีดภาษาไทย (คำ/นาที) :','กรุณากรอกจำนวนคำพิมพ์ดีดภาษาไทย' , props.handleThaiLanguagePrint() , 'number' , props.thaiprint)}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('จำนวนคำพิมพ์ดีดภาษาอังกฤษ (คำ/นาที) :','กรุณากรอกจำนวนคำพิมพ์ดีดภาษาอังกฤษ' , props.handleEnglishLanguagePrint() , 'number' , props.engprint)}
                </Grid.Column>
            </Grid>
            <MgTextArea>
                {InputTextArea('ความสามารถด้านคอมพิวเตอร์ : ', 'กรุณากรอกความสามาถด้านคอมพิวเตอร์' , props.handleComputerSkill() , props.computerSkill)}
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
                                value='มี'
                                checked={props.motorcycles === 'มี'}
                                onChange={props.handleChangeMotorcycles('มี')}
                            />
                            <MgRedio
                                label='ไม่มี'
                                name='notHaveMotorcycles'
                                value='ไม่มี'
                                checked={props.motorcycles === 'ไม่มี'}
                                onChange={props.handleChangeMotorcycles('ไม่มี')}
                            />
                        </Form.Field>
                    </SizeFontRadio>
                    <SizeFontRadio>
                         <Form.Field>
                            ใบอนุญาติขับขี่รถยนต์ :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <MgRedio
                                label='มี'
                                name='haveCar'
                                value='มี'
                                checked={props.car === 'มี'}
                                onChange={props.handleChangeCar('มี')}
                            />
                            <MgRedio
                                label='ไม่มี'
                                name='notHaveCar'
                                value='notHaveCar'
                                checked={props.car === 'ไม่มี'}
                                onChange={props.handleChangeCar('ไม่มี')}
                            />
                        </Form.Field>
                    </SizeFontRadio>
                    <SizeFontRadio>
                         <Form.Field>
                            สามารถออกปฏิบัติงานนอกพื้นที่ :
                            <MgRedio
                                label='ได้'
                                name='haveOuter'
                                value='ได้'
                                checked={props.outer === 'ได้'}
                                onChange={props.handleChangeOuter ('ได้')}
                            />
                            <MgRedio
                                label='ไม่ได้'
                                name='notHaveOuter'
                                value='ไม่ได้'
                                checked={props.outer === 'ไม่ได้'}
                                onChange={props.handleChangeOuter('ไม่ได้')}
                            />
                        </Form.Field>
                    </SizeFontRadio>
                </Form>
            </MgTextArea>
            <br/><br/>
                <MgBTNOrange>
                    {btn_NextBack('ย้อนกลับ', 'ถัดไป' ,'https://www.img.in.th/images/c0dce936813662e607bd5798e68fd712.png' , props.saveThisPageNext() , props.saveThisPagePrev())}
                </MgBTNOrange>
            <br/><br/>
        </Box>
        <Divider hidden />
    </Container>    
)