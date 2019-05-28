import React from 'react'
import styled from 'styled-components'
import { Segment , Icon , Container , Header , Pagination , Image } from 'semantic-ui-react'
import { compose , withHandlers , withState , lifecycle } from 'recompose'
import Link from 'next/link'
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
  background : #fff ;
  -webkit-transition: background-color .3s ease-in-out;
  -moz-transition: background-color .3s ease-in-out;
  -o-transition: background-color .3s ease-in-out;
  transition: background-color .3s ease-in-out;
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
const HeaderContentLeft = styled(Header)`
  font-size: 23px !important ;
  font-weight : normal !important ;
  color: #707070 !important ;
  font-family : 'Kanit', sans-serif !important;
  width: 30%;
  ${SegmentContent}:hover & {
    color: #fff !important ;
    font-weight: 400 !important; 
  }
`
const HeaderContentRight = styled(Header)`
  font-size: 23px !important ;
  font-weight : normal !important ;
  color: #707070 !important ;
  font-family : 'Kanit', sans-serif !important;
  ${SegmentContent}:hover & {
    color: #fff !important ;
    font-weight: 400 !important; 
  }
`
const LabelDate = styled.label`
  font-size: 16px !important ;
  cursor : pointer ;
`
const LabelRecruit = styled.label`
  font-size: 22px !important ;
  padding-left : 74% !important ;
  cursor : pointer ;
  ${SegmentContent}:hover & {
    font-weight: 600 !important;
  }
`
const LabelSalary = styled.label`
  font-size: 16px !important ;
  padding-left : 3% !important ;
  cursor : pointer ;
`
const LabelPosition = styled.label`
  font-size: 22px !important ;
  padding-left : 3% !important ;
  cursor : pointer ;
  color : #ff5800 ;
  -webkit-transition:color .3s ease-in-out;
  -moz-transition: color .3s ease-in-out;
  -o-transition: color .3s ease-in-out;
  transition: color .3s ease-in-out;
  ${SegmentContent}:hover & {
    color: #fff !important ;
    font-weight: 600 !important;
  }
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
  inject('jobStore'),
  withState('recruit' , 'setRecruit'),
  withState('dataInPage' , 'setDataInPage' , 5),
  withState('activePage' , 'setActivePage' , 1),
  withHandlers({
    initGetJobPositionsData: props => () => {
      firebase.database().ref("job_positions_log")
      .once("value").then( snapshot => {
        let data = Object.values(snapshot.val())
        let result = []
        data.map((data) => {   
          const today = new Date() 
          const endDate = new Date(data.enddate)
          const startDate = new Date(data.startdate)
          if (today.setHours(0,0,0,0) >= startDate.setHours(0,0,0,0) && today.setHours(0,0,0,0) <= endDate) {
            return result.push(data)
          }
        })        
        props.setRecruit(result)
      })
    }
  }),
  lifecycle({
    async componentDidMount(){      
      await this.props.initGetJobPositionsData()
    }
  }),
  withHandlers({
    handleShowData: props => (dateInThai) => {
      const { dataInPage , activePage , recruit } = props   
      if ( recruit && recruit !== undefined && recruit.length !== 0) {
        const indexOfLast = activePage * dataInPage;
        const indexOfFirst = indexOfLast - dataInPage;
        const currentData = recruit.slice(indexOfFirst, indexOfLast);
        return  currentData.map( (data , i) => {           
                  return(
                    <div key={i} onClick={() => props.jobStore.job_positions = data}>
                      <Link href={{ pathname : '../JobDetail/JobDetail' }} >
                        <SegmentContent >
                            <HeaderContentRight floated='right'>
                              <LabelDate>
                                {dateInThai(data.startdate)} - {dateInThai(data.enddate)}
                              </LabelDate><br/><br/>
                              <LabelRecruit>
                                {data.value} อัตรา
                              </LabelRecruit>
                            </HeaderContentRight>
                            <HeaderContentLeft floated='left'>
                              <LabelPosition>{data.position_name}</LabelPosition><br/><br/>
                              <LabelSalary>
                                <Icon name='money bill alternate outline' />{data.rate === "ตามประสบการณ์" ? data.rate : data.rate + " บาท"}
                              </LabelSalary>
                            </HeaderContentLeft>
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
          { props.recruit && props.handleShowData(props.handleSetDateInThai)}
        </ContainerContent>
    </ContainerHeader>
    <Container>
      <center>
        { props.recruit && props.handlePagination(props.handleChangePagination)}
      </center>
    </Container>
  </div>
);
export { default as Jobs_Recruit } from './Jobs_Recruit'