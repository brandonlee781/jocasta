import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux';
import { RootDispatcher } from 'store/root-reducer';
import { Wrapper, FlexRow, Name } from './TopNav.style';

export interface TopNavProps {
  name?: string;
}
export const TopNav: React.FC<TopNavProps> = ({ name, children}) => {
  const dispatch = useDispatch();
  const { toggleMenu } = new RootDispatcher(dispatch);
  return (
    <Wrapper>
      <FlexRow>
        <IconButton size="small" onClick={toggleMenu}>
          <MenuIcon htmlColor="#DADADA"/>
        </IconButton>
        <Name>{name}</Name>
      </FlexRow>

      <FlexRow>
        {children}
      </FlexRow>
    </Wrapper>
  );
};