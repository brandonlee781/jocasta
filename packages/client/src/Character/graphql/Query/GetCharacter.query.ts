import { gql } from 'apollo-boost';
import { Character } from 'generated/graphql';

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(where: { id: $id }){
      id
      name
      species
      career
      specializations {
        id
        name
      }
      characteristics {
        Agility
        Brawn
        Intellect
        Cunning
        Presence
        Willpower
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
      talents {
        id
        row
        column
        connections
        talent {
          id
          name
          description
          ranked
          activation
          force
          specializations {
            id
            name
          }
        }
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