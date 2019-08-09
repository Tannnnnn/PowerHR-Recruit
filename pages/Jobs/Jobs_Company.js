import React from 'react'
import styled from 'styled-components'
import { Segment , Container } from 'semantic-ui-react'


const LabelHeader = styled.label `
  font-size : 25px;
  color : #707070 ;
  height : 38px ;
`
const LabelContent = styled.p `
  font-size : 18px;
  color : #707070 ;
  height : 38px ;
`
const SegmentHeader = styled(Segment)`
  border-left : 15px solid #ee3900 !important;
  height : 75px ;
  padding-top : 27px !important ;
  padding-left: 19px !important ;
  font-size : 30px !important ;
  color : #ff5722;
  border-radius: 0rem !important ;
`
const ContainerHeader = styled(Container)`
  width: 1142px !important ;
  margin-bottom : 39px ;
  margin-top: 39px;
`
const ContainerContent = styled(Container)`
  width: 1070px !important ;
  padding-bottom : 39px ;
  margin-top: 39px;
`

export default (props)=> (
  <div>
    <ContainerHeader>
      <SegmentHeader>CUPCODE CO., LTD.</SegmentHeader>
    </ContainerHeader>
    <ContainerContent>
      <LabelHeader>บริษัท คัพโค้ด จำกัด</LabelHeader><br/><br/>
      <LabelContent>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ผู้ให้บริการ E-commerce Platform สำหรับลูกค้า SME และองค์กรใหญ่ภายในประเทศ กำลังมองหานักพัฒนารุ่นใหม่ไฟแรง มาช่วยกันขับเคลื่อนบริษัทฯ พร้อมทั้งโอกาสทางธุรกิจมากมายที่ทางทีมจะมอบให้ อาทิ การร่วมงานกับบริษัท IT, บริษัท Startup และบริษัทผู้ผลิตสินค้าอุปโภคบริโภคชั้นนำในประเทศ</LabelContent>
    </ContainerContent>
    <ContainerHeader>
      <SegmentHeader>Antinode CO., LTD.</SegmentHeader>
    </ContainerHeader>
    <ContainerContent>
      <LabelHeader>บริษัท แอนติโหนด จำกัด</LabelHeader><br/><br/>
      <LabelContent>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ผู้ให้บริการ E-commerce Platform สำหรับลูกค้า SME และองค์กรใหญ่ภายในประเทศ กำลังมองหานักพัฒนารุ่นใหม่ไฟแรง มาช่วยกันขับเคลื่อนบริษัทฯ พร้อมทั้งโอกาสทางธุรกิจมากมายที่ทางทีมจะมอบให้ อาทิ การร่วมงานกับบริษัท IT, บริษัท Startup และบริษัทผู้ผลิตสินค้าอุปโภคบริโภคชั้นนำในประเทศ</LabelContent>
    </ContainerContent>
  </div>
);
export { default as Jobs_Company } from './Jobs_Company'