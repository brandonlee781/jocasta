import React, { useState, useEffect } from 'react';
import { useSkills, SkillResponse } from 'Skill/use/useSkills';
import { CharacterSkill } from 'Character/Character.model';
import { CharacteristicAcronyms, Characteristic } from 'Base/types/Characteristic';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { RootDispatcher, InfoDrawerChildren } from 'store/root-reducer';
import { SkillIcons } from 'Skill/components/SkillInfoDrawer/SkillIcons/SkillIcons';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { SkillType } from 'Skill/Skill.model';

const Content = styled.div`
  background: rgba(229, 229, 229, 0.12);
  border-radius: 25px;
  padding: 16px 8px;
  width: 100%;

  .tabs-indicator {
    display: none;
  }
`;

const SkillTitle = styled.div`
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  color: #DADADA;
  margin-bottom: 4px;
`;

const SkillHeadCell = styled(TableCell)`
  && {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: rgba(218, 218, 218, 0.5);
    border-top: 1px solid rgba(218, 218, 218, 0.5);
    border-bottom: 1px solid rgba(218, 218, 218, 0.5);
  }
`;

const SkillNameCell = styled(TableCell)`
  && {
    color: #DADADA;
    border-bottom: none;
    
    & > .name-cell {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
    }
  }
`;

const SkillIcon = styled.span`
  display: inline-flex;
  align-items: center;
  height: 100%;
  margin-right: 4px;
  svg {
    height: 16px;
    width: 16px;
  }
`;

const SkillDataCell = styled(SkillNameCell)`
  && {
    color: #FFFFFF;
  }
`;
type CareerDotProps = { career: boolean; };
const CareerDot = styled.div<CareerDotProps>`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: ${p => p.career ? '#FFF' : 'transparent'};
  border: 1px solid #FFF;
  margin: 0 auto;
`;

interface StyledTabProps {
  label: string;
}

const StyledTab = styled(Tab)`
  && {
    text-transform: none;
    font-size: 16px;
    line-height: 19px;
    color: rgba(218, 218, 218, 0.6);
    min-width: 0;
    padding: 0 8px;
    
    &.Mui-selected {
      text-decoration-line: underline;
      color: #DADADA;
    }
  }
`;

interface CharacterSkillsProps {
  skills?: CharacterSkill[]
}
export const CharacterSkills: React.FC<CharacterSkillsProps> = ({
  skills: characterSkills
}) => {
  const [tab, setTab] = useState(0);
  const { skills } = useSkills(characterSkills);
  const [filteredSkills, setFilteredSkills] = useState<SkillResponse[]>();
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
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
    const sk = skills?.filter(skill => {
      if (newValue === 1) {
        return skill.type === SkillType.General;
      } if (newValue === 2) {
        return skill.type === SkillType.Combat;
      } if (newValue === 3) {
        return skill.type === SkillType.Knowledge;
      }
      return true;
    });
    if (sk?.length) {
      setFilteredSkills(sk);
    }
  };

  useEffect(() => {
    setFilteredSkills(skills);
  }, [skills]);

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
          <StyledTab label="All" />
          <StyledTab label="General" />
          <StyledTab label="Combat" />
          <StyledTab label="Knowledge" />
        </Tabs>


        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <SkillHeadCell>Skill</SkillHeadCell>
                <SkillHeadCell>Char</SkillHeadCell>
                <SkillHeadCell>Career</SkillHeadCell>
                <SkillHeadCell>Rank</SkillHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredSkills?.map(skill => (
                <TableRow key={skill.id} onClick={() => clickSkill(skill)}>
                  <SkillNameCell>
                    <div className="name-cell">
                      <SkillIcon>{SkillIcons[skill.id]}</SkillIcon>
                      {skill.name}
                    </div>
                  </SkillNameCell>
                  <SkillDataCell>
                    {CharacteristicAcronyms[skill?.characteristic.toLowerCase() as Characteristic]}
                  </SkillDataCell>
                  <SkillDataCell align="center">
                    <CareerDot career={skill?.career}/>
                  </SkillDataCell>
                  <SkillDataCell align="center">{skill?.rank}</SkillDataCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Content>
    </>
  );
};
