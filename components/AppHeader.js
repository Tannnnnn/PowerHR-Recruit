import { Segment , Header , Container , Menu } from 'semantic-ui-react'
import styled from 'styled-components'
import Link from 'next/link'

const SegmentHeader = styled(Segment) `
    overflow : none !important;
    background : #ff5722 !important;
    padding-bottom : 0px !important;
    border-radius : 0px !important;
    border-bottom: 8px solid #ee3900 !important;
`;

const TextHeader = styled(Header)`
    margin-bottom : 16px !important;
    font-family: 'Kanit', sans-serif !important;
    color : #fff !important;
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
        <SegmentHeader clearing >
            <Container>
                <TextHeader as='h4' floated='right'>
                    <Link href='../Interview/ListPositionInterview'>
                        <MenuItem>
                            ประกาศผลการสัมภาษณ์
                        </MenuItem>
                    </Link>
                </TextHeader>
                <TextHeader as='h4' floated='right'>
                    <Link href='/index'>
                        <MenuItem>
                            ตำแหน่งเปิดรับ
                        </MenuItem>
                    </Link>
                </TextHeader>
            </Container>
        </SegmentHeader>
    </div>
)