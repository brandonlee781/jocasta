import { Characteristic } from 'Base/types/Characteristic';
import { SkillType } from 'Skill/Skill.model';
import { Threshold } from 'Base/types/Threshold';

export interface CharacterCharacteristics {
  id?: string;
  agility?: number;
  brawn?: number;
  cunning?: number;
  intellect?: number;
  presence?: number;
  willpower?: number;
}

export interface CharacterSkill {
  id: string;
  skillId: number;
  name: string;
  characteristic: Characteristic;
  type: SkillType;
  career: boolean;
  rank: number;
}

export interface DefenseAttribute {
  id?: string;
  ranged?: number;
  melee?: number;
}

export interface DerivedAttributes {
  id?: string;
  soak?: number;
  wounds?: Threshold;
  strain?: Threshold;
  defense?: DefenseAttribute;
}

export interface CharacterSpecialization {
  id?: number;
  name?: string;
}

export interface TalentTreeNode {
  id?: string;
  row?: number;
  column?: number;
  connections?: number[];
  
}

export interface Character {
  id?: string;
  name?: string;
  species?: string;
  career?: string;
  specialization?: CharacterSpecialization[];
  characteristics?: CharacterCharacteristics;
  derivedAttributes?: DerivedAttributes;
  skills?: CharacterSkill[];
  injuries?: string;
  imageUrl?: string;
}