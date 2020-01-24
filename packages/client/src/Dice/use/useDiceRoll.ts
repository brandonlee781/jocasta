import { SkillDice } from 'Skill/use/useSkillDice';
import { roll } from 'Dice/utils/roll';
import { useState, useMemo } from 'react';

export default function useDiceRoll() {
  const [dice, setDice] = useState<SkillDice>();
  
  return useMemo(() => {
    const result = roll(dice);
    return [
      result,
      (value: SkillDice) => setDice(value),
    ];
  }, [dice, setDice])
}