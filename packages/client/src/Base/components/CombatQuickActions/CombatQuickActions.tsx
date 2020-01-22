import React from 'react';
import { IconButton } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { ReactComponent as WeaponIcon } from 'assets/svg/ui/weapon-quick-action.svg';
import { Threshold } from 'Base/types/Threshold';
import styled from 'styled-components';

const HealthButtonContent = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 10px !important;
  line-height: 12px !important;

    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    color: #DADADA !important;
    text-transform: none;
`;

export interface CombatQuickActionsProps {
  wounds: Threshold,
  strain: Threshold,
  weaponClick: () => any,
  healthClick: () => any,
}
export const CombatQuickActions: React.FC<CombatQuickActionsProps> = ({ wounds, strain, weaponClick, healthClick}) => {
  return (
    <React.Fragment>
      <IconButton size="small" onClick={weaponClick}>
        <WeaponIcon height="24px" width="24px" fill="#DADADA"/>
      </IconButton>
      <Button size="small" onClick={healthClick}>
        <HealthButtonContent>
          <span>{wounds.current}/{wounds.threshold} Wound</span>
          <span>{strain.current}/{strain.threshold} Strain</span>
        </HealthButtonContent>
      </Button>
    </React.Fragment>
  );
};