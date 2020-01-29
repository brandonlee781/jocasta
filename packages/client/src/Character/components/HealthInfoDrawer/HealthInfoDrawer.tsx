import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { CountInput } from 'App/components/inputs/CountInput';
import Divider from '@material-ui/core/Divider';
import { Character, Threshold } from 'generated/graphql';
import { Section, SectionTitle, SectionInfo, Wrapper, Title } from './HealthInfoDrawer.style';

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
        increase={increase}
        decrease={decrease}
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
        increase={increase}
        decrease={decrease}
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

type Injury = Character['injuries'];
export interface HealthInfoDrawerProps extends DefenseSectionProps {
  wounds: Threshold;
  strain: Threshold;
  injuries: Injury;
  onWoundsChange: (value: number) => void;
  onStrainChange: (value: number) => void;
  onInjuriesChange: (value: Injury) => void;
}
export const HealthInfoDrawer: React.FC<HealthInfoDrawerProps> = ({
  soak = 0,
  meleeDef = 0,
  rangedDef = 0,
  wounds,
  strain,
  injuries,
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
      <Divider />

      <WoundsSection
        wounds={wounds}
        increase={woundsIncrease}
        decrease={woundsDecrease}
      />
      <Divider />
      
      <StrainSection
        strain={strain}
        increase={strainIncrease}
        decrease={strainDecrease}
      />
      <Divider />

      <TextField
          value={tempInjuries}
          label="Critical Injuries"
          multiline
          rows="4"
          onChange={event => setTempInjuries(event.target.value as Injury)}
          onBlur={() => onInjuriesChange(tempInjuries)}
        />
    </Wrapper>
  );
};
