import React, { lazy, Suspense, useState } from 'react';
import { useParams, Route, useRouteMatch } from 'react-router-dom';
// import { useToggle } from 'Base/use/useToggle';
import { PageWrapper } from 'Base/components/PageWrapper';
import { TopNav } from 'Base/components/navigation/TopNav';

import { useCharacter } from 'Character/use/useCharacter';
import { CombatQuickActions } from 'Base/components/CombatQuickActions';
import { Threshold } from 'Base/types/Threshold';
import { useDispatch } from 'react-redux';
import { RootDispatcher, InfoDrawerChildren } from 'store/root-reducer';
import { InfoDrawer } from 'Base/components/InfoDrawer';
import { LoadingSpinner } from 'Base/components/loading/LoadingSpinner';
import { LoadingPage } from 'Base/components/loading/LoadingPage';
import { Content } from './Character.style';

const Home = lazy(() => import('../../routes/CharacterHome'));
const Skills = lazy(() => import('../../routes/CharacterSkills'));

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
  const dispatch = useDispatch();
  const { toggleInfoDrawer } = new RootDispatcher(dispatch);

  return (
    <TopNav name={showQuickActions ? name : ''}>
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
  // const [navOpen, toggleNav] = useToggle(true);
  const [navOpen, toggleNav] = useState(true);
  const { id = '' } = useParams();
  const match = useRouteMatch("/character/:id");

  const { loading, error, character } = useCharacter(id);

  if (loading) return <LoadingPage />;
  if (error) return <span>{ error.message }</span>;
  return (
    <PageWrapper
      open={navOpen}
      setOpen={() => toggleNav(!navOpen)}
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
        <Suspense fallback={<LoadingSpinner />}>
          <Route
            path="/character/:id"
            exact
            render={(props) => (<Home {...props} character={character} />)}
          />
          <Route path="/character/:id/gear" exact>
            <span>CHARACTER GEAR</span>
          </Route>
          <Route 
            path="/character/:id/skill"
            exact
            render={(props) => <Skills {...props} skills={character?.skills} />}
          />
        </Suspense>
        <InfoDrawer />
      </Content>
    </PageWrapper>
  );
};

export default Character;
