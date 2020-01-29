import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { StyledHeadCell } from './BaseTable.style';

interface BaseTableProps {
  headers: string[];
}
export const BaseTable: React.FC<BaseTableProps> = ({ headers, children }) => {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            { headers.map(header => (
              <StyledHeadCell>{header}</StyledHeadCell>

            )) }
          </TableRow>
        </TableHead>
        <TableBody>
          {children}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
