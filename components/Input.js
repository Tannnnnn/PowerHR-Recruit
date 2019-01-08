import React from 'react'
import styled from 'styled-components';
import { Form , TextArea } from 'semantic-ui-react'

const SizeText1 = styled.label`
    font-size: 16px !important;
    font-weight: 600 !important;
`;

const SizeTextinput = styled.input`
    font-size: 16px !important;
    font-family : 'Kanit', sans-serif !important;
`;

const WidthForm = styled(Form.Field)`
    width: 100%;
`;

const WidthFormRight = styled(Form.Field)`
    width: 74%;
`;

const WidthFormRight4Grid = styled(Form.Field)`
    width: 74%;
    margin-left: 20% !important;
`;

const WidthFormRight4GridMG = styled(Form.Field)`
    width: 74%;
    margin-left: 60% !important;
`;

const FontTextArea = styled(TextArea)`
    font-size: 16px !important;
    font-family : 'Kanit', sans-serif !important;
`;

export const input2GrideGrideMG = (data , placeholder , fn , type , value) => (
    <div>
        <Form>
            <WidthForm>
                <SizeText1>{data}</SizeText1>
                <SizeTextinput placeholder={placeholder} onChange={fn} defaultValue={value} type={type}/>
            </WidthForm>
        </Form>
    </div>
)

export const input2Gride = (data , placeholder , fn , type , value) => (
    <div>
        <Form>
            <WidthFormRight>
                <SizeText1>{data}</SizeText1>
                <SizeTextinput placeholder={placeholder} onKeyUp={fn} type={type} defaultValue={value}/>
            </WidthFormRight>
        </Form>
    </div>
)

export const inputGridePosition = (data , placeholder , name) => (
    <div>
        <Form>
            <WidthFormRight>
                <SizeText1>{data}</SizeText1>
                <SizeTextinput placeholder={placeholder} value={name} disabled/>
            </WidthFormRight>
        </Form>
    </div>
)

export const input4Gride = (data , placeholder , fn , type , value) => (
    <div>
        <Form>
            <WidthFormRight4Grid>
                <SizeText1>{data}</SizeText1>
                <SizeTextinput placeholder={placeholder} onChange={fn} defaultValue={value} type={type}/>
            </WidthFormRight4Grid>
        </Form>
    </div>
)

export const input4GrideMG = (data , placeholder , fn , type , value) => (
    <div>
        <Form>
            <WidthFormRight4GridMG>
                <SizeText1>{data}</SizeText1>
                <SizeTextinput placeholder={placeholder} onChange={fn} defaultValue={value} type={type}/>
            </WidthFormRight4GridMG>
        </Form>
    </div>
)

export const InputTextArea = (data , placeholder , fn , value) =>(
    <div>
        <Form>
            <SizeText1>{data}</SizeText1>
            <FontTextArea autoHeight placeholder={placeholder} rows={4} onChange={fn} value={value}/>
        </Form>
    </div>
)

export const InputTextAreaMini = (data,placeholder) =>(
    <div>
        <Form>
            <SizeText1>{data}</SizeText1>
            <FontTextArea autoHeight placeholder={placeholder} rows={1} />
        </Form>
    </div>
)