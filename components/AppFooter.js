import { Segment , Header , Container , Menu } from 'semantic-ui-react'
import styled from 'styled-components'
import Link from 'next/link'

const SegmentFooter = styled(Segment) `
    overflow : none !important;
    background : #363636 !important;
    padding-bottom : 0px !important;
    border-radius : 0px !important;
    border-top: 8px solid #ee3900 !important;
    height : 130px ;
`;

const TextHeader = styled(Header)`
    margin-bottom : 16px !important;
    font-family: 'Kanit', sans-serif !important;
    color : #fff !important;
    position: relative ;
    height: 20px ;
`;

const MenuItem = styled(Menu.Item)`
    color : #fff !important;
    cursor : pointer ;
    &:hover {
        color : #000 !important;
    }
`;

export default () => (
    <div>
        <SegmentFooter clearing >
            <Container>
                <TextHeader as='h4' floated='right'>
                    
                </TextHeader>
                <TextHeader as='h4' floated='right'>
                    
                </TextHeader>
            </Container>
        </SegmentFooter>
    </div>
)