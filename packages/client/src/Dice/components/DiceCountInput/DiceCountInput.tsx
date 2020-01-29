import React from 'react';
import styled from 'styled-components';

import { Grid } from '@material-ui/core';
import { CountInput } from 'App/components/inputs/CountInput';
import { CountInputProps } from 'App/components/inputs/CountInput/CountInput'

const Wrapper = styled(Grid)`
  max-width: 90px;
`;

const Label = styled.span`
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
`;


export interface DiceCountInputProps extends CountInputProps {
  die: any;
  label: string;
}
export const DiceCountInput: React.FC<DiceCountInputProps> = ({ die, label, increase, decrease }) => {
  return (
    <Wrapper container direction="column">
      <Label>{label}</Label>
      <CountInput increase={increase} decrease={decrease}>
        {die}
      </CountInput>
    </Wrapper>
  );
};