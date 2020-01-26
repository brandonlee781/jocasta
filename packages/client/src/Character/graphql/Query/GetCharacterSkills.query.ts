import { gql } from 'apollo-boost';
import { Character } from 'generated/graphql';

export const GET_CHARACTER_SKILL = gql`
  query GetCharacterSkills($id: ID!) {
    character(where: { id: $id }){
      id
      skills {
        id
        skillId
        name
        characteristic
        type
        career
        rank
      }
    }
  }
`;
export interface GetCharacterSkillsVariables {
  id: Pick<Character, 'id'>;
}
export interface GetCharacterSkillsResult {
  character: Character;
}