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

const enhance = compose(
  withState('recruit' , 'setRecruit'),
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
          let event = data.startdate.split('-')
          const years = parseInt(event[0])
          const month = parseInt(event[1]) 
          const days  = parseInt(event[2])                  
          let localDate = new Date(Date.UTC(years,month,days));
          let options = { year: 'numeric', month: 'long', day: 'numeric' };          
          return(
            <div key={i}>
              <Link href={{ pathname : '../JobDetail/JobDetail' , query : { id : data.id} }}>
                <SegmentContent >
                    <HeaderContent floated='right'>
                      <LabelDate>
                        {localDate.toLocaleDateString('th-TH', options)}
                      </LabelDate><br/><br/>
                      <LabelRecruit>
                        {data.value} อัตรา
                      </LabelRecruit>
                    </HeaderContent>
                    <HeaderContent floated='left'>
                      {i+1}. {data.position_name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>
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
        return null
      }
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
  </div>
);
export { default as Jobs_Recruit } from './Jobs_Recruit'