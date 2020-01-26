import { useLazyQuery } from '@apollo/react-hooks';
import { GetCharacterResult, GetCharacterVariables, GET_CHARACTER } from 'Character/graphql/Query/GetCharacter.query';
import { ApolloError } from 'apollo-boost';
import { useMemo } from 'react';
import { Character } from 'generated/graphql';

interface UseCharacterResponse {
  loading: boolean;
  error: ApolloError | undefined;
  character?: Character;
}
export const useCharacter = (id: string): UseCharacterResponse => {
  const [getCharacter, { loading, error, data }] = useLazyQuery<GetCharacterResult, GetCharacterVariables>(GET_CHARACTER);

  useMemo(() => {
    getCharacter({
      variables: {
        id,
      },
    });
    
  }, [id, getCharacter]);

  return {
    loading,
    error,
    character: data?.character
  }
};