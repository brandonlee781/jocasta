import styled from 'styled-components';
import { Grid, Typography, Button, ButtonBase } from '@material-ui/core';

export const Wrapper = styled(Grid)`
  margin-top: 24px;
`;
export const SkillDetail = styled.div`
  && {
    display: flex;
    flex-flow: row nowrap;
    padding-bottom: 16px;
    svg {
      height: 52px;
      width: 52px;
    }
  }
`;
export const CurrentDice = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  padding: 16px;

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

  & > button {
    grid-column: 1 / span 2;
  }
`;

export const DiceLabel = styled(Typography)`
  grid-column: 1 / span 2;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
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
    margin-right: 6px;
  }
`;
export const Characteristic = styled(Typography)`
  && {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;
    opacity: 0.6;
  }
`;
export const Rank = styled(Typography)`
  && {
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;
    margin-right: 8px;
  }
`;

export const ResetButton = styled(Button)`
  && {
    width: 100%;
    border-radius: 5px;

    font-weight: 500;
    font-size: 16px;
  }
`;

export const DiceActionButton = styled(ButtonBase)`
  && {
    height: 24px;
    width: calc(50% - 8px);
    border: 1px solid #dadada;
    border-radius: 5px;
    margin: 8px 0;
    text-transform: uppercase;
    font-weight: 500;
  }
`;