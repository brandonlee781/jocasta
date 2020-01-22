import styled from 'styled-components';
import { Grid, Typography, ButtonBase } from '@material-ui/core';

export const Wrapper = styled(Grid)`
  margin-top: 24px;
`;
export const SkillDetail = styled.div`
  && {
    display: flex;
    flex-flow: row nowrap;
    padding-bottom: 16px;
    border-bottom: 1px solid black;
    svg {
      height: 52px;
      width: 52px;
    }
  }
`;
export const CurrentDice = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  padding: 16px 24px;
  border-bottom: 1px solid black;

  .copy-button {
    position: absolute;
    top: calc(50% - 12px);
    right: 0;
    height: 24px;
    width: 24px;
    padding: 0;

    svg {
      height: 18px;
      width: 18px;
    }
  }
`;
export const ModifyDice = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 36px repeat(3, 80px) 48px;
  justify-items: center;
  padding: 16px;

  .modify-dice-label {
    grid-column: 1 / span 2;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #243A51;
  }

  & > button {
    grid-column: 1 / span 2;
  }
`;
export const SkillIcon = styled.div`
  max-width: 56px;
`;
export const SkillDetailContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 52px;
  padding: 4px;
`;

type SkillNameProps = { length: number; }
export const SkillName = styled(Typography)<SkillNameProps>`
  && {
    font-style: normal;
    font-weight: 500;
    font-size: ${p => p.length > 18 ? '18px' : '24px'};
    line-height: 20px;
    color: #243A51;
    margin-right: 6px;
  }
`;
export const Characteristic = styled(Typography)`
  && {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;
    color: rgba(36, 58, 81, 0.6);
  }
`;
export const Rank = styled(Typography)`
  && {
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;
    color: #243A51;
    margin-right: 8px;
  }
`;

export const ResetButton = styled(ButtonBase)`
  && {
    width: 100%;
    height: 36px;
    border: 1px solid black;
    border-radius: 5px;

    font-weight: 500;
    font-size: 16px;

    &.Mui-disabled {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;