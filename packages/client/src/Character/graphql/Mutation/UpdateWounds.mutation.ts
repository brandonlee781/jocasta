import { gql } from 'apollo-boost'
import { DerivedAttribute } from 'generated/graphql';

export const UPDATE_WOUNDS = gql`
  mutation UpdateWounds($id: ID!, $wounds: Int!) {
    updateOneCharacter(
      where: { id: $id },
      data: {
        derivedAttributes:{
          update:{
            wounds:{
              update:{
                current:$wounds
              }
            }
          }
        }
      }
    ) {
      id
      derivedAttributes {
        id
        wounds {
          id
          current
          threshold
        }
      }
    }
  }
`;

export interface UpdateWoundsVariables {
  id: string;
  wounds: number;
}

export interface UpdateWoundsResult {
  id: string;
  derivedAttributes: Pick<DerivedAttribute, 'id' | 'wounds'>;
}