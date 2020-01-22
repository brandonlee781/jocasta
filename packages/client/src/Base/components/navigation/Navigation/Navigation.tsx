import React from 'react';
import styled from 'styled-components';

import { ReactComponent as GearIcon } from 'assets/svg/ui/gear.svg';
import { ReactComponent as DutyIcon } from 'assets/svg/ui/rebels.svg';
import { ReactComponent as SkillIcon } from 'assets/svg/ui/skills.svg';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import NotesIcon from '@material-ui/icons/Notes';
import StarsOutlinedIcon from '@material-ui/icons/StarsOutlined';
import { useRouteMatch } from 'react-router-dom';
import { NavigationButton } from '../NavigationButton/NavigationButton';

const NavigationWrapper = styled('nav')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-items: center;
  padding: 8px;
`;
interface NavigationProps {
  linkClicked?: () => void;
}
export const Navigation: React.FC<NavigationProps> = ({ linkClicked }) => {
  const { url } = useRouteMatch();
  return (
    <NavigationWrapper>
      <NavigationButton to={`${url}`} onClick={linkClicked}>
        <FavoriteBorderIcon/>
        Stats
      </NavigationButton>

      <NavigationButton to={`${url}/gear`} onClick={linkClicked}>
        <GearIcon fill="currentColor"/>
        Gear
      </NavigationButton>

      <NavigationButton to={`${url}/notes`} onClick={linkClicked}>
        <NotesIcon/>
        Notes
      </NavigationButton>

      <NavigationButton to={`${url}/duty`} onClick={linkClicked}>
        <DutyIcon fill="currentColor"/>
        Duty
      </NavigationButton>

      <NavigationButton to={`${url}/talents`} onClick={linkClicked}>
        <StarsOutlinedIcon/>
        Talents
      </NavigationButton>

      <NavigationButton to={`${url}/skill`} onClick={linkClicked}>
        <SkillIcon fill="currentColor"/>
        Skills
      </NavigationButton>
    </NavigationWrapper>
  );
};