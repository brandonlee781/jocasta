import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useTheme } from '@material-ui/core';
import { Content, Button } from './CountInput.style';

export interface CountInputProps {
  increase?: () => void;
  decrease?: () => void;
}
export const CountInput: React.FC<CountInputProps> = ({ children, increase, decrease }) => {
  const theme = useTheme();
  const isDark = theme.palette.type === 'dark';
  return (
    <Content container direction="row" justify="space-around">
      <Button data-testid="increase-button" onClick={increase} dark={isDark ? 1 : 0}>
        <AddIcon />
      </Button>
      {children}
      <Button data-testid="decrease-button" onClick={decrease} dark={isDark ? 1 : 0}>
        <RemoveIcon />
      </Button>
    </Content>
  );
};