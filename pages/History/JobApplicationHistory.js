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
    font-size: 16px;
    color: ${theme.colors.textGray};
`;
const TextSuccess = styled.small`
    font-size: 16px;
    color: #05E31F;
`;
const TextFail = styled.small`
    font-size: 16px;
    color: red;
`;
const MgRow = styled(Grid.Row)`
    margin-left: 8%;
`;

const enhance = compose(
    withState('position','setPosition',[{position: 'React Developer',  date: '15 พฤษภาคม 2562', status:'ผ่านการพิจารณา' } , {position: 'Angular Developer',  date: '20 พฤษภาคม 2562', status:'ไม่ผ่านการพิจารณา' }]),
    withProps({
        pageTitle: 'Job appcation history'
    }),
    withLayout,
    withHandlers({
        handleShowData: props => () => {
            return  props.position.map( (data,i) => {
                return(
                    <CardName key={i}>
                        <Grid columns={3}>
                            <MgRow>
                                <Grid.Column>
                                    <TextTopic>ตำแหน่ง : <TextContant>{data.position}</TextContant></TextTopic>
                                </Grid.Column>
                                <Grid.Column>
                                    <TextTopic>วันที่สมัคร : <TextContant>{data.date}</TextContant></TextTopic>
                                </Grid.Column>
                                <Grid.Column>
                                    <TextTopic>สถานะ :  
                                        {
                                            data.status === 'รอการพิจารณา'
                                                ? <TextContant> {data.status}</TextContant>
                                                : data.status === 'ผ่านการพิจารณา'
                                                    ? <TextSuccess> {data.status}</TextSuccess>
                                                    : <TextFail> {data.status}</TextFail>
                                        }
                                    </TextTopic>
                                </Grid.Column>
                            </MgRow>
                        </Grid>
                    </CardName>
                )
            })
        }
    })
    
)

export default enhance( (props)=> 
    <div>
        {CarouselCompane ('CUPCODE CO., LTD.')}
        <Container>
            <Divider hidden />
            <BoxText>
                <br/>
                <center><TextHeadInterview>ประวัติการสมัครงาน</TextHeadInterview></center>
            </BoxText>
            {props.handleShowData()}
            <br/>
            <Divider hidden />
        </Container>
    </div>
)