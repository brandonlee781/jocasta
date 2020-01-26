import React from 'react';
import { ReactComponent as AstrogationIcon } from 'assets/svg/skills/astrogation.svg';
import { MobileDisplay } from 'Base/stories/MobileDisplay';
import { SkillInfoDrawer } from './SkillInfoDrawer';
import { SkillType, CharacteristicName } from 'generated/graphql';

export default {
  title: 'SkillInfoDrawer',
  component: SkillInfoDrawer,
}

const props = {
  skill: {
    id: 1,
    name: 'Astrogation',
    type: SkillType.General,
    characteristic: CharacteristicName.Intellect,
    career: false,
    rank: 0,
  },
  character: {
    id: 1,
    name: 'Bran Highwind',
    characteristics: {
      id: 'characteristics',
      Agility: 2,
      Brawn: 2,
      Cunning: 3,
      Intellect: 5,
      Presence: 2,
      Willpower: 2,
    },
  },
}

export const Default = () => (
  <MobileDisplay width={300}>
    <SkillInfoDrawer
      skill={props.skill}
      icon={<AstrogationIcon />}
      characteristics={props.character.characteristics}
    />
  </MobileDisplay>
);