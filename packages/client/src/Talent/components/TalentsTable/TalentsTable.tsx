import React from 'react';
import { BaseTable } from 'Base/components/BaseTable/BaseTable';

interface TalentsTableProps {

}
export const TalentsTable: React.FC<TalentsTableProps> = () => {
  const headers = ['Talent', 'Rank', 'Description'];
  return (
    <BaseTable headers={headers}>
      <span>hello</span>
    </BaseTable>
  );
};
