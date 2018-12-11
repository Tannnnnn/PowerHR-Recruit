import React from 'react'
import { withLayout } from '../../hoc'
import { compose, withProps , withState , withHandlers} from 'recompose'
import {CarouselCompane} from '../../components/Carousel'
import styled from 'styled-components'
import { Container , Divider , Grid , Button , Image , Label} from 'semantic-ui-react'
import {Breadcrumb2Page} from '../../components/Breadcrumb'

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

const ColorTextSmall2 = styled.small`
    font-size: 18px !important;
    color: #707070 !important;
    margin-left: 10% !important;
    margin-top: 20% !important;
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
    withState('detail','setDetail',[{text: 'พัฒนา website ด้วย React , NodeJs framework ,HTML5 ,CSS3 ได้'},{text: 'มีความรู้ความเข้าใจ React Native (will be effective consider)'},{text: 'คุ้นเคยกับ JavaScript frameworks, Gulp, NPM'},{text: 'มีประสบการณ์ด้าน CSS preprocessors เช่น SASS, SCSS, LESS'},{text: 'เข้าใจในวิธีการออกแบบของ MVC framework'}]),
    withProps({
        pageTitle: 'Job Detail'
    }),
    withLayout,
    withHandlers({
        handleShowDetail: props => () => {
            return(
                props.detail.map( (data) => {
                    return  <ColorTextSmall2>
                                {data.text}<br/><br/>
                            </ColorTextSmall2>
                })
            )
        }
    })
)

export default enhance( (props)=> 
    <div>
        {CarouselCompane ('CUPCODE CO., LTD.')}
        <Container>
            {Breadcrumb2Page('ตำแหน่งเปิดรับ', 'รายละเอียดตำแหน่ง Fontend Devoloper')}
            <BodyBox>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={11}>
                            <TextTopics1>ตำแหน่ง : <ColorTextSmall1> Fontend Developer</ColorTextSmall1></TextTopics1>
                            <TextTopics1>
                                รายละเอียดตำแหน่งงาน :
                            </TextTopics1>
                            {props.handleShowDetail()}
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <TextTopics3>วันที่ : <ColorTextSmall1>17 - 28 พฤศจิกายน 2561</ColorTextSmall1> </TextTopics3>
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
                <TextTopics2> สถานที่ปฏิบัติการ : <ColorTextSmall1>1679/2 town in town 11 ladprao road, plabpla, wangthonglang กรุงเทพมหานคร 10310</ColorTextSmall1> </TextTopics2>
                <TextTopics2>อัตรา : <ColorTextSmall1> 2 </ColorTextSmall1></TextTopics2>
                <TextTopics2>เงินเดือน : <ColorTextSmall1> <IMGSize src='https://www.img.in.th/images/5d8d89d8b5d3db32c8d66c2b5db62234.png' /> สามารต่อรองกันได้ </ColorTextSmall1></TextTopics2>
            </BodyBox>
        </Container>
        <Divider hidden />
    </div>
)