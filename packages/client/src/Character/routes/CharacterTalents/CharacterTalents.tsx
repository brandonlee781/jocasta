import React, { useState } from 'react';
import { TalentTreeNode, Specialization } from 'generated/graphql';
import { TalentsTable } from 'Talent/components/TalentsTable';
import { Tabs } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import styled from 'styled-components';
import ButtonBase from '@material-ui/core/ButtonBase'
import { SkillTitle, Content, StyledTab } from '../CharacterSkills/CharacterSkills.style';

const ToggleViewButton = styled(ButtonBase)`
  && {
    position: absolute;
    top: 22px;
    right: 16px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    svg {
      height: 18px;
      width: 18px;
    }

    span {
      font-weight: 500;
      font-size: 8px;
      line-height: 9px;
      color: #DADADA;
    }
  }
`;

type Views = 'table' | 'grid';

interface CharacterTalentsProps {
  talents?: TalentTreeNode[];
  specializations?: Specialization[];
}
export const CharacterTalents: React.FC<CharacterTalentsProps> = ({ talents: talentTreeNodes, specializations }) => {
  const allTalents = talentTreeNodes?.map(node => node.talent);
  const [talents, setTalents] = useState(allTalents);

  const [tab, setTab] = useState(0);
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
    setTalents(allTalents?.filter(tal => {
      if (newValue === 0) {
        return true;
      }
      return !!tal.specializations.find(t => t.id === newValue);
    }))
  }

  const [currentView, setCurrentView] = useState<Views>('table');
  const handleViewChange = (view: Views) => {
    setCurrentView(view);
    if (view === 'grid' && specializations?.length) {
      setTab(specializations!.map(s => s.id)[0]);
    }
  }
  return (
    <>
      <SkillTitle>Talents</SkillTitle>
      <Content>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          scrollButtons="auto"
          aria-label="Tabs to filter skills by type"
          classes={{ indicator: 'tabs-indicator' }}
        >
          { currentView === 'table' && <StyledTab label="All" value={0} /> }
          { specializations?.map(spec => (
            <StyledTab key={spec.id} label={spec.name} value={spec.id} />
          ))}
        </Tabs>
        { currentView === 'table' && (
          <>
            <TalentsTable talents={talents ?? []} />

            <ToggleViewButton onClick={() => handleViewChange('grid')}>
              <AppsIcon />
              <span>Grid View</span>
            </ToggleViewButton>
          </>
        )}
        { currentView === 'grid' && (
          <>
            <ToggleViewButton onClick={() => handleViewChange('table')}>
              <TableChartOutlinedIcon />
              <span>Table View</span>
            </ToggleViewButton>
          
          </>
        )}
      </Content>
    </>
  );
};
