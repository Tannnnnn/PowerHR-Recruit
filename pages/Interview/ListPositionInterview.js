import React from 'react'
import { withLayout } from '../../hoc'
import { compose, withProps , withState , withHandlers , lifecycle} from 'recompose'
import styled from 'styled-components'
import { Container , Divider , Icon , Grid , Button , Image } from 'semantic-ui-react'
import theme from '../../theme/default'
import { inject, observer } from 'mobx-react'
import { firebase } from '../../firebase/index'

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
const ButtonClick = styled(Button)`
    font-family : 'Kanit', sans-serif !important;
    font-size: 11px !important;
    :hover {
        color : #fffff !important;
    }
`;
const ImgCarousel = styled(Image)`
    margin-Top: 65px !important;
`;

const enhance = compose(
    withLayout,
    inject('authStore' , 'jobStore'),
    withState('position','setPosition'),
    withState('position_name','setPosition_name'),
    withProps({
        pageTitle: 'Position Interview'
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
        <ImgCarousel src='https://firebasestorage.googleapis.com/v0/b/powerhr-auth.appspot.com/o/powerHRSaveForWebTrue.jpg?alt=media&token=a82c6662-60e6-4358-b7da-dcb863c18c2b' fluid />
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
                            {console.log(data , 'data')}
                            <Grid columns={4}>
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
                                    <Grid.Column style={{ paddingLeft : '5%'}}>
                                        <TextTopic>สถานะ :  
                                            {
                                                data.status === 1
                                                ? <TextFail> ไม่ผ่านการพิจารณา</TextFail>
                                                : data.status === 2
                                                    ? <TextContant> เรียกสัมภาษณ์</TextContant>
                                                    : data.status === 3 
                                                        ? <TextSuccess> ผ่านการสัมภาษณ์</TextSuccess>
                                                        : data.status === 4 
                                                            ? <TextFail> ไม่ผ่านการสัมภาษณ์</TextFail>
                                                            : <TextContant> รอการพิจารณา</TextContant>
                                            }
                                        </TextTopic>
                                    </Grid.Column>
                                    <Grid.Column style={{ paddingLeft : '5%'}}>
                                        <ButtonClick basic animated size='mini' color="blue" onClick={() => window.open(data.resume_pdf)}>
                                            <Button.Content visible>แบบฟอร์มใบสมัคร</Button.Content>
                                            <Button.Content hidden>
                                                <Icon name='arrow right' />
                                            </Button.Content>
                                        </ButtonClick>
                                    </Grid.Column>
                                </MgRow>
                            </Grid>
                        </CardName>
                    )
                })
              : <center><br/><TextTopic>ไม่มีข้อมูลการประกาศผลการสมัครงานในขณะนี้</TextTopic><br/></center>
            }
            <br/><br/>
        </Container>
    </div>
)