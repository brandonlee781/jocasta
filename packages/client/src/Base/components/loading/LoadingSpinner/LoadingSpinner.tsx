import React from 'react';
import { ReactComponent as SpinnerSVG } from 'assets/svg/loader.svg';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

interface LoadingSpinnerProps {
  height?: number;
  width?: number;
}
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ height = 192, width = 192 }) => {
  return (
    <LoadingWrapper>
      <SpinnerSVG height={height} width={width} />
    </LoadingWrapper>
  );
};
