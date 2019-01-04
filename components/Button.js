import { Button , Label , Image , Icon } from 'semantic-ui-react'
import React from 'react'
import styled from 'styled-components';

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

const SizeBtnOrange = styled(Button)`
    height: 50px;
    width: 46%;
    font-family : 'Kanit', sans-serif !important;
    font-size: 16px !important;
`;

export  const btn_primary =(name)=> {
    return <Button>{name}</Button>
}

export const btn_orange = (name , link , fn) =>{
    return <Button as='div' labelPosition='right' onClick={fn}>
                <ColorBTN>
                    {name}
                </ColorBTN>
                <Colorlabel as='a'>
                    <Image src={link} size='small' />
                </Colorlabel>
            </Button>
}

export const btn_orangeBasic = (name) => {
    return  <SizeBtnOrange basic color='orange'>
                {name}
            </SizeBtnOrange>
}