import React from 'react';
import { Attributes } from './Attributes';
import { MobileDisplay } from 'Base/stories/MobileDisplay';
import { Character } from 'Character/Character.model';

const style = {
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  padding: '40px 52px',
  background: 'radial-gradient(85.02% 85.02% at 50% 16.43%, #1B2735 0%, #243A51 100%)'
};

export default {
  title: 'Attributes',
  component: Attributes,
  decorators: [(story: any) => (
    <MobileDisplay width={360} >
      <div style={style}>
        {story()}
      </div>
    </MobileDisplay>)
  ]
}

const character: Pick<Character, 'derivedAttributes'> = {
  derivedAttributes: {
    soak: 3,
    wounds: {
      current: 0,
      threshold: 14
    },
    strain: {
      current: 0,
      threshold: 13,
    },
    defense: {
      melee: 1,
      ranged: 1,
    },
  },
};

export const Default = () => (
  <Attributes {...character.derivedAttributes} />
);