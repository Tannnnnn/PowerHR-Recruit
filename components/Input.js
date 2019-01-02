import React from 'react'
import styled from 'styled-components';
import { Form , Radio } from 'semantic-ui-react'

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

const MgRedio = styled(Radio)`
    margin-left: 2%;
    font-size: 16px !important;
`;

const SizeFont = styled(Form.Field)`
    font-size: 16px !important;
    font-weight: 600 !important;
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

export const redio2 = (firstName, name1 , name2) => (
    <div>
        <Form>
            <SizeFont>
                {firstName}
            </SizeFont>
            <Form.Field>
                <MgRedio
                    label={name1}
                    name='radioGroup1'
                />
                <MgRedio
                    label={name2}
                    name='radioGroup2'
                />
            </Form.Field>
        </Form>
    </div>
)

export const redio4 = (firstName, nameRadio1 , nameRadio2 , nameRadio3 , nameRadio4 ) => (
    <div>
        <Form>
            <SizeFont>
                {firstName}
            </SizeFont>
            <Form.Field>
                <MgRedio
                    label={nameRadio1}
                    name='radioGroup1'
                />
                <MgRedio
                    label={nameRadio2}
                    name='radioGroup2'
                />
                <MgRedio
                    label={nameRadio3}
                    name='radioGroup3'
                />
                <MgRedio
                    label={nameRadio4}
                    name='radioGroup4'
                />
            </Form.Field>
        </Form>
    </div>
)

export const redio5 = (firstName, nameRadio1 , nameRadio2 , nameRadio3 , nameRadio4 , nameRadio5 ) => (
    <div>
        <Form>
            <SizeFont>
                {firstName}
            </SizeFont>
            <Form.Field>
                <MgRedio
                    label={nameRadio1}
                    name='radioGroup1'
                />
                <MgRedio
                    label={nameRadio2}
                    name='radioGroup2'
                />
                <MgRedio
                    label={nameRadio3}
                    name='radioGroup3'
                />
                <MgRedio
                    label={nameRadio4}
                    name='radioGroup4'
                />
                <MgRedio
                    label={nameRadio5}
                    name='radioGroup5'
                />
            </Form.Field>
        </Form>
    </div>
)