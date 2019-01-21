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
  margin-bottom : 2% ;
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
  padding-left : 80% !important ;
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
  a:focus {
    outline : 0 !important ;
  }
`
const HeaderNotHaveData = styled.h3`
  color : #707070 ;
  font-family : 'Kanit', sans-serif !important;
`

const enhance = compose(
  withState('recruit' , 'setRecruit'),
  withState('dataInPage' , 'setDataInPage' , 5),
  withState('activePage' , 'setActivePage' , 1),
  lifecycle({
    async componentDidMount(){
      let result = []
      //check Jobs_Positions Now
      let today = new Date()
      let days = today.getDate()
      let month = today.getMonth()
      let years = today.getFullYear()

      const url = 'http://localhost:4000/joinPosition'
      const res = await axios.get(url)

      res.data.map((data) => {    
        
        let end = data.enddate.split('-')
        const years_end = parseInt(end[0])
        const month_end = parseInt(end[1])
        const days_end  = parseInt(end[2])         
        
        let start = data.startdate.split('-')
        const years_start = parseInt(start[0])
        const month_start = parseInt(start[1])
        const days_start  = parseInt(start[2])  

        if (days <= days_end && month <= month_end && years <= years_end) {          
          if (days_start <= days && month_start >= month && years_start >= years) {
            result.push(data)
          }
        }
      })

      this.props.setRecruit(result)
    }
  }),
  withHandlers({
    handleShowData: props => (dateInThai) => {
      const { dataInPage , activePage , recruit } = props   
      if ( recruit !== undefined) {
        const indexOfLast = activePage * dataInPage;
        const indexOfFirst = indexOfLast - dataInPage;
        const currentData = recruit.slice(indexOfFirst, indexOfLast);
        return  currentData.map( (data , i) => {           
                  return(
                    <div key={i}>
                      <Link href={{ pathname : '../JobDetail/JobDetail' , query : { id : data.id} }}>
                        <SegmentContent >
                            <HeaderContent floated='right'>
                              <LabelDate>
                                {dateInThai(data.startdate)} - {dateInThai(data.enddate)}
                              </LabelDate><br/><br/>
                              <LabelRecruit>
                                {data.value} อัตรา
                              </LabelRecruit>
                            </HeaderContent>
                            <HeaderContent floated='left'>
                              &nbsp;&nbsp;{data.position_name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>
                              <LabelSalary>
                                <Icon name='usd' />{data.rate}
                              </LabelSalary>
                            </HeaderContent>
                        </SegmentContent>
                      </Link>
                    </div>
                  )
        })
      }
      else{
        return(
          <div>
            <br/>
            <center>
              <HeaderNotHaveData>ไม่มีตำแหน่งงานที่เปิดรับสมัครในขณะนี้</HeaderNotHaveData>
            </center>
            <br/>
          </div>
        )
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
      props.setActivePage(data.activePage)
    },
    handleSetDateInThai: props => (value)  => {      
      let result = value.split('-')
      const years = parseInt(result[0])
      const months = parseInt(result[1])
      const days = parseInt(result[2])              
      let localDate = new Date(Date.UTC( years , months-1 , days ))
      let options = { year: 'numeric', month: 'long', day: 'numeric' }
      return localDate.toLocaleDateString('th-TH', options)
    }
  })
)

export default enhance((props) =>
  <div>
    <ContainerHeader>
        <SegmentHeader>ตำแหน่งงานที่เปิดรับสมัคร :</SegmentHeader>
        <ContainerContent>
          {props.handleShowData(props.handleSetDateInThai)}
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