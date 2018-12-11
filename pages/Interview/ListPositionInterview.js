import React from 'react'
import { withLayout } from '../../hoc'
import { compose, withProps , withState , withHandlers} from 'recompose'
import {CarouselCompane} from '../../components/Carousel'
import styled from 'styled-components'
import { Container , Divider , Segment , Header , Image , Pagination , Icon } from 'semantic-ui-react'
import Link from 'next/link'


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
const ContainerHeader = styled(Container)`
  width: 1142px !important ;
  margin-top: 26px;
  box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
`
const ContainerContent = styled(Container)`
  width: 1142px !important ;
  margin-bottom : 39px ;
  background : #ffffff !important ;
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
const LabelDate = styled.label`
  font-size: 18px !important ;
  cursor : pointer ;
`
const LabelRecruit = styled.label`
  font-size: 23px !important ;
  padding-left : 54% !important ;
  cursor : pointer ;
`
const LabelSalary = styled.label`
  font-size: 18px !important ;
  padding-left : 3% !important ;
  cursor : pointer ;
`
const Paginations = styled(Pagination)`
  color : #707070 !important ;
  font-family : 'Kanit', sans-serif !important;
  .active {
    background : #ee3900 !important ;
    color : #ffffff !important ;
  }
`

const IMGSize = styled(Image)`
    width: 24px !important;
    height: 24px !important;
    display: inline-block !important;
`;

const BoxText = styled.div`
    width: 100%;
    height: 87px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const TextHeadInterview = styled.p`
    font-size: 30px;
    color: #000000;
`;

const enhance = compose(
    withState('detail','setDetail',[{text: 'พัฒนา website ด้วย React , NodeJs framework ,HTML5 ,CSS3 ได้'},{text: 'มีความรู้ความเข้าใจ React Native (will be effective consider)'},{text: 'คุ้นเคยกับ JavaScript frameworks, Gulp, NPM'},{text: 'มีประสบการณ์ด้าน CSS preprocessors เช่น SASS, SCSS, LESS'},{text: 'เข้าใจในวิธีการออกแบบของ MVC framework'}]),
    withState('Jobs' , 'setJobs' , [{position: 'Fontend Developer', company: 'Cupcode' , date: '28 พฤศจิกายน 2561' , rate: 'สามารถต่อรองได้' , value: 2} , {position: 'UX/UI Design' , date: '28 พฤศจิกายน 2561' , rate: 'สามารถต่อรองได้' , value: 5} ,  {position: 'Backend Devloper' , date: '28 พฤศจิกายน 2561' , rate: 'สามารถต่อรองได้' , value: 3}]),
    withState('jobDetail','setJobDetail'),
    withProps({
        pageTitle: 'Job Detail'
    }),
    withLayout,
    withHandlers({
        handleShowData: props => () => {
            return  props.Jobs.map( (data , i) => {
                      return(
                        <div>
                          <Link href='../Interview/ListNameInterview'>
                            <SegmentContent key={i}>
                                <HeaderContent floated='right'>
                                  <LabelDate>
                                    {data.date}
                                  </LabelDate><br/><br/>
                                  <LabelRecruit>
                                    {data.value} อัตรา
                                  </LabelRecruit>
                                </HeaderContent>
                                <HeaderContent floated='left'>
                                  {i+1}. {data.position}<br/><br/>
                                  <LabelSalary>
                                  <Icon name='usd' />
                                  {data.rate}
                                  </LabelSalary>
                                </HeaderContent>
                            </SegmentContent>
                          </Link>
                        </div>
                      )
                    })
            }
    })
)

export default enhance( (props)=> 
    <div>
        {CarouselCompane ('CUPCODE CO., LTD.')}
        <Divider hidden />
        <Container>
            <BoxText>
                <br/>
                <center><TextHeadInterview>ประกาศผลการสัมภาษณ์</TextHeadInterview></center>
            </BoxText>
            <ContainerHeader>
                <SegmentHeader>เลือกตำแหน่งงาน :</SegmentHeader>
                <ContainerContent>
                {props.handleShowData()}
                </ContainerContent>
            </ContainerHeader>
            <Container>
                <center>
                    <Paginations
                    defaultActivePage={1}
                    ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                    firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                    lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                    prevItem={{ content: <Icon name='angle left' />, icon: true }}
                    nextItem={{ content: <Icon name='angle right' />, icon: true }}
                    totalPages={3}
                    />
                </center>
            </Container><br/><br/>
        </Container>
        <Divider hidden />
    </div>
)