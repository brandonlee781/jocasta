import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useSelector, useDispatch } from 'react-redux';
import { InitialState, RootDispatcher, InfoDrawerChildren, SkillInfo } from 'store/root-reducer';
import { HealthInfoDrawer } from 'Character/components/HealthInfoDrawer/HealthInfoDrawer';
import { useParams } from 'react-router-dom';
import { useCharacter } from 'Character/use/useCharacter';
import CloseIcon from '@material-ui/icons/Close';
import { Character } from 'Character/Character.model';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_WOUNDS, UpdateWoundsVariables, UpdateWoundsResult } from 'Character/graphql/Mutation/UpdateWounds.mutation';
import { UPDATE_STRAIN, UpdateStrainVariables, UpdateStrainResult } from 'Character/graphql/Mutation/UpdateStrain.mutation';
import { UPDATE_INJURIES, UpdateInjuriesResult, UpdateInjuriesVariables } from 'Character/graphql/Mutation/UpdateInjuries.mutations';
import { SkillInfoDrawer } from 'Skill/components/SkillInfoDrawer/SkillInfoDrawer';
import { SkillResponse } from 'Skill/use/useSkills';
import { Characteristic } from 'Base/types/Characteristic';
import { SkillIcons } from 'Skill/components/SkillInfoDrawer/SkillIcons/SkillIcons';
import { Content, CloseButton } from './InfoDrawer.style';

const HealthDrawer: React.FC<{ character?: Character }> = ({ character }) => {
  const [updateWounds] = useMutation<UpdateWoundsResult, UpdateWoundsVariables>(UPDATE_WOUNDS);
  const [updateStrain] = useMutation<UpdateStrainResult, UpdateStrainVariables>(UPDATE_STRAIN);
  const [updateInjuries] = useMutation<UpdateInjuriesResult, UpdateInjuriesVariables>(UPDATE_INJURIES)
  
  const woundsChanged = (wounds: number) => {
    updateWounds({
      variables: {
        id: character?.id || '',
        wounds,
      }
    });
  };

  const strainChanged = (strain: number) => {
    updateStrain({
      variables: {
        id: character?.id || '',
        strain,
      }
    });
  };

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
      wounds={character?.derivedAttributes?.wounds}
      strain={character?.derivedAttributes?.strain}
      meleeDef={character?.derivedAttributes?.defense?.melee}
      rangedDef={character?.derivedAttributes?.defense?.ranged}
      onWoundsChange={woundsChanged}
      onStrainChange={strainChanged}
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
