import { Button , Label , Image } from 'semantic-ui-react'
import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'

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

const BtnSuccess = styled(Button)`
    box-shadow: 0 0 0px 1px #ee3900 !important;
    font-family : 'Kanit', sans-serif !important;
    background : #ee3900 !important;
    color : #fff !important;
    font-weight: 500 !important;
`;

const BtnBack = styled(Button)`
    box-shadow: 0 0 0px 1px #ee3900 !important;
    font-family : 'Kanit', sans-serif !important;
    background : #ee3900 !important;
    color : #fff !important;
    font-weight: 500 !important;
    height: 46px;
    width: 30%;
`;

export  const btn_primary =(name)=> {
    return <Button>{name}</Button>
}

export const btn_orange = (name , link) =>{
    return <Button as='div' labelPosition='right'>
                <ColorBTN>
                    {name}
                </ColorBTN>
                <Colorlabel as='a' icon>
                    <Image src={link} size='small' />
                </Colorlabel>
            </Button>
}

export const btn_NextBack = (nameBack , linkBack , nameNext , linkImgNext , linkNext ) => {
    return  <div>
                <Link href={linkBack}>
                    <BtnBack basic color='orange'>
                        {nameBack}
                    </BtnBack>
                </Link>&nbsp;
                <Link href={linkNext}>
                    <Button as='div' labelPosition='right'>
                        <ColorBTN>
                            {nameNext}
                        </ColorBTN>
                        <Colorlabel as='a' icon>
                            <Image src={linkImgNext} size='small' />
                        </Colorlabel>
                    </Button>
                </Link>
            </div>
}

export const btn_Success = (nameBack , linkBack , nameNext , linkImgNext , linkNext ) => {
    return  <div>
                <Link href={linkBack}>
                    <BtnBack basic color='orange'>
                        {nameBack}
                    </BtnBack>
                </Link>&nbsp;
                <Link href={linkNext}>
                    <Button as='div' labelPosition='right'>
                        <BtnSuccess>
                            {nameNext}
                        </BtnSuccess>
                        <Colorlabel as='a' icon>
                            <Image src={linkImgNext} size='small' />
                        </Colorlabel>
                    </Button>
                </Link>
            </div>
}