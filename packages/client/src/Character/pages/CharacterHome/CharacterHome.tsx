/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Attributes } from 'Character/components/Attributes/Attributes';
import { Characteristics } from 'Character/components/Characteristics/Characteristics';
import { Character } from 'Character/Character.model';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { RootDispatcher, InfoDrawerChildren } from 'store/root-reducer';

const Wrapper = styled.div`
  padding: 0 36px;
`;
const ImageWrapper = styled.img`
  height: 96px;
  width: 96px;
  border-radius: 50%;
  margin-bottom: 16px;
`;

const Name = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #E5E5E5;
`;
const Career = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #E5E5E5;
  margin-bottom: 6px;
`;

interface CharacterHomeProps {
  character?: Character;
}
export const CharacterHome: React.FC<CharacterHomeProps> = ({ character }) => {
  const dispatch = useDispatch();
  const { toggleInfoDrawer } = new RootDispatcher(dispatch);
  return (
    <Wrapper>
      <ImageWrapper src={character?.imageUrl} />
      <Name>{ character?.name }</Name>
      <Career>{ character?.species } { character?.career }</Career>
      <Attributes
        soak={character?.derivedAttributes?.soak}
        wounds={character?.derivedAttributes?.wounds}
        strain={character?.derivedAttributes?.strain}
        defense={character?.derivedAttributes?.defense}
        onClick={() => toggleInfoDrawer(InfoDrawerChildren.HEALTH)}
      />
      <Characteristics { ...character?.characteristics } />
    </Wrapper>
  );
};
