import { gql } from 'apollo-boost';
import { Character } from 'Character/Character.model';

export const GET_CHARACTER_SKILL = gql`
  query GetCharacter($id: ID!) {
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
  id: string;
}
export interface GetCharacterSkillsResult {
  character: Character;
}