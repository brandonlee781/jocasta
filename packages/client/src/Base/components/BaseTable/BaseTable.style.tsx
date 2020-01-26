import { TableCell } from '@material-ui/core';
import styled from 'styled-components';

export const StyledHeadCell = styled(TableCell)`
  && {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: rgba(218, 218, 218, 0.5);
    border-top: 1px solid rgba(218, 218, 218, 0.5);
    border-bottom: 1px solid rgba(218, 218, 218, 0.5);
  }
`;

interface StyledTableCellProps { color?: string; hideBorder?: boolean }
export const StyledTableCell = styled(TableCell)<StyledTableCellProps>`
  && {
    color: ${p => p.color ? p.color : '#DADADA'};
    ${p => p.hideBorder ? 'border-bottom: none;' : 'border-bottom: 1px solid rgba(218, 218, 218, 0.5)' }
  }
`;