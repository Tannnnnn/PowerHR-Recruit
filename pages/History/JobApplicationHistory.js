import React from 'react'
import { withLayout } from '../../hoc'
import { compose, withProps , withState , withHandlers , lifecycle} from 'recompose'
import {CarouselCompane} from '../../components/Carousel'
import styled from 'styled-components'
import { Container , Divider , Segment , Header , Grid  } from 'semantic-ui-react'
import theme from '../../theme/default'
import { inject, observer } from 'mobx-react'
import { firebase } from '../../firebase/index'

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
    withLayout,
    inject('authStore' , 'jobStore'),
    withState('position','setPosition'),
    withState('position_name','setPosition_name'),
    withProps({
        pageTitle: 'Job Application History'
    }),
    withHandlers({
        initApplyJobsList: props => () => {
            firebase.database()
            .ref('apply_jobs')
            .orderByChild("uid")
            .equalTo(props.authStore.accessToken)
            .once("value").then( snapshot => { 
                let result = Object.values(snapshot.val())                
                props.setPosition(result)
            })
        },
        initGetDataPositions: props => () => {
            firebase.database().ref('positions')
            .once("value").then( snapshot => { 
                let result = Object.values(snapshot.val())                
                props.setPosition_name(result)
            })
        }
    }),
    lifecycle({
        async componentDidMount(){
            await this.props.initApplyJobsList()
            await this.props.initGetDataPositions()
            console.log(this.props.position);
        }
    }),
    withHandlers({
        handleDateToThai: props => (date) => {
            let timestamp = new Date(1970, 0, 1); // Epoch
            timestamp.setMilliseconds(date);
            const st_localDate = new Date(Date.UTC(timestamp.getFullYear(),timestamp.getMonth(),timestamp.getDate()));
            const st_options = { year: 'numeric', month: 'long', day: 'numeric' };
            return st_localDate.toLocaleDateString('th-TH', st_options)
        },
    }),
    observer
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
            {
                props.position
                ? props.position.map( (data,i) => {
                    return(
                        <CardName key={i}>
                            <Grid columns={3}>
                                <MgRow>
                                    <Grid.Column>
                                        <TextTopic>ตำแหน่ง :&nbsp; 
                                            <TextContant>
                                            {
                                                props.position_name
                                                ?   props.position_name.map( result => { return result.position_id === data.position_id ? result.position_name : null})
                                                :   null
                                            }
                                            </TextContant>
                                        </TextTopic>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <TextTopic>วันที่สมัคร : <TextContant>{props.handleDateToThai(data.apply_date)}</TextContant></TextTopic>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <TextTopic>สถานะ :  
                                            {
                                                data.status === 0
                                                    ? <TextContant> รอการพิจารณา</TextContant>
                                                    : data.status === 1
                                                        ? <TextSuccess> ผ่านการพิจารณา </TextSuccess>
                                                        : <TextFail> ไม่ผ่านการพิจารณา </TextFail>
                                            }
                                        </TextTopic>
                                    </Grid.Column>
                                </MgRow>
                            </Grid>
                        </CardName>
                    )
                })
              : <center><br/><TextTopic>ไม่มีข้อมูลการสมัครงาน</TextTopic><br/></center>
            }
            <br/><br/>
        </Container>
    </div>
)