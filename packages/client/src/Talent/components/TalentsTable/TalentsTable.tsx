import React from 'react';
import { BaseTable } from 'Base/components/BaseTable/BaseTable';
import { Talent } from 'generated/graphql';
import { TableRow, Typography } from '@material-ui/core';
import { StyledTableCell } from 'Base/components/BaseTable/BaseTable.style';

interface TableTalent {
  id: Talent['id'];
  name: Talent['name'];
  rank?: number;
  isRanked: Talent['ranked'];
  description: Talent['description'];
}
interface TalentsTableProps {
  talents: Talent[];
}
export const TalentsTable: React.FC<TalentsTableProps> = ({ talents }) => {
  const headers = ['Talent', 'Rank', 'Description'];

  const tableTalents: TableTalent[] = [];
  talents.forEach(tal => {
    const foundIndex = tableTalents.findIndex(tab => tab.id === tal.id);

    if (tal.ranked && foundIndex >= 0) {
      tableTalents[foundIndex].rank! += 1;
    } else {
      tableTalents.push({
        id: tal.id,
        name: tal.name,
        rank: tal.ranked ? 1 : undefined,
        isRanked: tal.ranked,
        description: tal.description
      });
    }
  });

  return (
    <BaseTable headers={headers}>
      {tableTalents?.map(talent => (
        <TableRow key={talent.id}>
          <StyledTableCell>
              {talent.name}
          </StyledTableCell>
          <StyledTableCell color="#fff" align="center">
            {talent.isRanked && talent.rank}
          </StyledTableCell>
          <StyledTableCell color="#fff">
            <Typography variant="caption">
              {talent.description}
            </Typography>
          </StyledTableCell>
        </TableRow>
      ))}
    </BaseTable>
  );
};
