import { useState } from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GetCharacterResult, GetCharacterVariables, GET_CHARACTERS } from 'Character/graphql/Query/GetCharacter.query';
import { ApolloError } from 'apollo-boost';
import { Character } from 'Character/Character.model';

interface UseCharacterResponse {
  loading: boolean;
  error: ApolloError | undefined;
  character: Character | undefined;
}
export const useCharacter = (id: string): UseCharacterResponse => {
  const [characterId] = useState(id || '');
  const { loading, error, data } = useQuery<GetCharacterResult, GetCharacterVariables>(GET_CHARACTERS, {
    variables: {
      id: characterId,
    },
  });

  return {
    loading,
    error,
    character: data?.character,
  };
};