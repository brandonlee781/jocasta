import React, { FunctionComponentElement, SVGProps } from 'react';
import styled from 'styled-components';

import { ReactComponent as BrawnIcon } from 'assets/svg/characteristics/brawn.svg';
import { ReactComponent as AgilityIcon } from 'assets/svg/characteristics/agility.svg';
import { ReactComponent as IntellectIcon } from 'assets/svg/characteristics/intellect.svg';
import { ReactComponent as CunningIcon } from 'assets/svg/characteristics/cunning.svg';
import { ReactComponent as WillpowerIcon } from 'assets/svg/characteristics/willpower.svg';
import { ReactComponent as PresenceIcon } from 'assets/svg/characteristics/presence.svg';
import { CharacterCharacteristics } from 'Character/Character.model';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 24px repeat(3, 56px);
  justify-content: center;
  align-content: center;
  grid-gap: 8px;
  background: rgba(229, 229, 229, 0.12);
  border-radius: 25px;
  padding: 16px 24px;
  width: 100%;

  .char-title {
    grid-column: 1 / span 2;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #DADADA;
  }
`
const ItemWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "title title"
    "icon value";
  grid-template-rows: 20px 1fr;
  grid-template-columns: 24px 24px;
  justify-content: center;
  align-content: center;
  height: 48px;
  width: 100px;

  .title {
    grid-area: title;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #E2E2E2;
  }
  .icon {
    grid-area: icon;
    svg {
      fill: #DADADA;
    }
  }
  .value {
    grid-area: value;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;
  }
`;

interface CharacteristicItemProps {
  title: string;
  icon: FunctionComponentElement<SVGProps<SVGSVGElement>>
  value: number;
}
const CharacteristicItem: React.FC<CharacteristicItemProps> = ({ title, icon, value }) => (
  <ItemWrapper>
    <span className="title">{title}</span>
    <div className="icon">{icon}</div>
    <div className="value">{value}</div>
  </ItemWrapper>
)

interface CharacteristicsProps extends CharacterCharacteristics {}
export const Characteristics: React.FC<CharacteristicsProps> = ({
  brawn = 0,
  agility = 0,
  intellect = 0,
  cunning = 0,
  willpower = 0,
  presence = 0,
}) => {
  return (
    <Wrapper>
      <span className="char-title">Characteristics</span>
      <CharacteristicItem
        title="Brawn"
        icon={<BrawnIcon/>}
        value={brawn}
      />

      <CharacteristicItem
        title="Agility"
        icon={<AgilityIcon/>}
        value={agility}
      />

      <CharacteristicItem
        title="Intellect"
        icon={<IntellectIcon/>}
        value={intellect}
      />

      <CharacteristicItem
        title="Cunning"
        icon={<CunningIcon/>}
        value={cunning}
      />

      <CharacteristicItem
        title="Willpower"
        icon={<WillpowerIcon/>}
        value={willpower}
      />

      <CharacteristicItem
        title="Presence"
        icon={<PresenceIcon/>}
        value={presence}
      />
    </Wrapper>
  );
};
