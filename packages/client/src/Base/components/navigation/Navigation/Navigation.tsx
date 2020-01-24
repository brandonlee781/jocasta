import React from 'react';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import NotesIcon from '@material-ui/icons/Notes';
import StarsOutlinedIcon from '@material-ui/icons/StarsOutlined';
import { ReactComponent as GearIcon } from 'assets/svg/ui/gear.svg';
import { ReactComponent as DutyIcon } from 'assets/svg/ui/rebels.svg';
import { ReactComponent as SkillIcon } from 'assets/svg/ui/skills.svg';
import { useRouteMatch } from 'react-router-dom';

import { NavigationButton } from 'Base/components/navigation/NavigationButton';
import { NavigationWrapper } from './Navigation.style';


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