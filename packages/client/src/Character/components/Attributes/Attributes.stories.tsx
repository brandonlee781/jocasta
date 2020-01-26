import React from 'react';
import { MobileDisplay } from 'Base/stories/MobileDisplay';
import { Character, DerivedAttribute } from 'generated/graphql';
import { Attributes } from './Attributes';

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

const derivedAttributes: DerivedAttribute = {
  id: '1',
  soak: 3,
  wounds: {
    id: '2',
    current: 0,
    threshold: 14
  },
  strain: {
    id: '3',
    current: 0,
    threshold: 13,
  },
  defense: {
    id: '4',
    melee: 1,
    ranged: 1,
  },
};

export const Default = () => (
  <Attributes {...derivedAttributes} />
);