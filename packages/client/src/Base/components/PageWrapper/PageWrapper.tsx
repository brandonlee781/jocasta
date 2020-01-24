import React from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Navigation } from '../navigation/Navigation';
import { ContentWrapper, Wrapper, TopNavWrapper, Background, OpenButton, ToggleButton } from './PageWrapper.style';

interface PageWrapperMenuProps {
  open: boolean;
  setOpen: () => any;
}
const Menu: React.FC<PageWrapperMenuProps> = ({ open, setOpen }) => {
  if (open) return <Navigation linkClicked={setOpen} />;
  return (
    <ToggleButton onClick={() => setOpen()}>
      <ExpandLessIcon />
    </ToggleButton>
  );
}

export interface PageWrapperProps {
  open: boolean;
  setOpen: () => void;
  characterId?: string;
  topNav?: any;
}
export const PageWrapper: React.FC<PageWrapperProps> = ({ children, topNav, open, setOpen }) => {
  return (
    <Wrapper open={open}>
      <Background hasTopNav={!!topNav} open={open}>
        {!!topNav && <TopNavWrapper>{topNav}</TopNavWrapper>}

        <ContentWrapper>
          {children}
        </ContentWrapper>

        {open && (
          <OpenButton onClick={() => setOpen()}>
            <ExpandMoreIcon htmlColor="white"/>
          </OpenButton>
        )}
      </Background>

      <Menu open={open} setOpen={setOpen} />
    </Wrapper>
  );
}
