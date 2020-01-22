import { gql } from 'apollo-boost'
import { DerivedAttributes } from 'Character/Character.model';

export const UPDATE_STRAIN = gql`
  mutation UpdateStrain($id: ID!, $strain: Int!) {
    updateOneCharacter(
      where: { id: $id },
      data: {
        derivedAttributes:{
          update:{
            strain:{
              update:{
                current:$strain
              }
            }
          }
        }
      }
    ) {
      id
      derivedAttributes {
        id
        strain {
          id
          current
          threshold
        }
      }
    }
  }
`;

export interface UpdateStrainVariables {
  id: string;
  strain: number;
}

export interface UpdateStrainResult {
  id: string;
  derivedAttributes: Pick<DerivedAttributes, 'id' | 'strain'>;
}