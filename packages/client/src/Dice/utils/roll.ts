import { SkillDice } from 'Skill/use/useSkillDice';
import { dice as diceFaces } from './dice';

export const roll = (dice?: SkillDice) => {
  if (dice) {
    const rolls = Object.keys(dice).map((die) => {
      const rollArray = [];
      for (let i = 0; i < dice[die as keyof SkillDice]; i += 1) {
        const faces = diceFaces[die as keyof SkillDice]
        const max = Object.keys(faces).length;
        const rand = Math.round(Math.random() * (max - 1) + 1);
        const currentRoll = faces[rand];
  
        rollArray.push(currentRoll.face);
      }
      return rollArray;
    }).reduce((a, b) => a.concat(b), []).join('').split('').sort().join('');
  
    const success = (rolls.match(/s/g) ?? []).length;
    const advantages = (rolls.match(/a/g) ?? []).length;
    const triumphs = (rolls.match(/r/g) ?? []).length;
    const failure = (rolls.match(/f/g) ?? []).length;
    const threats = (rolls.match(/t/g) ?? []).length;
    const despair = (rolls.match(/d/g) ?? []).length;
  
    return {
      success,
      advantages,
      triumphs,
      failure,
      threats,
      despair,
      total: {
        success: success - failure - despair,
        advantage: advantages - threats,
        triumphs: triumphs - despair,
      }
    };
  }
  return undefined;
}