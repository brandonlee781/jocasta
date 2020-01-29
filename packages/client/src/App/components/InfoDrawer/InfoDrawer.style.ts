import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Content = styled.div`
  position: relative;
  width: 300px;
  padding: 16px;
`;
export const CloseButton = styled(IconButton)`
  && {
    position: absolute;
    top: 2px;
    left: 0;
  }
`;