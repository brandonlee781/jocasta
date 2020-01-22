import React from 'react';
import styled from 'styled-components';

import { Grid } from '@material-ui/core';
import { CountInput, CountInputProps } from 'Base/components/input/CountInput/CountInput';

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
export const DiceCountInput: React.FC<DiceCountInputProps> = ({ die, label, add, remove }) => {
  return (
    <Wrapper container direction="column">
      <Label>{label}</Label>
      <CountInput add={add} remove={remove}>
        {die}
      </CountInput>
    </Wrapper>
  );
};