import React, { useState, FunctionComponentElement, SVGProps, useEffect } from 'react';

import { ReactComponent as AbilityIcon } from 'assets/svg/dice/ability.svg';
import { ReactComponent as BoostIcon } from 'assets/svg/dice/boost.svg';
import { ReactComponent as ChallengeIcon } from 'assets/svg/dice/challenge.svg';
import { ReactComponent as DifficultyIcon } from 'assets/svg/dice/difficulty.svg';
import { ReactComponent as ForceIcon } from 'assets/svg/dice/force.svg';
import { ReactComponent as ProficiencyIcon } from 'assets/svg/dice/proficiency.svg';
import { ReactComponent as SetbackIcon } from 'assets/svg/dice/setback.svg';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const Wrapper = styled(Grid)`
  width: 100%;

  & > * {
    margin: 2px;
  }
`;

type IconType = FunctionComponentElement<SVGProps<SVGSVGElement>>;
interface IconProps extends React.SVGProps<SVGSVGElement> {
  'data-testid'?: string;
}
export interface DiceDisplayProps {
  ability?: number;
  boost?: number;
  challenge?: number;
  difficulty?: number;
  force?: number
  proficiency?: number;
  setback?: number;
}
export const DiceDisplay: React.FC<DiceDisplayProps> = (props) => {
  const [allDice, setDice] = useState<IconType[]>([]);

  const repeat = (times: number = 0, item: React.FunctionComponent<IconProps>, name: string) => 
    [...Array(times)].forEach((e, i) => {
      setDice(a => [
        ...a,
        React.createElement(item, {
          key: `${name}-${i}`,
          'data-testid': `${name}-icon`,
        }),
      ]);
    });
  
  useEffect(() => {
    repeat(props.force, ForceIcon, 'force');
    repeat(props.ability, AbilityIcon, 'ability');
    repeat(props.proficiency, ProficiencyIcon, 'proficiency');
    repeat(props.boost, BoostIcon, 'boost');
    repeat(props.difficulty, DifficultyIcon, 'difficulty');
    repeat(props.challenge, ChallengeIcon, 'challenge');
    repeat(props.setback, SetbackIcon, 'setback');

    return function cleanup() {
      setDice([]);
    }
  }, [props]);
  
  return (
    <Wrapper container justify="center" alignItems="center">
      { allDice }
    </Wrapper>
  );
};