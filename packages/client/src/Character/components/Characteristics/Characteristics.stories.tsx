import React from 'react';
import { MobileDisplay } from 'Base/stories/MobileDisplay';
import { Characteristic } from 'generated/graphql';
import { Characteristics } from './Characteristics';

const style = {
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  background: 'radial-gradient(85.02% 85.02% at 50% 16.43%, #1B2735 0%, #243A51 100%)'
};
export default {
  title: 'Characteristic',
  component: Characteristics,
  decorators: [(story: any) => (
    <MobileDisplay width={360} >
      <div style={style}>
        {story()}
      </div>
    </MobileDisplay>)
  ]
}

const characteristics: Characteristic = {
  id: '1',
  Agility: 2,
  Brawn: 2,
  Cunning: 5,
  Intellect: 3,
  Presence: 2,
  Willpower: 2,
};



export const Default = () => (
  <Characteristics  {...characteristics} />
);