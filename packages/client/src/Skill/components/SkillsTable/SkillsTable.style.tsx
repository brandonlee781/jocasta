import { TableCell } from '@material-ui/core';
import styled from 'styled-components';

export const SkillHeadCell = styled(TableCell)`
  && {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: rgba(218, 218, 218, 0.5);
    border-top: 1px solid rgba(218, 218, 218, 0.5);
    border-bottom: 1px solid rgba(218, 218, 218, 0.5);
  }
`;

export const SkillNameCell = styled(TableCell)`
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

export const SkillIcon = styled.span`
  display: inline-flex;
  align-items: center;
  height: 100%;
  margin-right: 4px;
  svg {
    height: 16px;
    width: 16px;
  }
`;

export const SkillDataCell = styled(SkillNameCell)`
  && {
    color: #FFFFFF;
  }
`;
type CareerDotProps = { career: boolean; };
export const CareerDot = styled.div<CareerDotProps>`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: ${p => p.career ? '#FFF' : 'transparent'};
  border: 1px solid #FFF;
  margin: 0 auto;
`;