import { Characteristic } from 'Base/types/Characteristic';

export enum SkillType {
  General = 'General',
  Knowledge = 'Knowledge',
  Combat = 'Combat',
}

export interface Skill {
  id: number;
  name: string;
  characteristic: Characteristic;
  type: SkillType;
}