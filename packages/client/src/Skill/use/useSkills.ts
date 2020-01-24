import { useQuery } from '@apollo/react-hooks';
import { GET_SKILLS, GetSkillsResponse } from 'Skill/graphql/Query/GetSkills.query';
import { ApolloError } from 'apollo-boost';
import { SkillType } from 'Skill/Skill.model';
import { CharacterSkill } from 'Character/Character.model';
import { Characteristic } from 'Base/types/Characteristic';
import { useMemo } from 'react';

export type SkillResponse = {
  id: number;
  name: string;
  type: SkillType;
  characteristic: Characteristic;
  career: boolean;
  rank: number;
};

export const SkillTypeFilter = {
  'All': 'All' as 'All',
  [SkillType.General]: SkillType.General,
  [SkillType.Combat]: SkillType.Combat,
  [SkillType.Knowledge]: SkillType.Knowledge,
};
export type SkillTypeFilter = (typeof SkillTypeFilter)[keyof typeof SkillTypeFilter];

interface UseSkillsResponse {
  loading: boolean;
  error: ApolloError | undefined;
  skills: SkillResponse[] | undefined;
}
export function useSkills(characterSkills?: CharacterSkill[], typeFilter?: SkillTypeFilter): UseSkillsResponse {
  const { loading, error, data } = useQuery<GetSkillsResponse>(GET_SKILLS);
  
  const skills = useMemo(() => {
    return data?.skills.map(skill => {
      const charSkill = characterSkills?.find(c => c.skillId === skill.id);
      return {
        id: skill.id,
        name: skill.name,
        type: skill.type,
        characteristic: skill.characteristic,
        career: charSkill?.career ?? false,
        rank: charSkill?.rank ?? 0,
      };
    }).filter(skill => {
      if (typeFilter !== SkillTypeFilter.All) {
        return skill.type === typeFilter;
      }
      return true;
    })
  }, [data, characterSkills, typeFilter])

  return {
    loading,
    error,
    skills,
  };
}