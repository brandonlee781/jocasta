import React, { FunctionComponentElement, SVGProps } from 'react';

import { ReactComponent as BrawnIcon } from 'assets/svg/characteristics/brawn.svg';
import { ReactComponent as AgilityIcon } from 'assets/svg/characteristics/agility.svg';
import { ReactComponent as IntellectIcon } from 'assets/svg/characteristics/intellect.svg';
import { ReactComponent as CunningIcon } from 'assets/svg/characteristics/cunning.svg';
import { ReactComponent as WillpowerIcon } from 'assets/svg/characteristics/willpower.svg';
import { ReactComponent as PresenceIcon } from 'assets/svg/characteristics/presence.svg';
import { Characteristic } from 'generated/graphql';
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

interface CharacteristicsProps extends Characteristic {}
export const Characteristics: React.FC<CharacteristicsProps> = ({
  Brawn = 0,
  Agility = 0,
  Intellect = 0,
  Cunning = 0,
  Willpower = 0,
  Presence = 0,
}) => {
  return (
    <Wrapper>
      <span className="char-title">Characteristics</span>
      <CharacteristicItem
        title="Brawn"
        icon={<BrawnIcon/>}
        value={Brawn}
      />

      <CharacteristicItem
        title="Agility"
        icon={<AgilityIcon/>}
        value={Agility}
      />

      <CharacteristicItem
        title="Intellect"
        icon={<IntellectIcon/>}
        value={Intellect}
      />

      <CharacteristicItem
        title="Cunning"
        icon={<CunningIcon/>}
        value={Cunning}
      />

      <CharacteristicItem
        title="Willpower"
        icon={<WillpowerIcon/>}
        value={Willpower}
      />

      <CharacteristicItem
        title="Presence"
        icon={<PresenceIcon/>}
        value={Presence}
      />
    </Wrapper>
  );
};
