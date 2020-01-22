import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const ToggleButton = styled(Button)`
  width: 100%;
  height: 32px;
  background: transparent;
`;
export const OpenButton = styled(ToggleButton)`
  position: absolute !important;
  bottom: 6px;
  left: 0;
  right: 0;
`;