import { gql } from 'apollo-boost';
import { Skill } from 'Skill/Skill.model';

export const GET_SKILLS = gql`
  query GetSkills {
    skills {
      id
      name
      characteristic
      type
    }
  }
`;

export interface GetSkillsResponse {
  skills: Skill[];
}