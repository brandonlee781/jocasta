import React, { useState, memo } from 'react';
import { useSkills, SkillResponse, SkillTypeFilter } from 'Skill/use/useSkills';

import { useDispatch } from 'react-redux';
import { RootDispatcher, InfoDrawerChildren } from 'store/root-reducer';
import Tabs from '@material-ui/core/Tabs';
import { LoadingSpinner } from 'Base/components/loading/LoadingSpinner';
import { CharacterSkillsTable } from 'Skill/components/SkillsTable';
import { SkillTitle, Content, StyledTab } from './CharacterSkills.style';
import { SkillType, CharacterSkills as CharacterSkill } from 'generated/graphql';

interface CharacterSkillsProps {
  skills: CharacterSkill[]
}
export const CharacterSkills: React.FC<CharacterSkillsProps> = memo(({
  skills
}) => {
  const [tab, setTab] = useState<SkillTypeFilter>(SkillTypeFilter.All);
  const { loading, skills: allSkills } = useSkills(skills, tab);
  const dispatch = useDispatch();
  const { toggleInfoDrawer, setSkillInfo } = new RootDispatcher(dispatch);

  const clickSkill = (skill: SkillResponse) => {
    toggleInfoDrawer(InfoDrawerChildren.SKILL);
    setSkillInfo({
      id: skill.id,
      name: skill.name,
      characteristic: skill.characteristic,
      rank: skill.rank,
    });
  };
  const handleChange = (event: React.ChangeEvent<{}>, newValue: SkillType) => {
    setTab(newValue);
  };

  if (loading) return (
    <>
      <SkillTitle>Skills</SkillTitle>
      <LoadingSpinner />
    </>
  );

  return (
    <>
      <SkillTitle>Skills</SkillTitle>
      <Content>
        <Tabs
          value={tab}
          onChange={handleChange}
          scrollButtons="auto"
          aria-label="Tabs to filter skills by type"
          classes={{ indicator: 'tabs-indicator' }}
        >
          <StyledTab label="All" value={SkillTypeFilter.All} />
          <StyledTab label="General" value={SkillTypeFilter.General} />
          <StyledTab label="Combat" value={SkillTypeFilter.Combat} />
          <StyledTab label="Knowledge" value={SkillTypeFilter.Knowledge}/>
        </Tabs>

        <CharacterSkillsTable skills={allSkills} onSkillClick={clickSkill}/>
      </Content>
    </>
  );
}, (previousProps: CharacterSkillsProps, nextProps: CharacterSkillsProps) => {
  return JSON.stringify(previousProps.skills) !== JSON.stringify(nextProps.skills);
});
