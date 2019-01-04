import React from 'react'
import { withLayout } from '../../hoc'
import { compose, withProps , withState , withHandlers} from 'recompose'
import styled from 'styled-components'
import { Container , Icon , Divider , Grid  } from 'semantic-ui-react'
import {Breadcrumb3Page} from '../../components/Breadcrumb'
import theme from '../../theme/default'
import { input2Gride , input4GrideMG , input4Gride} from '../../components/Input'
import {btn_NextBack} from '../../components/Button'
import {StepApplyJobSchool} from '../../components/Step'

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

const MgGridHeight = styled.div`
    margin-left: 6%;
    width: 100%;
`;

const WidthWeight = styled.div`
    width: 100%;
`;

const MgBTNOrange = styled.div`
    margin-left: 70%;
`;

const enhance = compose(
    withState(),
    withProps({
        pageTitle: 'School information'
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
                {StepApplyJobSchool('ข้อมูลส่วนบุคคล','ที่อยู่ผู้สมัคร','ประวัติการศึกษา','ความสามรถพิเศษ','ประสบการณ์ทำงาน')}
            <br/>
            <center>
                <FontInfo>ประวัติการศึกษาของผู้สมัคร</FontInfo>
                <MgIcon name='window minimize outline' size='big'/>
            </center>
            <br/>
                <FontInfoMG>ระดับการศึกษา : มัธยมศึกษาตอนปลาย/ปวช. </FontInfoMG>
            <br/>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input4GrideMG('ชื่อสถานศึกษา :','กรุณากรอกชื่อสถานศึกษา')}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('ประเทศ :','กรุณากรอกประเทศ')}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid.Column>
                        {input2Gride('สาขาวิชา :','กรุณากรอกสาขาวิชา')}
                    </Grid.Column>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input4GrideMG('เกรดเฉลี่ย :','กรุณากรอกเกรดเฉลี่ย')}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('ปีที่สำเร็จการศึกษา :','กรุณากรอกปีที่สำเร็จการศึกษา')}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <br/><br/>
                <FontInfoMG>ระดับการศึกษา : ปวส./ปวท./อนุปริญญา</FontInfoMG>
            <br/>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input4GrideMG('ชื่อสถานศึกษา :','กรุณากรอกชื่อสถานศึกษา')}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('ประเทศ :','กรุณากรอกประเทศ')}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid.Column>
                        {input2Gride('สาขาวิชา :','กรุณากรอกสาขาวิชา')}
                    </Grid.Column>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input4GrideMG('เกรดเฉลี่ย :','กรุณากรอกเกรดเฉลี่ย')}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('ปีที่สำเร็จการศึกษา :','กรุณากรอกปีที่สำเร็จการศึกษา')}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <br/><br/>
                <FontInfoMG>ระดับการศึกษา : ปริญาตรี</FontInfoMG>
            <br/>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input4GrideMG('ชื่อสถานศึกษา :','กรุณากรอกชื่อสถานศึกษา')}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('ประเทศ :','กรุณากรอกประเทศ')}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid.Column>
                        {input2Gride('สาขาวิชา :','กรุณากรอกสาขาวิชา')}
                    </Grid.Column>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input4GrideMG('เกรดเฉลี่ย :','กรุณากรอกเกรดเฉลี่ย')}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('ปีที่สำเร็จการศึกษา :','กรุณากรอกปีที่สำเร็จการศึกษา')}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <br/><br/>
                <FontInfoMG>ระดับการศึกษา : อื่นๆ</FontInfoMG>
            <br/>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input4GrideMG('ชื่อสถานศึกษา :','กรุณากรอกชื่อสถานศึกษา')}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('ประเทศ :','กรุณากรอกประเทศ')}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <Grid.Column>
                        {input2Gride('สาขาวิชา :','กรุณากรอกสาขาวิชา')}
                    </Grid.Column>
                </Grid.Column>
            </Grid>
            <Grid columns={2} padded='horizontally'>
                <Grid.Column>
                    <Grid columns={2}>
                        <Grid.Column>
                            <WidthWeight>{input4GrideMG('เกรดเฉลี่ย :','กรุณากรอกเกรดเฉลี่ย')}</WidthWeight>
                        </Grid.Column>
                        <Grid.Column>
                            <MgGridHeight>{input4Gride('ปีที่สำเร็จการศึกษา :','กรุณากรอกปีที่สำเร็จการศึกษา')}</MgGridHeight>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
            <br/><br/>
                <MgBTNOrange>
                    {btn_NextBack('ย้อนกลับ', '/ApplyJob/Address_information', 'ถัดไป' ,'https://www.img.in.th/images/c0dce936813662e607bd5798e68fd712.png' , '/ApplyJob/Ability_information')}
                </MgBTNOrange>
            <br/><br/>
        </Box>
        <Divider hidden />
    </Container>    
)