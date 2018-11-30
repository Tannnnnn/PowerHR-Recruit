import { Segment , Icon , Container } from 'semantic-ui-react'
import styled from 'styled-components'

const SegmentFooter = styled(Segment) `
    overflow : none !important;
    background : #363636 !important;
    padding-bottom : 0px !important;
    border-radius : 0px !important;
    border-top: 8px solid #ee3900 !important;
    height : 130px ;
`
const ContentFooter = styled.div`
    // padding-left : 73px ;
    padding-top : 15px ;
    color: #ffffff;
`
const LabelContact = styled.label`
    font-size: 23px ;
`
const LabelAddress = styled.label`
    font-size: 18px ;
`
export default () => (
    <div>
        <SegmentFooter>
            <Container>
                <ContentFooter>
                    <LabelContact>ติดต่อสอบถาม : oraphan@cupcodeteam.com</LabelContact><br/><br/>
                    <LabelAddress>
                        <Icon name="map marker alternate"/>
                        1679/2 town in town 11 ladprao road, plabpla, wangthonglang กรุงเทพมหานคร 10310
                    </LabelAddress>
                </ContentFooter>
            </Container>
        </SegmentFooter>
    </div>
)