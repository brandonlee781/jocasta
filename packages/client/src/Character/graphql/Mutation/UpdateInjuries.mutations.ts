import { gql } from 'apollo-boost'
import { Character } from 'generated/graphql';

export const UPDATE_INJURIES = gql`
  mutation UpdateInjuries($id: ID!, $injuries: String!) {
    updateOneCharacter(
      where: { id: $id },
      data: {
        injuries: $injuries
      }
    ) {
      id
      injuries
    }
  }
`;

export interface UpdateInjuriesVariables {
  id: string;
  injuries: Character['injuries'];
}

export interface UpdateInjuriesResult {
  id: string;
  injuries: Character['injuries'];
}