import React from 'react';
import { Characteristics } from './Characteristics';
import { MobileDisplay } from 'Base/stories/MobileDisplay';
import { Character } from 'Character/Character.model';

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

const character: Pick<Character, 'characteristics'> = {
  characteristics: {
    agility: 2,
    brawn: 2,
    cunning: 5,
    intellect: 3,
    presence: 2,
    willpower: 2,
  },
};



export const Default = () => (
  <Characteristics  {...character.characteristics} />
);