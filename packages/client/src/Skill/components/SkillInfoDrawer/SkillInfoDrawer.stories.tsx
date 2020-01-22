import React from 'react';
import { SkillType } from 'Skill/Skill.model';
import { Characteristic } from 'Base/types/Characteristic';
import { ReactComponent as AstrogationIcon } from 'assets/svg/skills/astrogation.svg';
import { MobileDisplay } from 'Base/stories/MobileDisplay';
import { SkillInfoDrawer } from './SkillInfoDrawer';

export default {
  title: 'SkillInfoDrawer',
  component: SkillInfoDrawer,
}

const props = {
  skill: {
    id: 1,
    name: 'Astrogation',
    type: SkillType.General,
    characteristic: Characteristic.Intellect,
    career: false,
    rank: 0,
  },
  character: {
    id: 1,
    name: 'Bran Highwind',
    characteristics: {
      agility: 2,
      brawn: 2,
      cunning: 3,
      intellect: 5,
      presence: 2,
      willpower: 2,
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