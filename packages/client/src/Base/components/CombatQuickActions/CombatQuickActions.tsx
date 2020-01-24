import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { ReactComponent as WeaponIcon } from 'assets/svg/ui/weapon-quick-action.svg';
import { Threshold } from 'Base/types/Threshold';
import { HealthButtonContent } from './CombatQuickActions.style';

export interface CombatQuickActionsProps {
  wounds: Threshold,
  strain: Threshold,
  weaponClick: () => any,
  healthClick: () => any,
}
export const CombatQuickActions: React.FC<CombatQuickActionsProps> = ({ wounds, strain, weaponClick, healthClick}) => {
  return (
    <>
      <IconButton size="small" onClick={weaponClick}>
        <WeaponIcon height="24px" width="24px" fill="#DADADA"/>
      </IconButton>
      <Button size="small" onClick={healthClick}>
        <HealthButtonContent>
          <span>{wounds.current}/{wounds.threshold} Wound</span>
          <span>{strain.current}/{strain.threshold} Strain</span>
        </HealthButtonContent>
      </Button>
    </>
  );
};