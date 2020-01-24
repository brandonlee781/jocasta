import styled from 'styled-components';
import Tab from '@material-ui/core/Tab';

export const Content = styled.div`
  background: rgba(229, 229, 229, 0.12);
  border-radius: 25px;
  padding: 16px 8px;
  width: 100%;

  .tabs-indicator {
    display: none;
  }
`;

export const SkillTitle = styled.div`
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  color: #DADADA;
  margin-bottom: 4px;
`;

interface StyledTabProps {
  label: string;
}

export const StyledTab = styled(Tab)`
  && {
    text-transform: none;
    font-size: 16px;
    line-height: 19px;
    color: rgba(218, 218, 218, 0.6);
    min-width: 0;
    padding: 0 8px;
    
    &.Mui-selected {
      text-decoration-line: underline;
      color: #DADADA;
    }
  }
`;