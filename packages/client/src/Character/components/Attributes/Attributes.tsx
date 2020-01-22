import React from 'react';
import { DerivedAttributes } from 'Character/Character.model';
import { AttributeItemWrapper, AttributeRow, Wrapper } from './Attributes.style';


interface AttributeItemProps { title: string; value: string | number; }
const AttributeItem: React.FC<AttributeItemProps> = ({ title, value }) => (
  <AttributeItemWrapper>
    <div className="title">{title}</div>
    <div className="value">{value}</div>
  </AttributeItemWrapper>
)

interface AttributesProps extends DerivedAttributes {
  onClick?: () => {};
}
export const Attributes: React.FC<AttributesProps> = ({
  wounds,
  strain,
  soak = 0,
  defense: { ranged = 0, melee = 0 } = {},
  onClick,
}) => {
  return (
    <Wrapper onClick={onClick}>
      <AttributeRow>
        <AttributeItem
          title="Wounds"
          value={`${wounds?.current ?? 0}/${wounds?.threshold ?? 0}`}
        />
        <AttributeItem
          title="Strain"
          value={`${strain?.current ?? 0}/${strain?.threshold ?? 0}`}
        />
      </AttributeRow>

      <AttributeRow>
        <AttributeItem
          title="Soak"
          value={soak}
        />
        <AttributeItem
          title="Ranged Def"
          value={ranged}
        />
        <AttributeItem
          title="Melee Def"
          value={melee}
        />
      </AttributeRow>
    </Wrapper>
  );
};
