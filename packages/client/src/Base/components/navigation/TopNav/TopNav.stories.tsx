import React from 'react'
import { MobileDisplay } from 'Base/stories/MobileDisplay';
import { action } from '@storybook/addon-actions';
import { Button } from '@material-ui/core';
import { CombatQuickActions } from '../../CombatQuickActions';
import { TopNav } from './TopNav'

export default {
  title: 'Base/Navigation/TopNav',
  component: TopNav
}

const health = {
  wounds: {
    id: '1',
    current: 0,
    threshold: 12,
  },
  strain: {
    id: '2',
    current: 0,
    threshold: 13,
  },
};
export const Default = () => (
  <MobileDisplay>
    <div style={{ background: 'black' }}>
      <TopNav>
        <Button style={{color: '#DADADA'}}>+ Exp</Button>
      </TopNav>
    </div>
  </MobileDisplay>
);

const characterName = "Bran Highwind";
export const WithCombatQuickActions = () => (
  <MobileDisplay>
    <div style={{ background: 'black' }}>
      <TopNav name={characterName}>
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
