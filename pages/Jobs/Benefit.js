import React from 'react'
import styled from 'styled-components'
import { Segment , Icon , Container } from 'semantic-ui-react'
import { compose , withHandlers , withState } from 'recompose'

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
const ContainerHeader = styled(Container)`
  width: 1142px !important ;
  margin-top: 39px;
  box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
`

const ContainerContent = styled(Container)`
  width: 1142px !important ;
  background : #ffffff !important ;
`

const Panel = styled.div `
  padding-left : 70px ;
  padding-top : 26px ;
  padding-bottom : 16px ;
`

const Icons = styled(Icon)`
  width: 12px !important ;
  height: 12px !important ;
  color: #ee3900;
  padding-right : 32px ;
  font-size: 0.7em !important ;
`

const Label = styled.label `
    font-size : 18px ;
    color : #707070 ;
`

const enhance = compose(
  withState('BebefitList' , 'setBebefitList' , ['ประกันสังคม' , 'Training ฟรี ถ้าสนใจคอร์สเรียนต่างๆสามารถเบิกค่าเรียนได้' , 'เรียนรู้การใช้งาน Tools ต่างๆที่มีความสำคัญในการทำงาน: Jira, Git, Bitbucket, IntelliJ' , 'Company Trip ปีละ 1 ครั้ง ' , 'มีอาหารกลางวันฟรี' , 'โบนัสประจำปี']),
  withHandlers({
    handleBenefitdatalis: props => () => {
      return props.BebefitList.map( data => {
        return(
          <div key={data}>
            <Label><Icons name="circle"/>{data}</Label><br/><br/>
          </div>
        )
      })
    }
  })
)

export default enhance((props) =>
  <div>
    <ContainerHeader>
      <SegmentHeader>สวัสดิการ :</SegmentHeader>
      <ContainerContent>
        <Panel>
          {props.handleBenefitdatalis()}
        </Panel>
      </ContainerContent>
    </ContainerHeader>
  </div>
);
export { default as Benefit } from './Benefit'