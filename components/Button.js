import { Button , Label , Image } from 'semantic-ui-react'
import React from 'react'
import styled from 'styled-components';


const MarginBTN = styled(Button)`
    margin-left: 28% !important;
`;

const ColorBTN = styled(Button)`
    box-shadow: 0 0 0px 1px #ee3900 !important;
    background : #fff !important;
    color : #ee3900 !important;
    font-family : 'Kanit', sans-serif !important;
`;

const Colorlabel = styled(Label)`
    box-shadow: 0 0 0px 1px #ee3900 !important;
    background : #ee3900 !important;
    color : #fff !important;
`;

export  const btn_primary =(name)=> {
    return <Button>{name}</Button>
}

export const btn_orange = (name , link , fn) =>{
    return <MarginBTN as='div' labelPosition='right' onClick={fn}>
                <ColorBTN>
                    {name}
                </ColorBTN>
                <Colorlabel as='a' icon>
                    <Image src={link} size='small' />
                </Colorlabel>
            </MarginBTN>
}