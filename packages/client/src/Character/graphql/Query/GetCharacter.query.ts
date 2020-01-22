import { gql } from 'apollo-boost';
import { Character } from 'Character/Character.model';

export const GET_CHARACTERS = gql`
  query GetCharacter($id: ID!) {
    character(where: { id: $id }){
      id
      name
      species
      career
      specializations {
        name
      }
      characteristics {
        agility
        brawn
        intellect
        cunning
        presence
        willpower
      }
      derivedAttributes {
        id
        soak
        wounds {
          id
          current
          threshold
        }
        strain {
          id
          current
          threshold
        }
        defense {
          melee
          ranged
        }
      }
      skills {
        id
        skillId
        name
        characteristic
        type
        career
        rank
      }
      injuries
      imageUrl
    }
  }
`;
export interface GetCharacterVariables {
  id: string;
}
export interface GetCharacterResult {
  character: Character;
}