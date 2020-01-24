
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const Wrapper = styled(Grid)``;
export const Title = styled(Typography)`
  && {
    margin-left: 32px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;
    margin-bottom: 8px;
  }
`;


export const Section = styled.section`
  display: grid;
  grid-template-rows: 24px 48px;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 16px;
`;

export const SectionTitle = styled(Typography)`
  && {
    width: 100%;
    grid-column: 1 / span 3;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
  }
`;

interface SectionInfoProps { buttons?: boolean; }
export const SectionInfo = styled.div<SectionInfoProps>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  /* padding: ${p => p.buttons ? '0 16px' : ''}; */

  .info-label {
    font-size: 12px;
    line-height: 20px;
    text-align: center;
  }
  .info-data {
    font-size: 22px;
    line-height: 20px;
    text-align: center;
  }
`;