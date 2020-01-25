import styled from 'styled-components';

export const SkillIcon = styled.span`
  display: inline-flex;
  align-items: center;
  height: 100%;
  margin-right: 4px;
  svg {
    height: 16px;
    width: 16px;
  }
`;

type CareerDotProps = { career: boolean; };
export const CareerDot = styled.div<CareerDotProps>`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: ${p => p.career ? '#FFF' : 'transparent'};
  border: 1px solid #FFF;
  margin: 0 auto;
`;