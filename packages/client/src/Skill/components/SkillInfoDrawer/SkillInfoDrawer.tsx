import React, {  useState } from 'react';
import { Grid, Divider } from '@material-ui/core';
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
import { DiceCountInput } from 'Dice/DiceCountInput/DiceCountInput';
import useCopyClipboard from 'Base/use/useCopyClipboard';
import useSkillDice, { SkillDice } from 'Skill/use/useSkillDice';
import { SkillInfo } from 'store/root-reducer';
// import useDiceRoll from 'Dice/use/useDiceRoll';
import { Wrapper, SkillDetail, SkillIcon, SkillDetailContent, SkillName, Characteristic, CurrentDice, Rank, ModifyDice, ResetButton, DiceLabel, DiceActionButton } from './SkillInfoDrawer.style';

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
  // const [roll, newRoll] = useDiceRoll();
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
  const clickReset = () => {
    setIsDirty(false);
    resetDice();
  }

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
      <Divider/>

      <CurrentDice>
        <DiceDisplay
          {...dice}
        />

        <Grid container justify="space-between">
          <DiceActionButton>
            Roll Dice
          </DiceActionButton>
          <DiceActionButton onClick={triggerCopy}>
            Copy CMD
          </DiceActionButton>
        </Grid>
      </CurrentDice>
      <Divider/>

      <ModifyDice>
        <DiceLabel>Modify Dice</DiceLabel>
        <DiceCountInput
          label="Boost"
          die={<BoostIcon />}
          increase={() => addDie('boost')}
          decrease={() => removeDie('boost')}
        />

        <DiceCountInput
          label="Setback"
          die={<SetbackIcon />}
          increase={() => addDie('setback')}
          decrease={() => removeDie('setback')}
        />

        <DiceCountInput
          label="Ability"
          die={<AbilityIcon />}
          increase={() => addDie('ability')}
          decrease={() => removeDie('ability')}
        />

        <DiceCountInput
          label="Difficulty"
          die={<DifficultyIcon />}
          increase={() => addDie('difficulty')}
          decrease={() => removeDie('difficulty')}
        />

        <DiceCountInput
          label="Proficiency"
          die={<ProficiencyIcon />}
          increase={() => addDie('proficiency')}
          decrease={() => removeDie('proficiency')}
        />

        <DiceCountInput
          label="Challenge"
          die={<ChallengeIcon />}
          increase={() => addDie('challenge')}
          decrease={() => removeDie('challenge')}
        />

        <ResetButton disabled={!isDirty} onClick={clickReset} variant="outlined">
          Reset Dice
        </ResetButton>
      </ModifyDice>
    </Wrapper>
  );
};