import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Wrapper = styled.header`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-height: 32px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Name = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #DADADA;
`;

export interface TopNavProps {
  menuClick: () => any,
  name?: string;
}
export const TopNav: React.FC<TopNavProps> = ({ menuClick, name, children}) => {
  return (
    <Wrapper>
      <FlexRow>
        <IconButton size="small" onClick={menuClick}>
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