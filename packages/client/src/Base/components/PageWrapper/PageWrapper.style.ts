import styled from 'styled-components';

interface WrapperProps {
  open: boolean;
}
export const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-rows: 1fr ${(props) => props.open ? '200px' : '32px'};
  grid-template-columns: 100%;
  height: 100%;
  width: 100%;
`;

interface BackgroundProps {
  hasTopNav: boolean;
  open: boolean;
}
export const Background = styled.div<BackgroundProps>`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding:
    ${(props) => props.hasTopNav ? '48px' : '16px'}
    16px
    ${ props => props.open ? '38px' : '24px' }
    16px;
  background: radial-gradient(85.02% 85.02% at 50% 16.43%, #1B2735 0%, #243A51 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 25px 25px;
`;

export const ContentWrapper = styled.main`
  height: 100%;
  width: 100%;
  overflow: scroll;
`;

export const TopNavWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 16px;
  right: 16px;
  max-height: 24px;
`;