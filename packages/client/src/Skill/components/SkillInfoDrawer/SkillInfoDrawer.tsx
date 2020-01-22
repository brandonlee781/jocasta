/* eslint-disable react/jsx-props-no-spreading */
import React, {  useState } from 'react';
import { Grid, IconButton, Tooltip } from '@material-ui/core';
import { CharacteristicAcronyms, Characteristic as CharacteristicEnum } from 'Base/types/Characteristic';
import { DiceDisplay } from 'Dice/DiceDisplay/DiceDisplay';
import { CharacterCharacteristics } from 'Character/Character.model';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import { ReactComponent as AbilityIcon } from 'assets/svg/dice/ability.svg';
import { ReactComponent as BoostIcon } from 'assets/svg/dice/boost.svg';
import { ReactComponent as ChallengeIcon } from 'assets/svg/dice/challenge.svg';
import { ReactComponent as DifficultyIcon } from 'assets/svg/dice/difficulty.svg';
import { ReactComponent as ProficiencyIcon } from 'assets/svg/dice/proficiency.svg';
import { ReactComponent as SetbackIcon } from 'assets/svg/dice/setback.svg';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { DiceCountInput } from 'Dice/DiceCountInput/DiceCountInput';
import useCopyClipboard from 'use/useCopyClipboard';
import useSkillDice, { SkillDice } from 'Skill/use/useSkillDice';
import { SkillInfo } from 'store/root-reducer';
import { Wrapper, SkillDetail, SkillIcon, SkillDetailContent, SkillName, Characteristic, CurrentDice, Rank, ModifyDice, ResetButton } from './SkillInfoDrawer.style';

const getSkillDice = (rank: number, characteristic: number) => {
  const max = Math.max(rank, characteristic);
  const min = Math.min(rank, characteristic);
  return {
    ability: max - min,
    proficiency: min
  };
}

export interface SkillInfoDrawerProps {
  skill: SkillInfo;
  icon: React.ReactElement;
  characteristics?: CharacterCharacteristics;
}
export const SkillInfoDrawer: React.FC<SkillInfoDrawerProps> = ({
  icon,
  skill,
  characteristics = {}
}) => {
  const skillChar = skill.characteristic.toLowerCase() as CharacteristicEnum;
  const skillProficiency = characteristics[skillChar] ?? 0;
  const skillDice = getSkillDice(skill.rank, skillProficiency);
  
  const [dice, diceString, setDice, resetDice] = useSkillDice(skillDice, skill.name);
  const [isCopied, triggerCopy] = useCopyClipboard(diceString, { successDuration: 3000 });
  const [isDirty, setIsDirty] = useState(false);

  const addDie = (die: keyof SkillDice ) => {
    if (!isDirty) setIsDirty(true);
    setDice(d => ({ ...d, [die]: dice[die] + 1}));
  };
  const removeDie = (die: keyof SkillDice) => {
    if (!isDirty) setIsDirty(true);
    setDice(d => ({ ...d, [die]: dice[die] >= 1 ? dice[die] - 1 : 0}));
  };

  return (
    <Wrapper container direction="column">
      <Snackbar open={isCopied}>
        <Alert severity="success" elevation={6} variant="filled">
          Successfully copied to clipboard!
        </Alert>
      </Snackbar>

      <SkillDetail>
        <SkillIcon>{icon}</SkillIcon>
        <SkillDetailContent>
          <SkillName length={skill.name.length}>{skill.name}</SkillName>
          <Grid container direction="row">
            <Rank>Rank: {skill.rank}</Rank>
            <Characteristic>
              {CharacteristicAcronyms[skillChar]}: {characteristics[skillChar]}
            </Characteristic>
          </Grid>
        </SkillDetailContent>
      </SkillDetail>

      <CurrentDice>
        <DiceDisplay
          {...dice}
        />

        <Tooltip title="Copy Discord Roll Command">
          <IconButton
            className="copy-button"
            onClick={triggerCopy}
          >
            <FileCopyIcon />
          </IconButton>
        </Tooltip>
      </CurrentDice>

      <ModifyDice>
        <span className="modify-dice-label">Modify Dice</span>
        <DiceCountInput
          label="Boost"
          die={<BoostIcon />}
          add={() => addDie('boost')}
          remove={() => removeDie('boost')}
        />

        <DiceCountInput
          label="Setback"
          die={<SetbackIcon />}
          add={() => addDie('setback')}
          remove={() => removeDie('setback')}
        />

        <DiceCountInput
          label="Ability"
          die={<AbilityIcon />}
          add={() => addDie('ability')}
          remove={() => removeDie('ability')}
        />

        <DiceCountInput
          label="Difficulty"
          die={<DifficultyIcon />}
          add={() => addDie('difficulty')}
          remove={() => removeDie('difficulty')}
        />

        <DiceCountInput
          label="Proficiency"
          die={<ProficiencyIcon />}
          add={() => addDie('proficiency')}
          remove={() => removeDie('proficiency')}
        />

        <DiceCountInput
          label="Challenge"
          die={<ChallengeIcon />}
          add={() => addDie('challenge')}
          remove={() => removeDie('challenge')}
        />

        <ResetButton disabled={!isDirty} onClick={resetDice}>
          Reset Dice
        </ResetButton>
      </ModifyDice>
    </Wrapper>
  );
};