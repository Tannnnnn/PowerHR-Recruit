import React from 'react'
import styled from 'styled-components'
import { Segment , Icon , Container , Header , Pagination , Image } from 'semantic-ui-react'
import { compose , withHandlers , withState , lifecycle } from 'recompose'
import Link from 'next/link'
import axios from 'axios'

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
  font-size: 18px !important ;
  padding-left : 79% !important ;
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
  font-size: 1.3rem !important;
  .active {
    border-color : #ee3900 !important ;
    color : #ee3900 !important ;
  }
`

const enhance = compose(
  withState('recruit' , 'setRecruit'),
  withState('dataInPage' , 'setDataInPage' , 4),
  withState('activePage' , 'setActivePage' , 1),
  lifecycle({
    async componentDidMount(){
      const url = 'http://localhost:4000/joinPosition'
      const res = await axios.get(url)
      this.props.setRecruit(res.data)
    }
  }),
  withHandlers({
    handleShowData: props => () => {
      if (props.recruit !== undefined) {
        return  props.recruit.map( (data , i) => {
          //set startdate in thai
          let start = data.startdate.split('-')
          const years_start = parseInt(start[0])
          const month_start = parseInt(start[1])
          const days_start  = parseInt(start[2])              
          let localDateStart = new Date(Date.UTC( years_start , month_start , days_start ))
          let options_start = { year: 'numeric', month: 'long', day: 'numeric' }  
          
          //check Jobs_Positions Now
          let today = new Date()
          let days = today.getDate()
          let month = today.getMonth()
          let years = today.getFullYear()
          
          //set enddate in thai
          let end = data.enddate.split('-')
          const years_end = parseInt(end[0])
          const month_end = parseInt(end[1])
          const days_end  = parseInt(end[2])              
          let localDateEnd = new Date(Date.UTC( years_end , month_end , days_end ))
          let options_end = { year: 'numeric', month: 'long', day: 'numeric' }  

          if (days <= days_end && month <= month_end && years <= years_end) {
            return(
              <div key={i}>
                <Link href={{ pathname : '../JobDetail/JobDetail' , query : { id : data.id} }}>
                  <SegmentContent >
                      <HeaderContent floated='right'>
                        <LabelDate>
                          {localDateStart.toLocaleDateString('th-TH', options_start)} - {localDateEnd.toLocaleDateString('th-TH', options_end)}
                        </LabelDate><br/><br/>
                        <LabelRecruit>
                          {data.value} อัตรา
                        </LabelRecruit>
                      </HeaderContent>
                      <HeaderContent floated='left'>
                        {i+1}. {data.position_name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>
                        <LabelSalary>
                          <Icon name='usd' />{data.rate}
                        </LabelSalary>
                      </HeaderContent>
                  </SegmentContent>
                </Link>
              </div>
            )
          } 
          else {
            return null
          }
        })
      }
      else{
        return null
      }
    },
    handlePagination: props => (fnSetPage) => {      
      if (props.recruit !== undefined && props.recruit.length > props.dataInPage) {
        let total = Math.ceil(props.recruit.length / props.dataInPage)        
        return (
          <Paginations
            defaultActivePage={props.activePage}
            firstItem={null}
            lastItem={null}
            pointing
            secondary           
            totalPages={total}
            onPageChange={(e,data)=>fnSetPage(data)}
          />
        )
      }
      else{
        return null
      }
    },
    handleChangePagination: props => (data) => {
      console.log(data.activePage);
      
    }
  })
)

export default enhance((props) =>
  <div>
    <ContainerHeader>
        <SegmentHeader>ตำแหน่งงานที่เปิดรับสมัคร :</SegmentHeader>
        <ContainerContent>
          {props.handleShowData()}
        </ContainerContent>
    </ContainerHeader>
    <Container>
      <center>
        {props.handlePagination(props.handleChangePagination)}
      </center>
    </Container><br/><br/>
  </div>
);
export { default as Jobs_Recruit } from './Jobs_Recruit'