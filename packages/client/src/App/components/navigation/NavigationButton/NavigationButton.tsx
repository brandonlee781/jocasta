import React from 'react';
import { LinkProps } from 'react-router-dom';
import { Button, ButtonText } from './NavigationButton.style';

export interface NavigationButtonProps extends LinkProps {}
export const NavigationButton: React.FC<NavigationButtonProps> = ({ children, to, onClick }) => {
  return (
    <Button to={to} exact onClick={onClick}>
      <ButtonText>
        { children }
      </ButtonText>
    </Button>
  );
};
