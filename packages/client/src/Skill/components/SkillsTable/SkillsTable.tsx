import React from 'react';
import { CharacteristicAcronyms, Characteristic } from 'Base/types/Characteristic';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SkillIcons from 'Skill/components/SkillInfoDrawer/SkillIcons/SkillIcons';

import { SkillResponse } from 'Skill/use/useSkills';
import { SkillHeadCell, SkillNameCell, CareerDot, SkillIcon, SkillDataCell } from './SkillsTable.style';

interface CharacterSkillsTableProps {
  skills?: SkillResponse[];
  onSkillClick: (value: SkillResponse) => void;
}
export const CharacterSkillsTable: React.FC<CharacterSkillsTableProps> = ({ skills, onSkillClick }) => {
  return  (
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
          {skills?.map(skill => (
            <TableRow key={skill.id} onClick={() => onSkillClick(skill)}>
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
  );
};
