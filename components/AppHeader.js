import { Segment , Header , Container , Menu , Image , Icon , Dropdown } from 'semantic-ui-react'
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
    margin-top: 0.6% !important;
`;

const ImageHeader = styled(Header)`
    margin-top: 0% !important;
    margin-right: 0rem !important;
`;

const MenuItem = styled(Menu.Item)`
    color : #fff !important;
    cursor : pointer ;
    &:hover {
        color : #000 !important;
    }
`;

const options = [
    { key: 'logOut', text: ' ออกจากระบบ', value: 'logOut' }
]

export default () => (
    <div>
        <SegmentHeader clearing >
            <Container>
                <TextHeader as='h4' floated='right'>
                    <MenuItem compact>
                         <Dropdown simple item options={options} text='พงศธร จันด้วง' />
                    </MenuItem>
                </TextHeader>
                <ImageHeader as='h4' floated='right'>
                    <Image  src='https://www.img.in.th/images/ecf962ecc609572d108c0a069d31da13.png' size='small' />
                </ImageHeader>
                <TextHeader as='h4' floated='right'>
                    <Link href='../Interview/ListPositionInterview'>
                        <MenuItem>
                            ประกาศผล
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