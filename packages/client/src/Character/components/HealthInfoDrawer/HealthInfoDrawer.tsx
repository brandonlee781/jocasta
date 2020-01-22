import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Typography, TextField } from '@material-ui/core';
import { CountInput } from 'Base/components/input/CountInput/CountInput';
import { Threshold } from 'Base/types/Threshold';

const Wrapper = styled(Grid)``;
const Title = styled(Typography)`
  && {
    margin-left: 32px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;
    color: #243A51;
  }
`;


const Section = styled.section`
  display: grid;
  grid-template-rows: 24px 48px;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 16px;
  border-bottom: 1px solid black;
`;

const SectionTitle = styled.span`
  width: 100%;
  grid-column: 1 / span 3;
  font-size: 18px;
  line-height: 20px;
  color: #243A51;
  text-align: center;
`;

interface SectionInfoProps { buttons?: boolean; }
const SectionInfo = styled.div<SectionInfoProps>`
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

interface DefenseSectionProps {
  soak?: number;
  meleeDef?: number;
  rangedDef?: number;
}
const DefenseSection: React.FC<DefenseSectionProps> = ({ soak, meleeDef, rangedDef }) => (
  <Section>
    <SectionTitle>Defense</SectionTitle>
    <SectionInfo>
      <div className="info-label">Soak</div>
      <div className="info-data">{soak || 0}</div>
    </SectionInfo>

    <SectionInfo>
      <div className="info-label">Melee Def</div>
      <div className="info-data">{meleeDef || 0}</div>
    </SectionInfo>

    <SectionInfo>
      <div className="info-label">Melee Def</div>
      <div className="info-data">{rangedDef || 0}</div>
    </SectionInfo>
  </Section>
);

interface WoundsSectionProps {
  wounds: Threshold;
  increase: () => void;
  decrease: () => void;
}
const WoundsSection: React.FC<WoundsSectionProps> = ({ wounds, increase, decrease }) => (
  <Section>
    <SectionTitle>Wounds</SectionTitle>
    <SectionInfo buttons>
      <CountInput
        add={increase}
        remove={decrease}
      />
    </SectionInfo>

    <SectionInfo>
      <div className="info-label">Current</div>
      <div className="info-data">{wounds.current}</div>
    </SectionInfo>

    <SectionInfo>
      <div className="info-label">Threshold</div>
      <div className="info-data">{wounds.threshold}</div>
    </SectionInfo>
  </Section>
);

interface StrainSectionProps {
  strain: Threshold;
  increase: () => void;
  decrease: () => void;
}
const StrainSection: React.FC<StrainSectionProps> = ({ strain, increase, decrease }) => (
  <Section>
    <SectionTitle>Strain</SectionTitle>
    <SectionInfo buttons>
      <CountInput
        add={increase}
        remove={decrease}
      />
    </SectionInfo>

    <SectionInfo>
      <div className="info-label">Current</div>
      <div className="info-data">{strain.current}</div>
    </SectionInfo>

    <SectionInfo>
      <div className="info-label">Threshold</div>
      <div className="info-data">{strain.threshold}</div>
    </SectionInfo>
  </Section>
);


export interface HealthInfoDrawerProps extends DefenseSectionProps {
  wounds?: Threshold;
  strain?: Threshold;
  injuries?: string;
  onWoundsChange: (value: number) => void;
  onStrainChange: (value: number) => void;
  onInjuriesChange: (value: string) => void;
}
export const HealthInfoDrawer: React.FC<HealthInfoDrawerProps> = ({
  soak = 0,
  meleeDef = 0,
  rangedDef = 0,
  wounds = { current: 0, threshold: 0 },
  strain = { current: 0, threshold: 0 },
  injuries = '',
  onWoundsChange,
  onStrainChange,
  onInjuriesChange,
}) => {
  const [tempInjuries, setTempInjuries] = useState(injuries);
  const woundsIncrease = () => {
    if (wounds.current + 1 <= wounds.threshold * 2) {
      onWoundsChange(wounds.current + 1)
    }
  };
  const woundsDecrease = () => {
    if (wounds.current > 0) {
      onWoundsChange(wounds.current - 1);
    }
  }
  const strainIncrease = () => {
    if (strain.current + 1 <= strain.threshold * 2) {
      onStrainChange(strain.current + 1)
    }
  };
  const strainDecrease = () => {
    if (strain?.current > 0) {
      onStrainChange(strain.current - 1);
    }
  }
  return (
    <Wrapper container direction="column">
      <Title>Health</Title>

      <DefenseSection
        soak={soak}
        meleeDef={meleeDef}
        rangedDef={rangedDef}
      />      

      <WoundsSection
        wounds={wounds}
        increase={woundsIncrease}
        decrease={woundsDecrease}
      />
      
      <StrainSection
        strain={strain}
        increase={strainIncrease}
        decrease={strainDecrease}
      />

      <TextField
          value={tempInjuries}
          label="Critical Injuries"
          multiline
          rows="4"
          onChange={event => setTempInjuries(event.target.value)}
          onBlur={() => onInjuriesChange(tempInjuries)}
        />
    </Wrapper>
  );
};
