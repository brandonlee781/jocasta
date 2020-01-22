import { gql } from 'apollo-boost'

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
  injuries: string;
}

export interface UpdateInjuriesResult {
  id: string;
  injuries: string;
}