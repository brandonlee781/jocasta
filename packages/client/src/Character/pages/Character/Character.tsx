import React from 'react';
import { useParams, Route, useRouteMatch } from 'react-router-dom';
import { useToggle } from 'use/useToggle';
import { PageWrapper } from 'Base/components/PageWrapper/PageWrapper';
import { TopNav } from 'Base/components/navigation/TopNav/TopNav';

import styled from 'styled-components';
import { useCharacter } from 'Character/use/useCharacter';
import { CombatQuickActions } from 'Base/components/CombatQuickActions/CombatQuickActions';
import { Threshold } from 'Base/types/Threshold';
import { useDispatch } from 'react-redux';
import { RootDispatcher, InfoDrawerChildren } from 'store/root-reducer';
import { InfoDrawer } from 'Base/components/InfoDrawer/InfoDrawer';
import { CharacterHome } from '../CharacterHome/CharacterHome';
import { CharacterSkills } from '../CharacterSkills/CharacterSkills';

const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 40px 0;
`;

interface CharacterTopNavProps {
  showQuickActions: boolean;
  name?: string;
  wounds?: Threshold;
  strain?: Threshold;
}
const CharacterTopNav: React.FC<CharacterTopNavProps> = ({
  showQuickActions,
  name,
  wounds = { current: 0, threshold: 0 },
  strain = { current: 0, threshold: 0 },
}) => {
  const openMenu = () => {};
  const dispatch = useDispatch();
  const { toggleInfoDrawer } = new RootDispatcher(dispatch);

  return (
    <TopNav name={showQuickActions ? name : ''} menuClick={openMenu}>
      { 
        showQuickActions &&
        <CombatQuickActions
          wounds={wounds}
          strain={strain}
          weaponClick={() => toggleInfoDrawer(InfoDrawerChildren.WEAPONS)}
          healthClick={() => toggleInfoDrawer(InfoDrawerChildren.HEALTH)}
        />
      }
    </TopNav>
  );
};

const Character: React.FC = () => {
  const [navOpen, toggleNav] = useToggle(true);
  

  const { id } = useParams();
  const match = useRouteMatch("/character/:id");

  const { loading, error, character } = useCharacter(id || '');

  if (loading) return <span>Loading...</span>;
  if (error) return <span>{ error.message }</span>;
  return (
    <PageWrapper
      open={navOpen}
      setOpen={toggleNav}
      characterId={character?.id}
      topNav={
        <CharacterTopNav
          showQuickActions={!match?.isExact || false}
          name={character?.name}
          wounds={character?.derivedAttributes?.wounds}
          strain={character?.derivedAttributes?.strain}
        />
      }
    >
      <Content>
        <Route path="/character/:id" exact>
          <CharacterHome character={character} />
        </Route>
        <Route path="/character/:id/gear" exact>
          <span>CHARACTER GEAR</span>
        </Route>
        <Route path="/character/:id/skill" exact>
          <CharacterSkills skills={character?.skills} />
        </Route>
        <InfoDrawer />
      </Content>
    </PageWrapper>
  );
};

export default Character;
