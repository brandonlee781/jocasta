import React from 'react';
import { CharacteristicAcronyms, Characteristic } from 'Base/types/Characteristic';

import TableRow from '@material-ui/core/TableRow';
import { StyledTableCell } from 'Base/components/BaseTable/BaseTable.style';
import SkillIcons from 'Skill/components/SkillInfoDrawer/SkillIcons/SkillIcons';

import { SkillResponse } from 'Skill/use/useSkills';
import { Grid } from '@material-ui/core';
import { BaseTable } from 'Base/components/BaseTable/BaseTable';
import { CareerDot, SkillIcon } from './SkillsTable.style';

interface CharacterSkillsTableProps {
  skills?: SkillResponse[];
  onSkillClick: (value: SkillResponse) => void;
}
export const CharacterSkillsTable: React.FC<CharacterSkillsTableProps> = ({ skills, onSkillClick }) => {
  const headers = ['Skills', 'Char', 'Career', 'Rank'];
  return  (
    <BaseTable headers={headers}>
      {skills?.map(skill => (
        <TableRow key={skill.id} onClick={() => onSkillClick(skill)}>
          <StyledTableCell>
            <Grid container alignItems="center">
              <SkillIcon>{SkillIcons[skill.id]}</SkillIcon>
              {skill.name}
            </Grid>
          </StyledTableCell>
          <StyledTableCell color="#fff">
            {CharacteristicAcronyms[skill?.characteristic.toLowerCase() as Characteristic]}
          </StyledTableCell>
          <StyledTableCell color="#fff" align="center">
            <CareerDot career={skill?.career}/>
          </StyledTableCell>
          <StyledTableCell color="#fff" align="center">
            {skill?.rank}
          </StyledTableCell>
        </TableRow>
      ))}
    </BaseTable>
  );
};
