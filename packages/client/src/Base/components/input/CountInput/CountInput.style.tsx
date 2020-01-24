import ButtonBase from '@material-ui/core/ButtonBase'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const Content = styled(Grid)``;

interface ButtonProps { dark?: number; };
export const Button = styled(ButtonBase)<ButtonProps>`
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
    background-color: ${p => p.dark ? 'transparent' : '#243A51'};
    
    svg {
      color: white;
      font-size: 16px;
    }
  }
`;