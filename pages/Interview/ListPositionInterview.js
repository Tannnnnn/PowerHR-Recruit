import React from 'react'
import { withLayout } from '../../hoc'
import { compose, withProps , withState , withHandlers} from 'recompose'
import {CarouselCompane} from '../../components/Carousel'
import styled from 'styled-components'
import { Container , Divider , Segment , Header , Image , Pagination , Grid  } from 'semantic-ui-react'
import theme from '../../theme/default'


const SegmentHeader = styled(Segment)`
  height : 80px ;
  padding-top : 30px !important ;
  padding-left: 39px !important ;
  font-size : 25px !important ;
  color : #fff;
  background : #ee3900 !important ;
  border-radius: 0rem !important ;
  border: none !important ;
  margin-bottom : 0px !important ;
`
const SegmentContent = styled(Segment)`
  border-radius: 0rem !important ;
  margin-bottom : 0px !important ;
  margin-top : 0px !important ;
  padding-top : 22px !important ;
  padding-left : 44px !important ;
  padding-right : 44px !important ;
  height : 136px ;
  cursor : pointer ;
  :hover{
    background: #6a6a6a ;
  }
`

const HeaderContent = styled(Header)`
  font-size: 23px !important ;
  font-weight : normal !important ;
  color: #707070 !important ;
  font-family : 'Kanit', sans-serif !important;
  ${SegmentContent}:hover & {
    color: #fff !important ;
    font-weight: 600 !important; 
  }
`

const BoxText = styled.div`
    width: 100%;
    height: 87px;
    background-color: ${theme.colors.orangePosonal};
`;

const TextHeadInterview = styled.p`
    color: ${theme.colors.elementBackground} !important;
    font-size: 30px;
    color: #000000;
`;

const CardName = styled.div`
    width: 100%;
    height: 56px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    margin-top: 2%;
`;

const TextTopic = styled.p`
    font-size: 18px;
`;

const TextContant = styled.small`
    font-size: 18px;
    color: ${theme.colors.textGray};
`;

const enhance = compose(
    withState('detail','setDetail',[{text: 'พัฒนา website ด้วย React , NodeJs framework ,HTML5 ,CSS3 ได้'},{text: 'มีความรู้ความเข้าใจ React Native (will be effective consider)'},{text: 'คุ้นเคยกับ JavaScript frameworks, Gulp, NPM'},{text: 'มีประสบการณ์ด้าน CSS preprocessors เช่น SASS, SCSS, LESS'},{text: 'เข้าใจในวิธีการออกแบบของ MVC framework'}]),
    withState('Jobs' , 'setJobs' , [{position: 'Fontend Developer', company: 'Cupcode' , date: '28 พฤศจิกายน 2561' , rate: 'สามารถต่อรองได้' , value: 2} , {position: 'UX/UI Design' , date: '28 พฤศจิกายน 2561' , rate: 'สามารถต่อรองได้' , value: 5} ,  {position: 'Backend Devloper' , date: '28 พฤศจิกายน 2561' , rate: 'สามารถต่อรองได้' , value: 3}]),
    withState('jobDetail','setJobDetail'),
    withProps({
        pageTitle: 'Job Detail'
    }),
    withLayout,
    
)

export default enhance( (props)=> 
    <div>
        {CarouselCompane ('CUPCODE CO., LTD.')}
        <Divider hidden />
        <Container>
            <BoxText>
                <br/>
                <center><TextHeadInterview>ประกาศผล</TextHeadInterview></center>
            </BoxText>
            <CardName>
                <Grid columns={4}>
                  <Grid.Row>
                    <Grid.Column>
                      <TextTopic>ตำแหน่ง : <TextContant>Fontend Developer</TextContant></TextTopic>
                    </Grid.Column>
                    <Grid.Column>
                      <TextTopic>วันที่สมัคร : <TextContant>19 พฤศจิกายน 2561</TextContant></TextTopic>
                    </Grid.Column>
                    <Grid.Column>
                      <TextTopic>สถานะ : <TextContant>รอพิจารณาการสมัคร</TextContant></TextTopic>
                    </Grid.Column>
                    <Grid.Column>
                      <TextTopic><center>ดูรายละเอียด</center></TextTopic>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
            </CardName>
        </Container>
        <Divider hidden />
    </div>
)