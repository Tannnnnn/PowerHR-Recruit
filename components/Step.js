import React from 'react'
import styled from 'styled-components';
import {Step} from 'semantic-ui-react'
import theme from '../theme/default'

const StepStyle = styled(Step.Title)`
    font-family : 'Kanit', sans-serif !important;
    color: ${theme.colors.fontBlack} !important;
    font-weight: 500 !important;
`;

const StepStyle1 = styled(Step.Title)`
    font-family : 'Kanit', sans-serif !important;
    color: ${theme.colors.elementBackground} !important;
    font-weight: 600 !important;
`;

const ColorStep1 = styled(Step)`
    background: ${theme.colors.orange} !important;
    ::after {
        background: ${theme.colors.orange} !important;
    }
`;

const SizeStep = styled(Step.Group)`
    width: 90% !important;
    height: 60px;
`;

export const stepApplyJobInfomation = (information, address, school, ability, task) => (
    <div>
        <center>
            <SizeStep>
                <ColorStep1 active>
                    <Step.Content>
                        <StepStyle1>{information}</StepStyle1>
                    </Step.Content>
                </ColorStep1>
                <Step>
                    <Step.Content>
                        <StepStyle>{address}</StepStyle>
                    </Step.Content>
                </Step>
                <Step>
                    <Step.Content>
                        <StepStyle>{school}</StepStyle>
                    </Step.Content>
                </Step>
                <Step>
                    <Step.Content>
                        <StepStyle>{ability}</StepStyle>
                    </Step.Content>
                </Step>
                <Step>
                    <Step.Content>
                        <StepStyle>{task}</StepStyle>
                    </Step.Content>
                </Step>
            </SizeStep>
        </center>
    </div>
)

export const stepApplyJobAddress = (information, address, school, ability, task) => (
    <div>
        <center>
            <SizeStep>
                <Step>
                    <Step.Content>
                        <StepStyle>{information}</StepStyle>
                    </Step.Content>
                </Step>
                <ColorStep1 active>
                    <Step.Content>
                        <StepStyle1>{address}</StepStyle1>
                    </Step.Content>
                </ColorStep1>
                <Step>
                    <Step.Content>
                        <StepStyle>{school}</StepStyle>
                    </Step.Content>
                </Step>
                <Step>
                    <Step.Content>
                        <StepStyle>{ability}</StepStyle>
                    </Step.Content>
                </Step>
                <Step>
                    <Step.Content>
                        <StepStyle>{task}</StepStyle>
                    </Step.Content>
                </Step>
            </SizeStep>
        </center>
    </div>
)

export const StepApplyJobSchool = (information, address, school, ability, task) => (
    <div>
        <center>
            <SizeStep>
                <Step>
                    <Step.Content>
                        <StepStyle>{information}</StepStyle>
                    </Step.Content>
                </Step>
                <Step>
                    <Step.Content>
                        <StepStyle>{address}</StepStyle>
                    </Step.Content>
                </Step>
                <ColorStep1 active>
                    <Step.Content>
                        <StepStyle1>{school}</StepStyle1>
                    </Step.Content>
                </ColorStep1>
                <Step>
                    <Step.Content>
                        <StepStyle>{ability}</StepStyle>
                    </Step.Content>
                </Step>
                <Step>
                    <Step.Content>
                        <StepStyle>{task}</StepStyle>
                    </Step.Content>
                </Step>
            </SizeStep>
        </center>
    </div>
)

export const StepApplyJobAbility = (information, address, school, ability, task) => (
    <div>
        <center>
            <SizeStep>
                <Step>
                    <Step.Content>
                        <StepStyle>{information}</StepStyle>
                    </Step.Content>
                </Step>
                <Step>
                    <Step.Content>
                        <StepStyle>{address}</StepStyle>
                    </Step.Content>
                </Step>
                <Step>
                    <Step.Content>
                        <StepStyle>{school}</StepStyle>
                    </Step.Content>
                </Step>
                <ColorStep1 active>
                    <Step.Content>
                        <StepStyle1>{ability}</StepStyle1>
                    </Step.Content>
                </ColorStep1>
                <Step>
                    <Step.Content>
                        <StepStyle>{task}</StepStyle>
                    </Step.Content>
                </Step>
            </SizeStep>
        </center>
    </div>
)

export const StepApplyJobTask = (information, address, school, ability, task) => (
    <div>
        <center>
            <SizeStep>
                <Step>
                    <Step.Content>
                        <StepStyle>{information}</StepStyle>
                    </Step.Content>
                </Step>
                <Step>
                    <Step.Content>
                        <StepStyle>{address}</StepStyle>
                    </Step.Content>
                </Step>
                <Step>
                    <Step.Content>
                        <StepStyle>{school}</StepStyle>
                    </Step.Content>
                </Step>
                <Step>
                    <Step.Content>
                        <StepStyle>{ability}</StepStyle>
                    </Step.Content>
                </Step>
                <ColorStep1 active>
                    <Step.Content>
                        <StepStyle1>{task}</StepStyle1>
                    </Step.Content>
                </ColorStep1>
            </SizeStep>
        </center>
    </div>
)