import React, { FunctionComponentElement, SVGProps } from 'react';

import { ReactComponent as BrawnIcon } from 'assets/svg/characteristics/brawn.svg';
import { ReactComponent as AgilityIcon } from 'assets/svg/characteristics/agility.svg';
import { ReactComponent as IntellectIcon } from 'assets/svg/characteristics/intellect.svg';
import { ReactComponent as CunningIcon } from 'assets/svg/characteristics/cunning.svg';
import { ReactComponent as WillpowerIcon } from 'assets/svg/characteristics/willpower.svg';
import { ReactComponent as PresenceIcon } from 'assets/svg/characteristics/presence.svg';
import { CharacterCharacteristics } from 'Character/Character.model';
import { ItemWrapper, Wrapper } from './Characteristics.style';

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
