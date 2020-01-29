import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import useDebounce from 'App/use/useDebounce';
import { useMutation } from '@apollo/react-hooks';
import { UpdateWoundsResult, UpdateWoundsVariables, UPDATE_WOUNDS } from 'Character/graphql/Mutation/UpdateWounds.mutation';
import { UPDATE_STRAIN, UpdateStrainVariables, UpdateStrainResult } from 'Character/graphql/Mutation/UpdateStrain.mutation';
import { Threshold } from 'generated/graphql';

export function useWounds(id: string, initialWounds?: Threshold): [Threshold, Dispatch<SetStateAction<number>>] {
  const didMountRef = useRef(false);
  const [wounds, setWounds] = useState(initialWounds?.current ?? 0);
  const debouncedWounds = useDebounce(wounds, 1000);
  const [updateWounds] = useMutation<UpdateWoundsResult, UpdateWoundsVariables>(UPDATE_WOUNDS);
  
  useEffect(() => {
    if (didMountRef.current) {
      if (debouncedWounds !== initialWounds?.current) {
        updateWounds({
          variables: {
            id,
            wounds: debouncedWounds,
          }
        });
      }
    } else {
      didMountRef.current = true;
    }
  }, [debouncedWounds, id, updateWounds, initialWounds]);

  return [
    { 
      id: initialWounds?.id ?? 'wounds',
      current: wounds,
      threshold: initialWounds?.threshold ?? 0,
    },
    setWounds,
  ];
}


export function useStrain(id: string, initialStrain?: Threshold): [Threshold, Dispatch<SetStateAction<number>>] {
  const didMountRef = useRef(false);
  const [strain, setWounds] = useState(initialStrain?.current ?? 0);
  const debouncedStrain = useDebounce(strain, 1000);
  const [updateStrain] = useMutation<UpdateStrainResult, UpdateStrainVariables>(UPDATE_STRAIN);
  
  useEffect(() => {
    if (didMountRef.current) {
      if (debouncedStrain !== initialStrain?.current) {
        updateStrain({
          variables: {
            id,
            strain: debouncedStrain,
          }
        });
      }
    } else {
      didMountRef.current = true;
    }
  }, [debouncedStrain, id, updateStrain, initialStrain]);

  return [
    { 
      id: initialStrain?.id ?? 'strain',
      current: strain,
      threshold: initialStrain?.threshold ?? 0,
    },
    setWounds,
  ];
}