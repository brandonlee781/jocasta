import React from 'react';
import { ReactComponent as AstrogationIcon } from 'assets/svg/skills/astrogation.svg';
import { MobileDisplay } from 'Base/stories/MobileDisplay';
import { SkillType, CharacteristicName } from 'generated/graphql';
import { SkillInfoDrawer } from './SkillInfoDrawer';

export default {
  title: 'Skill/SkillInfoDrawer',
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

export const Default = () => {
  const { skill, character } = props;
  return (
    <MobileDisplay width={300}>
      <SkillInfoDrawer
        skill={skill}
        icon={<AstrogationIcon />}
        characteristics={character.characteristics}
      />
    </MobileDisplay>
  );
};