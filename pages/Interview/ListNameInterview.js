import React from 'react'
import { withLayout } from '../../hoc'
import { compose, withProps , withState , withHandlers} from 'recompose'
import styled from 'styled-components'
import { Container , Divider , Grid , Modal , Header, Icon } from 'semantic-ui-react'
import {Breadcrumb2Page} from '../../components/Breadcrumb'

const BoxNameInterview = styled.div`
    width: 100%;
    height: 76px;
    background-color: #fff;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const BoxNameInterview2 = styled.div`
    width: 100%;
    height: 7px;
    background-color: #ee3900;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const BoxNameInterview3 = styled.div`
    width: 100%;
    height: auto;
    background-color: #fff;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const TextBoxNameInterview = styled.p`
    font-size: 30px;
`;

const CardName = styled.div`
    width: 94%;
    height: 54px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    margin-left: 3%;
    margin-top: 2%;
`;

const TextCard = styled(Grid.Column)`
    font-size: 18 px;
    margin-left: 30%;
    margin-top: 2%;
`;

const TextCard2 = styled(Grid.Column)`
    font-size: 18 px;
    margin-top: 2%;
`;

const TextCard3 = styled(Grid.Column)`
    font-size: 18 px;
    margin-top: 2%;
    color: #ee3900;
    cursor : pointer ;
`;

const TextHeaderReport = styled(Header)`
    font-size: 23px;
    color: #ee3900 !important;
    font-family : 'Kanit', sans-serif !important;
`;

const TextSizeReport = styled.p`
    font-size: 20 px;
`;

const TextSizeReport2 = styled.p`
    font-size: 20 px;
    margin-left: 6%;
`;

const TextSizeReport3 = styled.p`
    font-size: 20 px;
    margin-left: -6%;
`;

const Icons = styled(Icon)`
  width: 12px !important ;
  height: 12px !important ;
  color: #ee3900;
  padding-right : 32px ;
  font-size: 0.7em !important ;
`

const enhance = compose(
    withState('nameInterview','setNameInterview',[{name:'นายพงศธร', lastName:'จันด้วง', status:'ไม่ผ่านการสัมภาษณ์', Detail:''},{name:'นายกิตปกรณ์', lastName:'ทองเงิน', status:'ผ่านการสัมภาษณ์', Detail:'ดูรายละเอียด'}]),
    withState('detailInterview','setDetailInterview',[{date:'6 ธันวาคม 2561', time: '10.00' , place: '1679/2 town in town 11 ladprao road, plabpla, wangthonglang กรุงเทพมหานคร 10310'}]),
    withProps({
        pageTitle: 'List name interview'
    }),
    withLayout,
    withHandlers({
        handleShowData: props => () => {
            return  props.nameInterview.map( (data , i) => {
                return(
                        <div>
                            <CardName>
                                <Grid columns={5}>
                                    <Grid.Row key={i}>
                                        <Grid.Column>
                                            <TextCard>{i+1}</TextCard>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <TextCard2>{data.name}</TextCard2>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <TextCard2>{data.lastName}</TextCard2>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <TextCard2>{data.status}</TextCard2>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Modal trigger={<TextCard3>{data.Detail}</TextCard3> } size='tiny' closeIcon>
                                                <TextHeaderReport content='รายละเอียดการรายงานตัว' />
                                                    <Modal.Content>
                                                            <TextSizeReport>รายงานตัววันที่ : 6 ธันวาคม 2561</TextSizeReport>
                                                            <TextSizeReport>เวลา : 10.00 น.</TextSizeReport>
                                                            <TextSizeReport>สถานที่รายงานตัว :</TextSizeReport>
                                                            <TextSizeReport2>1679/2 town in town 11 ladprao road, plabpla, wangthonglang กรุงเทพมหานคร 10310</TextSizeReport2>
                                                        <Grid columns={2} padded>
                                                            <Grid.Column>
                                                                <TextSizeReport3>เอกสาร :</TextSizeReport3>
                                                                <p><Icons name="circle"/>สำเนาบัตรประชาชน</p>
                                                                <p><Icons name="circle"/>สำเนาทะเบียนบ้าน</p>
                                                                <p><Icons name="circle"/>ใบรับรองเเพทย์</p>
                                                            </Grid.Column>
                                                            <Grid.Column textAlign='right'>
                                                                <TextSizeReport>จำนวน (ชุด)</TextSizeReport>
                                                                <p>1</p>
                                                                <p>1</p>
                                                                <p>1</p>
                                                            </Grid.Column>
                                                        </Grid>
                                                    </Modal.Content>
                                            </Modal>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </CardName>
                        </div>
                )       
            })
        }
    })
    
)

export default enhance( (props)=> 
    <div>
        <Container>
            {Breadcrumb2Page('ประกาศผลการสัมถาษณ์', 'รายชื่อผู้ผ่านการสัมภาษณ์')}
            <BoxNameInterview><Divider hidden />
                <center><TextBoxNameInterview>รายชื่อผู้สัมภาษณ์ ตำแหน่ง UX/UI Design</TextBoxNameInterview></center>
            </BoxNameInterview>
            <BoxNameInterview2/>
            <BoxNameInterview3>
                <br/>
                {props.handleShowData()}
                <br/>
            </BoxNameInterview3>
        </Container>
        <Divider hidden />
    </div>
)