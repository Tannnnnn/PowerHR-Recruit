import React from 'react'
import { withLayout } from '../../hoc'
import { compose , withState , lifecycle } from 'recompose'
import {CarouselCompane} from '../../components/Carousel'
import styled from 'styled-components'
import { Container , Divider , Grid , Button , Image , Label} from 'semantic-ui-react'
import {Breadcrumb2Page} from '../../components/Breadcrumb'
import axios from 'axios'

const BodyBox = styled.div`
    background : #ffffff;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    width: 100%;
    height: 562px;
    border-radius: 5px;
`;

const TextTopics1 = styled.p`
    font-size: 20px !important;
    margin-left: 6% !important;
    margin-top: 1% !important;
    margin-bottom: 0px;
`;

const TextTopics2 = styled.p`
    font-size: 20px !important;
    margin-left: 5% !important;
    margin-top: 1% !important;
`;

const TextTopics3 = styled.p`
    font-size: 20px !important;
    margin-top: 1% !important;
`;

const ColorTextSmall1 = styled.small`
    font-size: 18px !important;
    color: #707070 !important;
`;

const DangerHTML = styled.div`
    font-size: 18px !important;
    color: #707070 !important;
    margin-left: 8% !important;
    margin-top: 2% !important;
    margin-bottom: 2% !important;
`;

const MarginBTN = styled(Button)`
    margin-left: 28% !important;
`;

const ColorBTN = styled(Button)`
    box-shadow: 0 0 0px 1px #ee3900 !important;
    background : #fff !important;
    color : #ee3900 !important;
    font-family : 'Kanit', sans-serif !important;
`;

const Colorlabel = styled(Label)`
    box-shadow: 0 0 0px 1px #ee3900 !important;
    background : #ee3900 !important;
    color : #fff !important;
`;

const IMGSize = styled(Image)`
    width: 24px !important;
    height: 24px !important;
    display: inline-block !important;
`;

const enhance = compose(
    withState('detail','setDetail',[]),
    withState('startdate','setStartdate'),
    withState('enddate','setEnddate'),
    withLayout,
    lifecycle({
        async componentDidMount(){
            const url = `http://localhost:4000/job_position/${this.props.url.query.id}`
            const res = await axios.get(url)
            this.props.setDetail(res.data)            
            res.data.map( data => {
                //set startdate in thai
                const st_event = data.startdate.split('-')
                const st_years = parseInt(st_event[0])
                const st_month = parseInt(st_event[1]) 
                const st_days  = parseInt(st_event[2])                  
                const st_localDate = new Date(Date.UTC(st_years,st_month,st_days));
                const st_options = { year: 'numeric', month: 'long', day: 'numeric' };
                this.props.setStartdate(st_localDate.toLocaleDateString('th-TH', st_options))
                
                //set enddate in thai
                const end_event = data.enddate.split('-')
                const end_years = parseInt(end_event[0])
                const end_month = parseInt(end_event[1]) 
                const end_days  = parseInt(end_event[2])                  
                const end_localDate = new Date(Date.UTC(end_years,end_month,end_days));
                const end_options = { year: 'numeric', month: 'long', day: 'numeric' };
                this.props.setEnddate(end_localDate.toLocaleDateString('th-TH', end_options))
            })
        }
    })
)

export default enhance( (props)=> 
    <div>
        {CarouselCompane ('CUPCODE CO., LTD.')}
            { props.detail.map( (data , i) => {
                return(
                    <Container key={i}>
                        {Breadcrumb2Page('ตำแหน่งเปิดรับ', 'รายละเอียดตำแหน่ง Fontend Devoloper')}
                        <BodyBox>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={11}>
                                        <TextTopics1>ตำแหน่ง : <ColorTextSmall1> {data.position_name}</ColorTextSmall1></TextTopics1>
                                        <TextTopics1>
                                            รายละเอียดตำแหน่งงาน :
                                        </TextTopics1>
                                        <DangerHTML dangerouslySetInnerHTML={{ __html: data.description }} />
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <TextTopics3>วันที่รับสมัคร : <ColorTextSmall1>{props.startdate} - {props.enddate}</ColorTextSmall1> </TextTopics3>
                                        <MarginBTN as='div' labelPosition='right'>
                                            <ColorBTN>
                                                สมัครงาน
                                            </ColorBTN>
                                            <Colorlabel as='a' icon>
                                                <Image src='https://www.img.in.th/images/68c0f730b867d22a3086b9fdfd7cf787.png' size='small' />
                                            </Colorlabel>
                                        </MarginBTN>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <TextTopics2> เวลาทำงาน : <ColorTextSmall1>ทำงานวันจันทร์ - ศุกร์ เวลา 10:00 - 19:00 น. (Flexible Hours)</ColorTextSmall1> </TextTopics2>
                            <TextTopics2> สถานที่ปฏิบัติการ : <ColorTextSmall1>1679/2 town in town 11 ladprao road, plabpla, wangthonglang Bangkok 10310</ColorTextSmall1> </TextTopics2>
                            <TextTopics2>อัตรา : <ColorTextSmall1> {data.value} </ColorTextSmall1></TextTopics2>
                            <TextTopics2>เงินเดือน : <ColorTextSmall1> <IMGSize src='https://www.img.in.th/images/5d8d89d8b5d3db32c8d66c2b5db62234.png' /> {data.rate} </ColorTextSmall1></TextTopics2>
                        </BodyBox>
                    </Container>
                )
            })}
        <Divider hidden />
    </div>
)