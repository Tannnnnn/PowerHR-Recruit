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

export const input2GrideGrideMG = (firstName , placeholder) => (
    <div>
        <Form>
            <WidthForm>
                <SizeText1>{firstName}</SizeText1>
                <SizeTextinput placeholder={placeholder} />
            </WidthForm>
        </Form>
    </div>
)

export const input2Gride = (firstName , placeholder) => (
    <div>
        <Form>
            <WidthFormRight>
                <SizeText1>{firstName}</SizeText1>
                <SizeTextinput placeholder={placeholder} />
            </WidthFormRight>
        </Form>
    </div>
)

export const input4Gride = (firstName , placeholder) => (
    <div>
        <Form>
            <WidthFormRight4Grid>
                <SizeText1>{firstName}</SizeText1>
                <SizeTextinput placeholder={placeholder} />
            </WidthFormRight4Grid>
        </Form>
    </div>
)

export const input4GrideMG = (firstName , placeholder) => (
    <div>
        <Form>
            <WidthFormRight4GridMG>
                <SizeText1>{firstName}</SizeText1>
                <SizeTextinput placeholder={placeholder} />
            </WidthFormRight4GridMG>
        </Form>
    </div>
)

export const InputTextArea = (firstName,placeholder) =>(
    <div>
        <Form>
            <SizeText1>{firstName}</SizeText1>
            <FontTextArea autoHeight placeholder={placeholder} rows={4} />
        </Form>
    </div>
)

export const InputTextAreaMini = (firstName,placeholder) =>(
    <div>
        <Form>
            <SizeText1>{firstName}</SizeText1>
            <FontTextArea autoHeight placeholder={placeholder} rows={1} />
        </Form>
    </div>
)