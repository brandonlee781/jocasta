import { Dice } from 'Dice/Dice.model';
import { useState, useEffect, SetStateAction, Dispatch } from 'react';

export interface SkillDice {
  ability: number;
  boost: number;
  challenge: number;
  difficulty: number;
  proficiency: number;
  setback: number;
}

const getD1CERoll = (dice: Dice, name?: string): string => {
  let str = '!roll ';
  str += 'g'.repeat(dice.ability ?? 0);
  str += 'y'.repeat(dice.proficiency ?? 0);
  str += 'b'.repeat(dice.boost ?? 0);
  str += 'p'.repeat(dice.difficulty ?? 0);
  str += 'r'.repeat(dice.challenge ?? 0);
  str += 'k'.repeat(dice.setback ?? 0);
  if (name) {
    str += ` "${name} Skill Roll"`
  }
  return str;
}

/**
 * Will return an array of 4 items:
 * * An object, keys are the dice types and values are the number of dice
 * * A string of the SWRPG discord bot roll command
 * * A Function to set the dice object, works the same as the second item of useState, updates to the dice object also update the roll command string
 * * A Function to reset the dice object to the original dice object passed
 * 
 * @returns
 */
export default function useSkillDice(initialState: Dice, skillName: string):
  [SkillDice, string, Dispatch<SetStateAction<SkillDice>>, () => void]
{
  const initialDice: SkillDice = {
    ability: initialState.ability ?? 0,
    boost: initialState.boost ?? 0,
    challenge: initialState.challenge ?? 0,
    difficulty: initialState.difficulty ?? 0,
    proficiency: initialState.proficiency ?? 0,
    setback: initialState.setback ?? 0,
  }
  const [dice, setDice] = useState<SkillDice>({ ...initialDice });
  const [command, setCommand] = useState('');

  useEffect(() => {
    setCommand(getD1CERoll(dice, skillName));
  }, [dice, skillName])

  return [
    dice,
    command,
    (value) => {
      if (typeof value === 'function') {
        setDice(value(dice));
      }
      setDice(value);
    },
    () => setDice(initialDice),
  ]
}