import React, { useState } from 'react';
import { HealthInfoDrawer } from './HealthInfoDrawer';
import { MobileDisplay } from 'Base/stories/MobileDisplay';
import { Character } from 'Character/Character.model';

export default {
  title: 'HealthInfoDrawer',
  component: HealthInfoDrawer,
}

const character: Pick<Character, 'derivedAttributes' | 'injuries'> = {
  derivedAttributes: {
    id: '1234',
    soak: 3,
    wounds: {
      current: 0,
      threshold: 14,
    },
    strain: {
      current: 0,
      threshold: 13,
    },
    defense: {
      id: 'defense',
      ranged: 1,
      melee: 1
    },
  },
  injuries: '',
}


export const Default = () => {
  const [char, setChar] = useState(character);

  const woundsChange = (value: number) => {
    setChar({
      ...char,
      derivedAttributes: {
        ...char.derivedAttributes,
        wounds: {
          current: value,
          threshold: char?.derivedAttributes?.wounds?.threshold ?? 0,
        },
      },
    });
  };
  const strainChange = (value: number) => {
    setChar({
      ...char,
      derivedAttributes: {
        ...char.derivedAttributes,
        strain: {
          current: value,
          threshold: char?.derivedAttributes?.strain?.threshold ?? 0,
        },
      },
    });
  };
  const injuriesChange = (value: string) => {
    setChar({
      ...char,
      injuries: value,
    });
  }
  return (
    <MobileDisplay width={300}>
      <HealthInfoDrawer
        soak={char?.derivedAttributes?.soak ?? 0}
        meleeDef={char?.derivedAttributes?.defense?.melee ?? 0}
        rangedDef={char?.derivedAttributes?.defense?.ranged ?? 0}
        wounds={char?.derivedAttributes?.wounds}
        strain={char?.derivedAttributes?.strain}
        injuries={char?.injuries ?? ''}
        onWoundsChange={woundsChange}
        onStrainChange={strainChange}
        onInjuriesChange={injuriesChange}
      />
    </MobileDisplay>
  );
}
