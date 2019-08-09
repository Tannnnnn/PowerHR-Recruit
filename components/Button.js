import { Button , Label , Image , Icon } from 'semantic-ui-react'
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
    width: 36% !important;
    padding-top: 10px !important;
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

export const btn_NextBack = (nameBack , nameNext , linkImgNext , fnSaveNext , fnSavePrev ) => {
    return  <div>
                <BtnBack basic color='orange' onClick={fnSavePrev}>
                    <Icon name='left arrow' /> {nameBack}
                </BtnBack>&nbsp;
                <Button as='div' labelPosition='right' onClick={fnSaveNext}>
                    <ColorBTN>
                        {nameNext}
                    </ColorBTN>
                    <Colorlabel as='a'>
                        <Image src={linkImgNext} size='small' />
                    </Colorlabel>
                </Button>
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
                        <Colorlabel as='a'>
                            <Image src={linkImgNext} size='small' />
                        </Colorlabel>
                    </Button>
                </Link>
            </div>
}