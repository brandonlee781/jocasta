import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { NavLink, LinkProps } from 'react-router-dom';




type IButton = StyledComponent<typeof NavLink, any, NavigationButtonProps, never>
const Button: IButton = styled(NavLink)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 88px;
  width: 88px;
  border: none;

  text-decoration: none;
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;

  border-radius: 25px;
  background: transparent;
  color: #243A51;
  
  &.active {
    background: #243A51;
    color: white;
  }

  & svg {
    margin-bottom: 6px;
  }

`;

export interface NavigationButtonProps extends LinkProps {}
export const NavigationButton: React.FC<NavigationButtonProps> = ({ children, to, onClick }) => {
  return (
    <Button to={to} exact onClick={onClick}>
      { children }
    </Button>
  );
}
