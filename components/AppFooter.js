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
    padding-top : 15px ;
    color: #ffffff;
`
const LabelContact = styled.label`
    font-size: 18px ;
`
const LabelAddress = styled.label`
    font-size: 14px ;
`
export default () => (
    <div>
        <SegmentFooter>
            <Container>
                <ContentFooter>
                    <LabelContact>Contact : oraphan@cupcodeteam.com</LabelContact><br/><br/>
                    <LabelAddress>
                        <Icon name="map marker alternate"/>
                        65/184 อาคารชำนาญเพ็ญชาติ บิสเนส เซ็นเตอร์ ถนน พระราม 9 แขวง ห้วยขวาง เขต ห้วยขวาง กรุงเทพมหานคร 10310 
                    </LabelAddress>
                </ContentFooter>
            </Container>
        </SegmentFooter>
    </div>
)