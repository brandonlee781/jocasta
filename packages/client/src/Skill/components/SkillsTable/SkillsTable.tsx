import React from 'react';

import TableRow from '@material-ui/core/TableRow';
import { StyledTableCell } from 'Base/components/BaseTable/BaseTable.style';
import SkillIcons from 'Skill/components/SkillInfoDrawer/SkillIcons/SkillIcons';

import { SkillResponse } from 'Skill/use/useSkills';
import { Grid } from '@material-ui/core';
import { BaseTable } from 'Base/components/BaseTable/BaseTable';
import { CharacteristicName } from 'generated/graphql';
import { CareerDot, SkillIcon } from './SkillsTable.style';
import { CharacteristicAcronyms } from '../SkillInfoDrawer/SkillInfoDrawer';

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
          <StyledTableCell hideBorder>
            <Grid container alignItems="center">
              <SkillIcon>{SkillIcons[skill.id]}</SkillIcon>
              {skill.name}
            </Grid>
          </StyledTableCell>
          <StyledTableCell color="#fff" hideBorder>
            {CharacteristicAcronyms[skill?.characteristic.toLowerCase() as CharacteristicName]}
          </StyledTableCell>
          <StyledTableCell color="#fff" align="center" hideBorder>
            <CareerDot career={skill?.career}/>
          </StyledTableCell>
          <StyledTableCell color="#fff" align="center" hideBorder>
            {skill?.rank}
          </StyledTableCell>
        </TableRow>
      ))}
    </BaseTable>
  );
};
