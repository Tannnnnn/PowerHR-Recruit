import React from 'react'
import { withLayout } from '../../hoc'
import { compose, withProps , withState , withHandlers} from 'recompose'
import styled from 'styled-components'
import { Container , Step , Icon , Divider , Grid , Checkbox } from 'semantic-ui-react'
import {Breadcrumb3Page} from '../../components/Breadcrumb'
import Link from 'next/link'
import theme from '../../theme/default'
import {input2GrideGrideMG , input2Gride , redio2 , input4GrideMG , input4Gride} from '../../components/Input'
import {btn_orange} from '../../components/Button'
import {stepApplyJobAddress} from '../../components/Step'

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
    margin-left: 80%;
`;

const enhance = compose(
    withState(),
    withProps({
        pageTitle: 'Address information'
    }),
    withLayout,
    
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
                            <WidthWeight>{input4GrideMG('บ้านเลขที่ :','กรุณากรอกบ้านเลขที่')}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('หมู่ที่ :','กรุณากรอกหมู่')}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input2Gride('ซอย :','กรุณากรอกซอย')}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <Mg4Gridnationality>{input2Gride('ถนน :','กรุณากรอกถนน')}</Mg4Gridnationality>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input4GrideMG('ตำบล/แขวง :','กรุณากรอกตำบล/แขวง')}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('อำเภอ/เขต :','กรุณากรอกอำเภอ/เขต')}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input2Gride('จังหวัด :','กรุณากรอกจังหวัด')}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <Mg4Gridnationality>{input2Gride('รหัสไปรษณี :','กรุณากรอกรหัสไปรษณี')}</Mg4Gridnationality>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('เบอร์โทรศัพท์บ้าน :','กรุณากรอกเบอร์โทรศัพท์บ้าน')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('เบอร์มือถือ :','กรุณากรอกเบอร์มือถือ')}
                </Grid.Column>
            </Grid>
            <br/><br/>
                <FontInfoMG>ที่อยู่ปัจจุบัน</FontInfoMG>
            <br/>
            <MgChackbox label='ที่อยู่เดียวกับที่อยู่ทะเบียนบ้าน' />
            <br/><br/><br/>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input4GrideMG('บ้านเลขที่ :','กรุณากรอกบ้านเลขที่')}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('หมู่ที่ :','กรุณากรอกหมู่')}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input2Gride('ซอย :','กรุณากรอกซอย')}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <Mg4Gridnationality>{input2Gride('ถนน :','กรุณากรอกถนน')}</Mg4Gridnationality>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input4GrideMG('ตำบล/แขวง :','กรุณากรอกตำบล/แขวง')}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('อำเภอ/เขต :','กรุณากรอกอำเภอ/เขต')}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid columns={2}>
                    <Grid.Column>
                            <WidthWeight>{input2Gride('จังหวัด :','กรุณากรอกจังหวัด')}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <Mg4Gridnationality>{input2Gride('รหัสไปรษณี :','กรุณากรอกรหัสไปรษณี')}</Mg4Gridnationality>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <MgGridLeft>{input2GrideGrideMG('เบอร์โทรศัพท์บ้าน :','กรุณากรอกเบอร์โทรศัพท์บ้าน')}</MgGridLeft>
                </Grid.Column>
                <Grid.Column>
                    {input2Gride('เบอร์มือถือ :','กรุณากรอกเบอร์มือถือ')}
                </Grid.Column>
            </Grid>
            <br/><br/>
                <MgBTNOrange>
                    <Link href='/ApplyJob/School_information'>
                        {btn_orange('ถัดไป','https://www.img.in.th/images/c0dce936813662e607bd5798e68fd712.png')}
                    </Link>
                </MgBTNOrange>
            <br/><br/>
        </Box>
        <Divider hidden />
    </Container>    
)