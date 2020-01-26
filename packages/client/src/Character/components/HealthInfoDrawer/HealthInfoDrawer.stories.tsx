import React, { useState } from 'react';
import { MobileDisplay } from 'Base/stories/MobileDisplay';
import { Character, DerivedAttribute } from 'generated/graphql';
import { HealthInfoDrawer } from './HealthInfoDrawer';

export default {
  title: 'Character/HealthInfoDrawer',
  component: HealthInfoDrawer,
}

const character: { derivedAttributes: DerivedAttribute, injuries: Character['injuries'] } = {
  derivedAttributes: {
    id: '1234',
    soak: 3,
    wounds: {
      id: 'wounds',
      current: 0,
      threshold: 14,
    },
    strain: {
      id: 'strain',
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
          id: char.derivedAttributes.wounds.id,
          threshold: char.derivedAttributes.wounds.threshold,
          current: value,
        }
      }
    });
  };
  const strainChange = (value: number) => {
    setChar({
      ...char,
      derivedAttributes: {
        ...char.derivedAttributes,
        strain: {
          id: char.derivedAttributes.strain.id,
          current: value,
          threshold: char.derivedAttributes.strain.threshold,
        },
      },
    });
  };
  const injuriesChange = (value: Character['injuries']) => {
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
