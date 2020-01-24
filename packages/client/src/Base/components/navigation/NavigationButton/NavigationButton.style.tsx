import styled from 'styled-components';
import { NavLink, LinkProps } from 'react-router-dom';
import { Typography } from '@material-ui/core';

export const ButtonText = styled(Typography)`
  && {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;

    & svg {
      margin-bottom: 6px;
    }
  }
`;

export const Button = styled(NavLink)<LinkProps>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 88px;
  width: 88px;
  border: none;
  text-decoration: none;

  border-radius: 25px;
  background: transparent;
  
  &.active {
    background: #243A51;
    color: white;
  }
`;