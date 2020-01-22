import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Content = styled(Grid)``;
const Button = styled(ButtonBase)`
  && {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    height: 22px;
    width: 22px;
    padding: 0;
  
    border: 0;
    border-radius: 5px;
    background-color: #243A51;
    
    svg {
      color: white;
      font-size: 16px;
    }
  }
`;
export interface CountInputProps {
  add?: () => void;
  remove?: () => void;
}
export const CountInput: React.FC<CountInputProps> = ({ children, add, remove }) => {
  return (
    <Content container direction="row" justify="space-around">
      <Button data-testid="increase-button" onClick={add}>
        <AddIcon />
      </Button>
      {children}
      <Button data-testid="decrease-button" onClick={remove}>
        <RemoveIcon />
      </Button>
    </Content>
  );
};