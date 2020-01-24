import React from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { useSelector, useDispatch } from 'react-redux';
import { InitialState, RootDispatcher, InfoDrawerChildren, SkillInfo } from 'store/root-reducer';
import { useCharacter } from 'Character/use/useCharacter';

import { Character } from 'Character/Character.model';
import { UPDATE_INJURIES, UpdateInjuriesResult, UpdateInjuriesVariables } from 'Character/graphql/Mutation/UpdateInjuries.mutations';

import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';

import SkillIcons from 'Skill/components/SkillInfoDrawer/SkillIcons/SkillIcons';
import { HealthInfoDrawer } from 'Character/components/HealthInfoDrawer';
import { SkillInfoDrawer } from 'Skill/components/SkillInfoDrawer/SkillInfoDrawer';
import { Characteristic } from 'Base/types/Characteristic';
import { useWounds, useStrain } from 'Character/use/useHealth';
import { Content, CloseButton } from './InfoDrawer.style';

const HealthDrawer: React.FC<{ character?: Character }> = ({ character }) => {
  const [wounds, setWounds] = useWounds(character?.id ?? '', character?.derivedAttributes?.wounds);
  const [strain, setStrain] = useStrain(character?.id ?? '', character?.derivedAttributes?.strain)
  
  const [updateInjuries] = useMutation<UpdateInjuriesResult, UpdateInjuriesVariables>(UPDATE_INJURIES);
  const injuriesChanged = (injuries: string) => {
    updateInjuries({
      variables: {
        id: character?.id || '',
        injuries,
      },
    });
  }

  return <HealthInfoDrawer
      injuries={character?.injuries}
      soak={character?.derivedAttributes?.soak}
      wounds={wounds}
      strain={strain}
      meleeDef={character?.derivedAttributes?.defense?.melee}
      rangedDef={character?.derivedAttributes?.defense?.ranged}
      onWoundsChange={(value: number) => setWounds(value)}
      onStrainChange={(value: number) => setStrain(value)}
      onInjuriesChange={injuriesChanged}
    />
}

interface StateProps {
  infoDrawerOpen: boolean;
  child?: InfoDrawerChildren;
  skill?: SkillInfo;
}

interface InfoDrawerProps {

}
export const InfoDrawer: React.FC<InfoDrawerProps> = () => {
  const { id = '' } = useParams();
  const { character } = useCharacter(id);

  const { infoDrawerOpen, child, skill } = useSelector<InitialState, StateProps>((state: InitialState) => ({
    infoDrawerOpen: state.infoDrawerOpen,
    child: state.infoDrawerChild,
    skill: state.skillInfo,
  }));
  const dispatch = useDispatch();
  const { toggleInfoDrawer } = new RootDispatcher(dispatch);
  let ChildComp;

  if (child === InfoDrawerChildren.HEALTH) {
    ChildComp = <HealthDrawer character={character} />;
  } else if (child === InfoDrawerChildren.SKILL) {
    ChildComp = <SkillInfoDrawer 
      skill={skill ?? { id: 0, name: '', characteristic: Characteristic.Brawn, rank: 0 }}
      icon={SkillIcons[skill?.id ?? 0]}
      characteristics={character?.characteristics}
    />
  }

  return (
    <Drawer anchor="right" open={infoDrawerOpen} onClose={() => toggleInfoDrawer()} >
      <Content>
        <CloseButton onClick={() => toggleInfoDrawer()}>
          <CloseIcon />
        </CloseButton>
        { ChildComp }
      </Content>
    </Drawer>
  );
};
