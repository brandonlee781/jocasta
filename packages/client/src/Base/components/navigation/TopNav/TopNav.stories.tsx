import React from 'react'
import { TopNav } from './TopNav'
import { MobileDisplay } from 'Base/stories/MobileDisplay';
import { action } from '@storybook/addon-actions';
import { CombatQuickActions } from '../../CombatQuickActions/CombatQuickActions';
import { Button } from '@material-ui/core';

export default {
  title: 'TopNav',
  component: TopNav
}

const health = {
  wounds: {
    current: 0,
    threshold: 12,
  },
  strain: {
    current: 0,
    threshold: 13,
  },
};
export const Default = () => (
  <MobileDisplay>
    <div style={{ background: 'black' }}>
      <TopNav menuClick={action('Menu Clicked')} >
        <Button style={{color: '#DADADA'}}>+ Exp</Button>
      </TopNav>
    </div>
  </MobileDisplay>
);

const characterName = "Bran Highwind";
export const WithCombatQuickActions = () => (
  <MobileDisplay>
    <div style={{ background: 'black' }}>
      <TopNav name={characterName} menuClick={action('Menu Clicked')} >
        <CombatQuickActions
          wounds={health.wounds}
          strain={health.strain}
          weaponClick={action('Weapon Clicked')}
          healthClick={action('Health Clicked')}
        />
      </TopNav>
    </div>
  </MobileDisplay>
);
