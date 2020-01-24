import React from 'react';

import { useDispatch } from 'react-redux';
import { RootDispatcher, InfoDrawerChildren } from 'store/root-reducer';

import { Attributes } from 'Character/components/Attributes';
import { Characteristics } from 'Character/components/Characteristics/Characteristics';
import { Character } from 'Character/Character.model';
import { Wrapper, ImageWrapper, Name, Career } from './CharacterHome.style';

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
